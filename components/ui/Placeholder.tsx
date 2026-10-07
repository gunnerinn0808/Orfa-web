import { PenLine } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Visually marks copy the business owner still needs to fill in (contact
 * details, specs, prices, bio facts) so it can never be mistaken for real,
 * launch-ready information.
 */
export function Placeholder({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-dashed border-mist-500/60 bg-mist-100 px-3 py-1 text-sm font-medium text-mist-700",
        className ?? undefined
      )}
    >
      <PenLine className="h-3.5 w-3.5 shrink-0" aria-hidden />
      {children}
    </span>
  );
}
