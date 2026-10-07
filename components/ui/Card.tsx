import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  return (
    <As
      className={cn(
        "rounded-3xl border border-ink-900/8 bg-cream-0 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        className ?? undefined
      )}
    >
      {children}
    </As>
  );
}
