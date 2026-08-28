import Image from "next/image";
import { MapPin } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-line bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-navy/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {item.category}
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-[15px] font-bold text-navy sm:text-base">{item.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-ink/50">
          <MapPin className="h-3.5 w-3.5" />
          {item.location}
        </p>
        <p className="mt-2.5 text-[13px] leading-relaxed text-ink/60 sm:text-sm">{item.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.products.map((p) => (
            <span
              key={p}
              className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-ink/60"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
