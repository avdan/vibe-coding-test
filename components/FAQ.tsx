import { faqs } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function FAQ() {
  return (
    <Section id="faq" innerClassName="max-w-5xl">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">Your questions, answered</p>
        <h2 className="mt-4 text-3xl font-bold text-brand-primary md:text-4xl">
          Everything you need to know before you start
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          From program logistics to guarantees, we built transparency into the funnel to eliminate objections.
        </p>
      </div>
      <dl className="mt-12 space-y-6">
        {faqs.map((faq) => (
          <Card key={faq.question} variant="outline" padding="lg" className="text-left">
            <dt className="text-lg font-semibold text-brand-primary">{faq.question}</dt>
            <dd className="mt-3 text-sm text-text-secondary">{faq.answer}</dd>
          </Card>
        ))}
      </dl>
    </Section>
  );
}
