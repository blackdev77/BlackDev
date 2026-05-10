import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Portfolio() {
  // Show only first 6 on home page
  const displayedProjects = PROJECTS.slice(0, 6);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-secondary relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Portfólio"
          title="Projetos que"
          highlight="geram resultados"
          description="Conheça alguns dos projetos que desenvolvemos para empresas da região."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden glass glass-hover transition-all duration-500 h-full">
                {/* Image placeholder with gradient */}
                <div className="relative h-48 bg-gradient-to-br from-accent/10 to-cyan-900/20 flex items-center justify-center overflow-hidden">
                  <div className="text-4xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
                    {project.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-accent/80 bg-accent/5 rounded-md border border-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-8 py-3.5 glass glass-hover text-text-primary font-semibold rounded-xl transition-all"
          >
            Ver Todos os Projetos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
