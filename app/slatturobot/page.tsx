import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { RobotIntro } from "@/components/sections/RobotIntro";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "Slátturóbot á leigu",
  description:
    "Leigðu slátturóbot hjá Orfa. Við setjum vélina upp, stillum hana og sjáum um að garðurinn þinn sé reglulega sleginn, án fyrirhafnar af þinni hálfu.",
};

export default function SlatturobotPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aðalþjónusta"
        title="Slátturóbotar til leigu"
        body="Þú sleppur við að standa yfir sláttuvélinni. Við finnum vél sem hentar garðinum þínum, setjum hana upp og hún sér svo um reglulegan slátt allt tímabilið."
        image={{
          src: "/images/robot-mower-hero.jpg",
          alt: "Slátturóbot á grænni grasflöt",
        }}
      >
        <Button href="/hafa-samband" size="lg">
          Fá tilboð í leigu
        </Button>
      </PageHeader>

      <RobotIntro />
      <BeforeAfter />
      <FAQSection />
      <ContactCta />
    </>
  );
}
