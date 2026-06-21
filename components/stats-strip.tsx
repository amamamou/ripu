"use client"

import Link from "next/link"
import { CountUp } from "@/components/landing/count-up"
import { StaggerChildren, StaggerItem } from "@/components/landing/stagger-children"

const stats = [
  { label: "Édition internationale", href: "/about", render: () => <><CountUp value={2} />e</> },
  { label: "Axes de recherche", href: "/#topics", render: () => <CountUp value={3} /> },
  { label: "Octobre 2026", href: "/authors#dates", render: () => <>30–31</> },
  { label: "Tunisie", href: "/contact", render: () => <>Sousse</> },
]

export function StatsStrip() {
  return (
    <section className="relative z-20 -mt-8 md:-mt-14">
      <div className="container-main">
        <StaggerChildren className="floating-panel grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Link
                href={stat.href}
                className="group flex flex-col px-4 py-6 transition-colors hover:bg-[var(--grey-50)] sm:px-6 sm:py-8 md:px-8 md:py-10"
              >
                <p className="t-stat text-[var(--black)] transition-colors group-hover:text-[var(--brand)]">
                  {stat.render()}
                </p>
                <p className="mt-2 text-xs text-[var(--grey-600)] sm:t-body-sm">{stat.label}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
