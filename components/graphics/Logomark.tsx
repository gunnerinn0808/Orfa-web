import { cn } from "@/lib/cn";

export function Logomark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("h-9 w-9", className ?? undefined)}
      aria-hidden
    >
      <rect width="40" height="40" rx="12" className="fill-forest-800" />
      <path
        d="M20 10c4.5 0 8 3.7 8 8.4 0 5.1-4.2 9.9-8 11.6-3.8-1.7-8-6.5-8-11.6C12 13.7 15.5 10 20 10Z"
        className="fill-lawn-400"
      />
      <path
        d="M20 14.5v13.6M20 18.6l-3.2-2.4M20 22.4l3.6-2.6"
        stroke="var(--color-forest-900)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
