import { Authors } from "@/components/Authors";
import { BonusStack } from "@/components/BonusStack";
import { BookComparison } from "@/components/BookComparison";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Methodology } from "@/components/Methodology";
import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="bg-brand-light text-text-primary">
      <Navigation />
      <main>
        <Hero />
        <LeadMagnet />
        <Methodology />
        <BookComparison />
        <Testimonials />
        <BonusStack />
        <Authors />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
