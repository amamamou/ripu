"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"

const YOUTUBE_ID = "pnKB0Pl3hdQ"
const YOUTUBE_START = 16
const YOUTUBE_URL = `https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=${YOUTUBE_START}s`

const EMBED = [
  `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}`,
  `?start=${YOUTUBE_START}`,
  "&autoplay=1",
  "&mute=1",
  "&loop=1",
  `&playlist=${YOUTUBE_ID}`,
  "&controls=0",
  "&modestbranding=1",
  "&playsinline=1",
  "&rel=0",
  "&iv_load_policy=3",
  "&disablekb=1",
  "&fs=0",
].join("")

const partners = [
  { name: "ISET Sousse", src: "/logos/isetsousse.webp" },
  { name: "Avignon Université", src: "/logos/avignon.webp" },
  { name: "EduLink", src: "/logos/edulink.png" },
  { name: "Graasp", src: "/logos/graasp.jpg" },
] as const

export function AboutSection() {
  return (
    <section id="about" className="section-block landing-section section-white pt-16 md:pt-24">
      <div className="container-main">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_minmax(260px,320px)] lg:gap-20 xl:gap-28">
          <div className="max-w-2xl">
            <Reveal>
              <p className="t-label dot-label">Le colloque RIPU26</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4">
                <span className="t-section block text-balance">
                  L&apos;Intelligence Artificielle Générative et l&apos;Approche par Compétences&nbsp;:
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-balance text-[clamp(1.125rem,3.5vw,1.875rem)] font-semibold leading-snug tracking-tight text-[var(--black)]">
                quels défis pour enseigner, apprendre et évaluer&nbsp;?
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 t-body text-[var(--grey-600)]">
                RIPU rassemble depuis des années les acteurs de l&apos;enseignement supérieur.
                Cette édition explore l&apos;intelligence artificielle, l&apos;approche par
                compétences et l&apos;innovation pédagogique.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-8 text-sm font-medium text-[var(--grey-400)]">
                2e édition · International · Sousse, Tunisie · 30–31 oct. 2026
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                <Link href="/about" className="btn-lime inline-flex w-full justify-center sm:w-auto">
                  En savoir plus
                  <span className="btn-lime-icon">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <ul
                  className="flex items-center gap-4 sm:gap-5"
                  aria-label="Partenaires institutionnels"
                >
                  {partners.map((partner) => (
                    <li key={partner.name}>
                      <div className="relative h-6 w-14 sm:h-7 sm:w-16">
                        <Image
                          src={partner.src}
                          alt={partner.name}
                          fill
                          sizes="64px"
                          className="object-contain object-left sm:object-center"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.1} className="mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none">
            <div className="video-reel">
              <div className="video-reel-screen">
                <iframe
                  src={EMBED}
                  title="Teaser officiel RIPU26"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="video-reel-iframe"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 px-1">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--grey-400)]">
                  Teaser officiel
                </p>
                <p className="mt-0.5 text-sm font-bold text-[var(--black)]">RIPU26</p>
              </div>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] transition-opacity hover:opacity-70"
              >
                Avec le son
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
