"use client"

import Link from "next/link"
import { ArrowUpRight, FileText, Mic2, Users } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

const steps: {
  step: string
  title: string
  description: string
  href: string
  label: string
  icon: LucideIcon
}[] = [
  {
    step: "01",
    title: "Soumettre",
    description: "Soumettez votre communication avant le 15 juillet 2026.",
    href: "/soumission",
    label: "Espace de soumission",
    icon: FileText,
  },
  {
    step: "02",
    title: "Évaluation",
    description: "Revue par les pairs et notification avant le 10 août.",
    href: "/authors#review",
    label: "Processus de revue",
    icon: Users,
  },
  {
    step: "03",
    title: "Présenter",
    description: "Participez à la conférence à Sousse, les 30 et 31 octobre 2026.",
    href: "/authors#dates",
    label: "Dates & inscription",
    icon: Mic2,
  },
]

export function ParticipateSection() {
  return (
    <section id="participate" className="section-block landing-section section-white relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] top-[20%] h-[40vh] w-[35vw] rounded-full bg-[var(--brand-soft)] blur-[100px]"
      />

      <div className="container-main relative">
        <Reveal>
          <SectionHead
            label="Participer"
            title="Rejoindre RIPU26"
            description="De la soumission à la scène — trois étapes pour vivre le colloque."
            action={{ label: "Appel à communications", href: "/authors", variant: "outline" }}
          />
        </Reveal>

        <div className="section-inner relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[8%] right-[8%] top-[2.75rem] hidden h-0.5 lg:block"
          >
            <div className="h-full w-full rounded-full bg-gradient-to-r from-[var(--brand-soft)] via-[var(--brand)]/25 to-[var(--brand-soft)]" />
          </div>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-12">
            {steps.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.step} delay={0.06 + i * 0.07}>
                  <motion.div
                    className={cn("relative", i === 1 && "lg:mt-8")}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                  >
                    <Link href={item.href} className="group relative block">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-1 top-2 select-none font-mono text-[5.5rem] font-medium leading-none tracking-tighter text-[var(--grey-100)] sm:text-[6.5rem]"
                      >
                        {item.step}
                      </span>

                      <div className="relative flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                        <div className="relative z-10 shrink-0">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand)] text-white shadow-[0_12px_32px_rgba(47,4,97,0.22)] transition-transform duration-300 group-hover:rotate-6 sm:h-16 sm:w-16">
                            <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
                          </div>
                          {i < steps.length - 1 && (
                            <span
                              aria-hidden
                              className="absolute left-1/2 top-full mt-2 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-[var(--brand)]/30 to-transparent lg:hidden"
                            />
                          )}
                        </div>

                        <div className="relative z-10 min-w-0 flex-1 lg:mt-8">
                          <h3 className="text-xl font-medium tracking-tight text-[var(--black)] sm:text-2xl">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--grey-600)] sm:text-[15px]">
                            {item.description}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] transition-colors group-hover:text-[var(--brand-dark)]">
                            {item.label}
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
