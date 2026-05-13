import { PROCESS_STEPS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Process() {
  return (
    <section id="processo" className="py-24 lg:py-32 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Metodologia"
          title="Processo de"
          highlight="Engenharia"
          description="Do diagnóstico estratégico ao lançamento: transparência, rigor técnico e validação contínua."
          center={false}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {PROCESS_STEPS.map((step, index) => {
            return (
              <ScrollReveal
                key={step.number}
                delay={index * 0.15}
                className="flex flex-col relative group"
              >
                {/* Visual Connector */}
                <div className="hidden lg:block absolute top-8 left-[80%] right-[-20%] h-[1px] bg-border group-last:hidden" />
                
                {/* Large stroked number */}
                <div className="text-[5rem] lg:text-[7rem] font-serif leading-none text-transparent tracking-tighter select-none transition-colors duration-500 group-hover:text-text-primary/5" style={{ WebkitTextStroke: '1px var(--color-border)', color: 'transparent' }}>
                  {step.number}
                </div>
                
                <h3 className="mt-6 text-xl font-serif text-text-primary mb-3">
                  {step.title}
                </h3>
                
                <p className="text-base text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
