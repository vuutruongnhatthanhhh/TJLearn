"use client";

import { useMemo, useState } from "react";
import { Mail, Search, MessageCircle, User } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { type Student, type TeachingClass, formatDateVn } from "@/lib/data";

const statusTone: Record<Student["status"], "mint" | "sun" | "neutral"> = {
  "Đang học": "mint",
  "Tạm nghỉ": "sun",
  "Hoàn thành": "neutral",
};

export function StudentsManager({
  students,
  classes,
}: {
  students: Student[];
  classes: TeachingClass[];
}) {
  const [query, setQuery] = useState("");
  const [classId, setClassId] = useState<string>("all");
  const [status, setStatus] = useState<Student["status"] | "all">("all");

  const filtered = useMemo(() => {
    return students.filter((s) => {
      if (classId !== "all" && s.classId !== classId) return false;
      if (status !== "all" && s.status !== status) return false;
      if (query && !s.name.toLowerCase().includes(query.toLowerCase()) && !s.email.includes(query.toLowerCase())) return false;
      return true;
    });
  }, [students, classId, status, query]);

  const counts = {
    all: students.length,
    "Đang học": students.filter((s) => s.status === "Đang học").length,
    "Tạm nghỉ": students.filter((s) => s.status === "Tạm nghỉ").length,
    "Hoàn thành": students.filter((s) => s.status === "Hoàn thành").length,
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { key: "all" as const, label: "Tổng học viên", value: counts.all },
          { key: "Đang học" as const, label: "Đang học", value: counts["Đang học"] },
          { key: "Tạm nghỉ" as const, label: "Tạm nghỉ", value: counts["Tạm nghỉ"] },
          { key: "Hoàn thành" as const, label: "Hoàn thành", value: counts["Hoàn thành"] },
        ].map((c) => (
          <button
            key={c.key}
            onClick={() => setStatus(c.key)}
            className={`rounded-2xl border p-4 text-left transition-colors ${
              status === c.key
                ? "border-[var(--color-brand)] bg-[var(--color-brand-light)]"
                : "border-[var(--color-border)] bg-white hover:border-[var(--color-brand)]"
            }`}
          >
            <p className="font-display text-2xl font-extrabold text-[var(--color-ink)]">{c.value}</p>
            <p className="text-xs text-[var(--color-ink-soft)]">{c.label}</p>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-ink-soft)]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm theo tên hoặc email..."
            className="w-full rounded-full border border-[var(--color-border)] bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[var(--color-brand)]"
          />
        </div>
        <select
          value={classId}
          onChange={(e) => setClassId(e.target.value)}
          className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-brand)]"
        >
          <option value="all">Tất cả lớp học</option>
          {classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 overflow-x-auto rounded-3xl border border-[var(--color-border)] bg-white">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)] text-left text-xs uppercase tracking-wide text-[var(--color-ink-soft)]">
              <th className="px-5 py-3.5">Học viên</th>
              <th className="px-5 py-3.5">Lớp học</th>
              <th className="px-5 py-3.5">Tiến độ</th>
              <th className="px-5 py-3.5">Trạng thái</th>
              <th className="px-5 py-3.5">Tham gia</th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => {
              const klass = classes.find((c) => c.id === s.classId);
              return (
                <tr key={s.id} className="border-b border-[var(--color-border)] last:border-0">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand)]">
                        <User size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--color-ink)]">{s.name}</p>
                        <p className="text-xs text-[var(--color-ink-soft)]">{s.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-[var(--color-ink-soft)]">{klass?.name ?? "—"}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[var(--color-canvas-soft)]">
                        <div
                          className="h-full rounded-full bg-[var(--color-brand)]"
                          style={{ width: `${s.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-[var(--color-ink-soft)]">{s.progress}%</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge tone={statusTone[s.status]}>{s.status}</Badge>
                  </td>
                  <td className="px-5 py-3.5 text-[var(--color-ink-soft)]">{formatDateVn(s.joinedAt)}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-ink-soft)] hover:bg-[var(--color-brand-light)] hover:text-[var(--color-brand)]" aria-label="Gửi tin nhắn">
                        <MessageCircle size={15} />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-ink-soft)] hover:bg-[var(--color-brand-light)] hover:text-[var(--color-brand)]" aria-label="Gửi email">
                        <Mail size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="p-8 text-center text-sm text-[var(--color-ink-soft)]">
            Không tìm thấy học viên phù hợp.
          </p>
        )}
      </div>
    </div>
  );
}
