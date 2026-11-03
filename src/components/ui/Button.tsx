import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand)] text-white shadow-[var(--shadow-soft)] hover:bg-[var(--color-brand-dark)] hover:-translate-y-0.5",
  accent:
    "bg-[var(--color-accent)] text-white shadow-[0_14px_30px_-12px_rgba(255,138,61,0.55)] hover:brightness-105 hover:-translate-y-0.5",
  secondary:
    "bg-white text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]",
  ghost: "bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-brand-light)]",
  dark: "bg-[var(--color-ink)] text-white hover:bg-black",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
