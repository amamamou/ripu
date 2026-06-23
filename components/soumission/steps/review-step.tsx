"use client"

import { useRef, useState } from "react"
import type { ReactNode } from "react"
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Loader2,
  Pencil,
  Send,
  Shield,
} from "lucide-react"
import { PdfUploadCard } from "@/components/soumission/pdf-upload-card"
import {
  countWords,
  formatAffiliation,
  formatAuthorName,
  getSubmissionCompleteness,
  isPdfReady,
  parseKeywords,
  PRESENTATION_MODES,
  SUBMISSION_TYPES,
  topicAxis,
  topicLabel,
  validatePdfFile,
  type CompletenessSection,
  type SectionStatus,
  type SubmissionDraft,
  type StepErrors,
} from "@/lib/submission-form"
import { transmitSubmission } from "@/lib/submission-transmit"
import { cn } from "@/lib/utils"

function StatusBadge({ status }: { status: SectionStatus }) {
  if (status === "ready")
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--success-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--success)]">
        <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
        Prêt
      </span>
    )
  if (status === "attention")
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--warning-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--warning)]">
        <AlertTriangle className="h-3 w-3" strokeWidth={2} aria-hidden />
        À compléter
      </span>
    )
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--error-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--error)]">
      Manquant
    </span>
  )
}

function ReviewBlock({
  title,
  status,
  onEdit,
  children,
}: {
  title: string
  status: SectionStatus
  onEdit?: () => void
  children: ReactNode
}) {
  return (
    <article className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-white p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold tracking-tight text-[var(--black)]">{title}</h3>
          <StatusBadge status={status} />
        </div>
        {onEdit && (
          <button type="button" onClick={onEdit} className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)]">
            <Pencil className="h-3.5 w-3.5" aria-hidden />
            Modifier
          </button>
        )}
      </div>
      <div className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--grey-600)]">{children}</div>
    </article>
  )
}

function ConfirmModal({
  open,
  onClose,
  onConfirm,
  loading,
}: {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  loading: boolean
}) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button type="button" className="absolute inset-0 bg-black/40" onClick={onClose} aria-label="Fermer" />
      <div className="relative w-full max-w-md rounded-[var(--radius-2xl)] bg-white p-7 shadow-[var(--shadow-panel)] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">Confirmation finale</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--black)]">
          Soumettre votre communication ?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--grey-600)]">
          Votre dossier sera préparé, vérifié et transmis au comité scientifique RIPU26 via le canal
          officiel de soumission.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <button type="button" onClick={onConfirm} disabled={loading} className="btn-lime w-full justify-center">
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Transmission en cours…
              </>
            ) : (
              <>
                Confirmer la soumission
                <span className="btn-lime-icon">
                  <Send className="h-4 w-4" />
                </span>
              </>
            )}
          </button>
          <button type="button" onClick={onClose} disabled={loading} className="btn-outline-pill w-full justify-center">
            Revenir à la revue
          </button>
        </div>
      </div>
    </div>
  )
}

