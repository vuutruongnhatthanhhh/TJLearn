import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  PlayCircle,
  ShieldCheck,
  Users,
  Infinity as InfinityIcon,
  Award,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";
import { CourseCard } from "@/components/site/CourseCard";
import {
  courses,
  teacher,
  getClassById,
  formatVnd,
  formatDateVn,
} from "@/lib/data";
import { CurriculumSection } from "./CurriculumSection";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CourseDetailPage({
  params,
}: PageProps<"/khoa-hoc/[slug]">) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const klass = getClassById(course.classId);
  const related = courses.filter((c) => c.category === course.category && c.slug !== course.slug).slice(0, 3);
  const totalLessons = course.curriculum.reduce((sum, s) => sum + s.lessons.length, 0);

  return (
    <div className="pb-20 pt-8">
      <Container>
        <nav className="flex items-center gap-1.5 text-xs text-[var(--color-ink-soft)]">
          <Link href="/" className="hover:text-[var(--color-brand)]">Trang chủ</Link>
          <ChevronRight size={12} />
          <Link href="/khoa-hoc" className="hover:text-[var(--color-brand)]">Khoá học</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--color-ink)]">{course.title}</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="brand">{course.category}</Badge>
              <Badge tone="neutral">{course.level}</Badge>
              {course.access === "free" ? (
                <Badge tone="mint">Miễn phí</Badge>
              ) : (
                <Badge tone="ink">Trả phí</Badge>
              )}
            </div>

            <h1 className="font-display mt-4 text-3xl font-extrabold leading-tight text-[var(--color-ink)] sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-3 max-w-2xl text-[var(--color-ink-soft)]">{course.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-[var(--color-ink-soft)]">
              <StarRating rating={course.rating} count={course.ratingCount} />
              <span className="inline-flex items-center gap-1.5">
                <Users size={15} /> {course.studentsCount.toLocaleString("vi-VN")} học viên
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} /> Cập nhật {formatDateVn(course.updatedAt)}
              </span>
            </div>

            <Link
              href="/giang-vien"
              className="mt-6 flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-3.5 transition-colors hover:border-[var(--color-brand)]"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src={teacher.avatar} alt={teacher.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--color-ink)]">{teacher.name}</p>
                <p className="text-xs text-[var(--color-ink-soft)]">{teacher.title}</p>
              </div>
            </Link>

            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-3xl">
              <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[var(--color-brand)]">
                  <PlayCircle size={32} />
                </span>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">
                Bạn sẽ học được gì
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-soft)]">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--color-mint)]" />
                    {o}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">
                  Nội dung khoá học
                </h2>
                <span className="text-sm text-[var(--color-ink-soft)]">
                  {course.curriculum.length} phần · {totalLessons} bài học
                </span>
              </div>
              <div className="mt-4">
                <CurriculumSection curriculum={course.curriculum} courseTitle={course.title} />
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>
            <div className="sticky top-24 rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-pop)]">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-extrabold text-[var(--color-ink)]">
                  {formatVnd(course.price)}
                </span>
                {course.originalPrice && (
                  <span className="text-base text-[var(--color-ink-soft)] line-through">
                    {formatVnd(course.originalPrice)}
                  </span>
                )}
              </div>
              {course.originalPrice && (
                <p className="mt-1 text-sm font-semibold text-[var(--color-pink)]">
                  Giảm {Math.round((1 - course.price / course.originalPrice) * 100)}% hôm nay
                </p>
              )}

              <Button className="mt-5 w-full" size="lg" variant={course.access === "free" ? "primary" : "accent"}>
                {course.access === "free" ? "Học miễn phí ngay" : "Đăng ký khoá học"}
              </Button>
              {course.hasTrial && (
                <p className="mt-3 text-center text-xs text-[var(--color-ink-soft)]">
                  <PlayCircle size={12} className="mr-1 inline" />
                  {course.trialNote}
                </p>
              )}

              <div className="mt-6 space-y-3 border-t border-[var(--color-border)] pt-5 text-sm text-[var(--color-ink-soft)]">
                <div className="flex items-center gap-2.5">
                  <BookOpen size={16} className="text-[var(--color-brand)]" /> {course.lessonsCount} bài giảng
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock size={16} className="text-[var(--color-brand)]" /> {course.duration} tổng thời lượng
                </div>
                <div className="flex items-center gap-2.5">
                  <InfinityIcon size={16} className="text-[var(--color-brand)]" /> Học không giới hạn thời gian
                </div>
                <div className="flex items-center gap-2.5">
                  <Award size={16} className="text-[var(--color-brand)]" /> Chứng nhận hoàn thành
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={16} className="text-[var(--color-brand)]" /> Hỗ trợ trực tiếp từ giảng viên
                </div>
              </div>

              {klass && (
                <div className="mt-6 rounded-2xl bg-[var(--color-canvas-soft)] p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-ink-soft)]">
                    Lớp học gần nhất
                  </p>
                  <p className="mt-1 font-display font-bold text-[var(--color-ink)]">{klass.name}</p>
                  <p className="text-xs text-[var(--color-ink-soft)]">{klass.schedule}</p>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <Badge tone={klass.status === "Đang diễn ra" ? "mint" : klass.status === "Sắp khai giảng" ? "sun" : "neutral"}>
                      {klass.status}
                    </Badge>
                    <span className="text-[var(--color-ink-soft)]">
                      {klass.studentsCount}/{klass.capacity} học viên
                    </span>
                  </div>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5">
                {course.tags.map((t) => (
                  <Badge key={t} tone="neutral">{t}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">
              Khoá học liên quan
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
