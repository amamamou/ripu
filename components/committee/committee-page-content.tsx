"use client"

import Image from "next/image"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { COUNTRY_FLAGS, sortByLastName } from "@/lib/countries"

const scientificCommittee = [
  {
    name: "Marwa Ben Ali",
    institution: "Free University of Bozen-Bolzano",
    country: "Italie",
  },
  {
    name: "Marianne Dubé",
    institution: "Université de Sherbrooke",
    country: "Canada",
  },
  {
    name: "Denis Gillet",
    institution: "EPFL",
    country: "Suisse",
  },
  {
    name: "Hounaida Haddaji",
    institution: "ISET Nabeul",
    country: "Tunisie",
  },
  {
    name: "Emmanuel (Hala) El Hage",
    institution: "Université Sainte Famille, Batroun",
    country: "Liban",
  },
  {
    name: "Sandy Ingram",
    institution: "HEIA de Fribourg",
    country: "Suisse",
  },
  {
    name: "Dalel Kanzari",
    institution: "ISSAT Sousse",
    country: "Tunisie",
  },
  {
    name: "Rym Mamlouk Mellouli",
    institution: "Institut Supérieur des Beaux-Arts de Sousse",
    country: "Tunisie",
  },
  {
    name: "Christophe Mathieu",
    institution: "Aix-Marseille Université",
    country: "France",
  },
  {
    name: "Bertrand Moquet",
    institution: "AMUE, Université Bordeaux Montaigne",
    country: "France",
  },
  {
    name: "Sonia Sahli",
    institution: "ISET Sousse",
    country: "Tunisie",
  },
  {
    name: "Jean-François Stassen",
    institution: "Université de Genève",
    country: "Suisse",
  },
  {
    name: "Eric Tanguy",
    institution: "Nantes Université",
    country: "France",
  },
  {
    name: "Nicolas Thorel",
    institution: "Université de Technologie de Troyes",
    country: "France",
  },
  {
    name: "Thierry Spriet",
    institution: "Avignon Université",
    country: "France",
  },
] as const

const organizingCommitteePresident = {
  name: "Wissem Eltaief",
  institution: "ISET Sousse",
  country: "Tunisie",
  role: "Président du comité d'organisation",
  image: "/team/44.png",
} as const

const organizingCommittee = [
  { name: "Maram Amamou", institution: "Université de Sousse", country: "Tunisie" },
  { name: "Ahmed Ksontini", institution: "ISET Sousse", country: "Tunisie" },
  { name: "Amal Karaoud", institution: "Université de Sfax", country: "Tunisie" },
  { name: "Selim Karaa", institution: "PRISTINI School of AI", country: "Tunisie" },
  { name: "Islem Dardouri", institution: "ISET Sousse", country: "Tunisie" },
] as const

const generalChairs = [
  {
    name: "Sonia Sahli",
    institution: "ISET Sousse",
    country: "Tunisie",
    image: "/sonia.png",
    role: "Présidente RIPU26",
  },
] as const

const scientificCommitteePresident = {
  name: "Thierry Spriet",
  institution: "Avignon Université",
  country: "France",
  role: "Président du comité scientifique",
  image: "/team/33.png",
} as const

function CountryBadge({ country }: { country: string }) {
  const flag = COUNTRY_FLAGS[country]

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[0.9375rem] leading-none ring-1 ring-[var(--border)]"
        aria-hidden
      >
        {flag ?? "🌐"}
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
        {country}
      </span>
    </span>
  )
}

function ProfileCard({
  name,
  institution,
  country,
  image,
  role,
}: {
  name: string
  institution: string
  country: string
  image: string
  role?: string
}) {
  return (
    <article className="w-full max-w-[16.5rem]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--grey-100)]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 70vw, 16.5rem"
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="mt-5">
        <h3 className="text-base font-semibold leading-snug tracking-tight text-[var(--black)]">{name}</h3>
        {role ? (
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">{role}</p>
        ) : null}
        <p className="mt-2 text-sm leading-relaxed text-[var(--grey-600)]">{institution}</p>
        <div className="mt-4">
          <CountryBadge country={country} />
        </div>
      </div>
    </article>
  )
}

function MemberCard({
  name,
  institution,
  country,
  role,
}: {
  name: string
  institution?: string
  country?: string
  role?: string
}) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-6 md:p-7">
      <h3 className="text-base font-semibold leading-snug tracking-tight text-[var(--black)]">
        {name}
      </h3>
      {role && (
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--brand)]">
          {role}
        </p>
      )}
      {institution && (
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--grey-600)]">{institution}</p>
      )}
      {country && (
        <div className="mt-3">
          <CountryBadge country={country} />
        </div>
      )}
    </article>
  )
}

export function CommitteePageContent() {
  const sortedScientificCommittee = sortByLastName(scientificCommittee).filter(
    (member) => member.name !== scientificCommitteePresident.name
  )

  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      {/* General Chairs */}
      <section className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead label="Direction" title="Présidence de RIPU26" />
          </Reveal>

          <Reveal delay={0.06} className="section-inner">
            <ProfileCard {...generalChairs[0]} />
          </Reveal>
        </div>
      </section>

      {/* Scientific Committee */}
      <section className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead label="Expertise" title="Comité Scientifique International" />
          </Reveal>

          <Reveal delay={0.06} className="section-inner">
            <ProfileCard {...scientificCommitteePresident} />
          </Reveal>

          <StaggerChildren className="section-inner grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sortedScientificCommittee.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <MemberCard {...member} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Organizing Committee */}
      <section className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead label="Organisation" title="Comité d'Organisation" />
          </Reveal>

          <Reveal delay={0.06} className="section-inner">
            <ProfileCard {...organizingCommitteePresident} />
          </Reveal>

          <StaggerChildren className="section-inner grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {organizingCommittee.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <MemberCard {...member} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </main>
  )
}
