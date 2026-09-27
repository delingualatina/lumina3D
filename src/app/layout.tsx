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
  title: `${settings.storeName} | Atelier 3D: Lámparas Lumina, Luthier 3D & DecoVerde en ${settings.city}`,
  description:
    "Atelier de diseño y manufactura aditiva en Mar del Plata. Lámparas paramétricas Línea Lumina, instrumentos musicales Línea Luthier 3D y diseño botánico DecoVerde 3D (natura y kokedamas). Envíos y pedidos por WhatsApp.",
  keywords: [
    "tutto3d",
    "tutto 3d atelier",
    "lámparas linea lumina",
    "instrumentos luthier 3d",
    "decoverde 3d",
    "kokedamas 3d",
    "violín 3d",
    "ukelele 3d",
    "mar del plata 3d",
    "diseño paramétrico",
    "bio pla sustentable",
  ],
  openGraph: {
    title: `${settings.storeName} | ${settings.tagline}`,
    description:
      "Atelier de diseño aditivo en Mar del Plata: Lámparas Lumina, Instrumentos Luthier 3D y DecoVerde Kokedamas. Coordiná directo por WhatsApp.",
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/images/violin-electrico-3d.jpg",
        width: 1200,
        height: 630,
        alt: `${settings.storeName} Creaciones 3D`,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/favicon.ico" }
    ],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};


import { Suspense } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import MetaPixel from "@/components/MetaPixel";

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
        {/* Meta Pixel Base Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1054376420476852');
              fbq('set', 'testEventCode', 'TEST55323');
              fbq('track', 'PageView', { test_event_code: 'TEST55323' });
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1054376420476852&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </head>
      <body className="font-sans antialiased bg-[#fcf9f4] text-[#1c1c19] dark:bg-[#0c0c0e] dark:text-[#f4f4f5] min-h-screen flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
