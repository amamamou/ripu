"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="bg-white px-12 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left */}

          <div className="lg:col-span-4">

            <p className="label-text mb-4">
              À PROPOS DE RIPU26
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Enseigner et évaluer
              <br />
              à l'ère de l'IA
              <br />
              et de l'APC
            </h2>

            <p className="text-[#666] leading-8 mb-8">
              RIPU rassemble depuis des années les acteurs de
              l'enseignement supérieur. Cette nouvelle édition explore
              les défis de l'intelligence artificielle et de l'approche
              par compétences dans les pratiques pédagogiques.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">

              <span className="bg-[#f5f5f5] px-4 py-2 rounded-full text-xs text-[#666]">
                Recherche Innovante
              </span>

              <span className="bg-[#f5f5f5] px-4 py-2 rounded-full text-xs text-[#666]">
                Ateliers Pratiques
              </span>

              <span className="bg-[#f5f5f5] px-4 py-2 rounded-full text-xs text-[#666]">
                Réseau International
              </span>

            </div>

            <Link
              href="/authors"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#2F0461]"
            >
              Rejoindre le colloque

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

          </div>

          {/* Reel */}

          <div className="lg:col-span-4 flex justify-center">

            <div
              className="w-full max-w-[330px] overflow-hidden rounded-[24px]"
              style={{ aspectRatio: "9 / 16" }}
            >
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/pnKB0Pl3hdQ?autoplay=1&mute=1&loop=1&playlist=pnKB0Pl3hdQ&controls=1&rel=0"
                title="RIPU26"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          </div>

          {/* Right */}

          <div className="lg:col-span-4 flex flex-col gap-6">

            <div className="bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-xs tracking-[0.15em] text-[#888] mb-2">
                LIEU
              </p>

              <p className="text-xl font-semibold">
                Sousse, Tunisie
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-xs tracking-[0.15em] text-[#888] mb-2">
                DATES
              </p>

              <p className="text-xl font-semibold">
                30–31 Octobre 2026
              </p>
            </div>

            <div className="bg-[#f5f5f5] rounded-[24px] p-8">

              <div className="flex items-center gap-4 mb-5">

                <Image
                  src="/sonya.png"
                  alt="Sonia Sahli"
                  width={52}
                  height={52}
                  className="rounded-xl object-cover"
                />

                <div>
                  <p className="font-semibold">
                    Sonia Sahli
                  </p>

                  <p className="text-sm text-[#666]">
                    Présidente du Comité
                  </p>
                </div>

              </div>

              <p className="text-[#666] italic leading-7">
                “RIPU est né d'une vision. Aujourd'hui, nous
                construisons une communauté de pédagogues qui
                privilégie l'excellence et l'innovation.”
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

