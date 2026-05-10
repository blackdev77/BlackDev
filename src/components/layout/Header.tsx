"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_ITEMS, WHATSAPP_LINK } from "@/lib/constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="BlackDev - Página Inicial">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Code2 className="w-6 h-6 text-accent" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold">
              Black<span className="text-accent">Dev</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-primary font-semibold text-sm rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-primary/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 bg-accent hover:bg-accent-hover text-primary font-semibold text-sm rounded-lg transition-all"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
