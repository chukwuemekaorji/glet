# The GLET Initiative — Website

Marketing and lead-capture site for [The GLET Initiative](https://theglet.org), a pre-launch NGO in Nigeria equipping adolescent girls (10–18) with health literacy, leadership skills, and mentorship.

Read [`CLAUDE.md`](./CLAUDE.md) first for how this repo is built (stack, code style, folder structure), and [`MASTER.md`](./MASTER.md) for what it's built from (brand voice, page-by-page content, design system, imagery guide, API specs).

## Stack

Next.js 15 (App Router) · TypeScript (strict) · MUI v6 · Framer Motion · Zod · Resend

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY / CONTACT_TO_EMAIL to enable form emails
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (also runs the TypeScript check)
npm run start    # run a production build locally
npm run lint     # eslint
```

## Pages

Five pages at launch: Home, About, Programme, Who We Serve, Get Involved — plus three form API routes (`/api/contact`, `/api/partner`, `/api/newsletter`) and auto-generated `/sitemap.xml` and `/robots.txt`.

## Still needed before full launch

See `MASTER.md` §10 — real contact email/social handles, a formal brand hex guide if one exists beyond what's in `lib/theme.ts`, a production domain, and real programme photography/impact numbers once GLET runs its first cohort.
