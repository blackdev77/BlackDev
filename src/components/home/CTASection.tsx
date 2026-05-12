import { ArrowRight, MessageCircle } from "lucide-react";
import WhatsAppDropdown from "@/components/ui/WhatsAppDropdown";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-bg" />
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay" />
            
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 px-6 py-16 md:py-20 lg:py-24 text-center glass border-none">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Pronto para transformar sua <br className="hidden md:block" />
                <span className="gradient-text">presença digital?</span>
              </h2>
              
              <p className="text-text-secondary max-w-2xl mx-auto mb-10 text-lg">
                Entre em contato agora mesmo para um orçamento sem compromisso. 
                Nossa equipe está pronta para entender e impulsionar o seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <WhatsAppDropdown position="top" align="center">
                  <button
                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-whatsapp hover:bg-whatsapp/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-whatsapp/30 hover:shadow-whatsapp/50 text-base outline-none"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chamar no WhatsApp
                  </button>
                </WhatsAppDropdown>
                <a
                  href="/contato"
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 glass glass-hover text-text-primary font-semibold rounded-xl transition-all text-base"
                >
                  Enviar E-mail
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-accent" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
