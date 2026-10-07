import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.08]" aria-hidden />
      <Container className="relative text-center">
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-cream-0 sm:text-4xl">
          Tilbúin/n að sleppa við sláttinn?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-cream-100/75">
          Sendu okkur fyrirspurn og við finnum réttu lausnina fyrir þinn garð, hvort sem
          það er slátturóbot á leigu eða grassláttur.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/hafa-samband" variant="secondary" size="lg">
            Senda fyrirspurn
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
