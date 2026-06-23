import {
  countWords,
  formatAffiliation,
  formatAuthorName,
  parseKeywords,
  topicAxis,
  PRESENTATION_MODES,
  SUBMISSION_TYPES,
  type SubmissionDraft,
} from "@/lib/submission-form"
import { SUBMISSION_EMAIL } from "@/lib/submission"

export function buildDossierContent(draft: SubmissionDraft, reference: string) {
  const typeLabel =
    SUBMISSION_TYPES.find((t) => t.value === draft.submissionType)?.label ?? "—"
  const modeLabel =
    PRESENTATION_MODES.find((m) => m.value === draft.presentationMode)?.label ?? "—"

  return `DOSSIER DE SOUMISSION RIPU26
Référence : ${reference}
Date : ${new Date().toLocaleString("fr-FR")}
Canal officiel : ${SUBMISSION_EMAIL}

═══════════════════════════════════════
CONFIGURATION
═══════════════════════════════════════
Type de contribution : ${typeLabel}
Mode de présentation : ${modeLabel}

═══════════════════════════════════════
COMMUNICATION
═══════════════════════════════════════
Titre : ${draft.title.trim()}

Abstract (${countWords(draft.abstract)} mots) :
${draft.abstract.trim()}

Document PDF : ${draft.pdfMeta?.fileName ?? "—"}

═══════════════════════════════════════
THÉMATIQUES
═══════════════════════════════════════
Sujet principal : ${draft.primaryTopic}
Axe : ${topicAxis(draft.primaryTopic)}
Sujet secondaire : ${draft.secondaryTopic}
Mots-clés : ${parseKeywords(draft.keywords).join(", ")}
Contribution étudiante : ${draft.studentContribution ? "Oui" : "Non"}

${draft.remarks.trim() ? `Remarques :\n${draft.remarks.trim()}\n\n` : ""}═══════════════════════════════════════
AUTEURS
═══════════════════════════════════════
${draft.authors
  .map((author, i) => {
    const orgs = author.orgIds
      .map((id) => draft.organizations.find((o) => o.id === id))
      .filter(Boolean)
      .map((o) => formatAffiliation(o!))
    const primary = draft.organizations.find((o) => o.id === author.primaryOrgId)
    return `${i + 1}. ${formatAuthorName(author)}
   E-mail : ${author.email}
   ORCID : ${author.orcid || "—"}
   Affiliation principale : ${primary ? formatAffiliation(primary) : "—"}
   Affiliations : ${orgs.join(" | ") || "—"}
   ${author.id === draft.presentingAuthorId ? "→ Présentateur" : ""}`
  })
  .join("\n\n")}

═══════════════════════════════════════
FIN DU DOSSIER
═══════════════════════════════════════
`
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

export async function downloadSubmissionPackage(
  draft: SubmissionDraft,
  reference: string,
  communicationPdfName?: string | null
) {
  const { createSubmissionDossierPdf } = await import("@/lib/submission-dossier-pdf")
  const blob = await createSubmissionDossierPdf(draft, reference, communicationPdfName)
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = `${reference}-dossier.pdf`
  anchor.click()
  URL.revokeObjectURL(url)
}
