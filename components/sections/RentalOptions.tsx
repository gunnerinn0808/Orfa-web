import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function RentalOptions() {
  return (
    <Section tone="cream" padding="tight">
      <div className="max-w-2xl">
        <SectionHeading
          eyebrow="Leigumöguleikar"
          title="Leigðu réttan slátturóbot fyrir garðinn þinn"
          body="Við metum garðinn þinn og finnum vélina sem hentar stærð hans og lögun, sjáum um uppsetningu og viðhald allt sumarið. Þú sendir okkur upplýsingar um garðinn og færð tilboð sem hentar."
        />
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="/hafa-samband">
            Fá tilboð
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button href="/slatturobot#faq" variant="secondary">
            Sjá algengar spurningar um útleigu slátturróbota
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </div>
    </Section>
  );
}
