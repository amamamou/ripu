"use client"

import {
  PRESENTATION_MODES,
  SUBMISSION_TYPES,
  type SubmissionDraft,
} from "@/lib/submission-form"
import { SUBMISSION_AXES, SUBMISSION_DEADLINE_LABEL } from "@/lib/submission"
import {
  FieldError,
  getError,
  OptionCard,
  SectionBlock,
  type StepErrors,
} from "@/components/soumission/submission-fields"
import { CalendarDays, FileText } from "lucide-react"

export function SetupStep({
  draft,
  onChange,
  errors,
}: {
  draft: SubmissionDraft
  onChange: (patch: Partial<SubmissionDraft>) => void
  errors: StepErrors
}) {
  return (
    <div className="space-y-10">
      <SectionBlock
        title="Vue d'ensemble"
        description="RIPU26 · Springer LNCS · 2–4 pages · PDF."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-5">
            <CalendarDays className="h-4 w-4 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
              Date limite
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--black)]">{SUBMISSION_DEADLINE_LABEL}</p>
          </div>
          <div className="rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-5">
            <FileText className="h-4 w-4 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
              Axes du colloque
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--black)]">{SUBMISSION_AXES.length} axes scientifiques</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Type de contribution"
        description="Choisissez le format qui correspond le mieux à votre travail."
      >
        <div className="grid gap-3">
          {SUBMISSION_TYPES.map((type) => (
            <OptionCard
              key={type.value}
              name="submissionType"
              value={type.value}
              title={type.label}
              description={type.description}
              selected={draft.submissionType === type.value}
              onSelect={() => onChange({ submissionType: type.value })}
            />
          ))}
        </div>
        <FieldError message={getError(errors, "submissionType")} />
      </SectionBlock>

      <SectionBlock
        title="Mode de présentation"
        description="Indiquez comment vous envisagez de présenter votre communication si elle est acceptée."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {PRESENTATION_MODES.map((mode) => (
            <OptionCard
              key={mode.value}
              name="presentationMode"
              value={mode.value}
              title={mode.label}
              description={mode.description}
              selected={draft.presentationMode === mode.value}
              onSelect={() => onChange({ presentationMode: mode.value })}
            />
          ))}
        </div>
        <FieldError message={getError(errors, "presentationMode")} />
      </SectionBlock>
    </div>
  )
}
