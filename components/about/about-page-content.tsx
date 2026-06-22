"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BrainCircuit, Check, GraduationCap, Users } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { cn } from "@/lib/utils"

const axes = [
  {
    num: "01",
    icon: BrainCircuit,
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
    num: "02",
    icon: GraduationCap,
    title: "Approches Pédagogiques",
    tags: ["APC", "Pédagogie", "Gamification"],
    topics: [
      "L'approche par compétences (APC)",
      "Les plans d'études à l'ère de l'IA et de l'APC",
      "La gamification comme levier d'apprentissage",
    ],
  },
  {
    num: "03",
    icon: Users,
    title: "Genre & Éducation",
    tags: ["Inclusion", "Équité", "Diversité"],
    topics: ["La place des femmes dans l'éducation"],
  },
] as const

const ANNOUNCEMENT = {
  headline: "Les conférenciers invités seront annoncés prochainement.",
  body: "Les intervenants nationaux et internationaux seront dévoilés prochainement.",
} as const

const partners = [
  { name: "ISET Sousse", src: "/logos/isetsousse.webp" },
  { name: "Avignon Université", src: "/logos/avignon.webp" },
  { name: "EduLink", src: "/logos/edulink.png" },
  { name: "Graasp", src: "/logos/graasp.jpg" },
] as const

function AxeCard({
  num,
  icon: Icon,
  title,
  tags,
  topics,
}: (typeof axes)[number]) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-6 md:p-7">
      <div className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-[var(--brand)]" strokeWidth={1.5} aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
          Axe {num}
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-[var(--black)]">
        {title}
      </h3>

      <p className="mt-2 text-xs text-[var(--grey-400)]">{tags.join(" · ")}</p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {topics.map((topic) => (
          <li key={topic} className="flex gap-2.5 text-sm leading-relaxed text-[var(--grey-600)]">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]"
              strokeWidth={2}
              aria-hidden
            />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function AboutPageContent() {
  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      {/* Hero — same rhythm as landing about */}
      <section id="ripu" className="section-block pb-6 md:pb-10">
        <div className="container-main">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(240px,300px)] lg:items-end lg:gap-16 xl:gap-24">
            <div className="max-w-2xl">
              <Reveal>
                <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">À propos</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="t-section mt-4 text-[var(--black)]">RIPU26</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-sm font-medium text-[var(--grey-400)]">
                  2e édition internationale · Sousse, Tunisie · 30–31 octobre 2026
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 t-body text-[var(--grey-600)]">
                  La Rencontre Internationale de la Pédagogie Universitaire rassemble chercheurs,
                  enseignants et responsables académiques autour des transformations contemporaines
                  de l&apos;enseignement supérieur.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 t-body text-[var(--grey-600)]">
                  Cette 2ème édition explore les mutations induites par l&apos;intelligence
                  artificielle générative, l&apos;approche par compétences et les nouveaux modèles
                  d&apos;apprentissage dans un contexte d&apos;innovation pédagogique et de
                  transformation numérique.
                </p>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.12} className="lg:pb-1">
              <div className="mt-16 sm:mt-20 lg:mt-0">
                <div className="flex items-center">
                  {["/team/11.png", "/team/22.png", "/team/33.png"].map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={52}
                      height={52}
                      className={cn(
                        "h-[3.25rem] w-[3.25rem] rounded-full object-cover ring-[3px] ring-white",
                        i > 0 && "-ml-3"
                      )}
                    />
                  ))}
                  <div className="-ml-3 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white ring-[3px] ring-white">
                    +18
                  </div>
                </div>
                <p className="mt-5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--grey-400)]">
                  Équipe RIPU26
                </p>
                <Link href="/committee" className="link-arrow mt-2 inline-flex text-sm font-semibold">
                  Voir le comité complet
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22}>
            <div className="mt-14 md:mt-20">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--grey-400)]">
                Partenaires institutionnels
              </p>
              <ul
                className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-8 sm:mt-7 sm:justify-between sm:gap-x-6 sm:gap-y-0"
                aria-label="Partenaires institutionnels"
              >
                {partners.map((partner) => (
                  <li key={partner.name} className="flex items-center">
                    <div className="relative h-9 w-[6.75rem] sm:h-10 sm:w-[7.5rem]">
                      <Image
                        src={partner.src}
                        alt={partner.name}
                        fill
                        sizes="120px"
                        className="object-contain object-left sm:object-center"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Thématiques"
              title="Axes de la Communication"
              description="RIPU26 accueille des contributions scientifiques, retours d'expérience et travaux de recherche portant sur les transformations contemporaines de l'enseignement supérieur, l'intelligence artificielle générative et les innovations pédagogiques."
              action={{ label: "Guide des auteurs", href: "/authors", variant: "outline" }}
            />
          </Reveal>

          <StaggerChildren className="section-inner grid gap-5 md:grid-cols-3 md:items-stretch">
            {axes.map((axe) => (
              <StaggerItem key={axe.num} className="h-full">
                <AxeCard {...axe} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Programme & Conférenciers */}
      <section className="section-block section-white">
        <div className="container-main">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div id="program" className="h-full rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-7 md:p-9">
                <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">Programme</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                  Programme scientifique
                </h2>
                <p className="mt-6 font-medium leading-snug text-[var(--black)]">
                  {ANNOUNCEMENT.headline}
                </p>
                <p className="mt-3 t-body-sm text-[var(--grey-600)]">{ANNOUNCEMENT.body}</p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div id="speakers" className="h-full rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-7 md:p-9">
                <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">
                  Conférenciers
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                  Nos Conférenciers
                </h2>
                <p className="mt-6 font-medium leading-snug text-[var(--black)]">
                  {ANNOUNCEMENT.headline}
                </p>
                <p className="mt-3 t-body-sm text-[var(--grey-600)]">{ANNOUNCEMENT.body}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection className="section-white !bg-white !pt-0 !pb-16 md:!pb-24" />
    </main>
  )
}
