"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { cn } from "@/lib/utils"

export function CTASection({ className }: { className?: string }) {
  return (
    <section className={cn("section-block landing-section section-muted pb-20 md:pb-24", className)}>
      <div className="container-main">
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--brand-dark)]">
            <div className="mesh-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
            <div className="relative min-h-0 md:min-h-[360px]">
              <Image src="/hero/2.png" alt="" fill className="object-cover opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)] via-[var(--brand-dark)]/85 to-[var(--brand)]/40" />

              <StaggerChildren
                className="relative flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 md:min-h-[480px] md:px-16 lg:px-20"
                stagger={0.08}
                delay={0.1}
              >
                <StaggerItem>
                  <span className="pill-outline-white w-fit text-xs sm:text-sm">Prêt à participer ?</span>
                </StaggerItem>
                <StaggerItem>
                  <h2 className="t-section mt-5 max-w-xl text-white sm:mt-6">
                    Rejoignez RIPU26 à Sousse
                  </h2>
                </StaggerItem>
                <StaggerItem>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:mt-4 sm:t-body">
                    Soumettez votre communication et participez à la 2e édition
                    internationale de la Rencontre Internationale de la Pédagogie Universitaire.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                    <Link href="/authors" className="btn-lime w-full justify-center sm:w-auto">
                      Soumettre une communication
                      <span className="btn-lime-icon"><ArrowRight className="h-4 w-4" /></span>
                    </Link>
                    <Link href="/contact" className="btn-hero w-full justify-center sm:w-auto">
                      Nous contacter
                    </Link>
                  </div>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
