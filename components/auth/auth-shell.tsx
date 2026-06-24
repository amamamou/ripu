"use client"

import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"

export function AuthShell({
  children,
  eyebrow,
  heading,
  description,
}: {
  children: ReactNode
  eyebrow: string
  heading: string
  description: string
}) {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-[var(--border)]">
        <div className="container-main flex h-[4.25rem] items-center justify-between md:h-[4.75rem]">
          <Link href="/" aria-label="RIPU26 — Accueil">
            <Image
              src="/logo.png"
              alt=""
              width={140}
              height={46}
              className="h-8 w-auto object-contain md:h-9"
              priority
            />
          </Link>
          <Link
            href="/"
            className="link-arrow inline-flex text-sm font-semibold text-[var(--grey-600)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            Retour au site
          </Link>
        </div>
      </header>

      <div className="container-main flex flex-1 items-center justify-center py-12 md:py-16">
        <div className="w-full max-w-[24rem] sm:max-w-[26rem]">
          <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">{eyebrow}</p>
          <h1 className="mt-4 text-[clamp(1.75rem,5vw,2.25rem)] font-bold tracking-tight text-[var(--black)]">
            {heading}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[var(--grey-600)]">{description}</p>

          <div className="mt-10">{children}</div>

          <p className="mt-10 text-center text-xs leading-relaxed text-[var(--grey-400)]">
            En continuant, vous acceptez les{" "}
            <Link
              href="/about"
              className="text-[var(--grey-600)] underline-offset-2 hover:text-[var(--brand)] hover:underline"
            >
              conditions d&apos;utilisation
            </Link>{" "}
            de RIPU26.
          </p>
        </div>
      </div>
    </main>
  )
}
