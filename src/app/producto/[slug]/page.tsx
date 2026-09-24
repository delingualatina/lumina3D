import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Ruler,
  Layers,
  Lightbulb,
  Clock,
  Truck,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import WhatsAppButton from "@/components/WhatsAppButton";
import rawProducts from "@/data/products.json";
import { Product } from "@/types/product";
import { formatPrice, getWhatsAppProductUrl } from "@/lib/whatsapp";
import settings from "@/data/settings.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = rawProducts as Product[];
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = (rawProducts as Product[]).find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Producto no encontrado | Lúmina 3D",
    };
  }

  return {
    title: `${product.name} | Lámpara 3D Mar del Plata - ${settings.storeName}`,
    description: `${product.tagline}. Fabricada en Mar del Plata con bio-polímeros sustentables. Envío 24/48 hs.`,
    openGraph: {
      title: `${product.name} - ${settings.storeName}`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = (rawProducts as Product[]).find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const defaultFinish = product.finishes[0];
  const whatsAppUrl = getWhatsAppProductUrl(product, defaultFinish);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f4] dark:bg-[#0c0c0e] text-neutral-900 dark:text-[#f4f4f5] transition-colors duration-300">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/#catalogo"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Catálogo Principal</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Gallery (Left) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#f0ede9] dark:bg-[#141418] shadow-xl dark:shadow-2xl border border-neutral-200/80 dark:border-white/10 transition-colors">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/75 dark:bg-[#0c0c0e]/90 backdrop-blur-md text-xs font-mono font-bold text-neutral-100 border border-white/15 shadow-sm">
                  {product.category}
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {product.galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-2xl overflow-hidden bg-[#f0ede9] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10 shadow-sm"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details (Right) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                    {product.stockStatus === "in_stock"
                      ? "En Stock • Entrega Inmediata"
                      : "Fabricación por Pedido"}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white font-sans tracking-tight leading-tight transition-colors">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-2.5 leading-relaxed transition-colors">{product.tagline}</p>
              </div>

              {/* Pricing Box */}
              <div className="p-6 rounded-3xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 dark:border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
                <div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 block font-mono">Precio de Atelier:</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white font-sans transition-colors">
                    {formatPrice(product.price, product.currency)}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 inline-block mb-1">
                    10% OFF por Transferencia
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 block font-mono">
                    {product.installmentsText}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3 transition-colors">
                <p>{product.description}</p>
              </div>

              {/* Available Finishes */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase text-neutral-500 dark:text-neutral-400 mb-3 tracking-wider">
                  Acabados y Texturas Disponibles:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.finishes.map((finish) => (
                    <div
                      key={finish.id}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#f0ede9] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10 transition-colors"
                    >
                      <span
                        className="w-6 h-6 rounded-full flex-shrink-0 border border-neutral-300 dark:border-white/20 shadow-sm"
                        style={{ backgroundColor: finish.hex }}
                      />
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-neutral-900 dark:text-white block truncate">
                          {finish.name}
                        </span>
                        <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block truncate">
                          {finish.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="p-6 rounded-3xl bg-[#f0ede9] dark:bg-[#141418] border border-neutral-200/80 dark:border-white/10 space-y-3.5 transition-colors">
                <h3 className="text-xs font-mono font-bold uppercase text-amber-800 dark:text-amber-400 tracking-wider">
                  Ficha Técnica de Fabricación
                </h3>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10px] uppercase font-mono">Dimensiones</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {product.dimensions.height} x {product.dimensions.diameter} ({product.dimensions.weight})
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10px] uppercase font-mono">Capa / Resolución</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {product.specs.layerResolution}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10px] uppercase font-mono">Foco & Rosca</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {product.specs.bulbSocket}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 dark:text-neutral-400 block text-[10px] uppercase font-mono">Bio-Material</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {product.specs.material}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Purchase CTA */}
              <div className="pt-4 space-y-3">
                <WhatsAppButton
                  text="Pedir este Modelo por WhatsApp"
                  size="lg"
                  message={`¡Hola ${settings.storeName}! Quiero encargar el modelo *${product.name}* (Acabado: ${defaultFinish.name}).`}
                  contentName={`Product Page: ${product.name} - ${defaultFinish.name}`}
                  className="w-full"
                />
                <p className="text-center text-xs text-neutral-500 dark:text-neutral-400">
                  Envíos a domicilio • Coordinamos forma de pago y entrega directa
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
