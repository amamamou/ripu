import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import nodemailer from 'nodemailer'

const resend = new Resend(process.env.RESEND_API_KEY)

// Transporteur Gmail pour l'email de confirmation à l'utilisateur
const gmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

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

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY non configurée')
      return NextResponse.json(
        { error: 'Service d\'email non configuré' },
        { status: 500 }
      )
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('GMAIL_USER ou GMAIL_APP_PASSWORD non configurés')
      // On ne bloque pas l'envoi principal, juste la confirmation ne pourra pas partir
    }

    const currentDate = new Date().toLocaleString('fr-FR', { 
      timeZone: 'Africa/Tunis',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    // Template professionnel pour l'équipe - Version Violet
    const teamEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau message - RIPU26</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f7fa; color: #1a202c;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden;">
                  <tr>
                    <td style="background: linear-gradient(135deg, #4a148c 0%, #7b1fa2 35%, #9c27b0 65%, #ce93d8 100%); padding: 45px 40px 35px; text-align: center;">
                      <div style="display: inline-block; background: rgba(255,255,255,0.12); padding: 4px 20px; border-radius: 20px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.1);">
                        <span style="color: #e1bee7; font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">Conférence internationale</span>
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">RIPU26</h1>
                      <p style="margin: 10px 0 0; color: #e1bee7; font-size: 15px; font-weight: 300; letter-spacing: 0.3px;">Rencontres Internationales Pédagogiques Universitaires</p>
                      <div style="margin: 12px auto 0; width: 60px; height: 2px; background: rgba(255,255,255,0.3); border-radius: 2px;"></div>
                      <p style="margin: 12px 0 0; color: #ce93d8; font-size: 13px; font-weight: 300; letter-spacing: 0.5px;">Sousse, Tunisie · 30–31 octobre 2026</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px 40px 30px;">
                      <div style="border-bottom: 2px solid #ede7f6; padding-bottom: 20px; margin-bottom: 25px;">
                        <p style="margin: 0; font-size: 20px; font-weight: 600; color: #1a202c;">📬 Nouveau message reçu</p>
                        <p style="margin: 5px 0 0; font-size: 13px; color: #718096;">Reçu le ${currentDate}</p>
                      </div>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #4a5568; width: 120px; font-weight: 600;">Expéditeur</td>
                          <td style="padding: 6px 0; font-size: 13px; color: #2d3748;">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #4a5568; font-weight: 600;">Email</td>
                          <td style="padding: 6px 0; font-size: 13px; color: #2d3748;">
                            <a href="mailto:${email}" style="color: #7b1fa2; text-decoration: none; font-weight: 500;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #4a5568; font-weight: 600;">Sujet</td>
                          <td style="padding: 6px 0; font-size: 13px; color: #2d3748;">
                            <span style="background: #ede7f6; padding: 2px 12px; border-radius: 12px; font-size: 12px; font-weight: 500; color: #7b1fa2;">${subjectLabel}</span>
                          </td>
                        </tr>
                      </table>
                      <div style="background: #f8f7ff; border-left: 4px solid #7b1fa2; padding: 18px 20px; border-radius: 6px; margin-bottom: 25px;">
                        <p style="margin: 0 0 8px; font-size: 11px; font-weight: 600; color: #4a148c; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                        <p style="margin: 0; font-size: 14px; color: #2d3748; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                      </div>
                      <div style="background: #ede7f6; padding: 15px 20px; border-radius: 8px; border: 1px solid #d1c4e9;">
                        <p style="margin: 0; font-size: 12px; color: #4a148c;">
                          <strong>📎 Action requise :</strong> Répondre à 
                          <a href="mailto:${email}" style="color: #7b1fa2; text-decoration: none; font-weight: 600;">${email}</a>
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background: #f8f7ff; padding: 25px 40px; border-top: 1px solid #ede7f6; text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #718096;">
                        © 2026 RIPU26 · Tous droits réservés<br>
                        <span style="color: #a0aec0;">Cet email a été envoyé depuis le formulaire de contact du site</span>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    // Template de confirmation pour l'utilisateur - Version Violet
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmation - RIPU26</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f7fa; color: #1a202c;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden;">
                  <tr>
                    <td style="background: linear-gradient(135deg, #4a148c 0%, #7b1fa2 35%, #9c27b0 65%, #ce93d8 100%); padding: 45px 40px 35px; text-align: center;">
                      <div style="display: inline-block; background: rgba(255,255,255,0.15); padding: 10px 20px; border-radius: 50px; margin-bottom: 15px; border: 1px solid rgba(255,255,255,0.15);">
                        <span style="color: #ce93d8; font-size: 32px;">✓</span>
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">Message confirmé</h1>
                      <p style="margin: 8px 0 0; color: #e1bee7; font-size: 15px; font-weight: 300;">Nous avons bien reçu votre demande</p>
                      <div style="margin: 15px auto 0; width: 40px; height: 2px; background: rgba(255,255,255,0.3); border-radius: 2px;"></div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px 40px 30px;">
                      <p style="margin: 0 0 5px; font-size: 18px; color: #1a202c; font-weight: 500;">Bonjour ${name},</p>
                      <p style="margin: 10px 0 20px; font-size: 14px; color: #4a5568; line-height: 1.6;">
                        Nous accusons réception de votre message concernant 
                        <strong style="color: #7b1fa2;">« ${subjectLabel} »</strong>.
                      </p>
                      <div style="background: #f8f7ff; border-left: 4px solid #7b1fa2; padding: 15px 20px; border-radius: 6px; margin-bottom: 25px;">
                        <p style="margin: 0 0 6px; font-size: 11px; font-weight: 600; color: #4a148c; text-transform: uppercase; letter-spacing: 0.5px;">Récapitulatif de votre message</p>
                        <p style="margin: 0; font-size: 13px; color: #2d3748; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #4a5568; width: 140px;">📅 Date de réception</td>
                          <td style="padding: 6px 0; font-size: 13px; color: #2d3748; font-weight: 500;">${currentDate}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #4a5568;">⏱️ Délai de réponse</td>
                          <td style="padding: 6px 0; font-size: 13px; color: #2d3748; font-weight: 500;">Sous 48 heures ouvrées</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 13px; color: #4a5568;">📧 Numéro de référence</td>
                          <td style="padding: 6px 0; font-size: 13px; color: #2d3748; font-weight: 500;">RIPU26-${Date.now().toString().slice(-6)}</td>
                        </tr>
                      </table>
                      <div style="background: #ede7f6; padding: 20px; border-radius: 8px; border: 1px solid #d1c4e9; margin-bottom: 25px;">
                        <p style="margin: 0 0 12px; font-size: 11px; font-weight: 600; color: #4a148c; text-transform: uppercase; letter-spacing: 0.5px;">Informations utiles</p>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 4px 0; font-size: 13px; color: #4a5568;">
                              <a href="https://ripusousse.com/program" style="color: #7b1fa2; text-decoration: none; font-weight: 500;">📋 Programme</a>
                            </td>
                            <td style="padding: 4px 0; font-size: 13px; color: #4a5568;">
                              <a href="https://ripusousse.com/authors" style="color: #7b1fa2; text-decoration: none; font-weight: 500;">📝 Guide des auteurs</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 4px 0; font-size: 13px; color: #4a5568;">
                              <a href="https://ripusousse.com/registration" style="color: #7b1fa2; text-decoration: none; font-weight: 500;">📌 Inscription</a>
                            </td>
                            <td style="padding: 4px 0; font-size: 13px; color: #4a5568;">
                              <a href="https://ripusousse.com" style="color: #7b1fa2; text-decoration: none; font-weight: 500;">🌐 Site web</a>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div style="background: #f8f7ff; padding: 20px; border-radius: 8px; text-align: center; border: 1px dashed #d1c4e9;">
                        <p style="margin: 0; font-size: 13px; color: #4a148c; font-style: italic; line-height: 1.6;">
                          "L'éducation est l'arme la plus puissante pour changer le monde."<br>
                          <span style="font-size: 12px; color: #7b1fa2;">— Nelson Mandela</span>
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background: #f8f7ff; padding: 25px 40px; border-top: 1px solid #ede7f6; text-align: center;">
                      <p style="margin: 0 0 5px; font-size: 13px; color: #2d3748; font-weight: 500; letter-spacing: 0.3px;">RIPU26 · Rencontres Internationales Pédagogiques Universitaires</p>
                      <p style="margin: 0 0 10px; font-size: 12px; color: #718096;">Sousse, Tunisie · 30–31 octobre 2026</p>
                      <div style="margin: 10px auto; width: 30px; height: 1px; background: #d1c4e9;"></div>
                      <p style="margin: 0; font-size: 11px; color: #a0aec0;">
                        Ceci est un message automatique. Merci de ne pas y répondre directement.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    console.log('📧 1. Envoi à l\'équipe via Resend...')

    // 1. Envoi à l'équipe via Resend
    const teamResult = await resend.emails.send({
      from: 'RIPU26 <onboarding@resend.dev>',
      to: ['ripu25sousse@gmail.com'],
      replyTo: email,
      subject: `[RIPU26] Nouveau message - ${subjectLabel} de ${name}`,
      html: teamEmailHtml,
      text: `
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
      `,
    })

    console.log('✅ Email équipe envoyé, ID:', teamResult?.id)

    console.log('📧 2. Envoi de la confirmation à l\'utilisateur via Gmail/Nodemailer...')
    console.log(`📧 Destinataire: ${email}`)

    // 2. Envoi de la confirmation à l'utilisateur via Gmail (Nodemailer)
    let confirmationSent = false
    try {
      if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
        throw new Error('Identifiants Gmail manquants (GMAIL_USER / GMAIL_APP_PASSWORD)')
      }

      const userResult = await gmailTransporter.sendMail({
        from: `RIPU26 <${process.env.GMAIL_USER}>`,
        to: email,
        subject: '✅ Confirmation - Votre message à RIPU26 a été reçu',
        html: userEmailHtml,
        text: `
Confirmation - RIPU26
=====================

Bonjour ${name},

Nous accusons réception de votre message concernant "${subjectLabel}".

Récapitulatif:
${message}

Date de réception: ${currentDate}
Délai de réponse: Sous 48 heures ouvrées
Référence: RIPU26-${Date.now().toString().slice(-6)}

---
RIPU26 · Sousse, Tunisie · 30–31 octobre 2026
        `,
      })
      confirmationSent = true
      console.log('✅ Email confirmation envoyé à:', email, 'ID:', userResult?.messageId)
    } catch (confirmError) {
      // L'erreur de confirmation n'empêche pas l'envoi principal
      console.error('❌ Erreur lors de l\'envoi de la confirmation:', confirmError)
      // On continue, l'email principal a été envoyé
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