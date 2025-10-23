import { bonuses } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function BonusStack() {
  return (
    <Section id="bonuses">
      <Card
        variant="inverted"
        padding="xl"
        className="bg-[radial-gradient(circle_at_top,_rgba(63,199,201,0.25),_transparent_45%),_linear-gradient(135deg,_#142A63_0%,_#0B1742_100%)] text-text-inverted"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-highlight">Launch bonus stack</p>
            <h2 className="text-3xl font-bold md:text-4xl">Stack the bonuses for unstoppable momentum</h2>
            <p className="text-text-inverted/80">
              Every order unlocks exclusive assets engineered to drive adherence: macros dialed, accountability locked, and form dialed in.
            </p>
          </div>
          <Card variant="muted" padding="lg" className="border-white/20 bg-white/10 text-sm text-text-inverted/80">
            <p className="font-semibold text-brand-accent">Limited-time offer</p>
            <p className="mt-2">
              Bonuses disappear when the countdown ends or when we hit 200,000 copies—whichever comes first.
            </p>
          </Card>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {bonuses.map((bonus) => (
            <Card key={bonus.title} variant="muted" padding="lg" className="border-white/15 bg-white/10 text-left">
              <h3 className="text-xl font-semibold text-brand-accent">{bonus.title}</h3>
              <p className="mt-3 text-sm text-text-inverted/80">{bonus.description}</p>
            </Card>
          ))}
        </div>
      </Card>
    </Section>
  );
}
