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
        <div className="w-full max-w-xl space-y-4 rounded-2xl border border-cream-0/15 bg-cream-0/5 p-5 text-base leading-relaxed text-cream-100/80">
          <p>
            Ég heiti Gunnar og byrjaði að starfa við garðslátt undir nafninu Gunnsi garðsláttur árið 2022, þegar ég var í 8. bekk. Það sem byrjaði sem lítið verkefni hefur þróast í starfsemi sem ég hef byggt upp ár frá ári, með áherslu á góða þjónustu, vönduð vinnubrögð og ánægða viðskiptavini.
          </p>
          <p>
            Ég held áfram að sinna hefðbundinni garðþjónustu samhliða því að þróa Orfa og bjóða upp á útleigu á slátturóbótum. Með þeirri viðbót vil ég gera fólki auðveldara að halda görðunum sínum snyrtilegum og gefa því meiri tíma til að njóta sumarsins.
          </p>
          <p>
            Hjá Orfa legg ég áherslu á að finna lausn sem hentar hverjum garði fyrir sig. Garðar eru ólíkir og því skiptir máli að velja réttan búnað og huga að aðstæðum, stærð og skipulagi hvers svæðis.
          </p>
          <p>
            Markmiðið er að sameina reynsluna sem ég hef öðlast í garðþjónustu og nýja tækni til að bjóða upp á einfaldari og þægilegri leið til að hugsa um garðinn.
          </p>
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
