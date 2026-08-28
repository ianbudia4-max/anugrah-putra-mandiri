import type { Metadata } from "next";
import Image from "next/image";
import { Target, Compass, HeartHandshake, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal Anugrah Putra Mandiri, produsen dan jasa pembuatan papan tulis yang berbasis di Sukoharjo, Jawa Tengah.",
  alternates: { canonical: "/tentang-kami" },
};

const values = [
  {
    icon: Target,
    title: "Fokus pada Kebutuhan Pelanggan",
    description:
      "Setiap produk dibuat dengan memperhatikan kebutuhan spesifik pelanggan, bukan sekadar produksi massal.",
  },
  {
    icon: Compass,
    title: "Konsisten dalam Kualitas",
    description:
      "Kami berupaya menjaga konsistensi kualitas material dan proses produksi pada setiap pesanan.",
  },
  {
    icon: HeartHandshake,
    title: "Komunikasi yang Terbuka",
    description:
      "Kami mengutamakan komunikasi yang jelas dengan pelanggan mulai dari konsultasi hingga pesanan selesai.",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Tentang Kami" }]} />

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-app grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Profil Perusahaan"
              title="Anugrah Putra Mandiri"
              description="Anugrah Putra Mandiri (APM) adalah usaha yang bergerak di bidang produksi dan jasa pembuatan berbagai jenis papan tulis, termasuk papan tulis custom, yang berbasis di Sukoharjo, Jawa Tengah."
            />
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/65">
              Kami melayani kebutuhan papan tulis untuk berbagai kalangan, mulai dari sekolah,
              TK/PAUD, universitas, kantor, perusahaan, instansi, hingga kontraktor/interior dan
              reseller yang membutuhkan mitra produksi papan tulis.
            </p>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-ink/65">
              Bidang usaha kami adalah produsen sekaligus penyedia jasa pembuatan papan tulis,
              dengan pendekatan yang mengutamakan kejelasan komunikasi dan kesesuaian produk
              dengan kebutuhan masing-masing pelanggan.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src="/images/about/workshop-1.jpg"
              alt="Workshop produksi Anugrah Putra Mandiri"
              fill
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-app grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy">Visi</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
              Menjadi produsen papan tulis yang dipercaya oleh sekolah, kantor, dan berbagai
              instansi karena kualitas produk dan pelayanan yang konsisten.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy">Misi</h2>
            <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/65">
              <li>• Menyediakan berbagai jenis papan tulis sesuai kebutuhan pelanggan.</li>
              <li>• Memberikan pelayanan konsultasi yang responsif dan jelas.</li>
              <li>• Menjaga kualitas material dan proses produksi pada setiap pesanan.</li>
              <li>• Melayani kebutuhan custom dengan pendekatan yang fleksibel.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <SectionHeading eyebrow="Nilai Perusahaan" title="Prinsip yang Kami Pegang" />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-line bg-white p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue/10 text-blue">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-navy">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/60 sm:text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-app grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface lg:order-2">
            <Image
              src="/images/about/workshop-2.jpg"
              alt="Area produksi papan tulis Anugrah Putra Mandiri"
              fill
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <SectionHeading
              eyebrow="Area Layanan"
              title="Melayani Sukoharjo dan Sekitarnya"
            />
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink/65">
              Kami berbasis di Sukoharjo, Jawa Tengah, dan melayani area sekitar termasuk Solo
              (Surakarta), Karanganyar, Sragen, Boyolali, Klaten, dan Wonogiri. Untuk kebutuhan di
              luar area tersebut, silakan konsultasikan langsung melalui WhatsApp.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {site.location.areaServed.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink/65"
                >
                  <MapPin className="h-3 w-3 text-blue" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container-app">
          <CTASection
            title="Ingin Tahu Lebih Lanjut Tentang Kami?"
            description="Hubungi kami melalui WhatsApp untuk berdiskusi mengenai kebutuhan papan tulis Anda."
          />
        </div>
      </section>
    </>
  );
}
