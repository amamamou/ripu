import { SUBMISSION_EMAIL } from "@/lib/submission"

export const SUBMISSION_STORAGE_KEY = "ripu26-submission-draft-v2"

export const ABSTRACT_MAX_WORDS = 500
export const KEYWORDS_MAX = 5
export const PDF_MAX_BYTES = 10 * 1024 * 1024

export const PRESENTATION_MODES = [
  { value: "on-site", label: "Sur place", description: "Présentation lors du colloque à Sousse." },
  { value: "remote", label: "À distance", description: "Intervention en visioconférence." },
] as const

export const SUBMISSION_TYPES = [
  {
    value: "experience",
    label: "Retour d'expérience",
    description: "Partage de pratiques et résultats observés sur le terrain.",
  },
  {
    value: "wip",
    label: "Projet de recherche",
    description: "Travaux de recherche, protocoles et avancées scientifiques.",
  },
] as const

export const SUBMISSION_TOPICS = [
  { axis: "Intelligence Artificielle Générative & Enseignement", topic: "L'IAG comme tuteur d'apprentissage" },
  { axis: "Intelligence Artificielle Générative & Enseignement", topic: "L'IAG et le geste enseignant" },
  { axis: "Intelligence Artificielle Générative & Enseignement", topic: "L'IAG pour la correction des examens" },
  { axis: "Intelligence Artificielle Générative & Enseignement", topic: "Les effets de l'IAG sur les apprentissages" },
  { axis: "Intelligence Artificielle Générative & Enseignement", topic: "L'IAG et la vie étudiante" },
  {
    axis: "Intelligence Artificielle Générative & Enseignement",
    topic: "L'avenir de l'enseignement supérieur à l'ère de l'IAG",
  },
  { axis: "Intelligence Artificielle Générative & Enseignement", topic: "Les plans d'études à l'heure de l'IAG" },
  { axis: "Approches Pédagogiques", topic: "L'approche par compétences (APC)" },
  { axis: "Approches Pédagogiques", topic: "Les plans d'études à l'ère de l'IA et de l'APC" },
  { axis: "Approches Pédagogiques", topic: "La gamification comme levier d'apprentissage" },
  { axis: "Genre & Éducation", topic: "La place des femmes dans l'éducation" },
] as const

export type PresentationMode = (typeof PRESENTATION_MODES)[number]["value"]
export type SubmissionType = (typeof SUBMISSION_TYPES)[number]["value"]
export type TopicValue = (typeof SUBMISSION_TOPICS)[number]["topic"]

export type Author = {
  id: string
  orcid: string
  firstName: string
  lastName: string
  email: string
  orgIds: string[]
  primaryOrgId: string
}

export type Organization = {
  id: string
  institution: string
  department: string
  country: string
}

export type PdfMeta = {
  fileName: string
  fileSize: number
}

export type SubmissionDraft = {
  version: 2
  presentationMode: PresentationMode | ""
  submissionType: SubmissionType | ""
  authors: Author[]
  organizations: Organization[]
  presentingAuthorId: string
  title: string
  abstract: string
  primaryTopic: TopicValue | ""
  secondaryTopic: TopicValue | ""
  keywords: string
  studentContribution: boolean
  remarks: string
  pdfMeta: PdfMeta | null
  submittedReference: string | null
  currentStep: number
  updatedAt: number
}

export const WIZARD_STEPS = [
  { id: 1, label: "Configuration", short: "Setup" },
  { id: 2, label: "Auteurs", short: "Auteurs" },
  { id: 3, label: "Communication", short: "Papier" },
  { id: 4, label: "Thématiques", short: "Sujets" },
  { id: 5, label: "Revue finale", short: "Revue" },
] as const

export type SectionStatus = "ready" | "attention" | "missing"

export function createId() {
  return crypto.randomUUID()
}

