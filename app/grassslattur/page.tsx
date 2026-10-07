import type { Metadata } from "next";
import { grassMowing } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { GrassMowingDetails } from "@/components/sections/GrassMowingDetails";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "Grassláttur",
  description:
    "Hefðbundinn grassláttur frá Orfa með reglulegum heimsóknum og snyrtilegri umgjörð fyrir garðinn þinn.",
};

export default function GrassslatturPage() {
  return (
    <>
      <PageHeader
        eyebrow={grassMowing.eyebrow}
        title={grassMowing.heading}
        body={grassMowing.body}
        image={grassMowing.image}
      >
        <Button href="/hafa-samband" size="lg">
          Hafa samband
        </Button>
      </PageHeader>

      <GrassMowingDetails />
      <ContactCta />
    </>
  );
}
