"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"     // adds/removes 'dark' class on <html>
      defaultTheme="dark"   // noir is the default look; light stays available via the toggle
      enableSystem={false}
      disableTransitionOnChange
    >
      {/* Respect the visitor's reduced-motion preference for all framer animations */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  );
}
