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
      <header className="fixed inset-x-0 top-0 z-50 overflow-visible bg-white/92 backdrop-blur-xl backdrop-saturate-150">
        <div className="container-main flex h-[4.25rem] items-center justify-between gap-4 md:h-[4.75rem]">
          <Link
            href="/"
            className="relative z-10 flex h-full shrink-0 items-center"
            aria-label="RIPU26 — Accueil"
          >
            <Image
              src="/logo.png"
              alt=""
              width={220}
              height={72}
              priority
              className="h-[2.75rem] w-auto max-w-[42vw] origin-left scale-110 object-contain sm:max-w-none sm:h-[3.25rem] sm:scale-[1.35] md:scale-[1.55]"
            />
          </Link>
          <Link
            href="/"
            className="link-arrow relative z-10 inline-flex text-sm font-semibold text-[var(--grey-600)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            Retour au site
          </Link>
        </div>
      </header>

      <div className="container-main flex flex-1 items-center justify-center pb-12 pt-[4.25rem] md:pb-16 md:pt-[4.75rem]">
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
              href="/conditions-utilisation"
              className="text-[var(--grey-600)] underline-offset-2 hover:text-[var(--brand)] hover:underline"
            >
              conditions d&apos;utilisation
            </Link>{" "}
            et la{" "}
            <Link
              href="/confidentialite"
              className="text-[var(--grey-600)] underline-offset-2 hover:text-[var(--brand)] hover:underline"
            >
              politique de confidentialité
            </Link>{" "}
            de RIPU26.
          </p>
        </div>
      </div>
    </main>
  )
}
