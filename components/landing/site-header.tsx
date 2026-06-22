"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollProgress } from "@/components/landing/scroll-progress"

const links = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Auteurs", href: "/authors" },
  { label: "Comité", href: "/committee" },
  { label: "RIPU25", href: "/ripu25" },
  { label: "Contact", href: "/contact" },
]

const mobileLinks = [...links]

const authorsSections = [
  { label: "Dates", href: "/authors#dates" },
  { label: "Soumission", href: "/soumission" },
  { label: "Appel", href: "/authors#call" },
  { label: "Évaluation", href: "/authors#review" },
  { label: "Présentation", href: "/authors#presentation" },
] as const

const aboutSections = [
  { label: "RIPU", href: "/about#ripu" },
  { label: "Axes de communication", href: "/about#topics" },
  { label: "Programme", href: "/about#program" },
  { label: "Conférenciers", href: "/about#speakers" },
] as const

type NavSection = { label: string; href: string }

function NavSectionDropdown({
  label,
  href,
  sections,
  solidNav,
  pathname,
}: {
  label: string
  href: string
  sections: readonly NavSection[]
  solidNav: boolean
  pathname: string
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const active = pathname.startsWith(href)

  return (
    <div
      className="relative"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-semibold tracking-tight transition-all duration-200",
          solidNav
            ? active
              ? "bg-[var(--white)] text-[var(--brand)]"
              : "text-[var(--grey-600)] hover:text-[var(--black)]"
            : active
              ? "bg-white/20 text-white"
              : "text-white/85 hover:bg-white/10 hover:text-white"
        )}
        aria-haspopup="true"
        aria-expanded={menuOpen}
      >
        {label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", menuOpen && "rotate-180")}
          strokeWidth={2}
          aria-hidden
        />
      </Link>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-[calc(100%+0.35rem)] z-[60] w-[11.5rem] -translate-x-1/2 rounded-[var(--radius-xl)] border border-[var(--border)] bg-white p-1.5 shadow-[var(--shadow-panel)]"
            role="menu"
          >
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                role="menuitem"
                className="block rounded-lg px-3 py-2.5 text-[13px] font-medium text-[var(--grey-600)] transition-colors hover:bg-[var(--grey-50)] hover:text-[var(--brand)]"
              >
                {section.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileNavDropdown({
  label,
  href,
  overviewLabel,
  sections,
  active,
  expanded,
  onToggle,
  onClose,
  motionDelay,
}: {
  label: string
  href: string
  overviewLabel: string
  sections: readonly NavSection[]
  active: boolean
  expanded: boolean
  onToggle: () => void
  onClose: () => void
  motionDelay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: motionDelay, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold tracking-tight transition-colors",
          active
            ? "bg-[var(--brand-soft)] text-[var(--brand)]"
            : "text-[var(--black)] hover:bg-[var(--grey-50)]"
        )}
        aria-expanded={expanded}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            expanded && "rotate-180",
            active ? "text-[var(--brand)]" : "text-[var(--grey-400)]"
          )}
          strokeWidth={2}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-1 space-y-0.5 border-l border-[var(--border)] py-1 pl-3">
              <Link
                href={href}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--brand)] transition-colors hover:bg-[var(--grey-50)]"
              >
                {overviewLabel}
              </Link>
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--grey-600)] transition-colors hover:bg-[var(--grey-50)] hover:text-[var(--brand)]"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const navDropdownConfig = {
  "/about": { overviewLabel: "RIPU26", sections: aboutSections },
  "/authors": { overviewLabel: "Guide des auteurs", sections: authorsSections },
} as const

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [onHero, setOnHero] = useState(isHome && !solid)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [authorsOpen, setAuthorsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY
      setScrolled(y > 16)
      if (isHome && !solid) {
        setOnHero(y < window.innerHeight * 0.82)
      } else {
        setOnHero(false)
      }
    }
    fn()
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [isHome, solid])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (open) {
      setAuthorsOpen(pathname.startsWith("/authors"))
      setAboutOpen(pathname.startsWith("/about"))
    } else {
      setAuthorsOpen(false)
      setAboutOpen(false)
    }
  }, [open, pathname])

  const transparentHero = !solid && isHome && onHero && !scrolled
  const solidNav = solid || !transparentHero
  const landingHeader = isHome && !solid

  return (
    <>
      <ScrollProgress />

      <motion.header
        initial={false}
        animate={{
          backgroundColor: transparentHero
            ? "rgba(0,0,0,0)"
            : landingHeader
              ? "rgba(255,255,255,1)"
              : "rgba(255,255,255,0.92)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 overflow-visible shadow-none",
          solidNav && !landingHeader && "backdrop-blur-xl backdrop-saturate-150"
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
              const dropdown = navDropdownConfig[l.href as keyof typeof navDropdownConfig]
              if (dropdown) {
                return (
                  <NavSectionDropdown
                    key={l.href}
                    label={l.label}
                    href={l.href}
                    sections={dropdown.sections}
                    solidNav={solidNav}
                    pathname={pathname}
                  />
                )
              }

              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-[13px] font-semibold tracking-tight transition-all duration-200",
                    solidNav
                      ? active
                        ? "bg-[var(--white)] text-[var(--brand)]"
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
              href="/soumission"
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
                  const dropdown = navDropdownConfig[l.href as keyof typeof navDropdownConfig]

                  if (dropdown) {
                    const expanded = l.href === "/about" ? aboutOpen : authorsOpen
                    const onToggle =
                      l.href === "/about"
                        ? () => setAboutOpen((v) => !v)
                        : () => setAuthorsOpen((v) => !v)

                    return (
                      <MobileNavDropdown
                        key={l.href}
                        label={l.label}
                        href={l.href}
                        overviewLabel={dropdown.overviewLabel}
                        sections={dropdown.sections}
                        active={active}
                        expanded={expanded}
                        onToggle={onToggle}
                        onClose={() => setOpen(false)}
                        motionDelay={0.04 + i * 0.04}
                      />
                    )
                  }

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
                <Link href="/soumission" onClick={() => setOpen(false)} className="btn-lime w-full justify-center">
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
