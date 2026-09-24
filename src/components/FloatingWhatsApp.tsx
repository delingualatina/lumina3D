"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import settings from "@/data/settings.json";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-neutral-900 text-white text-xs font-medium shadow-2xl animate-in fade-in slide-in-from-right-4 duration-300 border border-neutral-800">
          <span>¿Tenés dudas? Hablá con el taller</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating CTA Button Widget */}
      <WhatsAppButton
        variant="floating"
        contentName="Floating WhatsApp Widget"
        text="Contactar por WhatsApp"
      />
    </div>
  );
}
