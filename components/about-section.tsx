"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="bg-white px-6 md:px-8 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Left Content */}
          <div className="lg:col-span-5">
            <p className="label-text mb-6 md:mb-8">
              À PROPOS
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 md:mb-10">
              Enseigner et évaluer à l'ère de l'IA et de l'APC
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-8 mb-8 md:mb-10">
              RIPU rassemble depuis des années les acteurs de l'enseignement supérieur. Cette nouvelle édition explore les défis de l'intelligence artificielle et de l'approche par compétences dans les pratiques pédagogiques contemporaines.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
              {['Recherche Innovante', 'Ateliers Pratiques', 'Réseau International'].map((tag) => (
                <span key={tag} className="bg-gray-100 px-4 py-2.5 rounded-full text-xs font-medium text-gray-700">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/authors"
              className="group inline-flex items-center gap-2.5 text-sm font-semibold text-[#2F0461] hover:text-[#1B1142] transition-colors"
            >
              Rejoindre le colloque
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Center - Video */}
          <div className="lg:col-span-3 flex justify-center">
            <div
              className="w-full max-w-sm overflow-hidden rounded-3xl shadow-lg"
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

          {/* Right - Info Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            
            {/* Location Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-7 md:p-8 border border-gray-200/50">
              <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-3">
                Lieu
              </p>
              <p className="text-2xl md:text-3xl font-bold text-black">
                Sousse, Tunisie
              </p>
            </div>

            {/* Dates Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-7 md:p-8 border border-gray-200/50">
              <p className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-3">
                Dates
              </p>
              <p className="text-2xl md:text-3xl font-bold text-black">
                30–31 Oct. 2026
              </p>
            </div>

            {/* Quote Card */}
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-200/80 hover:border-gray-300 transition-all duration-300">
              <div className="flex items-start gap-3.5 mb-5">
                <Image
                  src="/sonya.png"
                  alt="Sonia Sahli"
                  width={56}
                  height={56}
                  className="rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-black text-sm">
                    Sonia Sahli
                  </p>
                  <p className="text-xs text-gray-600">
                    Présidente du Comité
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-7 italic">
                "RIPU est né d'une vision. Aujourd'hui, nous construisons une communauté de pédagogues qui privilégie l'excellence et l'innovation."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

