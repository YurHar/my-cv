/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch by rendering nothing until mounted
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-background/70 backdrop-blur hover:opacity-80 cursor-pointer"
      aria-label="Toggle theme"
      title={`Switch to ${current === "dark" ? "light" : "dark"} mode`}
    >
      {isDark ? (
        // In dark mode we show the Sun (suggesting a switch TO light)
        <Sun
          className={[
            "h-5 w-5",
            "text-amber-400", // base
            "transition-colors",
            "group-hover:text-amber-300", // hover
            "group-active:text-amber-200", // tap
          ].join(" ")}
        />
      ) : (
        // In light mode we show the Moon (suggesting a switch TO dark)
        <Moon
          className={[
            "h-5 w-5",
            "text-indigo-600", // base
            "transition-colors",
            "group-hover:text-indigo-500", // hover
            "group-active:text-indigo-400", // tap
            "dark:text-indigo-300", // safety if rendered under dark unexpectedly
          ].join(" ")}
        />
      )}
    </button>
  );
}
