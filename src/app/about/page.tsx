// ---------------------------------------------
// ABOUT PAGE – FULL SSR + SEO OPTIMIZED
// ---------------------------------------------

import { Metadata } from "next";
import Script from "next/script";
import Layout from "@/components/Layout";
import About from "@/components/About";

// ---------------------------------------------
// SEO METADATA (NO <Head>, FULL SSR)
// ---------------------------------------------
export const metadata: Metadata = {
  title: "About Us - Premier Tax Law Firm & Boutique Law Practice",
  description:
    "Learn why CLC is a top taxation law firm in India. As a specialized tax law firm, we provide excellence in tax advisory and indirect tax litigation.",
  keywords:
    "best tax law firm, boutique law firm, corporate tax advisory, tax and corporate law, dispute resolution law firm",
  alternates: {
    canonical: "https://www.clclaw.in/about",
  },
  openGraph: {
    title:
      "About Us - Premier Tax Law Firm & Boutique Law Practice",
    description:
      "Learn why CLC is a top taxation law firm in India. As a specialized tax law firm, we provide excellence in tax advisory and indirect tax litigation.",
    url: "https://www.clclaw.in/about",
    images: ["https://www.clclaw.in/favicon.png"],
    locale: "en_IN",
    type: "website",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Premier Tax Law Firm & Boutique Law Practice",
    description:
      "Learn why CLC is a top taxation law firm in India. As a specialized tax law firm, we provide excellence in tax advisory and indirect tax litigation.",
    images: ["https://www.clclaw.in/favicon.png"],
  },
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

// ---------------------------------------------
// ABOUT PAGE SCHEMA
// ---------------------------------------------
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "LegalService",
    name: "Commercial Law Chamber",
    description:
      "Learn about Commercial Law Chamber, one of India’s best tax law firms, delivering research-driven analysis, strategic litigation & client-centric solutions.",
    url: "https://www.clclaw.in",
    logo: "https://www.clclaw.in/favicong.png",
    foundingDate: "2008",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 18,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Tax Advisory",
      "Tax Litigation",
      "Commercial Disputes",
      "GST Litigation",
      "Regulatory Disputes",
      "Supreme Court Representation",
      "High Court Representation",
      "ITAT",
      "CESTAT",
      "VAT Tribunals",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tax Advisory and Litigation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Disputes Resolution",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GST Investigations and Refund Litigation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trade Remedies and International Tax",
          },
        },
      ],
    },
  },
};

// ---------------------------------------------
// PAGE COMPONENT (SSR BY DEFAULT)
// ---------------------------------------------
export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <Layout>
        <About />
      </Layout>
    </>
  );
}
