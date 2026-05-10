import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-secondary relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Nossos Serviços"
          title="Soluções completas em"
          highlight="desenvolvimento web"
          description="Do conceito ao deploy, criamos soluções digitais que impulsionam o crescimento do seu negócio."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.slug} delay={index * 0.1}>
                <div className="group relative p-6 lg:p-8 rounded-2xl glass glass-hover transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-grow">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={`/servicos#${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group/link"
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
