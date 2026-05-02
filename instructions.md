# Copilot Instructions — Local Business Website Agency
## Niche: Law Firms & Lawyers

---

## WHO I AM

I run a web design micro-agency that vibe codes and sells websites to local small businesses.
My job is to make sites that feel BUILT FOR THAT SPECIFIC BUSINESS — not templated, not generic, not AI slop.
Every site I deliver should feel like a designer spent weeks on it, not an AI in 20 minutes.

Model in use: Claude Sonnet 4.6 via VS Code Copilot Pro.

---

## THE CORE PROBLEM I'M SOLVING

Most lawyer websites look identical:
- Stock photo of a courthouse or gavel
- Navy blue + gold on white
- Centered hero with "We Fight For You"
- Cookie-cutter services grid
- Generic "Contact Us" CTA

My clients pay to stand out. Every suggestion must push AGAINST this template.

---

## LAWYER NICHE — DESIGN INTELLIGENCE

### The Psychology of Legal Clients
A potential client visiting a lawyer's website is usually scared, stressed, or desperate.
They are NOT browsing casually. They need to feel:
1. SAFE — this firm understands my problem
2. COMPETENT — these people will win
3. ACCESSIBLE — I can actually afford/reach them

Design must communicate all three INSTANTLY. Not through words alone — through visual weight, color temperature, and layout confidence.

### Sub-Niche Differentiation (CRITICAL — never treat all lawyers the same)

**Personal Injury / Accident**
- Emotion: aggressive, urgent, fighter energy
- Palette: black + electric orange OR deep charcoal + red accent
- Typography: Bold grotesque display (e.g. Bebas Neue, Anton, Barlow Condensed)
- Layout: Full-bleed dark hero, large stat counters ("$50M recovered"), client faces
- Tone: "We fight. You win." Direct. Confrontational. Confident.
- NEVER: Soft pastels, serif fonts, gentle imagery

**Family Law / Divorce**
- Emotion: empathy, calm authority, non-judgmental
- Palette: warm neutrals (cream, slate, muted sage) + soft charcoal text
- Typography: Humanist sans-serif (e.g. Fraunces, DM Serif Display paired with Plus Jakarta Sans)
- Layout: Soft curves, generous white space, real photography (NOT stock), prominent FAQ
- Tone: "We guide you through this." Supportive. Human. Clear.
- NEVER: Aggressive reds, court imagery, intimidating power aesthetics

