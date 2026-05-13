import { BENEFITS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="col-span-1 lg:col-span-5 lg:sticky lg:top-32 self-start">
            <SectionTitle
              badge="Princípios"
              title="A fundação da nossa arquitetura"
              highlight="tecnológica."
              description="Não entregamos templates. Cada linha de código e decisão de design tem um único objetivo: elevar a percepção do seu negócio no mercado e converter visitantes."
              center={false}
            />
          </div>

          <div className="col-span-1 lg:col-span-7 flex flex-col gap-0">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={benefit.title} delay={index * 0.1}>
                  <div className="group border-t border-border py-8 lg:py-12 transition-colors hover:border-text-secondary flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    <div className="text-text-muted font-mono text-sm uppercase tracking-widest pt-1 shrink-0 w-8">
                      0{index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif text-text-primary mb-4 flex items-center gap-4">
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
                        {benefit.description}
                      </p>
                    </div>
                    <div className="hidden md:flex shrink-0 w-12 h-12 border border-border items-center justify-center group-hover:border-text-primary transition-colors">
                      <Icon className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
            <div className="border-t border-border w-full" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
