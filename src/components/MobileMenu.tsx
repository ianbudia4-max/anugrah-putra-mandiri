"use client";

import Link from "next/link";
import { X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getWhatsAppLink, generalWhatsAppMessage } from "@/lib/whatsapp";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
  isActive: (href: string) => boolean;
}

export function MobileMenu({ open, onClose, navLinks, isActive }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-navy/40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-xs flex-col bg-white shadow-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
          >
            <div className="flex h-16 items-center justify-between border-b border-line px-5">
              <span className="text-sm font-bold uppercase tracking-wide text-navy">Menu</span>
              <button
                type="button"
                onClick={onClose}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-navy"
                aria-label="Tutup menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Navigasi mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`focus-ring rounded-lg px-3 py-3 text-[15px] font-semibold ${
                    isActive(link.href) ? "bg-blue/10 text-blue" : "text-navy/85"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-line p-4">
              <Link
                href={getWhatsAppLink(generalWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex h-12 items-center justify-center gap-2 rounded-lg bg-blue text-[15px] font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.25} />
                Konsultasi WhatsApp
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
