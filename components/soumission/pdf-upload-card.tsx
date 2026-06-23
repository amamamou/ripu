"use client"

import { useRef } from "react"
import { Check, FileText, Upload, X } from "lucide-react"
import {
  PDF_MAX_BYTES,
  validatePdfFile,
  type PdfMeta,
  type StepErrors,
} from "@/lib/submission-form"
import { FieldError } from "@/components/soumission/submission-fields"
import { cn } from "@/lib/utils"

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} o`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`
}

export function PdfUploadCard({
  file,
  meta,
  needsReattach,
  onFile,
  onClear,
  errors,
}: {
  file: File | null
  meta: PdfMeta | null
  needsReattach?: boolean
  onFile: (file: File, meta: PdfMeta) => void
  onClear: () => void
  errors: StepErrors
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const pdfErrors = { ...validatePdfFile(file, meta), ...errors }

  const checks = [
    { label: "Document PDF joint", ok: Boolean(file && meta) },
    {
      label: "Format PDF valide",
      ok: Boolean(file?.name.toLowerCase().endsWith(".pdf") || file?.type === "application/pdf"),
    },
    {
      label: `Taille acceptable (max ${formatFileSize(PDF_MAX_BYTES)})`,
      ok: Boolean(file && file.size <= PDF_MAX_BYTES),
    },
  ]

  const allOk = checks.every((c) => c.ok)

  const handleFile = (selected: File | null) => {
    if (!selected) return
    onFile(selected, { fileName: selected.name, fileSize: selected.size })
  }

  return (
    <section className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-white p-6 md:p-7">
      <div className="flex items-start gap-4">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
            allOk ? "bg-[var(--success-soft)] text-[var(--success)]" : "bg-[var(--grey-50)] text-[var(--grey-400)]"
          )}
        >
          <FileText className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
            Document de soumission
          </p>
          <h3 className="mt-1 text-base font-semibold tracking-tight text-[var(--black)]">
            Votre communication (PDF)
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--grey-600)]">
            Le PDF est le support officiel de votre contribution. Format Springer LNCS, 2 à 4 pages.
          </p>
        </div>
      </div>

      {needsReattach && (
        <p className="mt-5 text-sm text-[var(--grey-600)]">
          Joignez à nouveau votre PDF pour finaliser la soumission.
        </p>
      )}

      {allOk && file && (
        <p className="mt-5 flex items-center gap-2 text-sm font-medium text-[var(--success)]">
          <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
          Document vérifié
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,.pdf"
        className="sr-only"
        onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
      />

      {!file ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="mt-6 flex w-full flex-col items-center justify-center rounded-[var(--radius-xl)] border-2 border-dashed border-[var(--border)] bg-[var(--grey-50)] px-6 py-10 transition-colors hover:border-[var(--brand)]/30 hover:bg-[var(--brand-soft)]/30"
        >
          <Upload className="h-6 w-6 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
          <span className="mt-3 text-sm font-semibold text-[var(--black)]">
            Joindre le PDF de votre communication
          </span>
          <span className="mt-1 text-xs text-[var(--grey-400)]">PDF uniquement · 10 Mo maximum</span>
        </button>
      ) : (
        <div className="mt-6 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--grey-50)] p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[var(--black)]">{file.name}</p>
              <p className="mt-1 text-xs text-[var(--grey-400)]">{formatFileSize(file.size)}</p>
            </div>
            <button
              type="button"
              onClick={onClear}
              className="rounded-full p-2 text-[var(--grey-400)] hover:bg-white hover:text-[var(--black)]"
              aria-label="Retirer le fichier"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-4 text-sm font-semibold text-[var(--brand)]"
          >
            Remplacer le fichier
          </button>
        </div>
      )}

      <ul className="mt-6 space-y-2.5">
        {checks.map((check) => (
          <li key={check.label} className="flex items-center gap-2.5 text-sm">
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                check.ok ? "bg-[var(--brand-soft)] text-[var(--brand)]" : "bg-[var(--grey-100)] text-[var(--grey-400)]"
              )}
            >
              <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
            </span>
            <span className={check.ok ? "text-[var(--black)]" : "text-[var(--grey-600)]"}>
              {check.label}
            </span>
          </li>
        ))}
      </ul>

      <FieldError message={pdfErrors.pdf} />
    </section>
  )
}
