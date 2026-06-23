"use client"

import { Building2, Check, ChevronDown, ChevronUp, Plus, Star, Trash2, UserRound } from "lucide-react"
import {
  createEmptyAuthor,
  createEmptyOrganization,
  formatAffiliation,
  formatAuthorName,
  isOrganizationComplete,
  type Author,
  type Organization,
  type SubmissionDraft,
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

function moveItem<T>(items: T[], from: number, to: number) {
  if (to < 0 || to >= items.length) return items
  const next = [...items]
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item)
  return next
}

function AffiliationCard({
  org,
  index,
  canRemove,
  errors,
  onChange,
  onRemove,
}: {
  org: Organization
  index: number
  canRemove: boolean
  errors: StepErrors
  onChange: (org: Organization) => void
  onRemove: () => void
}) {
  const complete = isOrganizationComplete(org)
  const prefix = `org-${org.id}`

  return (
    <article
      className={cn(
        "rounded-[var(--radius-xl)] border p-5 md:p-6",
        complete ? "border-[var(--border)] bg-white" : "border-[var(--border)] bg-[var(--grey-50)]"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
            {complete ? (
              <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            ) : (
              <Building2 className="h-4 w-4" strokeWidth={1.5} aria-hidden />
            )}
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--black)]">
              {org.institution.trim() || `Affiliation ${index + 1}`}
            </p>
            <p className="text-xs text-[var(--grey-400)]">
              {complete ? "Affiliation enregistrée" : "Institution et pays requis"}
            </p>
          </div>
        </div>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="rounded-full p-2 text-[var(--grey-400)] hover:bg-[#fef3f2] hover:text-[#b42318]"
            aria-label="Supprimer l'affiliation"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FieldLabel htmlFor={`${prefix}-institution`} required>
            Institution
          </FieldLabel>
          <TextInput
            id={`${prefix}-institution`}
            value={org.institution}
            onChange={(institution) => onChange({ ...org, institution })}
            placeholder="Université, institut, établissement…"
            error={getError(errors, prefix)}
          />
        </div>
        <div>
          <FieldLabel htmlFor={`${prefix}-department`}>Département / Laboratoire</FieldLabel>
          <TextInput
            id={`${prefix}-department`}
            value={org.department}
            onChange={(department) => onChange({ ...org, department })}
            placeholder="Faculté, laboratoire, département…"
          />
        </div>
        <div>
          <FieldLabel htmlFor={`${prefix}-country`} required>
            Pays
          </FieldLabel>
          <TextInput
            id={`${prefix}-country`}
            value={org.country}
            onChange={(country) => onChange({ ...org, country })}
            placeholder="Tunisie, France…"
          />
        </div>
      </div>
    </article>
  )
}

