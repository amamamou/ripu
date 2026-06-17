import Image from 'next/image';
import Link from 'next/link';
import TopicCard from '@/components/TopicCard';
import Hero from '@/components/hero';
import { AboutSection } from '@/components/about-section';
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
import {
  ScrollText,
  BellRing,
  CircleCheckBig,
} from "lucide-react";
import {
FileText,
Mail,
UserCheck,
Trophy,
} from "lucide-react";
import LandingNavbar from "@/components/LandingNavbar";
import { TopicsSection } from '@/components/teheme';
import { DatesSection } from '@/components/dates';
import { PreviousEditionSection } from '@/components/prv';

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
     

<DatesSection/>



<TopicsSection/>
<PreviousEditionSection/>











{/* Testimonials Section */}
<section className="bg-white py-24 md:py-32 border-t border-[#ececec]">
  <div className="px-8 lg:px-16">

    {/* Header */}
    <div className="mb-20">
      <div className="label-text mb-4">
        TÉMOIGNAGES
      </div>

      <h2 className="text-5xl md:text-6xl font-light tracking-tight text-black">
        Ce qu'ils retiennent de RIPU25
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
        Des retours d'expérience de participants ayant contribué à faire
        de RIPU un espace d'échange, de réflexion et d'innovation pédagogique.
      </p>
    </div>

    {/* Testimonials */}
    <div className="border border-[#ececec]">

      <div className="grid lg:grid-cols-4">

        {/* Maher */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#ececec]">
          <div className="text-3xl text-[#2F0461] mb-6">
            “
          </div>

          <p className="text-sm leading-8 text-[#666] min-h-[220px]">
            RIPU25 a su allier rigueur scientifique et échanges authentiques.
            Les sessions étaient soigneusement organisées et ont offert des
            approches pratiques que j&apos;ai immédiatement appliquées à mon
            enseignement.
          </p>

          <div className="mt-8 pt-6 border-t border-[#ececec] flex items-center gap-4">
            <Image
  src="/maher.png"
  alt="Maher Abdelli"
  width={48}
  height={48}
  className="w-12 h-12 object-cover rounded-lg shrink-0"
/>

            <div>
              <p className="font-medium text-black">
                Maher Abdelli
              </p>

              <p className="text-sm text-[#666]">
                ISET Kairouan
              </p>
            </div>
          </div>
        </div>

        {/* Rym */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#ececec]">
          <div className="text-3xl text-[#2F0461] mb-6">
            “
          </div>

          <p className="text-sm leading-8 text-[#666] min-h-[220px]">
            Un programme réfléchi : les ateliers étaient pratiques et les
            conférences ont offert des cadres clairs pour l&apos;IA éthique
            dans l&apos;évaluation. Une expérience enrichissante et utile.
          </p>

          <div className="mt-8 pt-6 border-t border-[#ececec] flex items-center gap-4">
           <Image
  src="/rym.png"
  alt="Rym Mallouli"
  width={48}
  height={48}
  className="w-12 h-12 object-cover rounded-lg shrink-0"
/>

            <div>
              <p className="font-medium text-black">
                Rym Mallouli
              </p>

              <p className="text-sm text-[#666]">
                Université de Sousse
              </p>
            </div>
          </div>
        </div>

        {/* Fattouma */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#ececec]">
          <div className="text-3xl text-[#2F0461] mb-6">
            “
          </div>

          <p className="text-sm leading-8 text-[#666] min-h-[220px]">
            Un rythme posé, intense en idées. Les conversations ont mûri
            en stratégies concrètes pour la pratique pédagogique dans un
            environnement professionnel et stimulant.
          </p>

          <div className="mt-8 pt-6 border-t border-[#ececec] flex items-center gap-4">
            <Image
  src="/fattouma.png"
  alt="Fattouma Mzali"
  width={48}
  height={48}
  className="w-12 h-12 object-cover rounded-lg shrink-0"
/>
            <div>
              <p className="font-medium text-black">
                Fattouma Mzali
              </p>

              <p className="text-sm text-[#666]">
                ISET Rades
              </p>
            </div>
          </div>
        </div>

        {/* Syrine */}
        <div className="p-8">
          <div className="text-3xl text-[#2F0461] mb-6">
            “
          </div>

          <p className="text-sm leading-8 text-[#666] min-h-[220px]">
            Une expérience marquante qui a permis de découvrir de nouvelles
            approches pédagogiques, d’échanger avec des collègues inspirants
            et de réfléchir à l’avenir de l’enseignement supérieur.
          </p>

          <div className="mt-8 pt-6 border-t border-[#ececec] flex items-center gap-4">
            <Image
  src="/syrine.png"
  alt="Syrine Bousetta"
  width={48}
  height={48}
  className="w-12 h-12 object-cover rounded-lg shrink-0"
/>
            <div>
              <p className="font-medium text-black">
                Syrine Bousetta
              </p>

              <p className="text-sm text-[#666]">
                ISLM Monastir
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
    </>
  );
}
