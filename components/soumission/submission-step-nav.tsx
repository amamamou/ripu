"use client"

import { Check, Cloud, Loader2, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

type StepProgress = {
  id: number
  label: string
  short: string
  complete: boolean
  active: boolean
}

export function SubmissionStepNav({
  steps,
  onStepClick,
}: {
  steps: StepProgress[]
  onStepClick: (step: number) => void
}) {
  return (
    <nav aria-label="Sections de soumission" className="space-y-1">
      {steps.map((step) => {
        const completed = step.complete && !step.active

        return (
          <button
            key={step.id}
            type="button"
            onClick={() => onStepClick(step.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-[var(--radius-xl)] px-4 py-3 text-left transition-colors",
              step.active && "bg-[var(--brand-soft)]",
              !step.active && "hover:bg-[var(--grey-50)]"
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
                completed && "bg-[var(--brand)] text-white",
                step.active && "bg-[var(--brand)] text-white ring-4 ring-[var(--brand-soft)]",
                !completed && !step.active && "border-2 border-[var(--grey-100)] bg-white text-[var(--grey-400)]"
              )}
              aria-hidden
            >
              {completed ? (
                <Check className="h-4 w-4" strokeWidth={2.5} />
              ) : (
                String(step.id).padStart(2, "0")
              )}
            </span>
            <span className="min-w-0">
              <span
                className={cn(
                  "block text-sm font-semibold tracking-tight",
                  step.active ? "text-[var(--black)]" : "text-[var(--grey-600)]"
                )}
              >
                {step.label}
              </span>
              <span className="block text-xs text-[var(--grey-400)]">
                {completed ? "Complété" : step.active ? "Section active" : "À compléter"}
              </span>
            </span>
          </button>
        )
      })}
    </nav>
  )
}

export function SubmissionMobileSteps({
  steps,
  completenessScore,
  hasProgress,
  onSectionClick,
}: {
  steps: StepProgress[]
  completenessScore: number
  hasProgress: boolean
  onSectionClick: (step: number) => void
}) {
  const active = steps.find((s) => s.active)
  const completedCount = steps.filter((s) => s.complete).length
  const ready = hasProgress && completenessScore === 100

  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--grey-50)] px-4 py-4 lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
            Dossier de soumission
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--black)]">{active?.label ?? "Configuration"}</p>
        </div>
        {hasProgress && (
          <p
            className={cn(
              "text-sm font-bold tabular-nums",
              ready ? "text-[var(--success)]" : "text-[var(--brand)]"
            )}
          >
            {completenessScore}%
          </p>
        )}
      </div>
      {hasProgress && (
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              ready ? "bg-[var(--success)]" : "bg-[var(--brand)]"
            )}
            style={{ width: `${completenessScore}%` }}
          />
        </div>
      )}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {steps.map((step) => (
          <button
            key={step.id}
            type="button"
            onClick={() => onSectionClick(step.id)}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
              step.active
                ? "bg-[var(--brand)] text-white"
                : step.complete
                  ? "bg-white text-[var(--grey-600)]"
                  : "bg-white text-[var(--grey-400)]"
            )}
          >
            {step.short}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-[var(--grey-400)]">
        {completedCount} section{completedCount > 1 ? "s" : ""} complétée{completedCount > 1 ? "s" : ""}
      </p>
    </div>
  )
}

export function SubmissionSuccessNotice({
  reference,
  onDismiss,
}: {
  reference: string
  onDismiss: () => void
}) {
  return (
    <p className="mb-4 text-sm text-[var(--grey-600)]">
      Communication transmise avec succès ·{" "}
      <span className="font-semibold text-[var(--black)]">{reference}</span>
      <button type="button" onClick={onDismiss} className="ml-2 font-semibold text-[var(--brand)]">
        OK
      </button>
    </p>
  )
}

