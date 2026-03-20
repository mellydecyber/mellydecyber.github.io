"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "@/data/profile.json";

export default function HeroSection() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const texts = profile.typingTexts;
    const current = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          } else {
            setCharIndex(charIndex + 1);
          }
        } else {
          setCurrentText(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
            setCharIndex(0);
          } else {
            setCharIndex(charIndex - 1);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 h-[400px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="font-mono text-xs text-text-muted">
            {profile.status.system}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 h-8"
        >
          <span className="font-mono text-lg text-primary sm:text-xl">
            {currentText}
          </span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-10 max-w-xl text-text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-muted transition-all hover:border-primary/50 hover:text-text"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
