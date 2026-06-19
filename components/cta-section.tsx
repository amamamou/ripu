import Image from 'next/image'

export function CTASection() {
  return (
    <section className="bg-white px-12 pb-20">
      <div className="max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-[28px] h-[320px] md:h-[420px]">

        <Image
          src="/hero/3.png"
          alt="RIPU26"
          fill
          className="object-cover"
        />

        {/* Overlay */}
<div className="absolute inset-0 bg-[#2F0461]/20" />        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/80 mb-4">
            ✦ PRÊT À PARTICIPER ?
          </span>

          <h2 className="text-white font-medium leading-tight text-3xl md:text-5xl max-w-3xl">
            Votre place vous attend.
            <br />
            Rejoignez RIPU26.
          </h2>

          <button
            className="
              mt-8
              rounded-full
              border
              border-white/40
              bg-white/10
              backdrop-blur-md
              px-8
              py-3
              text-sm
              font-medium
              text-white
              hover:bg-white/20
              transition-all
            "
          >
            Soumettre une communication
          </button>

        </div>
</div>
      </div>
    </section>
  )
}