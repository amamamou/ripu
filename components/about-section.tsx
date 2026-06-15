"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link";
export function AboutSection() {
  return (
<section
  id="about"
  className="bg-white py-24 md:py-32 border-t border-[#ececec]"
>
  <div className="px-8 lg:px-16">
    <div className="grid gap-6 md:grid-cols-12">

          {/* Left Column */}
          <div className="flex flex-col gap-5 md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="label-text mb-4">
                À propos
              </span>
            </div>

            <h2 className="text-3xl font-light leading-tight text-[#0a0a0a] md:text-5xl">
              Enseigner et évaluer à l’ère de l’IA et de l’APC
            </h2>

            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 border border-[#ececec] px-3 py-2 text-xs uppercase tracking-wide text-[#666]">
                <span className="h-1 w-1 rounded-full bg-[#2F0461]" />
                Recherche Innovante
              </span>

              <span className="inline-flex items-center gap-1.5 border border-[#ececec] px-3 py-2 text-xs uppercase tracking-wide text-[#666]">
                <span className="h-1 w-1 rounded-full bg-[#2F0461]" />
                Ateliers Pratiques
              </span>

              <span className="inline-flex items-center gap-1.5 border border-[#ececec] px-3 py-2 text-xs uppercase tracking-wide text-[#666]">
                <span className="h-1 w-1 rounded-full bg-[#2F0461]" />
                Réseau International
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#666]">
              RIPU rassemble depuis des années les acteurs de l’enseignement
              supérieur. Cette 2ème édition explore les défis de l’IA et de
              l’APC dans nos pratiques pédagogiques quotidiennes.
            </p>

           <Link
  href="/authors"
  className="group mt-4 flex items-center gap-2 text-sm font-medium text-[#2F0461] transition-colors hover:text-[#1B1142]"
>
  Rejoindre le Colloque

  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
</Link>
          </div>

          {/* Center Column */}
          <div className="flex justify-center md:col-span-4 ">
          <div
  className="w-full max-w-[340px] overflow-hidden rounded-xl border border-[#ececec]"
  style={{ aspectRatio: "9 / 16" }}
>
  <iframe
className="block h-full w-full translate-y-[1px]"    src="https://www.youtube.com/embed/pnKB0Pl3hdQ?autoplay=1&mute=1&loop=1&playlist=pnKB0Pl3hdQ&controls=1&rel=0"
    title="RIPU 2026"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:col-span-4">
            {/* Information */}
            <div className="border border-[#ececec]">
              <div className="border-b border-[#ececec] p-6">
                <span className="text-xs uppercase tracking-[0.15em] text-[#666]">
                  Lieu
                </span>

                <p className="mt-2 font-medium text-[#1B1142]">
                  Sousse, Tunisie
                </p>
              </div>

              <div className="border-b border-[#ececec] p-6">
                <span className="text-xs uppercase tracking-[0.15em] text-[#666]">
                  Dates
                </span>

                <p className="mt-2 font-medium text-[#1B1142]">
                  30–31 Octobre 2026
                </p>
              </div>

              <div className="p-6">
                <span className="text-xs uppercase tracking-[0.15em] text-[#666]">
                  Public Cible
                </span>

                <p className="mt-2 font-medium text-[#1B1142]">
                  Enseignants, Chercheurs, Responsables
                </p>
              </div>
            </div>

            {/* Sonia Sahli */}
            <div className="border border-[#ececec] p-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border border-[#ececec]">
                  <Image
                    src="/sonya.png"
                    alt="Professor"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1B1142]">
                    Sonia Sahli
                  </p>

                  <p className="text-xs text-[#666]">
                    Présidente du Comité
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm italic leading-relaxed text-[#666]">
                &ldquo;RIPU est né d&apos;une vision. Aujourd&apos;hui, nous
                construisons une communauté de pédagogues qui privilégie
                l&apos;excellence et l&apos;innovation.&rdquo;
              </p>

          <Link
  href="/about"
  className="group mt-4 flex items-center gap-2 text-sm font-medium text-[#2F0461] transition-colors hover:text-[#1B1142]"
>
  Notre Histoire

  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}