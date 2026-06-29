"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { SectionHead } from "@/components/landing/section-head"
import { ripu25Slides } from "@/components/ripu25/data"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-block landing-section section-white pb-0 md:pb-2">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Témoignages"
            title="Ce qu'ils retiennent de RIPU"
            description="Retours de participants après l'édition 2025."
          />
        </Reveal>

        <StaggerChildren
          className="section-inner grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          stagger={0.06}
          delay={0.04}
        >
          {ripu25Slides.map((person) => (
            <StaggerItem key={person.name} className="h-full">
              <article className="floating-panel group flex h-full flex-col overflow-hidden transition-colors duration-200 hover:bg-[var(--grey-50)]/60">
                <div className="flex items-start justify-between gap-3 px-6 pt-6 sm:px-7 sm:pt-7">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--brand-soft)] sm:h-11 sm:w-11">
                      <Image
                        src={person.avatar}
                        alt=""
                        fill
                        className="object-cover object-top"
                        sizes="44px"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-tight text-[var(--black)]">
                        {person.name}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--grey-400)]">{person.role}</p>
                    </div>
                  </div>
                  <Quote
                    className="h-4 w-4 shrink-0 text-[var(--brand)] opacity-35 transition-opacity duration-200 group-hover:opacity-60"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>

                <blockquote className="flex-1 px-6 pb-6 pt-4 text-sm leading-relaxed text-[var(--grey-600)] sm:px-7 sm:pb-7 sm:pt-5">
                  {person.quote}
                </blockquote>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
