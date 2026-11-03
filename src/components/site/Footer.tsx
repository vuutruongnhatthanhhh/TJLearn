import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { courses } from "@/lib/data";

export function Footer() {
  const featured = courses.slice(0, 4);

  return (
    <footer className="mt-24 border-t border-[var(--color-border)] bg-[var(--color-canvas-soft)]">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white">
              <GraduationCap size={20} />
            </span>
            <span className="font-display text-xl font-extrabold text-[var(--color-ink)]">
              TJ<span className="text-[var(--color-brand)]">Learn</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-[var(--color-ink-soft)]">
            Nền tảng học kỹ năng số trẻ trung, thực chiến — học cùng người đã đi qua con đường đó.
          </p>
          <div className="mt-5 flex gap-3">
            {[FacebookIcon, YoutubeIcon, LinkedinIcon].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-ink)] shadow-sm"
              >
                <Icon size={16} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-ink)]">
            Khoá học nổi bật
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
            {featured.map((c) => (
              <li key={c.slug}>
                <Link href={`/khoa-hoc/${c.slug}`} className="hover:text-[var(--color-brand)]">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-ink)]">
            Về TJLearn
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
            <li><Link href="/giang-vien" className="hover:text-[var(--color-brand)]">Giảng viên</Link></li>
            <li><Link href="/khoa-hoc" className="hover:text-[var(--color-brand)]">Tất cả khoá học</Link></li>
            <li><Link href="/dashboard" className="hover:text-[var(--color-brand)]">Kênh giảng viên</Link></li>
            <li><Link href="/#danh-gia" className="hover:text-[var(--color-brand)]">Đánh giá học viên</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-ink)]">
            Liên hệ
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-soft)]">
            <li>hotro@tjlearn.vn</li>
            <li>1900 6868</li>
            <li>Quận 1, TP. Hồ Chí Minh</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--color-border)] py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-[var(--color-ink-soft)] sm:flex-row">
          <span>© 2026 TJLearn. Dự án demo giao diện — dữ liệu minh hoạ.</span>
          <span>Thiết kế hiện đại · Dành cho người trẻ</span>
        </Container>
      </div>
    </footer>
  );
}
