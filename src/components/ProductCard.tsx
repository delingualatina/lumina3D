"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Check, Sparkles } from "lucide-react";
import { Product, MaterialFinish } from "@/types/product";
import { formatPrice } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product, finish?: MaterialFinish) => void;
}

export default function ProductCard({ product, onOpenDetail }: ProductCardProps) {
  const [selectedFinish, setSelectedFinish] = useState<MaterialFinish>(
    product.finishes[0]
  );

  return (
    <article className="group flex flex-col rounded-3xl bg-[#fcf9f4] dark:bg-[#141418] p-4 sm:p-5 shadow-lg dark:shadow-2xl hover:shadow-[0_0_35px_rgba(245,158,11,0.15)] transition-all duration-300 border border-neutral-200/80 dark:border-white/10 hover:border-amber-500/40">
      {/* Product Image Showcase */}
      <div 
        className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-900 cursor-pointer"
        onClick={() => onOpenDetail(product, selectedFinish)}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category & Dimensions Pill */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-3 py-1 rounded-full bg-black/75 dark:bg-[#0c0c0e]/90 backdrop-blur-md text-[11px] font-mono font-semibold uppercase text-neutral-100 shadow-lg border border-white/10">
            {product.categoryShort || product.category} • {product.dimensions.height}
          </span>
        </div>

        {/* Stock Badge */}
        <div className="absolute top-3 right-3 z-10">
          {product.stockStatus === "in_stock" ? (
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-neutral-950 text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
              En Stock
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-amber-500 text-neutral-950 text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
              Por Pedido
            </span>
          )}
        </div>

        {/* Quick View Button overlay */}
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm">
          <span className="px-4 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold shadow-2xl flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Ver Ficha Técnica
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Title & Price */}
        <div 
          className="flex items-start justify-between gap-2 mb-2 cursor-pointer"
          onClick={() => onOpenDetail(product, selectedFinish)}
        >
          <div>
            <h3 className="font-bold text-xl text-neutral-900 dark:text-white font-sans tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">{product.tagline}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-xl font-extrabold text-neutral-950 dark:text-amber-400 font-sans block transition-colors">
              {formatPrice(product.price, product.currency)}
            </span>
          </div>
        </div>

        {/* Description snippet */}
        <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2 mb-4 font-light transition-colors">
          {product.description}
        </p>

        {/* Finish / Material Swatches */}
        <div className="mb-4">
          <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase block mb-2 transition-colors">
            Acabado: <strong className="text-neutral-800 dark:text-neutral-200">{selectedFinish.name}</strong>
          </span>
          <div className="flex items-center gap-2.5">
            {product.finishes.map((finish) => (
              <button
                key={finish.id}
                onClick={() => setSelectedFinish(finish)}
                title={finish.name}
                className={`w-7 h-7 rounded-full transition-all flex items-center justify-center relative border border-neutral-300 dark:border-white/20 ${
                  selectedFinish.id === finish.id
                    ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-[#fcf9f4] dark:ring-offset-[#141418] scale-110 shadow-sm"
                    : "opacity-80 hover:opacity-100"
                }`}
                style={{ backgroundColor: finish.hex }}
              >
                {selectedFinish.id === finish.id && (
                  <Check
                    className={`w-3.5 h-3.5 ${
                      finish.hex === "#343538" || finish.hex === "#26262B" ? "text-white" : "text-neutral-950"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Micro Badges */}
        <div className="flex flex-wrap items-center gap-1.5 mb-5 mt-auto text-[11px] text-neutral-500 dark:text-neutral-400">
          {product.specs.bulbSocket && (
            <span className="px-2.5 py-1 rounded-lg bg-[#f0ede9] dark:bg-[#1c1c24] border border-neutral-200/70 dark:border-white/5 font-mono text-neutral-700 dark:text-neutral-300 truncate max-w-[170px]" title={product.specs.bulbSocket}>
              {product.specs.bulbSocket.split("(")[0]}
            </span>
          )}
          {product.specs.pickups && (
            <span className="px-2.5 py-1 rounded-lg bg-[#f0ede9] dark:bg-[#1c1c24] border border-neutral-200/70 dark:border-white/5 font-mono text-neutral-700 dark:text-neutral-300">
              ⚡ Sensor Piezoeléctrico
            </span>
          )}
          {product.specs.irrigation && (
            <span className="px-2.5 py-1 rounded-lg bg-[#f0ede9] dark:bg-[#1c1c24] border border-neutral-200/70 dark:border-white/5 font-mono text-neutral-700 dark:text-neutral-300">
              🌿 Natura & Kokedama
            </span>
          )}
          <span className="px-2.5 py-1 rounded-lg bg-[#f0ede9] dark:bg-[#1c1c24] border border-neutral-200/70 dark:border-white/5 font-mono text-neutral-700 dark:text-neutral-300">
            {product.specs.material.split(" ")[0]}
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-neutral-200/70 dark:border-white/10">
          <button
            onClick={() => onOpenDetail(product, selectedFinish)}
            className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4 text-neutral-950" />
            <span>Ver Ficha Técnica y Fotos</span>
          </button>
        </div>
      </div>
    </article>
  );
}

