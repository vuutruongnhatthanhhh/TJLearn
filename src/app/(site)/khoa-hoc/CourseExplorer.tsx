"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CourseCard } from "@/components/site/CourseCard";
import { type Course } from "@/lib/data";

type AccessFilter = "all" | "free" | "paid" | "trial";

const accessTabs: { key: AccessFilter; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "free", label: "Miễn phí" },
  { key: "paid", label: "Trả phí" },
  { key: "trial", label: "Có xem thử" },
];

export function CourseExplorer({ courses }: { courses: Course[] }) {
  const [access, setAccess] = useState<AccessFilter>("all");
  const [category, setCategory] = useState<string>("Tất cả");
  const [query, setQuery] = useState("");

  const categories = useMemo(
    () => ["Tất cả", ...Array.from(new Set(courses.map((c) => c.category)))],
    [courses],
  );

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (access === "free" && c.access !== "free") return false;
      if (access === "paid" && c.access !== "paid") return false;
      if (access === "trial" && !c.hasTrial) return false;
      if (category !== "Tất cả" && c.category !== category) return false;
      if (query && !c.title.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [courses, access, category, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {accessTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setAccess(tab.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                access === tab.key
                  ? "bg-[var(--color-brand)] text-white"
                  : "bg-white text-[var(--color-ink-soft)] border border-[var(--color-border)] hover:text-[var(--color-brand)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-ink-soft)]"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm khoá học..."
            className="w-full rounded-full border border-[var(--color-border)] bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[var(--color-brand)]"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              category === cat
                ? "bg-[var(--color-ink)] text-white"
                : "bg-[var(--color-canvas-soft)] text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-[var(--color-ink-soft)]">
        Tìm thấy <span className="font-bold text-[var(--color-ink)]">{filtered.length}</span> khoá học
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2 text-center">
          <p className="font-display text-lg font-bold text-[var(--color-ink)]">
            Không tìm thấy khoá học phù hợp
          </p>
          <p className="text-sm text-[var(--color-ink-soft)]">
            Thử bỏ bớt bộ lọc hoặc tìm với từ khoá khác.
          </p>
        </div>
      )}
    </div>
  );
}
