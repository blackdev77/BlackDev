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
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-full border border-accent/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
