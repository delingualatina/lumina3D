"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SunMedium, Sparkles, MessageCircle, Sliders, Check } from "lucide-react";
import settings from "@/data/settings.json";

const sampleLamps = [
  {
    id: "lampara-constelacion",
    name: "Lámpara Constelación (Mesa)",
    image: "/images/lampara-constelacion.jpg",
    description: "Microperforaciones y difusión 360°",
  },
  {
    id: "colgante-tessela",
    name: "Colgante Tessela (Techo)",
    image: "/images/colgante-textura-arena.jpg",
    description: "Trama micro-trenzada y foco directo",
  },
];

export default function DimmerSimulator() {
  const [brightness, setBrightness] = useState<number>(85);
  const [selectedLamp, setSelectedLamp] = useState(sampleLamps[0]);

  // Calculated glow intensity and lumens
  const calculatedLumens = Math.round((brightness / 100) * 550);
  const glowOpacity = (brightness / 100) * 0.75;
  const scaleGlow = 0.8 + (brightness / 100) * 0.4;

  const handleWhatsApp = () => {
    const text = `¡Hola ${settings.storeName}! Probé el simulador de luz con el modelo *${selectedLamp.name}* al ${brightness}%. Me gustaría consultar disponibilidad.`;
    window.open(
      `https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="simulador" className="py-20 bg-[#f0ede9]/70 dark:bg-[#0c0c0e] relative overflow-hidden border-y border-neutral-200/80 dark:border-white/5 transition-colors duration-300">
      {/* Background Subtle Amber Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.06] dark:bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-4">
            <Sliders className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Experiencia Interactiva Atelier
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white font-sans tracking-tight leading-tight transition-colors">
            Simulador de Intensidad Lumínica 2700K
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors">
            Descubrí cómo la textura del bio-filamento 3D dispersa una luz ámbar suave en tus ambientes residenciales. Deslizá para regular la potencia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#fcf9f4] dark:bg-[#141418] rounded-3xl p-6 sm:p-10 shadow-xl dark:shadow-2xl border border-neutral-200/80 dark:border-white/10 transition-colors">
          {/* Visual Simulation Display (Left) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Lamp Selectors */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-6 w-full">
              {sampleLamps.map((lamp) => (
                <button
                  key={lamp.id}
                  onClick={() => setSelectedLamp(lamp)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                    selectedLamp.id === lamp.id
                      ? "bg-amber-500 text-neutral-950 font-bold border-amber-400 shadow-lg shadow-amber-500/20 scale-[1.02]"
                      : "bg-[#f0ede9] dark:bg-[#1a1a22] text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-white/5 hover:bg-neutral-200 dark:hover:bg-[#22222c] hover:text-neutral-950 dark:hover:text-white"
                  }`}
                >
                  {selectedLamp.id === lamp.id && <Check className="w-3.5 h-3.5 text-neutral-950 stroke-[3]" />}
                  <span>{lamp.name}</span>
                </button>
              ))}
            </div>

            {/* Simulated Room Box */}
            <div
              className="relative w-full aspect-square max-w-[440px] rounded-2xl overflow-hidden shadow-2xl transition-colors duration-500 flex items-center justify-center p-6 border border-neutral-800 dark:border-white/10"
              style={{
                backgroundColor: `rgb(${Math.round(14 + brightness * 0.12)}, ${Math.round(
                  14 + brightness * 0.1
                )}, ${Math.round(16 + brightness * 0.08)})`,
              }}
            >
              {/* Ambient radial glow from lamp center */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, ${glowOpacity}) 0%, rgba(217, 119, 6, ${
                    glowOpacity * 0.6
                  }) 40%, transparent 75%)`,
                  transform: `scale(${scaleGlow})`,
                }}
              />

              {/* Lamp Image */}
              <div className="relative w-4/5 h-4/5 z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]">
                <Image
                  src={selectedLamp.image}
                  alt={selectedLamp.name}
                  fill
                  className="object-contain transition-all duration-300"
                  style={{
                    filter: `brightness(${0.75 + (brightness / 100) * 0.4}) contrast(${
                      1.02 + (brightness / 100) * 0.15
                    })`,
                  }}
                />
              </div>

              {/* Live Overlay Metric Badge */}
              <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white text-xs font-mono flex items-center gap-2 shadow-lg">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: `rgba(245, 158, 11, ${0.4 + (brightness / 100) * 0.6})`,
                    boxShadow: `0 0 12px rgba(245, 158, 11, ${brightness / 100})`,
                  }}
                />
                <span className="font-medium text-amber-200">2700K Cálido • {calculatedLumens} lm</span>
              </div>
            </div>
          </div>

          {/* Controls & Specs Panel (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-mono">
                  Potencia de Atenuación
                </span>
                <span className="text-2xl font-bold font-mono text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-xl">
                  {brightness}%
                </span>
              </div>

              {/* Slider Control */}
              <div className="space-y-3 mb-6">
                <input
                  type="range"
                  min="15"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full h-3 bg-neutral-200 dark:bg-[#20202a] rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
                />
                <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  <span>15% (Luz de Noche)</span>
                  <span>50% (Ambiente)</span>
                  <span>100% (Lectura)</span>
                </div>
              </div>

              {/* Lighting Attributes */}
              <div className="space-y-3.5 bg-[#f0ede9] dark:bg-[#1a1a22] p-4 sm:p-5 rounded-2xl border border-neutral-200/80 dark:border-white/5 mb-6 transition-colors">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">Temperatura de Color:</span>
                  <span className="font-semibold text-amber-700 dark:text-amber-300">2700K (Incandescente Cálido)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">Foco Incluido:</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">LED Bajo Consumo 5W/7W</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">Difusión Bio-PLA:</span>
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">Sin deslumbramiento directo</span>
                </div>
              </div>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                💡 <em>Todas las lámparas se entregan calibradas y listas para usar, con portalámparas normalizado e interruptor de fácil acceso.</em>
              </p>
            </div>

            {/* Direct WhatsApp Action for this Lamp */}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-[0_6px_20px_rgba(37,211,102,0.25)] transition-all hover:scale-[1.01]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Pedir este Modelo por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
