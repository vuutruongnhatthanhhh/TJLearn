import Image from "next/image";
import {
  CheckCircle2,
  MapPin,
  Star,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { FacebookIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { CourseCard } from "@/components/site/CourseCard";
import { classes, courses, teacher, testimonials } from "@/lib/data";

export const metadata = {
  title: `${teacher.name} | TJLearn`,
};

const statusTone: Record<string, "mint" | "sun" | "neutral"> = {
  "Đang diễn ra": "mint",
  "Sắp khai giảng": "sun",
  "Đã kết thúc": "neutral",
};

export default function TeacherProfilePage() {
  return (
    <div className="pb-20">
      {/* COVER */}
      <section className="relative">
        <div className="relative h-56 w-full overflow-hidden sm:h-72">
          <Image src={teacher.cover} alt={teacher.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>

        <Container>
          <div className="relative -mt-16 sm:-mt-20">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-3xl border-4 border-white shadow-[var(--shadow-pop)] sm:h-40 sm:w-40">
              <Image src={teacher.avatar} alt={teacher.name} fill className="object-cover" />
            </div>
          </div>

          <div className="mt-4 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-display text-2xl font-extrabold text-[var(--color-ink)] sm:text-3xl">
                {teacher.name}
              </h1>
              <p className="font-medium text-[var(--color-brand)]">{teacher.title}</p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-[var(--color-ink-soft)]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} /> {teacher.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star size={14} className="fill-[var(--color-sun)] text-[var(--color-sun)]" /> {teacher.rating} đánh giá
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users size={14} /> {teacher.studentsCount.toLocaleString("vi-VN")} học viên
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              {[FacebookIcon, YoutubeIcon, LinkedinIcon].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink)]"
                >
                  <Icon size={16} />
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">Giới thiệu</h2>
            <p className="mt-3 text-[var(--color-ink-soft)]">{teacher.bio}</p>

            <div className="mt-6 space-y-2.5">
              {teacher.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-soft)]">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-mint)]" />
                  {h}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">
                Học viên đánh giá
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {testimonials.map((t) => (
                  <div key={t.name} className="rounded-3xl border border-[var(--color-border)] bg-white p-5">
                    <StarRating rating={t.rating} showValue={false} />
                    <p className="mt-3 text-sm text-[var(--color-ink-soft)]">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="relative h-9 w-9 overflow-hidden rounded-full">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[var(--color-ink)]">{t.name}</p>
                        <p className="text-xs text-[var(--color-ink-soft)]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR: CLASSES */}
          <div>
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
              <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">
                Lớp học đang mở
              </h3>
              <div className="mt-4 space-y-3">
                {classes.map((c) => (
                  <div key={c.id} className="rounded-2xl bg-[var(--color-canvas-soft)] p-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-sm font-bold text-[var(--color-ink)]">{c.name}</p>
                      <Badge tone={statusTone[c.status]}>{c.status}</Badge>
                    </div>
                    <p className="mt-1 text-xs text-[var(--color-ink-soft)]">{c.schedule}</p>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-[var(--color-brand)]"
                        style={{ width: `${Math.round((c.studentsCount / c.capacity) * 100)}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-[var(--color-ink-soft)]">
                      {c.studentsCount}/{c.capacity} học viên
                    </p>
                  </div>
                ))}
              </div>
              <Button href="/khoa-hoc" className="mt-5 w-full" variant="secondary">
                Xem tất cả khoá học
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow={`Khoá học của ${teacher.name}`}
            title="Toàn bộ khoá học"
            description={`${courses.length} khoá học đang được giảng dạy — đa dạng từ lập trình đến kỹ năng sáng tạo.`}
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
