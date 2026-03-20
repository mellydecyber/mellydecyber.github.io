## 🚀 SUPER PROMPT — AI PORTFOLIO (JSON-DRIVEN, CLEAN, LIGHT)

Copy-paste ini ke Claude:

---

You are a senior frontend architect and UI engineer.

Your task is to build a **high-performance, production-ready developer portfolio website** with the following strict requirements:

---

## 🎯 CORE OBJECTIVE

Build a **modern AI-themed developer portfolio ("AI Command Center")** that is:

* Fully **JSON-driven (content managed via JSON only, no hardcoded content in components)**
* **Clean, minimal, and lightweight**
* Optimized for **performance, SEO, and fast load**
* Ready to deploy on **Vercel or GitHub Pages**
* Built with scalable and maintainable architecture

---

## 🧱 TECH STACK (STRICT)

* Framework: **Next.js (latest stable, App Router)**
* Styling: **Tailwind CSS**
* Animations: **Framer Motion (light usage only, no overkill)**
* Language: **TypeScript**
* No heavy UI libraries (NO Material UI, NO Bootstrap)

---

## 📁 PROJECT ARCHITECTURE

Design a clean and scalable structure:

* `/app` → pages (App Router)
* `/components` → reusable UI components
* `/data` → JSON files (ALL content lives here)
* `/lib` → helpers/utilities
* `/styles` → global styles

---

## 📦 JSON-DRIVEN CONTENT (CRITICAL)

ALL content must come from JSON files.

Create structured JSON like:

* `profile.json`
* `projects.json`
* `skills.json`
* `experience.json`
* `contact.json`

Each JSON must be:

* Clean
* Scalable
* Easy to edit without touching UI code

Components must dynamically render from JSON.

---

## 🧠 UI / UX CONCEPT — "AI COMMAND CENTER"

Theme:

* Dark mode (default)
* Futuristic but **clean (NOT cluttered, NOT gimmicky)**
* Subtle glow accents (blue / purple)

Sections:

### 1. Hero Section

* Name, role (e.g. AI Engineer / Backend Engineer)
* Short tagline
* Animated typing effect (lightweight)
* CTA buttons (Projects, Contact)

---

### 2. System Overview (About)

* Short intro
* Presented like “system summary”

---

### 3. Projects (IMPORTANT)

* Show as “modules”
* Each project card includes:

  * name
  * description
  * tech stack
  * metrics (optional: performance, users, etc)
  * link (GitHub / live)

---

### 4. Skills

* Grouped (Backend, AI, Web3, Infra, etc)
* Render from JSON

---

### 5. Experience

* Timeline style
* Clean and minimal

---

### 6. Contact

* Simple and clear
* Social links

---

## ⚡ PERFORMANCE REQUIREMENTS

* Use **static generation (SSG) wherever possible**
* Avoid unnecessary re-renders
* Optimize images (Next/Image)
* Lazy load non-critical sections
* Keep bundle size minimal

---

## 🎨 DESIGN PRINCIPLES

* Minimalist first, futuristic second
* Avoid over-animation
* Strong typography hierarchy
* Plenty of whitespace
* Responsive (mobile-first)

---

## 🔌 EXTRA FEATURES (IMPORTANT BUT LIGHT)

* Subtle animated background (canvas or gradient, lightweight)
* Fake “system status” indicator (static, no backend)
* Optional terminal-style small section (VERY subtle)

---

## 🚫 HARD CONSTRAINTS

* NO hardcoded content in components
* NO over-engineering
* NO unnecessary dependencies
* NO complex global state (use simple props or context if needed)

---

## 📦 OUTPUT REQUIREMENTS

Provide:

1. Full project structure
2. All key files (pages, components, JSON)
3. Example JSON content
4. Clean, readable, production-quality code
5. Setup instructions (install, dev, build, deploy to Vercel)

---

## 🧠 ENGINEERING STANDARD

Think like:

* Performance engineer
* Clean code advocate
* Scalable system designer

Avoid junior-level patterns.

---

## 🔥 BONUS (IF POSSIBLE)

* Add reusable “ProjectCard” component
* Add simple theme config (colors centralized)
* Add SEO meta tags

---

Build this like it will be reviewed by a senior engineer.
