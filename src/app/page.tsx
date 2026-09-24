import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DimmerSimulator from "@/components/DimmerSimulator";
import ProductCatalog from "@/components/ProductCatalog";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import rawProducts from "@/data/products.json";
import { Product } from "@/types/product";

export default function Home() {
  const products = rawProducts as Product[];

  return (
    <div className="flex flex-col min-h-screen bg-[#fcf9f4] dark:bg-[#0c0c0e] text-neutral-900 dark:text-[#f4f4f5] transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Product Catalog Grid */}
        <ProductCatalog initialProducts={products} />

        {/* 2700K Interactive Dimmer Simulator */}
        <DimmerSimulator />

        {/* How to Buy Guide */}
        <HowItWorks />

        {/* FAQs */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
