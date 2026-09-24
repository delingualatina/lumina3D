"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, Sparkles, Heart } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import settings from "@/data/settings.json";

export default function Footer() {
  const directWhatsAppUrl = getWhatsAppUrl("¡Hola! Quiero coordinar una consulta desde la web.");

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Atelier Story (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold text-lg">
                L3D
              </div>
              <div>
                <span className="font-bold text-xl text-white block">
                  {settings.storeName}
                </span>
                <span className="text-xs font-mono text-amber-400">
                  {settings.city}, Argentina
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Atelier de diseño y fabricación aditiva especializado en luminarias paramétricas impresas en 3D con bio-polímeros sustentables. Diseñado y producido en la costa atlántica.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-neutral-300 font-mono">
                Atelier disponible para pedidos y consultas
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
              Explorar
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#catalogo"
                  className="hover:text-amber-400 transition-colors"
                >
                  Catálogo de Lámparas
                </a>
              </li>
              <li>
                <a
                  href="#simulador"
                  className="hover:text-amber-400 transition-colors"
                >
                  Simulador 2700K
                </a>
              </li>
              <li>
                <a
                  href="#como-comprar"
                  className="hover:text-amber-400 transition-colors"
                >
                  Cómo Comprar & Envíos
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="hover:text-amber-400 transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Concierge (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{settings.pickupAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: {settings.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors"
                >
                  {settings.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{settings.email}</span>
              </li>
            </ul>

            <div className="pt-2">
              <WhatsAppButton
                text="Escribir al Taller"
                size="sm"
                contentName="Footer WhatsApp CTA"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} {settings.storeName}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>en Mar del Plata, Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
