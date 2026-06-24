"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Mic2, X } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Reveal } from "@/components/landing/reveal"
import { SectionHead } from "@/components/landing/section-head"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { cn } from "@/lib/utils"

type ProgramItem = {
  day: "Jour 1" | "Jour 2"
  time: string
  duration: string
  room: string
  kind: "Conférence" | "Atelier"
  title: string
  speaker: string
  description: string
}

const programByDay: { day: "Jour 1" | "Jour 2"; date: string; items: ProgramItem[] }[] = [
  {
    day: "Jour 1",
    date: "30 mai 2025",
    items: [
      {
        day: "Jour 1",
        time: "14:00",
        duration: "60 min",
        room: "Salle A",
        kind: "Conférence",
        title: "Impacts de l'IA générative sur les apprentissages",
        speaker: "Thierry Spriet",
        description:
          "Exploration des impacts de l'intelligence artificielle sur l'éducation et l'avenir des formations universitaires.",
      },
      {
        day: "Jour 1",
        time: "15:00",
        duration: "60 min",
        room: "Salle C",
        kind: "Conférence",
        title: "L'intelligence artificielle pour les métiers de demain",
        speaker: "Nawel Souissi",
        description:
          "Exploration du rôle croissant de l'IA dans le monde professionnel de demain.",
      },
      {
        day: "Jour 1",
        time: "16:15",
        duration: "45 min",
        room: "Salle B",
        kind: "Atelier",
        title: "IA Générative pour la Préparation des Examens",
        speaker: "Sonia Sahli",
        description:
          "Partage d'expériences sur le développement d'outils innovants pour enseignants intégrant les dernières avancées en IA générative.",
      },
    ],
  },
  {
    day: "Jour 2",
    date: "31 mai 2025",
    items: [
      {
        day: "Jour 2",
        time: "10:00",
        duration: "45 min",
        room: "Salle A",
        kind: "Atelier",
        title: "L'IAG comme assistant d'apprentissage",
        speaker: "Thierry Spriet",
        description:
          "Méthodologie pour engager les étudiants vers un usage responsable des IA génératives.",
      },
      {
        day: "Jour 2",
        time: "11:00",
        duration: "60 min",
        room: "Salle A",
        kind: "Conférence",
        title:
          "Ressources éducatives ouvertes et intelligentes pour le renforcement des compétences transversales",
        speaker: "Denis Gillet",
        description:
          "Présentation des ressources éducatives innovantes intégrant l'intelligence artificielle.",
      },
      {
        day: "Jour 2",
        time: "11:00",
        duration: "45 min",
        room: "Salle C",
        kind: "Atelier",
        title: "Collaboration Humain-IA pour le Design Thinking",
        speaker: "Denis Gillet",
        description:
          "Exploration du rôle de l'IA générative dans les processus créatifs et l'idéation collaborative.",
      },
    ],
  },
]

const galleryImages = [
  { src: "/ripu/3.png", alt: "Moments forts RIPU25" },
  { src: "/ripu/2.png", alt: "Moments forts RIPU25" },
  { src: "/ripu/4.png", alt: "Moments forts RIPU25" },
  { src: "/ripu/5.png", alt: "Moments forts RIPU25" },
  { src: "/ripu/6.png", alt: "Moments forts RIPU25" },
  { src: "/ripu/1.png", alt: "Moments forts RIPU25" },
] as const

const DESKTOP_GALLERY_MQ = "(min-width: 768px)"

function useDesktopGallery() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_GALLERY_MQ)
    const update = () => setIsDesktop(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  return isDesktop
}

function PageGalleryLightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
  onGoTo,
}: {
  items: readonly { src: string; alt: string }[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
}) {
  const item = items[index]

  useEffect(() => {
    const scrollY = window.scrollY
    const body = document.body
    const html = document.documentElement

    const previous = {
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      htmlOverflow: html.style.overflow,
    }

    body.style.overflow = "hidden"
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.width = "100%"
    html.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowLeft") onPrev()
      if (event.key === "ArrowRight") onNext()
    }

    const preventScroll = (event: TouchEvent) => {
      event.preventDefault()
    }

    window.addEventListener("keydown", onKeyDown)
    document.addEventListener("touchmove", preventScroll, { passive: false })

    return () => {
      body.style.overflow = previous.bodyOverflow
      body.style.position = previous.bodyPosition
      body.style.top = previous.bodyTop
      body.style.width = previous.bodyWidth
      html.style.overflow = previous.htmlOverflow
      window.scrollTo(0, scrollY)
      window.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("touchmove", preventScroll)
    }
  }, [onClose, onNext, onPrev])

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Galerie RIPU25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[80] flex h-[100dvh] flex-col overflow-hidden overscroll-none"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0a0a0a]/88 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fermer la galerie"
      />

      <div className="relative z-10 flex h-full flex-col px-4 pb-6 pt-[5.25rem] sm:px-8 md:pt-[6rem]">
        <div className="mb-4 flex w-full max-w-5xl items-center justify-between gap-4 self-center px-1">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            RIPU25 · Galerie
          </p>
          <p className="text-xs font-medium tabular-nums text-white/70">
            {index + 1} / {items.length}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        <div className="relative mx-auto flex min-h-0 w-full max-w-5xl flex-1 items-center justify-center">
          <button
            type="button"
            onClick={onPrev}
            className="absolute -left-1 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:-left-14 sm:h-11 sm:w-11"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={item.src}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] w-full max-h-[min(72vh,640px)] overflow-hidden rounded-[var(--radius-xl)] bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 960px"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={onNext}
            className="absolute -right-1 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:-right-14 sm:h-11 sm:w-11"
            aria-label="Photo suivante"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => onGoTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Photo ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </motion.div>,
    document.body
  )
}

