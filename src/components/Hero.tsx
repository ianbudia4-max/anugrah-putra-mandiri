"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { getWhatsAppLink, generalWhatsAppMessage } from "@/lib/whatsapp";

const highlights = ["Custom Ukuran", "Beragam Pilihan Produk", "Konsultasi Langsung"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue/20 blur-3xl" aria-hidden="true" />

      <div className="container-app relative grid grid-cols-1 items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase text-orange">
            Produsen Papan Tulis
          </span>

          <h1 className="text-balance mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Solusi Papan Tulis untuk Berbagai Kebutuhan
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70 sm:text-base">
            Anugrah Putra Mandiri menyediakan berbagai pilihan papan tulis untuk sekolah,
            kantor, instansi, ruang meeting, dan kebutuhan custom.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-sm text-white/75">
                <CheckCircle2 className="h-4 w-4 text-blue" strokeWidth={2.25} />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/produk" variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Lihat Produk
            </Button>
            <Button
              href={getWhatsAppLink(generalWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              icon={<MessageCircle className="h-4 w-4" />}
              className="!border-white/20 !bg-white/5 !text-white hover:!bg-white/10"
            >
              Konsultasi WhatsApp
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30">
            <Image
              src="/images/products/whiteboard-magnetik.jpg"
              alt="Contoh produk whiteboard Anugrah Putra Mandiri terpasang di ruang kelas"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-line bg-white px-5 py-3.5 shadow-xl sm:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Kategori Produk</p>
            <p className="mt-0.5 text-lg font-bold text-navy">5+ Jenis Papan Tulis</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
