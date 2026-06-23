import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Transporteur Gmail unique — pour l'email équipe ET la confirmation utilisateur
const gmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

// =======================================================================
// LAYOUT PARTAGÉ (monochrome, div-based — no tables)
// =======================================================================

const FONT_STACK =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"

// URL publique du logo. Sur Vercel : mets le fichier dans /public/email/...
// puis utilise l'URL de PRODUCTION (domaine final, pas une preview *-git-xyz.vercel.app).
const FOOTER_LOGO_URL = "https://ton-domaine.com/email/logo-footer.png"
const FOOTER_LOGO_WIDTH = 96 // px

function escapeHtml(value: string | undefined | null): string {
  if (!value) return ""
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

function wrapEmail(bodyHtml: string, preheader: string): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>RIPU26</title>
</head>
<body style="margin:0;padding:0;background-color:#ffffff;color:#111111;font-family:${FONT_STACK};">
  <span style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    ${escapeHtml(preheader)}
  </span>

  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">

    <!-- Header -->
    <div style="border-bottom:1px solid #111111;padding-bottom:16px;margin-bottom:32px;">
      <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#666666;">
        RIPU26
      </div>
      <div style="font-size:15px;color:#111111;margin-top:4px;">
        Rencontres Internationales Pédagogiques Universitaires
      </div>
    </div>

    ${bodyHtml}

    <!-- Footer -->
    <div style="border-top:1px solid #dddddd;margin-top:40px;padding-top:24px;text-align:center;">
      <img
        src="${FOOTER_LOGO_URL}"
        alt="RIPU26"
        width="${FOOTER_LOGO_WIDTH}"
        style="display:block;margin:0 auto 16px;width:${FOOTER_LOGO_WIDTH}px;max-width:100%;height:auto;filter:grayscale(100%);opacity:0.85;border:0;"
      />
      <div style="font-size:12px;color:#999999;line-height:1.6;">
        RIPU26 &middot; Sousse, Tunisie &middot; 30&ndash;31 octobre 2026<br/>
        Cet e-mail a été généré automatiquement depuis le formulaire de contact.
      </div>
    </div>

  </div>
</body>
</html>
`
}

function fieldRow(label: string, value: string): string {
  return `
    <div style="margin-bottom:14px;">
      <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#999999;margin-bottom:2px;">
        ${escapeHtml(label)}
      </div>
      <div style="font-size:14px;color:#111111;line-height:1.5;">
        ${value}
      </div>
    </div>
  `
}

function sectionTitle(title: string): string {
  return `
    <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#666666;margin:32px 0 12px;padding-bottom:6px;border-bottom:1px solid #dddddd;">
      ${escapeHtml(title)}
    </div>
  `
}

// =======================================================================
// TEMPLATE POUR L'ÉQUIPE
// =======================================================================

function buildTeamEmailHtml(params: {
  name: string
  email: string
  subjectLabel: string
  message: string
  currentDate: string
}): string {
  const { name, email, subjectLabel, message, currentDate } = params

  const body = `
    <p style="font-size:13px;letter-spacing:1px;text-transform:uppercase;color:#666666;margin:0 0 4px;">
      Nouveau message
    </p>
    <p style="font-size:14px;color:#111111;margin:0 0 28px;">
      Reçu le ${escapeHtml(currentDate)}
    </p>

    <div style="border:1px solid #dddddd;padding:20px 24px;margin-bottom:24px;">
      ${fieldRow("Expéditeur", escapeHtml(name))}
      ${fieldRow("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#111111;text-decoration:underline;">${escapeHtml(email)}</a>`)}
      ${fieldRow("Sujet", escapeHtml(subjectLabel))}
    </div>

    ${sectionTitle("Message")}
    <div style="font-size:14px;color:#333333;line-height:1.7;white-space:pre-wrap;">
      ${escapeHtml(message)}
    </div>

    <p style="font-size:13px;color:#666666;margin-top:32px;">
      Action requise : répondre à
      <a href="mailto:${escapeHtml(email)}" style="color:#111111;text-decoration:underline;">${escapeHtml(email)}</a>
    </p>
  `

  return wrapEmail(body, `Nouveau message — ${subjectLabel} de ${name}`)
}

function buildTeamEmailText(params: {
  name: string
  email: string
  subjectLabel: string
  message: string
  currentDate: string
}): string {
  const { name, email, subjectLabel, message, currentDate } = params
  return `
Nouveau message - RIPU26
========================

Expéditeur: ${name}
Email: ${email}
Sujet: ${subjectLabel}
Date: ${currentDate}

Message:
${message}

---
Action requise: Répondre à ${email}
  `
}

// =======================================================================
// TEMPLATE DE CONFIRMATION POUR L'UTILISATEUR
// =======================================================================

function buildUserEmailHtml(params: {
  name: string
  subjectLabel: string
  message: string
  currentDate: string
  reference: string
}): string {
  const { name, subjectLabel, message, currentDate, reference } = params

  const body = `
    <p style="font-size:15px;line-height:1.6;color:#111111;margin:0 0 20px;">
      Bonjour ${escapeHtml(name)},
    </p>

    <p style="font-size:14px;line-height:1.7;color:#333333;margin:0 0 28px;">
      Nous accusons réception de votre message concernant « ${escapeHtml(subjectLabel)} ».
      Nous vous répondrons sous 48 heures ouvrées.
    </p>

    <div style="border:1px solid #dddddd;padding:20px 24px;margin-bottom:24px;">
      <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#666666;margin-bottom:16px;">
        Récapitulatif
      </div>
      ${fieldRow("Référence", escapeHtml(reference))}
      ${fieldRow("Sujet", escapeHtml(subjectLabel))}
      ${fieldRow("Date de réception", escapeHtml(currentDate))}
      ${fieldRow("Délai de réponse", "Sous 48 heures ouvrées")}
    </div>

    <div style="margin-bottom:8px;">
      <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#999999;margin-bottom:4px;">
        Votre message
      </div>
      <div style="font-size:13px;color:#333333;line-height:1.7;white-space:pre-wrap;">
        ${escapeHtml(message)}
      </div>
    </div>

    ${sectionTitle("Liens utiles")}
    <div style="font-size:13px;line-height:2;">
      <a href="https://ripusousse.com/program" style="color:#111111;text-decoration:underline;">Programme</a><br/>
      <a href="https://ripusousse.com/authors" style="color:#111111;text-decoration:underline;">Guide des auteurs</a><br/>
      <a href="https://ripusousse.com/registration" style="color:#111111;text-decoration:underline;">Inscription</a><br/>
      <a href="https://ripusousse.com" style="color:#111111;text-decoration:underline;">Site web</a>
    </div>

    <p style="font-size:12px;color:#999999;margin-top:32px;">
      Ceci est un message automatique. Merci de ne pas y répondre directement.
    </p>
  `

  return wrapEmail(body, `Confirmation — ${subjectLabel}`)
}

function buildUserEmailText(params: {
  name: string
  subjectLabel: string
  message: string
  currentDate: string
  reference: string
}): string {
  const { name, subjectLabel, message, currentDate, reference } = params
  return `
Confirmation - RIPU26
=====================

Bonjour ${name},

Nous accusons réception de votre message concernant "${subjectLabel}".

Récapitulatif:
${message}

Date de réception: ${currentDate}
Délai de réponse: Sous 48 heures ouvrées
Référence: ${reference}

---
RIPU26 · Sousse, Tunisie · 30–31 octobre 2026
  `
}

// =======================================================================
// HANDLER
// =======================================================================

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    const subjectMap: Record<string, string> = {
      submission: 'Soumission',
      registration: 'Inscription',
      sponsorship: 'Partenariat',
      general: 'Autre',
    }
    const subjectLabel = subjectMap[subject] || subject

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('GMAIL_USER ou GMAIL_APP_PASSWORD non configurés')
      return NextResponse.json(
        { error: "Service d'email non configuré" },
        { status: 500 }
      )
    }

    const currentDate = new Date().toLocaleString('fr-FR', {
      timeZone: 'Africa/Tunis',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    const reference = `RIPU26-${Date.now().toString().slice(-6)}`

    console.log("📧 1. Envoi à l'équipe via Nodemailer/Gmail...")

    const teamResult = await gmailTransporter.sendMail({
      from: `RIPU26 <${process.env.GMAIL_USER}>`,
      to: 'ripusousse@gmail.com',
      replyTo: email,
      subject: `[RIPU26] Nouveau message - ${subjectLabel} de ${name}`,
      html: buildTeamEmailHtml({ name, email, subjectLabel, message, currentDate }),
      text: buildTeamEmailText({ name, email, subjectLabel, message, currentDate }),
    })

    console.log('✅ Email équipe envoyé, ID:', teamResult?.messageId)

    console.log("📧 2. Envoi de la confirmation à l'utilisateur via Nodemailer/Gmail...")
    console.log(`📧 Destinataire: ${email}`)

    let confirmationSent = false
    try {
      const userResult = await gmailTransporter.sendMail({
        from: `RIPU26 <${process.env.GMAIL_USER}>`,
        to: email,
        subject: 'Confirmation - Votre message à RIPU26 a été reçu',
        html: buildUserEmailHtml({ name, subjectLabel, message, currentDate, reference }),
        text: buildUserEmailText({ name, subjectLabel, message, currentDate, reference }),
      })
      confirmationSent = true
      console.log('✅ Email confirmation envoyé à:', email, 'ID:', userResult?.messageId)
    } catch (confirmError) {
      // L'erreur de confirmation n'empêche pas l'envoi principal
      console.error("❌ Erreur lors de l'envoi de la confirmation:", confirmError)
    }

    return NextResponse.json(
      {
        message: 'Votre message a été envoyé avec succès',
        success: true,
        confirmationSent,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Erreur générale:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}