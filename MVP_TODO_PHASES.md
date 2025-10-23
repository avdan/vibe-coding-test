# MVP Implementation Roadmap

This roadmap breaks the MVP build into sequential, testable phases. Each phase lists concrete implementation steps followed by the checks required to validate completion.

## Phase 1: Foundation & Design System
- [ ] Set up shared design tokens in `tailwind.config.ts` for color palette updates aligned with the new brand direction.
- [ ] Implement global typography, spacing, and button styles in `app/globals.css`.
- [ ] Create reusable UI primitives (e.g., `Button`, `Section`, `Card`) in `components/ui/` to standardize layout patterns.

**Tests**
- ✅ Run `npm run lint` to ensure styling utilities and new components pass lint rules.
- ✅ Launch the dev server (`npm run dev`) and visually confirm updated design system tokens apply across hero, CTA, and testimonial sections.

## Phase 2: Conversion-Focused Landing Flow
- [ ] Integrate the new color system and refined layout into `app/page.tsx` hero, lead magnet, methodology, and book comparison sections.
- [ ] Add sticky navigation and on-page anchors (e.g., `#lead-magnet`, `#pricing`) via `components/Navigation.tsx`.
- [ ] Wire CTA buttons to modal or route stubs for purchase flow (`/checkout`) to track conversions later.

**Tests**
- ✅ Execute `npm run lint` and `npm run type-check` to verify TypeScript types for navigation anchors and CTA handlers.
- ✅ Manually test navigation anchors in the browser to confirm smooth scrolling and CTA link targets.

## Phase 3: Social Proof & Objection Handling
- [ ] Expand testimonial coverage in `components/Testimonials.tsx` with new stories sourced from PRD personas.
- [ ] Implement FAQ accordions in `components/FAQ.tsx` with accessible keyboard controls.
- [ ] Add dynamic bonus stack highlights in `components/BonusStack.tsx` with tooltips describing each incentive.

**Tests**
- ✅ Run component tests with `npm run test` covering testimonial rendering, FAQ toggle logic, and tooltip interactions.
- ✅ Perform accessibility check using `npm run lint` (Next.js built-in) and manual keyboard navigation for FAQ accordions.

## Phase 4: Analytics & Experimentation Readiness
- [ ] Configure analytics provider (e.g., GA4) in `app/layout.tsx` with consent management hooks.
- [ ] Instrument CTA click tracking via custom hooks in `lib/analytics.ts`.
- [ ] Add A/B testing scaffolding with feature flags in `lib/experiments.ts` to support future hero variant tests.

**Tests**
- ✅ Run `npm run lint` and `npm run type-check` to validate new analytics utilities.
- ✅ Use mocked analytics provider in `npm run test` to confirm events fire on CTA interactions.

## Phase 5: Pre-Launch Readiness & QA
- [ ] Populate production-ready copy from PRD into hero, lead magnet, methodology, and FAQ components.
- [ ] Finalize responsive breakpoints and dark-mode styling via Tailwind configuration.
- [ ] Conduct end-to-end smoke test of purchase funnel stub using Playwright scenarios stored in `tests/e2e/`.

**Tests**
- ✅ Run `npm run lint`, `npm run type-check`, and `npm run test` to ensure zero regressions.
- ✅ Execute `npm run test:e2e` (Playwright) verifying navigation, CTA tracking, FAQ interactions, and checkout stub accessibility.

## Phase 6: Launch Metrics & Post-Launch Iteration
- [ ] Set up dashboard in analytics tool to track daily sales velocity toward 200,000-copy goal.
- [ ] Implement automated newsletter/email integrations in `lib/automation.ts` for post-purchase upsells.
- [ ] Schedule weekly conversion review cadence documented in `README.md` for ongoing optimization.

**Tests**
- ✅ Validate analytics dashboards receive events using staging environment smoke test.
- ✅ Run `npm run lint` and `npm run type-check` after documentation updates to keep repo healthy.
