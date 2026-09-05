# CLAUDE.md — GLET Initiative Website

This file is instructions for Claude (or any senior engineer) working in this
repository. Read this first. Read `MASTER.md` second — it has the full brand,
content, and design brief. This file is about *how* to build; `MASTER.md` is
about *what* to build.

---

## 1. What this project is

A marketing/informational website for **The GLET Initiative** — a
pre-launch NGO in Nigeria equipping adolescent girls (10–18) with health
literacy, leadership skills, and mentorship. The site's job: explain the
mission clearly, look credible and modern enough to attract partners and
donors, and convert visitors into partners, volunteers, or newsletter
subscribers. There is no user login, no CMS-backed blog (yet), and no
payment processing at launch — this is a content + lead-capture site.

Full brand voice, copy, page-by-page content, colors, imagery direction and
API field specs live in `MASTER.md`. Don't invent content that contradicts
it — if something's missing (a real testimonial, an impact number), leave a
clearly marked placeholder rather than fabricating one. This is a real
NGO working with real minors; nothing on this site should overstate impact
that hasn't happened yet.

---

## 2. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSR/SSG for SEO, file-based routing, built-in `sitemap.ts` / `robots.ts` / Metadata API |
| Language | TypeScript (strict mode) | Catch mistakes before runtime |
| UI library | Material UI (MUI) v5/v6 | Themeable component system, good accessibility defaults |
| Animation | Framer Motion | Scroll-reveal, hover/tap micro-interactions |
| Validation | Zod | Validate form payloads on both client and server |
| Email | Resend (or Nodemailer as fallback) | Sending contact/partner form submissions |
| Fonts | `next/font` with Google Fonts | Self-hosted, zero layout shift |
| Linting | ESLint + Prettier | Consistency |

Don't swap these out without a good reason — the point is one clean,
predictable stack, not a demo of every tool available.

---

## 3. Code style — non-negotiables

The person who requested this explicitly wants **senior-level, beautiful,
well-commented, simple code** — not spaghetti. Concretely:

- **TypeScript strict, no `any`.** If a type is awkward, model it properly.
- **Small, single-purpose functions.** If a function does two things, split
  it into two functions. A function that needs a "and then" in its
  description needs to be two functions.
- **One component per file.** Component files should stay well under
  ~150 lines. If a page is getting long, it's not one giant component —
  it's a page that *composes* smaller section components.
- **Pages are thin.** A page file (`app/*/page.tsx`) should mostly just
  import and arrange section components in order. Business logic and markup
  belong inside the section components, not in the page.
- **Comment the "why," not the "what."** Don't write `// set loading true`
  above `setLoading(true)`. Do write a short comment when a decision isn't
  obvious — e.g. why a debounce value was chosen, why a section uses
  `viewport={{ once: true }}`.
- **No inline magic numbers/colors.** Colors, spacing, and breakpoints come
  from the MUI theme (`lib/theme.ts`), never hardcoded hex codes scattered
  through components.
- **Extract repeated logic.** Anything used in two places moves to `lib/`
  or a custom hook in `hooks/`.
- **Accessibility is part of "done," not a follow-up.** Every image has
  meaningful `alt` text, every interactive element is keyboard-reachable,
  color contrast meets WCAG AA (check text-on-yellow combinations
  especially — see `MASTER.md` §4 for which pairings are safe).
- **Mobile-first.** Write the mobile layout first, then layer on `sm`/`md`/
  `lg` overrides via the MUI theme's breakpoints — don't design desktop-first
  and squeeze it down.
- **Respect `prefers-reduced-motion`.** Use Framer Motion's
  `useReducedMotion()` hook and fall back to a simple fade or no animation.
- **Never hardcode secrets.** API keys live in `.env.local` (gitignored) and
  are read via `process.env`. Add a `.env.example` with the variable names
  and no values.
- **Images are optimized.** Always `next/image`, never a bare `<img>`.

If you're about to write a 300-line component with five different concerns
tangled together, stop and split it first. That's the one mistake to avoid
above all others on this project.

---

## 4. Folder structure

