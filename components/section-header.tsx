import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  dark?: boolean
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("type-label mb-5", dark ? "text-white/40" : "text-[var(--accent)]")}>
        {label}
      </p>
      <h2
        className={cn(
          "type-headline text-balance",
          dark ? "text-white" : "text-[var(--text-primary)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 type-body-lg",
            dark ? "text-white/55" : "text-[var(--text-secondary)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
