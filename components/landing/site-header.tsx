"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollProgress } from "@/components/landing/scroll-progress"

const links = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Auteurs", href: "/authors" },
  { label: "Comité", href: "/committee" },
]

const mobileLinks = [
  ...links,
  { label: "Contact", href: "/contact" },
  { label: "RIPU25", href: "/ripu25" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [onHero, setOnHero] = useState(isHome)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY
      setScrolled(y > 16)
      if (isHome) {
        setOnHero(y < window.innerHeight * 0.82)
      } else {
        setOnHero(false)
      }
    }
    fn()
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const transparentHero = isHome && onHero && !scrolled
  const solidNav = !transparentHero

  return (
    <>
      <ScrollProgress />

      <motion.header
        initial={false}
        animate={{
          backgroundColor: transparentHero ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.92)",
          boxShadow: solidNav && scrolled ? "0 12px 40px rgba(47, 4, 97, 0.06)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 overflow-visible",
          solidNav && "backdrop-blur-xl backdrop-saturate-150"
        )}
      >
        <div className="container-main flex h-[4.25rem] items-center justify-between gap-4 md:h-[4.75rem]">
          <Link href="/" className="relative z-10 flex h-full shrink-0 items-center" aria-label="RIPU26 — Accueil">
            <Image
              src="/logo.png"
              alt=""
              width={220}
              height={72}
              priority
              className="h-[2.75rem] w-auto max-w-[42vw] origin-left scale-110 object-contain sm:max-w-none sm:h-[3.25rem] sm:scale-[1.35] md:scale-[1.55]"
            />
          </Link>

          <nav
            className={cn(
              "absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full px-1.5 py-1.5 md:flex",
              solidNav ? "bg-[var(--grey-50)]" : "bg-transparent"
            )}
            aria-label="Navigation principale"
          >
            {links.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-[13px] font-semibold tracking-tight transition-all duration-200",
                    solidNav
                      ? active
                        ? "bg-[var(--white)] text-[var(--brand)] shadow-[var(--shadow-soft)]"
                        : "text-[var(--grey-600)] hover:text-[var(--black)]"
                      : active
                        ? "bg-white/20 text-white"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          <div className="relative z-10 flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden text-[13px] font-semibold transition-colors duration-200 lg:inline",
                solidNav ? "text-[var(--grey-600)] hover:text-[var(--brand)]" : "text-white/80 hover:text-white"
              )}
            >
              Contact
            </Link>

            <Link
              href="/authors"
              className={cn(
                "hidden items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-bold transition-all duration-200 sm:inline-flex",
                solidNav
                  ? "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]"
                  : "bg-white text-[var(--brand)] hover:bg-white/90"
              )}
            >
              Soumettre
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden",
                solidNav
                  ? "bg-[var(--grey-50)] text-[var(--black)] hover:bg-[var(--grey-100)]"
                  : "bg-white/12 text-white hover:bg-white/20"
              )}
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-[var(--brand-dark)]/20 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-[var(--white)] shadow-[-16px_0_48px_rgba(47,4,97,0.08)] md:hidden"
            >
              <div className="flex items-center justify-between px-5 py-4">
                <Link href="/" onClick={() => setOpen(false)} aria-label="RIPU26 — Accueil">
                  <Image src="/logo.png" alt="" width={160} height={52} className="h-11 w-auto origin-left scale-125 object-contain" />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--grey-50)] text-[var(--black)] transition-colors hover:bg-[var(--grey-100)]"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {mobileLinks.map((l, i) => {
                  const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
                  return (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 + i * 0.04, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold tracking-tight transition-colors",
                          active
                            ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                            : "text-[var(--black)] hover:bg-[var(--grey-50)]"
                        )}
                      >
                        {l.label}
                        <ArrowRight className={cn("h-4 w-4", active ? "text-[var(--brand)]" : "text-[var(--grey-400)]")} />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <div className="space-y-3 px-5 pb-8 pt-2">
                <Link href="/authors" onClick={() => setOpen(false)} className="btn-lime w-full justify-center">
                  Soumettre une communication
                  <span className="btn-lime-icon">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <p className="text-center text-xs text-[var(--grey-400)]">Sousse · 30–31 octobre 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
