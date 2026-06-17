"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f0a1a] to-[#1a0f2e] text-white">
      <div className="px-8 lg:px-16 py-20">

        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

          {/* Left Brand */}
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-6xl font-light leading-none tracking-tight bg-gradient-to-r from-white to-[#a33ac2] bg-clip-text text-transparent">
              RIPU26
            </h2>

            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Rencontre Internationale de la Pédagogie Universitaire — Sousse, Tunisie
            </p>

            <div className="mt-8 flex items-center gap-6">
              <Link
                href="https://instagram.com"
                className="text-white/60 hover:text-[#a33ac2] transition-colors"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="https://facebook.com"
                className="text-white/60 hover:text-[#a33ac2] transition-colors"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                href="https://linkedin.com"
                className="text-white/60 hover:text-[#a33ac2] transition-colors"
              >
                <FaLinkedinIn size={20} />
              </Link>

              <Link
                href="https://youtube.com"
                className="text-white/60 hover:text-[#a33ac2] transition-colors"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-sm font-semibold text-white/90 tracking-wide">
              Navigation
            </h4>

            <div className="space-y-4">
              <Link
                href="/"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Accueil
              </Link>

              <Link
                href="/about"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                À propos
              </Link>

              <Link
                href="/committee"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Comité scientifique
              </Link>

              <Link
                href="/contact"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Programme */}
          <div>
            <h4 className="mb-6 text-sm font-semibold text-white/90 tracking-wide">
              Programme
            </h4>

            <div className="space-y-4">
              <Link
                href="/authors"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Appel à communications
              </Link>

              <Link
                href="/topics"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Thématiques
              </Link>

              <Link
                href="/speakers"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Intervenants
              </Link>

              <Link
                href="/registration"
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                Inscription
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-semibold text-white/90 tracking-wide">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/70">
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Email</p>
                <p className="text-white/80 font-medium">contact@ripu26.org</p>
              </div>

              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Lieu</p>
                <p className="text-white/80 font-medium">Sousse, Tunisie</p>
              </div>

              <div>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Dates</p>
                <p className="text-white/80 font-medium">30–31 Octobre 2026</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            © 2026 RIPU26. Tous droits réservés.
          </p>

          <div className="flex gap-8">
            <Link
              href="/legal"
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Mentions légales
            </Link>

            <Link
              href="/privacy"
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
