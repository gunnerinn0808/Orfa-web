import { Lightbulb, Smile, SlidersHorizontal } from "lucide-react";
import { about } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const icons = [Lightbulb, Smile, SlidersHorizontal];

export function AboutValues() {
  return (
    <Section tone="cream-100">
      <SectionHeading
        eyebrow="Gildin okkar"
        title="Það sem skiptir okkur máli"
        align="center"
        className="mx-auto"
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-3">
        {about.values.map((value, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Card as="li" key={value.title} className="text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-lawn-100 text-forest-800">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{value.body}</p>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
