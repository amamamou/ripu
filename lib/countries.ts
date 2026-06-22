export const COUNTRY_FLAGS: Record<string, string> = {
  Tunisie: "🇹🇳",
  France: "🇫🇷",
  Suisse: "🇨🇭",
  Italie: "🇮🇹",
  Liban: "🇱🇧",
  Canada: "🇨🇦",
}

export function getLastName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length >= 2 && parts[parts.length - 2]?.toLowerCase() === "ben") {
    return `${parts[parts.length - 2]} ${parts[parts.length - 1]}`
  }
  return parts[parts.length - 1] ?? fullName
}

export function sortByLastName<T extends { name: string }>(members: readonly T[]): T[] {
  return [...members].sort((a, b) =>
    getLastName(a.name).localeCompare(getLastName(b.name), "fr", { sensitivity: "base" })
  )
}