**Criminal Defense**
- Emotion: power, protection, urgency, secrecy
- Palette: near-black (#0d0d0d) + steel blue OR deep forest green + gold
- Typography: Strong editorial serif for headlines (e.g. Playfair Display, Cormorant) + clean sans body
- Layout: Dark dramatic hero, single strong CTA above the fold, attorney headshot commanding
- Tone: "Your freedom matters. Call now." Urgent. Authoritative. Discreet.
- NEVER: Playful fonts, bright backgrounds, cluttered service grids

**Immigration Law**
- Emotion: hope, guidance, cultural sensitivity, trustworthiness
- Palette: warm navy + terracotta OR teal + warm cream
- Typography: Approachable humanist sans (e.g. Nunito, Outfit, Lato) — readable at all sizes
- Layout: Clear language toggle if bilingual, step-by-step process visual, community imagery
- Tone: "We help families build their future." Warm. Hopeful. Systematic.
- NEVER: Cold corporate aesthetic, dense legal jargon, intimidating layouts

**Estate Planning / Wills**
- Emotion: legacy, peace of mind, trust, long-term relationship
- Palette: deep navy + gold OR charcoal + warm ivory — classic and refined
- Typography: Refined serif display (e.g. Libre Baskerville, Lora) for headings, neutral sans body
- Layout: Clean editorial, prominent attorney bios, trust signals (years of experience, certifications)
- Tone: "Protect what matters most." Calm. Prestigious. Thoughtful.
- NEVER: Urgent CTAs, aggressive language, trendy flashy design

**Business / Corporate Law**
- Emotion: precision, power, sophistication, global reach
- Palette: charcoal + white + one bold accent (electric blue, gold, emerald)
- Typography: Geometric sans-serif (e.g. TT Hoves, Neue Haas Grotesk) — structured, precise
- Layout: Data-forward (case stats, client logos), team grid with depth bios, thought leadership section
- Tone: "Strategic legal counsel for serious businesses." Sharp. Authoritative. Minimal.
- NEVER: Soft imagery, emotional appeals, casual copy

---

## DESIGN RULES — LAWYER SITES

### What to ALWAYS Build
- Mobile-first, loads in under 3 seconds (compress all images)
- Sticky header with phone number visible at all times on mobile
- One dominant CTA above the fold — "Free Consultation" or "Call Now"
- Attorney bio with REAL photo (no stock), credentials, personality
- Social proof: testimonials, case results, Google review count
- Practice area pages — each one its own SEO landing page
- Contact form that's SHORT: name, phone, brief situation (3 fields max)
- SSL, no tracking popups cluttering the experience

### What to NEVER Build
- Rotating hero sliders / carousels (kills load speed + UX)
- Stock photos of gavels, scales of justice, or courthouses
- "Our Mission" walls of text above the fold
- Generic "Learn More" buttons with no action intent
- Blue-navy-gold on white if there's no differentiation strategy
- Accordion FAQ that hides everything — lawyers need content visible for SEO
- Font combinations: Inter + Roboto, Arial + Times New Roman (generic)

### Typography Rules
- Always pair a distinctive DISPLAY font (headlines) with a READABLE body font
- Line height for body text: 1.6–1.7 minimum
- Hero headline: 60px+ desktop, 36px+ mobile
- Avoid: Inter, Roboto, Arial, system-ui as primary display fonts
- Good display choices per mood:
  - Power/aggressive: Bebas Neue, Barlow Condensed, Anton
  - Elegant/refined: Cormorant Garamond, Playfair Display, Libre Baskerville
  - Modern/clean: TT Hoves, Neue Montreal, Space Grotesk (use sparingly)
  - Warm/approachable: Fraunces, DM Serif Display, Lora

### Color Rules
- Use CSS custom properties for EVERY color — never hardcode hex values inline
- Dominant color: 60%, Secondary: 30%, Accent: 10% (the "pop")
- Always check contrast ratio: minimum 4.5:1 for body text (WCAG AA)
- Avoid full-screen bright white (#ffffff) — use off-whites (#f8f6f2, #faf9f7) for warmth
- Dark mode: if building dark-themed lawyer sites, use #0d0f11 or #111318 NOT pure black
- Accent colors that work well in legal:
  - Gold: #c9a84c — prestige, estate law, corporate
  - Electric orange: #ff5c00 — personal injury, action
  - Steel blue: #4a7fa5 — criminal defense, trust
  - Sage green: #7a9e7e — family law, immigration
  - Deep red: #c0392b — criminal, aggressive PI firms

### Animation & Motion Rules
- Use CSS transitions — no heavy JS animation libraries unless needed
- Scroll-triggered reveals: fade-in-up on sections (use Intersection Observer)
- Hero: subtle parallax OR video background at max 15MB / autoplay muted
- Hover states on cards and CTAs: always add transform + shadow feedback
- Loading: skeleton screens or fast-loading priority images — never blank white flash
- NEVER: full-page transitions that delay content, bouncing elements, autoplay audio

---

## PAGE STRUCTURE — STANDARD LAWYER SITE

```
/ Homepage
  ├── Hero — Niche headline + subtext + CTA (phone + form)
  ├── Trust Bar — Years experience, cases won, Google stars, BBB logo
  ├── Problem/Solution — "You're facing X. We solve X."
  ├── Practice Areas — Cards with icons, link to dedicated pages
  ├── Attorney Bio — Real photo, story, credentials
  ├── Results / Case Studies — Dollar amounts won OR situations resolved
  ├── Testimonials — Google reviews embedded OR styled quotes with names
  ├── FAQ — Visible (not hidden in accordions unless 10+ questions)
  └── Final CTA — Free consultation form OR phone button

/practice-areas/[area-slug]
  ├── Hero — Area-specific headline
  ├── Who This Is For — Client situation description
  ├── How We Handle It — Process steps
  ├── FAQ for that area
  └── CTA

/about
  └── Attorney story, values, community involvement, bar admissions

/contact
  └── Short form (3 fields) + phone + Google Maps embed + hours
```

---

## CODE STANDARDS

```css
/* Always define a CSS design system at the top of every stylesheet */
:root {
  /* Colors — replace with niche-specific palette */
  --color-primary: #1a1f2e;
  --color-secondary: #2c3e50;
  --color-accent: #c9a84c;
  --color-bg: #faf9f7;
  --color-text: #1a1a1a;
  --color-text-muted: #6b7280;
  --color-surface: #ffffff;
  --color-border: #e5e7eb;

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-size-base: 1rem;
  --line-height-body: 1.65;

  /* Spacing scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;

  /* Effects */
  --shadow-card: 0 4px 20px rgba(0,0,0,0.08);
  --shadow-hover: 0 8px 32px rgba(0,0,0,0.14);
  --radius-card: 12px;
  --radius-btn: 6px;
  --transition-base: 0.25s ease;
}
```

- Vanilla HTML/CSS/JS unless React is explicitly requested
- No Bootstrap, no Tailwind unless client project already uses it
- Semantic HTML: use `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`
- All images: `loading="lazy"`, `alt` text always, WebP format preferred
- Mobile-first: write base styles for mobile, use `min-width` media queries
- CTA buttons: always include `:hover`, `:focus`, `:active` states
- Forms: use `<label>` elements, proper `type` attributes, validation feedback

---

## WHAT MAKES A LAWYER SITE UNFORGETTABLE

Ask before writing any code:
1. What is THIS lawyer's personality? (Aggressive fighter? Empathetic guide? Sharp strategist?)
2. Who is their ideal client? (Scared accident victim? Business owner? Immigrant family?)
3. What emotion should the site trigger in 3 seconds?
4. What is the ONE thing this firm does better than anyone locally?
5. What would a designer do here that Wix templates can't?

The answer to question 5 is where the design lives.

---

## QUICK REFERENCE — ANTI-TEMPLATE CHECKLIST

Before finishing any section, ask:
- [ ] Does this look like it could be ANY law firm? (if yes → redesign)
- [ ] Is there a stock gavel/courthouse/scales image? (remove immediately)
- [ ] Is the CTA generic? ("Learn More", "Read More" → rewrite to action)
- [ ] Does the color palette feel chosen or defaulted? (navy+gold with no reason → reconsider)
- [ ] Are fonts readable at 320px wide on mobile?
- [ ] Is the hero message about the FIRM or about the CLIENT'S PROBLEM?
- [ ] Does this feel like a $500 Wix site or a $5,000 custom build?