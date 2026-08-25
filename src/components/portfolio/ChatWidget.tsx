import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Faq = {
  key: string;
  label: string;
  keywords: string[];
  answer: string;
};

const FAQS: Faq[] = [
  {
    key: "education",
    label: "Education",
    keywords: ["education", "study", "college", "degree", "mca", "school", "bsc", "maths", "math", "academic", "cgpa", "sgpa"],
    answer:
      "Livanya is pursuing an MCA at Holy Cross College (2025–2027), after a Bachelor of Mathematics at Dr. Kalaignar Government Arts College (2022–2025). She also completed a PGDCA at Apollo Computer Education Ltd.",
  },
  {
    key: "internships",
    label: "Internships",
    keywords: ["internship", "intern", "experience", "work", "iot", "data", "analytics", "hcciict", "t4teq", "job"],
    answer:
      "Two internships: Internet of Things at HCCIICT (2025), building sensor-driven prototypes, and Data Analytics at T4TEQ Software Solutions (2026), cleaning and visualising datasets into business insights.",
  },
  {
    key: "skills",
    label: "Skills",
    keywords: ["skill", "tech", "language", "programming", "c", "html", "php", "java", "mysql", "tally", "office", "typing", "teamwork", "time"],
    answer:
      "Technical: C, HTML, PHP, MySQL, Java, MS Office and Tally. Soft skills: Teamwork, Time Management and Typing (certified typist in English and Tamil, First Class with Distinction).",
  },
  {
    key: "projects",
    label: "Projects",
    keywords: ["project", "portal", "placement", "built", "github", "work sample", "training"],
    answer:
      "Main project: the Placement Training Portal — a web portal for colleges to organise placement training, manage student batches and track assessment progress. Built with HTML, PHP and MySQL. The Projects section has the GitHub link.",
  },
  {
    key: "certifications",
    label: "Certifications",
    keywords: ["certificate", "certification", "course", "workshop", "paper", "presentation", "award", "merit"],
    answer:
      "Certifications include Java Programming, PGDCA, Soft Skills, Typewriting (English & Tamil), Intel Easy Steps and a Certificate of Merit in Mathematics — plus workshops and a featured paper presentation. Scroll to those sections for details.",
  },
  {
    key: "contact",
    label: "Contact",
    keywords: ["contact", "email", "phone", "reach", "hire", "linkedin", "github", "mail", "call", "location"],
    answer:
      "You can reach Livanya at livanya15@gmail.com or 9159522785. She's based in Tiruchirappalli, Tamil Nadu, India — LinkedIn and GitHub links are in the Contact section.",
  },
  {
    key: "resume",
    label: "Resume",
    keywords: ["resume", "cv", "download", "pdf"],
    answer: "The 'View Resume' button in the hero section opens her resume PDF in a new tab.",
  },
  {
    key: "about",
    label: "About",
    keywords: ["about", "who", "yourself", "introduce", "hello", "hi", "hey", "background"],
    answer:
      "I'm Livanya K, a Mathematics graduate now pursuing my Master of Computer Applications at Holy Cross College. Along the way I've done internships in Internet of Things and Data Analytics, learning to turn raw signals and datasets into something people can actually use. Today I focus on building clean, functional web applications — logical structure from my maths background, careful detail from my design interest.",
  },
  {
    key: "interests",
    label: "Interests",
    keywords: ["interest", "interests", "hobby", "passionate", "ui design", "ux", "frontend", "web design"],
    answer: "I'm passionate about UI Design, Frontend Development, Web Design, and User Experience (UX).",
  },
];

const QUICK = ["Education", "Internships", "Skills", "Projects", "About", "Interests", "Contact"];

type Msg = { from: "bot" | "user"; text: string };

function matchAnswer(input: string): string {
  const q = input.toLowerCase();
  let best: { faq: Faq; score: number } | null = null;
  for (const faq of FAQS) {
    let score = 0;
    for (const k of faq.keywords) {
      if (q.includes(k)) score += k.length;
    }
    if (score > 0 && (!best || score > best.score)) best = { faq, score };
  }
  if (best) return best.faq.answer;
  return "I'm not sure about that one — try asking about Education, Internships, Skills, Projects, Certifications or Contact.";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Hi there! I'm Livanya's assistant. Ask me anything about her education, internships, skills, projects or contact details.",
    },
  ]);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, open]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((prev) => [...prev, { from: "user", text: clean }, { from: "bot", text: matchAnswer(clean) }]);
    setInput("");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="surface-card flex h-[26rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[var(--shadow-lift)]">
          <div className="gradient-hero px-4 py-3 text-primary-foreground">
            <p className="text-sm font-semibold">Ask about Livanya</p>
            <p className="text-xs text-primary-foreground/70">FAQ assistant · instant answers</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                  m.from === "bot"
                    ? "bg-secondary text-secondary-foreground"
                    : "ml-auto bg-primary text-primary-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border px-3 py-2.5">
            {QUICK.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="rounded-full border border-border px-3 py-1.5 text-[11px] font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                {q}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-border p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              aria-label="Type your question"
              className="w-full rounded-full border border-input bg-background px-3.5 py-2 text-xs outline-none transition-colors focus:border-accent"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
