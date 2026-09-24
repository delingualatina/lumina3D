"use client";

import React from "react";
import {
  MessageCircle,
  CreditCard,
  Truck,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import settings from "@/data/settings.json";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Elegí tu modelo y acabado",
      description:
        "Explorá nuestra colección de lámparas 3D y seleccioná el color y textura que mejor combine con tu espacio (Arena, Terracota, Blanco Cálido o Basalto).",
      icon: <CheckCircle2 className="w-5 h-5 text-amber-600" />,
    },
    {
      number: "02",
      title: "Coordiná tu pedido",
      description:
        "Escribinos para confirmar disponibilidad, personalizar tu diseño o despejar cualquier duda técnica con el equipo del taller.",
      icon: <MessageCircle className="w-5 h-5 text-[#25D366]" />,
    },
    {
      number: "03",
      title: "Pago fácil y seguro",
      description:
        "Aboná cómodamente mediante transferencia bancaria o efectivo contra entrega, con opciones en cuotas.",
      icon: <CreditCard className="w-5 h-5 text-amber-700" />,
    },
    {
      number: "04",
      title: "Entrega a domicilio",
      description:
        "Recibís tu luminaria cuidadosamente embalada y lista para enchufar con foco LED cálido incluido.",
      icon: <Truck className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section id="como-comprar" className="py-20 sm:py-28 bg-[#f0ede9]/70 dark:bg-[#0c0c0e] relative border-t border-neutral-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Proceso Simple & Transparente
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white font-sans tracking-tight leading-tight transition-colors">
            ¿Cómo realizar tu compra?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
            Trato directo con el taller de principio a fin, sin intermediarios.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-7 rounded-3xl bg-[#fcf9f4] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10 shadow-lg dark:shadow-xl hover:border-amber-500/30 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-400 font-mono font-bold text-base flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-all duration-300">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-xl bg-[#f0ede9] dark:bg-[#1c1c24] border border-neutral-200/80 dark:border-white/5">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2.5 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
