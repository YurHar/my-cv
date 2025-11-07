// lib/metadata.ts
import type { Metadata } from "next";

export const SITE = {
  name: "Yuri.dev",
  description:
    "Portfolio of Yuri Harutyunyan — building accessible, performant, user-friendly interfaces.",
  url: "https://yuricv.netlify.app/", // ← change to your real domain
  ogImage: "/logo.svg",             // 1200x630 PNG in /public
  logoSvg: "/logo.svg",
  appleIcon: "/logo.svg",
  favicon32: "/logo.svg",
  favicon16: "/logo.svg",
  maskIcon: "/logo.svg",
  twitterHandle: "@Portfolio of Yuri Harutyunyan — building accessible, performant, user-friendly interfaces.",  // optional
};

export const siteMetadata: Metadata = {
  title: `${SITE.name} — Front-End Developer`,
  description: SITE.description,
  icons: {
    icon: [
      { url: SITE.logoSvg, type: "image/svg+xml" },
      { url: SITE.favicon32, sizes: "32x32", type: "image/png" },
      { url: SITE.favicon16, sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: SITE.appleIcon, sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
    other: [{ rel: "mask-icon", url: SITE.maskIcon, color: "#0ea5e9" }],
  },
  openGraph: {
    title: `${SITE.name} — Front-End Developer`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Front-End Developer`,
    description: SITE.description,
    images: [SITE.ogImage],
    creator: SITE.twitterHandle,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};