export function createEmptyAuthor(): Author {
  return {
    id: createId(),
    orcid: "",
    firstName: "",
    lastName: "",
    email: "",
    orgIds: [],
    primaryOrgId: "",
  }
}

export function createEmptyOrganization(): Organization {
  return { id: createId(), institution: "", department: "", country: "" }
}

export function createDefaultDraft(): SubmissionDraft {
  const firstAuthor = createEmptyAuthor()
  return {
    version: 2,
    presentationMode: "",
    submissionType: "",
    authors: [firstAuthor],
    organizations: [createEmptyOrganization()],
    presentingAuthorId: firstAuthor.id,
    title: "",
    abstract: "",
    primaryTopic: "",
    secondaryTopic: "",
    keywords: "",
    studentContribution: false,
    remarks: "",
    pdfMeta: null,
    submittedReference: null,
    currentStep: 1,
    updatedAt: Date.now(),
  }
}

export function formatAffiliation(org: Organization) {
  const institution = org.institution.trim()
  const department = org.department.trim()
  const country = org.country.trim()
  if (!institution && !department && !country) return ""
  const line = department && institution ? `${institution}, ${department}` : institution || department
  return country && line ? `${line}, ${country}` : line || country
}

export function formatAffiliationShort(org: Organization) {
  const institution = org.institution.trim()
  const meta = [org.department.trim(), org.country.trim()].filter(Boolean).join(" · ")
  if (!institution) return meta
  return meta ? `${institution} — ${meta}` : institution
}

export function isOrganizationComplete(org: Organization) {
  return Boolean(org.institution.trim() && org.country.trim())
}

export function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

export function parseKeywords(raw: string) {
  return raw
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean)
}

export function topicLabel(topic: TopicValue | "") {
  if (!topic) return "—"
  return SUBMISSION_TOPICS.find((t) => t.topic === topic)?.topic ?? topic
}

export function topicAxis(topic: TopicValue | "") {
  if (!topic) return ""
  return SUBMISSION_TOPICS.find((t) => t.topic === topic)?.axis ?? ""
}

export function formatSavedTime(timestamp: number, style: "short" | "label" = "short") {
  const diff = Date.now() - timestamp
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(diff / 60000)

  let relative: string
  if (seconds < 10) relative = "à l'instant"
  else if (seconds < 60) relative = `il y a ${seconds} seconde${seconds > 1 ? "s" : ""}`
  else if (minutes === 1) relative = "il y a 1 minute"
  else if (minutes < 60) relative = `il y a ${minutes} minutes`
  else {
    const hours = Math.floor(minutes / 60)
    relative = hours === 1 ? "il y a 1 heure" : `il y a ${hours} heures`
  }

  if (style === "label") return `Dernière sauvegarde : ${relative}`
  return relative
}

export type StepErrors = Record<string, string>

export function validatePdfFile(file: File | null, meta: PdfMeta | null): StepErrors {
  const errors: StepErrors = {}
  if (!file || !meta) {
    errors.pdf = "Le document PDF de votre communication est requis."
    return errors
  }
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    errors.pdf = "Seuls les fichiers PDF sont acceptés."
  }
  if (file.size > PDF_MAX_BYTES) {
    errors.pdf = "Le fichier dépasse la taille maximale de 10 Mo."
  }
  return errors
}

