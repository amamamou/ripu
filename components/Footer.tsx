import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FaInstagram, FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[var(--grey-50)]">
      <div className="container-main py-12 sm:py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="t-nav text-2xl font-bold tracking-tight">RIPU26</p>
            <p className="mt-4 max-w-xs t-body-sm text-[var(--grey-600)]">
              Rencontre Internationale de la Pédagogie Universitaire — Sousse, 30–31 Octobre 2026.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { href: "https://instagram.com", Icon: FaInstagram, label: "Instagram" },
                { href: "https://facebook.com", Icon: FaFacebookF, label: "Facebook" },
                { href: "https://linkedin.com", Icon: FaLinkedinIn, label: "LinkedIn" },
                { href: "https://youtube.com", Icon: FaYoutube, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--grey-400)] transition-all hover:bg-[var(--black)] hover:text-white"
                >
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {[
              { title: "Navigation", links: [["Accueil", "/"], ["À propos", "/about"], ["Comité", "/committee"], ["Contact", "/contact"]] },
              { title: "Programme", links: [["Appel à communications", "/authors"], ["Axes du colloque", "/about#topics"], ["Comité scientifique", "/committee"], ["Dates & inscription", "/authors#dates"]] },
              { title: "Contact", links: [["contact@ripu26.org", "mailto:contact@ripu26.org"], ["Sousse, Tunisie", "/contact"], ["30–31 Oct. 2026", "/authors#dates"]] },
            ].map((col) => (
              <div key={col.title}>
                <p className="t-label dot-label">{col.title}</p>
                <nav className="mt-5 flex flex-col gap-3">
                  {col.links.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="group inline-flex items-center gap-1 t-body-sm text-[var(--grey-600)] transition-colors hover:text-[var(--black)]"
                    >
                      {label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
          <p className="t-body-sm text-[var(--grey-400)]">© 2026 RIPU26. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link href="/contact" className="t-body-sm text-[var(--grey-400)] transition-colors hover:text-[var(--black)]">
              Mentions légales
            </Link>
            <Link href="/contact" className="t-body-sm text-[var(--grey-400)] transition-colors hover:text-[var(--black)]">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
