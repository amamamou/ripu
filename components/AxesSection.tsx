'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Brain, GraduationCap, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const axesData = [
  {
    id: 1,
    icon: Brain,
    title: "Intelligence Artificielle Générative & Enseignement",
    image: "/axes/1.png",
    label: "01",
    items: [
      "L'IAG comme tuteur d'apprentissage",
      "L'IAG et le geste enseignant",
      "L'IAG pour la correction des examens",
      "Les effets de l'IAG sur les apprentissages",
      "L'IAG et la vie étudiante",
      "L'avenir de l'enseignement supérieur à l'ère de l'IAG",
      "Les plans d'études à l'heure de l'IAG"
    ]
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Approches Pédagogiques",
    image: "/axes/2.png",
    label: "02",
    items: [
      "L'approche par compétences (APC)",
      "Les plans d'études à l'ère de l'IA et de l'APC",
      "La gamification comme levier d'apprentissage"
    ]
  },
  {
    id: 3,
    icon: Users,
    title: "Genre & Éducation",
    image: "/axes/3.png",
    label: "03",
    items: [
      "La place des femmes dans l'éducation"
    ]
  }
];

export function AxesSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="px-8 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <div className="label-text mb-4">THÉMATIQUES</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black max-w-4xl">
              Les axes du colloque
            </h2>
            <Link
              href="/authors#call"
              className="group flex items-center gap-2 text-sm font-medium text-[#2F0461] hover:text-[#1B1142] transition-colors shrink-0"
            >
              Appel à communications
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#666]">
            RIPU26 accueille des contributions portant sur les usages de l'intelligence artificielle en éducation, l'innovation pédagogique et les enjeux contemporains de l'enseignement supérieur.
          </p>
        </div>

        {/* Axes Grid */}
        <div className="space-y-8">
          {axesData.map((axe) => {
            const Icon = axe.icon;
            const isExpanded = expandedId === axe.id;

            return (
              <div key={axe.id} className="overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Main Container Grid */}
                <div className="grid lg:grid-cols-3 min-h-96">
                  {/* Left - Image */}
                  <div className="relative h-96 lg:h-auto overflow-hidden rounded-3xl lg:rounded-r-none">
                    <Image
                      src={axe.image}
                      alt={axe.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-[#2F0461]">{axe.label} {axe.title.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:col-span-2 p-8 md:p-12 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-6 mb-8">
                      <div className="flex items-start gap-4 flex-1">
                        <Icon className="h-6 w-6 text-[#2F0461] shrink-0 mt-1" />
                        <h3 className="text-2xl md:text-3xl font-light text-black leading-snug">
                          {axe.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : axe.id)}
                        className="text-3xl text-[#2F0461] transition-transform duration-300 shrink-0 hover:scale-110"
                        style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        +
                      </button>
                    </div>

                    {/* Expandable Items */}
                    {isExpanded && (
                      <div className="space-y-4 animate-in fade-in duration-300">
                        {axe.items.map((item, idx) => (
                          <div key={idx} className="flex gap-4 items-start group">
                            <div className="h-2 w-2 rounded-full bg-[#2F0461] mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                            <p className="text-base text-[#666] leading-relaxed group-hover:text-[#2F0461] transition-colors">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA when expanded */}
                    {isExpanded && (
                      <div className="mt-8 pt-8 border-t border-[#f0f0f0]">
                        <Link
                          href="/authors"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#2F0461] hover:text-[#1B1142] transition-colors"
                        >
                          Soumettre une contribution
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
