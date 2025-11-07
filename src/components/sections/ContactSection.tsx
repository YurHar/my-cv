"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Tile from "@/components/skills/Tile";
import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/data";

export default function ContactSection() {
  const { links } = HERO ?? { links: {} as Record<string, string> };
  const github = links.github ?? "https://github.com/";
  const linkedin = links.linkedin ?? "https://www.linkedin.com/in/yuri-harutyunyan/";
  const emailHref = links.email ?? "mailto:yuri.harutyunyan.a@gmail.com";
  const emailText = emailHref.startsWith("mailto:") ? emailHref.replace(/^mailto:/, "") : emailHref;

  const [copied, setCopied] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailText);
      setCopied(true);
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) window.clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
      {/* Top-center animated toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={cn(
              "fixed top-4 left-1/2 -translate-x-1/2 z-50",
              "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm",
              "bg-white/90 dark:bg-slate-900/90 supports-[backdrop-filter]:backdrop-blur",
              "border border-slate-200 dark:border-slate-800 shadow-lg"
            )}
            role="status"
            aria-live="polite"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            <span className="text-slate-800 dark:text-slate-200">Email copied to clipboard</span>
            <Check className="h-4 w-4 text-sky-600 dark:text-sky-400" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-600/10 dark:bg-sky-500/15 ring-1 ring-sky-600/20 dark:ring-sky-400/20">
            <Mail className="h-4.5 w-4.5 text-sky-700 dark:text-sky-400" />
          </span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl font-bold tracking-tight",
              "bg-clip-text text-transparent",
              "bg-gradient-to-r from-sky-700 via-indigo-600 to-purple-600",
              "dark:from-sky-400 dark:via-indigo-400 dark:to-purple-400"
            )}
          >
            Contact
          </h2>
        </div>
        <div
          className={cn(
            "mt-3 h-0.5 w-32 rounded-full",
            "bg-gradient-to-r from-sky-600 to-indigo-600",
            "dark:from-sky-400 dark:to-indigo-400"
          )}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <Tile title="Get in touch" subtitle="Find me on these platforms">
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" className="rounded-xl">
              <a href={github} target="_blank" rel="noreferrer" aria-label="Open GitHub">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button asChild variant="outline" className="rounded-xl">
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            <Button asChild variant="outline" className="rounded-xl">
              <a href={emailHref} aria-label="Send Email">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>

            {/* Copy email helper */}
            <Button
              type="button"
              variant="ghost"
              className="rounded-xl hover:bg-sky-500/10 hover:text-sky-700 dark:hover:text-sky-300"
              onClick={copyEmail}
              aria-label="Copy email address"
              title="Copy email"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy email
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-600 dark:text-slate-300">
            I’m most responsive on LinkedIn and email.
          </p>
        </Tile>
      </motion.div>
    </section>
  );
}