function Ripu25GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const isDesktopGallery = useDesktopGallery()

  useEffect(() => {
    if (!isDesktopGallery) setLightboxIndex(null)
  }, [isDesktopGallery])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length
    )
  }, [])
  const goNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    )
  }, [])
  const goTo = useCallback((index: number) => setLightboxIndex(index), [])

  return (
    <section id="gallery" className="section-block section-white">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Galerie"
            title="RIPU25 en images"
            description="Conférences, ateliers, échanges scientifiques et rencontres entre chercheurs et enseignants."
          />
        </Reveal>

        <StaggerChildren
          className="section-inner grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6"
          stagger={0.05}
        >
          {galleryImages.map((photo, index) => (
            <StaggerItem key={photo.src}>
              {isDesktopGallery ? (
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-[var(--radius-xl)] outline-none transition-opacity duration-300 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--brand)]/20"
                  aria-label={`Ouvrir la photo ${index + 1}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 40vw, 280px"
                  />
                </button>
              ) : (
                <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-xl)]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 40vw, 280px"
                  />
                </figure>
              )}
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      <AnimatePresence>
        {isDesktopGallery && lightboxIndex !== null && (
          <PageGalleryLightbox
            items={galleryImages}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
            onGoTo={goTo}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function TimelineItem({ item, isLast }: { item: ProgramItem; isLast: boolean }) {
  return (
    <li className="relative pl-8 pb-10 last:pb-0">
      {!isLast && (
        <span
          className="absolute left-[3px] top-3 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-[var(--brand)]/30 to-transparent"
          aria-hidden
        />
      )}
      <span
        className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[var(--brand)] ring-4 ring-[var(--brand-soft)]"
        aria-hidden
      />
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <time className="text-lg font-semibold tabular-nums tracking-tight text-[var(--black)]">
          {item.time}
        </time>
        <span className="text-xs text-[var(--grey-400)]">
          {item.duration} · {item.room}
        </span>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em]",
            item.kind === "Conférence"
              ? "bg-[var(--brand-soft)] text-[var(--brand)]"
              : "bg-[var(--grey-100)] text-[var(--grey-600)]"
          )}
        >
          {item.kind}
        </span>
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--black)] md:text-lg">
        {item.title}
      </h3>
      <p className="mt-1.5 text-sm font-medium text-[var(--brand)]">{item.speaker}</p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--grey-600)]">
        {item.description}
      </p>
    </li>
  )
}

export function Ripu25PageContent() {
  return (
    <main className="overflow-x-clip bg-white pt-[4.25rem] md:pt-[4.75rem]">
      {/* Hero — same rhythm as about */}
      <section id="ripu25-intro" className="section-block pb-6 md:pb-10">
        <div className="container-main">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(240px,300px)] lg:gap-16 xl:gap-24">
            <div className="max-w-2xl">
              <Reveal>
                <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em]">
                  Édition archivée
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="t-section mt-4 text-[var(--black)]">RIPU25</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 text-sm font-medium text-[var(--grey-400)]">
                  Marriott Resort &amp; Spa · Sousse, Tunisie · 30–31 mai 2025
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-8 t-body text-[var(--grey-600)]">
                  L&apos;enseignement universitaire à l&apos;ère de l&apos;intelligence artificielle
                  et de la recherche appliquée.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 t-body text-[var(--grey-600)]">
                  Première édition de la Rencontre Internationale de la Pédagogie Universitaire,
                  réunissant des experts autour de l&apos;IA, de l&apos;innovation pédagogique et
                  des transformations de l&apos;enseignement supérieur.
                </p>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.12}>
              <div className="lg:pt-6">
                <div className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
                  <Image
                    src="/ripu.jpg"
                    alt="Affiche officielle RIPU25"
                    width={600}
                    height={848}
                    className="h-auto w-full rounded-[var(--radius-xl)]"
                    priority
                    sizes="(max-width: 1024px) 280px, 300px"
                  />
                </div>
                <p className="mt-5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--grey-400)]">
                  Affiche officielle · Sousse, 2025
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section id="program" className="section-block section-white">
        <div className="container-main">
          <Reveal>
            <SectionHead
              label="Programme"
              title="Deux jours de conférences et d'ateliers"
              description="Retour sur le programme scientifique de la première édition de RIPU."
            />
          </Reveal>

          <div className="section-inner grid gap-5 md:grid-cols-2">
            {programByDay.map((block, blockIndex) => (
              <Reveal key={block.day} delay={blockIndex * 0.06}>
                <div className="h-full rounded-[var(--radius-xl)] bg-[var(--grey-50)] p-7 md:p-9">
                  <div className="flex items-end justify-between gap-4 border-b border-[var(--border)] pb-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand)]">
                        {block.day}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-[var(--black)] md:text-2xl">
                        {block.date}
                      </h3>
                    </div>
                    <Mic2 className="h-5 w-5 text-[var(--grey-400)]" strokeWidth={1.5} aria-hidden />
                  </div>
                  <ol className="mt-8">
                    {block.items.map((item, i) => (
                      <TimelineItem
                        key={`${item.time}-${item.title}`}
                        item={item}
                        isLast={i === block.items.length - 1}
                      />
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Ripu25GallerySection />

      <CTASection className="section-white !bg-white !pt-0 !pb-16 md:!pb-24" />
    </main>
  )
}
