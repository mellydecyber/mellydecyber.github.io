"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "@/data/profile.json";

export default function HeroSection() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);

  // Boot sequence
  useEffect(() => {
    const timer = setTimeout(() => setBootComplete(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!bootComplete) return;
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
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, bootComplete]);

  const bootLines = [
    { text: "Initializing system...", delay: 0 },
    { text: "Loading modules.......... OK", delay: 0.3 },
    { text: "Establishing secure connection... OK", delay: 0.6 },
    { text: "Authentication verified.", delay: 0.9 },
    { text: `Welcome, visitor. Access granted.`, delay: 1.2 },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/[0.02] blur-[150px]" />
        <div className="absolute -bottom-40 right-1/3 h-[400px] w-[400px] rounded-full bg-accent/[0.02] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-bg-terminal overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-error/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-warning/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-success/80" />
            </div>
            <span className="ml-2 text-[10px] text-text-dim">
              commander-terminal — bash — 80x24
            </span>
            <div className="ml-auto flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[10px] text-success/70">
                {profile.status.system}
              </span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-5 sm:p-6 space-y-1.5">
            {/* Boot sequence */}
            {bootLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: line.delay, duration: 0.2 }}
                className="text-text-dim text-xs"
              >
                <span className="text-text-muted">[sys]</span> {line.text}
              </motion.div>
            ))}

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="py-2 text-border-bright"
            >
              {"─".repeat(60)}
            </motion.div>

            {/* Main content */}
            {bootComplete && (
              <div className="space-y-4">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-primary text-glow text-2xl sm:text-3xl font-bold tracking-tight">
                    {profile.name}
                  </div>
                  <div className="mt-1 text-text-muted text-sm">
                    {profile.location}
                  </div>
                </motion.div>

                {/* Role typing */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-text-dim">$</span>
                  <span className="text-accent text-glow-accent text-sm sm:text-base">
                    {currentText}
                  </span>
                  <span className="cursor-blink text-accent">|</span>
                </motion.div>

                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-text-muted text-sm leading-relaxed max-w-lg"
                >
                  {profile.tagline}
                </motion.div>

                {/* Status bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  {Object.entries(profile.status).map(([key, val]) => (
                    <div key={key} className="text-[11px]">
                      <span className="text-text-dim">{key}: </span>
                      <span className="text-primary-dim">{val}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  <a
                    href="#projects"
                    className="border border-primary/30 bg-primary/5 px-5 py-2 text-xs text-primary transition-all hover:bg-primary/10 hover:border-primary/60 hover:text-glow"
                  >
                    [01] view_projects
                  </a>
                  <a
                    href="#contact"
                    className="border border-border px-5 py-2 text-xs text-text-muted transition-all hover:border-accent/30 hover:text-accent hover:bg-accent/5"
                  >
                    [02] init_contact
                  </a>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border px-5 py-2 text-xs text-text-muted transition-all hover:border-warning/30 hover:text-warning hover:bg-warning/5"
                  >
                    [03] download_resume
                  </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex gap-4 pt-2"
                >
                  {profile.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-text-dim transition-colors hover:text-primary"
                    >
                      [{social.name}]
                    </a>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-8 text-center text-[10px] text-text-dim animate-pulse"
        >
          scroll down to explore // or use nav above
        </motion.div>
      </div>
    </section>
  );
}
