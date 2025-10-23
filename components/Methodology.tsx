import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Methodology() {
  return (
    <Section background="default">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">Science-backed systems</p>
          <h2 className="text-3xl font-bold text-brand-primary md:text-4xl">
            Built on proven hypertrophy and physique frameworks
          </h2>
          <p className="text-lg text-text-secondary">
            The Muscle & Strength Pyramids condense research-backed training principles into a dual-book blueprint. Every chapter is engineered for execution—from progressive overload to lifecycle automation and retention.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-text-secondary">
          <Card variant="outline" padding="lg">
            <h3 className="text-lg font-semibold text-brand-primary">Conversion-first experience</h3>
            <p className="mt-2">
              Modular content blocks highlight social proof, bundle value, and trust badges to move lifters from awareness to checkout without friction.
            </p>
          </Card>
          <Card variant="outline" padding="lg">
            <h3 className="text-lg font-semibold text-brand-primary">Lifecycle automation ready</h3>
            <p className="mt-2">
              Hooks for pre-launch, launch, and retention journeys ensure the marketing stack can nurture leads and increase LTV from day one.
            </p>
          </Card>
          <Card variant="outline" padding="lg">
            <h3 className="text-lg font-semibold text-brand-primary">Analytics & experimentation</h3>
            <p className="mt-2">
              Instrumentation points are earmarked across the funnel for GA4, paid media pixels, and heatmap tools to rapidly iterate toward the 5%+ conversion target.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
