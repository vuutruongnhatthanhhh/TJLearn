"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Eye,
  PlayCircle,
  Plus,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { type Course, type Video, formatDateVn } from "@/lib/data";

const thumbOptions = [
  "/images/misc/video-lesson.jpg",
  "/images/misc/webcam-recording.jpg",
  "/images/misc/code-screen.jpg",
  "/images/courses/web-dev.jpg",
  "/images/courses/ui-ux.jpg",
  "/images/courses/data-science.jpg",
];

type Filter = "all" | Video["status"];

const statusTone: Record<Video["status"], "mint" | "sun" | "neutral"> = {
  "Công khai": "mint",
  "Riêng tư": "neutral",
  "Đang xử lý": "sun",
};

export function VideosManager({
  initialVideos,
  courses,
}: {
  initialVideos: Video[];
  courses: Course[];
}) {
  const [videos, setVideos] = useState(initialVideos);
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [courseSlug, setCourseSlug] = useState(courses[0]?.slug ?? "");
  const [thumbnail, setThumbnail] = useState(thumbOptions[0]);
  const [visibility, setVisibility] = useState<Video["status"]>("Công khai");

  const filtered = videos.filter((v) => filter === "all" || v.status === filter);

  function handleUpload() {
    if (!title.trim()) return;
    const newVideo: Video = {
      id: `vid-${Date.now()}`,
      title: title.trim(),
      thumbnail,
      duration: "—:—",
      courseSlug,
      status: "Đang xử lý",
      uploadedAt: new Date().toISOString().slice(0, 10),
      views: 0,
    };
    setVideos([newVideo, ...videos]);
    setTitle("");
    setVisibility("Công khai");
    setOpen(false);
  }

  function handleDelete(id: string) {
    setVideos(videos.filter((v) => v.id !== id));
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {(["all", "Công khai", "Riêng tư", "Đang xử lý"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f
                  ? "bg-[var(--color-brand)] text-white"
                  : "border border-[var(--color-border)] bg-white text-[var(--color-ink-soft)] hover:text-[var(--color-brand)]"
              }`}
            >
              {f === "all" ? "Tất cả" : f}
            </button>
          ))}
        </div>
        <Button onClick={() => setOpen(true)}>
          <Plus size={16} /> Tải video mới
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((v) => {
          const course = courses.find((c) => c.slug === v.courseSlug);
          return (
            <div key={v.id} className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white">
              <div className="relative h-36 w-full">
                <Image src={v.thumbnail} alt={v.title} fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <PlayCircle size={30} className="text-white/90" />
                </div>
                <Badge tone={statusTone[v.status]} className="absolute left-3 top-3">{v.status}</Badge>
                <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  {v.duration}
                </span>
              </div>
              <div className="p-5">
                {course && <Badge tone="brand" className="mb-2">{course.category}</Badge>}
                <p className="font-display line-clamp-2 font-bold text-[var(--color-ink)]">{v.title}</p>
                <p className="mt-1 line-clamp-1 text-xs text-[var(--color-ink-soft)]">{course?.title}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-ink-soft)]">
                  <span>{formatDateVn(v.uploadedAt)}</span>
                  <span className="inline-flex items-center gap-1"><Eye size={13} /> {v.views.toLocaleString("vi-VN")}</span>
                </div>
                <div className="mt-4 flex items-center justify-end border-t border-[var(--color-border)] pt-3">
                  <button
                    onClick={() => handleDelete(v.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-ink-soft)] hover:bg-[var(--color-pink-light)] hover:text-[#c23768]"
                    aria-label="Xoá video"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-[var(--color-ink-soft)]">Chưa có video nào.</p>
      )}

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={() => setOpen(false)}>
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">Tải video mới</h3>
              <button onClick={() => setOpen(false)} aria-label="Đóng" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[var(--color-border)] bg-[var(--color-canvas-soft)] px-4 py-8 text-center">
                <UploadCloud size={28} className="text-[var(--color-brand)]" />
                <p className="text-sm font-semibold text-[var(--color-ink)]">Kéo thả hoặc chọn video để tải lên</p>
                <p className="text-xs text-[var(--color-ink-soft)]">MP4, MOV tối đa 2GB (minh hoạ)</p>
              </div>

              <div>
                <label className="text-xs font-semibold text-[var(--color-ink-soft)]">Tiêu đề video</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="VD: Buổi 5 — React Hooks nâng cao"
                  className="mt-1.5 w-full rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-brand)]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[var(--color-ink-soft)]">Thuộc khoá học</label>
                <select
                  value={courseSlug}
                  onChange={(e) => setCourseSlug(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-brand)]"
                >
                  {courses.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[var(--color-ink-soft)]">Ảnh thumbnail</label>
                <div className="mt-1.5 grid grid-cols-6 gap-2">
                  {thumbOptions.map((src) => (
                    <button
                      key={src}
                      onClick={() => setThumbnail(src)}
                      className={`relative aspect-square overflow-hidden rounded-lg ring-2 ${
                        thumbnail === src ? "ring-[var(--color-brand)]" : "ring-transparent"
                      }`}
                    >
                      <Image src={src} alt="thumbnail option" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[var(--color-ink-soft)]">Chế độ hiển thị</label>
                <div className="mt-1.5 flex gap-2">
                  {(["Công khai", "Riêng tư"] as Video["status"][]).map((v) => (
                    <button
                      key={v}
                      onClick={() => setVisibility(v)}
                      className={`flex-1 rounded-xl px-3 py-2 text-sm font-semibold ${
                        visibility === v ? "bg-[var(--color-brand)] text-white" : "bg-[var(--color-canvas-soft)] text-[var(--color-ink-soft)]"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button variant="secondary" className="flex-1" onClick={() => setOpen(false)}>
                Hủy
              </Button>
              <Button className="flex-1" onClick={handleUpload}>
                Tải lên
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
