"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Truck, ShieldCheck } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import settings from "@/data/settings.json";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[#fcf9f4] dark:bg-[#0c0c0e] transition-colors duration-300">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent dark:from-amber-500/20 dark:via-orange-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Atelier Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 mb-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-800 dark:text-amber-300">
                Atelier de Iluminación 3D • Diseños Paramétricos
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-sans leading-[1.12] mb-6 transition-colors">
              Iluminación Escultural <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500 bg-clip-text text-transparent">
                Impresa en 3D
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 max-w-2xl font-light transition-colors">
              Piezas de diseño paramétrico fabricadas capa por capa en nuestro atelier con bio-polímeros sustentables. Luz cálida, texturas orgánicas y atmósfera única para tus espacios.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <WhatsAppButton
                text="Pedir por WhatsApp • Trato Directo"
                size="lg"
                contentName="Hero Primary CTA"
              />

              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#f0ede9] hover:bg-[#e5e2dd] text-neutral-800 dark:bg-[#1c1c22] dark:hover:bg-[#282830] dark:text-neutral-200 border border-neutral-200/80 dark:border-white/10 font-semibold text-base transition-all hover:-translate-y-0.5 shadow-md"
              >
                <span>Ver Ficha y Fotos</span>
                <ArrowRight className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl pt-4 border-t border-neutral-200/80 dark:border-white/10 transition-colors">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f0ede9] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10 transition-colors">
                <Truck className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <div className="text-xs text-neutral-600 dark:text-neutral-300">
                  <span className="font-semibold block text-neutral-900 dark:text-white">Envíos Cuidados a Domicilio</span>
                  Embalaje reforzado y entrega coordinada
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f0ede9] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10 transition-colors">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <div className="text-xs text-neutral-600 dark:text-neutral-300">
                  <span className="font-semibold block text-neutral-900 dark:text-white">Compra 100% Segura</span>
                  Transferencia o efectivo contra entrega
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#f0ede9] to-[#ebe8e3] dark:from-[#1c1c22] dark:to-[#121216] p-3 shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-neutral-200/80 dark:border-white/10 transition-all">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-900">
                <Image
                  src="/images/lampara-constelacion.jpg"
                  alt="Lámpara 3D Constelación"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Floating Ambient Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Tag Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 dark:bg-[#121216]/90 backdrop-blur-md shadow-2xl border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                        <h3 className="font-bold text-white text-base">Lámpara Constelación</h3>
                      </div>
                      <p className="text-xs text-neutral-300 dark:text-neutral-400 font-mono">Edición Mesa • 24 cm • Bio-PLA</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                        En Stock
                      </span>
                      <p className="text-sm font-bold text-amber-400 mt-1">$44.500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Badge */}
            <div className="absolute -top-4 -right-4 bg-[#fcf9f4] dark:bg-[#18181f] text-neutral-900 dark:text-white p-3 rounded-2xl shadow-xl border border-amber-500/30 flex items-center gap-2 transition-colors">
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span className="text-xs font-mono font-semibold tracking-wide uppercase text-amber-800 dark:text-amber-300">
                Filamento 2700K Warm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
