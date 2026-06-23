"use client"

import { ABSTRACT_MAX_WORDS, countWords, type SubmissionDraft } from "@/lib/submission-form"
import {
  FieldHint,
  FieldLabel,
  getError,
  SectionBlock,
  TextArea,
  TextInput,
  type StepErrors,
} from "@/components/soumission/submission-fields"
import { cn } from "@/lib/utils"

export function PaperStep({
  draft,
  onChange,
  errors,
}: {
  draft: SubmissionDraft
  onChange: (patch: Partial<SubmissionDraft>) => void
  errors: StepErrors
}) {
  const words = countWords(draft.abstract)
  const ratio = Math.min(words / ABSTRACT_MAX_WORDS, 1)
  const nearingLimit = words > ABSTRACT_MAX_WORDS * 0.85
  const overLimit = words > ABSTRACT_MAX_WORDS

  return (
    <div className="space-y-10">
      <SectionBlock
        title="Titre de la communication"
        description="Utilisez une casse titre (Title Case). Évitez tout le texte en majuscules."
      >
        <FieldLabel htmlFor="title" required>
          Titre
        </FieldLabel>
        <TextInput
          id="title"
          value={draft.title}
          onChange={(title) => onChange({ title })}
          placeholder="Intitulé complet de votre communication"
          error={getError(errors, "title")}
        />
        <FieldHint>{draft.title.trim().length} caractères</FieldHint>
      </SectionBlock>

      <SectionBlock
        title="Abstract"
        description={`Rédigez un résumé clair en texte brut. Maximum ${ABSTRACT_MAX_WORDS} mots.`}
      >
        <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-white p-5 md:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <FieldLabel htmlFor="abstract" required>
              Résumé
            </FieldLabel>
            <div className="text-right">
              <p
                className={cn(
                  "text-sm font-semibold tabular-nums",
                  overLimit ? "text-[var(--error)]" : nearingLimit ? "text-[var(--brand)]" : "text-[var(--black)]"
                )}
              >
                {words} / {ABSTRACT_MAX_WORDS} mots
              </p>
              <p className="text-xs text-[var(--grey-400)]">
                {words === 0 ? "Commencez à rédiger" : overLimit ? "Limite dépassée" : "Texte brut uniquement"}
              </p>
            </div>
          </div>

          <TextArea
            id="abstract"
            value={draft.abstract}
            onChange={(abstract) => onChange({ abstract })}
            placeholder="Présentez le contexte, la problématique, la démarche et les apports de votre communication…"
            error={getError(errors, "abstract")}
            rows={12}
          />

          <div className="mt-4">
            <div className="h-1.5 overflow-hidden rounded-full bg-[var(--grey-100)]">
              <div
                className={cn(
                  "h-full rounded-full bg-[var(--brand)]/60 transition-all duration-300",
                  overLimit && "bg-[var(--error)]",
                  nearingLimit && !overLimit && "bg-[var(--brand)]"
                )}
                style={{ width: `${ratio * 100}%` }}
              />
            </div>
          </div>
        </div>
      </SectionBlock>
    </div>
  )
}
