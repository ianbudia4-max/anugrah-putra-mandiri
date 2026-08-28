import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produk/${product.slug}`}
      className="focus-ring group flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-shadow hover:shadow-lg hover:shadow-navy/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-[15px] font-bold text-navy sm:text-base">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-[13px] leading-relaxed text-ink/60 sm:text-sm">
          {product.shortDescription}
        </p>
        <span className="focus-ring mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
          Lihat Detail
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
