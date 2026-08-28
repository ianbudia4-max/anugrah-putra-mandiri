import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, MessageCircle, Clock } from "lucide-react";
import { site } from "@/data/site";
import { getWhatsAppLink, generalWhatsAppMessage } from "@/lib/whatsapp";
import { productCategories } from "@/data/products";

const navColumns = [
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Portofolio", href: "/portofolio" },
      { label: "Galeri", href: "/galeri" },
      { label: "Artikel", href: "/artikel" },
      { label: "Kontak", href: "/kontak" },
    ],
  },
  {
    title: "Produk",
    links: productCategories.map((c) => ({
      label: c.name,
      href: `/produk?kategori=${c.slug}`,
    })),
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-app grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-16">
        <div>
          <Image
            src="/images/logo/apm-logo.png"
            alt={site.businessName}
            width={160}
            height={106}
            className="h-11 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        {navColumns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring text-sm text-white/60 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Kontak</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <span>{site.location.fullAddress}</span>
            </li>
            <li>
              <a
                href={getWhatsAppLink(generalWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex gap-2.5 hover:text-white"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <span>{site.contact.whatsappDisplay}</span>
              </a>
            </li>

            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <span>Senin–Jumat {site.hours.weekday}, Sabtu {site.hours.saturday}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-app flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.businessName}. Seluruh hak cipta dilindungi.
          </p>
          <p>Sukoharjo, Jawa Tengah, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
