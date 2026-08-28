import { site } from "@/data/site";

/**
 * Membuat link WhatsApp dengan pesan otomatis.
 * Satu sumber kebenaran untuk seluruh CTA WhatsApp di website.
 */
export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function productWhatsAppMessage(productName: string): string {
  return `Halo ${site.businessName}, saya tertarik dengan produk ${productName}. Saya ingin mendapatkan informasi mengenai ukuran dan harga.`;
}

export function generalWhatsAppMessage(): string {
  return `Halo ${site.businessName}, saya ingin bertanya-tanya mengenai produk papan tulis yang tersedia.`;
}

export function customWhatsAppMessage(): string {
  return `Halo ${site.businessName}, saya ingin berkonsultasi mengenai kebutuhan papan tulis custom untuk ukuran/spesifikasi khusus.`;
}
