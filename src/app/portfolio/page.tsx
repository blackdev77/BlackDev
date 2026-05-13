"use client";

import { useState } from "react";
import Image from "next/image";
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
      <div className="py-24 lg:py-32 bg-primary min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Case Studies"
            title="Nossos"
            highlight="Trabalhos."
            description="Explore os projetos que desenvolvemos e veja como transformamos ideias em soluções digitais reais."
            center={false}
          />

          {/* Filters */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-start gap-3 mb-16 border-b border-border pb-6">
              {PORTFOLIO_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-text-primary text-primary"
                      : "border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary"
                  }`}
                >
                  {PORTFOLIO_CATEGORY_LABELS[category]}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.05}>
                <div className="group flex flex-col">
                  {/* Project Image */}
                  <div className="relative w-full aspect-[4/3] bg-surface border border-border overflow-hidden mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <span className="text-xs font-mono tracking-widest text-text-muted uppercase mb-3">
                      {project.category}
                    </span>
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-text-secondary font-serif italic text-xl">
              Nenhum projeto encontrado para esta categoria.
            </div>
          )}
        </div>
      </div>
      <CTASection />
    </>
  );
}
