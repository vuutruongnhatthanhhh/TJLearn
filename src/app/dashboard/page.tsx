import Image from "next/image";
import Link from "next/link";
import {
  Users,
  BookOpenCheck,
  Wallet,
  Star,
  ArrowRight,
  UserPlus,
  MessageSquareText,
  Video as VideoIcon,
  Newspaper,
} from "lucide-react";
import { Topbar } from "@/components/dashboard/Topbar";
import { StatCard } from "@/components/dashboard/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { classes, students, posts, videos, teacher } from "@/lib/data";

const statusTone: Record<string, "mint" | "sun" | "neutral"> = {
  "Đang diễn ra": "mint",
  "Sắp khai giảng": "sun",
  "Đã kết thúc": "neutral",
};

const activity = [
  {
    icon: UserPlus,
    tone: "brand" as const,
    text: "Trần Thị Bảo Ngọc vừa đăng ký lớp Web Fullstack K15",
    time: "2 giờ trước",
  },
  {
    icon: MessageSquareText,
    tone: "pink" as const,
    text: "Có 3 bình luận mới trong bài viết 'Lộ trình Frontend 6 tháng'",
    time: "5 giờ trước",
  },
  {
    icon: VideoIcon,
    tone: "accent" as const,
    text: "Video 'AI/LLM ứng dụng vào công việc' đạt 2,870 lượt xem",
    time: "1 ngày trước",
  },
  {
    icon: Star,
    tone: "mint" as const,
    text: "Nhận đánh giá 5 sao mới từ học viên lớp Data Analyst K5",
    time: "1 ngày trước",
  },
];

export default function DashboardOverviewPage() {
  const activeStudents = students.filter((s) => s.status === "Đang học").length;
  const ongoingClasses = classes.filter((c) => c.status === "Đang diễn ra").length;

  return (
    <div className="flex-1">
      <Topbar title={`Chào ${teacher.name.split(" ").pop()} 👋`} subtitle="Đây là tình hình giảng dạy của bạn hôm nay." />

      <div className="p-5 sm:p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Users} label="Học viên đang học" value={activeStudents.toString()} trend="+8%" tone="brand" />
          <StatCard icon={BookOpenCheck} label="Lớp đang diễn ra" value={ongoingClasses.toString()} trend="+2" tone="mint" />
          <StatCard icon={Wallet} label="Doanh thu tháng này" value="86.4tr đ" trend="+14%" tone="accent" />
          <StatCard icon={Star} label="Đánh giá trung bình" value={teacher.rating.toFixed(1)} trend="+0.1" tone="pink" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-[var(--color-ink)]">Lớp học của bạn</h2>
              <Link href="/dashboard/lop-hoc" className="text-sm font-semibold text-[var(--color-brand)]">
                Xem tất cả
              </Link>
            </div>
            <div className="mt-4 space-y-3">
              {classes.slice(0, 5).map((c) => (
                <div
                  key={c.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[var(--color-canvas-soft)] p-4"
                >
                  <div>
                    <p className="font-display text-sm font-bold text-[var(--color-ink)]">{c.name}</p>
                    <p className="text-xs text-[var(--color-ink-soft)]">{c.schedule}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-[var(--color-brand)]"
                        style={{ width: `${Math.round((c.studentsCount / c.capacity) * 100)}%` }}
                      />
                    </div>
                    <span className="text-xs text-[var(--color-ink-soft)]">
                      {c.studentsCount}/{c.capacity}
                    </span>
                    <Badge tone={statusTone[c.status]}>{c.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
            <h2 className="font-display text-lg font-bold text-[var(--color-ink)]">Hoạt động gần đây</h2>
            <div className="mt-4 space-y-4">
              {activity.map((a, i) => (
                <div key={i} className="flex gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      a.tone === "brand"
                        ? "bg-[var(--color-brand-light)] text-[var(--color-brand)]"
                        : a.tone === "pink"
                        ? "bg-[var(--color-pink-light)] text-[#c23768]"
                        : a.tone === "accent"
                        ? "bg-[var(--color-accent-light)] text-[#b85a1e]"
                        : "bg-[var(--color-mint-light)] text-[#0d8a6b]"
                    }`}
                  >
                    <a.icon size={15} />
                  </span>
                  <div>
                    <p className="text-sm text-[var(--color-ink)]">{a.text}</p>
                    <p className="text-xs text-[var(--color-ink-soft)]">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display flex items-center gap-2 text-lg font-bold text-[var(--color-ink)]">
                <Newspaper size={18} className="text-[var(--color-brand)]" /> Bài viết mới nhất
              </h2>
              <Button href="/dashboard/bai-viet" variant="ghost" size="sm">
                Quản lý <ArrowRight size={14} />
              </Button>
            </div>
            <div className="mt-4 space-y-3">
              {posts.slice(0, 3).map((p) => (
                <div key={p.id} className="flex items-center gap-3">
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Image src={p.cover} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="line-clamp-1 text-sm font-semibold text-[var(--color-ink)]">{p.title}</p>
                    <p className="text-xs text-[var(--color-ink-soft)]">{p.views.toLocaleString("vi-VN")} lượt xem</p>
                  </div>
                  <Badge tone={p.status === "Đã đăng" ? "mint" : "sun"}>{p.status}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display flex items-center gap-2 text-lg font-bold text-[var(--color-ink)]">
                <VideoIcon size={18} className="text-[var(--color-brand)]" /> Video mới nhất
              </h2>
              <Button href="/dashboard/video" variant="ghost" size="sm">
                Quản lý <ArrowRight size={14} />
              </Button>
            </div>
            <div className="mt-4 space-y-3">
              {videos.slice(0, 3).map((v) => (
                <div key={v.id} className="flex items-center gap-3">
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-xl">
                    <Image src={v.thumbnail} alt={v.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="line-clamp-1 text-sm font-semibold text-[var(--color-ink)]">{v.title}</p>
                    <p className="text-xs text-[var(--color-ink-soft)]">{v.views.toLocaleString("vi-VN")} lượt xem · {v.duration}</p>
                  </div>
                  <Badge tone={v.status === "Công khai" ? "mint" : v.status === "Đang xử lý" ? "sun" : "neutral"}>
                    {v.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
