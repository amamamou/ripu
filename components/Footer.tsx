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
    <footer className="relative overflow-hidden bg-[#1B1142] text-white">

      {/* Glow */}

      <div
        className="
          absolute
          left-1/2
          top-[-120px]
          -translate-x-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#2F0461]
          opacity-30
          blur-[180px]
          pointer-events-none
        "
      />

      {/* Watermark */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-[24vw]
            font-black
            tracking-[-0.08em]
            leading-none
            text-white/[0.03]
            whitespace-nowrap
            select-none
          "
        >
          RIPU26
        </div>

      </div>

      <div className="relative px-8 lg:px-16 pt-40 pb-12">

        {/* Hero Footer */}

        <div className="max-w-7xl">

          <div className="text-xs uppercase tracking-[0.25em] text-white/50">
            Rencontre Internationale de la Pédagogie Universitaire
          </div>

          <h2
            className="
              mt-8
              text-7xl
              md:text-8xl
              lg:text-[11rem]
              font-light
              tracking-[-0.07em]
              leading-[0.88]
            "
          >
            RIPU26
          </h2>

          <p
            className="
              mt-10
              max-w-3xl
              text-xl
              md:text-2xl
              leading-[1.8]
              text-white/65
            "
          >
            Une rencontre internationale dédiée à l’innovation pédagogique,
            l’intelligence artificielle générative et l’avenir de
            l’enseignement supérieur.
          </p>

        </div>

        {/* Main Footer Content */}

        <div className="mt-32 border-t border-white/10 pt-16">

          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

            {/* Social */}

            <div>

              <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                Suivez-nous
              </div>

              <div className="mt-8 flex items-center gap-8">

                <Link
                  href="https://instagram.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaInstagram size={20} />
                </Link>

                <Link
                  href="https://facebook.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaFacebookF size={20} />
                </Link>

                <Link
                  href="https://linkedin.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </Link>

                <Link
                  href="https://youtube.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <FaYoutube size={20} />
                </Link>

              </div>

            </div>

            {/* Navigation */}

            <div>

              <h4 className="text-sm font-medium text-white mb-6">
                Navigation
              </h4>

              <div className="space-y-4">

                <Link
                  href="/"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  Accueil
                </Link>

                <Link
                  href="/about"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  À propos
                </Link>

                <Link
                  href="/committee"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  Comité scientifique
                </Link>

                <Link
                  href="/contact"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>

              </div>

            </div>

            {/* Programme */}

            <div>

              <h4 className="text-sm font-medium text-white mb-6">
                Programme
              </h4>

              <div className="space-y-4">

                <Link
                  href="/authors"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  Appel à communications
                </Link>

                <Link
                  href="/about#topics"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  Thématiques
                </Link>

                <Link
                  href="/speakers"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  Intervenants
                </Link>

                <Link
                  href="/registration"
                  className="block text-white/60 hover:text-white transition-colors"
                >
                  Inscription
                </Link>

              </div>

            </div>

            {/* Contact */}

            <div>

              <h4 className="text-sm font-medium text-white mb-6">
                Contact
              </h4>

              <div className="space-y-4 text-white/60">

                <p>contact@ripu26.org</p>

                <p>
                  Sousse
                  <br />
                  Tunisie
                </p>

                <p>
                  30–31 Octobre 2026
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-white/40">
            © 2026 RIPU26. Tous droits réservés.
          </p>

          <div className="flex gap-8">

            <Link
              href="/legal"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Mentions légales
            </Link>

            <Link
              href="/privacy"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}