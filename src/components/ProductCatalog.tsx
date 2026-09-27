"use client";

import React, { useState, useMemo } from "react";
import { Product, MaterialFinish } from "@/types/product";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import { Search, Sparkles, Lamp, Music, Leaf } from "lucide-react";

interface ProductCatalogProps {
  initialProducts: Product[];
}

const categoryList = [
  { id: "Todos", label: "Todos los Modelos", icon: null },
  { id: "Lámparas (Línea Lumina)", label: "Lámparas (Línea Lumina)", icon: Lamp },
  { id: "Instrumentos (Línea Luthier 3D)", label: "Instrumentos (Línea Luthier 3D)", icon: Music },
  { id: "DecoVerde 3D (Natura, Kokedamas y 3D)", label: "DecoVerde 3D (Natura & Kokedamas)", icon: Leaf },
] as const;

export default function ProductCatalog({ initialProducts }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedInitialFinish, setSelectedInitialFinish] = useState<MaterialFinish | undefined>(undefined);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((p) => {
      const matchesCategory =
        selectedCategory === "Todos" || p.category === selectedCategory;
      const matchesStock = !onlyInStock || p.stockStatus === "in_stock";
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.categoryShort && p.categoryShort.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesStock && matchesSearch;
    });
  }, [initialProducts, selectedCategory, onlyInStock, searchQuery]);

  const handleOpenDetail = (product: Product, finish?: MaterialFinish) => {
    setSelectedProduct(product);
    setSelectedInitialFinish(finish);
  };

  return (
    <section id="catalogo" className="py-16 sm:py-24 bg-[#fcf9f4] dark:bg-[#0c0c0e] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                Colección Tutto3D Atelier
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-sans tracking-tight transition-colors">
              Catálogo de Creaciones 3D
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-base max-w-2xl font-light transition-colors">
              Explorá nuestras tres líneas exclusivas: <strong>Lámparas Lumina</strong>, <strong>Luthier 3D</strong> y <strong>DecoVerde 3D</strong> con bio-polímeros sustentables.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-500 dark:text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar lámpara, instrumento, kokedama..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#f0ede9] dark:bg-[#16161b] border border-neutral-200/80 dark:border-white/10 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
            />
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-3xl bg-[#f0ede9] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10 mb-10 shadow-lg transition-colors">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categoryList.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? "bg-amber-500 text-neutral-950 shadow-[0_0_15px_rgba(245,158,11,0.3)] font-bold scale-[1.02]"
                      : "bg-[#fcf9f4] dark:bg-[#1c1c22] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-[#282830] dark:hover:text-white border border-neutral-200/60 dark:border-white/5"
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Stock Toggle */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 select-none">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 accent-amber-500 cursor-pointer"
              />
              <span>Sólo En Stock</span>
            </label>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white dark:bg-[#202028] text-amber-800 dark:text-amber-300 border border-neutral-200 dark:border-amber-500/20 font-bold shadow-sm">
              {filteredProducts.length} {filteredProducts.length === 1 ? "pieza" : "piezas"}
            </span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetail={handleOpenDetail}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl bg-[#f0ede9] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10">
            <p className="text-lg font-bold text-neutral-900 dark:text-white">
              No se encontraron piezas con los filtros seleccionados.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Probá limpiando la búsqueda o seleccionando otra categoría.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Todos");
                setOnlyInStock(false);
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs"
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        initialFinish={selectedInitialFinish}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

