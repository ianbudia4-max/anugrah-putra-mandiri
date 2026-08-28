import type { Metadata } from "next";
import { MapPin, MessageCircle, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import { generalWhatsAppMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Anugrah Putra Mandiri untuk konsultasi kebutuhan papan tulis Anda melalui WhatsApp, email, atau kunjungi lokasi kami di Sukoharjo.",
  alternates: { canonical: "/kontak" },
};

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: site.contact.whatsappDisplay,
    note: "Respon tercepat melalui WhatsApp",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    value: site.location.fullAddress,
    note: "Sukoharjo, Jawa Tengah",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: `Senin–Jumat ${site.hours.weekday}`,
    note: `Sabtu ${site.hours.saturday} · Minggu ${site.hours.sunday}`,
  },
];

export default function KontakPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Kontak" }]} />

      <section className="py-10 sm:py-12 lg:py-16">
        <div className="container-app">
          <SectionHeading
            eyebrow="Kontak Kami"
            title="Kami Siap Membantu Kebutuhan Papan Tulis Anda"
            description="Silakan hubungi kami melalui WhatsApp untuk konsultasi tercepat, atau gunakan kontak lain di bawah ini."
          />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(({ icon: Icon, title, value, note }) => (
              <div
                key={title}
                className="rounded-xl border border-line bg-white p-5 sm:p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>

                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-ink/50">
                  {title}
                </h3>

                <p className="mt-1 text-[15px] font-semibold text-navy">
                  {value}
                </p>

                <p className="mt-1 text-xs text-ink/50">
                  {note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            
            {/* WhatsApp */}
            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
              <h2 className="text-lg font-bold text-navy">
                Konsultasi Langsung via WhatsApp
              </h2>

              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
                Cara tercepat untuk mendapatkan informasi produk, ukuran, dan
                harga adalah dengan menghubungi kami langsung melalui WhatsApp.
                Tim kami akan membantu menjawab pertanyaan Anda.
              </p>

              <div className="mt-6">
                <WhatsAppButton
                  message={generalWhatsAppMessage()}
                  size="lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat via WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            {/* Google Maps */}
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <iframe
                src={site.location.mapsEmbedUrl}
                title={`Lokasi ${site.businessName}`}
                className="h-[350px] w-full sm:h-[400px] lg:h-full lg:min-h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}