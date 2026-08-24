import { Presentation } from "lucide-react";
import { Section } from "./Section";

const WORKSHOPS = [
  {
    title: "National Workshop on MERN Stack Development",
    org: "Jamal Mohamed College & Holy Cross College",
    date: "June 2026",
    text: "Built a full-stack app end to end with MongoDB, Express, React and Node.",
  },
  {
    title: "Mathematics Olympiad (Inter-Collegiate Meet)",
    org: "St. Joseph's College, Tiruchirappalli",
    date: "2023",
    text: "Solved timed competitive problem sets on logic, algebra and number theory.",
  },
];

export function Workshops() {
  return (
    <Section id="workshops" eyebrow="Workshops" title="Hands-on learning">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WORKSHOPS.map((w) => (
          <article
            key={w.title}
            className="surface-card flex h-full flex-col p-5 transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-secondary text-teal">
              <Presentation size={18} />
            </span>
            <h3 className="mt-4 text-sm font-semibold leading-snug">{w.title}</h3>
            <p className="mt-1.5 text-xs font-medium text-accent">
              {w.org} · {w.date}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{w.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
