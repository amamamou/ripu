import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { COUNTRIES, isKnownCountry } from "@/lib/countries"
import { AUTHOR_SALUTATIONS, type AuthorSalutation } from "@/lib/submission-form"
import type { StepErrors } from "@/lib/submission-form"

export function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor?: string
  children: ReactNode
  required?: boolean
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold tracking-tight text-[var(--black)]"
    >
      {children}
      {required && (
        <span className="ml-1 text-[var(--brand)]" aria-hidden>
          *
        </span>
      )}
    </label>
  )
}

export function FieldHint({ children }: { children: ReactNode }) {
  return <p className="mt-1.5 text-xs leading-relaxed text-[var(--grey-400)]">{children}</p>
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="mt-2 text-xs font-medium text-[#b42318]" role="alert">
      {message}
    </p>
  )
}

export function TextInput({
  id,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  autoComplete,
}: {
  id: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={cn(
          "mt-2 w-full rounded-[var(--radius-xl)] border bg-white px-4 py-3 text-sm text-[var(--black)] outline-none transition-colors placeholder:text-[var(--grey-400)] focus:border-[var(--brand)]/40 focus:ring-2 focus:ring-[var(--brand-soft)]",
          error ? "border-[#f04438]" : "border-[var(--border)]"
        )}
      />
      <FieldError message={error} />
    </div>
  )
}

export function TextArea({
  id,
  value,
  onChange,
  placeholder,
  error,
  rows = 5,
}: {
  id: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
  rows?: number
}) {
  return (
    <div>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={Boolean(error)}
        className={cn(
          "mt-2 w-full resize-y rounded-[var(--radius-xl)] border bg-white px-4 py-3 text-sm leading-relaxed text-[var(--black)] outline-none transition-colors placeholder:text-[var(--grey-400)] focus:border-[var(--brand)]/40 focus:ring-2 focus:ring-[var(--brand-soft)]",
          error ? "border-[#f04438]" : "border-[var(--border)]"
        )}
      />
      <FieldError message={error} />
    </div>
  )
}

export function OptionCard({
  selected,
  onSelect,
  title,
  description,
  name,
  value,
}: {
  selected: boolean
  onSelect: () => void
  title: string
  description: string
  name: string
  value: string
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer gap-4 rounded-[var(--radius-xl)] border p-5 transition-all",
        selected
          ? "border-[var(--brand)]/35 bg-[var(--brand-soft)]/50 ring-1 ring-[var(--brand)]/15"
          : "border-[var(--border)] bg-white hover:border-[var(--brand)]/20 hover:bg-[var(--grey-50)]"
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={onSelect}
        className="mt-1 h-4 w-4 shrink-0 accent-[var(--brand)]"
      />
      <span>
        <span className="block text-sm font-semibold tracking-tight text-[var(--black)]">{title}</span>
        <span className="mt-1 block text-sm leading-relaxed text-[var(--grey-600)]">{description}</span>
      </span>
    </label>
  )
}

export function SectionBlock({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section className="space-y-5">
      <div>
        <h3 className="text-base font-semibold tracking-tight text-[var(--black)]">{title}</h3>
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--grey-600)]">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}

export function getError(errors: StepErrors, key: string) {
  return errors[key]
}

function formSelectClassName(error?: string, empty?: boolean) {
  return cn(
    "mt-2 w-full rounded-[var(--radius-xl)] border bg-white px-4 py-3 text-sm text-[var(--black)] outline-none transition-colors focus:border-[var(--brand)]/40 focus:ring-2 focus:ring-[var(--brand-soft)]",
    error ? "border-[#f04438]" : "border-[var(--border)]",
    empty && "text-[var(--grey-400)]"
  )
}

export function SalutationPicker({
  id,
  value,
  onChange,
  error,
  required,
}: {
  id: string
  value: AuthorSalutation
  onChange: (value: AuthorSalutation) => void
  error?: string
  required?: boolean
}) {
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        Salutations
      </FieldLabel>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as AuthorSalutation)}
        aria-invalid={Boolean(error)}
        className={formSelectClassName(error, !value)}
      >
        <option value="">Sélectionner une salutation…</option>
        {AUTHOR_SALUTATIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FieldError message={error} />
    </div>
  )
}

export function CountrySelect({
  id,
  value,
  onChange,
  error,
  required,
}: {
  id: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
}) {
  const legacyValue = value.trim() && !isKnownCountry(value.trim()) ? value.trim() : ""

  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        Pays
      </FieldLabel>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        className={formSelectClassName(error, !value)}
      >
        <option value="">Sélectionner un pays…</option>
        {legacyValue && <option value={legacyValue}>{legacyValue}</option>}
        {COUNTRIES.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <FieldError message={error} />
    </div>
  )
}
