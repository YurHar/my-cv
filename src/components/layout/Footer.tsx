import { HERO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {HERO.name} <span className="mx-1.5 text-primary">·</span>{" "}
          {HERO.role}
        </span>
        <span className="opacity-80">Built with Next.js · TypeScript · Tailwind · shadcn/ui</span>
      </div>
    </footer>
  );
}
