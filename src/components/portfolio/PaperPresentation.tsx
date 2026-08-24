import { Sparkles, FileText } from "lucide-react";
import { useReveal } from "./hooks";

export function PaperPresentation() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      id="paper"
      ref={ref}
      data-visible={visible}
      className="reveal mx-auto w-full max-w-6xl px-5 py-12 md:py-16"
    >
      <article className="gradient-hero relative overflow-hidden rounded-3xl p-7 text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-[1.01] md:p-10">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[image:var(--gradient-accent)] opacity-25 blur-2xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            <Sparkles size={13} /> Featured
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
            Paper Presentation
          </p>
          <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-snug md:text-4xl">
            Next Gen AI: Innovations and Impacts for Shaping the Future
          </h2>
          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-primary-foreground/85">
            <FileText size={15} /> National Level Conference, Holy Cross College · 2025
          </p>
          <p className="mt-5 max-w-2xl text-primary-foreground/75">
            Presented research on emerging AI innovations and their real-world impact across
            education, healthcare and industry — covering both opportunities and ethical risks.
          </p>
        </div>
      </article>
    </section>
  );
}
