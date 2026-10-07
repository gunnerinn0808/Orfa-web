import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  return (
    <Section tone="cream" narrow id="faq">
      <SectionHeading
        eyebrow="Spurt og svarað"
        title="Algengar spurningar um slátturóbota"
        align="center"
        className="mx-auto"
      />

      <div className="mt-10 divide-y divide-ink-900/8 rounded-3xl border border-ink-900/8 bg-cream-0 px-6 shadow-soft sm:px-8">
        {faqs.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-ink-900 marker:content-none">
              {item.q}
              <ChevronDown
                className="h-5 w-5 shrink-0 text-ink-500 transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
