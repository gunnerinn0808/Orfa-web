import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { hero } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dot-grid">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-lawn-50 via-cream-50 to-cream-50"
        aria-hidden
      />
      <Container className="relative grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <h1 className="text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-[3.4rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
            {hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
          <div className="absolute right-0 top-0 h-[78%] w-[80%] overflow-hidden rounded-[2.5rem] border border-forest-900/10 shadow-lift">
            <Image
              src={hero.image.main.src}
              alt={hero.image.main.alt}
              width={800}
              height={980}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 z-10 h-[52%] w-[50%] overflow-hidden rounded-[1.75rem] border-4 border-cream-50 shadow-xl">
            <Image
              src={hero.image.accent.src}
              alt={hero.image.accent.alt}
              width={600}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
