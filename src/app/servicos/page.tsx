import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Serviços | BlackDev",
  description: "Conheça nossas soluções completas em desenvolvimento web: sites institucionais, landing pages, sistemas web e manutenção.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Frentes de Atuação"
            title="Soluções sob medida para"
            highlight="seu negócio."
            description="Entregamos muito mais que código. Entregamos plataformas focadas em resultados, performance e escalabilidade."
            center={false}
          />

          <div className="mt-16 space-y-24 lg:space-y-32">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal 
                  key={service.slug}
                  direction={isEven ? "left" : "right"}
                >
                  <div id={service.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-28`}>
                    
                    {/* Content */}
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <div className="w-14 h-14 border border-border flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-text-secondary" />
                      </div>
                      <h2 className="text-3xl font-serif text-text-primary mb-4">{service.title}</h2>
                      <p className="text-lg text-text-secondary leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <h3 className="text-sm font-mono uppercase tracking-widest text-text-muted mb-6">
                        [O que está incluso]
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="w-1 h-1 bg-text-secondary mt-2.5 shrink-0" />
                            <span className="text-text-secondary text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual Placeholder */}
                    <div className={`relative h-64 sm:h-80 lg:h-full min-h-[300px] border border-border bg-surface overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Icon className="w-32 h-32 text-border" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}
