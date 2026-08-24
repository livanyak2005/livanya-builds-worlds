import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";

type Certification = {
  name: string;
  org: string;
  date: string;
  url?: string;
};

const CERTIFICATIONS: Certification[] = [
  { name: "Java Programming", org: "Kalaimagal Computers", date: "2026" },
  { name: "PGDCA", org: "Apollo Computer Education Ltd.", date: "2025" },
  { name: "Soft Skills", org: "Unnathi Foundation", date: "2025" },
  {
    name: "Typewriting — English & Tamil (Junior & Senior)",
    org: "First Class with Distinction",
    date: "2022",
  },
  {
    name: "Intel Easy Steps Basic Course",
    org: "Intel & Digital Empowerment Foundation",
    date: "2023",
  },
  {
    name: "Certificate of Merit in Mathematics",
    org: "Dr. Kalaignar Government Arts College",
    date: "2024",
  },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials I've earned">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c) => (
          <article
            key={c.name}
            className="surface-card flex h-full flex-col p-5 transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-secondary text-accent">
              <Award size={18} />
            </span>
            <h3 className="mt-4 text-sm font-semibold leading-snug">{c.name}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">
              {c.org} · {c.date}
            </p>
            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
              >
                View Certificate <ExternalLink size={13} />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
