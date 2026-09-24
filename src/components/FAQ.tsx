"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import settings from "@/data/settings.json";

const faqs = [
  {
    q: "¿Cómo se coordina la entrega a domicilio en Mar del Plata?",
    a: "Una vez que nos escribís por WhatsApp y confirmamos tu modelo, coordinamos el día y franja horaria que te quede más cómodo. Si el producto está en stock, te lo llevamos en 24 a 48 hs hábiles sin cargo a barrios como Güemes, Playa Grande, Centro, Constitución, La Perla y Chauvín. Para otras zonas de General Pueyrredón coordinamos cadetería directa o punto de encuentro.",
  },
  {
    q: "¿Cómo realizo el pago por transferencia bancaria?",
    a: "Por WhatsApp te enviamos nuestro Alias oficial (LUMINA.3D.MDP) y CBU para que transfieras desde cualquier banco o billetera virtual (Mercado Pago, Cuenta DNI, etc.). Obtenés un 10% de descuento abonando por transferencia. También podés abonar en efectivo contra entrega al recibir la lámpara en tu mano.",
  },
  {
    q: "¿La lámpara viene lista para enchufar o tengo que comprar el foco aparte?",
    a: "¡Viene 100% lista para usar! Cada luminaria incluye un foco LED cálido (2700K) de bajo consumo certificado y probado en taller, portalámparas normalizado (E27 o E14 según el modelo) y cable textil de 1.8m con interruptor de diseño.",
  },
  {
    q: "¿Puedo pedir una altura, diámetro o color especial para mi proyecto?",
    a: "¡Por supuesto! Como somos un atelier de diseño y manufactura digital en Mar del Plata, podemos escalar modelos, ajustar el grado de traslucidez o imprimir en acabados especiales para arquitectos, interioristas y locales comerciales. Escribinos por WhatsApp y lo diseñamos.",
  },
  {
    q: "¿Tienen showroom o punto para ver las lámparas encendidas en persona?",
    a: "Sí, disponemos de un espacio de showroom y retiro coordinado en la zona de Güemes (Mar del Plata) para que puedas apreciar la textura del bio-filamento y la calidez de la luz antes de retirar. Contactanos por WhatsApp para coordinar una visita.",
  },
  {
    q: "¿El material Bio-PLA es resistente al calor?",
    a: "Nuestras lámparas están diseñadas para funcionar exclusivamente con tecnología LED de bajo consumo, la cual genera nula emisión calórica. La estructura se mantiene fría al tacto y no sufre ninguna deformación ni pérdida de color a lo largo de los años.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-[#f0ede9]/60 dark:bg-[#0c0c0e] border-t border-neutral-200/80 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              Respuestas Rápidas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white font-sans tracking-tight leading-tight transition-colors">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed transition-colors">
            Todo lo que necesitás saber sobre compras, envíos y pagos en Mar del Plata.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3.5 mb-14">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#fcf9f4] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10 overflow-hidden shadow-sm dark:shadow-lg transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span className="pr-4 leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-amber-600 dark:text-amber-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-200/60 dark:border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#fcf9f4] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10 shadow-lg dark:shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left transition-colors">
          <div>
            <h3 className="font-bold text-neutral-900 dark:text-white text-base sm:text-lg transition-colors">
              ¿Tenés otra consulta particular?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 transition-colors">
              Respondemos al instante por WhatsApp de lunes a sábados.
            </p>
          </div>
          <WhatsAppButton
            text="Consultar al Taller"
            size="sm"
            contentName="FAQ Help CTA"
            className="flex-shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
