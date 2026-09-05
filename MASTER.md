# MASTER.md — The GLET Initiative Website: Full Brief

This is the single source of truth for content, brand and design decisions
on this project. `CLAUDE.md` covers code style and architecture — this file
covers everything that ends up *visible* on the site.

---

## 1. What we're building

A modern, warm, credible one-site presence for **The GLET Initiative**, a
pre-launch NGO founded 10 July 2026 by Nkechi Patience Igwebuike, serving
adolescent girls aged 10–18 in underserved communities across Nigeria
through health literacy, leadership development, life skills education,
mentorship and community engagement.

**The site's job:** communicate the mission clearly and beautifully, and
convert visitors — funders, partners, volunteers, parents, other NGOs —
into people who reach out. It is not a fundraising platform with live
payment processing at launch; it's a credible front door that makes people
want to email, partner, or follow.

**GLET means:** Grow in Knowledge · Lead with Confidence · Empower Your
Community · Thrive for Life.

**Tagline to use throughout:** *Grow. Lead. Empower. Thrive.*

---

## 2. Brand summary (condensed from GLET's own documents)

**Mission:** The GLET Initiative equips adolescent girls with the
knowledge, skills and confidence to Grow, Lead, Empower and Thrive through
health literacy, leadership development, life skills education, mentorship
and community engagement.

**Vision:** To raise a generation of informed, confident, compassionate and
resilient girls who become leaders, advocates and changemakers, creating
healthier and more empowered communities across Nigeria and beyond.

**The GLET Framework (four pillars — build the homepage around these):**
- **G — Grow in Knowledge:** knowledge and awareness of self, health, rights and the world.
- **L — Lead with Confidence:** voice, decision-making, courage, purpose.
- **E — Empower Your Community:** turning knowledge into service and positive change.
- **T — Thrive for Life:** resilience, life skills, purpose beyond the programme.

**The GLET Journey** (nice as a visual stepper/timeline on the Programme
page): Participant → Learner → Growing Girl → Emerging Leader → GLET
Ambassador → Community Change Agent → Thriving Girl.

**Core values:** Compassion, Integrity, Growth, Leadership, Inclusivity,
Service, Collaboration, Excellence.

**Who GLET serves:** Adolescent girls aged 10–18, particularly in
underserved communities across Nigeria.

**The GLET Ambassador model:** every girl who completes the programme and
receives a GLET Certificate becomes a GLET Ambassador — equipped not just
with knowledge, but to pass it on. This "ripple effect" (one girl equipped
→ many lives impacted) is the emotional core of the brand and a strong
homepage narrative device.

**SDG alignment:** Sustainable Development Goal 5 — Gender Equality. Worth
a small credibility badge/mention, not a whole section.

**Founder:** Nkechi Patience Igwebuike. Her personal "why" (from the story
behind GLET) is genuinely moving material for the About page — she built
GLET from direct outreach experience with girls who had knowledge gaps
about their own bodies, health and potential.

---

## 3. Site map & page-by-page content outline

### Home (`/`)
1. **Hero** — full-bleed or split hero. Headline built around the tagline
   ("Grow. Lead. Empower. Thrive.") + one-sentence mission. Primary CTA:
   "Partner With Us" or "Get Involved." Secondary CTA: "Learn Our Story."
2. **Framework strip** — the four GLET pillars as four cards/icons (G-L-E-T),
   short description each, linking to the Programme page.
3. **Who we serve** — a short, respectful paragraph + stat-style callout
   ("Girls aged 10–18 · Underserved communities across Nigeria").
4. **The ripple effect** — one girl equipped → many lives impacted. Good
   place for the "GLET Heartbeat" copy, treated as a short manifesto block.
5. **Get involved CTA band** — partner / volunteer / newsletter signup.
6. **Footer** — mission recap, nav links, social placeholders, contact email.

### About (`/about`)
- Founder story (from "The Story Behind GLET").
- Mission & Vision as a clean two-column or stacked block.
- Core values as a grid (8 items — works well as a 2x4 or 4x2 responsive grid).
- Optional: SDG 5 badge/mention.

### Programme (`/programme`)
- The GLET Framework, expanded (each pillar gets its own section, not just a card).
- The GLET Journey as a vertical timeline/stepper (7 stages).
- The GLET Ambassador model — what it means, the ambassador cycle
  (Learn → Grow → Lead → Share → Empower → Thrive).

