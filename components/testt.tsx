"use client";

import Image from "next/image";

const testimonials = [
  {
    quote:
      "RIPU25 a su allier rigueur scientifique et échanges authentiques. Les sessions ont offert des approches pratiques que j'ai immédiatement appliquées à mon enseignement.",
    name: "Maher Abdelli",
    institution: "ISET Kairouan",
    src: "/maher.png",
    initials: "MA",
  },
  {
    quote:
      "Un programme réfléchi : les ateliers étaient pratiques et les conférences ont offert des cadres clairs pour l'IA éthique dans l'évaluation. Une expérience enrichissante.",
    name: "Rym Mallouli",
    institution: "Université de Sousse",
    src: "/rym.png",
    initials: "RM",
  },
  {
    quote:
      "Un rythme posé, intense en idées. Les conversations ont mûri en stratégies concrètes pour la pratique pédagogique dans un environnement professionnel et stimulant.",
    name: "Fattouma Mzali",
    institution: "ISET Rades",
    src: "/fattouma.png",
    initials: "FM",
  },
  {
    quote:
      "Une expérience marquante — découvrir de nouvelles approches pédagogiques, échanger avec des collègues inspirants et réfléchir à l'avenir de l'enseignement supérieur.",
    name: "Syrine Bousetta",
    institution: "ISLM Monastir",
    src: "/syrine.png",
    initials: "SB",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z"
            fill="#2F0461"
          />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-[#e8e8e8]">
      <div className="px-8 lg:px-16">

        {/* Header */}
        <div className="grid gap-8 md:grid-cols-12 mb-16">
          <div className="md:col-span-2 flex flex-col justify-end">
            <span className="label-text leading-snug">
              <span className="block">Témoi-</span>
              <span className="block">gnages</span>
            </span>
          </div>
          <div className="md:col-span-6 flex items-end">
            <h2 className="text-4xl md:text-6xl font-light leading-[0.95] tracking-tight text-black">
              Ce qu'ils retiennent
              <br />de RIPU25
            </h2>
          </div>
          <div className="md:col-span-4 flex items-end">
            <p className="text-sm leading-relaxed text-[#666]">
              Des retours de participants ayant contribué à faire de RIPU
              un espace d'échange, de réflexion et d'innovation pédagogique.
            </p>
          </div>
        </div>

        {/* Single horizontal scrolling row */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-8 px-8 lg:-mx-16 lg:px-16 snap-x snap-mandatory scroll-smooth no-scrollbar">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[380px] lg:w-[calc(25%-12px)] bg-[#f7f6fb] rounded-[24px] p-8 flex flex-col justify-between gap-8"
            >
              {/* Top: stars + quote */}
              <div className="flex flex-col gap-5">
                <Stars />
                <p className="text-[0.95rem] font-light leading-[1.8] text-[#222] tracking-[-0.01em]">
                  {t.quote}
                </p>
              </div>

              {/* Bottom: avatar + name */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#ececec]">
                <div className="relative h-9 w-9 overflow-hidden rounded-full shrink-0">
                  <Image src={t.src} alt={t.name} fill className="object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-black leading-tight truncate">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#999] mt-0.5 truncate">
                    {t.institution}
                  </p>
                </div>
                <span className="ml-auto text-[10px] tracking-[0.2em] text-[#ccc] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* Add to your globals.css:
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
*/