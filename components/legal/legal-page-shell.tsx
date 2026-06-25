"use client"

import type { ReactNode } from "react"
import { Reveal } from "@/components/landing/reveal"

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-[var(--black)]">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--grey-600)]">{children}</div>
    </section>
  )
}

export function LegalPageShell({
  eyebrow,
  title,
  description,
  updatedAt,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  updatedAt: string
  children: ReactNode
}) {
  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      <section className="section-block pb-16 md:pb-24">
        <div className="container-main max-w-3xl">
          <Reveal>
            <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">{eyebrow}</p>
            <h1 className="t-section mt-4 text-[var(--black)]">{title}</h1>
            <p className="mt-3 text-sm leading-relaxed text-[var(--grey-600)]">{description}</p>
            <p className="mt-2 text-xs font-medium text-[var(--grey-400)]">
              Dernière mise à jour : {updatedAt}
            </p>
          </Reveal>

          <div className="mt-10 space-y-10 md:mt-12">{children}</div>
        </div>
      </section>
    </main>
  )
}
