// lib/metadata.ts
import type { Metadata } from "next";

export const SITE = {
  name: "Yuri.dev",
  description:
    "Portfolio of Yuri Harutyunyan — building accessible, performant, user-friendly interfaces.",
  url: "https://yuricv.netlify.app/", // ← set your real domain
  logoSvg: "/logo.svg",
};

export const siteMetadata: Metadata = {
  title: `${SITE.name} — Front-End Developer`,
  description: SITE.description,
  icons: {
    // Use the same SVG for all icon slots
    icon: [{ url: SITE.logoSvg, type: "image/svg+xml" }],
    apple: [{ url: SITE.logoSvg, type: "image/svg+xml" }],     // many iOS versions ignore SVG here
    shortcut: [SITE.logoSvg],
    other: [{ rel: "mask-icon", url: SITE.logoSvg, color: "#0ea5e9" }], // for Safari pinned tabs
  },
  openGraph: {
    title: `${SITE.name} — Front-End Developer`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    // (No share image; you asked for SVG-only for icons. Add one later if needed.)
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} — Front-End Developer`,
    description: SITE.description,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};
