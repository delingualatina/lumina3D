export interface MaterialFinish {
  id: string;
  name: string;
  hex: string;
  description: string;
}

export type ProductCategory =
  | "Lámparas (Línea Lumina)"
  | "Instrumentos (Línea Luthier 3D)"
  | "DecoVerde 3D (Natura, Kokedamas y 3D)"
  | string;

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  categoryShort?: string;
  price: number;
  currency: string;
  installmentsText: string;
  image: string;
  galleryImages: string[];
  dimensions: {
    height: string;
    diameter?: string;
    width?: string;
    depth?: string;
    weight: string;
  };
  specs: {
    layerResolution: string; // e.g. "0.20mm micro-capas"
    material: string; // e.g. "Bio-PLA Sustentable"
    bulbSocket?: string; // e.g. "E27 LED Cálido 2700K (Incluido)"
    tuning?: string; // for instruments
    pickups?: string; // for instruments
    irrigation?: string; // for plant pots
    cableType?: string;
    productionTime: string;
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

