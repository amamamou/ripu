// app/api/submission/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { SUBMISSION_EMAIL } from '@/lib/submission'
import { generateSubmissionReference } from '@/lib/submission-form'
import { 
  buildSubmissionEmailHtml, 
  buildSubmissionEmailText,
  buildConfirmationEmailHtml,
  buildConfirmationEmailText
} from '@/lib/submission-transmit'

// Configuration du transporteur Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const draftJson = formData.get('draft') as string
    const pdfFile = formData.get('pdf') as File | null
    const reference = formData.get('reference') as string || generateSubmissionReference()

    if (!draftJson) {
      return NextResponse.json(
        { error: 'Données de soumission manquantes' },
        { status: 400 }
      )
    }

    const draft = JSON.parse(draftJson)

    // Vérification des identifiants Gmail
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('GMAIL_USER ou GMAIL_APP_PASSWORD non configurés')
      return NextResponse.json(
        { error: 'Service d\'email non configuré' },
        { status: 500 }
      )
    }

    // Vérification du transporteur
    try {
      await transporter.verify()
      console.log('✅ Transporteur Gmail configuré avec succès')
    } catch (verifyError) {
      console.error('❌ Erreur de vérification du transporteur:', verifyError)
      return NextResponse.json(
        { error: 'Configuration email invalide' },
        { status: 500 }
      )
    }

    // Préparation du PDF pour l'attachement
    const attachments = []
    if (pdfFile) {
      const buffer = Buffer.from(await pdfFile.arrayBuffer())
      attachments.push({
        filename: pdfFile.name,
        content: buffer,
      })
    }

    // 1. Envoi de l'email à l'équipe
    const mailOptions = {
      from: `"RIPU26" <${process.env.GMAIL_USER}>`,
      to: [SUBMISSION_EMAIL],
      replyTo: draft.authors?.[0]?.email || SUBMISSION_EMAIL,
      subject: `[RIPU26] Soumission ${reference} - ${draft.title?.trim()?.slice(0, 60) || 'Nouvelle soumission'}`,
      html: buildSubmissionEmailHtml(draft, reference),
      text: buildSubmissionEmailText(draft, reference),
      attachments: attachments,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email de soumission envoyé:', info.messageId)

    // 2. Envoi de la confirmation à l'auteur correspondant
    if (draft.authors && draft.authors.length > 0) {
      const correspondingAuthor = draft.authors[0]
      try {
        const confirmOptions = {
          from: `"RIPU26" <${process.env.GMAIL_USER}>`,
          to: [correspondingAuthor.email],
          subject: `Confirmation - Soumission RIPU26 ${reference}`,
          html: buildConfirmationEmailHtml(draft, reference),
          text: buildConfirmationEmailText(draft, reference),
        }
        await transporter.sendMail(confirmOptions)
        console.log('✅ Email de confirmation envoyé à:', correspondingAuthor.email)
      } catch (confirmError) {
        console.error('❌ Erreur lors de l\'envoi de la confirmation:', confirmError)
        // Ne pas bloquer la soumission si la confirmation échoue
      }
    }

    return NextResponse.json({ 
      reference, 
      success: true,
      message: 'Soumission envoyée avec succès'
    })
  } catch (error) {
    console.error('❌ Erreur générale:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la soumission' },
      { status: 500 }
    )
  }
}