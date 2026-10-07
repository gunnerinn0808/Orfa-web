import { ArrowRight } from "lucide-react";
import { about } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AboutTeaser() {
  return (
    <Section tone="cream">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="Um okkur" title={about.heading} align="center" />
        <p className="mt-4 text-lg leading-relaxed text-ink-600">{about.lead}</p>
        <Button href="/um-okkur" variant="outline" className="mt-7">
          Kynnast okkur betur
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </Section>
  );
}
