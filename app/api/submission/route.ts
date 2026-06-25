import { after, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { SUBMISSION_EMAIL } from "@/lib/submission"
import { generateSubmissionReference, MAX_AUTHORS, type SubmissionDraft } from "@/lib/submission-form"
import {
  buildSubmissionEmailHtml,
  buildSubmissionEmailText,
  buildConfirmationEmailHtml,
  buildConfirmationEmailText,
} from "@/lib/submission-transmit"
import { createClient } from "@/lib/supabase/server"
import { SUBMISSION_ALREADY_SENT, toStoredSubmission } from "@/lib/submission-record"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 })
    }

    const formData = await request.formData()
    const draftJson = formData.get("draft") as string
    const pdfFile = formData.get("pdf") as File | null
    const reference = (formData.get("reference") as string) || generateSubmissionReference()

    if (!draftJson) {
      return NextResponse.json({ error: "Données de soumission manquantes" }, { status: 400 })
    }

    const draft = JSON.parse(draftJson) as SubmissionDraft

    if (draft.authors.length > MAX_AUTHORS) {
      return NextResponse.json(
        { error: `Maximum ${MAX_AUTHORS} auteurs par soumission.` },
        { status: 400 }
      )
    }

    const { data: existing } = await supabase
      .from("submissions")
      .select("reference, draft, status, created_at")
      .eq("user_id", user.id)
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        {
          error: SUBMISSION_ALREADY_SENT,
          reference: existing.reference,
          submission: toStoredSubmission(existing),
        },
        { status: 409 }
      )
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("GMAIL_USER ou GMAIL_APP_PASSWORD non configurés")
      return NextResponse.json({ error: "Service d'email non configuré" }, { status: 500 })
    }

    const { error: insertError } = await supabase.from("submissions").insert({
      user_id: user.id,
      reference,
      draft,
      status: "pending",
      pdf_url: null,
    })

    if (insertError) {
      if (insertError.code === "23505") {
        const { data: raceExisting } = await supabase
          .from("submissions")
          .select("reference, draft, status, created_at")
          .eq("user_id", user.id)
          .maybeSingle()

        return NextResponse.json(
          {
            error: SUBMISSION_ALREADY_SENT,
            reference: raceExisting?.reference,
            submission: raceExisting ? toStoredSubmission(raceExisting) : undefined,
          },
          { status: 409 }
        )
      }

      console.error("Erreur enregistrement soumission:", insertError)
      return NextResponse.json(
        { error: "Impossible d'enregistrer la soumission" },
        { status: 500 }
      )
    }

    const attachments = []
    if (pdfFile) {
      const buffer = Buffer.from(await pdfFile.arrayBuffer())
      attachments.push({
        filename: pdfFile.name,
        content: buffer,
      })
    }

    const mailOptions = {
      from: `"RIPU26" <${process.env.GMAIL_USER}>`,
      to: [SUBMISSION_EMAIL],
      replyTo: draft.authors?.[0]?.email || SUBMISSION_EMAIL,
      subject: `[RIPU26] Soumission ${reference} - ${draft.title?.trim()?.slice(0, 60) || "Nouvelle soumission"}`,
      html: buildSubmissionEmailHtml(draft, reference),
      text: buildSubmissionEmailText(draft, reference),
      attachments,
    }

    await transporter.sendMail(mailOptions)

    const authorEmail = draft.authors?.[0]?.email?.trim()
    if (authorEmail) {
      after(async () => {
        try {
          await transporter.sendMail({
            from: `"RIPU26" <${process.env.GMAIL_USER}>`,
            to: [authorEmail],
            subject: `Confirmation - Soumission RIPU26 ${reference}`,
            html: buildConfirmationEmailHtml(draft, reference),
            text: buildConfirmationEmailText(draft, reference),
          })
        } catch (confirmError) {
          console.error("Erreur lors de l'envoi de la confirmation (arrière-plan):", confirmError)
        }
      })
    }

    return NextResponse.json({
      reference,
      success: true,
      message: "Soumission envoyée avec succès",
    })
  } catch (error) {
    console.error("Erreur générale:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue lors de la soumission" },
      { status: 500 }
    )
  }
}
