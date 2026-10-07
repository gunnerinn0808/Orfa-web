import { Award, Calendar, MapPin, ShieldCheck, type LucideIcon } from "lucide-react";
import { about, aboutFacts } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  map: MapPin,
  badge: Award,
  calendar: Calendar,
};

export function AboutStory() {
  return (
    <Section tone="cream">
      <div className="mx-auto max-w-3xl">
        <div>
          <SectionHeading eyebrow="Sagan okkar" title="Hvernig þetta byrjaði" />

          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {aboutFacts.map((fact) => {
              const Icon = icons[fact.icon];
              return (
                <div
                  key={fact.label}
                  className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-cream-0 p-5 shadow-soft"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lawn-100 text-forest-800">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                      {fact.label}
                    </dt>
                    <dd className="mt-1">
                      <span className="text-sm font-medium leading-snug text-ink-800">
                        {fact.value}
                      </span>
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>

          <div className="mt-6 flex items-start gap-4 rounded-3xl border border-forest-700/15 bg-lawn-50 p-7">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-forest-800" aria-hidden />
            <p className="text-base leading-relaxed text-forest-900">{about.trustNote}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
