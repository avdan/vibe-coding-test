import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Authors() {
  return (
    <Section background="muted">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">Meet the authors</p>
          <h2 className="text-3xl font-bold text-brand-primary md:text-4xl">
            Trusted by lifters, backed by credentials
          </h2>
          <p className="text-lg text-text-secondary">
            The Muscle & Strength Pyramids team combines decades of coaching, academic research, and real-world physique wins. Their evidence-based approach keeps the fluff out and the gains in.
          </p>
        </div>
        <div className="grid gap-6 text-sm text-text-secondary">
          <Card variant="outline" padding="lg">
            <h3 className="text-lg font-semibold text-brand-primary">Dr. Andrea Keller</h3>
            <p className="mt-2">PhD Exercise Physiology, published in JISSN, 15+ years coaching elite hypertrophy athletes.</p>
          </Card>
          <Card variant="outline" padding="lg">
            <h3 className="text-lg font-semibold text-brand-primary">Marcus "Forge" Bennett</h3>
            <p className="mt-2">IFBB pro, transformation specialist, and host of the Strength Surge podcast reaching 250k monthly downloads.</p>
          </Card>
          <Card variant="outline" padding="lg">
            <h3 className="text-lg font-semibold text-brand-primary">Sloane Rivera</h3>
            <p className="mt-2">Lead nutrition strategist, RD, creator of macro playbooks used by 40k+ community members.</p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
