export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-[var(--color-brand-light)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--color-brand-dark)]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-[var(--color-ink-soft)]">{description}</p>
      )}
    </div>
  );
}
