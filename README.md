# Muscle & Strength Pyramids Launch MVP

This repository contains the Product Requirements Document and the minimal Next.js architecture for the relaunch of the Muscle & Strength Pyramids website featuring the dual-book offer **Grow More Muscles** and **Be the Buffest Person in the Room**.

## Tech Stack
- [Next.js 14](https://nextjs.org/) with the App Router
- TypeScript for static typing
- Tailwind CSS for rapid UI composition matching the refreshed palette

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the development server
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` to view the marketing experience.

## Deployment Notes
- The project root (containing `package.json`) must be used as the deployment entry point so the platform can detect the Next.js
  framework. If you are deploying to Vercel, leave the **Root Directory** empty (`.`) or set it explicitly to the repository root.
- Ensure the builder installs dependencies with `npm install` so the pinned Next.js 14 toolchain is available for `npm run build`.

## Architecture Overview
- `app/` contains the root layout and landing page composition aligned with the PRD sections (hero, methodology, book comparison, testimonials, bonus stack, authors, FAQ).
- `components/` exposes modular UI primitives for marketing, lifecycle, and conversion-oriented sections.
- `lib/content.ts` centralises copy, CTA labels, and feature lists so marketing can iterate quickly without touching component structure.
- `tailwind.config.ts` codifies the new color palette and typography direction.

## Next Steps
- Wire the CTA buttons and forms to the production commerce and CRM flows.
- Layer in analytics, experimentation, and payment integrations per the PRD roadmap.
- Extend component coverage for checkout optimization, exit intent modals, and referral loops.
