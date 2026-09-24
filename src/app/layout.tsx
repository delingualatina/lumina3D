import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import settings from "@/data/settings.json";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${settings.storeName} | ${settings.tagline} en ${settings.city}`,
  description:
    "Atelier de luminarias de diseño paramétrico impresas en 3D en Mar del Plata. Fabricación artesanal en Bio-PLA ecológico. Entregas a domicilio en 24/48 hs y pedidos directos por WhatsApp.",
  keywords: [
    "lámparas 3d mar del plata",
    "iluminación 3d",
    "diseño paramétrico",
    "lámparas bio pla",
    "decoración mar del plata",
    "veladores 3d",
    "lámparas colgantes 3d",
    "lumina 3d atelier",
  ],
  openGraph: {
    title: `${settings.storeName} | ${settings.tagline}`,
    description:
      "Luminarias paramétricas 3D fabricadas en Mar del Plata con bio-polímeros sustentables. Coordiná directo por WhatsApp.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/images/spiral-dune.png",
        width: 1200,
        height: 630,
        alt: `${settings.storeName} Lámparas 3D`,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("lumina-theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#fcf9f4] text-[#1c1c19] dark:bg-[#0c0c0e] dark:text-[#f4f4f5] min-h-screen flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
