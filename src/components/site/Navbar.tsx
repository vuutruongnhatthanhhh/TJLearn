"use client";

import Link from "next/link";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/khoa-hoc", label: "Khoá học" },
  { href: "/giang-vien", label: "Giảng viên" },
  { href: "/#danh-gia", label: "Đánh giá" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white">
            <GraduationCap size={20} />
          </span>
          <span className="font-display text-xl font-extrabold text-[var(--color-ink)]">
            TJ<span className="text-[var(--color-brand)]">Learn</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-brand)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/dashboard" variant="ghost" size="sm">
            Kênh giảng viên
          </Button>
          <Button href="/khoa-hoc" variant="primary" size="sm">
            Học thử miễn phí
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-ink)] md:hidden"
          aria-label="Mở menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-[var(--color-ink)] hover:bg-[var(--color-brand-light)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-3">
              <Button href="/dashboard" variant="secondary" size="sm">
                Kênh giảng viên
              </Button>
              <Button href="/khoa-hoc" variant="primary" size="sm">
                Học thử miễn phí
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
