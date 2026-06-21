import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionHeadProps {
  label: string
  title: string
  description?: string
  action?: { label: string; href: string; variant?: "primary" | "outline" | "ghost" }
  children?: ReactNode
  className?: string
  dark?: boolean
}

export function SectionHead({
  label,
  title,
  description,
  action,
  children,
  className,
  dark = false,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:gap-6 md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className="max-w-2xl">
        <p
          className={cn(
            "dot-label text-xs font-semibold uppercase tracking-[0.14em]",
            dark ? "text-white/90 [&::before]:bg-white" : "t-label"
          )}
        >
          {label}
        </p>
        <h2 className={cn("t-section mt-4 text-balance", dark ? "text-white" : "text-[var(--black)]")}>
          {title}
        </h2>
        {description && (
          <p className={cn("mt-4 t-body", dark ? "text-white/75" : "text-[var(--grey-600)]")}>
            {description}
          </p>
        )}
        {children}
      </div>
      {action &&
        (action.variant === "outline" ? (
          <Link href={action.href} className="btn-outline-pill w-full justify-center sm:w-auto sm:shrink-0">
            {action.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : action.variant === "ghost" ? (
          <Link
            href={action.href}
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-2.5 t-body-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/18 sm:w-auto"
          >
            {action.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link href={action.href} className="btn-lime w-full justify-center sm:w-auto sm:shrink-0">
            {action.label}
            <span className="btn-lime-icon">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
    </div>
  )
}
