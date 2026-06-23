import {
  buildSubmissionMailtoFromDraft,
  generateSubmissionReference,
  type SubmissionDraft,
} from "@/lib/submission-form"
import { isSubmissionClosed } from "@/lib/submission"
import {
  buildDossierContent,
  downloadSubmissionPackage,
} from "@/lib/submission-package"

export { buildDossierContent } from "@/lib/submission-package"

export function downloadDossier(draft: SubmissionDraft, reference: string) {
  downloadSubmissionPackage(draft, reference)
}

export async function transmitSubmission(draft: SubmissionDraft, pdfFile: File | null) {
  if (isSubmissionClosed()) {
    throw new Error("SUBMISSION_CLOSED")
  }

  const reference = generateSubmissionReference()
  await downloadSubmissionPackage(draft, reference, pdfFile?.name ?? null)

  if (pdfFile && typeof navigator !== "undefined" && navigator.share && navigator.canShare?.({ files: [pdfFile] })) {
    try {
      await navigator.share({
        title: `Soumission ${reference}`,
        text: buildDossierContent(draft, reference).slice(0, 500),
        files: [pdfFile],
      })
      return reference
    } catch {
      // fall through to mailto
    }
  }

  const mailto = buildSubmissionMailtoFromDraft(draft, reference)
  window.open(mailto, "_blank", "noopener,noreferrer")
  return reference
}
