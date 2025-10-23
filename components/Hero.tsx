import Link from "next/link";
import { heroContent } from "@/lib/content";
import { buttonClasses } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section id="overview" background="gradient" spacing="loose" innerClassName="relative z-10 flex flex-col gap-12 md:flex-row md:items-center">
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen" aria-hidden>
        <div className="absolute -left-16 top-12 h-64 w-64 rounded-full bg-brand-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-secondary blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-highlight/40 blur-3xl" />
      </div>
      <div className="relative max-w-2xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-highlight/90">
          {heroContent.eyebrow}
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{heroContent.title}</h1>
        <p className="text-lg text-text-inverted/80 md:text-xl">{heroContent.subtitle}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href={heroContent.primaryCta.href} className={buttonClasses({ variant: "primary", size: "lg" })}>
            {heroContent.primaryCta.label}
          </Link>
          <Link
            href={heroContent.secondaryCta.href}
            className={buttonClasses({ variant: "secondary", size: "lg", className: "border-white/50 text-white hover:bg-white/10" })}
          >
            {heroContent.secondaryCta.label}
          </Link>
        </div>
        <p className="text-sm text-text-inverted/70">
          Built to catapult 200,000 book sales in 30 days with conversion-tuned design, lifecycle automation, and analytics readiness.
        </p>
      </div>
      <Card
        variant="inverted"
        className="relative flex-1 overflow-hidden border-white/20 bg-white/10 text-left shadow-ring backdrop-blur"
        padding="lg"
      >
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute -top-12 right-0 h-48 w-48 rounded-full bg-brand-accent blur-3xl" />
        </div>
        <div className="relative space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-white">Launch Targets</h2>
            <p className="text-sm text-text-inverted/70">Daily dashboards, cohort insights, and retention ladders keep the team locked on the goal.</p>
          </div>
          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <Card variant="muted" padding="md" className="border-white/10 bg-white/10 text-left">
              <p className="text-xs uppercase tracking-widest text-text-inverted/70">Conversion Goal</p>
              <p className="mt-1 text-2xl font-semibold text-white">5%+</p>
            </Card>
            <Card variant="muted" padding="md" className="border-white/10 bg-white/10 text-left">
              <p className="text-xs uppercase tracking-widest text-text-inverted/70">Email Growth</p>
              <p className="mt-1 text-2xl font-semibold text-white">100k+</p>
            </Card>
            <Card variant="muted" padding="md" className="border-white/10 bg-white/10 text-left">
              <p className="text-xs uppercase tracking-widest text-text-inverted/70">Average Order Value</p>
              <p className="mt-1 text-2xl font-semibold text-white">$60+</p>
            </Card>
            <Card variant="muted" padding="md" className="border-white/10 bg-white/10 text-left">
              <p className="text-xs uppercase tracking-widest text-text-inverted/70">Trust Signals</p>
              <p className="mt-1 text-sm text-text-inverted/70">
                Testimonials, author credibility, secure checkout, and high-value bonus stack.
              </p>
            </Card>
          </div>
        </div>
      </Card>
    </Section>
  );
}
