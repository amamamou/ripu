"use client"

import { useEffect, useState, type ReactNode } from "react"

/** Avoid hydration mismatches from password managers injecting attributes into forms. */
export function AuthClientGate({
  children,
  fallbackClassName = "h-[28rem] animate-pulse rounded-xl bg-[var(--grey-50)]",
}: {
  children: ReactNode
  fallbackClassName?: string
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={fallbackClassName} aria-hidden />
  }

  return children
}
