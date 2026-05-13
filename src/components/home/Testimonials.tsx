import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Credibilidade"
          title="Impacto no"
          highlight="mercado."
          description="Nossos parceiros validam a eficácia da nossa engenharia e do nosso posicionamento estratégico."
          center={true}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex flex-col p-8 lg:p-10 border border-border bg-surface h-full transition-colors hover:border-text-secondary">
                <Quote className="w-10 h-10 text-border mb-8" />
                
                <p className="text-xl text-text-primary leading-relaxed font-serif italic mb-10 flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t border-border mt-auto">
                  <h4 className="font-sans font-bold text-text-primary text-sm uppercase tracking-wider mb-1">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-text-secondary block">
                    {testimonial.role} — {testimonial.company}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