export function validateStep(step: number, draft: SubmissionDraft): StepErrors {
  const errors: StepErrors = {}

  if (step === 1) {
    if (!draft.presentationMode) errors.presentationMode = "Indiquez comment vous présenterez votre communication."
    if (!draft.submissionType) errors.submissionType = "Sélectionnez le type de votre contribution."
  }

  if (step === 2) {
    if (draft.authors.length === 0) errors.authors = "Au moins un auteur est requis."
    const completeOrgs = draft.organizations.filter(isOrganizationComplete)
    if (completeOrgs.length === 0) {
      errors.organizations = "Créez au moins une affiliation complète (institution et pays)."
    }
    draft.organizations.forEach((org) => {
      const referenced = draft.authors.some((a) => a.orgIds.includes(org.id))
      const partial =
        org.institution.trim() || org.department.trim() || org.country.trim()
      if (referenced && !isOrganizationComplete(org)) {
        errors[`org-${org.id}`] = "Institution et pays sont requis pour cette affiliation."
      } else if (partial && !isOrganizationComplete(org)) {
        errors[`org-${org.id}`] = "Complétez l'institution et le pays."
      }
    })
    draft.authors.forEach((author) => {
      const prefix = `author-${author.id}`
      if (!author.firstName.trim()) errors[`${prefix}-firstName`] = "Prénom requis."
      if (!author.lastName.trim()) errors[`${prefix}-lastName`] = "Nom requis."
      if (!author.email.trim()) errors[`${prefix}-email`] = "E-mail requis."
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(author.email.trim()))
        errors[`${prefix}-email`] = "Format d'e-mail invalide."
      if (author.orgIds.length === 0)
        errors[`${prefix}-orgs`] = "Associez au moins une affiliation à cet auteur."
      if (author.orgIds.length > 0 && !author.primaryOrgId)
        errors[`${prefix}-primary`] = "Indiquez l'affiliation principale."
      if (author.primaryOrgId && !author.orgIds.includes(author.primaryOrgId))
        errors[`${prefix}-primary`] = "L'affiliation principale doit être sélectionnée."
    })
    if (!draft.presentingAuthorId || !draft.authors.some((a) => a.id === draft.presentingAuthorId))
      errors.presentingAuthor = "Désignez l'auteur qui présentera la communication."
  }

  if (step === 3) {
    if (!draft.title.trim()) errors.title = "Le titre de la communication est requis."
    const words = countWords(draft.abstract)
    if (!draft.abstract.trim()) errors.abstract = "L'abstract est requis pour l'évaluation."
    else if (words > ABSTRACT_MAX_WORDS)
      errors.abstract = `L'abstract ne doit pas dépasser ${ABSTRACT_MAX_WORDS} mots.`
  }

  if (step === 4) {
    if (!draft.primaryTopic) errors.primaryTopic = "Sélectionnez un sujet principal."
    if (!draft.secondaryTopic) errors.secondaryTopic = "Sélectionnez un sujet secondaire."
    if (draft.primaryTopic && draft.secondaryTopic && draft.primaryTopic === draft.secondaryTopic)
      errors.secondaryTopic = "Le sujet secondaire doit être distinct."
    const keywords = parseKeywords(draft.keywords)
    if (keywords.length === 0) errors.keywords = "Ajoutez au moins un mot-clé."
    else if (keywords.length > KEYWORDS_MAX) errors.keywords = `Maximum ${KEYWORDS_MAX} mots-clés.`
  }

  return errors
}

export function isStepComplete(step: number, draft: SubmissionDraft) {
  return Object.keys(validateStep(step, draft)).length === 0
}

export function isReviewStepComplete(draft: SubmissionDraft, hasPdfFile: boolean) {
  const { score } = getSubmissionCompleteness(draft, hasPdfFile)
  return score === 100 && isPdfReady(draft, hasPdfFile)
}

export function isPdfReady(draft: SubmissionDraft, hasFile: boolean) {
  if (!hasFile || !draft.pdfMeta) return false
  const file = { name: draft.pdfMeta.fileName, size: draft.pdfMeta.fileSize, type: "application/pdf" } as File
  return Object.keys(validatePdfFile(file, draft.pdfMeta)).length === 0
}

export function hasSubmissionProgress(draft: SubmissionDraft) {
  return (
    Boolean(draft.presentationMode || draft.submissionType) ||
    draft.authors.some((a) => a.firstName || a.lastName || a.email) ||
    draft.organizations.some((o) => o.institution || o.country) ||
    Boolean(draft.title || draft.abstract) ||
    Boolean(draft.primaryTopic || draft.secondaryTopic || draft.keywords) ||
    Boolean(draft.pdfMeta)
  )
}

