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
            setTimeout(() => setIsDeleting(true), 2000);
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
      isDeleting ? 30 : 70
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-5">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.03] blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-purple/[0.03] blur-[150px]" />
        <div className="absolute -bottom-40 left-1/2 h-[400px] w-[400px] rounded-full bg-primary/[0.02] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-accent via-purple to-pink p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-bg-card text-2xl font-bold text-accent">
                  MT
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full border border-border bg-bg-card px-2 py-0.5">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="text-[10px] text-success font-mono">online</span>
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-3 font-mono text-sm text-accent"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-2 text-4xl font-bold tracking-tight text-text-bright sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-5 flex items-center gap-2 font-mono text-lg sm:text-xl"
          >
            <span className="text-text-dim">{">"}</span>
            <span className="gradient-text font-semibold">
              {currentText}
            </span>
            <span className="cursor-blink text-accent">|</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 max-w-xl text-base text-text-muted leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          {/* Highlights - quick value props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {["4+ Years Exp", "Enterprise & Web3", "Blockchain Dev", "Available"].map(
              (tag, i) => {
                const colors = [
                  "border-accent/30 text-accent bg-accent/5",
                  "border-purple/30 text-purple bg-purple/5",
                  "border-pink/30 text-pink bg-pink/5",
                  "border-success/30 text-success bg-success/5",
                ];
                return (
                  <span
                    key={tag}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${colors[i]}`}
                  >
                    {tag}
                  </span>
                );
              }
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-bg transition-all hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-muted transition-all hover:border-accent/40 hover:text-text-bright hover:bg-white/5"
            >
              Get In Touch
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-muted transition-all hover:border-purple/40 hover:text-purple hover:bg-purple/5"
            >
              Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-text-dim">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-4 rounded-full border border-border flex items-start justify-center p-1"
          >
            <div className="h-1.5 w-0.5 rounded-full bg-accent/60" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
