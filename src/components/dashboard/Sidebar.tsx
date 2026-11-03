"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Video,
  Users,
  CalendarRange,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Tổng quan", icon: LayoutDashboard },
  { href: "/dashboard/lop-hoc", label: "Lớp học", icon: CalendarRange },
  { href: "/dashboard/hoc-sinh", label: "Học sinh", icon: Users },
  { href: "/dashboard/bai-viet", label: "Bài viết", icon: Newspaper },
  { href: "/dashboard/video", label: "Video", icon: Video },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-[var(--color-border)] bg-white lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-[var(--color-border)] px-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white">
          <GraduationCap size={20} />
        </span>
        <span className="font-display text-xl font-extrabold text-[var(--color-ink)]">
          TJ<span className="text-[var(--color-brand)]">Learn</span>
        </span>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                active
                  ? "bg-[var(--color-brand)] text-white"
                  : "text-[var(--color-ink-soft)] hover:bg-[var(--color-brand-light)] hover:text-[var(--color-brand)]"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-[var(--color-border)] p-4">
        <Link
          href="/giang-vien"
          className="flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm font-semibold text-[var(--color-ink-soft)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
        >
          <ExternalLink size={16} /> Xem trang công khai
        </Link>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto border-b border-[var(--color-border)] bg-white px-4 py-3 lg:hidden">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              active
                ? "bg-[var(--color-brand)] text-white"
                : "bg-[var(--color-canvas-soft)] text-[var(--color-ink-soft)]"
            }`}
          >
            <item.icon size={14} />
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
