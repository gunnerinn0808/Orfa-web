import Image from "next/image";
import { ArrowRight, CircleCheck } from "lucide-react";
import { beforeAfter } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type BeforeAfterProps = {
  faqLink?: { label: string; href: string };
  padding?: "default" | "tight";
};

export function BeforeAfter({ faqLink, padding = "default" }: BeforeAfterProps) {
  return (
    <Section tone="cream-100" padding={padding}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <div className="overflow-hidden rounded-[2rem] border border-forest-900/10 shadow-lift">
            <Image
              src={beforeAfter.image.src}
              alt={beforeAfter.image.alt}
              width={1875}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
          {faqLink && (
            <Button href={faqLink.href} variant="secondary" className="mt-5">
              {faqLink.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          )}
        </div>

        <div>
          <SectionHeading
            eyebrow={beforeAfter.eyebrow}
            title={beforeAfter.heading}
            body={beforeAfter.body}
          />

          <ul className="mt-8 space-y-4">
            {beforeAfter.points.map((point) => (
              <li key={point.title} className="flex items-start gap-3">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" aria-hidden />
                <div>
                  <h3 className="text-base font-semibold text-ink-900">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
