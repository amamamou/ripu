// app/api/submission/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { SUBMISSION_EMAIL } from '@/lib/submission'
import { generateSubmissionReference } from '@/lib/submission-form'
import { buildSubmissionEmailHtml, buildSubmissionEmailText } from '@/lib/submission-transmit'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const draftJson = formData.get('draft') as string
    const pdfFile = formData.get('pdf') as File | null

    if (!draftJson) {
      return NextResponse.json(
        { error: 'Données de soumission manquantes' },
        { status: 400 }
      )
    }

    const draft = JSON.parse(draftJson)
    const reference = generateSubmissionReference()

    // Vérification de la clé API
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY non configurée')
      return NextResponse.json(
        { error: 'Service d\'email non configuré' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Préparation du PDF pour l'attachement
    let attachment = undefined
    if (pdfFile) {
      const buffer = Buffer.from(await pdfFile.arrayBuffer())
      attachment = {
        filename: pdfFile.name,
        content: buffer.toString('base64'),
      }
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'RIPU26 <onboarding@resend.dev>',
      to: [SUBMISSION_EMAIL],
      replyTo: draft.authors[0]?.email || SUBMISSION_EMAIL,
      subject: `[RIPU26] Soumission ${reference} - ${draft.title.trim().slice(0, 60)}`,
      html: buildSubmissionEmailHtml(draft, reference),
      text: buildSubmissionEmailText(draft, reference),
      attachments: attachment ? [attachment] : undefined,
    })

    if (error) {
      console.error('Erreur Resend:', error)
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de la soumission" },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      reference, 
      success: true,
      message: 'Soumission envoyée avec succès'
    })
  } catch (error) {
    console.error('Erreur générale:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la soumission' },
      { status: 500 }
    )
  }
}