export function ReviewStep({
  draft,
  pdfFile,
  pdfNeedsReattach,
  onEditStep,
  onPdfFile,
  onPdfClear,
  onSubmitted,
  isSubmitting,
  setIsSubmitting,
}: {
  draft: SubmissionDraft
  pdfFile: File | null
  pdfNeedsReattach?: boolean
  onEditStep: (step: number) => void
  onPdfFile: (file: File, meta: NonNullable<SubmissionDraft["pdfMeta"]>) => void
  onPdfClear: () => void
  onSubmitted: (reference: string) => void
  isSubmitting: boolean
  setIsSubmitting: (v: boolean) => void
}) {
  const [showConfirm, setShowConfirm] = useState(false)
  const [pdfErrors, setPdfErrors] = useState<StepErrors>({})
  const submittingRef = useRef(false)

  const { score, sections } = getSubmissionCompleteness(draft, Boolean(pdfFile))
  const pdfReady = isPdfReady(draft, Boolean(pdfFile))
  const allReady = score === 100 && pdfReady

  const sectionMap = Object.fromEntries(sections.map((s) => [s.id, s])) as Record<string, CompletenessSection>

  const handleSubmit = async () => {
    if (submittingRef.current) return
    const pErrors = validatePdfFile(pdfFile, draft.pdfMeta)
    setPdfErrors(pErrors)
    if (Object.keys(pErrors).length > 0) return
    if (!allReady) return
    setShowConfirm(true)
  }

  const confirmSubmit = async () => {
    if (submittingRef.current) return
    submittingRef.current = true
    setIsSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 1200))
      const reference = await transmitSubmission(draft, pdfFile)
      onSubmitted(reference)
      setShowConfirm(false)
    } finally {
      setIsSubmitting(false)
      submittingRef.current = false
    }
  }

  return (
    <div className="space-y-8">
      {allReady && (
        <div className="flex items-center gap-3 rounded-[var(--radius-xl)] border border-[var(--success-border)] bg-[var(--success-soft)] px-5 py-4">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--success)]" aria-hidden />
          <div>
            <p className="text-sm font-semibold text-[var(--success)]">Soumission prête</p>
            <p className="text-sm text-[var(--grey-600)]">
              Toutes les vérifications sont passées. Vous pouvez transmettre votre communication.
            </p>
          </div>
        </div>
      )}

      <div className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--grey-50)] p-6 md:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
              Complétude du dossier
            </p>
            <p className="mt-2 text-sm text-[var(--grey-600)]">
              {allReady
                ? "Votre soumission est complète et prête pour transmission."
                : "Complétez les sections signalées avant de soumettre."}
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className={cn("t-stat", allReady ? "text-[var(--success)]" : "text-[var(--brand)]")}>{score}%</p>
            <p className="text-xs font-medium text-[var(--grey-400)]">du dossier validé</p>
          </div>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              allReady ? "bg-[var(--success)]" : "bg-[var(--brand)]"
            )}
            style={{ width: `${score}%` }}
          />
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {sections.map((s) => (
            <li key={s.id} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--grey-600)]">
              {s.label}
              <StatusBadge status={s.status} />
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-white p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">Communication</p>
        <h2 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-[var(--black)] md:text-2xl">
          {draft.title.trim() || "Titre à compléter"}
        </h2>
        <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-[var(--grey-600)]">
          {draft.abstract.trim() || "Abstract à compléter"}
        </p>
        <p className="mt-4 text-xs font-medium text-[var(--grey-400)]">
          {countWords(draft.abstract)} mots · {parseKeywords(draft.keywords).join(" · ") || "Mots-clés à définir"}
        </p>
      </div>

      <PdfUploadCard
        file={pdfFile}
        meta={draft.pdfMeta}
        needsReattach={pdfNeedsReattach}
        onFile={onPdfFile}
        onClear={onPdfClear}
        errors={pdfErrors}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <ReviewBlock title="Configuration" status={sectionMap.setup.status} onEdit={() => onEditStep(1)}>
          <p>{SUBMISSION_TYPES.find((t) => t.value === draft.submissionType)?.label ?? "—"}</p>
          <p>{PRESENTATION_MODES.find((m) => m.value === draft.presentationMode)?.label ?? "—"}</p>
        </ReviewBlock>

        <ReviewBlock title="Thématiques" status={sectionMap.topics.status} onEdit={() => onEditStep(4)}>
          <p><span className="font-medium text-[var(--black)]">Principal :</span> {topicLabel(draft.primaryTopic)}</p>
          <p><span className="font-medium text-[var(--black)]">Secondaire :</span> {topicLabel(draft.secondaryTopic)}</p>
        </ReviewBlock>
      </div>

      <ReviewBlock title="Auteurs & affiliations" status={sectionMap.authors.status} onEdit={() => onEditStep(2)}>
        {draft.authors.map((author) => {
          const primary = draft.organizations.find((o) => o.id === author.primaryOrgId)
          return (
            <p key={author.id}>
              <span className="font-medium text-[var(--black)]">{formatAuthorName(author)}</span>
              {author.id === draft.presentingAuthorId && (
                <span className="ml-2 text-xs font-semibold text-[var(--brand)]">· Présentateur</span>
              )}
              <span className="mt-0.5 block">{primary ? formatAffiliation(primary) : "Affiliation à définir"}</span>
            </p>
          )
        })}
      </ReviewBlock>

      <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--brand-dark)] p-6 text-white md:p-8">
        <div className="flex gap-3">
          <Shield className="h-5 w-5 shrink-0 text-white/80" aria-hidden />
          <div>
            <p className="text-sm font-semibold">Point de contrôle final</p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              En soumettant, vous confirmez l&apos;exactitude des informations. Le dossier sera
              transmis au comité scientifique pour évaluation.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!allReady || isSubmitting}
          className={cn(
            "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--brand)] transition-transform sm:w-auto",
            allReady && !isSubmitting && "hover:-translate-y-0.5",
            !allReady && "opacity-45"
          )}
        >
          Soumettre la communication
          <Send className="h-4 w-4" />
        </button>
        {!allReady && (
          <p className="mt-3 text-xs text-white/55">
            {score < 100
              ? "Complétez toutes les sections du dossier."
              : "Vérifiez et confirmez votre document PDF."}
          </p>
        )}
      </div>

      <ConfirmModal open={showConfirm} onClose={() => setShowConfirm(false)} onConfirm={confirmSubmit} loading={isSubmitting} />
    </div>
  )
}
