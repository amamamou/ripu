"use client";

import Image from "next/image";
import { ScrollText, BellRing, CircleCheckBig, GraduationCap } from "lucide-react";

const dates = [
  {
    id: "01",
    icon: ScrollText,
    day: "15",
    month: "Juillet",
    year: "2026",
    label: "Soumission des papiers",
    type: "light",
  },
  {
    id: "02",
    icon: BellRing,
    day: "10",
    month: "Août",
    year: "2026",
    label: "Notification aux auteurs",
    type: "image",
    image: "/conference1.png",
  },
  {
    id: "03",
    icon: CircleCheckBig,
    day: "01",
    month: "Septembre",
    year: "2026",
    label: "Date limite d'inscription",
    type: "dark",
  },
  {
    id: "04",
    icon: GraduationCap,
    day: "30–31",
    month: "Octobre",
    year: "2026",
    label: "Dates de la conférence",
    type: "image",
    image: "/conference1.png",
    wide: true,
  },
];

export function DatesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="px-8 lg:px-16">

        {/* Header */}
        <div className="grid gap-8 md:grid-cols-12 mb-16">

          <div className="md:col-span-2 flex flex-col justify-end">
            <span className="label-text leading-snug">
              <span className="block">Calendrier</span>
              <span className="block">officiel</span>
            </span>
          </div>

          <div className="md:col-span-6 flex items-end">
            <h2 className="text-4xl md:text-6xl font-light leading-[0.95] text-black">
              Dates importantes
            </h2>
          </div>

          <div className="md:col-span-4 flex items-end">
            <p className="text-sm leading-relaxed text-[#666]">
              Les principales étapes du colloque RIPU26, de la soumission
              des travaux scientifiques à la tenue de la conférence à Sousse.
            </p>
          </div>

        </div>

        {/* Timeline connector row */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 mb-0">
          <div className="md:col-span-3 flex items-center gap-3 pb-6">
            <div className="h-px flex-1 bg-[#e8e8e8]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#2F0461]" />
          </div>
          <div className="md:col-span-3 flex items-center gap-3 pb-6">
            <div className="h-px flex-1 bg-[#e8e8e8]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#2F0461]" />
          </div>
          <div className="md:col-span-2 flex items-center gap-3 pb-6">
            <div className="h-px flex-1 bg-[#e8e8e8]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#2F0461]" />
          </div>
          <div className="md:col-span-4 flex items-center pb-6">
            <div className="h-px flex-1 bg-[#e8e8e8]" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-3 md:grid-cols-12">

          {/* Soumission — light */}
          <div className="md:col-span-3 rounded-[24px] bg-[#f7f6fb] p-7 flex flex-col justify-between h-[240px] transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start justify-between">
              <ScrollText className="h-5 w-5 text-[#2F0461]/60" />
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#bbb]">01</span>
            </div>
            <div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[42px] font-light leading-none text-[#111] tracking-tight">15</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-medium text-[#2F0461] uppercase tracking-wider">Juillet</span>
                  <span className="text-xs text-[#999]">2026</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[#333] leading-snug">
                Soumission des papiers
              </p>
            </div>
          </div>

          {/* Notification — image */}
          <div className="relative md:col-span-3 h-[240px] overflow-hidden rounded-[24px] group">
            <Image
              src="/conference1.png"
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
            <div className="absolute inset-0 p-7 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <BellRing className="h-5 w-5 text-white/70" />
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/40">02</span>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-[42px] font-light leading-none text-white tracking-tight">10</span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Août</span>
                    <span className="text-xs text-white/50">2026</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-white leading-snug">
                  Notification aux auteurs
                </p>
              </div>
            </div>
          </div>

          {/* Inscription — dark purple */}
          <div className="md:col-span-2 h-[240px] rounded-[24px] bg-[#2F0461] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-start justify-between">
              <CircleCheckBig className="h-5 w-5 text-white/50" />
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/25">03</span>
            </div>
            <div>
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="text-[38px] font-light leading-none text-white tracking-tight">01</span>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-medium text-white/70 uppercase tracking-wider">Sept.</span>
                  <span className="text-[10px] text-white/40">2026</span>
                </div>
              </div>
              <p className="text-sm font-medium text-white leading-snug">
                Date limite d'inscription
              </p>
            </div>
          </div>

          {/* Conférence — image wide */}
          <div className="relative md:col-span-4 h-[240px] overflow-hidden rounded-[24px] group">
            <Image
              src="/conference1.png"
              alt=""
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
            <div className="absolute inset-0 p-7 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <GraduationCap className="h-5 w-5 text-white/70" />
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/40">04</span>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-[42px] font-light leading-none text-white tracking-tight">30–31</span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Oct.</span>
                    <span className="text-xs text-white/50">2026</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-white leading-snug">
                  Dates de la conférence
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}