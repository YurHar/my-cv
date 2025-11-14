"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-slate-900/70">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-extrabold tracking-tight text-lg text-slate-900 dark:text-slate-100"
        >
          <span className="sr-only">Yuri.dev</span>
          Yuri.dev
        </Link>

        {/* Right side (desktop): nav + toggle */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors hover:opacity-80",
                    active
                      ? "font-semibold underline underline-offset-8 text-slate-900 dark:text-slate-100"
                      : "text-muted-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>

        {/* Mobile: toggle + menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger
              className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 supports-backdrop-filter:backdrop-blur"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            {/* Wider, comfy mobile sheet */}
            <SheetContent
              side="right"
              className={cn(
                "w-[86vw] max-w-sm p-0 border-l",
                "bg-white/80 dark:bg-slate-900/80 supports-backdrop-filter:backdrop-blur [&>button]:hidden"
              )}
            >
              {/* Header inside sheet */}
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <SheetTitle className="text-base font-semibold">
                  Menu
                </SheetTitle>
                <SheetClose
                  className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200/70 dark:border-slate-800/80"
                  aria-label="Close menu"
                >
                  <X className="h-4.5 w-4.5" />
                </SheetClose>
              </div>

              {/* Nav list */}
              <nav className="px-2 py-2">
                <ul className="flex flex-col">
                  {NAV_ITEMS.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "group block rounded-xl px-3 py-3.5 my-1",
                              "text-[15px] leading-none",
                              "transition-colors",
                              active
                                ? "bg-sky-500/10 text-slate-900 dark:text-slate-100 border border-sky-500/20"
                                : "text-slate-600 dark:text-slate-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className={cn(
                                  "font-medium",
                                  active && "underline underline-offset-4"
                                )}
                              >
                                {item.label}
                              </span>
                              <ChevronRight
                                className={cn(
                                  "h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5",
                                  active && "opacity-100"
                                )}
                              />
                            </div>
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Divider */}
              <div className="px-4">
                <div className="h-px bg-slate-200 dark:bg-slate-800 rounded-full" />
              </div>

              {/* Footer area (optional) */}
              <div className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">
                <p className="leading-relaxed">
                  © {new Date().getFullYear()} Yuri.dev — Crafted with care.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
