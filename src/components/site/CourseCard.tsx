import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Users, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { StarRating } from "@/components/ui/StarRating";
import { type Course, formatVnd } from "@/lib/data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/khoa-hoc/${course.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-pop)]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {course.access === "free" ? (
            <Badge tone="mint">Miễn phí</Badge>
          ) : (
            <Badge tone="ink">Trả phí</Badge>
          )}
          {course.hasTrial && course.access === "paid" && (
            <Badge tone="accent">
              <PlayCircle size={12} /> Xem thử
            </Badge>
          )}
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-semibold text-white">
          {course.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display line-clamp-2 text-lg font-bold leading-snug text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-brand)]">
          {course.title}
        </h3>
        <p className="line-clamp-2 text-sm text-[var(--color-ink-soft)]">
          {course.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2 text-xs text-[var(--color-ink-soft)]">
          <span className="inline-flex items-center gap-1">
            <BookOpen size={14} /> {course.lessonsCount} bài
          </span>
          <span className="inline-flex items-center gap-1">
            <Users size={14} /> {course.studentsCount.toLocaleString("vi-VN")}
          </span>
          <StarRating rating={course.rating} />
        </div>

        <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-extrabold text-[var(--color-ink)]">
              {formatVnd(course.price)}
            </span>
            {course.originalPrice && (
              <span className="text-sm text-[var(--color-ink-soft)] line-through">
                {formatVnd(course.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
