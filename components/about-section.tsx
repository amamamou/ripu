"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link";
export function AboutSection() {
  return (
<section
  id="about"
  className="bg-white py-24 md:py-32"
>
  <div className="px-8 lg:px-16">
    <div className="grid gap-12 lg:gap-16 md:grid-cols-12 items-start">

          {/* Left Column - Content */}
          <div className="flex flex-col gap-8 md:col-span-5">
            <div>
              <span className="label-text mb-6 block">
                À propos de RIPU26
              </span>

              <h2 className="text-4xl md:text-6xl font-light leading-tight text-[#0a0a0a]">
                Enseigner et évaluer à l&apos;ère de l&apos;IA et de l&apos;APC
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-[#f5f2ff] text-xs uppercase tracking-wide text-[#2F0461] font-medium">
                Recherche Innovante
              </div>

              <div className="px-4 py-2 rounded-full bg-[#f5f2ff] text-xs uppercase tracking-wide text-[#2F0461] font-medium">
                Ateliers Pratiques
              </div>

              <div className="px-4 py-2 rounded-full bg-[#f5f2ff] text-xs uppercase tracking-wide text-[#2F0461] font-medium">
                Réseau International
              </div>
            </div>

            <p className="text-lg leading-relaxed text-[#666] max-w-lg">
              RIPU rassemble depuis des années les acteurs de l&apos;enseignement
              supérieur. Cette 2ème édition explore les défis de l&apos;IA et de
              l&apos;APC dans nos pratiques pédagogiques quotidiennes.
            </p>

           <Link
  href="/authors"
  className="group mt-2 flex items-center gap-2 text-sm font-medium text-[#2F0461] transition-colors hover:text-[#1B1142]"
>
  Rejoindre le Colloque

  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
</Link>
          </div>

          {/* Right Side - Video and Info Stack */}
          <div className="md:col-span-7 flex flex-col gap-8">
            {/* Video */}
            <div
  className="w-full overflow-hidden rounded-2xl shadow-lg"
  style={{ aspectRatio: "16 / 9" }}
>
  <iframe
    className="block h-full w-full"
    src="https://www.youtube.com/embed/pnKB0Pl3hdQ?autoplay=1&mute=1&loop=1&playlist=pnKB0Pl3hdQ&controls=1&rel=0"
    title="RIPU 2026"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Lieu */}
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-[#999] font-medium">
                  Lieu
                </span>
                <p className="mt-2 text-lg font-medium text-[#1B1142]">
                  Sousse<br/>Tunisie
                </p>
              </div>

              {/* Dates */}
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-[#999] font-medium">
                  Dates
                </span>
                <p className="mt-2 text-lg font-medium text-[#1B1142]">
                  30–31<br/>Oct 2026
                </p>
              </div>

              {/* Public */}
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-[#999] font-medium">
                  Public
                </span>
                <p className="mt-2 text-lg font-medium text-[#1B1142]">
                  Enseignants<br/>Chercheurs
                </p>
              </div>
            </div>

            {/* President Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2F0461] to-[#a33ac2] p-8 md:p-10 text-white shadow-lg">
              <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'}}></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 overflow-hidden rounded-full bg-white/20">
                    <Image
                      src="/sonya.png"
                      alt="Sonia Sahli"
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold">
                      Sonia Sahli
                    </p>
                    <p className="text-sm text-white/70">
                      Présidente du Comité
                    </p>
                  </div>
                </div>

                <p className="text-base leading-relaxed italic text-white/90 mb-6">
                  &ldquo;RIPU est né d&apos;une vision. Aujourd&apos;hui, nous
                  construisons une communauté de pédagogues qui privilégie
                  l&apos;excellence et l&apos;innovation.&rdquo;
                </p>

                <Link
  href="/about"
  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
>
  Notre Histoire

  <ArrowUpRight className="h-4 w-4" />
</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
