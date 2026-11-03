"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { teacher } from "@/lib/data";

interface ChatMessage {
  id: string;
  from: "bot" | "user";
  text: string;
}

interface QuickQuestion {
  question: string;
  keywords: string[];
  answer: string;
}

const quickQuestions: QuickQuestion[] = [
  {
    question: "Khoá học nào đang miễn phí?",
    keywords: ["miễn phí", "free", "không mất phí", "0đ"],
    answer:
      "TJLearn hiện có 4 khoá học miễn phí 100%: Marketing Số từ A-Z, Tiếng Anh Giao Tiếp cho IT, Excel & Google Sheet công sở, và Sản Xuất Nhạc Số Cơ Bản. Bạn vào mục \"Khoá học\" rồi lọc theo tab \"Miễn phí\" nhé!",
  },
  {
    question: "Làm sao để xem thử bài học?",
    keywords: ["xem thử", "demo", "dùng thử", "trial", "preview"],
    answer:
      "Vào trang chi tiết khoá học, trong phần \"Nội dung khoá học\" những bài có nhãn màu cam \"XEM THỬ\" bạn có thể bấm nút play để xem ngay, không cần đăng ký trước.",
  },
  {
    question: "Học phí thanh toán thế nào?",
    keywords: ["học phí", "giá", "thanh toán", "bao nhiêu tiền", "chi phí"],
    answer:
      "Giá của từng khoá học được hiển thị ngay trên trang khoá học (một số khoá đang giảm giá so với giá gốc). Đây là bản demo giao diện nên luồng thanh toán thật chưa được tích hợp.",
  },
  {
    question: "Lớp học tiếp theo khai giảng khi nào?",
    keywords: ["khai giảng", "lớp học", "lịch học", "khi nào học"],
    answer:
      "Bạn có thể xem lịch khai giảng và sĩ số từng lớp tại trang \"Giảng viên\", mục \"Lớp học đang mở\". Ví dụ gần nhất: UI/UX Sprint K8 khai giảng 21/11/2026.",
  },
  {
    question: "Học xong có chứng nhận không?",
    keywords: ["chứng nhận", "chứng chỉ", "certificate"],
    answer:
      "Có nhé! Mỗi khoá học tại TJLearn đều có chứng nhận hoàn thành sau khi bạn học hết các bài giảng trong khoá.",
  },
  {
    question: "Làm sao liên hệ giảng viên?",
    keywords: ["liên hệ", "giảng viên", "hỗ trợ", "hotline", "email"],
    answer:
      `Bạn có thể xem thêm thông tin tại trang "Giảng viên", hoặc liên hệ qua email hotro@tjlearn.vn / hotline 1900 6868. ${teacher.name} và đội ngũ luôn sẵn sàng hỗ trợ!`,
  },
];

const fallbackAnswer =
  "Mình chưa chắc chắn về câu này. Bạn thử chọn một trong các câu hỏi gợi ý bên dưới, hoặc liên hệ hotro@tjlearn.vn để được hỗ trợ trực tiếp nhé!";

const greeting: ChatMessage = {
  id: "greeting",
  from: "bot",
  text: "Chào bạn 👋 Mình là trợ lý ảo của TJLearn. Bạn muốn hỏi gì về khoá học, lớp học hay học phí không?",
};

function findAnswer(input: string) {
  const normalized = input.toLowerCase();
  const match = quickQuestions.find((q) =>
    q.keywords.some((k) => normalized.includes(k)),
  );
  return match?.answer ?? fallbackAnswer;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([greeting]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [askedIds, setAskedIds] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setShowTeaser(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  function nextId(prefix: string) {
    idCounter.current += 1;
    return `${prefix}-${idCounter.current}`;
  }

  function sendMessage(text: string, id?: string) {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { id: nextId("u"), from: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    if (id) setAskedIds((prev) => [...prev, id]);
    setTyping(true);

    setTimeout(() => {
      const answer = findAnswer(text);
      setMessages((prev) => [...prev, { id: nextId("b"), from: "bot", text: answer }]);
      setTyping(false);
    }, 850);
  }

  const remainingQuestions = quickQuestions.filter(
    (q) => !askedIds.includes(q.question),
  );

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3">
      {!open && showTeaser && (
        <button
          onClick={() => {
            setOpen(true);
            setShowTeaser(false);
          }}
          className="animate-fade-up flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-ink)] shadow-[var(--shadow-pop)]"
        >
          Cần hỗ trợ? Chat với mình nhé! 👋
          <X
            size={14}
            className="text-[var(--color-ink-soft)]"
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
          />
        </button>
      )}

      {open && (
        <div className="flex h-[32rem] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between gap-3 bg-[var(--color-brand)] px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                <Bot size={18} />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Trợ lý TJLearn</p>
                <p className="flex items-center gap-1.5 text-xs text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)]" /> Đang hoạt động
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 hover:bg-white/15 hover:text-white"
              aria-label="Đóng chat"
            >
              <X size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-[var(--color-canvas-soft)] px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === "user"
                      ? "rounded-br-sm bg-[var(--color-brand)] text-white"
                      : "rounded-bl-sm bg-white text-[var(--color-ink)] shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--color-ink-soft)]"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {!typing && remainingQuestions.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {remainingQuestions.slice(0, 3).map((q) => (
                  <button
                    key={q.question}
                    onClick={() => sendMessage(q.question, q.question)}
                    className="inline-flex items-center gap-1 rounded-full border border-[var(--color-brand)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-brand)] hover:bg-[var(--color-brand-light)]"
                  >
                    <Sparkles size={11} /> {q.question}
                  </button>
                ))}
              </div>
            )}

            <p className="pt-2 text-center text-[10px] text-[var(--color-ink-soft)]">
              Trợ lý demo trả lời theo kịch bản có sẵn ·{" "}
              <Link href="/giang-vien" className="underline">
                Xem trang giảng viên
              </Link>
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 border-t border-[var(--color-border)] p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 rounded-full border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-brand)]"
            />
            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)] disabled:opacity-40"
              disabled={!input.trim()}
              aria-label="Gửi"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => {
          setOpen((v) => !v);
          setShowTeaser(false);
        }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand)] text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
        aria-label={open ? "Đóng chat" : "Mở chat hỗ trợ"}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
