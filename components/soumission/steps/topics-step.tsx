"use client"

import {
  KEYWORDS_MAX,
  parseKeywords,
  SUBMISSION_TOPICS,
  type SubmissionDraft,
  type TopicValue,
} from "@/lib/submission-form"
import {
  FieldError,
  FieldHint,
  FieldLabel,
  getError,
  SectionBlock,
  TextInput,
  type StepErrors,
} from "@/components/soumission/submission-fields"
import { cn } from "@/lib/utils"

function TopicSelect({
  id,
  label,
  value,
  onChange,
  error,
  exclude,
  required = false,
}: {
  id: string
  label: string
  value: TopicValue | ""
  onChange: (value: TopicValue | "") => void
  error?: string
  exclude?: TopicValue | ""
  required?: boolean
}) {
  const grouped = SUBMISSION_TOPICS.reduce<Record<string, typeof SUBMISSION_TOPICS[number]["topic"][]>>(
    (acc, item) => {
      if (exclude && item.topic === exclude) return acc
      acc[item.axis] = acc[item.axis] ?? []
      acc[item.axis].push(item.topic)
      return acc
    },
    {}
  )

  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as TopicValue)}
        aria-invalid={Boolean(error)}
        className={cn(
          "mt-2 w-full rounded-[var(--radius-xl)] border bg-white px-4 py-3 text-sm text-[var(--black)] outline-none transition-colors focus:border-[var(--brand)]/40 focus:ring-2 focus:ring-[var(--brand-soft)]",
          error ? "border-[#f04438]" : "border-[var(--border)]"
        )}
      >
        <option value="">Sélectionner un sujet…</option>
        {Object.entries(grouped).map(([axis, topics]) => (
          <optgroup key={axis} label={axis}>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <FieldError message={error} />
    </div>
  )
}

export function TopicsStep({
  draft,
  onChange,
  errors,
}: {
  draft: SubmissionDraft
  onChange: (patch: Partial<SubmissionDraft>) => void
  errors: StepErrors
}) {
  const keywordCount = parseKeywords(draft.keywords).length

  return (
    <div className="space-y-10">
      <SectionBlock
        title="Sujets thématiques"
        description="Choisissez un sujet principal. Un sujet secondaire distinct est optionnel."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <TopicSelect
            id="primaryTopic"
            label="Sujet principal"
            value={draft.primaryTopic}
            onChange={(primaryTopic) => onChange({ primaryTopic })}
            error={getError(errors, "primaryTopic")}
            exclude={draft.secondaryTopic}
            required
          />
          <TopicSelect
            id="secondaryTopic"
            label="Sujet secondaire"
            value={draft.secondaryTopic}
            onChange={(secondaryTopic) => onChange({ secondaryTopic })}
            error={getError(errors, "secondaryTopic")}
            exclude={draft.primaryTopic}
          />
        </div>
      </SectionBlock>

      <SectionBlock
        title="Mots-clés"
        description={`Jusqu'à ${KEYWORDS_MAX} mots-clés, séparés par des virgules.`}
      >
        <FieldLabel htmlFor="keywords" required>
          Mots-clés
        </FieldLabel>
        <TextInput
          id="keywords"
          value={draft.keywords}
          onChange={(keywords) => onChange({ keywords })}
          placeholder="pédagogie universitaire, IAG, APC…"
          error={getError(errors, "keywords")}
        />
        <FieldHint>
          {keywordCount} mot{keywordCount > 1 ? "s" : ""}-clé saisi{keywordCount > 1 ? "s" : ""}
        </FieldHint>
      </SectionBlock>

      <SectionBlock title="Informations complémentaires">
        <label className="flex cursor-pointer items-start gap-3 rounded-[var(--radius-xl)] border border-[var(--border)] bg-white p-5 transition-colors hover:bg-[var(--grey-50)]">
          <input
            type="checkbox"
            checked={draft.studentContribution}
            onChange={(e) => onChange({ studentContribution: e.target.checked })}
            className="mt-0.5 h-4 w-4 rounded accent-[var(--brand)]"
          />
          <span>
            <span className="block text-sm font-semibold text-[var(--black)]">
              Contribution étudiante
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-[var(--grey-600)]">
              Cette communication a été rédigée uniquement par des étudiant·e·s et/ou des
              doctorant·e·s.
            </span>
          </span>
        </label>

        <div className="mt-5">
          <FieldLabel htmlFor="remarks">Remarques au comité</FieldLabel>
          <FieldHint>Message optionnel à l&apos;attention du comité scientifique.</FieldHint>
          <textarea
            id="remarks"
            value={draft.remarks}
            onChange={(e) => onChange({ remarks: e.target.value })}
            rows={4}
            className="mt-2 w-full resize-y rounded-[var(--radius-xl)] border border-[var(--border)] bg-white px-4 py-3 text-sm leading-relaxed text-[var(--black)] outline-none focus:border-[var(--brand)]/40 focus:ring-2 focus:ring-[var(--brand-soft)]"
            placeholder="Informations utiles pour l'évaluation…"
          />
        </div>
      </SectionBlock>
    </div>
  )
}