export type CompletenessSection = {
  id: string
  label: string
  status: SectionStatus
  step?: number
}

export function getSubmissionCompleteness(
  draft: SubmissionDraft,
  hasPdfFile: boolean
): { score: number; sections: CompletenessSection[] } {
  const sections: CompletenessSection[] = [
    {
      id: "setup",
      label: "Configuration",
      step: 1,
      status: stepStatus(1, draft),
    },
    {
      id: "authors",
      label: "Auteurs & affiliations",
      step: 2,
      status: stepStatus(2, draft),
    },
    {
      id: "paper",
      label: "Titre & abstract",
      step: 3,
      status: stepStatus(3, draft),
    },
    {
      id: "topics",
      label: "Thématiques & mots-clés",
      step: 4,
      status: stepStatus(4, draft),
    },
    {
      id: "pdf",
      label: "Document PDF",
      status: isPdfReady(draft, hasPdfFile)
        ? "ready"
        : draft.pdfMeta || hasPdfFile
          ? "attention"
          : "missing",
    },
  ]

  const readyCount = sections.filter((s) => s.status === "ready").length
  return { score: Math.round((readyCount / sections.length) * 100), sections }
}

function stepStatus(step: number, draft: SubmissionDraft): SectionStatus {
  const errors = validateStep(step, draft)
  if (Object.keys(errors).length === 0) return "ready"
  const hasContent = stepHasContent(step, draft)
  return hasContent ? "attention" : "missing"
}

function stepHasContent(step: number, draft: SubmissionDraft): boolean {
  if (step === 1) return Boolean(draft.presentationMode || draft.submissionType)
  if (step === 2)
    return draft.authors.some((a) => a.firstName || a.lastName || a.email) ||
      draft.organizations.some((o) => o.institution)
  if (step === 3) return Boolean(draft.title || draft.abstract)
  if (step === 4)
    return Boolean(draft.primaryTopic || draft.secondaryTopic || draft.keywords)
  return false
}

export function migrateDraft(parsed: Record<string, unknown>): SubmissionDraft {
  const base = createDefaultDraft()
  if (parsed.version === 2) {
    const loaded = { ...base, ...(parsed as SubmissionDraft), version: 2 as const }
    if (loaded.pdfMeta) {
      loaded.pdfMeta = { fileName: loaded.pdfMeta.fileName, fileSize: loaded.pdfMeta.fileSize }
    }
    return loaded
  }

  const orgs = Array.isArray(parsed.organizations)
    ? (parsed.organizations as Array<{ id?: string; name?: string; institution?: string; department?: string; country?: string }>).map(
        (o) => ({
          id: o.id ?? createId(),
          institution: o.institution ?? o.name ?? "",
          department: o.department ?? "",
          country: o.country ?? "",
        })
      )
    : base.organizations

  const authors = Array.isArray(parsed.authors)
    ? (parsed.authors as Author[]).map((a) => ({
        ...createEmptyAuthor(),
        ...a,
        primaryOrgId: a.primaryOrgId || a.orgIds?.[0] || "",
      }))
    : base.authors

  return {
    ...base,
    ...(parsed as Partial<SubmissionDraft>),
    version: 2,
    organizations: orgs,
    authors,
    pdfMeta: null,
    submittedReference: null,
  }
}

export function loadDraft(): { draft: SubmissionDraft; restored: boolean } {
  if (typeof window === "undefined") return { draft: createDefaultDraft(), restored: false }
  try {
    const raw = localStorage.getItem(SUBMISSION_STORAGE_KEY)
    if (!raw) return { draft: createDefaultDraft(), restored: false }
    const parsed = JSON.parse(raw) as Record<string, unknown>
    const draft = migrateDraft(parsed)
    const restored = Boolean(
      draft.title ||
        draft.abstract ||
        draft.authors.some((a) => a.firstName || a.lastName) ||
        draft.organizations.some((o) => o.institution)
    )
    return { draft, restored }
  } catch {
    return { draft: createDefaultDraft(), restored: false }
  }
}

