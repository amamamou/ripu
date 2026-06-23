export const SUBMISSION_EMAIL = "ripu25sousse@gmail.com"

export const SUBMISSION_DEADLINE_LABEL = "25 juillet 2026"

/** End of submission day, Tunisia (UTC+1). */
export const SUBMISSION_DEADLINE_ISO = "2026-07-25T23:59:59+01:00"

export const SUBMISSION_NOTIFICATION_LABEL = "25 août 2026"

export function getSubmissionDeadlineDate() {
  return new Date(SUBMISSION_DEADLINE_ISO)
}

export function isSubmissionClosed(now = new Date()) {
  return now.getTime() > getSubmissionDeadlineDate().getTime()
}

export function getSubmissionDaysRemaining(now = new Date()) {
  const remainingMs = getSubmissionDeadlineDate().getTime() - now.getTime()
  if (remainingMs <= 0) return 0
  return Math.ceil(remainingMs / (1000 * 60 * 60 * 24))
}

export const SUBMISSION_FORMAT_HIGHLIGHTS = [
  "Articles courts (2 à 4 pages)",
  "Projet de recherche",
  "Retour d'expérience",
  "Format Springer LNCS",
  "Évaluation à double aveugle",
] as const

export const SUBMISSION_CONTRIBUTION_SUMMARY = "Projet de recherche et retour d'expérience."

export const SUBMISSION_CONTRIBUTION_TYPES = [
  "Articles courts (2 à 4 pages)",
  "Projet de recherche",
  "Retour d'expérience",
] as const

export const SUBMISSION_AXES = [
  "Intelligence Artificielle Générative & Enseignement",
  "Approches Pédagogiques",
  "Genre & Éducation",
] as const

export function buildSubmissionMailto() {
  const subject = encodeURIComponent("[RIPU26] Soumission")
  const body = encodeURIComponent(
    `Bonjour,

Veuillez trouver ci-joint ma communication pour RIPU26 (PDF).

Titre de la communication :
Axe choisi :
Auteurs et affiliations :
Auteur correspondant (e-mail, téléphone) :

Cordialement,
`
  )
  return `mailto:${SUBMISSION_EMAIL}?subject=${subject}&body=${body}`
}