### Who We Serve (`/who-we-serve`)
- Who is a "GLET Girl" — the 10 traits (Informed, Confident, Compassionate,
  Resilient, Growing, A Leader, Inclusive, Of Service, Collaborative,
  Committed to Excellence). Works well as a tag/pill cloud or a grid of
  short cards rather than a wall of text.
- Reinforce the 10–18, underserved-communities-in-Nigeria focus honestly —
  don't overstate reach GLET doesn't have yet.

### Get Involved (`/get-involved`)
- Three clear paths: **Partner** (organisations/funders), **Volunteer**
  (individuals), **Stay Updated** (newsletter).
- Partner inquiry form (see §7).
- General contact form (see §7).
- Contact details block (email, socials, "Location: Nigeria" — see
  §9 for placeholders still needed from the client).

Keep the whole site to these five pages at launch. Don't add a blog,
gallery, or donation-processing page until there's real content/infra
for it — a thin, honest five-page site beats a padded ten-page one.

---

## 4. Design system

### Colors

The client's brand colors: **Golden Yellow** (primary), **Sage Green** and
**Charcoal Grey** (secondary). No exact hex codes were supplied, so these
are proposed starting values — swap in the exact hex codes if/when there's
a formal brand guide:

| Token | Hex | Use |
|---|---|---|
| `primary.main` (Golden Yellow) | `#E8AC1F` | CTAs, accents, framework icons |
| `primary.light` | `#F6D989` | backgrounds, hover fills |
| `primary.dark` | `#B8800F` | text-on-light, borders |
| `secondary.main` (Sage Green) | `#8FA377` | secondary accents, tags, success states |
| `secondary.light` | `#C3D1B3` | soft section backgrounds |
| `secondary.dark` | `#5E7049` | icon strokes, dark accents |
| Charcoal (text/dark sections) | `#26262B` | body text, dark hero/footer backgrounds |
| Charcoal muted | `#6B6B70` | secondary/supporting text |
| Cream/off-white (base background) | `#FBF7EE` | page background — avoid pure white, it reads cold against warm yellow |
| White | `#FFFFFF` | cards on cream backgrounds |

**Contrast note:** golden yellow at `#E8AC1F` does **not** pass WCAG AA for
white text — always pair yellow backgrounds with charcoal text, never white
text. Reserve white text for charcoal or sage-dark backgrounds only. Check
every color pairing against WCAG AA before shipping a section.

### Typography

Suggested pairing (free via Google Fonts, self-hosted with `next/font`
for zero layout shift):

- **Headlines:** `Archivo Black` or `Poppins (800/ExtraBold)` — a bold,
  chunky, confident sans that echoes the existing GLET flyer's condensed
  black headline style.
- **Body:** `Inter` or `Work Sans` — clean, highly legible, modern, gets
  out of the way.

Set a clear type scale in `lib/theme.ts` (e.g. h1 40/56px, h2 32/40px, h3
24/32px, body 16/24px) and use it consistently rather than one-off font
sizes per component.

### Shape language

The existing GLET flyer uses soft organic blob/leaf shapes as background
accents behind photography, plus rounded pill badges (the "GLET" wordmark
treatment). Reuse this: rounded corners (12–24px radius) on cards, soft
blob SVG shapes as section background accents, pill-shaped buttons/badges.
This is what keeps MUI's fairly boxy default components feeling warm
rather than "SaaS dashboard."

### Iconography

GLET's existing logo already has a nice icon language (leaf, book, hands,
sparkle/star, all radiating from a girl silhouette). Where possible, pull
simple line-icon equivalents for the four framework pillars rather than
generic stock icon-pack icons — it'll tie the site back to the existing
brand mark instead of feeling like a template.

---

## 5. Imagery & photography guide

**Read this before sourcing a single image.** GLET works with real minors.
Do not use real, identifiable photographs of specific children pulled from
Pinterest, Instagram, or random Google search results — there's no consent
trail, and GLET's own master document has a dedicated "Safeguarding &
Girl-Centred Practice" principle. Treat the website the same way.

**What to use at launch instead:**

