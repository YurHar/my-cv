// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Background from "@/components/layout/Background";

export const metadata: Metadata = {
  title: "Yuri.dev — Front-End Developer",
  description:
    "Portfolio of Yuri Harutyunyan — building accessible, performant, user-friendly interfaces.",
  // optional:
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col text-slate-900 dark:text-slate-100">
        <ThemeProvider>
          <Background />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
