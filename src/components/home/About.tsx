import { COMPANY } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Code2, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: `${COMPANY.projectsDelivered}+`,
    label: "Projetos Entregues",
  },
  {
    icon: Users,
    value: `${COMPANY.satisfactionRate}%`,
    label: "Retenção Técnica",
  },
  {
    icon: Award,
    value: "Top 1",
    label: "Dev em LEM",
  },
  {
    icon: Clock,
    value: COMPANY.supportHours,
    label: "Suporte",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionTitle
              badge="Sobre Nós"
              title="Tecnologia e estratégia para"
              highlight="o seu crescimento."
              center={false}
            />
            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed mb-4 text-lg">
                A <span className="text-text-primary font-medium">BlackDev</span> nasceu
                em Luís Eduardo Magalhães com a missão de profissionalizar o acesso
                a soluções web de alta qualidade para empresas locais e regionais.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4 text-lg">
                Combinamos design estratégico, código robusto e metodologia de
                conversão para criar plataformas que geram resultados mensuráveis
                — mais leads, mais vendas e mais autoridade digital.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg">
                Somos parceiros de PMEs, comércios locais, clínicas e
                agroempresas que buscam fortalecer sua presença digital e se
                destacar no mercado.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Stats grid */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="grid grid-cols-2 gap-0 border border-border">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-8 text-center border-b border-r border-border last:border-r-0 [&:nth-child(2)]:border-r-0 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0 [&:nth-child(4)]:border-r-0 group hover:bg-surface transition-colors"
                  >
                    <div className="w-12 h-12 mx-auto border border-border flex items-center justify-center mb-4 group-hover:border-text-secondary transition-colors">
                      <Icon className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" />
                    </div>
                    <div className="text-3xl md:text-4xl font-serif text-text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
