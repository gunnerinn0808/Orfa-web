"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { CircleCheck, LoaderCircle, TriangleAlert } from "lucide-react";
import { contactInterests } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const inputClasses =
  "w-full rounded-xl border border-ink-900/12 bg-cream-50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/20";

// Formats as the user types: 7 digits shown as "XXX XXXX" (Icelandic phone number convention).
function formatPhoneInput(event: ChangeEvent<HTMLInputElement>) {
  const digits = event.currentTarget.value.replace(/\D/g, "").slice(0, 7);
  event.currentTarget.value = digits.length > 3 ? `${digits.slice(0, 3)} ${digits.slice(3)}` : digits;
}

// Formats as the user types: 10 digits shown as "XXXXXX-XXXX", dash auto-inserted after the 6th digit.
function formatKennitalaInput(event: ChangeEvent<HTMLInputElement>) {
  const digits = event.currentTarget.value.replace(/\D/g, "").slice(0, 10);
  event.currentTarget.value = digits.length > 6 ? `${digits.slice(0, 6)}-${digits.slice(6)}` : digits;
}

// Reserved Formspree directive fields — passed straight through, never shown as a row in the email.
const RESERVED_KEYS = new Set(["_gotcha", "_subject", "_replyto"]);

// Maps input `name` attributes to friendly Icelandic row labels in the notification email.
const FIELD_LABELS: Record<string, string> = {
  nafn: "Nafn",
  simi: "Sími",
  netfang: "Netfang",
  heimilisfang: "Heimilisfang / staðsetning",
  kennitala: "Kennitala",
  staerd: "Stærð garðs",
  ahugi: "Hefur áhuga á",
  skilabod: "Skilaboð",
};

type Status = "idle" | "sending" | "success" | "error";

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: ReactNode;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [interests, setInterests] = useState<string[]>([]);

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};

    for (const [key, value] of data.entries()) {
      if (typeof value !== "string") continue;
      if (RESERVED_KEYS.has(key)) {
        payload[key] = value;
        continue;
      }
      const label = FIELD_LABELS[key] ?? key;
      payload[label] = key === "ahugi" && payload[label] ? `${payload[label]}, ${value}` : value;
    }

    const visitorEmail = data.get("netfang");
    if (typeof visitorEmail === "string" && visitorEmail) {
      payload._replyto = visitorEmail;
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(`https://formspree.io/f/${site.formspreeFormId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) throw new Error("Formspree request failed");

      setStatus("success");
      form.reset();
      setInterests([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-ink-900/8 bg-cream-0 p-8 text-center shadow-soft sm:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-lawn-100 text-forest-800">
          <CircleCheck className="h-6 w-6" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-ink-900">Takk fyrir fyrirspurnina!</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">
          Við höfum móttekið skilaboðin þín og höfum samband fljótlega.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink-900/8 bg-cream-0 p-6 shadow-soft sm:p-8"
    >
      {/* Honeypot — left empty by real visitors, hidden from view and assistive tech. */}
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input type="hidden" name="_subject" value="Ný fyrirspurn af vefsíðu | Orfa" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nafn" htmlFor="nafn">
          <input id="nafn" name="nafn" type="text" required autoComplete="name" className={inputClasses} />
        </Field>
        <Field label="Sími" htmlFor="simi">
          <input
            id="simi"
            name="simi"
            type="tel"
            required
            autoComplete="tel"
            inputMode="numeric"
            placeholder="123 4567"
            pattern="[0-9]{3} [0-9]{4}"
            maxLength={8}
            title="Sláðu inn 7 stafa símanúmer"
            onChange={formatPhoneInput}
            className={inputClasses}
          />
        </Field>
        <Field label="Netfang" htmlFor="netfang">
          <input id="netfang" name="netfang" type="email" required autoComplete="email" className={inputClasses} />
        </Field>
        <Field label="Heimilisfang / staðsetning" htmlFor="heimilisfang">
          <input
            id="heimilisfang"
            name="heimilisfang"
            type="text"
            required
            autoComplete="address-line1"
            className={inputClasses}
          />
        </Field>
        <Field label="Kennitala" htmlFor="kennitala">
          <input
            id="kennitala"
            name="kennitala"
            type="text"
            inputMode="numeric"
            placeholder="123456-7890"
            pattern="[0-9]{6}-[0-9]{4}"
            maxLength={11}
            title="Sláðu inn 10 stafa kennitölu"
            autoComplete="off"
            onChange={formatKennitalaInput}
            className={inputClasses}
          />
        </Field>
        <Field
          label={
            <>
              Stærð garðs <span className="font-normal text-ink-400">(valfrjálst)</span>
            </>
          }
          htmlFor="staerd"
          className="sm:col-span-2"
        >
          <select id="staerd" name="staerd" defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Veldu stærð garðs
            </option>
            <option value="minni">Minni garður</option>
            <option value="medalstor">Meðalstór garður</option>
            <option value="staerri">Stærri garður</option>
            <option value="veit-ekki">Veit ekki / óviss</option>
          </select>
        </Field>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2.5 text-sm font-medium text-ink-900">
          Hef áhuga á <span className="font-normal text-ink-400">(valfrjálst)</span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {contactInterests.map((interest) => {
            const checked = interests.includes(interest);
            return (
              <label
                key={interest}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
                  checked
                    ? "border-forest-700 bg-forest-700/10 text-forest-800"
                    : "border-ink-900/15 text-ink-600 hover:border-forest-700/40"
                )}
              >
                <input
                  type="checkbox"
                  name="ahugi"
                  value={interest}
                  checked={checked}
                  onChange={() => toggleInterest(interest)}
                  className="sr-only"
                />
                {interest}
              </label>
            );
          })}
        </div>
      </fieldset>

      <Field
        label={
          <>
            Skilaboð <span className="font-normal text-ink-400">(valfrjálst)</span>
          </>
        }
        htmlFor="skilabod"
        className="mt-5"
      >
        <textarea
          id="skilabod"
          name="skilabod"
          rows={4}
          placeholder="Segðu okkur aðeins frá garðinum þínum og því sem þú hefur í huga…"
          className={inputClasses}
        />
      </Field>

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>
            Eitthvað fór úrskeiðis við sendingu. Reyndu aftur eða hafðu samband beint í síma{" "}
            <a href={site.phoneHref} className="font-medium underline underline-offset-2">
              {site.phone}
            </a>{" "}
            eða á{" "}
            <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-2">
              {site.email}
            </a>
            .
          </span>
        </p>
      )}

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? (
          <span className="inline-flex items-center gap-2">
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
            Sendi...
          </span>
        ) : (
          "Senda fyrirspurn"
        )}
      </Button>
    </form>
  );
}
