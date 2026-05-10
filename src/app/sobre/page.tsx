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
      {/* Hero Section */}
      <div className="py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Nossa História"
            title="Desenvolvendo o futuro digital de"
            highlight="Luís Eduardo Magalhães"
            description="Nascemos da necessidade de profissionalizar a presença online das empresas locais com tecnologia de ponta."
          />

          <ScrollReveal delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center bg-secondary mb-20 border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
              <div className="relative z-10 text-center p-8">
                 <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                   <span className="text-3xl font-bold text-accent">B</span>
                 </div>
                 <h3 className="text-2xl font-bold text-text-primary mb-4">Inovação e Qualidade</h3>
                 <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                   "Acreditamos que todo negócio, independente do tamanho, merece um site 
                   rápido, bonito e que realmente traga clientes."
                 </p>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Nossos Pilares</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((value, index) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={value.title} delay={index * 0.1}>
                    <div className="p-8 rounded-2xl glass h-full text-center group">
                      <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-text-primary mb-3">
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
