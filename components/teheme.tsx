"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus, Minus, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function TopicsSection() {
  const [open, setOpen] = useState(0);
  const [slide, setSlide] = useState(0);

  const images = [
    "/hero/vv.png",
    "/hero/vv2.png",
    "/hero/vv3.png",
  ];

  const topics = [
    {
      title: "Intelligence Artificielle Générative & Enseignement",
      content: [
        "L'IAG comme tuteur d'apprentissage",
        "L'IAG et le geste enseignant",
        "L'IAG pour la correction des examens",
        "Les effets de l'IAG sur les apprentissages",
        "L'IAG et la vie étudiante",
        "L'avenir de l'enseignement supérieur à l'ère de l'IAG",
        "Les plans d'études à l'heure de l'IAG",
      ],
    },
    {
      title: "Approches Pédagogiques",
      content: [
        "L'approche par compétences (APC)",
        "Les plans d'études à l'ère de l'IA et de l'APC",
        "La gamification comme levier d'apprentissage",
      ],
    },
    {
      title: "Genre & Éducation",
      content: [
        "La place des femmes dans l'éducation",
      ],
    },
  ];

  const prev = () => setSlide((s) => (s - 1 + images.length) % images.length);
  const next = () => setSlide((s) => (s + 1) % images.length);

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="px-8 lg:px-16">

        {/* Row 1: label + heading | description */}
        <div className="grid lg:grid-cols-2 gap-16 mb-10">

          <div className="flex flex-col gap-6">
            <span className="label-text block">THÉMATIQUES</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.92] tracking-tight">
              Les axes
              <br />
              du colloque
            </h2>
          </div>

          <div className="flex items-end">
            <p className="text-[#666] leading-8">
              RIPU26 accueille des contributions portant sur
              les usages de l'intelligence artificielle,
              l'innovation pédagogique et les enjeux
              contemporains de l'enseignement supérieur.
            </p>
          </div>

        </div>

        {/* Row 2: image | accordion — both start at the same top edge */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── LEFT: image gallery ── */}
          <div className="relative overflow-hidden rounded-[28px] aspect-[4/3]">
            <Image
              src={images[slide]}
              alt=""
              fill
              className="object-cover transition-opacity duration-500"
            />

            {/* Top-left badge */}
            <div className="absolute left-4 top-4 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 flex items-center gap-1.5">
              <span className="text-xs text-white font-medium">
                {String(slide + 1).padStart(2, "0")}
              </span>
              <span className="text-white/50 text-xs">·</span>
              <span className="text-xs text-white/80">RIPU26</span>
            </div>

            {/* Bottom-right nav */}
            <div className="absolute bottom-4 right-4 rounded-full bg-white/20 backdrop-blur-md flex items-center overflow-hidden">
              <button
                onClick={prev}
                aria-label="Image précédente"
                className="flex items-center justify-center w-9 h-9 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="w-px h-4 bg-white/30" />
              <button
                onClick={next}
                aria-label="Image suivante"
                className="flex items-center justify-center w-9 h-9 text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ── RIGHT: accordion + link — top edge = top edge of image ── */}
          <div className="flex flex-col">

            <div>
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className={[
                    index !== 0 ? "border-t border-[#ececec]" : "",
                    index !== topics.length - 1 ? "border-b border-[#ececec]" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="flex w-full items-center justify-between py-6 text-left"
                  >
                    <h3 className="text-[17px] font-medium text-black pr-6">
                      {topic.title}
                    </h3>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f5f5] transition-colors hover:bg-[#ececec]">
                      {open === index ? (
                        <Minus className="h-3 w-3 text-[#666]" />
                      ) : (
                        <Plus className="h-3 w-3 text-[#666]" />
                      )}
                    </div>
                  </button>

                  {open === index && (
                    <div className="pb-8 pr-12">
                      <div className="space-y-3 text-sm leading-7 text-[#666]">
                        {topic.content.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Appel à communications */}
            <div className="flex items-center justify-between gap-8 pt-6">
              <Link
                href="/authors#call"
                className="group inline-flex items-center gap-3 text-sm font-medium text-black"
              >
                Appel à communications
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f5] transition-colors group-hover:bg-[#ececec]">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>

              <div className="relative h-[130px] w-[190px] overflow-hidden rounded-[28px]">
                <Image
                  src="/hero/vv.png"
                  alt="Topics"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}