"use client"

import { Building2, ChevronDown, ChevronUp, Plus, Trash2, UserRound } from "lucide-react"
import {
  createAuthorWithAffiliation,
  formatAffiliation,
  formatAuthorName,
  MAX_AUTHORS,
  type Author,
  type Organization,
  type SubmissionDraft,
} from "@/lib/submission-form"
import {
  CountrySelect,
  FieldError,
  FieldHint,
  FieldLabel,
  getError,
  SalutationPicker,
  SectionBlock,
  TextInput,
  type StepErrors,
} from "@/components/soumission/submission-fields"
import { cn } from "@/lib/utils"

function moveItem<T>(items: T[], from: number, to: number) {
  if (to < 0 || to >= items.length) return items
  const next = [...items]
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item)
  return next
}

function AuthorCard({
  author,
  affiliation,
  index,
  total,
  isPresenting,
  errors,
  onChange,
  onAffiliationChange,
  onRemove,
  onMoveUp,
  onMoveDown,
  onSetPresenting,
}: {
  author: Author
  affiliation: Organization | undefined
  index: number
  total: number
  isPresenting: boolean
  errors: StepErrors
  onChange: (author: Author) => void
  onAffiliationChange: (org: Organization) => void
  onRemove: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  onSetPresenting: () => void
}) {
  const prefix = `author-${author.id}`
  const orgPrefix = affiliation ? `org-${affiliation.id}` : prefix
  const isCorresponding = index === 0

  return (
    <article className="overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-white">
      <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] bg-[var(--grey-50)]/60 px-5 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
            <UserRound className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-tight text-[var(--black)]">
              {formatAuthorName(author) || `Auteur ${index + 1}`}
            </p>
            <p className="text-xs text-[var(--grey-400)]">
              {isCorresponding ? "Auteur correspondant" : `Co-auteur · position ${index + 1}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onMoveUp}
            disabled={index === 0}
            className="rounded-full p-2 text-[var(--grey-400)] hover:bg-white disabled:opacity-30"
            aria-label="Monter"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={index === total - 1}
            className="rounded-full p-2 text-[var(--grey-400)] hover:bg-white disabled:opacity-30"
            aria-label="Descendre"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
          {total > 1 && (
            <button
              type="button"
              onClick={onRemove}
              className="rounded-full p-2 text-[var(--grey-400)] hover:bg-[#fef3f2] hover:text-[#b42318]"
              aria-label="Supprimer"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-8 p-5 md:p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--grey-400)]">
            Identité
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <SalutationPicker
                id={`${prefix}-salutation`}
                value={author.salutation}
                onChange={(salutation) => onChange({ ...author, salutation })}
                error={getError(errors, `${prefix}-salutation`)}
                required
              />
            </div>
            <div>
              <FieldLabel htmlFor={`${prefix}-firstName`} required>
                Prénom(s)
              </FieldLabel>
              <TextInput
                id={`${prefix}-firstName`}
                value={author.firstName}
                onChange={(firstName) => onChange({ ...author, firstName })}
                error={getError(errors, `${prefix}-firstName`)}
              />
            </div>
            <div>
              <FieldLabel htmlFor={`${prefix}-lastName`} required>
                Nom
              </FieldLabel>
              <TextInput
                id={`${prefix}-lastName`}
                value={author.lastName}
                onChange={(lastName) => onChange({ ...author, lastName })}
                error={getError(errors, `${prefix}-lastName`)}
              />
            </div>
            <div>
              <FieldLabel htmlFor={`${prefix}-email`} required>
                E-mail
              </FieldLabel>
              <TextInput
                id={`${prefix}-email`}
                type="email"
                value={author.email}
                onChange={(email) => onChange({ ...author, email })}
                error={getError(errors, `${prefix}-email`)}
                autoComplete="email"
              />
            </div>
            <div>
              <FieldLabel htmlFor={`${prefix}-phone`} required={isCorresponding}>
                Téléphone
              </FieldLabel>
              <TextInput
                id={`${prefix}-phone`}
                type="tel"
                value={author.phone}
                onChange={(phone) => onChange({ ...author, phone })}
                placeholder="+216 00 000 000"
                error={getError(errors, `${prefix}-phone`)}
                autoComplete="tel"
              />
              {!isCorresponding && <FieldHint>Optionnel pour les co-auteurs</FieldHint>}
            </div>
            <div>
              <FieldLabel htmlFor={`${prefix}-orcid`}>ORCID</FieldLabel>
              <TextInput
                id={`${prefix}-orcid`}
                value={author.orcid}
                onChange={(orcid) => onChange({ ...author, orcid })}
                placeholder="0000-0000-0000-0000"
              />
              <FieldHint>Optionnel</FieldHint>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--grey-400)]">
              Affiliation
            </p>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <FieldLabel htmlFor={`${orgPrefix}-institution`} required>
                Institution
              </FieldLabel>
              <TextInput
                id={`${orgPrefix}-institution`}
                value={affiliation?.institution ?? ""}
                onChange={(institution) =>
                  affiliation && onAffiliationChange({ ...affiliation, institution })
                }
                placeholder="Université, institut, établissement…"
                error={getError(errors, orgPrefix)}
              />
            </div>
            <div>
              <FieldLabel htmlFor={`${orgPrefix}-department`}>Département / Laboratoire</FieldLabel>
              <TextInput
                id={`${orgPrefix}-department`}
                value={affiliation?.department ?? ""}
                onChange={(department) =>
                  affiliation && onAffiliationChange({ ...affiliation, department })
                }
                placeholder="Faculté, laboratoire, département…"
              />
            </div>
            <div>
              <CountrySelect
                id={`${orgPrefix}-country`}
                value={affiliation?.country ?? ""}
                onChange={(country) =>
                  affiliation && onAffiliationChange({ ...affiliation, country })
                }
                error={getError(errors, orgPrefix)}
                required
              />
            </div>
          </div>
        </div>

        <label
          className={cn(
            "flex cursor-pointer items-center gap-3 rounded-[var(--radius-xl)] border px-4 py-3.5 transition-colors",
            isPresenting
              ? "border-[var(--brand)]/25 bg-[var(--brand-soft)]"
              : "border-[var(--border)] hover:bg-[var(--grey-50)]"
          )}
        >
          <input
            type="radio"
            name="presentingAuthor"
            checked={isPresenting}
            onChange={onSetPresenting}
            className="h-4 w-4 accent-[var(--brand)]"
          />
          <span className="text-sm font-medium text-[var(--black)]">
            Présentera la communication au colloque
          </span>
        </label>
      </div>
    </article>
  )
}

export function AuthorsStep({
  draft,
  onChange,
  errors,
}: {
  draft: SubmissionDraft
  onChange: (patch: Partial<SubmissionDraft>) => void
  errors: StepErrors
}) {
  const updateAuthor = (id: string, author: Author) =>
    onChange({ authors: draft.authors.map((a) => (a.id === id ? author : a)) })

  const updateOrg = (id: string, org: Organization) =>
    onChange({ organizations: draft.organizations.map((o) => (o.id === id ? org : o)) })

  const preview = draft.authors
    .map((author) => {
      const name = formatAuthorName(author)
      if (!name) return null
      const primary = draft.organizations.find((o) => o.id === author.primaryOrgId)
      const primaryLabel = primary ? formatAffiliation(primary) : ""
      return primaryLabel ? `${name} — ${primaryLabel}` : name
    })
    .filter(Boolean)

  return (
    <div className="space-y-8">
      <SectionBlock
        title="Les auteurs"
        description={`Renseignez chaque auteur avec ses coordonnées et son établissement de rattachement (maximum ${MAX_AUTHORS} auteurs).`}
      >
        <div className="space-y-5">
          {draft.authors.map((author, index) => (
            <AuthorCard
              key={author.id}
              author={author}
              affiliation={draft.organizations.find((o) => o.id === author.primaryOrgId)}
              index={index}
              total={draft.authors.length}
              isPresenting={draft.presentingAuthorId === author.id}
              errors={errors}
              onChange={(updated) => updateAuthor(author.id, updated)}
              onAffiliationChange={(org) => updateOrg(org.id, org)}
              onRemove={() => {
                const authors = draft.authors.filter((a) => a.id !== author.id)
                onChange({
                  authors,
                  organizations: draft.organizations.filter((o) => o.id !== author.primaryOrgId),
                  presentingAuthorId:
                    draft.presentingAuthorId === author.id
                      ? (authors[0]?.id ?? "")
                      : draft.presentingAuthorId,
                })
              }}
              onMoveUp={() => onChange({ authors: moveItem(draft.authors, index, index - 1) })}
              onMoveDown={() => onChange({ authors: moveItem(draft.authors, index, index + 1) })}
              onSetPresenting={() => onChange({ presentingAuthorId: author.id })}
            />
          ))}
        </div>

        {draft.authors.length < MAX_AUTHORS ? (
          <button
            type="button"
            onClick={() => {
              const { author, organization } = createAuthorWithAffiliation()
              onChange({
                authors: [...draft.authors, author],
                organizations: [...draft.organizations, organization],
              })
            }}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--black)] transition-colors hover:bg-[var(--grey-50)]"
          >
            <Plus className="h-4 w-4" />
            Ajouter un co-auteur
          </button>
        ) : (
          <p className="mt-5 text-sm text-[var(--grey-500)]">
            Limite atteinte : {MAX_AUTHORS} auteurs maximum par soumission.
          </p>
        )}
        <FieldError message={getError(errors, "authors")} />
        <FieldError message={getError(errors, "presentingAuthor")} />
      </SectionBlock>

      {preview.length > 0 && (
        <div className="rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
            Aperçu bibliographique
          </p>
          <ul className="mt-3 space-y-2">
            {preview.map((line) => (
              <li key={line} className="text-sm leading-relaxed text-[var(--grey-600)]">
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
