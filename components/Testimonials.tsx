import { testimonials } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section id="results" background="muted">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">Proof in the progress</p>
        <h2 className="mt-4 text-3xl font-bold text-brand-primary md:text-4xl">
          Athletes, coaches, and everyday lifters are transforming fast
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Real stories from the beta cohort that put the new programming and lifecycle automation to work.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="flex h-full flex-col gap-6 text-left" padding="lg">
            <p className="text-base text-text-secondary">“{testimonial.quote}”</p>
            <footer className="mt-auto text-sm font-semibold text-brand-primary">
              {testimonial.name}
              <span className="block text-xs font-normal text-text-muted">{testimonial.role}</span>
            </footer>
          </Card>
        ))}
      </div>
    </Section>
  );
}
