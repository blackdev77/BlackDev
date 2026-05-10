import { BENEFITS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Por que nos escolher"
          title="Tudo que seu negócio precisa"
          highlight="na web"
          description="Cada projeto é desenvolvido com foco em performance, conversão e resultados reais para o seu negócio."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={index * 0.1}>
                <div className="group p-6 lg:p-8 rounded-2xl glass glass-hover transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
