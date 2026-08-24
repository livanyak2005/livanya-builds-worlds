import type { ReactNode } from "react";
import { useReveal } from "./hooks";

export function Section({
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
