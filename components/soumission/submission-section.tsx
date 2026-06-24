"use client"

import type { ReactNode } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function SubmissionSection({
  step,
  title,
  description,
  complete,
  children,
}: {
  step: number
  title: string
  description: string
  complete?: boolean
  children: ReactNode
}) {
  return (
    <section
      id={`submission-section-${step}`}
      className="scroll-mt-[5.75rem] border-b border-[var(--border)] px-6 py-10 last:border-b-0 md:px-8 md:py-12"
    >
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
            Section {String(step).padStart(2, "0")}
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
            {title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-[var(--grey-600)]">{description}</p>
        </div>
        {complete !== undefined && (
          <span
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold",
              complete
                ? "bg-[var(--success-soft)] text-[var(--success)]"
                : "bg-[var(--grey-50)] text-[var(--grey-600)]"
            )}
          >
            {complete ? (
              <>
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                Complété
              </>
            ) : (
              "À compléter"
            )}
          </span>
        )}
      </div>
      {children}
    </section>
  )
}
