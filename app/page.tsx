import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TopicCard from '@/components/TopicCard';
import Hero from '@/components/hero';
import { AboutSection } from '@/components/about-section';
import { AxesSection } from '@/components/AxesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import {
  FilePenLine,
  MailCheck,
  BadgeCheck,
  Presentation,
  PartyPopper,
  Brain,
  GraduationCap,
  Users,
  ArrowUpRight,
} from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";

const testimonials = [
  {
    quote:
      "RIPU25 a su allier rigueur scientifique et échanges authentiques. Les sessions étaient soigneusement organisées et ont offert des approches pratiques que j’ai immédiatement appliquées à mon enseignement.",
    name: "Maher Abdelli",
    institution: "ISET Kairouan",
    image: "/maher.png",
  },
  {
    quote:
      "Un programme réfléchi : les ateliers étaient pratiques et les conférences ont offert des cadres clairs pour l’IA éthique dans l’évaluation.",
    name: "Rym Mallouli",
    institution: "Université de Sousse",
    image: "/rym.png",
  },
  {
    quote:
      "Un rythme posé, intense en idées. Les conversations ont mûri en stratégies pour la pratique, dans une atmosphère professionnelle et stimulante.",
    name: "Fattouma Mzali",
    institution: "ISET Rades",
    image: "/fattouma.png",
  },
  {
    quote:
      "Une expérience enrichissante qui a permis de croiser des perspectives variées sur l’innovation pédagogique et les transformations de l’enseignement supérieur.",
    name: "Syrine Bousetta",
    institution: "ISLM Monastir",
    image: "/syrine.png",
  },
]

export default function HomePage() {
  return (
    <>
    <LandingNavbar/>
      {/* Hero Section */}
  <Hero/>
<AboutSection/>
     


<section className="bg-white py-24 md:py-32">
  <div className="px-8 lg:px-16 ">

    {/* Header */}
    <div className="mb-20">
      <div className="label-text mb-4">
        CALENDRIER
      </div>

      <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
        Dates importantes
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
        Les principales échéances du colloque RIPU26.
      </p>
    </div>

    {/* Timeline */}
    <div className="grid md:grid-cols-5 gap-6">

{[
  {
    date: "15 Juillet 2026",
    event: "Soumission des papiers",
    icon: FilePenLine,
  },
  {
    date: "10 Août 2026",
    event: "Notification aux auteurs",
    icon: MailCheck,
  },
  {
    date: "01 Septembre 2026",
    event: "Date limite d'inscription",
    icon: BadgeCheck,
  },
  {
    date: "30 Octobre 2026",
    event: "Début de la conférence",
    icon: Presentation,
  },
  {
    date: "31 Octobre 2026",
    event: "Fin de la conférence",
    icon: PartyPopper,
  },
].map((item, idx) => {
        const Icon = item.icon

        return (
          <div
            key={idx}
            className="group p-6 rounded-2xl bg-gradient-to-br from-[#fafafa] to-white hover:from-[#f5f2ff] hover:to-[#faf8ff] transition-all duration-300"
            style={{boxShadow: "0 4px 12px rgba(0, 0, 0, 0.04)"}}
          >
            <Icon className="h-5 w-5 text-[#2F0461] mb-6 group-hover:scale-110 transition-transform" />

            <div className="text-xs uppercase tracking-[0.15em] text-[#999] mb-3 font-medium">
              {item.date}
            </div>

            <div className="text-base font-light text-black leading-snug">
              {item.event}
            </div>
          </div>
        )
      })}
    </div>

  </div>
</section>


{/* Topics Section - Accordion Layout */}
<AxesSection/>






      {/* Previous Edition Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="px-8 lg:px-16 ">
          <div className="mb-16">
            <div className="label-text mb-4">ÉDITION PRÉCÉDENTE</div>
            <h2 className="text-5xl md:text-6xl font-light text-black">RIPU25</h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left - Large Image + Text */}
            <div className="lg:col-span-3 space-y-6">
              <div className="relative w-full h-96 lg:h-full rounded-2xl overflow-hidden shadow-lg min-h-80">
                <Image
                  src="/ripu/1.png"
                  alt="RIPU25 event"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <div className="label-text mb-3">RIPU25</div>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight text-black mb-4">
                  L&apos;enseignement universitaire à l&apos;ère de l&apos;IA
                </h3>
                <p className="text-lg leading-8 text-[#666] max-w-xl">
                  Deux journées d&apos;échanges, de conférences et d&apos;ateliers consacrés
                  à l&apos;innovation pédagogique, l&apos;intelligence artificielle et les
                  transformations de l&apos;enseignement supérieur.
                </p>
              </div>
            </div>

            {/* Right - Stats + Images */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "4", label: "Experts invités" },
                  { number: "3", label: "Conférences" },
                  { number: "3", label: "Workshops" },
                  { number: "2", label: "Jours d'échanges" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-[#f5f2ff] to-[#faf8ff] text-center">
                    <div className="text-3xl font-light text-[#2F0461] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs uppercase tracking-[0.1em] text-[#666] font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Small Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/ripu/2.png"
                    alt="RIPU25 moment"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/ripu/3.png"
                    alt="RIPU25 moment"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Info Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2F0461] to-[#a33ac2] text-white">
                <div className="text-xs uppercase tracking-[0.15em] text-white/70 font-medium mb-2">
                  Sousse, Tunisie
                </div>
                <div className="text-lg font-light mb-4">
                  Marriott Resort & Spa
                </div>
                <div className="text-sm text-white/80 mb-6">
                  30–31 Mai 2025
                </div>
                <Link
                  href="/ripu25"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
                >
                  Explorer RIPU25 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>










{/* Testimonials Section */}
<TestimonialsSection/>
    </>
  );
}
