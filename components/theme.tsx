import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function PhilosophySection() {
  return (
    <section className="bg-white px-12 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="flex mb-16 flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

    <div>

      <div className="label-text mb-6">
        THÉMATIQUES
      </div>

      <h2 className="max-w-5xl text-5xl md:text-7xl lg:text-8xl font-light leading-[0.92] tracking-tight text-black">
        Les axes du colloque
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#666]">
        RIPU26 accueille des contributions portant sur les usages de
        l’intelligence artificielle en éducation, l’innovation
        pédagogique et les enjeux contemporains de l’enseignement
        supérieur.
      </p>

    </div>

    <Link
      href="/authors#call"
      className="
        group
        flex
        items-center
        gap-2
        text-sm
        font-medium
        text-[#2F0461]
        hover:text-[#1B1142]
        transition-colors
        shrink-0
      "
    >
      Appel à communications

      <ArrowUpRight
        className="
          h-4
          w-4
          transition-transform
          group-hover:-translate-y-0.5
          group-hover:translate-x-0.5
        "
      />
    </Link>

  </div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

  {/* Card 1 */}
  <div className="bg-[#f5f5f5] rounded-[24px] p-7 h-[340px] flex flex-col justify-end">
    <div>
      <h4 className="font-semibold text-xl text-black mb-4 leading-tight">
        Intelligence Artificielle
        <br />
        & Enseignement
      </h4>

      <div className="space-y-2 text-[#666] text-sm leading-7">
        <p>L'IAG comme tuteur d'apprentissage</p>
        <p>L'IAG et le geste enseignant</p>
        <p>L'IAG pour la correction des examens</p>
        <p>Les effets de l'IAG sur les apprentissages</p>
        <p>L'IAG et la vie étudiante</p>
      </div>
    </div>
  </div>

   {/* Card 2 - Image */}
  <div className="relative overflow-hidden rounded-[24px] h-[340px]">

    <Image
src="/hi.png"      alt="Golf Course"
      fill
      className="object-cover"
    />

  </div>

  {/* Card 3 */}
  <div className="bg-[#f5f5f5] rounded-[24px] p-7 h-[340px] flex flex-col justify-end">
    <div>
      <h4 className="font-semibold text-xl text-black mb-4 leading-tight">
        Approches
        <br />
        Pédagogiques
      </h4>

      <div className="space-y-2 text-[#666] text-sm leading-7">
        <p>L'approche par compétences (APC)</p>
        <p>Les plans d'études à l'ère de l'IA et de l'APC</p>
        <p>La gamification comme levier d'apprentissage</p>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-[#f5f5f5] rounded-[24px] p-7 h-[340px] flex flex-col justify-end">
    <div>
      <h4 className="font-semibold text-xl text-black mb-4 leading-tight">
        Genre
        <br />
        & Éducation
      </h4>

      <div className="space-y-2 text-[#666] text-sm leading-7">
        <p>La place des femmes dans l'éducation</p>
      </div>
    </div>
  </div>

</div>

      </div>
    </section>
  )
}