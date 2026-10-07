import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream-0/10 bg-forest-950 text-cream-100">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label={site.name} className="flex items-center text-cream-0">
              <Logo variant="light" className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/70">
              {site.tagline}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-cream-0/20 bg-cream-0/10 px-3 py-1 text-sm font-medium text-cream-100">
                {site.facebookName}
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-lawn-300">
              Efnisyfirlit
            </h3>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-100/80 transition-colors hover:text-cream-0"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-lawn-300">
              Hafðu samband
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-lawn-400" aria-hidden />
                <a href={site.phoneHref} className="transition-colors hover:text-cream-0">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-lawn-400" aria-hidden />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-cream-0"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-lawn-400" aria-hidden />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream-0/10 pt-6 text-xs text-cream-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. Allur réttur áskilinn.</p>
          <p>Vefsíða í uppbyggingu. Upplýsingar uppfærðar reglulega.</p>
        </div>
      </Container>
    </footer>
  );
}