export function SaveIndicator({
  state,
  savedAtLabel,
  hasProgress,
}: {
  state: "idle" | "saving" | "saved"
  savedAtLabel?: string | null
  hasProgress?: boolean
}) {
  if (!hasProgress) return null

  return (
    <div className="space-y-0.5 text-xs font-semibold" aria-live="polite">
      <div className="flex items-center gap-2">
        {state === "saving" && (
          <>
            <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-[var(--grey-400)]" aria-hidden />
            <span className="text-[var(--grey-400)]">Enregistrement du brouillon…</span>
          </>
        )}
        {state === "saved" && (
          <>
            <Cloud className="h-3.5 w-3.5 shrink-0 text-[var(--grey-400)]" aria-hidden />
            <span className="text-[var(--grey-400)]">Brouillon sauvegardé</span>
          </>
        )}
        {state === "idle" && <span className="opacity-0">{"\u00a0"}</span>}
      </div>
      {state === "saved" && savedAtLabel && (
        <p className="pl-5 font-medium text-[var(--grey-400)]">{savedAtLabel}</p>
      )}
    </div>
  )
}

export function DraftRestoredBanner({ onDismiss }: { onDismiss: () => void }) {
  return (
    <p className="mb-4 text-sm text-[var(--grey-600)]">
      Votre brouillon a été restauré.
      <button type="button" onClick={onDismiss} className="ml-2 font-semibold text-[var(--brand)]">
        OK
      </button>
    </p>
  )
}

export function SubmissionCompleteness({
  score,
  hasProgress,
}: {
  score: number
  hasProgress: boolean
}) {
  if (!hasProgress) {
    return (
      <div className="rounded-[var(--radius-xl)] bg-[var(--grey-50)] px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--grey-400)]">Dossier</p>
        <p className="mt-1 text-sm text-[var(--grey-600)]">Non commencé</p>
      </div>
    )
  }

  const ready = score === 100
  return (
    <div className="rounded-[var(--radius-xl)] bg-[var(--grey-50)] px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--grey-400)]">
        Avancement du dossier
      </p>
      <p
        className={cn(
          "mt-1 text-2xl font-bold tabular-nums",
          ready ? "text-[var(--success)]" : "text-[var(--brand)]"
        )}
      >
        {score}%
      </p>
      {ready && (
        <p className="mt-1 text-xs font-medium text-[var(--success)]">Prêt pour soumission</p>
      )}
    </div>
  )
}

export function ResetSubmissionDialog({
  open,
  loading,
  onClose,
  onConfirm,
}: {
  open: boolean
  loading?: boolean
  onClose: () => void
  onConfirm: () => void
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button type="button" className="absolute inset-0 bg-black/40" onClick={onClose} aria-label="Fermer" />
      <div className="relative w-full max-w-md rounded-[var(--radius-2xl)] bg-white p-7 shadow-[var(--shadow-panel)] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
          Réinitialiser la soumission
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--black)]">
          Recommencer la soumission ?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--grey-600)]">
          Cette action effacera votre progression actuelle. Vous repartirez d&apos;une soumission
          vierge.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-[var(--grey-600)]">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--grey-400)]" />
            Toutes les données du formulaire seront supprimées
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--grey-400)]" />
            Le brouillon sauvegardé sur cet appareil sera effacé
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--grey-400)]" />
            Le document PDF joint sera retiré
          </li>
        </ul>
        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--error-border)] bg-[var(--error-soft)] px-5 py-2.5 text-sm font-semibold text-[var(--error)] transition-colors hover:bg-[#fee4e2] disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Réinitialisation…
              </>
            ) : (
              <>
                <RotateCcw className="h-4 w-4" />
                Confirmer la réinitialisation
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="btn-outline-pill w-full justify-center"
          >
            Annuler — conserver mon brouillon
          </button>
        </div>
      </div>
    </div>
  )
}

export function RestartSubmissionButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--grey-400)] transition-colors hover:text-[var(--grey-600)]"
    >
      <RotateCcw className="h-3.5 w-3.5" aria-hidden />
      Recommencer la soumission
    </button>
  )
}
