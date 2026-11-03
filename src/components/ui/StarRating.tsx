import { Star } from "lucide-react";

export function StarRating({
  rating,
  size = 14,
  showValue = true,
  count,
}: {
  rating: number;
  size?: number;
  showValue?: boolean;
  count?: number;
}) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-ink)]">
      <Star size={size} className="fill-[var(--color-sun)] text-[var(--color-sun)]" />
      {showValue && <span>{rating.toFixed(1)}</span>}
      {count !== undefined && (
        <span className="font-normal text-[var(--color-ink-soft)]">({count})</span>
      )}
    </span>
  );
}
