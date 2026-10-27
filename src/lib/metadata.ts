// lib/metadata.ts
import type { Metadata, Viewport } from "next";

export const SITE = {
  name: "Yuri.dev",
  description:
    "Senior Frontend Engineer with 5+ years building production React and TypeScript applications for government and enterprise platforms. Focused on frontend architecture, accessibility (WCAG 2.1), and performance.",
  url: "https://yuricv.netlify.app/", // ← set your real domain
  logoSvg: "/logo.svg",
};

export const siteMetadata: Metadata = {
  title: `${SITE.name} — Senior Frontend Engineer`,
  description: SITE.description,
  icons: {
    // Use the same SVG for all icon slots
    icon: [{ url: SITE.logoSvg, type: "image/svg+xml" }],
    apple: [{ url: SITE.logoSvg, type: "image/svg+xml" }],     // many iOS versions ignore SVG here
    shortcut: [SITE.logoSvg],
    other: [{ rel: "mask-icon", url: SITE.logoSvg, color: "#0ea5e9" }], // for Safari pinned tabs
  },
  openGraph: {
    title: `${SITE.name} — Senior Frontend Engineer`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    // (No share image; you asked for SVG-only for icons. Add one later if needed.)
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} — Senior Frontend Engineer`,
    description: SITE.description,
  },
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};
