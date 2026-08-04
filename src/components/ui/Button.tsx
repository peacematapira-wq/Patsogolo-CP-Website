import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondary-dark" | "dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200";

const sizes: Record<Size, string> = {
  md: "text-[14px] px-5.5 py-3",
  lg: "text-[15px] px-6.5 py-3.5",
};

const variants: Record<Variant, string> = {
  // Primary: solid warm sand fill, ink text, shadow lift on hover — the one action that should win the eye.
  primary:
    "bg-sand text-ink shadow-[0_8px_20px_rgba(221,154,136,0.35)] hover:bg-sand-deep hover:shadow-[0_12px_28px_rgba(221,154,136,0.45)] hover:-translate-y-0.5",
  // Secondary on dark backgrounds: true ghost/outline, no fill, quiet until hovered.
  secondary:
    "border border-paper/35 text-paper bg-transparent hover:bg-paper/8 hover:border-paper/55 hover:-translate-y-0.5",
  // Secondary on light backgrounds: ink outline ghost button.
  "secondary-dark":
    "border border-ink/20 text-ink bg-transparent hover:bg-ink/5 hover:border-ink/35 hover:-translate-y-0.5",
  // Solid dark fill for light-background sections that need a strong but non-primary action.
  dark: "bg-ink text-paper hover:bg-lake-deep hover:-translate-y-0.5",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
