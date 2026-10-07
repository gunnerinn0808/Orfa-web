import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";

export const metadata: Metadata = {
  title: "Hafðu samband",
  description:
    "Sendu Orfa fyrirspurn um leigu á slátturóbot eða grasslátt og fáðu tilboð sem hentar þínum garði.",
};

export default function HafaSambandPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hafðu samband"
        title="Sendu okkur fyrirspurn"
        body="Segðu okkur frá garðinum þínum og því sem þú hefur í huga."
      />

      <Section tone="cream">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
    </>
  );
}
