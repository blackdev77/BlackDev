import ScrollReveal from "@/components/ui/ScrollReveal";

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <ScrollReveal className={`mb-12 lg:mb-16 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block text-text-muted font-mono text-sm uppercase tracking-[0.2em] mb-6">
          [{badge}]
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[3.5rem] font-serif leading-[1.1] text-text-primary">
        {title}{" "}
        {highlight && <span className="italic text-text-secondary">{highlight}</span>}
      </h2>
      {description && (
        <p className={`mt-6 text-text-secondary text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