function AuthorCard({
  author,
  index,
  total,
  organizations,
  isPresenting,
  errors,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
  onSetPresenting,
}: {
  author: Author
  index: number
  total: number
  organizations: Organization[]
  isPresenting: boolean
  errors: StepErrors
  onChange: (author: Author) => void
  onRemove: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  onSetPresenting: () => void
}) {
  const prefix = `author-${author.id}`
  const linkedOrgs = organizations.filter(
    (o) => isOrganizationComplete(o) && author.orgIds.includes(o.id)
  )

  const toggleOrg = (orgId: string) => {
    const has = author.orgIds.includes(orgId)
    const orgIds = has ? author.orgIds.filter((id) => id !== orgId) : [...author.orgIds, orgId]
    let primaryOrgId = author.primaryOrgId
    if (!has && orgIds.length === 1) primaryOrgId = orgId
    if (has && primaryOrgId === orgId) primaryOrgId = orgIds[0] ?? ""
    onChange({ ...author, orgIds, primaryOrgId })
  }

  const availableOrgs = organizations.filter(isOrganizationComplete)

  return (
    <article className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-white p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand)]">
            <UserRound className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-tight text-[var(--black)]">
              {formatAuthorName(author) || `Auteur ${index + 1}`}
            </p>
            <p className="text-xs text-[var(--grey-400)]">
              {index === 0 ? "Auteur correspondant" : `Co-auteur · position ${index + 1}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={onMoveUp} disabled={index === 0} className="rounded-full p-2 text-[var(--grey-400)] hover:bg-[var(--grey-50)] disabled:opacity-30" aria-label="Monter">
            <ChevronUp className="h-4 w-4" />
          </button>
          <button type="button" onClick={onMoveDown} disabled={index === total - 1} className="rounded-full p-2 text-[var(--grey-400)] hover:bg-[var(--grey-50)] disabled:opacity-30" aria-label="Descendre">
            <ChevronDown className="h-4 w-4" />
          </button>
          {total > 1 && (
            <button type="button" onClick={onRemove} className="rounded-full p-2 text-[var(--grey-400)] hover:bg-[#fef3f2] hover:text-[#b42318]" aria-label="Supprimer">
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor={`${prefix}-firstName`} required>Prénom(s)</FieldLabel>
          <TextInput id={`${prefix}-firstName`} value={author.firstName} onChange={(firstName) => onChange({ ...author, firstName })} error={getError(errors, `${prefix}-firstName`)} />
        </div>
        <div>
          <FieldLabel htmlFor={`${prefix}-lastName`} required>Nom</FieldLabel>
          <TextInput id={`${prefix}-lastName`} value={author.lastName} onChange={(lastName) => onChange({ ...author, lastName })} error={getError(errors, `${prefix}-lastName`)} />
        </div>
        <div>
          <FieldLabel htmlFor={`${prefix}-email`} required>E-mail</FieldLabel>
          <TextInput id={`${prefix}-email`} type="email" value={author.email} onChange={(email) => onChange({ ...author, email })} error={getError(errors, `${prefix}-email`)} autoComplete="email" />
        </div>
        <div>
          <FieldLabel htmlFor={`${prefix}-orcid`}>ORCID</FieldLabel>
          <TextInput id={`${prefix}-orcid`} value={author.orcid} onChange={(orcid) => onChange({ ...author, orcid })} placeholder="0000-0000-0000-0000" />
          <FieldHint>Optionnel</FieldHint>
        </div>
      </div>

      <div className="mt-6">
        {availableOrgs.length === 0 ? (
          <p className="text-sm text-[var(--grey-600)]">
            Créez d&apos;abord une affiliation complète dans la section ci-dessus.
          </p>
        ) : (
          <div className="space-y-2">
            {availableOrgs.map((org) => {
              const selected = author.orgIds.includes(org.id)
              const isPrimary = author.primaryOrgId === org.id
              const meta = [org.department.trim(), org.country.trim()].filter(Boolean).join(" · ")

              return (
                <label
                  key={org.id}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-[var(--radius-xl)] border px-4 py-3.5 transition-colors",
                    selected
                      ? "border-[var(--brand)]/25 bg-[var(--brand-soft)]"
                      : "border-[var(--border)] bg-white hover:bg-[var(--grey-50)]"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleOrg(org.id)}
                    className="mt-1 h-4 w-4 rounded accent-[var(--brand)]"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[var(--black)]">
                      {org.institution.trim()}
                    </span>
                    {meta && <span className="mt-0.5 block text-xs text-[var(--grey-600)]">{meta}</span>}
                    {selected && linkedOrgs.length > 1 && isPrimary && (
                      <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-[var(--brand)]">
                        <Star className="h-3 w-3 fill-current" aria-hidden />
                        Affiliation principale
                      </span>
                    )}
                  </span>
                </label>
              )
            })}
          </div>
        )}
        <FieldError message={getError(errors, `${prefix}-orgs`)} />

        {linkedOrgs.length > 1 && (
          <div className="mt-5">
            <p className="text-sm font-medium text-[var(--black)]">Affiliation principale</p>
            <p className="mt-1 text-xs text-[var(--grey-400)]">
              Pour l&apos;affichage bibliographique lorsque plusieurs établissements sont liés.
            </p>
            <div className="mt-3 space-y-2">
              {linkedOrgs.map((org) => (
                <label
                  key={org.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-[var(--radius-xl)] border px-4 py-3 transition-colors",
                    author.primaryOrgId === org.id
                      ? "border-[var(--brand)]/25 bg-[var(--brand-soft)]"
                      : "border-[var(--border)] hover:bg-[var(--grey-50)]"
                  )}
                >
                  <input
                    type="radio"
                    name={`primary-${author.id}`}
                    checked={author.primaryOrgId === org.id}
                    onChange={() => onChange({ ...author, primaryOrgId: org.id })}
                    className="h-4 w-4 accent-[var(--brand)]"
                  />
                  <span className="text-sm text-[var(--black)]">{org.institution.trim()}</span>
                </label>
              ))}
            </div>
            <FieldError message={getError(errors, `${prefix}-primary`)} />
          </div>
        )}
      </div>

      <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-[var(--radius-xl)] border border-[var(--border)] px-4 py-3.5 hover:bg-[var(--grey-50)]">
        <input type="radio" name="presentingAuthor" checked={isPresenting} onChange={onSetPresenting} className="h-4 w-4 accent-[var(--brand)]" />
        <span className="text-sm font-medium text-[var(--black)]">Présentera la communication au colloque</span>
      </label>
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
    <div className="space-y-10">
      <SectionBlock
        title="Vos affiliations"
        description="Créez les établissements impliqués dans cette contribution. Vous les associerez ensuite à chaque auteur."
      >
        <div className="space-y-4">
          {draft.organizations.map((org, index) => (
            <AffiliationCard
              key={org.id}
              org={org}
              index={index}
              canRemove={draft.organizations.length > 1}
              errors={errors}
              onChange={(updated) => updateOrg(org.id, updated)}
              onRemove={() =>
                onChange({
                  organizations: draft.organizations.filter((o) => o.id !== org.id),
                  authors: draft.authors.map((a) => ({
                    ...a,
                    orgIds: a.orgIds.filter((id) => id !== org.id),
                    primaryOrgId: a.primaryOrgId === org.id ? "" : a.primaryOrgId,
                  })),
                })
              }
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => onChange({ organizations: [...draft.organizations, createEmptyOrganization()] })}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
        >
          <Plus className="h-4 w-4" />
          Ajouter une affiliation
        </button>
        <FieldError message={getError(errors, "organizations")} />
      </SectionBlock>

      <SectionBlock
        title="Les auteurs"
        description="Renseignez les co-auteurs, leur ordre d'affichage et l'auteur présentateur."
      >
        <div className="space-y-4">
          {draft.authors.map((author, index) => (
            <AuthorCard
              key={author.id}
              author={author}
              index={index}
              total={draft.authors.length}
              organizations={draft.organizations}
              isPresenting={draft.presentingAuthorId === author.id}
              errors={errors}
              onChange={(updated) => updateAuthor(author.id, updated)}
              onRemove={() => {
                const authors = draft.authors.filter((a) => a.id !== author.id)
                onChange({
                  authors,
                  presentingAuthorId: draft.presentingAuthorId === author.id ? authors[0]?.id ?? "" : draft.presentingAuthorId,
                })
              }}
              onMoveUp={() => onChange({ authors: moveItem(draft.authors, index, index - 1) })}
              onMoveDown={() => onChange({ authors: moveItem(draft.authors, index, index + 1) })}
              onSetPresenting={() => onChange({ presentingAuthorId: author.id })}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => onChange({ authors: [...draft.authors, createEmptyAuthor()] })}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--black)] hover:bg-[var(--grey-50)]"
        >
          <Plus className="h-4 w-4" />
          Ajouter un auteur
        </button>
        <FieldError message={getError(errors, "presentingAuthor")} />
      </SectionBlock>

      {preview.length > 0 && (
        <div className="rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">Aperçu bibliographique</p>
          <ul className="mt-3 space-y-2">
            {preview.map((line) => (
              <li key={line} className="text-sm leading-relaxed text-[var(--grey-600)]">{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
