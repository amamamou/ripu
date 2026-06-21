"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { ripu25Slides } from "@/components/ripu25/data"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-block landing-section section-muted pb-0 md:pb-2">
      <div className="container-main">
        <Reveal>
          <SectionHead label="Témoignages" title="Ce qu'ils en retiennent" />
        </Reveal>

        <div className="section-inner grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {ripu25Slides.map((person, i) => (
            <Reveal key={person.name} delay={0.05 + i * 0.05}>
              <article className="group flex h-full flex-col rounded-2xl bg-[var(--white)] p-4 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 sm:p-5">
                <div className="flex items-start justify-between gap-2">
                  <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12">
                    <Image
                      src={person.avatar}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="48px"
                    />
                  </span>
                  <Quote
                    className="h-4 w-4 shrink-0 text-[var(--brand)] opacity-40 transition-opacity group-hover:opacity-70"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>

                <blockquote className="mt-4 flex-1 text-[13px] leading-[1.5] text-[var(--grey-600)] sm:text-sm sm:leading-relaxed">
                  &ldquo;{person.quote}&rdquo;
                </blockquote>

                <footer className="mt-4 sm:mt-5">
                  <p className="text-xs font-semibold text-[var(--black)] sm:text-sm">{person.firstName}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-[var(--grey-400)] sm:text-xs">{person.role}</p>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
