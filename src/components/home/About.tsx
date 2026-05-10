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
    label: "Satisfação",
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
    <section id="sobre" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionTitle
              badge="Sobre Nós"
              title="Tecnologia e estratégia para"
              highlight="o seu crescimento"
              center={false}
            />
            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed mb-4">
                A <span className="text-text-primary font-semibold">BlackDev</span> nasceu
                em Luís Eduardo Magalhães com a missão de democratizar o acesso
                a soluções web de alta qualidade para empresas locais e regionais.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Combinamos design moderno, código limpo e estratégias de
                conversão para criar sites que não apenas impressionam, mas que
                geram resultados mensuráveis — mais leads, mais vendas e mais
                visibilidade online.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Somos parceiros de PMEs, comércios locais, clínicas e
                agroempresas que buscam fortalecer sua presença digital e se
                destacar no mercado.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Stats grid */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`p-6 rounded-2xl glass glass-hover text-center transition-all ${
                      index === 0 ? "lg:translate-y-4" : ""
                    } ${index === 3 ? "lg:-translate-y-4" : ""}`}
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-text-secondary">
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
