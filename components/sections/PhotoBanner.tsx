import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PhotoBanner() {
  return (
    <section className="bg-cream-50 py-10 sm:py-14">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-forest-900/10 shadow-lift">
          <Image
            src="/images/lawn-stripes-bay.jpg"
            alt="Slátturóbotar slá jafnar rendur í grasflöt við sjávarsíðuna"
            width={2000}
            height={1498}
            className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[440px]"
          />
        </div>
      </Container>
    </section>
  );
}
