import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import Footer from "@/components/Footer";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RIPU26 — Rencontre Internationale de la Pédagogie Universitaire",
  description:
    "RIPU26 rassemble enseignants, chercheurs et responsables de l’enseignement supérieur autour des enjeux de l’intelligence artificielle, de l’innovation pédagogique et de l’approche par compétences. Sousse, Tunisie — 30–31 Octobre 2026.",
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
    <html lang="fr" className={`${montserrat.variable} bg-white`}>
      <body className="bg-white font-sans text-black antialiased">
        {children}

        <Footer />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}