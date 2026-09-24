export interface MaterialFinish {
  id: string;
  name: string;
  hex: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "Mesa" | "Colgante" | "De Pie" | "Escultural";
  price: number;
  currency: string;
  installmentsText: string;
  image: string;
  galleryImages: string[];
  dimensions: {
    height: string;
    diameter: string;
    weight: string;
  };
  specs: {
    layerResolution: string; // e.g. "0.24mm nozzle layer"
    material: string; // e.g. "Bio-PLA Orgánico Maíz"
    bulbSocket: string; // e.g. "E27 Cálido 2700K (Incluido)"
    cableType: string; // e.g. "Textil nórdico 1.8m con interruptor"
    productionTime: string; // e.g. "18 horas de impresión continua"
  };
  finishes: MaterialFinish[];
  stockStatus: "in_stock" | "made_to_order";
  stockText: string;
  featured?: boolean;
  rating?: number;
  reviewsCount?: number;
}

export interface StoreSettings {
  storeName: string;
  tagline: string;
  city: string;
  country: string;
  phoneDisplay: string;
  whatsappNumber: string; // international format without + e.g. "5492235000000"
  instagramHandle: string;
  instagramUrl: string;
  email: string;
  freeShippingZones: string[];
  paymentMethods: string[];
  bankAccount: {
    bankName: string;
    holderName: string;
    alias: string;
    cbu: string;
    cuit: string;
    instructions: string;
  };
  pickupAddress: string;
  businessHours: string;
}
