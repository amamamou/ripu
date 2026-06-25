// lib/submission-transmit.ts
import {
  buildSubmissionMailtoFromDraft,
  generateSubmissionReference,
  type SubmissionDraft,
} from "@/lib/submission-form"
import { isSubmissionClosed } from "@/lib/submission"
import { SUBMISSION_ALREADY_SENT } from "@/lib/submission-record"

export class SubmissionAlreadySentError extends Error {
  reference: string

  constructor(reference: string) {
    super("Vous avez déjà transmis une communication.")
    this.name = "SubmissionAlreadySentError"
    this.reference = reference
  }
}

const FONT_STACK =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"


const FOOTER_LOGO_URL = "https://ripusousse.com/email/signature.png"
const FOOTER_LOGO_WIDTH = 96 

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
        Rencontre Internationale de la Pédagogie Universitaire
      </div>
    </div>

    ${bodyHtml}

    <!-- Footer -->
    <div style="border-top:1px solid #dddddd;margin-top:40px;padding-top:24px;text-align:center;">
      <img
  src="${FOOTER_LOGO_URL}"
  alt="RIPU26"
  style="
    display:block;
    width:100%;
    max-width:100%;
    height:auto;
    margin:0;
    border:0;
    filter:grayscale(100%);
    opacity:0.85;
  "
/>
      <div style="font-size:12px;color:#999999;line-height:1.6;">
        RIPU26 &middot; Sousse, Tunisie &middot; 30&ndash;31 octobre 2026<br/>
        Cet e-mail a été généré automatiquement par l'espace de soumission RIPU26.
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

