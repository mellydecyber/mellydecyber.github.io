"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import profile from "@/data/profile.json";
import aboutData from "@/data/about.json";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(aboutData.tabs[0]?.id ?? "");

  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title={aboutData.section.title}
          subtitle={aboutData.section.subtitle}
          color="accent"
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 lg:col-span-4"
          >
            <motion.div whileHover={{ y: -2 }} className="relative overflow-hidden rounded-2xl border border-border bg-bg-card">
              <div className="relative aspect-square">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg/75 via-bg/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-semibold text-text-bright">{profile.name}</p>
                  <p className="text-xs text-text-muted">{profile.role}</p>
                </div>
              </div>

              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-border/90 bg-bg/85 px-2.5 py-1 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-success" />
                <span className="text-[11px] font-medium text-success">{aboutData.statusBadge}</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-2.5">
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-lg border ${stat.border} ${stat.bg} px-3 py-3 text-center`}
                >
                  <div className={`text-lg font-semibold ${stat.color}`}>{stat.value}</div>
                  <div className="mt-0.5 text-[10px] text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8"
          >
            <div className="mb-6 flex w-fit gap-1 rounded-lg border border-border bg-bg-card p-1">
              {aboutData.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative rounded-md px-4 py-2 text-xs font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-white/10 text-text-bright"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="about-tab"
                      className="absolute inset-0 rounded-md border border-white/10 bg-white/5"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === aboutData.tabs[0]?.id && (
                <motion.div
                  key={aboutData.tabs[0]?.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="rounded-2xl border border-border bg-bg-card p-5 sm:p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-dim">
                      {aboutData.overview.title}
                    </p>
                    <p className="text-base leading-relaxed text-text sm:text-lg">
                      {aboutData.overview.summary}
                    </p>

                    <div className="mt-5 space-y-2.5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-dim">
                        {aboutData.overview.highlightsTitle}
                      </p>
                      <ul className="divide-y divide-border/60 rounded-lg border border-border/80 bg-bg/30">
                        {aboutData.overview.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3 px-4 py-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span className="text-sm leading-relaxed text-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-1">
                    <a
                      href={profile.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:bg-accent-dim hover:shadow-lg hover:shadow-accent/20"
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      {aboutData.actions.resume.label}
                    </a>
                    <a
                      href={aboutData.actions.contact.href}
                      className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text-muted transition-all hover:border-purple/40 hover:text-purple hover:bg-purple/5"
                    >
                      {aboutData.actions.contact.label}
                    </a>
                  </div>
                </motion.div>
              )}

              {activeTab === aboutData.tabs[1]?.id && (
                <motion.div
                  key={aboutData.tabs[1]?.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="overflow-hidden rounded-xl border border-border bg-bg-card">
                    <div className="border-b border-border px-5 py-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-dim">
                        {aboutData.snapshot.title}
                      </p>
                    </div>

                    <div className="space-y-2 p-5">
                      {aboutData.snapshot.items.map((item) => (
                        <div
                          key={item.label}
                          className="flex flex-col gap-1 border-b border-border/50 py-2.5 last:border-0 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <span className="text-xs text-text-muted">{item.label}</span>
                          <span className={`text-sm ${item.color}`}>{item.value}</span>
                        </div>
                      ))}

                      <div className="flex flex-wrap gap-2 pt-3">
                        {profile.socials.map((social) => (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs text-text-muted transition-all hover:border-accent/30 hover:text-accent hover:bg-accent/5"
                          >
                            {social.name}
                            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
