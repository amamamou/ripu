"use client"

import Image from "next/image"
import { Reveal } from "@/components/landing/reveal"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { SectionHead } from "@/components/landing/section-head"
import { ripu25Affiche, ripu25Gallery, ripu25Intro } from "@/components/ripu25/data"

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

        <div className="section-inner grid gap-8 sm:gap-12 lg:grid-cols-[minmax(240px,320px)_1fr] lg:gap-16 xl:gap-20 lg:items-start">
          <Reveal delay={0.05}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] sm:max-w-[260px] lg:mx-0 lg:max-w-none">
              <Image
                src={ripu25Affiche.src}
                alt={ripu25Affiche.alt}
                fill
                className="object-contain object-top"
                priority
                sizes="(max-width: 1024px) 70vw, 320px"
              />
            </div>
            <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--grey-400)] lg:text-left">
              Affiche officielle · Sousse, 2025
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-lg t-body leading-relaxed text-[var(--grey-600)]">{ripu25Intro}</p>

            <StaggerChildren className="mt-10 grid grid-cols-3 gap-3 sm:gap-4" stagger={0.06}>
              {ripu25Gallery.map((photo) => (
                <StaggerItem key={photo.src}>
                  <figure>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 28vw, 200px"
                      />
                    </div>
                    <figcaption className="mt-2 hidden font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--grey-400)] sm:block">
                      {photo.label}
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
