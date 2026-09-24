"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";
import settings from "@/data/settings.json";

import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcf9f4]/85 dark:bg-[#0c0c0e]/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Atelier Info */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform overflow-hidden">
              <span className="text-neutral-950 font-bold text-lg tracking-wider">L3D</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-neutral-900 dark:text-white font-sans transition-colors">
                  {settings.storeName}
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-500/30">
                  Atelier
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 font-medium transition-colors">
                <span>Atelier de Iluminación 3D</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-colors">
            <a
              href="#catalogo"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1 relative group"
            >
              Catálogo de Lámparas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#simulador"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1 relative group flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Simulador de Luz
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#como-comprar"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1 relative group"
            >
              Cómo Comprar
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#faqs"
              className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1 relative group"
            >
              Preguntas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Right Action: ThemeToggle + Explorar Catálogo */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href="#catalogo"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explorar Catálogo</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f4] dark:bg-[#121216] border-b border-neutral-200 dark:border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 dark:text-neutral-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400"
          >
            Catálogo de Lámparas
          </a>
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 dark:text-neutral-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400"
          >
            Simulador de Luz 2700K
          </a>
          <a
            href="#como-comprar"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 dark:text-neutral-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400"
          >
            Cómo Comprar
          </a>
          <a
            href="#faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-800 dark:text-neutral-200 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400"
          >
            Preguntas Frecuentes
          </a>
          <div className="pt-2 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between gap-3">
            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-neutral-950 font-bold text-center"
            >
              <span>Explorar Catálogo</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
