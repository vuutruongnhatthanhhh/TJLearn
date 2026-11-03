import Image from "next/image";
import { Calendar, Users } from "lucide-react";
import { Topbar } from "@/components/dashboard/Topbar";
import { Badge } from "@/components/ui/Badge";
import { classes, courses, formatDateVn } from "@/lib/data";

const statusTone: Record<string, "mint" | "sun" | "neutral"> = {
  "Đang diễn ra": "mint",
  "Sắp khai giảng": "sun",
  "Đã kết thúc": "neutral",
};

export default function DashboardClassesPage() {
  return (
    <div className="flex-1">
      <Topbar title="Lớp học" subtitle={`Bạn đang quản lý ${classes.length} lớp học`} />

      <div className="grid grid-cols-1 gap-5 p-5 sm:p-8 md:grid-cols-2 xl:grid-cols-3">
        {classes.map((c) => {
          const course = courses.find((co) => co.slug === c.courseSlug);
          const percent = Math.round((c.studentsCount / c.capacity) * 100);
          return (
            <div key={c.id} className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white">
              {course && (
                <div className="relative h-28 w-full">
                  <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                  <Badge tone={statusTone[c.status]} className="absolute left-3 top-3">
                    {c.status}
                  </Badge>
                </div>
              )}
              <div className="p-5">
                <p className="font-display text-lg font-bold text-[var(--color-ink)]">{c.name}</p>
                <p className="mt-1 line-clamp-1 text-sm text-[var(--color-ink-soft)]">{course?.title}</p>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-[var(--color-ink-soft)]">
                  <Calendar size={13} /> {c.schedule}
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-[var(--color-ink-soft)]">
                  <Users size={13} /> Khai giảng {formatDateVn(c.startDate)}
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-[var(--color-ink-soft)]">
                    <span>Sĩ số</span>
                    <span className="font-semibold text-[var(--color-ink)]">
                      {c.studentsCount}/{c.capacity}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[var(--color-canvas-soft)]">
                    <div
                      className="h-full rounded-full bg-[var(--color-brand)]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
