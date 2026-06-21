"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback, useRef } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { RIPU26_EVENT_THEME } from "@/lib/event-copy"

const heroImages = ["/hero/1.png", "/hero/2.png", "/hero/3.png"]

const missionSlides = [
  {
    title: "Thème du colloque",
    body: `${RIPU26_EVENT_THEME.statement} : ${RIPU26_EVENT_THEME.question}`,
    href: "/about",
    label: "En savoir plus",
  },
  {
    title: "Dates clés",
    body: "15 Juillet — Soumission · 10 Août — Notification · 01 Septembre — Inscription · 30–31 Octobre 2026 — Conférence à Sousse, Tunisie.",
    href: "/authors#dates",
    label: "Calendrier complet",
  },
  {
    title: "Appel à communications",
    body: "Soumettez vos travaux de recherche et retours d'expérience sur l'IA, l'APC et l'innovation pédagogique. Évaluation par les pairs.",
    href: "/authors",
    label: "Soumettre un papier",
  },
]

export default function Hero() {
  const [imageIndex, setImageIndex] = useState(0)
  const [slideIndex, setSlideIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 60])

  const next = useCallback(() => {
    setImageIndex((i) => (i + 1) % heroImages.length)
    setSlideIndex((i) => (i + 1) % missionSlides.length)
  }, [])

  const prev = useCallback(() => {
    setImageIndex((i) => (i - 1 + heroImages.length) % heroImages.length)
    setSlideIndex((i) => (i - 1 + missionSlides.length) % missionSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const slide = missionSlides[slideIndex]

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] overflow-hidden bg-[var(--brand-dark)]">
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: imageY }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={imageIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image src={heroImages[imageIndex]} alt="RIPU26" fill priority className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)] via-black/50 to-black/30" />
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <motion.div
        className="container-main relative flex min-h-[100svh] flex-col justify-end pb-20 pt-[5.5rem] sm:pb-24 md:pb-32 md:pt-32"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
        >
          <span className="pill-outline-white w-fit text-xs sm:text-sm">2e édition internationale</span>
          <span className="t-body-sm font-medium text-white/70">Sousse · 30–31 Octobre 2026</span>
        </motion.div>

        <div className="grid items-end gap-8 lg:grid-cols-[1fr_380px] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em] text-white/80 [&::before]:bg-white/80">
              Pédagogie Universitaire &amp; IA
            </p>
            <h1 className="t-hero mt-4 text-white">
              L&apos;innovation au cœur de votre parcours académique
            </h1>
            <p className="mt-6 max-w-lg t-body text-white/70">
              RIPU26 rassemble enseignants, chercheurs et responsables de
              l&apos;enseignement supérieur autour de l&apos;IA, de l&apos;APC
              et des enjeux de l&apos;évaluation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/authors" className="btn-lime w-full justify-center sm:w-auto">
                Appel à communications
                <span className="btn-lime-icon"><ArrowRight className="h-4 w-4" /></span>
              </Link>
              <Link href="#about" className="btn-hero w-full justify-center sm:w-auto">
                Découvrir le colloque
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-white/50">À la une</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 sm:h-10 sm:w-10"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 sm:h-10 sm:w-10"
                  aria-label="Suivant"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-5 sm:p-7 md:p-8"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="font-mono text-xs text-white/50">
                    {String(slideIndex + 1).padStart(2, "0")} / {String(missionSlides.length).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-bold text-white sm:text-xl">{slide.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:t-body-sm">{slide.body}</p>
                <Link
                  href={slide.href}
                  className="mt-6 inline-flex items-center gap-2 t-body-sm font-semibold text-white transition-opacity hover:opacity-75"
                >
                  {slide.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="mt-4 flex justify-center gap-2">
              {missionSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setSlideIndex(i)
                    setImageIndex(i)
                  }}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === slideIndex ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          aria-label="Défiler vers le contenu"
        >
          <span className="t-body-sm text-white/40">Défiler</span>
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="block h-10 w-px bg-gradient-to-b from-white/0 via-white/60 to-white/0"
          />
        </motion.a>
      </motion.div>
    </section>
  )
}

