import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import { ConditionalFooter } from "@/components/layout/conditional-footer";
import { RIPU26_EVENT_TITLE } from "@/lib/event-copy";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RIPU26 — Rencontre Internationale de la Pédagogie Universitaire",
  description: `${RIPU26_EVENT_TITLE} — RIPU26, Sousse, Tunisie, 30–31 octobre 2026.`,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="bg-white font-sans antialiased">
        {children}

        <ConditionalFooter />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
