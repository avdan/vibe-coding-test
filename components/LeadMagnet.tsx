import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function LeadMagnet() {
  return (
    <Section
      id="lead-magnet"
      spacing="none"
      className="-mt-[clamp(10rem,18vw,16rem)] pb-section"
      innerClassName="flex justify-center"
    >
      <Card className="w-full max-w-4xl" padding="lg">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">Free preview</p>
            <h3 className="text-2xl font-semibold text-brand-primary">Unlock sample chapters instantly</h3>
            <p className="text-sm text-text-muted">
              Drop your email to receive sneak peeks, programming templates, and VIP launch momentum updates.
            </p>
          </div>
          <form className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-brand-muted/60 bg-white px-4 py-3 text-sm text-text-primary shadow-soft focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/30"
              required
            />
            <Button type="submit">Send me the preview</Button>
          </form>
        </div>
      </Card>
    </Section>
  );
}
