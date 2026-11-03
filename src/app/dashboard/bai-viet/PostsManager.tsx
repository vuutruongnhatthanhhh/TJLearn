"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Eye,
  MessageSquare,
  Pencil,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { type Post, formatDateVn } from "@/lib/data";

const coverOptions = [
  "/images/misc/code-screen.jpg",
  "/images/misc/notes.jpg",
  "/images/misc/home-office.jpg",
  "/images/misc/study-group.jpg",
  "/images/misc/classroom.jpg",
  "/images/misc/library.jpg",
];

const tagOptions = ["Lập trình", "Thiết kế", "Dữ liệu", "AI", "Hướng nghiệp", "Marketing"];

type Filter = "all" | Post["status"];

export function PostsManager({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [tag, setTag] = useState(tagOptions[0]);
  const [cover, setCover] = useState(coverOptions[0]);
  const [publishNow, setPublishNow] = useState(true);

  const filtered = posts.filter((p) => filter === "all" || p.status === filter);

  function resetForm() {
    setTitle("");
    setExcerpt("");
    setTag(tagOptions[0]);
    setCover(coverOptions[0]);
    setPublishNow(true);
  }

  function handleCreate() {
    if (!title.trim()) return;
    const newPost: Post = {
      id: `post-${Date.now()}`,
      title: title.trim(),
      excerpt: excerpt.trim() || "Chưa có mô tả cho bài viết này.",
      content: "",
      cover,
      tag,
      status: publishNow ? "Đã đăng" : "Bản nháp",
      publishedAt: new Date().toISOString().slice(0, 10),
      views: 0,
      comments: 0,
      readTime: "3 phút đọc",
    };
    setPosts([newPost, ...posts]);
    resetForm();
    setOpen(false);
  }

  function handleDelete(id: string) {
    setPosts(posts.filter((p) => p.id !== id));
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {(["all", "Đã đăng", "Bản nháp"] as Filter[]).map((f) => (
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
          <Plus size={16} /> Viết bài mới
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white">
            <div className="relative h-36 w-full">
              <Image src={p.cover} alt={p.title} fill className="object-cover" />
              <Badge tone={p.status === "Đã đăng" ? "mint" : "sun"} className="absolute left-3 top-3">
                {p.status}
              </Badge>
            </div>
            <div className="p-5">
              <Badge tone="brand" className="mb-2">{p.tag}</Badge>
              <p className="font-display line-clamp-2 font-bold text-[var(--color-ink)]">{p.title}</p>
              <p className="mt-1 line-clamp-2 text-xs text-[var(--color-ink-soft)]">{p.excerpt}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-[var(--color-ink-soft)]">
                <span>{formatDateVn(p.publishedAt)}</span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1"><Eye size={13} /> {p.views.toLocaleString("vi-VN")}</span>
                  <span className="inline-flex items-center gap-1"><MessageSquare size={13} /> {p.comments}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-[var(--color-border)] pt-3">
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[var(--color-border)] py-2 text-xs font-semibold text-[var(--color-ink-soft)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]">
                  <Pencil size={13} /> Sửa
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-ink-soft)] hover:bg-[var(--color-pink-light)] hover:text-[#c23768]"
                  aria-label="Xoá bài viết"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-[var(--color-ink-soft)]">Chưa có bài viết nào.</p>
      )}

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={() => setOpen(false)}>
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">Viết bài mới</h3>
              <button onClick={() => setOpen(false)} aria-label="Đóng" className="text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]">
                <X size={20} />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-[var(--color-ink-soft)]">Tiêu đề</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="VD: 5 mẹo học React hiệu quả hơn"
                  className="mt-1.5 w-full rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-brand)]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[var(--color-ink-soft)]">Mô tả ngắn</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  placeholder="Mô tả ngắn thu hút học viên click vào đọc..."
                  className="mt-1.5 w-full resize-none rounded-xl border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-brand)]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-[var(--color-ink-soft)]">Chủ đề</label>
                <div className="mt-1.5 flex flex-wrap gap-2">
                  {tagOptions.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTag(t)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        tag === t ? "bg-[var(--color-brand)] text-white" : "bg-[var(--color-canvas-soft)] text-[var(--color-ink-soft)]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[var(--color-ink-soft)]">Ảnh bìa</label>
                <div className="mt-1.5 grid grid-cols-6 gap-2">
                  {coverOptions.map((src) => (
                    <button
                      key={src}
                      onClick={() => setCover(src)}
                      className={`relative aspect-square overflow-hidden rounded-lg ring-2 ${
                        cover === src ? "ring-[var(--color-brand)]" : "ring-transparent"
                      }`}
                    >
                      <Image src={src} alt="cover option" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-[var(--color-canvas-soft)] px-4 py-3">
                <span className="text-sm font-semibold text-[var(--color-ink)]">Đăng ngay</span>
                <button
                  onClick={() => setPublishNow(!publishNow)}
                  className={`h-6 w-11 rounded-full transition-colors ${
                    publishNow ? "bg-[var(--color-brand)]" : "bg-[var(--color-border)]"
                  }`}
                >
                  <span
                    className={`block h-5 w-5 translate-x-0.5 rounded-full bg-white transition-transform ${
                      publishNow ? "translate-x-5" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button variant="secondary" className="flex-1" onClick={() => setOpen(false)}>
                Hủy
              </Button>
              <Button className="flex-1" onClick={handleCreate}>
                {publishNow ? "Đăng bài" : "Lưu bản nháp"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
