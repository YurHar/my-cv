"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-500",
        scrolled
          ? "border-b border-border bg-background/75 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl tracking-tight text-foreground">
          Yuri<span className="text-primary">.</span>dev
        </Link>

        {/* Right side (desktop): nav + toggle */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[13px] tracking-wide transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                  ) : null}
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
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border bg-background/60 backdrop-blur"
              aria-label="Open menu"
            >
              <Menu className="h-4.5 w-4.5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[86vw] max-w-sm p-0 border-l border-border bg-background/95 backdrop-blur-md [&>button]:hidden"
            >
              {/* Header inside sheet */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <SheetTitle className="eyebrow">Menu</SheetTitle>
                <SheetClose
                  className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border"
                  aria-label="Close menu"
                >
                  <X className="h-4.5 w-4.5" />
                </SheetClose>
              </div>

              {/* Nav list */}
              <nav className="px-5 py-4">
                <ul className="flex flex-col">
                  {NAV_ITEMS.map((item, i) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href} className="border-b border-border last:border-b-0">
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className="group flex items-baseline justify-between py-4"
                            aria-current={active ? "page" : undefined}
                          >
                            <span className="flex items-baseline gap-3">
                              <span className="text-xs tabular-nums text-muted-foreground">
                                0{i + 1}
                              </span>
                              <span
                                className={cn(
                                  "font-display text-3xl",
                                  active ? "text-primary" : "text-foreground"
                                )}
                              >
                                {item.label}
                              </span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="px-5 py-3 text-xs text-muted-foreground">
                © {new Date().getFullYear()} Yuri Harutyunyan
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
