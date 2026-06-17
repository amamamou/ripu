"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "4", label: "Experts invités" },
  { value: "3", label: "Conférences" },
  { value: "3", label: "Workshops" },
  { value: "2", label: "Jours d'échanges" },
];

export function PreviousEditionSection() {
  return (
    <section className="bg-white py-24 md:py-32 ">
      <div className="px-8 lg:px-16">

        {/* Centered header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="label-text mb-5 block">Édition précédente</span>
          <h2 className="text-[clamp(4rem,12vw,10rem)] font-light leading-[0.88] tracking-[-0.03em] text-black">
            RIPU25
          </h2>
        </div>

        {/* Asymmetric photo grid */}
        <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[580px] mb-3">

          {/* Left tall — spans 2 rows */}
          <div className="col-span-5 row-span-2 relative overflow-hidden rounded-[28px] group">
            <Image
              src="/ripu/2.png"
              alt="RIPU25"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 flex items-center gap-1.5">
              <span className="text-xs text-white font-medium">RIPU</span>
              <span className="text-white/40 text-xs">·</span>
              <span className="text-xs text-white/80">2025</span>
            </div>
          </div>

          {/* Top right */}
          <div className="col-span-7 row-span-1 relative overflow-hidden rounded-[28px] group">
            <Image
              src="/ripu/1.png"
              alt="RIPU25"
              fill
              className="object-top object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>

          {/* Bottom right */}
          <div className="col-span-7 row-span-1 relative overflow-hidden rounded-[28px] group">
            <Image
              src="/ripu/3.png"
              alt="RIPU25"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>

        </div>

        {/* Stats + info row */}
        <div className="grid grid-cols-12 gap-3">

          {/* Theme */}
          <div className="col-span-12 lg:col-span-5 bg-[#f7f6fb] rounded-[28px] p-10 flex flex-col justify-between min-h-[200px]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#aaa] font-medium">
              Thème central
            </span>
            <h3 className="text-2xl font-light leading-[1.2] text-black tracking-tight mt-auto">
              L'enseignement universitaire
              <br />
              <span className="text-[#2F0461]">à l'ère de l'IA</span>
            </h3>
          </div>

          {/* 4 stats */}
          {stats.map((s, i) => (
            <div
              key={i}
              className="col-span-6 lg:col-span-2 bg-[#f7f6fb] rounded-[28px] p-7 flex flex-col justify-between min-h-[140px]"
            >
              <span className="text-[44px] font-light leading-none text-black tracking-tight">
                {s.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#999]">
                {s.label}
              </span>
            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-[#bbb] tracking-wide">
            Marriott Resort &amp; Spa · Sousse, Tunisie · 30–31 Mai 2025
          </span>
          <Link
            href="/ripu25"
            className="group inline-flex items-center gap-3 text-sm font-medium text-black"
          >
            Explorer RIPU25
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f5] transition-colors group-hover:bg-[#ececec]">
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}