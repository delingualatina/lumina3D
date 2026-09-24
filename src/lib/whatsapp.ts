import settings from "@/data/settings.json";
import { Product, MaterialFinish } from "@/types/product";

export function formatPrice(amount: number, currency = "ARS"): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getWhatsAppNumber(): string {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    settings.whatsappNumber ||
    "5492235000000"
  );
}

export function getWhatsAppUrl(customMessage?: string): string {
  const number = getWhatsAppNumber();
  if (!customMessage) {
    return `https://wa.me/${number}`;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(customMessage)}`;
}

export function getWhatsAppProductUrl(
  product: Product,
  selectedFinish?: MaterialFinish
): string {
  const finishText = selectedFinish
    ? ` en acabado *${selectedFinish.name}*`
    : "";
  const priceFormatted = formatPrice(product.price, product.currency);

  const message = `¡Hola *${settings.storeName}*! 👋

Me interesa la lámpara *${product.name}*${finishText} (${priceFormatted}).

Quisiera consultar disponibilidad y coordinar la compra. ¡Muchas gracias!`;

  return getWhatsAppUrl(message);
}

export function getWhatsAppCustomQuoteUrl(): string {
  const message = `¡Hola *${settings.storeName}*! 👋

Me gustaría consultar por un diseño o medida personalizada en 3D. ¡Gracias!`;

  return getWhatsAppUrl(message);
}

export function getWhatsAppBankTransferUrl(): string {
  const message = `¡Hola *${settings.storeName}*! 👋

Quisiera consultar los datos bancarios para realizar una transferencia. ¡Muchas gracias!`;

  return getWhatsAppUrl(message);
}
