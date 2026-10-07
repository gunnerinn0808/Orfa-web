import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  body,
  children,
  image,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  children?: ReactNode;
  image?: { src: string; alt: string; width?: number; height?: number; fade?: boolean };
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-forest-950 py-16 sm:py-20", className)}>
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.08]" aria-hidden />
      <Container className="relative">
        <div className={image ? "grid items-center gap-10 lg:grid-cols-[1.5fr_0.5fr] lg:gap-16" : undefined}>
          <div className="max-w-2xl">
            {eyebrow ? (
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-lawn-300">
                <span className="h-1.5 w-1.5 rounded-full bg-lawn-400" aria-hidden />
                {eyebrow}
              </span>
            ) : null}
            <h1 className="text-balance font-display text-4xl font-semibold tracking-tight text-cream-0 sm:text-5xl">
              {title}
            </h1>
            {body ? (
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream-100/75">{body}</p>
            ) : null}
            {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
          </div>
          {image ? (
            image.fade ? (
              <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:ml-auto lg:mr-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 1200}
                  height={image.height ?? 900}
                  priority
                  className="h-full w-full object-cover [mask-image:radial-gradient(ellipse_at_center,black_48%,transparent_86%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_48%,transparent_86%)]"
                />
              </div>
            ) : (
              <div className="mx-auto w-full max-w-[200px] overflow-hidden rounded-[2rem] border border-cream-0/10 shadow-lift sm:max-w-[240px] lg:ml-auto lg:mr-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 1200}
                  height={image.height ?? 900}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            )
          ) : null}
        </div>
      </Container>
    </section>
  );
}
