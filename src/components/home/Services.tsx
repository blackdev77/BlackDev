import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Expertise"
          title="Nossas frentes de"
          highlight="atuação."
          description="Soluções desenvolvidas sob medida para desafios corporativos complexos."
          center={true}
        />

        <div className="mt-16 border-t border-border">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.slug} delay={index * 0.1}>
                <div className="group border-b border-border py-10 transition-colors hover:bg-surface flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center px-4 lg:px-8">
                  <div className="flex items-center gap-6 lg:w-1/3">
                    <Icon className="w-8 h-8 text-text-muted group-hover:text-text-primary transition-colors" />
                    <h3 className="text-2xl font-serif text-text-primary">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="lg:w-1/3">
                    <p className="text-base text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:w-1/3 flex flex-col sm:flex-row lg:items-center justify-between gap-6 w-full">
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-text-secondary"
                        >
                          <span className="w-1 h-1 bg-border group-hover:bg-text-secondary transition-colors" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/servicos#${service.slug}`}
                      className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-text-primary group-hover:border-text-primary transition-colors mt-4 sm:mt-0"
                    >
                      <ArrowUpRight className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
