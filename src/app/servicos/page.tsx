import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Serviços | BlackDev",
  description: "Conheça nossas soluções completas em desenvolvimento web: sites institucionais, landing pages, sistemas web e manutenção.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-96 bg-accent/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Nossos Serviços"
            title="Soluções sob medida para"
            highlight="seu negócio"
            description="Entregamos muito mais que código. Entregamos plataformas focadas em resultados, performance e escalabilidade."
          />

          <div className="mt-16 space-y-20 lg:space-y-32">
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
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-lg text-text-secondary leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-4">
                        O que está incluso:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                            <span className="text-text-secondary text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual Placeholder */}
                    <div className={`relative h-64 sm:h-80 lg:h-full min-h-[300px] rounded-3xl glass overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Icon className="w-32 h-32 text-accent/10" />
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
