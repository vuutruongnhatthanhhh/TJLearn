import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  PlayCircle,
  Sparkles,
  Users,
  BookOpenCheck,
  Trophy,
  Rocket,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { CourseCard } from "@/components/site/CourseCard";
import {
  courses,
  teacher,
  testimonials,
  platformStats,
} from "@/lib/data";

const featuredCourses = courses.slice(0, 6);

const features = [
  {
    icon: Rocket,
    title: "Học thực chiến",
    desc: "Mỗi khoá học gắn với dự án thật, không lý thuyết suông, áp dụng được ngay.",
  },
  {
    icon: Users,
    title: "Lớp học nhỏ, sát sao",
    desc: "Số lượng học viên mỗi lớp giới hạn để giảng viên hỗ trợ được từng người.",
  },
  {
    icon: PlayCircle,
    title: "Xem thử trước khi học",
    desc: "Hầu hết khoá học đều có bài học xem thử miễn phí, chọn đúng trước khi trả phí.",
  },
  {
    icon: Trophy,
    title: "Cam kết đầu ra",
    desc: "Lộ trình rõ ràng theo từng mục tiêu nghề nghiệp, có chứng nhận hoàn thành.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-brand-light)] blur-3xl animate-blob" />
        <div className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-[var(--color-accent-light)] blur-3xl animate-blob-slow" />

        <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <Badge tone="brand" className="mb-5">
              <Sparkles size={14} /> Nền tảng học số #1 cho người trẻ
            </Badge>
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-[var(--color-ink)] sm:text-5xl lg:text-[3.4rem]">
              Học kỹ năng số, <span className="text-[var(--color-brand)]">thực chiến</span> cùng người đã đi qua con đường đó
            </h1>
            <p className="mt-5 max-w-lg text-base text-[var(--color-ink-soft)] sm:text-lg">
              TJLearn là nơi {teacher.name} và các lớp học trực tiếp giúp bạn biến kỹ năng số
              thành lợi thế nghề nghiệp — có khoá miễn phí, có khoá trả phí, luôn có bài học xem thử.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/khoa-hoc" size="lg">
                Khám phá khoá học <ArrowRight size={18} />
              </Button>
              <Button href="/giang-vien" variant="secondary" size="lg">
                Gặp giảng viên
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {platformStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-extrabold text-[var(--color-ink)]">
                    {s.value}
                  </p>
                  <p className="text-xs text-[var(--color-ink-soft)]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-soft)] sm:ml-auto">
              <Image
                src="/images/hero/hero-main.jpg"
                alt="Học viên học trực tuyến"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -left-6 top-10 hidden items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[var(--shadow-pop)] sm:flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-mint-light)] text-[#0d8a6b]">
                <BookOpenCheck size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-[var(--color-ink)]">12 khoá học</p>
                <p className="text-xs text-[var(--color-ink-soft)]">Free &amp; Trả phí</p>
              </div>
            </div>

            <div className="absolute -right-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-[var(--shadow-pop)] sm:-right-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent-light)] text-[#b85a1e]">
                <Users size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-[var(--color-ink)]">18,400+ học viên</p>
                <StarRating rating={teacher.rating} size={12} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Vì sao chọn TJLearn"
            title="Học thật, làm được thật"
            description="Không chỉ xem video — bạn học qua dự án, được phản hồi, và có lớp học đồng hành."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-[var(--color-border)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-pop)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                  <f.icon size={22} />
                </span>
                <h3 className="font-display mt-4 text-lg font-bold text-[var(--color-ink)]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Khoá học nổi bật"
              title="Chọn lộ trình phù hợp với bạn"
              description="Miễn phí để bắt đầu, trả phí để đi sâu — tất cả đều có bài học xem thử."
            />
            <Button href="/khoa-hoc" variant="secondary">
              Xem tất cả <ArrowRight size={16} />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* TEACHER SPOTLIGHT */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 rounded-[2.5rem] bg-[var(--color-ink)] p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl">
              <Image
                src={teacher.avatar}
                alt={teacher.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-white">
              <Badge tone="sun" className="mb-4">
                <BadgeCheck size={14} /> Giảng viên đồng hành
              </Badge>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">{teacher.name}</h2>
              <p className="mt-1 text-[var(--color-sun)]">{teacher.title}</p>
              <p className="mt-5 max-w-xl text-white/80">{teacher.tagline}</p>
              <div className="mt-6 grid grid-cols-3 gap-6 max-w-sm">
                <div>
                  <p className="font-display text-2xl font-extrabold">{teacher.experienceYears} năm</p>
                  <p className="text-xs text-white/60">Kinh nghiệm</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold">{teacher.coursesCount}</p>
                  <p className="text-xs text-white/60">Khoá học</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold">{teacher.rating}</p>
                  <p className="text-xs text-white/60">Đánh giá</p>
                </div>
              </div>
              <div className="mt-8">
                <Button href="/giang-vien" variant="accent">
                  Xem trang giảng viên <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section id="danh-gia" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Học viên nói gì"
            title="Hơn 18,000 học viên đã tin chọn"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-3xl border border-[var(--color-border)] bg-white p-6"
              >
                <StarRating rating={t.rating} showValue={false} />
                <p className="mt-3 flex-1 text-sm text-[var(--color-ink-soft)]">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
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
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--color-brand)] px-8 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <h2 className="font-display mx-auto max-w-xl text-3xl font-bold text-white sm:text-4xl">
              Sẵn sàng bắt đầu hành trình học số của bạn?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/80">
              Bắt đầu với một khoá học miễn phí ngay hôm nay — không cần thẻ, không ràng buộc.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/khoa-hoc" variant="accent" size="lg">
                Bắt đầu học miễn phí
              </Button>
              <Button href="/giang-vien" variant="dark" size="lg" className="bg-white/10 hover:bg-white/20">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
