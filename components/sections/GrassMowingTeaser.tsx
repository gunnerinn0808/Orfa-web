import Image from "next/image";
import { grassMowing } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function GrassMowingTeaser() {
  return (
    <Section tone="transparent" className="bg-mist-100">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow={grassMowing.eyebrow}
            title="Leyfðu okkur að sjá um sláttinn"
            body="Sláttur á um það bil tveggja vikna fresti yfir sumarið, með snyrtilegri umgjörð eftir hvert skipti. Sveigjanlegt fyrirkomulag sem lagar sig að þörfum garðsins þíns."
          />
          <Button href={grassMowing.cta.href} variant="outline" className="mt-7">
            {grassMowing.cta.label}
          </Button>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-forest-900/10 shadow-lift">
          <Image
            src={grassMowing.image.src}
            alt={grassMowing.image.alt}
            width={1500}
            height={2000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
