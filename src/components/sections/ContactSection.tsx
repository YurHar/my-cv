"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui-composites/SectionHeading";
import { HERO } from "@/lib/data";
import { trackPointer } from "@/lib/utils";

export default function ContactSection() {
  const { links, location } = HERO;
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
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {/* Top-center animated toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-sm shadow-lg backdrop-blur"
            role="status"
            aria-live="polite"
          >
            <Check className="h-4 w-4 text-primary" />
            <span className="text-foreground">Email copied to clipboard</span>
          </motion.div>
        )}
      </AnimatePresence>

      <SectionHeading index="04" eyebrow="Get in touch" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onPointerMove={trackPointer}
        className="surface p-6 sm:p-12"
      >
        <p className="eyebrow">Email</p>
        <div className="mt-4 flex flex-wrap items-end gap-x-6 gap-y-4">
          <a
            href={emailHref}
            className="group font-display text-[clamp(1.75rem,5.5vw,4rem)] leading-none tracking-tight text-foreground break-all transition-colors hover:text-primary"
          >
            {emailText}
            <ArrowUpRight className="ml-2 inline h-[0.6em] w-[0.6em] align-baseline text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            title="Copy email"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary cursor-pointer"
          >
            <Copy className="h-4 w-4" />
            Copy email
          </button>
        </div>

        <div className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex flex-wrap gap-3">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
          <div className="text-sm text-muted-foreground sm:text-right">
            <p>I’m most responsive on LinkedIn and email.</p>
            {location ? <p className="mt-1">{location}</p> : null}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