```
glet-website/
├── app/
│   ├── layout.tsx              # root layout: fonts, theme provider, nav, footer
│   ├── page.tsx                 # Home
│   ├── about/page.tsx            # About / The Story
│   ├── programme/page.tsx        # The GLET Framework + Journey
│   ├── who-we-serve/page.tsx     # The GLET Girl
│   ├── get-involved/page.tsx     # Partner / Volunteer / Donate / Contact
│   ├── sitemap.ts               # auto-generated sitemap.xml
│   ├── robots.ts                # auto-generated robots.txt
│   └── api/
│       ├── contact/route.ts     # POST — general contact form
│       ├── partner/route.ts     # POST — partnership inquiry form
│       └── newsletter/route.ts  # POST — email subscribe
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/                # one file per homepage/page section
│   │   ├── Hero.tsx
│   │   ├── FrameworkPillars.tsx
│   │   ├── JourneyTimeline.tsx
│   │   ├── ValuesGrid.tsx
│   │   ├── ImpactStrip.tsx
│   │   └── GetInvolvedCTA.tsx
│   └── ui/                      # small reusable primitives
│       ├── SectionHeading.tsx
│       ├── AnimatedInView.tsx    # wraps Framer Motion scroll-reveal
│       ├── PillBadge.tsx
│       └── PrimaryButton.tsx
├── lib/
│   ├── theme.ts                 # MUI theme: colors, typography, breakpoints
│   ├── motion.ts                # shared Framer Motion variants
│   ├── validations.ts           # Zod schemas for each form
│   └── email.ts                 # sendEmail() helper used by API routes
├── hooks/
│   └── useReducedMotionSafe.ts
├── public/
│   ├── images/                  # see MASTER.md §5 for sourcing + naming
│   └── og/                      # social share images
├── .env.example
└── CLAUDE.md / MASTER.md
```

---

## 5. Pages & routing

Five pages at launch (see `MASTER.md` §3 for the full content outline of
each): Home, About, Programme, Who We Serve, Get Involved. Keep the nav to
these five — resist the urge to add extra pages before there's real content
for them.

---

## 6. API endpoints

Full field-level spec is in `MASTER.md` §7. Summary:

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/contact` | POST | General contact form submission → email |
| `/api/partner` | POST | "Partner with us" inquiry form → email |
| `/api/newsletter` | POST | Email capture → mailing list provider |
| `/sitemap.xml` | GET | Auto-generated from `app/sitemap.ts` |
| `/robots.txt` | GET | Auto-generated from `app/robots.ts` |

Every POST route: validate the body with the matching Zod schema from
`lib/validations.ts`, return a typed JSON response (`{ success, message }`),
and never trust client-side validation alone.

---

## 7. SEO — required, not optional

Full plan (per-page metadata, JSON-LD example) is in `MASTER.md` §8. The
short version every page must satisfy:

- Use the Next.js **Metadata API** (`generateMetadata` or a static
  `metadata` export) on every route — unique `title` and `description`.
- One `<h1>` per page, logical heading order after that.
- Open Graph + Twitter card image per page (a static `/public/og/` image is
  fine at launch).
- `NGO`/`Organization` JSON-LD structured data in the root layout.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` —
  not a forest of unlabeled `<div>`s.
- Every image has descriptive `alt` text (never blank unless purely
  decorative, and even then use `alt=""` deliberately, not by accident).

---

## 8. Imagery — quick pointer

Full sourcing guide, search terms, and stock-site links are in
`MASTER.md` §5. One rule that overrides everything else: **do not use real,
identifiable photos of specific children scraped from Pinterest or
elsewhere on a live NGO site.** Use licensed stock/diversity-focused stock
photography or illustration until GLET has its own consented programme
photography. This matters — GLET's own master document has a
"Safeguarding & Girl-Centred Practice" section; the website should reflect
that same care.

---

## 9. Motion — quick pointer

Full guide in `MASTER.md` §6. Keep it short: subtle scroll-reveal
(fade + slight upward slide), staggered children on grids/cards, small
hover/tap feedback on buttons, nothing longer than ~500ms, everything
wrapped to respect `prefers-reduced-motion`.

---

## 10. Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (also validates types)
npm run lint     # eslint
```

---

## 11. Definition of done (per section/page)

- [ ] Responsive at 375px, 768px, 1280px, 1536px
- [ ] Passes a quick Lighthouse pass (Performance, Accessibility, SEO all green-ish)
- [ ] No hardcoded colors/spacing outside the theme
- [ ] No component file doing markup + fetching + validation all at once
- [ ] Every animation respects reduced motion
- [ ] Every image has real `alt` text and comes from an approved source (§5 in MASTER.md)
- [ ] Metadata (`title`, `description`, OG image) set for the page