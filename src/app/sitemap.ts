import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.seo.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tentang-kami`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/produk`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/portofolio`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/galeri`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/artikel`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/kontak`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/produk/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/artikel/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: a.publishedAt,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