1. **Licensed, diversity-focused stock photography** — real photography,
   properly licensed, of African subjects in relevant settings:
   - [Nappy.co](https://nappy.co) — free, Black/Brown-subject-focused stock library, great first stop
   - [TONL](https://tonl.co) — diverse stock photography, paid but affordable, excellent quality
   - [CreateHER Stock](https://createherstock.com) — Black women/girls-focused stock
   - [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com) — filter/search specifically, quality varies, always check the photo is genuinely African/Nigerian-representative rather than generic
   - [Africa Stock Photos / AfricanPictures](https://www.africanpictures.net) if budget allows a paid library

2. **Illustration as an alternative to photography.** A flat/line-illustration
   style of girls in the brand colors (golden yellow, sage, charcoal) sidesteps
   the consent question entirely and a lot of youth-focused NGOs use this
   successfully for hero art and section dividers. Worth considering for at
   least the hero, even if real photography is used further down the page.

3. **GLET's own logo/mark** — already exists, reuse it as the favicon,
   nav mark, and a watermark/motif element rather than commissioning a
   new one.

**Search terms that'll get the right mood** (use these on the stock sites
above, not on Pinterest for scraping):

- Hero / Home: "African teenage girls smiling group," "Nigerian secondary school girls candid," "golden hour portrait African teenage girl," "girls empowerment workshop Africa"
- About / Founder story: "African woman mentor teaching girls," "community outreach Nigeria," "mentorship conversation African women"
- Programme page: "girls classroom discussion Africa," "teen girls raising hands classroom," "African girls reading book outdoors," "peer learning circle teenagers Africa"
- Who We Serve: "confident teenage girl portrait Africa," "African girls laughing together outdoors," "diverse group African teenagers candid"
- Get Involved / CTA band: "hands together teamwork," "volunteers Africa community," "African women collaborating"

**Style direction:** natural/candid over posed-corporate, warm natural
light (golden hour tones pair beautifully with the golden yellow brand
color), genuine smiles and interaction over stiff posed group shots.

**Technical specs:**
- Serve via `next/image`, WebP where possible, responsive `sizes`.
- Hero images: minimum 1920×1080 source.
- Card/section images: minimum 800×600 source, consistent aspect ratio within a grid.
- Every image gets real, descriptive `alt` text — describe the scene, never name or imply the identity of an unrelated stock subject as if they were a real GLET participant.
- Store under `public/images/<page>/<descriptive-name>.webp` and keep a
  simple `public/images/CREDITS.md` noting the source/license of each
  stock image used, for future reference.

**The real goal:** once GLET runs its first cohort, replace stock imagery
with real programme photography taken with proper parental/guardian
consent per their safeguarding policy. Stock/illustration is a launch
placeholder, not the permanent plan — worth a one-line note in the
component code (`{/* placeholder: swap for real programme photography once available */}`).

---

## 6. Motion & interaction guide (Framer Motion)

Keep motion purposeful and subtle — this is an NGO site, not a product
demo. Suggested variants (define once in `lib/motion.ts`, reuse everywhere):

- **`fadeInUp`** — opacity 0→1, y +24→0, ~400ms ease-out. Default for
  section headings and content blocks entering on scroll.
- **`staggerContainer`** — parent variant with `staggerChildren: 0.1`, used
  wrapping card grids (framework pillars, values grid, GLET Girl traits)
  so items reveal in sequence rather than all at once.
- **Nav interactions** — underline/color transition on hover (~150ms), no
  bouncy easing — keep it crisp, not playful.
- **Buttons** — subtle scale on hover (`1.02`) and tap (`0.98`), not a
  dramatic bounce.
- **Journey timeline** (Programme page) — each stage reveals as the user
  scrolls to it, connecting line animates in with the stages.
- **Sticky nav** — optional: nav bar shrinks/gains a background on scroll
  past the hero.

**Rules:**
- Wrap scroll-triggered animations with `viewport={{ once: true }}` — don't
  re-trigger every time a section scrolls in and out of view.
- Every animated component checks `useReducedMotion()` and falls back to a
  simple opacity fade (or no animation) when true.
- Nothing longer than ~500ms. This is a site people should read
  comfortably, not sit and watch load.

---

## 7. API endpoints — full spec

All three are Next.js Route Handlers under `app/api/`. Validate with Zod
(`lib/validations.ts`), send via a shared `sendEmail()` helper
(`lib/email.ts`), return `{ success: boolean, message: string }`.

### `POST /api/contact`
General "get in touch" form (Get Involved page).

```ts
// request body
{
  name: string;       // required, 2-100 chars
  email: string;       // required, valid email
  message: string;     // required, 10-2000 chars
  honeypot?: string;   // hidden field, must be empty — basic spam trap
}
```
Action: validate → if honeypot filled, silently return success without sending (spam) → otherwise send email to `process.env.CONTACT_TO_EMAIL` via Resend.

### `POST /api/partner`
Partnership/funder inquiry form (Get Involved page) — richer than the
general contact form since partner inquiries need more context.

```ts
{
  organisationName: string;   // required
  contactName: string;         // required
  email: string;                // required, valid email
  phone?: string;               // optional
  partnershipType: "Funding" | "Volunteering" | "Programme Delivery" | "Media & Awareness" | "Other";
  message: string;              // required, 10-2000 chars
  honeypot?: string;
}
```
Action: same pattern as `/api/contact`, distinct email subject line so
partner inquiries are easy to triage separately from general messages.

### `POST /api/newsletter`
Email capture (footer + Get Involved page).

```ts
{
  email: string;   // required, valid email
}
```
Action: forward to whatever mailing list provider GLET ends up using
(Mailchimp, ConvertKit, Buttondown are all fine — leave `lib/email.ts`
with a clearly marked stub function `subscribeToNewsletter(email)` to wire
up once a provider/API key is chosen). Don't block launch on picking a
provider — ship the form, wire the integration after.

### `GET /sitemap.xml` and `GET /robots.txt`
Generated automatically by `app/sitemap.ts` and `app/robots.ts` (Next.js
built-ins) — no manual route needed, just make sure every real page is
listed and `robots.ts` allows all crawling (this is a public awareness
site, nothing should be disallowed).

### Environment variables (`.env.example`)
```
RESEND_API_KEY=
CONTACT_TO_EMAIL=
NEWSLETTER_PROVIDER_API_KEY=
NEXT_PUBLIC_SITE_URL=https://theglet.org
```

---

## 8. SEO plan

**Per-page metadata** — every page exports unique `title`/`description`
via the Next.js Metadata API. Example for Home:

```ts
export const metadata: Metadata = {
  title: "The GLET Initiative | Grow. Lead. Empower. Thrive.",
  description:
    "The GLET Initiative equips adolescent girls aged 10–18 in underserved communities across Nigeria with health literacy, leadership skills, mentorship and confidence to grow, lead, empower and thrive.",
  openGraph: {
    title: "The GLET Initiative",
    description: "Grow. Lead. Empower. Thrive.",
    url: "https://theglet.org",
    images: ["/og/home.png"],
  },
};
```

**Structured data** — add `Organization`/`NGO` JSON-LD in the root layout:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "The GLET Initiative",
  "url": "https://theglet.org",
  "logo": "https://theglet.org/images/glet-logo.png",
  "description": "The GLET Initiative equips adolescent girls aged 10–18 in underserved communities across Nigeria with health literacy, leadership skills, mentorship and confidence.",
  "foundingDate": "2026-07-10",
  "founder": { "@type": "Person", "name": "Nkechi Patience Igwebuike" },
  "areaServed": "Nigeria"
}
</script>
```

**Other requirements:**
- One `<h1>` per page, clean heading hierarchy after that (no skipping from h1 to h4).
- Descriptive, keyword-natural URL slugs (already reflected in the site map — `/programme`, `/who-we-serve`, `/get-involved`).
- Canonical URLs set via `alternates.canonical` in metadata.
- Fast, optimized images (`next/image`, WebP, correct `sizes`) — image weight is the single biggest performance/SEO risk on a photography-heavy NGO site.
- Self-hosted fonts via `next/font` (no external font request waterfall).
- Aim for good Core Web Vitals: LCP < 2.5s, CLS near 0 (reserve image/video dimensions), INP responsive.
- `sitemap.xml` and `robots.txt` live and correct at launch.

---

## 9. Responsive breakpoints

Use MUI's default breakpoint scale unless there's a reason to change it:

| Breakpoint | Width | Notes |
|---|---|---|
| `xs` | 0–599px | Nav collapses to a hamburger/drawer; hero stacks image below text; framework pillars stack to 1 column |
| `sm` | 600–899px | Framework pillars/values grid move to 2 columns |
| `md` | 900–1199px | Full nav appears inline; grids move to 3–4 columns; hero becomes split layout |
| `lg` | 1200–1535px | Max content width kicks in (don't let text lines run full-bleed on wide screens — cap body copy around 65–75ch) |
| `xl` | 1536px+ | Same as `lg`, just more breathing room in the margins |

---

## 10. Still needed from the client before full launch

Placeholders to fill in once available — don't fabricate these:

- Real contact email (currently `[GLET Email]` in source docs)
- Real Instagram/LinkedIn handles
- Exact brand hex codes, if a formal brand guide exists beyond "golden yellow / sage green / charcoal grey"
- A domain name (used for `NEXT_PUBLIC_SITE_URL`, canonical URLs, sitemap, JSON-LD)
- Real programme photography, once the first cohort runs (to replace stock imagery per §5)
- Any real impact numbers/testimonials, once available — don't invent "impact" stats for a pre-launch org