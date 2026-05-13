"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import WhatsAppDropdown from "@/components/ui/WhatsAppDropdown";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="col-span-1 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight text-text-primary">
                Engenharia de precisão para sua presença digital.
              </h1>
            </motion.div>

            <motion.p
              className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              A BlackDev projeta e desenvolve arquiteturas web de alto desempenho. Combinamos design estratégico e código robusto para empresas que exigem conversão e autoridade.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <WhatsAppDropdown position="bottom" align="left">
                <button
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-medium transition-colors hover:bg-accent-hover outline-none"
                >
                  Iniciar Diagnóstico
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </WhatsAppDropdown>
              <Link
                href="#portfolio"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-text-primary font-medium transition-colors hover:border-text-secondary"
              >
                Explorar Projetos
                <ArrowDownRight className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors" />
              </Link>
            </motion.div>
          </div>

          {/* Right side abstract/editorial composition */}
          <div className="col-span-1 lg:col-span-4 hidden lg:flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative w-full max-w-[320px] aspect-[3/4] border border-border bg-surface p-8 flex flex-col justify-between"
            >
              <div className="text-text-secondary font-mono text-sm uppercase tracking-widest">
                [ LEM — BA ]
              </div>
              <div>
                <div className="text-5xl font-serif text-text-primary mb-2">50+</div>
                <div className="text-sm text-text-muted uppercase tracking-wider">Projetos Entregues</div>
                <div className="w-full h-[1px] bg-border my-8" />
                <div className="text-5xl font-serif text-text-primary mb-2">98%</div>
                <div className="text-sm text-text-muted uppercase tracking-wider">Retenção Técnica</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
