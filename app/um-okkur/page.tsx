import type { Metadata } from "next";
import { about } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutValues } from "@/components/sections/AboutValues";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "Um okkur",
  description:
    "Kynnstu Orfa, fyrirtæki sem leggur áherslu á einfaldar og vandaðar lausnir fyrir garðinn þinn.",
};

export default function UmOkkurPage() {
  return (
    <>
      <PageHeader
        eyebrow="Um okkur"
        title={about.heading}
        image={{
          src: "/images/gunnar-slattutraktor.jpg",
          alt: "Gunnar á sláttutraktor við störf á Akureyri",
          width: 1179,
          height: 1782,
        }}
      >
        <div className="w-full max-w-xl rounded-2xl border border-cream-0/15 bg-cream-0/5 p-5 text-base leading-relaxed text-cream-100/80">
          Ég heiti Gunnar Þór Sigurðarson og er 18 ára frumkvöðull á Akureyri. Ég hef starfað við grasslátt síðan 2022 undir nafninu Gunnsi Garðsláttur.
        </div>
        <Button href="/hafa-samband" size="lg">
          Hafa samband
        </Button>
      </PageHeader>

      <Testimonials />
      <AboutValues />
      <ContactCta />
    </>
  );
}
