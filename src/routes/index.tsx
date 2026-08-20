import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  Menu,
  X,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { useReveal, useTyping } from "@/components/portfolio/hooks";
import profileAsset from "@/assets/livanya.jpg.asset.json";
import workspaceImg from "@/assets/workspace.jpg";
import projectImg from "@/assets/project-placement.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Livanya K — MCA Student & Aspiring Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Livanya K, MCA student and aspiring web developer / UI-UX designer with internship experience in IoT and Data Analytics.",
      },
      { property: "og:title", content: "Livanya K — MCA Student & Aspiring Web Developer" },
      {
        property: "og:description",
        content:
          "Education, internships, projects, certifications and skills of Livanya K, MCA student at Holy Cross College.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  ["About", "about"],
  ["Education", "education"],
  ["Internships", "internships"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Skills", "skills"],
  ["Contact", "contact"],
] as const;

const EDUCATION = [
  {
    title: "Master of Computer Applications (MCA)",
    place: "Holy Cross College",
    period: "2025 – 2027",
    score: "SGPA 7.65",
  },
  {
    title: "Bachelor of Mathematics",
    place: "Dr. Kalaignar Government Arts College",
    period: "2022 – 2025",
    score: "CGPA 8.19",
  },
  {
    title: "PGDCA",
    place: "Apollo Computer Education Ltd.",
    period: "2025",
    score: "Completed",
  },
  {
    title: "HSC",
    place: "Amala Girl's Higher Secondary School",
    period: "",
    score: "78%",
  },
  {
    title: "SSLC",
    place: "Amala Girl's Higher Secondary School",
    period: "",
    score: "76%",
  },
];

const INTERNSHIPS = [
  {
    role: "Internet of Things",
    org: "HCCIICT",
    year: "2025",
    text: "Built sensor-driven prototypes and learned how connected devices capture and transmit real-time data.",
  },
  {
    role: "Data Analytics",
    org: "T4TEQ Software Solutions",
    year: "2026",
    text: "Cleaned, analysed and visualised datasets to turn raw records into readable business insights.",
  },
];

const CERTS = [
  {
    title: "National Workshop on MERN Stack Development",
    meta: "Jamal Mohamed College & Holy Cross College · June 2026",
  },
  { title: "Java", meta: "Kalaimagal Computers · 2026" },
  { title: "PGDCA", meta: "Apollo Computer Education Ltd. · 2025" },
  { title: "Soft Skills", meta: "Unnathi Foundation" },
  {
    title: 'Paper Presentation — "Next Gen AI: Innovations and Impacts for Shaping the Future"',
    meta: "Holy Cross College · 2025",
  },
  {
    title: "Typewriting — English & Tamil (Junior & Senior)",
    meta: "First Class with Distinction",
  },
  {
    title: "Intel Easy Steps Basic Course",
    meta: "Intel & Digital Empowerment Foundation",
  },
  {
    title: "Mathematics Olympiad 2023 (Inter-Collegiate Meet)",
    meta: "St. Joseph's College, Tiruchirappalli",
  },
  { title: "Certification of Merit in Mathematics", meta: "Achievement" },
];

const TECH_SKILLS = [
  { name: "C", level: 80 },
  { name: "HTML", level: 88 },
  { name: "PHP", level: 72 },
  { name: "MySQL", level: 78 },
  { name: "Java", level: 70 },
  { name: "MS Office", level: 90 },
  { name: "Tally", level: 68 },
];

const SOFT_SKILLS = ["Teamwork", "Time Management", "Typing"];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      data-visible={visible}
      className="reveal mx-auto w-full max-w-6xl px-5 py-20 md:py-28"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-background/85 shadow-[var(--shadow-soft)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        <a href="#hero" className="min-w-0 truncate font-display text-lg font-bold">
          Livanya<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {NAV.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-md border border-border p-2 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 pb-4 md:hidden">
          {NAV.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-accent"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Socials({ tone = "light" }: { tone?: "light" | "dark" }) {
  const base =
    tone === "light"
      ? "border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/15"
      : "border-border text-foreground hover:border-accent hover:text-accent";
  const items = [
    { href: "https://www.linkedin.com/in/livanya15", label: "LinkedIn", Icon: Linkedin },
    { href: "https://github.com/livanyak2005", label: "GitHub", Icon: Github },
    { href: "mailto:livanya15@gmail.com", label: "Email", Icon: Mail },
  ];
  return (
    <div className="flex items-center gap-3">
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`rounded-full border p-2.5 transition-all duration-300 hover:-translate-y-1 ${base}`}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}

function Hero() {
  const typed = useTyping([
    "MCA Student",
    "Web Developer",
    "UI/UX Designer",
    "Data Analytics Enthusiast",
  ]);

  return (
    <section id="hero" className="gradient-hero relative overflow-hidden text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-32 md:grid-cols-[1.2fr_auto] md:pb-32 md:pt-40">
        <div className="min-w-0">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/70">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Livanya K</h1>
          <p className="mt-4 text-lg font-medium md:text-xl">
            <span className="caret pr-1">{typed}</span>
          </p>
          <p className="mt-5 max-w-xl text-primary-foreground/75">
            MCA student passionate about building clean, functional web experiences — from thoughtful
            interfaces to data that tells a story.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume-livanya-k.txt"
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-1"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-primary-foreground/10"
            >
              Contact Me <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-8">
            <Socials />
          </div>
        </div>
        <div className="justify-self-center">
          <div className="rounded-full bg-gradient-to-br from-accent to-teal p-1.5 shadow-[var(--shadow-lift)]">
            <img
              src={profileAsset.url}
              alt="Portrait of Livanya K"
              width={320}
              height={320}
              className="h-56 w-56 rounded-full object-cover object-top md:h-72 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <form onSubmit={onSubmit} className="surface-card space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input
            required
            name="name"
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            required
            type="email"
            name="email"
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
          />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="mt-1.5 w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
      >
        Send Message <ArrowRight size={16} />
      </button>
      {sent && (
        <p className="text-sm font-medium text-teal">
          Thanks! Your message is noted — reach out directly at livanya15@gmail.com for a faster reply.
        </p>
      )}
    </form>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm font-medium">
        <span>{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-[image:var(--gradient-accent)] transition-[width] duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" eyebrow="About Me" title="A mathematician turned developer">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Livanya K, a Mathematics graduate now pursuing my Master of Computer Applications
                at Holy Cross College.
              </p>
              <p>
                Along the way I've picked up hands-on internship experience in the Internet of Things
                and Data Analytics, where I learned to move from raw signals and datasets to
                something people can actually use.
              </p>
              <p>
                Today I focus on building clean, functional web applications — logical structure from
                my maths background, careful detail from my design interest.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Web Development", "UI/UX", "Data Analytics", "Problem Solving"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={workspaceImg}
              alt="Illustration of a coding workspace with a laptop and plants"
              loading="lazy"
              width={1024}
              height={768}
              className="w-full rounded-2xl border border-border shadow-[var(--shadow-soft)]"
            />
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Academic journey">
          <ol className="relative space-y-8 border-l border-border pl-6 md:pl-8">
            {EDUCATION.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[1.9rem] top-1.5 grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground md:-left-[2.4rem]">
                  <GraduationCap size={13} />
                </span>
                <div className="surface-card p-5">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <h3 className="min-w-0 text-base font-semibold md:text-lg">{item.title}</h3>
                    <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {item.score}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.place}
                    {item.period ? ` · ${item.period}` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="internships" eyebrow="Internships" title="Where I've worked">
          <div className="grid gap-6 md:grid-cols-2">
            {INTERNSHIPS.map((item) => (
              <article key={item.role} className="surface-card p-6">
                <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                  <Briefcase size={18} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.org} · {item.year}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Things I've built">
          <article className="surface-card overflow-hidden md:grid md:grid-cols-2">
            <img
              src={projectImg}
              alt="Placement Training Portal dashboard mockup"
              loading="lazy"
              width={1200}
              height={800}
              className="h-56 w-full object-cover object-left-top md:h-full"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-semibold">Placement Training Portal</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                A web portal that helps colleges organise placement training — managing student
                batches, tracking assessment progress and keeping training resources in one place.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["HTML", "PHP", "MySQL"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/livanyak2005/placement-training"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-1"
              >
                <Github size={16} /> View on GitHub <ExternalLink size={14} />
              </a>
            </div>
          </article>
        </Section>

        <Section id="certifications" eyebrow="Workshops & Certifications" title="Learning beyond class">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTS.map((c) => (
              <article key={c.title} className="surface-card p-5">
                <span className="inline-grid h-9 w-9 place-items-center rounded-lg bg-secondary text-accent">
                  <Award size={17} />
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{c.meta}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="What I work with">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-5">
              {TECH_SKILLS.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
            <div className="surface-card h-fit p-6">
              <h3 className="text-base font-semibold">Soft Skills</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {SOFT_SKILLS.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Certified typist in English and Tamil (First Class with Distinction), comfortable
                collaborating in teams and delivering on schedule.
              </p>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's work together">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-card space-y-5 p-6">
              <a href="tel:9159522785" className="flex items-center gap-3 text-sm hover:text-accent">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Phone size={17} />
                </span>
                9159522785
              </a>
              <a
                href="mailto:livanya15@gmail.com"
                className="flex items-center gap-3 text-sm hover:text-accent"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <Mail size={17} />
                </span>
                livanya15@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                  <MapPin size={17} />
                </span>
                Tiruchirappalli, Tamil Nadu, India
              </div>
              <Socials tone="dark" />
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="gradient-hero text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-8">
          <p className="min-w-0 text-sm text-primary-foreground/75">
            © {new Date().getFullYear()} Livanya K. All rights reserved.
          </p>
          <Socials />
        </div>
      </footer>
    </div>
  );
}
