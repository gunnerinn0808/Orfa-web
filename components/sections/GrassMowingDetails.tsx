import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { grassMowing } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GrassMowingDetails() {
  return (
    <Section tone="cream">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <SectionHeading eyebrow={grassMowing.eyebrow} title="Hefðbundinn grassláttur" />
          <ul className="mt-8 space-y-4">
            {grassMowing.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-forest-700" aria-hidden />
                <span className="text-base leading-relaxed text-ink-600">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-forest-900/10 shadow-lift">
            <span className="absolute left-3 top-3 z-10 rounded-full bg-cream-0/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-900 shadow-soft">
              Fyrir
            </span>
            <Image
              src="/images/grass-before.jpg"
              alt="Grasflöt við fjölbýlishús áður en hún var slegin, gras orðið sítt og úfið"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-forest-900/10 shadow-lift">
            <span className="absolute left-3 top-3 z-10 rounded-full bg-lawn-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest-950 shadow-soft">
              Eftir
            </span>
            <Image
              src="/images/grass-after.jpg"
              alt="Sama svæði eftir slátt, snyrtileg grasflöt með greinilegum slátturöndum"
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
