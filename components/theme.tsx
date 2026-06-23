"use client"

import { BrainCircuit, GraduationCap, Users } from "lucide-react"
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
    title: "Intelligence Artificielle Générative & Enseignement",
    tags: ["IA Générative", "Enseignement", "Innovation"],
    topics: [
      "L'IAG comme tuteur d'apprentissage",
      "L'IAG et le geste enseignant",
      "L'IAG pour la correction des examens",
      "Les effets de l'IAG sur les apprentissages",
      "L'IAG et la vie étudiante",
      "L'avenir de l'enseignement supérieur à l'ère de l'IAG",
      "Les plans d'études à l'heure de l'IAG",
    ],
  },
  {
    icon: GraduationCap,
    num: "02",
    stat: "APC",
    statLabel: "Pédagogie",
    title: "Approches Pédagogiques",
    tags: ["APC", "Pédagogie", "Gamification"],
    topics: [
      "L'approche par compétences (APC)",
      "Les plans d'études à l'ère de l'IA et de l'APC",
      "La gamification comme levier d'apprentissage",
    ],
  },
  {
    icon: Users,
    num: "03",
    stat: "Genre",
    statLabel: "Axe transversal",
    title: "Genre & Éducation",
    tags: ["Inclusion", "Équité", "Diversité"],
    topics: ["La place des femmes dans l'éducation"],
  },
] as const

export function PhilosophySection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="topics"
      className="section-block landing-section relative overflow-hidden bg-[#3a1570]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 85% 15%, rgba(140, 90, 220, 0.22) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 10% 85%, rgba(80, 40, 140, 0.2) 0%, transparent 50%)
          `,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/banner.png')] bg-cover bg-center opacity-[0.16] mix-blend-luminosity"
        aria-hidden
      />

      <div className="container-main relative">
        <Reveal>
          <SectionHead
            dark
            label="Appel à communications"
            title="Trois axes pour soumettre votre travail"
            description="Choisissez l'axe qui correspond à votre recherche, votre retour d'expérience ou votre communication scientifique."
            action={{ label: "Découvrir les axes du colloque", href: "/about#topics", variant: "ghost" }}
          />
        </Reveal>

        <StaggerChildren className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:items-stretch lg:mt-24">
          {axes.map((axe, i) => {
            const active = hovered === i

            return (
              <StaggerItem key={axe.num} className="h-full">
                <article
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden rounded-[var(--radius-xl)] p-5 transition-all duration-500 sm:min-h-[360px] md:min-h-[400px] md:p-6",
                    active
                      ? "bg-white/16 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                      : "bg-white/[0.08] hover:bg-white/12"
                  )}
                >
                  <div className="mb-6 flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[var(--black)]">
                      <axe.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{axe.stat}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">
                        {axe.statLabel}
                      </p>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-3 text-start">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Axe {axe.num}
                    </span>

                    <h3 className="text-base font-bold leading-snug text-white md:text-lg">
                      {axe.title}
                    </h3>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40">
                      {axe.tags.join(" · ")}
                    </p>

                    <ul className="space-y-2">
                      {axe.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2.5 text-[11px] leading-snug text-white/60 md:text-xs md:leading-relaxed"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/35"
                            aria-hidden
                          />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
