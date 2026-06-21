import { cn } from "@/lib/utils"

interface SectionMarkerProps {
  index: string
  label: string
  dark?: boolean
  className?: string
}

export function SectionMarker({ index, label, dark = false, className }: SectionMarkerProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span
        className={cn(
          "type-label",
          dark ? "text-white/40" : "text-[var(--accent)]"
        )}
      >
        {index}
      </span>
      <span className={cn("h-px w-8", dark ? "bg-white/20" : "bg-[var(--accent)]/30")} />
      <span
        className={cn(
          "type-label",
          dark ? "text-white/60" : "text-[var(--text-muted)]"
        )}
      >
        {label}
      </span>
    </div>
  )
}
