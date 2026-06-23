// lib/submission-transmit.ts
import {
  buildSubmissionMailtoFromDraft,
  generateSubmissionReference,
  type SubmissionDraft,
} from "@/lib/submission-form"
import { isSubmissionClosed } from "@/lib/submission"

// --- TEMPLATES EMAIL ---

export function buildSubmissionEmailHtml(draft: SubmissionDraft, reference: string): string {
  const currentDate = new Date().toLocaleString('fr-FR', {
    timeZone: 'Africa/Tunis',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  const authorsList = draft.authors.map((author, index) => {
    const isPresenting = author.id === draft.presentingAuthorId
    const isCorresponding = index === 0
    const roles = []
    if (isPresenting) roles.push('Présentateur')
    if (isCorresponding) roles.push('Auteur correspondant')
    
    return `
      <div style="margin-bottom: 12px; padding: 10px; background: #f8f7ff; border-radius: 6px; border-left: 3px solid #7b1fa2;">
        <p style="margin: 0; font-weight: 600; color: #1a202c;">
          ${index + 1}. ${author.firstName} ${author.lastName}
          ${author.orcid ? ` <span style="font-weight: 400; color: #718096; font-size: 12px;">(ORCID: ${author.orcid})</span>` : ''}
        </p>
        <p style="margin: 4px 0 0; font-size: 13px; color: #4a5568;">
          📧 ${author.email}
        </p>
        ${roles.length ? `<p style="margin: 4px 0 0; font-size: 12px; color: #7b1fa2;">${roles.join(' · ')}</p>` : ''}
      </div>
    `
  }).join('')

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouvelle soumission - RIPU26</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f7fa; color: #1a202c;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 0;">
          <tr>
            <td align="center">
              <table width="700" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); overflow: hidden;">
                <tr>
                  <td style="background: linear-gradient(135deg, #4a148c 0%, #7b1fa2 35%, #9c27b0 65%, #ce93d8 100%); padding: 40px 40px 30px; text-align: center;">
                    <div style="display: inline-block; background: rgba(255,255,255,0.12); padding: 4px 20px; border-radius: 20px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.1);">
                      <span style="color: #e1bee7; font-size: 11px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">Nouvelle soumission</span>
                    </div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">RIPU26</h1>
                    <p style="margin: 10px 0 0; color: #e1bee7; font-size: 15px; font-weight: 300; letter-spacing: 0.3px;">Rencontres Internationales Pédagogiques Universitaires</p>
                    <div style="margin: 12px auto 0; width: 60px; height: 2px; background: rgba(255,255,255,0.3); border-radius: 2px;"></div>
                    <p style="margin: 12px 0 0; color: #ce93d8; font-size: 13px; font-weight: 300; letter-spacing: 0.5px;">Sousse, Tunisie · 30–31 octobre 2026</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 40px 40px 30px;">
                    <div style="background: #ede7f6; padding: 15px 20px; border-radius: 8px; margin-bottom: 25px; border: 1px solid #d1c4e9;">
                      <p style="margin: 0; font-size: 13px; color: #4a148c;">
                        <strong>📌 Référence de soumission :</strong> <span style="font-size: 16px; font-weight: 700;">${reference}</span>
                      </p>
                      <p style="margin: 4px 0 0; font-size: 12px; color: #7b1fa2;">Reçue le ${currentDate}</p>
                    </div>

                    <div style="border-bottom: 2px solid #ede7f6; padding-bottom: 15px; margin-bottom: 20px;">
                      <h2 style="margin: 0; font-size: 16px; color: #4a148c;">📄 Communication</h2>
                    </div>
                    <div style="margin-bottom: 20px;">
                      <p style="margin: 0; font-size: 13px; color: #4a5568; font-weight: 600;">Titre</p>
                      <p style="margin: 4px 0 0; font-size: 18px; font-weight: 600; color: #1a202c;">${draft.title || 'Titre non spécifié'}</p>
                    </div>
                    <div style="margin-bottom: 25px;">
                      <p style="margin: 0; font-size: 13px; color: #4a5568; font-weight: 600;">Abstract</p>
                      <div style="background: #f8f7ff; padding: 15px; border-radius: 6px; margin-top: 4px; border-left: 4px solid #7b1fa2;">
                        <p style="margin: 0; font-size: 14px; color: #2d3748; line-height: 1.7; white-space: pre-wrap;">${draft.abstract || 'Abstract non fourni'}</p>
                      </div>
                    </div>

                    <div style="border-bottom: 2px solid #ede7f6; padding-bottom: 15px; margin-bottom: 20px;">
                      <h2 style="margin: 0; font-size: 16px; color: #4a148c;">👥 Auteurs</h2>
                    </div>
                    ${authorsList}

                    <div style="border-bottom: 2px solid #ede7f6; padding-bottom: 15px; margin-bottom: 20px;">
                      <h2 style="margin: 0; font-size: 16px; color: #4a148c;">📎 Document PDF</h2>
                    </div>
                    <div style="background: #ede7f6; padding: 15px; border-radius: 6px;">
                      <p style="margin: 0; font-size: 14px; color: #2d3748;">
                        📄 ${draft.pdfMeta?.fileName || 'Fichier attaché'}
                        ${draft.pdfMeta?.fileSize ? ` (${(draft.pdfMeta.fileSize / 1024 / 1024).toFixed(1)} Mo)` : ''}
                      </p>
                    </div>

                    ${draft.remarks?.trim() ? `
                      <div style="border-bottom: 2px solid #ede7f6; padding-bottom: 15px; margin-bottom: 20px; margin-top: 30px;">
                        <h2 style="margin: 0; font-size: 16px; color: #4a148c;">📝 Remarques</h2>
                      </div>
                      <div style="background: #f8f7ff; padding: 15px; border-radius: 6px;">
                        <p style="margin: 0; font-size: 14px; color: #2d3748; white-space: pre-wrap;">${draft.remarks}</p>
                      </div>
                    ` : ''}
                  </td>
                </tr>
                <tr>
                  <td style="background: #f8f7ff; padding: 25px 40px; border-top: 1px solid #ede7f6; text-align: center;">
                    <p style="margin: 0; font-size: 12px; color: #718096;">
                      © 2026 RIPU26 · Tous droits réservés<br>
                      <span style="color: #a0aec0;">Cette soumission a été transmise via l'espace de soumission du site</span>
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
}

export function buildSubmissionEmailText(draft: SubmissionDraft, reference: string): string {
  const currentDate = new Date().toLocaleString('fr-FR', {
    timeZone: 'Africa/Tunis',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  const authorsList = draft.authors.map((author, index) => {
    const isPresenting = author.id === draft.presentingAuthorId
    const isCorresponding = index === 0
    const roles = []
    if (isPresenting) roles.push('Présentateur')
    if (isCorresponding) roles.push('Auteur correspondant')
    
    return `${index + 1}. ${author.firstName} ${author.lastName}${author.orcid ? ` (ORCID: ${author.orcid})` : ''}
   Email: ${author.email}
   ${roles.length ? `Rôle: ${roles.join(', ')}` : ''}`
  }).join('\n\n')

  return `
NOUVELLE SOUMISSION - RIPU26
============================

Référence: ${reference}
Date: ${currentDate}

--- COMMUNICATION ---
Titre: ${draft.title || 'Titre non spécifié'}

Abstract:
${draft.abstract || 'Abstract non fourni'}

--- AUTEURS ---
${authorsList}

--- DOCUMENT ---
${draft.pdfMeta?.fileName || 'Fichier attaché'}${draft.pdfMeta?.fileSize ? ` (${(draft.pdfMeta.fileSize / 1024 / 1024).toFixed(1)} Mo)` : ''}

${draft.remarks?.trim() ? `
--- REMARQUES ---
${draft.remarks}
` : ''}
---
Cette soumission a été transmise via l'espace de soumission RIPU26.
Sousse, Tunisie · 30–31 octobre 2026
  `
}

// --- FONCTION PRINCIPALE DE TRANSMISSION ---

export async function transmitSubmission(draft: SubmissionDraft, pdfFile: File | null): Promise<string> {
  if (isSubmissionClosed()) {
    throw new Error("SUBMISSION_CLOSED")
  }

  const reference = generateSubmissionReference()

  // Créer un FormData pour l'API
  const formData = new FormData()
  formData.append('draft', JSON.stringify(draft))
  formData.append('reference', reference)
  
  if (pdfFile) {
    formData.append('pdf', pdfFile)
  }

  try {
    const response = await fetch('/api/submission', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Erreur lors de la soumission')
    }

    const data = await response.json()
    return data.reference || reference
  } catch (error) {
    console.error('Erreur de soumission:', error)
    throw error
  }
}