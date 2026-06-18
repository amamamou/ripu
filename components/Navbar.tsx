"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
const [aboutOpen, setAboutOpen] = useState(false);
const [authorsOpen, setAuthorsOpen] = useState(false);

useEffect(() => {
  document.body.style.overflow = mobileOpen ? "hidden" : "";
  return () => {
    document.body.style.overflow = "";
  };
}, [mobileOpen]);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#ececec]">

      <div className="flex items-center justify-between px-5 py-5 lg:px-16 lg:py-6">

 <Link href="/" className="flex items-center gap-2">

  <div className="origin-left scale-140">
    <Image
      src="/logo.png"
      alt="RIPU26"
      width={140}
      height={45}
      className="h-10 w-auto"
      priority
    />
  </div>

  <span className="hidden md:inline-flex ml-2 rounded-full bg-[#f5f5f5] px-3 py-1 text-xs text-black">
    30–31 Octobre 2026
  </span>

</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="text-sm text-black transition hover:opacity-60"
          >
            Accueil
          </Link>

          {/* À propos */}
          <div className="relative group">

            <button className="flex items-center gap-1 text-sm text-black transition hover:opacity-60">
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

            <button className="flex items-center gap-1 text-sm text-black transition hover:opacity-60">
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
            className="text-sm text-black transition hover:opacity-60"
          >
            RIPU25
          </Link>

          <Link
            href="/contact"
            className="text-sm text-black transition hover:opacity-60"
          >
            Contact
          </Link>

        </div>

     {/* Desktop Button */}
<Link
  href="/registration"
  className="hidden md:inline-flex rounded-full bg-[#f5f5f5] px-6 py-3 text-sm text-black transition hover:bg-[#ececec]"
>
  Soumettre une communication
</Link>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-black" />
          ) : (
            <Menu className="h-6 w-6 text-black" />
          )}
        </button>

      </div>

{mobileOpen && (
  <div className="fixed inset-0 top-[81px] z-40 md:hidden bg-white">

    <div className="px-8 py-10">

      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[#888]">
          RIPU26
        </p>
      </div>

      <div className="flex flex-col gap-5">

        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="text-4xl font-light tracking-tight text-black"
        >
          Accueil
        </Link>

     <div>

  <button
    onClick={() => setAboutOpen(!aboutOpen)}
    className="flex w-full items-center justify-between text-4xl font-light tracking-tight text-black"
  >
    À propos
    <ChevronDown
      className={`h-5 w-5 transition-transform ${
        aboutOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {aboutOpen && (
    <div className="mt-3 ml-1 flex flex-col gap-2">

      <Link href="/about" className="text-sm text-[#666]">
        À propos de RIPU
      </Link>

      <Link href="/about#topics" className="text-sm text-[#666]">
        Axes de la communication
      </Link>

      <Link href="/about#speakers" className="text-sm text-[#666]">
        Nos conférenciers
      </Link>

      <Link href="/committee" className="text-sm text-[#666]">
        Comité d'organisation
      </Link>

    </div>
  )}

</div>

<div>

  <button
    onClick={() => setAuthorsOpen(!authorsOpen)}
    className="flex w-full items-center justify-between text-4xl font-light tracking-tight text-black"
  >
    Auteurs
    <ChevronDown
      className={`h-5 w-5 transition-transform ${
        authorsOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {authorsOpen && (
    <div className="mt-3 ml-1 flex flex-col gap-2">

      <Link href="/authors#dates" className="text-sm text-[#666]">
        Dates importantes
      </Link>

      <Link href="/authors#guidelines" className="text-sm text-[#666]">
        Directives de soumission
      </Link>

      <Link href="/authors#call" className="text-sm text-[#666]">
        Appel à communications
      </Link>

    
      <Link href="/authors#presentation" className="text-sm text-[#666]">
        Directives de présentation
      </Link>

      <Link href="/authors#review" className="text-sm text-[#666]">
        Processus d'évaluation
      </Link>

    </div>
  )}

</div>

        <Link
          href="/ripu25"
          onClick={() => setMobileOpen(false)}
          className="text-4xl font-light tracking-tight text-black"
        >
          RIPU25
        </Link>

        <Link
          href="/contact"
          onClick={() => setMobileOpen(false)}
          className="text-4xl font-light tracking-tight text-black"
        >
          Contact
        </Link>

      </div>

      <div className="mt-12 border-t border-[#ececec] pt-8">

        <p className="text-sm text-[#666]">
          30–31 Octobre 2026
        </p>

        <p className="mt-1 text-sm text-[#666]">
          Sousse, Tunisie
        </p>

        <Link
          href="/registration"
          onClick={() => setMobileOpen(false)}
          className="mt-8 inline-flex items-center gap-2 text-base font-medium text-[#2F0461]"
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