"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import settings from "@/data/settings.json";

const faqs = [
  {
    q: "¿Cómo se coordina la entrega a domicilio en Mar del Plata?",
    a: "Una vez que nos escribís por WhatsApp y confirmamos tu modelo, coordinamos el día y franja horaria que te quede más cómodo. Si el producto está en stock, te lo llevamos en 24 a 48 hs hábiles sin cargo a barrios como Güemes, Playa Grande, Centro, Constitución, La Perla y Chauvín. Para otras zonas de General Pueyrredón o envíos al resto del país coordinamos por encomienda directa o punto de encuentro.",
  },
  {
    q: "¿Cómo realizo el pago por transferencia bancaria?",
    a: `Por WhatsApp te enviamos nuestro Alias oficial (${settings.bankAccount.alias}) y CBU para que transfieras desde cualquier banco o billetera virtual (Mercado Pago, Cuenta DNI, etc.). Obtenés un 10% de descuento abonando por transferencia. También podés abonar en efectivo contra entrega al recibir tu pedido en mano.`,
  },
  {
    q: "¿Qué incluye cada línea de productos (Lumina, Luthier 3D y DecoVerde)?",
    a: "• Línea Lumina: Cada lámpara incluye foco LED cálido 2700K probado en taller y cable textil con interruptor listo para usar.\n• Línea Luthier 3D: Los instrumentos vienen calibrados con cuerdas de alta calidad, sensor piezoeléctrico activo (si corresponde) y listos para tocar o enchufar.\n• DecoVerde 3D: Las macetas incluyen sistema capilar y las kokedamas flotantes vienen con base electromagnética y esfera vegetal viva.",
  },
  {
    q: "¿Puedo encargar piezas a medida, colores o proyectos especiales?",
    a: "¡Por supuesto! En Tutto3D somos atelier de diseño y manufactura digital. Realizamos personalizaciones, ajustes de escala, acabados específicos para arquitectos, músicos, paisajistas e interioristas. Escribinos por WhatsApp para contarnos tu idea.",
  },
  {
    q: "¿Tienen showroom o punto de retiro en Mar del Plata?",
    a: "Sí, disponemos de espacio de showroom y retiro en la zona de Güemes (Mar del Plata) con cita previa para que puedas apreciar los acabados, la acústica o la luz en persona.",
  },
  {
    q: "¿Los bio-polímeros utilizados son resistentes y ecológicos?",
    a: "Utilizamos Bio-PLA sustentable de origen vegetal y bio-composites reforzados. En lámparas no transmiten calor; en instrumentos ofrecen una rigidez estructural y resonancia sobresaliente; y en DecoVerde son totalmente resistentes a la humedad.",
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
