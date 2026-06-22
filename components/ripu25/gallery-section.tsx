"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { SectionHead } from "@/components/landing/section-head"
import { ripu25Affiche, ripu25Gallery, ripu25Intro, ripu25Meta } from "@/components/ripu25/data"

export function Ripu25Section() {
  return (
    <section id="ripu25" className="section-block landing-section section-white pb-0 md:pb-2">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Édition précédente"
            title="RIPU25"
            action={{ label: "Voir le récapitulatif", href: "/ripu25", variant: "outline" }}
          />
        </Reveal>

        <div className="section-inner grid gap-10 lg:grid-cols-[minmax(220px,300px)_1fr] lg:items-start lg:gap-16 xl:gap-20">
          <Reveal delay={0.05}>
            <div className="mx-auto max-w-[240px] lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--grey-50)]">
                <Image
                  src={ripu25Affiche.src}
                  alt={ripu25Affiche.alt}
                  fill
                  className="object-contain object-top"
                  priority
                  sizes="(max-width: 1024px) 70vw, 300px"
                />
              </div>
              <p className="mt-4 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--grey-400)] lg:text-left">
                Affiche officielle · {ripu25Meta.date}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="max-w-xl">
              <p className="t-body leading-relaxed text-[var(--grey-600)]">{ripu25Intro}</p>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
                <p className="text-sm font-medium text-[var(--black)]">
                  {ripu25Meta.date}
                  <span className="text-[var(--grey-400)]"> · </span>
                  {ripu25Meta.venue}
                </p>
              </div>

              <p className="mt-3 text-sm font-medium text-[var(--grey-400)]">
                {ripu25Meta.highlights.join(" · ")}
              </p>

              <StaggerChildren
                className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3"
                stagger={0.05}
              >
                {ripu25Gallery.map((photo) => (
                  <StaggerItem key={photo.src}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] bg-[var(--grey-50)]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                        sizes="(max-width: 768px) 28vw, 200px"
                      />
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <Link href="/ripu25" className="link-arrow mt-8 inline-flex text-sm font-semibold">
                Explorer RIPU25
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
