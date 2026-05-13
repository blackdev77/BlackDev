import { ArrowRight } from "lucide-react";
import WhatsAppDropdown from "@/components/ui/WhatsAppDropdown";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-24 relative bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative border border-border bg-surface px-6 py-20 lg:py-32 text-center flex flex-col items-center justify-center transition-colors hover:border-text-secondary">
            
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] mb-6 text-text-primary tracking-tight">
              Pronto para elevar o <br className="hidden md:block" />
              <span className="italic text-text-secondary">nível da sua marca?</span>
            </h2>
            
            <p className="text-text-secondary max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Inicie um diálogo técnico com nossa equipe. Vamos estruturar a melhor solução de engenharia para os objetivos do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto">
              <WhatsAppDropdown position="top" align="center" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-primary font-medium transition-all hover:bg-accent-hover outline-none"
                >
                  Iniciar Diagnóstico
                </button>
              </WhatsAppDropdown>
              <a
                href="mailto:contato@blackdev.com.br"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-text-primary font-medium transition-all hover:border-text-secondary"
              >
                Enviar E-mail
                <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
