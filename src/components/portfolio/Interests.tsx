import { Palette, Code2, Layout, Sparkles } from "lucide-react";
import { Section } from "./Section";

const INTERESTS = [
  {
    name: "UI Design",
    Icon: Palette,
    text: "Crafting clean, balanced interfaces with thoughtful colour and type.",
  },
  {
    name: "Frontend Development",
    Icon: Code2,
    text: "Turning designs into responsive, accessible web experiences.",
  },
  {
    name: "Web Design",
    Icon: Layout,
    text: "Structuring layouts that stay clear on every screen size.",
  },
  {
    name: "User Experience (UX)",
    Icon: Sparkles,
    text: "Understanding how people move through a product and smoothing the path.",
  },
];

export function Interests() {
  return (
    <Section id="interests" eyebrow="Interests" title="What I love working on">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {INTERESTS.map(({ name, Icon, text }) => (
          <article
            key={name}
            className="surface-card tilt-card group flex h-full flex-col p-5"
          >
            <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-secondary text-accent transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
              <Icon size={18} />
            </span>
            <h3 className="mt-4 text-sm font-semibold leading-snug">{name}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
