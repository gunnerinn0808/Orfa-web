import { Eye, Settings, Warehouse, Wrench, type LucideIcon } from "lucide-react";
import { robotBenefits } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const icons: Record<string, LucideIcon> = {
  eye: Eye,
  wrench: Wrench,
  warehouse: Warehouse,
  settings: Settings,
};

export function RobotIntro() {
  return (
    <Section tone="cream">
      <SectionHeading
        title="Óaðfinnanlegur garður"
        body="Viltu hafa vel sleginn garð en nennir ekki að standa yfir sláttuvélinni sjálf/ur? Við leigjum út slátturóbota sem slær garðinn daglega á meðan þú sinnir öðru, eða slappar einfaldlega af."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {robotBenefits.map((benefit) => {
          const Icon = icons[benefit.icon];
          return (
            <Card as="li" key={benefit.title}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-700/10 text-forest-800">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {benefit.body}
              </p>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
