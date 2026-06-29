"use client"

import Image from "next/image"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { PARTNERS, type Partner } from "@/lib/partners"
import { cn } from "@/lib/utils"

function PartnerCell({ partner }: { partner: Partner }) {
  const content = (
    <Image
      src={partner.logo}
      alt={partner.name}
      width={152}
      height={52}
      className="h-6 w-auto max-w-full object-contain lg:h-11 lg:max-w-[9.5rem]"
    />
  )

  const cellClass = cn(
    "flex min-w-0 flex-1 items-center justify-center lg:w-full lg:flex-none lg:px-6 lg:py-10",
    "lg:transition-colors lg:duration-200 lg:hover:bg-[var(--grey-50)]"
  )

  if (!("href" in partner) || !partner.href) {
    return <div className={cellClass}>{content}</div>
  }

  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${partner.name} — site officiel`}
      className={cn(
        cellClass,
        "cursor-pointer lg:focus-visible:outline-none lg:focus-visible:ring-2 lg:focus-visible:ring-inset lg:focus-visible:ring-[var(--brand)]/25"
      )}
    >
      {content}
    </a>
  )
}

export function PartnersSection() {
  return (
    <section id="partners" className="section-block landing-section section-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Partenaires"
            title="Ils nous accompagnent"
            description="Institutions et acteurs de l'innovation pédagogique aux côtés de RIPU26."
          />
        </Reveal>

        <StaggerChildren
          className="section-inner flex items-center justify-between gap-3 lg:gap-0 lg:floating-panel lg:grid lg:grid-cols-5 lg:overflow-hidden"
          stagger={0.05}
          delay={0.04}
        >
          {PARTNERS.map((partner) => (
            <StaggerItem key={partner.name} className="min-w-0 flex-1 lg:flex-none">
              <PartnerCell partner={partner} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
