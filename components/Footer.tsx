import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa"
import { cn } from "@/lib/utils"

const footerColumns = [
  {
    title: "Navigation",
    links: [
      ["Accueil", "/"],
      ["À propos", "/about"],
      ["Comité", "/committee"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Programme",
    links: [
      ["Appel à communications", "/authors"],
      ["Axes du colloque", "/about#topics"],
      ["Comité scientifique", "/committee"],
      ["Dates & inscription", "/authors#dates"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["ripu25sousse@gmail.com", "mailto:ripu25sousse@gmail.com"],
      ["Sousse, Tunisie", "/contact"],
      ["30–31 Oct. 2026", "/authors#dates"],
    ],
    fullWidthMobile: true,
  },
] as const

const socialLinks = [
  { href: "https://instagram.com", Icon: FaInstagram, label: "Instagram" },
  { href: "https://facebook.com", Icon: FaFacebookF, label: "Facebook" },
  { href: "https://linkedin.com", Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://youtube.com", Icon: FaYoutube, label: "YouTube" },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="container-main py-10 sm:py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="t-nav text-2xl font-bold tracking-tight">RIPU26</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--grey-600)] sm:mt-4 sm:max-w-xs">
              Rencontre Internationale de la Pédagogie Universitaire — Sousse, 30–31 Octobre 2026.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8">
              {socialLinks.map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--grey-50)] text-[var(--grey-400)] transition-all hover:bg-[var(--black)] hover:text-white"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 lg:col-span-8 lg:gap-10">
            {footerColumns.map((col) => (
              <div
                key={col.title}
                className={cn("fullWidthMobile" in col && col.fullWidthMobile && "col-span-2 sm:col-span-1")}
              >
                <p className="dot-label text-xs font-semibold uppercase tracking-[0.14em] text-[var(--grey-400)]">
                  {col.title}
                </p>
                <nav className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                  {col.links.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="group inline-flex min-h-9 items-center gap-1.5 text-sm leading-snug text-[var(--grey-600)] transition-colors hover:text-[var(--black)]"
                    >
                      <span className="break-words">{label}</span>
                      <ArrowUpRight
                        className="h-3.5 w-3.5 shrink-0 opacity-40 transition-all group-hover:opacity-100 sm:opacity-0"
                        aria-hidden
                      />
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:mt-14 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-sm text-[var(--grey-400)] md:text-left">
            © 2026 RIPU26. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end">
            <Link
              href="/contact"
              className="text-sm text-[var(--grey-400)] transition-colors hover:text-[var(--black)]"
            >
              Mentions légales
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[var(--grey-400)] transition-colors hover:text-[var(--black)]"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
