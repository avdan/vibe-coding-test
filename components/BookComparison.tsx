import { books } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function BookComparison() {
  return (
    <Section id="books">
      <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">Two paths, one system</p>
          <h2 className="text-3xl font-bold text-brand-primary md:text-4xl">
            Pair the playbooks for unstoppable progress
          </h2>
          <p className="text-lg text-text-secondary">
            Compare the focus of each book and bundle them to accelerate hypertrophy while building a stage-ready physique.
          </p>
        </div>
        <div className="text-sm text-text-muted">
          <p>Launch pricing expires in:</p>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand-accent/20 px-3 py-1 font-semibold text-brand-secondary">
            <span aria-hidden>⏳</span>
            <span>5 days 14 hrs</span>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {books.map((book) => (
          <Card key={book.name} variant="outline" padding="lg" className="flex h-full flex-col gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-brand-primary">{book.name}</h3>
              <p className="text-text-secondary">{book.description}</p>
            </div>
            <ul className="space-y-3 text-sm text-text-secondary">
              {book.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-secondary/15 text-brand-secondary">●</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Button type="button" variant="secondary" className="mt-auto">
              Add to cart
            </Button>
          </Card>
        ))}
      </div>
      <Card
        id="pricing"
        variant="inverted"
        padding="xl"
        className="mt-16 bg-[radial-gradient(circle_at_top,_rgba(244,201,93,0.15),_transparent_45%),_linear-gradient(135deg,_#0B1742_0%,_#142A63_65%,_#0B1026_100%)] text-text-inverted"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Bundle both books & save 25%</h3>
            <p className="mt-2 max-w-xl text-text-inverted/80">
              Unlock the entire pyramid framework, plus bonuses valued at $149. Instant digital delivery with 30-day guarantee.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 text-left md:items-end md:text-right">
            <div className="text-sm uppercase tracking-wide text-brand-highlight">Launch bundle</div>
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold">$89</span>
              <span className="text-sm text-text-inverted/60 line-through">$119</span>
            </div>
            <Button className="inline-flex" size="lg">
              Checkout securely
            </Button>
            <p className="text-xs text-text-inverted/60">Apple Pay, Google Pay, PayPal, and major cards accepted.</p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
