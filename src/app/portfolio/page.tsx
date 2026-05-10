"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS, PORTFOLIO_CATEGORIES, PORTFOLIO_CATEGORY_LABELS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTASection from "@/components/home/CTASection";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos"
    ? PROJECTS
    : PROJECTS.filter((p) => p.categorySlug === activeCategory);

  return (
    <>
      <div className="py-20 lg:py-28 relative min-h-screen">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Portfólio"
            title="Nossos"
            highlight="Trabalhos"
            description="Explore os projetos que desenvolvemos e veja como transformamos ideias em soluções digitais reais."
          />

          {/* Filters */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16">
              {PORTFOLIO_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-accent text-primary shadow-lg shadow-accent/25"
                      : "glass text-text-secondary hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  {PORTFOLIO_CATEGORY_LABELS[category]}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.05}>
                <div className="group relative rounded-2xl overflow-hidden glass glass-hover transition-all duration-500 h-full flex flex-col">
                  {/* Image placeholder with gradient */}
                  <div className="relative h-56 bg-gradient-to-br from-accent/10 to-cyan-900/20 flex items-center justify-center overflow-hidden">
                    <div className="text-5xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors">
                      {project.title.split(" ").map((w) => w[0]).join("")}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-accent/40 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                        <ExternalLink className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-text-secondary leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium text-text-primary bg-white/5 rounded-lg border border-white/10"
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-text-secondary">
              Nenhum projeto encontrado para esta categoria.
            </div>
          )}
        </div>
      </div>
      <CTASection />
    </>
  );
}
