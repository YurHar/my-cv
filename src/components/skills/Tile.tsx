"use client";

import { motion } from "framer-motion";
import { trackPointer } from "@/lib/utils";

export default function Tile({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={trackPointer}
      className="surface p-6 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="font-display text-3xl tracking-tight text-foreground">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
      {children}
    </motion.div>
  );
}
