"use client";

import { useState } from "react";
import { ChevronDown, Lock, PlayCircle, X } from "lucide-react";
import { type CourseSection } from "@/lib/data";

export function CurriculumSection({
  curriculum,
  courseTitle,
}: {
  curriculum: CourseSection[];
  courseTitle: string;
}) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div>
      <div className="space-y-3">
        {curriculum.map((section, i) => (
          <div
            key={section.title}
            className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
            >
              <div>
                <p className="font-display font-bold text-[var(--color-ink)]">
                  Phần {i + 1}: {section.title}
                </p>
                <p className="text-xs text-[var(--color-ink-soft)]">
                  {section.lessons.length} bài học
                </p>
              </div>
              <ChevronDown
                size={18}
                className={`shrink-0 text-[var(--color-ink-soft)] transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === i && (
              <div className="border-t border-[var(--color-border)]">
                {section.lessons.map((lesson) => (
                  <div
                    key={lesson.title}
                    className="flex items-center justify-between gap-3 px-5 py-3.5 text-sm odd:bg-[var(--color-canvas-soft)]/50"
                  >
                    <div className="flex items-center gap-3">
                      {lesson.preview ? (
                        <button
                          onClick={() => setPlaying(lesson.title)}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-light)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white"
                          aria-label="Xem thử"
                        >
                          <PlayCircle size={16} />
                        </button>
                      ) : (
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-canvas-soft)] text-[var(--color-ink-soft)]">
                          <Lock size={14} />
                        </span>
                      )}
                      <span className="font-medium text-[var(--color-ink)]">{lesson.title}</span>
                      {lesson.preview && (
                        <span className="rounded-full bg-[var(--color-accent-light)] px-2 py-0.5 text-[10px] font-bold text-[#b85a1e]">
                          XEM THỬ
                        </span>
                      )}
                    </div>
                    <span className="shrink-0 text-xs text-[var(--color-ink-soft)]">
                      {lesson.duration}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setPlaying(null)}
        >
          <div
            className="w-full max-w-2xl overflow-hidden rounded-3xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3">
              <p className="text-sm font-semibold text-white">{courseTitle}</p>
              <button
                onClick={() => setPlaying(null)}
                className="text-white/70 hover:text-white"
                aria-label="Đóng"
              >
                <X size={18} />
              </button>
            </div>
            <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-ink)]">
              <div className="flex flex-col items-center gap-3 text-white">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <PlayCircle size={34} />
                </span>
                <p className="px-6 text-center text-sm font-semibold">{playing}</p>
                <p className="text-xs text-white/60">Video minh hoạ cho bản demo giao diện</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
