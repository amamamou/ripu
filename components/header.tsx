'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'Auteurs', href: '/authors' },
  { label: 'Comité', href: '/committee' },
  { label: 'RIPU25', href: '/ripu25' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-shadow duration-500',
          scrolled && 'shadow-[0_1px_0_var(--border)]'
        )}
      >
        <div className="flow-container flex items-center justify-between py-4 md:py-5">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="RIPU26" width={36} height={36} className="object-contain" />
            <span className="text-sm font-extrabold tracking-tight text-[var(--text-primary)]">
              RIPU26
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-9">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/authors" className="btn-primary hidden sm:inline-flex !py-2.5 !px-5 !text-[0.75rem]">
              Soumettre
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] xl:hidden"
              aria-label={mobileOpen ? 'Fermer' : 'Menu'}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 flex flex-col bg-white transition-all duration-500 xl:hidden',
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <div className="flex flex-1 flex-col justify-center flow-container gap-1 pt-20">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="type-title border-b border-[var(--border)] py-5 text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flow-container pb-10">
          <Link href="/authors" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center">
            Soumettre une communication
          </Link>
        </div>
      </div>
    </>
  )
}
