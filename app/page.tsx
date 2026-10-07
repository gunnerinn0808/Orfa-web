import { Hero } from "@/components/sections/Hero";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { RentalOptions } from "@/components/sections/RentalOptions";
import { PhotoBanner } from "@/components/sections/PhotoBanner";
import { GrassMowingTeaser } from "@/components/sections/GrassMowingTeaser";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <RentalOptions />
      <BeforeAfter
        padding="tight"
        faqLink={{
          label: "Skoða algengar spurningar um útleigu á slátturróbotum",
          href: "/slatturobot#faq",
        }}
      />
      <PhotoBanner />
      <GrassMowingTeaser />
      <AboutTeaser />
      <Testimonials />
      <ContactCta />
    </>
  );
}
