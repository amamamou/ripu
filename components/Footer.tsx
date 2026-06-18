"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/60">
      <div className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="grid gap-12 md:gap-16 md:grid-cols-4 mb-12 md:mb-16">

            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-black mb-8">
                RIPU26
              </h3>

              <div className="flex items-center gap-4">
                {[
                  { Icon: FaInstagram, href: "https://instagram.com" },
                  { Icon: FaFacebookF, href: "https://facebook.com" },
                  { Icon: FaLinkedinIn, href: "https://linkedin.com" },
                  { Icon: FaYoutube, href: "https://youtube.com" },
                ].map(({ Icon, href }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    className="p-2.5 rounded-lg bg-gray-100/80 text-black hover:bg-[#2F0461] hover:text-white transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-black mb-6 md:mb-8">
                Navigation
              </h4>

              <nav className="space-y-3 md:space-y-4">
                {[
                  { label: "Accueil", href: "/" },
                  { label: "À propos", href: "/about" },
                  { label: "Comité", href: "/committee" },
                  { label: "Contact", href: "/contact" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm md:text-base text-gray-600 hover:text-[#2F0461] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Program Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-black mb-6 md:mb-8">
                Programme
              </h4>

              <nav className="space-y-3 md:space-y-4">
                {[
                  { label: "Appel à communications", href: "/authors" },
                  { label: "Thématiques", href: "/themes" },
                  { label: "Intervenants", href: "/ripu25" },
                  { label: "Inscription", href: "/authors#call" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm md:text-base text-gray-600 hover:text-[#2F0461] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-black mb-6 md:mb-8">
                Contact
              </h4>

              <div className="space-y-4 text-sm md:text-base text-gray-600">
                <p>
                  <a href="mailto:contact@ripu26.org" className="hover:text-[#2F0461] transition-colors">
                    contact@ripu26.org
                  </a>
                </p>

                <p>
                  Sousse, Tunisie<br />
                  30–31 Octobre 2026
                </p>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-200/60 py-8 md:py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              
              <p className="text-xs md:text-sm text-gray-600">
                © 2026 RIPU26. Rencontre Internationale de la Pédagogie Universitaire
              </p>

              <div className="flex items-center gap-6 md:gap-8">
                <Link
                  href="/legal"
                  className="text-xs md:text-sm text-gray-600 hover:text-[#2F0461] transition-colors"
                >
                  Mentions légales
                </Link>

                <Link
                  href="/privacy"
                  className="text-xs md:text-sm text-gray-600 hover:text-[#2F0461] transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
