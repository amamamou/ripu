"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-32">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero/1.png')`,
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 md:px-8 text-center">
        
        {/* Eyebrow Label */}
        <div
          className={`mb-6 md:mb-8 transition-all duration-1000 ease-out ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm md:text-base text-white/80 font-medium">
            30–31 Octobre 2026 · Sousse, Tunisie
          </p>
        </div>

        {/* Main Heading */}
        <div
          className={`mb-10 md:mb-12 transition-all duration-1000 ease-out delay-100 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="max-w-5xl text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
            RIPU<br className="hidden md:block" />
            <span className="block mt-2 md:mt-3">26</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-12 md:mb-14 max-w-2xl transition-all duration-1000 ease-out delay-200 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
            Rencontre Internationale de la Pédagogie Universitaire 2e édition
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`mb-16 md:mb-20 transition-all duration-1000 ease-out delay-300 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/authors#call"
            className="inline-flex items-center gap-3 bg-white text-black px-7 md:px-9 py-4 md:py-4.5 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Appel à Communications
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Stats Card */}
        <div
          className={`transition-all duration-1000 ease-out delay-500 ${
            isLoaded
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 md:px-10 py-6 md:py-8 inline-block">
            <p className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
              Édition
            </p>
            <p className="text-4xl md:text-5xl font-bold text-white">
              2e
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  )
}
