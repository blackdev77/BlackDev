import type { Metadata } from "next";
import { VALUES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Sobre | BlackDev",
  description: "Conheça a história e os valores da BlackDev, agência de desenvolvimento web focada em performance e conversão em Luís Eduardo Magalhães.",
};

export default function AboutPage() {
  return (
    <>
      <div className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Quem Somos"
            title="Engenharia digital com"
            highlight="propósito."
            description="Nascemos da necessidade de profissionalizar a presença online das empresas locais com tecnologia de ponta e design estratégico."
            center={false}
          />

          <ScrollReveal delay={0.1}>
            <div className="relative border border-border bg-surface min-h-[400px] flex items-center justify-center mb-24 p-12">
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                 <div className="text-6xl font-serif text-text-primary mb-8">"</div>
                 <p className="text-2xl font-serif italic text-text-primary leading-relaxed mb-8">
                   Acreditamos que todo negócio, independente do tamanho, merece uma presença digital que transmita a mesma excelência dos seus produtos e serviços.
                 </p>
                 <div className="w-16 h-[1px] bg-border mx-auto mb-6" />
                 <span className="text-sm text-text-muted uppercase tracking-widest">Fundadores — BlackDev</span>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Values Section */}
          <div className="mb-20">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-12">Nossos Pilares</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border">
              {VALUES.map((value, index) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={value.title} delay={index * 0.1}>
                    <div className="p-8 h-full text-left group border-b lg:border-b-0 lg:border-r border-border last:border-r-0 last:border-b-0">
                      <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 group-hover:border-text-secondary transition-colors">
                        <Icon className="w-6 h-6 text-text-secondary group-hover:text-text-primary transition-colors" />
                      </div>
                      <h3 className="text-xl font-serif text-text-primary mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
      <CTASection />
    </>
  );
}
