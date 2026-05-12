"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import WhatsAppDropdown from "@/components/ui/WhatsAppDropdown";
import Link from "next/link";

const words = [
  "Fortalecem sua Marca",
  "Geram Clientes",
  "Convertem Visitantes",
  "Aumentam Vendas",
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest rounded-full border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Desenvolvimento Web em LEM
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Sites Profissionais que{" "}
            <span className="relative inline-block">
              <motion.span
                key={currentWord}
                className="gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {words[currentWord]}
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            BlackDev cria sites modernos, rápidos e estratégicos para empresas
            de Luís Eduardo Magalhães e região. Transforme sua presença digital
            em resultados reais.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <WhatsAppDropdown position="bottom" align="center">
              <button
                className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-bold rounded-xl transition-all hover:shadow-xl hover:shadow-accent/25 text-base outline-none"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </WhatsAppDropdown>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-8 py-4 glass glass-hover text-text-primary font-semibold rounded-xl transition-all text-base"
            >
              <Play className="w-4 h-4 text-accent" />
              Ver Portfólio
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {[
              { value: "50+", label: "Projetos Entregues" },
              { value: "98%", label: "Clientes Satisfeitos" },
              { value: "<2s", label: "Tempo de Carregamento" },
              { value: "24/7", label: "Suporte Técnico" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs md:text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}
