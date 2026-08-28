import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productCategories } from "@/data/products";

export function CategoryShowcase() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
      {productCategories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/produk?kategori=${cat.slug}`}
          className="focus-ring group flex flex-col justify-between rounded-xl border border-line bg-white p-4 transition-colors hover:border-blue sm:p-5"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-[15px] font-bold text-navy">{cat.name}</h3>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/30 transition-colors group-hover:text-blue" />
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-ink/55">{cat.description}</p>
        </Link>
      ))}
    </div>
  );
}
