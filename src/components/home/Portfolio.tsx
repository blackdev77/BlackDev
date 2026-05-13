import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Portfolio() {
  const displayedProjects = PROJECTS.slice(0, 4);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Case Studies"
          title="Arquiteturas"
          highlight="entregues."
          description="Aplicações de alto desempenho e interfaces focadas em conversão desenvolvidas para nossos clientes."
          center={false}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {displayedProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div className={`group flex flex-col ${index % 2 !== 0 ? 'md:mt-16' : ''}`}>
                <div className="relative w-full aspect-[4/3] bg-surface border border-border overflow-hidden mb-6">
                  {/* Subtle hover effect on the box */}
                  <div className="absolute inset-0 bg-text-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Text placeholder for now */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="font-serif text-3xl md:text-5xl text-border group-hover:text-text-muted transition-colors duration-500">
                      {project.title.split(" ").map(w => w[0]).join("")}
                     </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono tracking-widest text-text-muted uppercase">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-text-primary mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-base text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-text-secondary border border-border"
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

        <div className="mt-20 border-t border-border pt-12 flex justify-between items-center">
           <span className="text-lg font-serif text-text-secondary italic">
             Mais de 10 projetos entregues.
           </span>
           <Link
             href="/portfolio"
             className="group flex items-center justify-center w-16 h-16 rounded-full border border-border hover:bg-text-primary hover:border-text-primary transition-all"
             aria-label="Ver todos os projetos"
           >
             <ArrowDownRight className="w-6 h-6 text-text-primary group-hover:text-primary transition-colors" />
           </Link>
        </div>
      </div>
    </section>
  );
}
