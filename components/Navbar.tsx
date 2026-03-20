"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "about", href: "#about", key: "01" },
  { label: "projects", href: "#projects", key: "02" },
  { label: "skills", href: "#skills", key: "03" },
  { label: "experience", href: "#experience", key: "04" },
  { label: "contact", href: "#contact", key: "05" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-primary text-glow">
          <span className="text-text-muted">[</span>
          <span className="text-xs font-bold">melli@commander</span>
          <span className="text-text-muted">]</span>
          <span className="text-text-muted">~$</span>
          <span className="cursor-blink text-primary">_</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group px-3 py-1.5 text-xs text-text-muted transition-colors hover:text-primary"
            >
              <span className="text-text-dim group-hover:text-primary-dim">
                {link.key}.
              </span>
              {link.label}
            </a>
          ))}
          <span className="ml-4 border-l border-border pl-4 text-[10px] text-text-dim">
            {time}
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-text-muted md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-xs">
            {mobileOpen ? "[x] close" : "[=] menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-border/50 py-2.5 text-xs text-text-muted transition-colors hover:text-primary"
                >
                  <span className="text-text-dim">{link.key}. </span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
