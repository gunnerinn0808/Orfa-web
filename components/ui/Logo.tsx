import Image from "next/image";

type LogoProps = {
  className?: string;
  /**
   * "dark" is the black-ink wordmark for light backgrounds (navbar).
   * "light" is the cream recolor for dark backgrounds (footer).
   * The green triangle accent inside the "A" stays the fixed brand green
   * in both variants.
   */
  variant?: "dark" | "light";
  priority?: boolean;
};

const sources = {
  dark: "/images/orfa-wordmark.png",
  light: "/images/orfa-wordmark-light.png",
} as const;

/** Orfa wordmark, cropped from the brand's real logo artwork. */
export function Logo({ className, variant = "dark", priority }: LogoProps) {
  return (
    <Image
      src={sources[variant]}
      alt="Orfa"
      width={1307}
      height={243}
      priority={priority}
      className={className}
    />
  );
}
