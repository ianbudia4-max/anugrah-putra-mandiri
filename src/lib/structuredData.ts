import { site } from "@/data/site";
import type { Product } from "@/data/products";
import type { Article } from "@/data/articles";
import type { FaqItem } from "@/data/faq";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.seo.siteUrl}/#organization`,
    name: site.businessName,
    alternateName: site.shortName,
    description: site.description,
    url: site.seo.siteUrl,
    image: `${site.seo.siteUrl}${site.seo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.province,
      addressCountry: "ID",
    },
    areaServed: site.location.areaServed,
    ...(site.contact.whatsapp ? { telephone: `+${site.contact.whatsapp}` } : {}),
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: `${site.seo.siteUrl}${product.image}`,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: site.businessName,
    },
    url: `${site.seo.siteUrl}/produk/${product.slug}`,
  };
}

export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${site.seo.siteUrl}${article.coverImage}`,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: site.businessName,
    },
    publisher: {
      "@type": "Organization",
      name: site.businessName,
      logo: {
        "@type": "ImageObject",
        url: `${site.seo.siteUrl}${site.seo.ogImage}`,
      },
    },
    mainEntityOfPage: `${site.seo.siteUrl}/artikel/${article.slug}`,
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
