"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Sparkles, Wind, Lightbulb, RefreshCw, Layers } from "lucide-react";

export default function MaterialShowcase() {
  return (
    <section id="materiales" className="py-16 sm:py-24 bg-[#fcf9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-neutral-900/5 shadow-2xl border border-neutral-200/80 aspect-[4/3]">
              <Image
                src="/images/voronoi-cellular.png"
                alt="Detalle macro de filamento 3D bio-polímero en Mar del Plata"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#fcf9f4]/95 backdrop-blur-md shadow-lg border border-white/80">
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-mono font-bold uppercase text-neutral-900">
                    Resolución de 0.20mm
                  </span>
                </div>
                <p className="text-xs text-neutral-600">
                  Micro-estratificación continua sin uniones visibles. Resistencia térmica y difusión acústica y lumínica optimizada.
                </p>
              </div>
            </div>
          </div>

          {/* Value Pillars (Right) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
                <Leaf className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800">
                  Manufactura Consciente
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 font-sans tracking-tight">
                Bio-Polímeros & Precisión Digital en Mar del Plata
              </h2>
              <p className="mt-3 text-base text-neutral-600 leading-relaxed">
                Nuestras lámparas no provienen de cadenas industriales masivas en serie. Son moldeadas digitalmente en nuestro atelier de la costa a partir de recursos biológicos renovables.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Feature 1 */}
              <div className="p-4 rounded-2xl bg-[#f0ede9] border border-neutral-200/70 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/15 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm mb-1">
                    100% Bio-PLA de Almidón Vegetal
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Polímero ecológico derivado de maíz y caña de azúcar. No emite vapores nocivos, es seguro para niños y mascotas y cuenta con baja huella de carbono.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-4 rounded-2xl bg-[#f0ede9] border border-neutral-200/70 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-600/15 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Wind className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm mb-1">
                    Inalterable ante la Humedad Marina
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Diseñado y testeado en el clima de Mar del Plata. No se oxida, no se corroe por la salinidad costera y se limpia fácilmente con un paño húmedo.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-4 rounded-2xl bg-[#f0ede9] border border-neutral-200/70 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-900/10 text-neutral-900 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm mb-1">
                    Foco LED Cálido Probado y Cable Textil Incluido
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Recibís tu lámpara ensamblada con cable textil premium, interruptor de calidad y lámpara LED cálida probada en taller, lista para enchufar en tu hogar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
