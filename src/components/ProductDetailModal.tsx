"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Sparkles,
  Ruler,
  Layers,
  Lightbulb,
  Clock,
} from "lucide-react";
import { Product, MaterialFinish } from "@/types/product";
import { formatPrice } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import settings from "@/data/settings.json";

interface ProductDetailModalProps {
  product: Product | null;
  initialFinish?: MaterialFinish;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  initialFinish,
  onClose,
}: ProductDetailModalProps) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedFinish, setSelectedFinish] = useState<MaterialFinish>(
    initialFinish || product.finishes[0]
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-lg animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#fcf9f4] dark:bg-[#131317] text-neutral-900 dark:text-[#f4f4f5] rounded-3xl shadow-2xl dark:shadow-[0_0_60px_rgba(0,0,0,0.9)] border border-neutral-200 dark:border-white/15 p-5 sm:p-8 animate-in zoom-in-95 duration-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-200/80 hover:bg-neutral-300 dark:bg-white/10 dark:hover:bg-white/20 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors z-20"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Gallery View (Left) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-inner border border-neutral-200 dark:border-white/10">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 dark:bg-[#0c0c0e]/90 backdrop-blur-md text-xs font-mono font-bold text-neutral-100 border border-white/10">
                {product.category}
              </div>
            </div>

            {/* Thumbnails */}
            {product.galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImage === img
                        ? "border-amber-500 scale-95 shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Material Info */}
            <div className="p-4 rounded-2xl bg-[#f0ede9] dark:bg-[#1a1a22] border border-neutral-200/80 dark:border-white/10 space-y-2 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-amber-800 dark:text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Manufactura Digital Aditiva de Precisión</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                Cada pieza se fabrica capa a capa en nuestro atelier utilizando bio-polímeros de alta fidelidad, asegurando acabados impecables y nulo desperdicio de material.
              </p>
            </div>
          </div>

          {/* Details & Specs (Right) */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-1">
                {product.stockStatus === "in_stock"
                  ? "✓ En Stock • Entrega Inmediata"
                  : "⚙ Fabricación por Pedido"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white font-sans tracking-tight transition-colors">
                {product.name}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1 font-light transition-colors">{product.tagline}</p>
            </div>

            {/* Price block */}
            <div className="p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 dark:border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs text-neutral-500 dark:text-neutral-300 font-medium block">
                  Precio:
                </span>
                <span className="text-3xl font-extrabold text-neutral-950 dark:text-white font-sans transition-colors">
                  {formatPrice(product.price, product.currency)}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 font-semibold block mb-1">
                  10% OFF Transferencia
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                  o cuotas disponibles
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-light transition-colors">
              {product.description}
            </p>

            {/* Material Finish Swatches Selector */}
            <div>
              <label className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase block mb-2 font-bold">
                Seleccionar Acabado: <span className="text-amber-700 dark:text-amber-300">{selectedFinish.name}</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {product.finishes.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all ${
                      selectedFinish.id === finish.id
                        ? "border-amber-500 bg-amber-500/10 dark:bg-[#22222d] shadow-sm ring-1 ring-amber-500"
                        : "border-neutral-200 dark:border-white/10 bg-[#f0ede9] dark:bg-[#181820] hover:bg-neutral-200 dark:hover:bg-[#202028]"
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex-shrink-0 border border-neutral-300 dark:border-white/20"
                      style={{ backgroundColor: finish.hex }}
                    />
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 block truncate">
                        {finish.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Specs Matrix */}
            <div className="space-y-2 border-t border-neutral-200/80 dark:border-white/10 pt-4">
              <span className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 font-bold block mb-2">
                Especificaciones del Taller
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-[#f0ede9] dark:bg-[#1a1a22] border border-neutral-200/80 dark:border-white/5 flex items-center gap-2 transition-colors">
                  <Ruler className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10px]">Dimensiones</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {product.dimensions.height}
                      {product.dimensions.diameter ? ` x ⌀${product.dimensions.diameter}` : ""}
                      {product.dimensions.width ? ` x ${product.dimensions.width}` : ""}
                      {` (${product.dimensions.weight})`}
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#f0ede9] dark:bg-[#1a1a22] border border-neutral-200/80 dark:border-white/5 flex items-center gap-2 transition-colors">
                  <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10px]">Resolución</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {product.specs.layerResolution}
                    </span>
                  </div>
                </div>

                {product.specs.bulbSocket && (
                  <div className="p-2.5 rounded-xl bg-[#f0ede9] dark:bg-[#1a1a22] border border-neutral-200/80 dark:border-white/5 flex items-center gap-2 transition-colors">
                    <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-neutral-500 dark:text-neutral-400 block text-[10px]">Foco / Iluminación</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {product.specs.bulbSocket}
                      </span>
                    </div>
                  </div>
                )}

                {product.specs.pickups && (
                  <div className="p-2.5 rounded-xl bg-[#f0ede9] dark:bg-[#1a1a22] border border-neutral-200/80 dark:border-white/5 flex items-center gap-2 transition-colors">
                    <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-neutral-500 dark:text-neutral-400 block text-[10px]">Captación Acústica</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {product.specs.pickups}
                      </span>
                    </div>
                  </div>
                )}

                {product.specs.tuning && (
                  <div className="p-2.5 rounded-xl bg-[#f0ede9] dark:bg-[#1a1a22] border border-neutral-200/80 dark:border-white/5 flex items-center gap-2 transition-colors">
                    <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    <div>
                      <span className="text-neutral-500 dark:text-neutral-400 block text-[10px]">Afinación / Clavijero</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {product.specs.tuning}
                      </span>
                    </div>
                  </div>
                )}

                {product.specs.irrigation && (
                  <div className="p-2.5 rounded-xl bg-[#f0ede9] dark:bg-[#1a1a22] border border-neutral-200/80 dark:border-white/5 flex items-center gap-2 transition-colors">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <div>
                      <span className="text-neutral-500 dark:text-neutral-400 block text-[10px]">Cuidado Botánico</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {product.specs.irrigation}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-2.5 rounded-xl bg-[#f0ede9] dark:bg-[#1a1a22] border border-neutral-200/80 dark:border-white/5 flex items-center gap-2 transition-colors">
                  <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10px]">Fabricación</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {product.specs.productionTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Purchase CTA */}
            <div className="pt-2">
              <WhatsAppButton
                text={`Pedir ${product.name} por WhatsApp`}
                size="lg"
                className="w-full"
                contentName={`Product Modal: ${product.name} - ${selectedFinish.name}`}
              />
              <p className="text-center text-[11px] text-neutral-500 dark:text-neutral-400 mt-2">
                🔒 Trato directo con el taller • Coordinamos pago y entrega
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
