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
import LandingNavbar from "@/components/LandingNavbar";
import { PhilosophySection } from '@/components/theme';
import { ImportantDatesSection } from '@/components/important-dates-section';
import { TestimonialsSectione } from '@/components/testmt';
import { Header } from '@/components/header';

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
<Header/>
      {/* Hero Section */}
  <Hero/>
<AboutSection/>
     
<ImportantDatesSection/>




<PhilosophySection/>



<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-12">

    {/* Header */}

    <div className="max-w-3xl mx-auto text-center mb-16">

      <p className="label-text mb-4">
        ÉDITION PRÉCÉDENTE
      </p>

      <h2 className="text-5xl font-bold text-black mb-6">
        RIPU25
      </h2>

      <p className="text-[#666] leading-8">
        Retour sur une édition marquée par des échanges riches,
        des conférences inspirantes et des réflexions innovantes
        autour de l'enseignement supérieur.
      </p>

    </div>

    {/* Images */}

    <div className="grid lg:grid-cols-12 gap-6 mb-10">

      <div className="lg:col-span-4">
        <div className="relative overflow-hidden rounded-[24px] h-[620px] group">

          <Image
            src="/ripu.jpg"
            alt="RIPU25"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#A64DFF]/8 via-transparent to-[#6C2EB7]/12" />

        </div>
      </div>

      <div className="lg:col-span-8 grid grid-cols-2 gap-6">

        <div className="relative overflow-hidden rounded-[24px] h-[300px] group">
          <Image
            src="/ripu/1.png"
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#A64DFF]/8 via-transparent to-[#6C2EB7]/12" />
        </div>

        <div className="relative overflow-hidden rounded-[24px] h-[300px] group">
          <Image
            src="/ripu/2.png"
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#A64DFF]/8 via-transparent to-[#6C2EB7]/12" />
        </div>

        <div className="relative overflow-hidden rounded-[24px] h-[300px] col-span-2 group">
          <Image
            src="/ripu/3.png"
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#A64DFF]/8 via-transparent to-[#6C2EB7]/12" />
        </div>

      </div>

    </div>

  </div>
</section>









<TestimonialsSectione/>


    </>
  );
}
