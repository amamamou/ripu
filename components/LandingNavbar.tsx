"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingNavbar() {
const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);
const [aboutOpen, setAboutOpen] = useState(false);
const [authorsOpen, setAuthorsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [mobileOpen]);
  return (
<nav
  className={`
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300
    ${scrolled ? "bg-white border-b border-[#ececec]" : "bg-transparent"}
  `}
  style={{
    borderBottomColor: scrolled ? "#ececec" : "transparent",
  }}
>
<div
  className={`
    flex items-center justify-between
    px-5 py-5 lg:px-16 lg:py-6
    transition-all duration-300

    ${
      mobileOpen && !scrolled
        ? "bg-black/30 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none"
        : ""
    }
  `}
>        {/* Left */}
        <Link href="/" className="flex items-center gap-2">

          <Image
            src="/logo Ripu26 - 1.png"
            alt="RIPU26"
            width={140}
            height={45}
            className="h-10 w-auto"
            priority
          />

    <span
  className={`
    hidden md:inline-flex
    ml-2
    rounded-full
    px-3
    py-1
    text-xs
    transition-all
    ${
      scrolled
        ? "bg-[#f5f5f5] text-black"
        : "bg-white/20 text-white backdrop-blur-sm"
    }
  `}
>
  30–31 Octobre 2026
</span>

        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className={`text-sm transition ${
              scrolled
                ? "text-black hover:opacity-60"
                : "text-white hover:opacity-80"
            }`}
          >
            Accueil
          </Link>

          {/* À propos */}
          <div className="relative group">

            <button
              className={`flex items-center gap-1 text-sm transition ${
                scrolled
                  ? "text-black hover:opacity-60"
                  : "text-white hover:opacity-80"
              }`}
            >
              À propos
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="absolute left-0 top-full invisible mt-4 w-72 border border-[#ececec] bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">

              <Link
                href="/about"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                À propos de RIPU
              </Link>

              <Link
                href="/about#topics"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Axes de la communication
              </Link>

              <Link
                href="/about#speakers"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Nos conférenciers
              </Link>

              <Link
                href="/committee"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Comité d'organisation
              </Link>

            </div>

          </div>

          {/* Auteurs */}
          <div className="relative group">

            <button
              className={`flex items-center gap-1 text-sm transition ${
                scrolled
                  ? "text-black hover:opacity-60"
                  : "text-white hover:opacity-80"
              }`}
            >
              Auteurs
              <ChevronDown className="h-4 w-4" />
            </button>

            <div className="absolute left-0 top-full invisible mt-4 w-80 border border-[#ececec] bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">

              <Link
                href="/authors#dates"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Dates importantes
              </Link>

              <Link
                href="/authors#guidelines"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Directives de soumission
              </Link>

              <Link
                href="/authors#call"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Appel à communications
              </Link>

              <Link
                href="/authors#presentation"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Directives de présentation
              </Link>

              <Link
                href="/authors#review"
                className="block px-5 py-3 text-sm hover:bg-[#fafafa]"
              >
                Processus d'évaluation
              </Link>

            </div>

          </div>

          <Link
            href="/ripu25"
            className={`text-sm transition ${
              scrolled
                ? "text-black hover:opacity-60"
                : "text-white hover:opacity-80"
            }`}
          >
            RIPU25
          </Link>

          <Link
            href="/contact"
            className={`text-sm transition ${
              scrolled
                ? "text-black hover:opacity-60"
                : "text-white hover:opacity-80"
            }`}
          >
            Contact
          </Link>

        </div>
{/* Desktop Button */}
<Link
  href="/registration"
  className={`
    hidden md:inline-flex
    rounded-full
    px-6
    py-3
    text-sm
    transition-all
    ${
      scrolled
        ? "bg-[#f5f5f5] text-black hover:bg-[#ececec]"
        : "bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
    }
  `}
>
  Soumettre une communication
</Link>

{/* Mobile Menu */}
<button
  onClick={() => setMobileOpen(!mobileOpen)}
  className="md:hidden"
>
  {mobileOpen ? (
    <X
      className={`h-6 w-6 ${
        scrolled ? "text-black" : "text-white"
      }`}
    />
  ) : (
    <Menu
      className={`h-6 w-6 ${
        scrolled ? "text-black" : "text-white"
      }`}
    />
  )}
</button>

      </div>

 {mobileOpen && (
  <div
    className={`
      fixed
top-[81px]
left-0
right-0
bottom-0
overflow-hidden
      ${
        scrolled
          ? "bg-white border-[#ececec]"
          : "bg-black/30 backdrop-blur-xl border-white/10"
      }
    `}
  >
    <div className="px-5 py-10">

      <div className="mb-10">
        <p
          className={`text-xs uppercase tracking-[0.2em] ${
            scrolled ? "text-[#888]" : "text-white/60"
          }`}
        >
          RIPU26
        </p>
      </div>

      <div className="flex flex-col">

        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className={`py-3 text-4xl font-light tracking-tight ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Accueil
        </Link>

        {/* À propos */}
        <div className="py-3">

          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className={`flex w-full items-center justify-between text-4xl font-light tracking-tight ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            À propos

            <ChevronDown
              className={`h-6 w-6 transition-transform ${
                aboutOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {aboutOpen && (
            <div className="mt-5 ml-1 flex flex-col gap-4">

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-[#666]" : "text-white/70"
                }`}
              >
                À propos de RIPU
              </Link>

              <Link
                href="/about#topics"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-[#666]" : "text-white/70"
                }`}
              >
                Axes de la communication
              </Link>

              <Link
                href="/about#speakers"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-[#666]" : "text-white/70"
                }`}
              >
                Nos conférenciers
              </Link>

              <Link
                href="/committee"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-[#666]" : "text-white/70"
                }`}
              >
                Comité d'organisation
              </Link>

            </div>
          )}

        </div>

        {/* Auteurs */}
        <div className="py-3">

          <button
            onClick={() => setAuthorsOpen(!authorsOpen)}
            className={`flex w-full items-center justify-between text-4xl font-light tracking-tight ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Auteurs

            <ChevronDown
              className={`h-6 w-6 transition-transform ${
                authorsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {authorsOpen && (
            <div className="mt-5 ml-1 flex flex-col gap-4">

              <Link
                href="/authors#dates"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-[#666]" : "text-white/70"
                }`}
              >
                Dates importantes
              </Link>

              <Link
                href="/authors#guidelines"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-[#666]" : "text-white/70"
                }`}
              >
                Directives de soumission
              </Link>

              <Link
                href="/authors#call"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-[#666]" : "text-white/70"
                }`}
              >
                Appel à communications
              </Link>

    

              <Link
                href="/authors#presentation"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-[#666]" : "text-white/70"
                }`}
              >
                Directives de présentation
              </Link>

              <Link
                href="/authors#review"
                onClick={() => setMobileOpen(false)}
                className={`text-sm ${
                  scrolled ? "text-[#666]" : "text-white/70"
                }`}
              >
                Processus d'évaluation
              </Link>

            </div>
          )}

        </div>

        <Link
          href="/ripu25"
          onClick={() => setMobileOpen(false)}
          className={`py-3 text-4xl font-light tracking-tight ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          RIPU25
        </Link>

        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className={`py-3 text-4xl font-light tracking-tight ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Contact
        </Link>

      </div>

      <div
        className={`mt-12 pt-8 border-t ${
          scrolled
            ? "border-[#ececec]"
            : "border-white/10"
        }`}
      >
        <p
          className={`text-sm ${
            scrolled ? "text-[#666]" : "text-white/70"
          }`}
        >
          30–31 Octobre 2026
        </p>

        <p
          className={`mt-1 text-sm ${
            scrolled ? "text-[#666]" : "text-white/70"
          }`}
        >
          Sousse, Tunisie
        </p>

        <Link
          href="/registration"
          onClick={() => setMobileOpen(false)}
          className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${
            scrolled ? "text-[#2F0461]" : "text-white"
          }`}
        >
          Soumettre une communication →
        </Link>

      </div>

    </div>
  </div>
)}
    </nav>
  );
}