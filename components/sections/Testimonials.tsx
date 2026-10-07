import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <Section tone="cream-100">
      <SectionHeading eyebrow="Umsagnir" title="Það sem viðskiptavinir segja" align="center" />

      <div className="mx-auto mt-12 grid max-w-3xl gap-6">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="rounded-3xl border border-ink-900/8 bg-cream-0 p-8 text-center shadow-soft sm:p-10"
          >
            <Quote className="mx-auto h-7 w-7 text-forest-700" aria-hidden />

            <div className="mt-4 flex items-center justify-center gap-1">
              <span className="sr-only">{testimonial.rating} af 5 stjörnum</span>
              <span className="flex gap-1" aria-hidden>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-lawn-500 text-lawn-500" />
                ))}
              </span>
            </div>

            <blockquote className="mt-5 text-lg leading-relaxed text-ink-700">
              „{testimonial.quote}“
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-ink-900">
              {testimonial.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
