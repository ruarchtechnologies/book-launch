# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
yarn dev        # Start dev server
yarn build      # Production build
yarn start      # Start production server
yarn lint       # ESLint
yarn tsc --noEmit  # Type-check without emitting
```

## Architecture

**Book launch landing page** — a single-page site with a waitlist email capture.

### Single Source of Truth

`src/config/site.ts` controls all content: book metadata, author info, chapters, stats, testimonials, FAQ, CTAs, and SEO meta. Edit here first before touching components.

### Page Composition

`src/app/page.tsx` composes all section components in order. Sections live in `src/components/sections/`, reusable primitives in `src/components/ui/`.

### Email Waitlist API

`POST /api/waitlist` — validates email with Zod, then calls an email provider. Integration is a stub; wire up `EMAIL_PROVIDER_API_KEY` and `EMAIL_PROVIDER_LIST_ID` (see `.env.example`). The client hook is `src/hooks/useEmailSubmit.ts`.

### Styling — TailwindCSS v4

Design tokens are defined with `@theme inline` in `src/app/globals.css` — colors, fonts, and spacing all in one place. Use the `cn()` utility (`src/lib/cn.ts`) for conditional class merging.

### Animations — Framer Motion

Reusable motion presets are in `src/lib/variants.ts` (`fadeUp`, `fadeIn`, `staggerContainer`, `slideInLeft`, `slideInRight`, `scaleIn`). All section components are `"use client"` and use these variants with `whileInView` for scroll-triggered entrances.

### React Compiler

React Compiler is enabled (`next.config.ts`). Do not manually add `useMemo`/`useCallback` — the compiler handles memoization.
