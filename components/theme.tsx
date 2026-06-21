"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BrainCircuit, GraduationCap, Users } from "lucide-react"
import { useState } from "react"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { cn } from "@/lib/utils"

const axes = [
  {
    icon: BrainCircuit,
    num: "01",
    stat: "IAG",
    statLabel: "Intelligence Artificielle",
    title: "IA générative & enseignement",
    description:
      "Apprentissage, évaluation et transformation des pratiques enseignantes à l'ère de l'IAG.",
    topics: [
      "Tuteur d'apprentissage",
      "Geste enseignant",
      "Correction automatisée",
      "Effets sur les apprentissages",
    ],
    href: "/authors#call",
    featured: true,
  },
  {
    icon: GraduationCap,
    num: "02",
    stat: "APC",
    statLabel: "Pédagogie",
    title: "Approches pédagogiques",
    description: "Cursus, méthodes actives et approche par compétences à l'ère du numérique.",
    topics: ["APC", "Plans d'études", "Gamification"],
    href: "/authors#call",
  },
  {
    icon: Users,
    num: "03",
    stat: "01",
    statLabel: "Axe transversal",
    title: "Genre & éducation",
    description: "Équité, inclusion et place des femmes dans l'enseignement supérieur.",
    topics: ["Équité", "Inclusion", "Leadership féminin"],
    href: "/about#topics",
  },
]

export function PhilosophySection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="topics"
      className="section-block landing-section relative overflow-hidden bg-[var(--brand-dark)]"
    >
      <div className="mesh-bg pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/hero/1.png')] bg-cover bg-center opacity-[0.12] mix-blend-luminosity"
        aria-hidden
      />

      <div className="container-main relative">
        <Reveal>
          <SectionHead
            dark
            label="Appel à communications"
            title="Trois axes pour soumettre votre travail"
            description="Choisissez l'axe qui correspond à votre recherche, votre retour d'expérience ou votre communication scientifique."
            action={{ label: "Guide des auteurs", href: "/authors#call", variant: "ghost" }}
          />
        </Reveal>

        <StaggerChildren className="section-inner grid gap-4 md:grid-cols-3 md:items-stretch">
          {axes.map((axe, i) => {
            const active = hovered === i || (hovered === null && axe.featured)

            return (
              <StaggerItem key={axe.num} className="h-full">
                <Link
                  href={axe.href}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className={cn(
                    "group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] p-5 transition-all duration-500 sm:min-h-[260px] md:min-h-[280px] md:p-7",
                    active
                      ? "bg-white/14 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
                      : "bg-white/[0.06] hover:bg-white/10"
                  )}
                >
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 select-none text-[7rem] font-bold leading-none text-white/[0.04] lg:text-[8rem]"
                    aria-hidden
                  >
                    {axe.num}
                  </span>

                  {axe.featured && (
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                      <Image
                        src="/hii.png"
                        alt=""
                        fill
                        className="object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)] via-[var(--brand-dark)]/45 to-[var(--brand-dark)]/10" />
                    </div>
                  )}

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[var(--black)]">
                        <axe.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">{axe.stat}</p>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">
                          {axe.statLabel}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-auto pt-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Axe {axe.num}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-white md:text-xl">{axe.title}</h3>
                    <p className="mt-2 t-body-sm leading-relaxed text-white/55">{axe.description}</p>

                    {axe.topics.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {axe.topics.map((topic) => (
                          <li
                            key={topic}
                            className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium leading-none text-white/75"
                          >
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}

                    <span className="mt-5 inline-flex items-center gap-2 t-body-sm font-semibold text-white/80 transition-all group-hover:gap-3 group-hover:text-white">
                      Soumettre sur cet axe
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
