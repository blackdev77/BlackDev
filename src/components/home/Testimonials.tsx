"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = TESTIMONIALS.length - 1;
      if (next >= TESTIMONIALS.length) next = 0;
      return next;
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Depoimentos"
          title="O que dizem"
          highlight="nossos clientes"
          description="A satisfação de quem confiou na BlackDev para transformar sua presença digital."
        />

        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="relative h-[300px] sm:h-[250px] overflow-hidden rounded-3xl glass p-6 md:p-10">
              <Quote className="absolute top-6 right-8 w-20 h-20 text-white/5 -rotate-12" />

              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-6 font-medium">
                    "{TESTIMONIALS[currentIndex].content}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-accent">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <span className="text-sm text-text-secondary">
                      {TESTIMONIALS[currentIndex].role} — {TESTIMONIALS[currentIndex].company}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 text-text-primary" />
              </button>
              
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? "w-8 bg-accent" 
                        : "w-2 bg-text-secondary/30 hover:bg-text-secondary/50"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6 text-text-primary" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
