import Image from "next/image";
import { Bell, Plus } from "lucide-react";
import { teacher } from "@/lib/data";

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] bg-white px-5 py-4 sm:px-8">
      <div>
        <h1 className="font-display text-xl font-bold text-[var(--color-ink)] sm:text-2xl">{title}</h1>
        {subtitle && <p className="mt-0.5 text-sm text-[var(--color-ink-soft)]">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink-soft)] hover:text-[var(--color-brand)]">
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[var(--color-pink)]" />
        </button>
        <div className="hidden items-center gap-2.5 sm:flex">
          <div className="relative h-9 w-9 overflow-hidden rounded-full">
            <Image src={teacher.avatar} alt={teacher.name} fill className="object-cover" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-[var(--color-ink)]">{teacher.name}</p>
            <p className="text-xs text-[var(--color-ink-soft)]">{teacher.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FloatingCreateHint() {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-ink-soft)]">
      <Plus size={12} /> Thao tác chỉ minh hoạ trên giao diện demo
    </span>
  );
}