export function saveDraft(draft: SubmissionDraft) {
  if (typeof window === "undefined") return
  localStorage.setItem(
    SUBMISSION_STORAGE_KEY,
    JSON.stringify({ ...draft, updatedAt: Date.now() })
  )
}

export function clearDraft() {
  if (typeof window === "undefined") return
  localStorage.removeItem(SUBMISSION_STORAGE_KEY)
}

export function formatAuthorName(author: Author) {
  return `${author.firstName.trim()} ${author.lastName.trim()}`.trim()
}

export function generateSubmissionReference() {
  const token = Date.now().toString(36).toUpperCase().slice(-6)
  return `RIPU26-${token}`
}

export function buildSubmissionMailtoFromDraft(draft: SubmissionDraft, reference: string) {
  const typeLabel =
    SUBMISSION_TYPES.find((t) => t.value === draft.submissionType)?.label ?? draft.submissionType
  const modeLabel =
    PRESENTATION_MODES.find((m) => m.value === draft.presentationMode)?.label ??
    draft.presentationMode

  const orgMap = Object.fromEntries(
    draft.organizations.map((o) => [o.id, formatAffiliation(o)])
  )

  const authorsBlock = draft.authors
    .map((author, index) => {
      const affiliations = author.orgIds.map((id) => orgMap[id]).filter(Boolean)
      const primary = orgMap[author.primaryOrgId]
      const flags = [
        author.id === draft.presentingAuthorId ? "Présentateur" : null,
        index === 0 ? "Auteur correspondant" : null,
      ]
        .filter(Boolean)
        .join(", ")
      return `${index + 1}. ${formatAuthorName(author)}${author.orcid.trim() ? ` (ORCID: ${author.orcid.trim()})` : ""}
   E-mail : ${author.email.trim()}
   Affiliation principale : ${primary || "—"}
   Autres affiliations : ${affiliations.filter((a) => a !== primary).join(" ; ") || "—"}
   ${flags ? `Rôle : ${flags}` : ""}`
    })
    .join("\n\n")

  const orgBlock = draft.organizations
    .filter(isOrganizationComplete)
    .map((o) => `• ${formatAffiliation(o)}`)
    .join("\n")

  const keywords = parseKeywords(draft.keywords).join(", ")
  const pdfName = draft.pdfMeta?.fileName ?? "document.pdf"

  const body = `RÉFÉRENCE DE SOUMISSION : ${reference}
Canal officiel RIPU26 · ${SUBMISSION_EMAIL}

—— CONFIGURATION ——
Type : ${typeLabel}
Présentation : ${modeLabel}

—— COMMUNICATION ——
Titre : ${draft.title.trim()}

Abstract (${countWords(draft.abstract)} mots) :
${draft.abstract.trim()}

—— THÉMATIQUES ——
Sujet principal : ${draft.primaryTopic}
Axe : ${topicAxis(draft.primaryTopic)}
Sujet secondaire : ${draft.secondaryTopic}
Mots-clés : ${keywords}
Contribution étudiante : ${draft.studentContribution ? "Oui" : "Non"}

—— AUTEURS ——
${authorsBlock}

—— AFFILIATIONS ——
${orgBlock}

—— DOCUMENT ——
Fichier soumis : ${pdfName}

${draft.remarks.trim() ? `—— REMARQUES ——\n${draft.remarks.trim()}\n\n` : ""}——
Communication préparée via l'espace de soumission RIPU26.
`

  const subject = encodeURIComponent(`[${reference}] ${draft.title.trim()}`)
  return `mailto:${SUBMISSION_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`
}
