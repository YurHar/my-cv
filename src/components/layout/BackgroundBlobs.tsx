"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BackgroundBlobs() {
  return (
    <>
      <motion.div
        initial={false}
        className={cn(
          "pointer-events-none fixed -top-16 left-6 h-72 w-72 rounded-full blur-3xl",
          "bg-sky-500/15 dark:bg-sky-500/10 -z-10"
        )}
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        initial={false}
        className={cn(
          "pointer-events-none fixed -top-10 right-8 h-80 w-80 rounded-full blur-3xl",
          "bg-indigo-500/15 dark:bg-indigo-500/10 -z-10"
        )}
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      />
    </>
  );
}
