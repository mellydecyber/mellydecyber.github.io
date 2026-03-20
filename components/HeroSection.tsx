"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import experience from "@/data/experience.json";
import projects from "@/data/projects.json";
import skills from "@/data/skills.json";

const badgeColorMap: Record<string, string> = {
  accent: "border-accent/30 text-accent bg-accent/5",
  purple: "border-purple/30 text-purple bg-purple/5",
  pink: "border-pink/30 text-pink bg-pink/5",
  primary: "border-primary/30 text-primary bg-primary/5",
  orange: "border-orange/30 text-orange bg-orange/5",
  success: "border-success/30 text-success bg-success/5",
};

const socialIcons: Record<string, React.ReactNode> = {
  github: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  email: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5" />
    </svg>
  ),
};

function useTypingEffect(texts: string[]) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [charIndex, isDeleting, textIndex, texts]);

  return currentText;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  const currentText = useTypingEffect(profile.typingTexts);
  const allProjects = [...projects.professional, ...projects.freelance];
  const uniqueCategories = new Set(allProjects.map((item) => item.category));
  const totalSkills = skills.groups.reduce((acc, group) => acc + group.items.length, 0);
  const currentExperience = experience[0];
  const primaryCompany = currentExperience?.company.split("—")[0]?.trim();

  const resumePoints = [
    {
      label: "Experience",
      value: `${profile.status.experience} in software development`,
    },
    {
      label: "Current Role",
      value: currentExperience ? `${currentExperience.role} at ${primaryCompany}` : profile.role,
    },
    {
      label: "Project Scope",
      value: `${allProjects.length} projects across ${uniqueCategories.size} sectors`,
    },
    {
      label: "Technical Breadth",
      value: `${totalSkills} technologies across backend, web, and blockchain`,
    },
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-14 pt-28 md:pb-16 md:pt-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-32 left-1/4 h-125 w-125 rounded-full bg-accent/4 blur-[140px]" />
        <div className="absolute top-1/2 right-1/5 h-100 w-100 rounded-full bg-purple/3 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div>
            {/* Avatar + intro */}
            <motion.div {...fadeUp(0)} className="mb-8 flex items-center justify-center gap-4 lg:justify-start">
              <div className="relative shrink-0">
                <div className="h-16 w-16 rounded-full bg-linear-to-br from-accent via-purple to-pink p-0.5">
                  <div className="relative h-full w-full overflow-hidden rounded-full border border-border/60 bg-bg">
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-success" />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm text-text-muted">{profile.greeting}</p>
                <p className="text-lg font-black tracking-tight text-text-bright sm:text-xl">{profile.name}</p>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div {...fadeUp(0.1)} className="mb-4 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight text-text-bright sm:text-4xl lg:text-5xl">
                <span className="block text-2xl text-accent">Hi, my name is</span>
                <span className="block text-4xl font-black text-text-bright sm:text-5xl lg:text-6xl">
                  {profile.name}
                </span>
                <span className="mt-2 block gradient-text">
                  {currentText}
                  <span className="cursor-blink text-accent font-light">|</span>
                </span>
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.2)}
              className="mb-6 max-w-2xl text-center text-base leading-relaxed text-text-muted sm:text-lg lg:text-left"
            >
              {profile.tagline}
            </motion.p>

            {/* Badges */}
            <motion.div {...fadeUp(0.3)} className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {profile.badges.map((badge) => (
                <motion.span
                  key={badge.label}
                  whileHover={{ y: -2 }}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-transform ${
                    badgeColorMap[badge.color] || badgeColorMap.accent
                  }`}
                >
                  {badge.label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.4)} className="mb-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href={profile.cta.primary.href}
                className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20"
              >
                {profile.cta.primary.label}
              </a>
              <a
                href={profile.cta.secondary.href}
                className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-text-bright hover:bg-white/5"
              >
                {profile.cta.secondary.label}
              </a>
              <a
                href={profile.cta.tertiary.href}
                target={profile.cta.tertiary.external ? "_blank" : undefined}
                rel={profile.cta.tertiary.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-1.5 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-text-muted transition-all hover:-translate-y-0.5 hover:border-purple/40 hover:text-purple hover:bg-purple/5"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="opacity-60 transition-opacity group-hover:opacity-100">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {profile.cta.tertiary.label}
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {profile.socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 text-text-dim transition-colors hover:text-accent"
                  title={social.name}
                >
                  {socialIcons[social.icon]}
                  <span className="text-xs hidden sm:inline">{social.name}</span>
                </motion.a>
              ))}
              <span className="hidden h-3 w-px bg-border sm:inline-block" />
              <span className="text-xs text-text-dim">{profile.location}</span>
            </motion.div>
          </div>

          {/* Side command card */}
          <motion.aside {...fadeUp(0.25)}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-white/2 p-5 shadow-lg shadow-black/10 backdrop-blur-sm sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-text-dim">System Status</span>
                <span className="flex items-center gap-2 text-xs text-success">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  Online
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-border/80 bg-bg/40">
                {resumePoints.map((point, index) => (
                  <div
                    key={point.label}
                    className={`flex items-start gap-3 px-3.5 py-3 ${
                      index !== resumePoints.length - 1 ? "border-b border-border/60" : ""
                    }`}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-text-dim">{point.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-text-bright">{point.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] text-text-dim tracking-wider">scroll</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-text-dim">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
