"use client"

import Image from "next/image"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"

const scientificCommittee = [
  {
    name: "Rym Mamlouk Mallouli",
    institution: "Institut des Beaux-Arts de Sousse",
    country: "Tunisie",
  },
  {
    name: "Hounaida Haddaji",
    institution: "ISET Nabeul",
    country: "Tunisie",
  },
  {
    name: "Dalel Kanzari",
    institution: "ISSAT Sousse",
    country: "Tunisie",
  },
  {
    name: "Marwa Ben Ali",
    institution: "Université Libre de Bolzano",
    country: "Italie",
  },
  {
    name: "Christophe Mathieu",
    institution: "Aix-Marseille Université",
    country: "France",
  },
  {
    name: "Bertrand Mocquet",
    institution: "MICA - Université Bordeaux Montaigne",
    country: "France",
  },
  {
    name: "Nicolas Thorel",
    institution: "Université Technologique de Troyes",
    country: "France",
  },
  {
    name: "Sandy Ingram",
    institution: "HEIA Fribourg",
    country: "Suisse",
  },
  {
    name: "Eric Tanguy",
    institution: "Nantes Université",
    country: "France",
  },
  {
    name: "Jean François",
    institution: "Université de Genève",
    country: "Suisse",
  },
  {
    name: "Emmanuelle Hajj",
    institution: "USF",
    country: "Liban",
  },
  {
    name: "Marianne Dubé",
    institution: "Université de Sherbrooke",
    country: "Canada",
  },
] as const

const organizingCommittee = [
  { name: "Maram Amamou", institution: "Université de Sousse" },
  { name: "Ahmed Ksontini", institution: "ISET Sousse" },
  { name: "Amal Karaoud", institution: "Université de Sfax" },
  { name: "Selim Karaa", institution: "PRISTINI School of AI" },
  { name: "Islem Dardouri", institution: "ISET Sousse" },
] as const

const generalChairs = [
  {
    name: "Sonia Sahli",
    image: "/team/11.png",
    institution: "ISET Sousse",
    country: "Tunisie",
  },
  {
    name: "Denis Gillet",
    image: "/team/22.png",
    institution: "EPFL",
    country: "Suisse",
  },
  {
    name: "Thierry Spriet",
    image: "/team/33.png",
    institution: "Avignon Université",
    country: "France",
  },
] as const

function MemberCard({
  name,
  institution,
  country,
}: {
  name: string
  institution?: string
  country?: string
}) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-6 md:p-7">
      <h3 className="text-base font-semibold leading-snug tracking-tight text-[var(--black)]">
        {name}
      </h3>
      {institution && (
        <p className="mt-2 text-sm leading-relaxed text-[var(--grey-600)]">{institution}</p>
      )}
      {country && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
          {country}
        </p>
      )}
    </article>
  )
}

export function CommitteePageContent() {
  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      {/* General Chairs */}
      <section className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Direction"
              title="General Chairs"
              description="La direction scientifique et stratégique de RIPU26 est assurée par des experts internationaux reconnus pour leurs contributions à l'innovation pédagogique et à l'enseignement supérieur."
            />
          </Reveal>

          <StaggerChildren className="section-inner grid gap-5 md:grid-cols-3">
            {generalChairs.map((chair) => (
              <StaggerItem key={chair.name} className="h-full">
                <article className="group h-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--grey-50)]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={chair.image}
                      alt={chair.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-base font-semibold tracking-tight text-[var(--black)]">
                      {chair.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--grey-600)]">{chair.institution}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--grey-400)]">
                      {chair.country}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Scientific Committee */}
      <section className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead label="Expertise" title="Comité Scientifique" />
          </Reveal>

          <StaggerChildren className="section-inner grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scientificCommittee.map((member) => (
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
