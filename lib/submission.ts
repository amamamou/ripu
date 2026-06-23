export const SUBMISSION_EMAIL = "ripu25sousse@gmail.com"

export const SUBMISSION_DEADLINE_LABEL = "25 juillet 2026"

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
