# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Milton Aguirre, built with **Astro 1.x** + **Tailwind CSS 3** (scaffolded from the `with-tailwindcss` Astro template) and deployed to GitHub Pages at https://miltonaguirre.github.io/.

## Commands

- `npm install` — install dependencies
- `npm run dev` (or `npm start`) — local dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built site

There is no test suite or linter configured; `npm run build` is the only validation step.

## Architecture

Single-page site aimed at recruiters and investors.

- `src/pages/index.astro` — the whole page. Content (Dishio steps, experience, skills, side projects, contact links) lives in data arrays in the frontmatter; edit those rather than the markup. Content comes from Milton's CV and GitHub; don't add metrics or claims about Dishio that he hasn't confirmed, and never publish his phone number.
- `src/layouts/main.astro` — HTML shell: takes `title` and `description` props, sets meta/OG tags, loads Google Fonts (Anybody + Public Sans) and the global focus-ring styles.
- Design tokens are in `tailwind.config.cjs`: `cobalt`, `navy`, `mist`, `sun` (colors matched to the profile photo) and `font-display` / `font-sans`. Yellow (`sun`) is reserved for the Dishio section; cobalt for the hero, headings and footer.
- The hero name uses Anybody's variable width (`font-stretch`), set in the page's scoped `<style>`, with a single load animation that respects `prefers-reduced-motion`.
- Icons come from `astro-icon` (`<Icon name="mdi:github" />`, Iconify prefixes). `astro.config.mjs` marks `svgo` as an SSR external, which `astro-icon` needs.
- Static assets live in `public/`. The hero photo is `public/images/profile.webp` (resized from `profile.PNG`).
- `src/components/DishioScreens.astro` shows real Dishio screenshots (light theme, sample data) from `public/images/dishio/`. Dishio's public site is https://dishio-app-ui.vercel.app/.

Layouts are checked at mobile (390px), 1366×768 and 1920×1080. Headless Chrome clamps `--window-size` to a 500px minimum, so mobile screenshots need DevTools device emulation.

## Deployment

`.github/workflows/deploy.yml` builds with `withastro/action` and deploys via `actions/deploy-pages` on every push to `master` (or manual dispatch). `astro.config.mjs` sets `site: 'https://miltonaguirre.github.io/'` and `base: '/'`.

`src/.github/workflows/deploy.yml` is a stray Spanish-commented copy of the workflow; GitHub ignores it — edit the root `.github/` one.
