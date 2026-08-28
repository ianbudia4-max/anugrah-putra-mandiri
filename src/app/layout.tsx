import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { JsonLdScript } from "@/components/JsonLdScript";
import { organizationJsonLd } from "@/lib/structuredData";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: {
    default: site.seo.defaultTitle,
    template: `%s | ${site.businessName}`,
  },
  description: site.seo.defaultDescription,
  keywords: [...site.seo.keywords],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: site.businessName,
    title: site.seo.defaultTitle,
    description: site.seo.defaultDescription,
    url: site.seo.siteUrl,
    images: [{ url: site.seo.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.defaultTitle,
    description: site.seo.defaultDescription,
    images: [site.seo.ogImage],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-surface text-ink">
        <JsonLdScript data={organizationJsonLd()} />
        <Navbar />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
