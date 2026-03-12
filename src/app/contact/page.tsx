// ---------------------------------------------
// CONTACT PAGE – SERVER COMPONENT (SEO PERFECT)
// ---------------------------------------------

import { Metadata } from "next";
import Script from "next/script";
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";

// ---------------------------------------------
// PAGE METADATA (SEO)
// ---------------------------------------------
export const metadata: Metadata = {
  title: "Contact Us | Tax Consultant Near Me | Income Tax Lawyer Near Me",
  description:
    "Looking for a tax consultant near me or income tax lawyer near me? Contact Commercial Law Chamber for expert state tax lawyer and sales tax lawyer services.",
  keywords:
    "litigation and dispute resolution law firms, contact litigation lawyer, commercial dispute resolution, tax litigation, regulatory disputes, contact us ",
  alternates: { canonical: "https://www.clclaw.in/contact" },

  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  openGraph: {
    title: "Contact Us | Tax Consultant Near Me | Income Tax Lawyer Near Me",
    description:
      "Looking for a tax consultant near me or income tax lawyer near me? Contact Commercial Law Chamber for expert state tax lawyer and sales tax lawyer services.",
    url: "https://www.clclaw.in/contact",
    images: ["https://www.clclaw.in/favicon.png"],
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Tax Consultant Near Me | Income Tax Lawyer Near Me",
    description:
      "Looking for a tax consultant near me or income tax lawyer near me? Contact Commercial Law Chamber for expert state tax lawyer and sales tax lawyer services.",
    images: ["https://www.clclaw.in/favicon.png"],
  },
};

// ---------------------------------------------
// PAGE SCHEMA (NO DUPLICATES)
// ---------------------------------------------
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Commercial Law Chamber",
  url: "https://www.clclaw.in/contact",
  description:
    "Reach out to CLC’s experienced legal team for assistance in litigation, disputes, tax matters, and commercial law issues. Get reliable legal guidance today.",
  mainEntity: {
    "@type": "LegalService",
    name: "Commercial Law Chamber",
    url: "https://www.clclaw.in",
    telephone: "+91-99999-20118",
    email: "legal@clclaw.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Commercial Law Chamber",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "India" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "Consultation",
    serviceType: [
      "Tax Advisory",
      "Commercial Disputes",
      "Regulatory Compliance",
      "GST Litigation",
      "Direct Tax",
      "Indirect Tax",
    ],
  },

  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.clclaw.in" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.clclaw.in/contact" },
    ],
  },
};

// ---------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------
export default function ContactPage() {
  return (
    <>
      {/* JSON-LD STRUCTURED DATA */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <Layout>
        <Contact />
      </Layout>
    </>
  );
}
