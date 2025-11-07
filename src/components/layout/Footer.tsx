export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground flex items-center justify-between">
        <span>© {new Date().getFullYear()} Yuri Harutyunyan</span>
        <span className="opacity-80">Built with Next.js · TypeScript · Tailwind · shadcn/ui</span>
      </div>
    </footer>
  );
}
