import { type ReactNode } from "react";

type Tone = "brand" | "accent" | "mint" | "pink" | "sun" | "neutral" | "ink";

const tones: Record<Tone, string> = {
  brand: "bg-[var(--color-brand-light)] text-[var(--color-brand-dark)]",
  accent: "bg-[var(--color-accent-light)] text-[#b85a1e]",
  mint: "bg-[var(--color-mint-light)] text-[#0d8a6b]",
  pink: "bg-[var(--color-pink-light)] text-[#c23768]",
  sun: "bg-[#fff6da] text-[#9a7300]",
  neutral: "bg-[var(--color-canvas-soft)] text-[var(--color-ink-soft)]",
  ink: "bg-[var(--color-ink)] text-white",
};

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