export function buildConfirmationEmailHtml(
  draft: SubmissionDraft,
  reference: string
): string {
  const currentDate = new Date().toLocaleString("fr-FR", {
    timeZone: "Africa/Tunis",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const authorName = draft.authors?.[0]?.firstName
    ? `${draft.authors[0].firstName} ${draft.authors[0].lastName}`
    : "Cher(e) collègue"

  const typeLabels: Record<string, string> = {
    experience: "Retour d'expérience",
    wip: "Projet de recherche",
    article: "Papier",
  }

  const typeLabel =
    typeLabels[draft.submissionType] || draft.submissionType || "Non spécifié"

  const authorsNames = draft.authors
    .map((a) => `${a.firstName} ${a.lastName}`)
    .join(", ")

  const body = `
    <p style="font-size:15px;line-height:1.6;color:#111111;margin:0 0 20px;">
      Cher(e) ${escapeHtml(authorName)},
    </p>

    <p style="font-size:14px;line-height:1.7;color:#333333;margin:0 0 12px;">
      Nous vous remercions pour votre soumission à la Rencontre Internationale de la
      Pédagogie Universitaire (RIPU26).
    </p>

    <p style="font-size:14px;line-height:1.7;color:#333333;margin:0 0 28px;">
      Votre contribution a bien été enregistrée dans notre système et sera prochainement
      transmise au processus d'évaluation en double aveugle.
    </p>

    <div style="border:1px solid #dddddd;padding:20px 24px;margin-bottom:8px;">
      <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#666666;margin-bottom:16px;">
        Détails de la soumission
      </div>
      ${fieldRow("Identifiant", escapeHtml(reference))}
      ${fieldRow("Type de contribution", escapeHtml(typeLabel))}
      ${fieldRow("Titre", escapeHtml(draft.title) || "Titre non spécifié")}
      ${fieldRow("Auteur(s)", escapeHtml(authorsNames))}
      ${fieldRow("Date de soumission", escapeHtml(currentDate))}
    </div>

    <p style="font-size:14px;line-height:1.7;color:#333333;margin:28px 0 0;">
      Nous vous remercions de l'intérêt que vous portez à RIPU26 et nous réjouissons de
      votre participation.
    </p>

    <p style="font-size:14px;line-height:1.7;color:#111111;margin:24px 0 0;">
      Cordialement,<br/>
      Comité d'Organisation RIPU26
    </p>
  `

  return wrapEmail(body, `Confirmation de soumission — ${reference}`)
}

export function buildConfirmationEmailText(draft: SubmissionDraft, reference: string): string {
  const currentDate = new Date().toLocaleString('fr-FR', {
    timeZone: 'Africa/Tunis',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  const authorName = draft.authors?.[0]?.firstName 
    ? `${draft.authors[0].firstName} ${draft.authors[0].lastName}`
    : 'Cher(e) collègue'

  const typeLabels: Record<string, string> = {
    'experience': 'Retour d\'expérience',
    'wip': 'Projet de recherche',
    'article': 'Papier'
  }
  const typeLabel = typeLabels[draft.submissionType] || draft.submissionType || 'Non spécifié'
  const authorsNames = draft.authors.map(a => `${a.firstName} ${a.lastName}`).join(', ')

  return `
Cher(e) ${authorName},

Nous vous remercions pour votre soumission à la Rencontre Internationale de la Pédagogie Universitaire (RIPU26).

Votre contribution a bien été enregistrée dans notre système et sera prochainement transmise au processus d'évaluation en double aveugle.

Détails de la soumission
-----------------------------------------------------------------------
Identifiant de la contribution : ${reference}
Type de contribution : ${typeLabel}
Titre : ${draft.title || 'Titre non spécifié'}
Auteur(s) : ${authorsNames}
Date de soumission : ${currentDate}
-----------------------------------------------------------------------

Nous vous remercions de l'intérêt que vous portez à RIPU26 et nous réjouissons de votre participation.

Cordialement,

Comité d'Organisation RIPU26
`
}

// =======================================================================
// TEMPLATE POUR L'ÉQUIPE (notification interne)
// =======================================================================

export function buildSubmissionEmailHtml(draft: SubmissionDraft, reference: string): string {
  const currentDate = new Date().toLocaleString('fr-FR', {
    timeZone: 'Africa/Tunis',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  const typeLabels: Record<string, string> = {
    'experience': 'Retour d\'expérience',
    'wip': 'Projet de recherche',
    'article': 'Papier'
  }
  const typeLabel = typeLabels[draft.submissionType] || draft.submissionType || 'Non spécifié'

  const authorsHtml = draft.authors.map((author, index) => {
    const isPresenting = author.id === draft.presentingAuthorId
    const isCorresponding = index === 0
    const roles: string[] = []
    if (isPresenting) roles.push('Présentateur')
    if (isCorresponding) roles.push('Auteur correspondant')

    const primaryOrg = draft.organizations.find(org => org.id === author.primaryOrgId)
    const primaryOrgStr = primaryOrg
      ? `${primaryOrg.institution}${primaryOrg.department ? `, ${primaryOrg.department}` : ''}${primaryOrg.country ? `, ${primaryOrg.country}` : ''}`
      : 'Affiliation non définie'

    return `
      <div style="padding:14px 0;${index > 0 ? 'border-top:1px solid #eeeeee;' : ''}">
        <div style="font-size:14px;color:#111111;margin-bottom:4px;">
          ${index + 1}. ${escapeHtml(author.firstName)} ${escapeHtml(author.lastName)}
          ${author.orcid ? `<span style="color:#999999;font-size:12px;"> &middot; ORCID ${escapeHtml(author.orcid)}</span>` : ''}
        </div>
        <div style="font-size:13px;color:#666666;line-height:1.6;">
          ${escapeHtml(author.email)}${author.phone?.trim() ? `<br/>${escapeHtml(author.phone.trim())}` : ''}<br/>
          ${escapeHtml(primaryOrgStr)}
          ${roles.length ? `<br/><span style="color:#999999;">${escapeHtml(roles.join(', '))}</span>` : ''}
        </div>
      </div>
    `
  }).join('')

  const orgsHtml = draft.organizations.length
    ? draft.organizations.map(o =>
        `<div style="font-size:13px;color:#333333;line-height:1.7;">&middot; ${escapeHtml(o.institution)}${o.department ? `, ${escapeHtml(o.department)}` : ''}${o.country ? `, ${escapeHtml(o.country)}` : ''}</div>`
      ).join('')
    : `<div style="font-size:13px;color:#999999;">Aucune affiliation</div>`

  const fileInfo = draft.pdfMeta?.fileName
    ? `${escapeHtml(draft.pdfMeta.fileName)}${draft.pdfMeta.fileSize ? ` (${(draft.pdfMeta.fileSize / 1024 / 1024).toFixed(1)} Mo)` : ''}`
    : 'Fichier attaché'

  const body = `
    <p style="font-size:13px;letter-spacing:1px;text-transform:uppercase;color:#666666;margin:0 0 4px;">
      Nouvelle soumission
    </p>
    <p style="font-size:14px;color:#111111;margin:0 0 28px;">
      Référence <strong>${escapeHtml(reference)}</strong> &middot; reçue le ${escapeHtml(currentDate)}
    </p>

    ${sectionTitle("Configuration")}
    ${fieldRow("Type", escapeHtml(typeLabel))}
    ${fieldRow("Contribution étudiante", draft.studentContribution ? 'Oui' : 'Non')}

    ${sectionTitle("Communication")}
    ${fieldRow("Titre", escapeHtml(draft.title) || 'Titre non spécifié')}
    <div style="margin-bottom:14px;">
      <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#999999;margin-bottom:4px;">
        Abstract
      </div>
      <div style="font-size:13px;color:#333333;line-height:1.7;white-space:pre-wrap;">
        ${escapeHtml(draft.abstract) || 'Abstract non fourni'}
      </div>
    </div>

    ${sectionTitle("Thématiques")}
    ${fieldRow("Principal", escapeHtml(draft.primaryTopic) || 'Non spécifié')}
    ${fieldRow("Secondaire", escapeHtml(draft.secondaryTopic) || 'Non spécifié')}
    ${fieldRow("Mots-clés", escapeHtml(draft.keywords) || 'Non spécifié')}

    ${sectionTitle("Auteurs")}
    ${authorsHtml}

    ${sectionTitle("Affiliations")}
    ${orgsHtml}

    ${sectionTitle("Document")}
    <div style="font-size:13px;color:#333333;">${fileInfo}</div>

    ${draft.remarks?.trim() ? `
      ${sectionTitle("Remarques")}
      <div style="font-size:13px;color:#333333;line-height:1.7;white-space:pre-wrap;">${escapeHtml(draft.remarks)}</div>
    ` : ''}

    <p style="font-size:12px;color:#999999;margin-top:32px;">
      Soumission transmise via l'espace de soumission RIPU26.
    </p>
  `

  return wrapEmail(body, `Nouvelle soumission — ${reference}`)
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

  const typeLabels: Record<string, string> = {
    'experience': 'Retour d\'expérience',
    'wip': 'Projet de recherche',
    'article': 'Papier'
  }
  const typeLabel = typeLabels[draft.submissionType] || draft.submissionType || 'Non spécifié'

  const authorsList = draft.authors.map((author, index) => {
    const isPresenting = author.id === draft.presentingAuthorId
    const isCorresponding = index === 0
    const roles = []
    if (isPresenting) roles.push('Présentateur')
    if (isCorresponding) roles.push('Auteur correspondant')
    
    const primaryOrg = draft.organizations.find(org => org.id === author.primaryOrgId)
    const primaryOrgStr = primaryOrg 
      ? `${primaryOrg.institution}${primaryOrg.department ? `, ${primaryOrg.department}` : ''}${primaryOrg.country ? `, ${primaryOrg.country}` : ''}`
      : 'Affiliation non définie'
    
    return `${index + 1}. ${author.firstName} ${author.lastName}${author.orcid ? ` (ORCID: ${author.orcid})` : ''}
   Email: ${author.email}${author.phone?.trim() ? `\n   Téléphone: ${author.phone.trim()}` : ''}
   Affiliation: ${primaryOrgStr}
   ${roles.length ? `Rôle: ${roles.join(', ')}` : ''}`
  }).join('\n\n')

  return `
NOUVELLE SOUMISSION - RIPU26
============================

Référence: ${reference}
Date: ${currentDate}

--- CONFIGURATION ---
Type: ${typeLabel}
Étudiant: ${draft.studentContribution ? 'Oui' : 'Non'}

--- COMMUNICATION ---
Titre: ${draft.title || 'Titre non spécifié'}

Abstract:
${draft.abstract || 'Abstract non fourni'}

--- THÉMATIQUES ---
Principal: ${draft.primaryTopic || 'Non spécifié'}
Secondaire: ${draft.secondaryTopic || 'Non spécifié'}
Mots-clés: ${draft.keywords || 'Non spécifié'}

--- AUTEURS ---
${authorsList}

--- AFFILIATIONS ---
${draft.organizations.map(o => `• ${o.institution}${o.department ? `, ${o.department}` : ''}${o.country ? `, ${o.country}` : ''}`).join('\n') || 'Aucune affiliation'}

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

// =======================================================================
// FONCTION PRINCIPALE
// =======================================================================

export async function transmitSubmission(draft: SubmissionDraft, pdfFile: File | null): Promise<string> {
  if (isSubmissionClosed()) {
    throw new Error("SUBMISSION_CLOSED")
  }

  const reference = generateSubmissionReference()

  const formData = new FormData()
  formData.append('draft', JSON.stringify(draft))
  formData.append('reference', reference)
  
  if (pdfFile) {
    formData.append('pdf', pdfFile)
  }

  try {
    const response = await fetch("/api/submission", {
      method: "POST",
      body: formData,
      credentials: "same-origin",
    })

    const data = await response.json().catch(() => ({}))

    if (response.status === 409 && data.error === SUBMISSION_ALREADY_SENT) {
      throw new SubmissionAlreadySentError(data.reference || reference)
    }

    if (!response.ok) {
      throw new Error(data.error || "Erreur lors de la soumission")
    }

    return data.reference || reference
  } catch (error) {
    if (error instanceof SubmissionAlreadySentError) throw error
    console.error("Erreur de soumission:", error)
    throw error
  }
}