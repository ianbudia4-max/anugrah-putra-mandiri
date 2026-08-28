import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { site } from "@/data/site";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: site.seo.siteUrl,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `${site.seo.siteUrl}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-white">
      <div className="container-app flex items-center gap-1.5 overflow-x-auto py-3 text-xs text-ink/60 sm:text-sm">
        <Link href="/" className="focus-ring flex items-center gap-1 shrink-0 hover:text-navy">
          <Home className="h-3.5 w-3.5" />
          <span>Beranda</span>
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 shrink-0">
            <ChevronRight className="h-3.5 w-3.5 text-ink/30" />
            {item.href ? (
              <Link href={item.href} className="focus-ring hover:text-navy">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-navy">{item.label}</span>
            )}
          </span>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
