# Optimized Project Structure

This document outlines an opinionated structure for the Muscle & Strength Pyramids marketing MVP. It groups related concerns together, supports incremental feature growth, and makes it easy to scale beyond a single landing page.

## Directory Layout

```text
.
├── app/
│   ├── layout.tsx              # Root metadata + shared providers
│   ├── globals.css             # Base styles and Tailwind layer imports
│   ├── (marketing)/            # Route group for the public-facing landing page
│   │   ├── page.tsx            # Main marketing screen composed from section components
│   │   └── head.tsx            # Route-specific metadata overrides
│   ├── api/                    # Server actions & HTTP handlers (e.g., newsletter signups)
│   └── [slug]/                 # Future dynamic content such as blog or resources
├── components/
│   ├── sections/               # Page sections (Hero, Testimonials, BonusStack, etc.)
│   ├── ui/                     # Reusable presentational primitives (Buttons, Cards, Badges)
│   └── layout/                 # Navigation, Footer, and shell elements reused across routes
├── content/
│   ├── testimonials.ts         # Structured marketing copy and social proof
│   ├── books.ts                # Book metadata and pricing tiers
│   └── faq.ts                  # Frequently asked questions content blocks
├── lib/
│   ├── analytics/              # Client & server helpers for tracking and experimentation
│   ├── integrations/           # Email service, checkout, and CRM adapters
│   └── utils/                  # Shared utility functions (formatters, constants)
├── public/
│   ├── images/                 # Optimized static assets for the landing experience
│   └── icons/                  # Favicons and social sharing images
├── styles/
│   └── tokens.css              # CSS variables for color palette + typography scale
├── types/
│   └── marketing.d.ts          # Shared TypeScript types for marketing content modules
├── tests/
│   ├── e2e/                    # Playwright flows covering primary conversion funnel
│   └── unit/                   # Component & utility tests (Vitest or Jest)
├── scripts/
│   └── deploy.mjs              # Automation hooks for CI/CD and analytics backfills
├── README.md                   # Setup instructions and architectural overview
└── PROJECT_STRUCTURE.md        # This document
```

## Principles Behind the Structure

1. **Route grouping for clarity** – Using Next.js route groups keeps marketing pages isolated from future product or customer portals while sharing top-level layouts.
2. **Content modularity** – Moving static copy into the `content/` directory enables a content pipeline (e.g., CMS ingestion) without touching presentation code.
3. **Design system separation** – Housing reusable UI primitives under `components/ui` encourages consistency when iterating on conversion experiments.
4. **Integration boundaries** – Placing external service clients under `lib/integrations` localizes side effects and simplifies testing/mocking.
5. **Testing parity** – Dedicated `tests/` folders for unit and E2E coverage keep the go-to-market funnel observable as the site evolves.

## Adoption Checklist

- [ ] Migrate current section components into `components/sections` and update imports.
- [ ] Extract shared UI primitives (buttons, callouts) into `components/ui`.
- [ ] Relocate marketing copy from `lib/content.ts` into discrete files within `content/`.
- [ ] Introduce a `public/` asset pipeline for hero imagery and social sharing previews.
- [ ] Bootstrap Playwright and Vitest in the `tests/` directory for regression coverage.
- [ ] Document any integration secrets or environment variables referenced in `lib/integrations`.
