"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Reveal } from "@/components/landing/reveal"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"
import { SectionHead } from "@/components/landing/section-head"
import { ripu25Affiche, ripu25Intro, ripu25Meta } from "@/components/ripu25/data"
import { cn } from "@/lib/utils"

const landingGallery = [
  { src: "/ripu/3.png", alt: "Moments forts RIPU25" },
  { src: "/ripu/2.png", alt: "Moments forts RIPU25" },
  { src: "/ripu/4.png", alt: "Moments forts RIPU25" },
  { src: "/ripu/1.png", alt: "Moments forts RIPU25" },
] as const

const AFFICHE_LIGHTBOX_INDEX = 0

const desktopLightboxItems = [
  { src: ripu25Affiche.src, alt: ripu25Affiche.alt, isAffiche: true },
  ...landingGallery.map((photo) => ({ src: photo.src, alt: photo.alt, isAffiche: false })),
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

function GalleryLightbox({
  index,
  onClose,
  onPrev,
  onNext,
  onGoTo,
}: {
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
}) {
  const item = desktopLightboxItems[index]

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
            {index + 1} / {desktopLightboxItems.length}
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
              className={cn(
                "relative w-full max-h-[min(72vh,640px)] overflow-hidden rounded-[var(--radius-xl)] bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]",
                item.isAffiche ? "aspect-[3/4] max-w-md" : "aspect-[4/3]"
              )}
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
          {desktopLightboxItems.map((slide, i) => (
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

export function Ripu25Section() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const isDesktopGallery = useDesktopGallery()

  useEffect(() => {
    if (!isDesktopGallery) setLightboxIndex(null)
  }, [isDesktopGallery])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const goPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null
        ? null
        : (current - 1 + desktopLightboxItems.length) % desktopLightboxItems.length
    )
  }, [])
  const goNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % desktopLightboxItems.length
    )
  }, [])
  const goTo = useCallback((index: number) => setLightboxIndex(index), [])

  return (
    <section id="ripu25" className="section-block landing-section section-white pb-0 md:pb-2">
      <div className="container-main">
        <Reveal>
          <SectionHead
            label="Édition précédente"
            title="RIPU25"
            action={{ label: "Voir le récapitulatif", href: "/ripu25", variant: "outline" }}
          />
        </Reveal>

        <div className="section-inner grid gap-10 lg:grid-cols-[minmax(220px,300px)_1fr] lg:items-start lg:gap-16 xl:gap-20">
          <Reveal delay={0.05}>
            <div className="mx-auto max-w-[240px] lg:mx-0 lg:max-w-none">
              {isDesktopGallery ? (
                <button
                  type="button"
                  onClick={() => setLightboxIndex(AFFICHE_LIGHTBOX_INDEX)}
                  className="group relative aspect-[3/4] w-full cursor-zoom-in overflow-hidden rounded-[var(--radius-xl)] bg-[var(--grey-50)] outline-none ring-[var(--brand)]/30 transition-shadow focus-visible:ring-2"
                  aria-label="Ouvrir l'affiche officielle"
                >
                  <Image
                    src={ripu25Affiche.src}
                    alt={ripu25Affiche.alt}
                    fill
                    className="object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    priority
                    sizes="(max-width: 1024px) 70vw, 300px"
                  />
                </button>
              ) : (
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--grey-50)]">
                  <Image
                    src={ripu25Affiche.src}
                    alt={ripu25Affiche.alt}
                    fill
                    className="object-contain object-top"
                    priority
                    sizes="(max-width: 1024px) 70vw, 300px"
                  />
                </div>
              )}
              <p className="mt-4 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--grey-400)] lg:text-left">
                Affiche officielle · {ripu25Meta.date}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="max-w-xl">
              <p className="t-body leading-relaxed text-[var(--grey-600)]">{ripu25Intro}</p>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
                <p className="text-sm font-medium text-[var(--black)]">
                  {ripu25Meta.date}
                  <span className="text-[var(--grey-400)]"> · </span>
                  {ripu25Meta.venue}
                </p>
              </div>

              <p className="mt-3 text-sm font-medium text-[var(--grey-400)]">
                {ripu25Meta.highlights.join(" · ")}
              </p>

              <StaggerChildren
                className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-4 sm:gap-3"
                stagger={0.05}
              >
                {landingGallery.map((photo, index) => (
                  <StaggerItem key={photo.src}>
                    {isDesktopGallery ? (
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(index + 1)}
                        className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-[var(--radius-xl)] bg-[var(--grey-50)] outline-none ring-[var(--brand)]/30 transition-shadow focus-visible:ring-2"
                        aria-label={`Ouvrir la photo ${index + 1}`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 28vw, 200px"
                        />
                      </button>
                    ) : (
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-xl)] bg-[var(--grey-50)]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 28vw, 200px"
                        />
                      </div>
                    )}
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <Link href="/ripu25" className="link-arrow mt-8 inline-flex text-sm font-semibold">
                Explorer RIPU25
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {isDesktopGallery && lightboxIndex !== null && (
          <GalleryLightbox
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
