"use client"

import { Reveal } from "@/components/landing/reveal"
import { RipuCalendarPanel } from "@/components/landing/ripu-calendar"
import { SectionHead } from "@/components/landing/section-head"

export function ImportantDatesSection() {
  return (
    <section id="dates" className="section-block landing-section section-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Calendrier"
            title="Dates importantes"
            description="De la soumission au colloque — les étapes clés de RIPU26."
            action={{ label: "Calendrier complet", href: "/authors#dates", variant: "outline" }}
          />
        </Reveal>

        <Reveal delay={0.06} className="section-inner">
          <RipuCalendarPanel
            footerLink={{ href: "/authors", label: "Appel à communications" }}
          />
        </Reveal>
      </div>
    </section>
  )
}
