"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { getWhatsAppLink, generalWhatsAppMessage } from "@/lib/whatsapp";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Produk", href: "/produk" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Galeri", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`w-full border-b transition-colors duration-200 ${
          scrolled ? "border-line bg-white/95 backdrop-blur" : "border-transparent bg-white"
        }`}
      >
        <div className="container-app flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link href="/" className="focus-ring flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/logo/apm-logo.png"
              alt={`${site.businessName} - ${site.tagline}`}
              width={160}
              height={106}
              priority
              className="h-16 w-auto object-contain sm:h-20"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-ring rounded-md px-3.5 py-2 text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "text-blue"
                    : "text-navy/80 hover:text-navy"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={getWhatsAppLink(generalWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring hidden h-11 items-center gap-2 rounded-lg bg-blue px-4 text-sm font-semibold text-white shadow-sm shadow-blue/20 transition-colors hover:bg-blue-dark lg:inline-flex"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.25} />
              Konsultasi WhatsApp
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
              aria-label="Buka menu navigasi"
              aria-expanded={menuOpen}
            >
              <span className="relative block h-4 w-5">
                <span className="absolute left-0 top-0 h-0.5 w-5 bg-current" />
                <span className="absolute left-0 top-[7px] h-0.5 w-5 bg-current" />
                <span className="absolute left-0 top-[14px] h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} isActive={isActive} />
    </header>
  );
}
