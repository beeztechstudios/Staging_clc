// ---------------------------------------------
// Practice Area Page  (SERVER COMPONENT)
// ---------------------------------------------
import { Metadata } from "next";
import Script from "next/script";
import Layout from "@/components/Layout";
import Expertise from "@/components/Expertise";

// ---------------------------------------------
// PAGE SEO (Correct for Next.js App Router)
// ---------------------------------------------
export const metadata: Metadata = {
  title: "Direct & Indirect Tax Services | Business Tax Lawyer",
  description:
    "Expert direct & indirect tax solutions by leading income tax lawyers and gst lawyers. We handle corporate tax and gst and complex Tax and Commercial Disputes.",
  keywords:
    "tax and commercial law, corporate tax advisory, indirect tax law firms in delhi, commercial dispute resolution, regulatory disputes, cross border tax lawyer, business tax advisory",
  alternates: {
    canonical: "https://www.clclaw.in/practice-area",
  },
  openGraph: {
    title: "Direct & Indirect Tax Services | Business Tax Lawyer",
    description:
      "Expert direct & indirect tax solutions by leading income tax lawyers and gst lawyers. We handle corporate tax and gst and complex Tax and Commercial Disputes.",
    url: "https://www.clclaw.in/practice-area",
    images: ["https://www.clclaw.in/favicon.png"],
    type: "website",
    locale: "en_IN",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct & Indirect Tax Services | Business Tax Lawyer",
    description:
      "Expert direct & indirect tax solutions by leading income tax lawyers and gst lawyers. We handle corporate tax and gst and complex Tax and Commercial Disputes.",
  },
  robots: "index, follow",
};

// ---------------------------------------------
// JSON-LD — PAGE-SPECIFIC (NOT GLOBAL)
// ---------------------------------------------
const practiceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legal Practice Areas",
  provider: {
    "@type": "LegalService",
    name: "Commercial Law Chamber",
    url: "https://www.clclaw.in",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Practice Areas",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Direct & Indirect Tax",
          description:
            "Cross-border tax advisory, transfer pricing, customs valuation, GST disputes, DTAA, FTA, and international tax strategy.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Regulatory & Commercial Disputes",
          description:
            "Representation in SEBI, CCI, NCLT matters, shareholder disputes, arbitration, regulatory compliance, and commercial litigation.",
        },
      },
    ],
  },
};

// ---------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------
export default function PracticeAreaPage() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="practice-area-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceAreaSchema) }}
      />

      <Layout>
        <Expertise />
      </Layout>
    </>
  );
}
