import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function ContactInfo() {
  return (
    <div className="rounded-3xl border border-forest-700/15 bg-forest-950 p-7 text-cream-100 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-cream-0">Beint samband</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
        Kýstu frekar að hringja eða senda tölvupóst beint? Endilega.
      </p>

      <ul className="mt-6 space-y-4 text-sm">
        <li className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cream-0/10 text-lawn-300">
            <Phone className="h-4 w-4" aria-hidden />
          </span>
          <a
            href={site.phoneHref}
            className="font-medium text-cream-0 transition-colors hover:text-lawn-300"
          >
            {site.phone}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cream-0/10 text-lawn-300">
            <Mail className="h-4 w-4" aria-hidden />
          </span>
          <a
            href={`mailto:${site.email}`}
            className="break-all font-medium text-cream-0 transition-colors hover:text-lawn-300"
          >
            {site.email}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cream-0/10 text-lawn-300">
            <MapPin className="h-4 w-4" aria-hidden />
          </span>
          <span className="font-medium text-cream-0">{site.location}</span>
        </li>
      </ul>
    </div>
  );
}
