import { PROCESS_STEPS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Process() {
  return (
    <section id="processo" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Como Trabalhamos"
          title="Do briefing ao"
          highlight="lançamento"
          description="Um processo transparente e colaborativo para entregar o melhor resultado."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal
                key={step.number}
                delay={index * 0.15}
                direction={isEven ? "left" : "right"}
              >
                <div
                  className={`relative flex items-start gap-6 lg:gap-12 mb-12 last:mb-0 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 pl-20 lg:pl-0 ${
                      isEven ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">
                      Etapa {step.number}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Node */}
                  <div className="absolute left-4 lg:relative lg:left-auto flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center glow-border">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
