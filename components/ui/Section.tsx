import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "cream" | "cream-100" | "forest" | "transparent";
type Padding = "default" | "tight";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream-50",
  "cream-100": "bg-cream-100",
  forest: "bg-forest-950 text-cream-50",
  transparent: "",
};

const paddingClasses: Record<Padding, string> = {
  default: "py-16 sm:py-24",
  tight: "py-12 sm:py-16",
};

export function Section({
  children,
  className,
  tone = "transparent",
  id,
  narrow = false,
  padding = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
  narrow?: boolean;
  padding?: Padding;
}) {
  return (
    <section id={id} className={cn(paddingClasses[padding], toneClasses[tone], className ?? undefined)}>
      <Container className={narrow ? "max-w-4xl" : undefined}>{children}</Container>
    </section>
  );
}
