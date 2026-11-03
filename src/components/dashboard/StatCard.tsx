import { type LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

export function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  trendUp = true,
  tone = "brand",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  tone?: "brand" | "accent" | "mint" | "pink";
}) {
  const tones: Record<string, string> = {
    brand: "bg-[var(--color-brand-light)] text-[var(--color-brand)]",
    accent: "bg-[var(--color-accent-light)] text-[#b85a1e]",
    mint: "bg-[var(--color-mint-light)] text-[#0d8a6b]",
    pink: "bg-[var(--color-pink-light)] text-[#c23768]",
  };

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-white p-5">
      <div className="flex items-center justify-between">
        <span className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tones[tone]}`}>
          <Icon size={20} />
        </span>
        {trend && (
          <span
            className={`inline-flex items-center gap-1 text-xs font-bold ${
              trendUp ? "text-[var(--color-mint)]" : "text-[var(--color-pink)]"
            }`}
          >
            {trendUp ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
            {trend}
          </span>
        )}
      </div>
      <p className="font-display mt-4 text-2xl font-extrabold text-[var(--color-ink)]">{value}</p>
      <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{label}</p>
    </div>
  );
}
