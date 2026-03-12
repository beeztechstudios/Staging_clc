// pages/career.tsx
"use client";
import Head from "next/head";
import Layout from "@/components/Layout";
import Career from "@/components/Career";
export default function CareerPage() {
  const metaTitle = "Legal Careers in Tax & Commercial Law | Join CLC Team";
  const metaDescription = "Explore legal careers in tax and commercial law at CLC. We offer growth-focused opportunities for lawyers in litigation, dispute resolution, and regulatory advisory.";
  const canonicalUrl = "https://www.clclaw.in/career";
  const ogImage = "https://www.clclaw.in/favicon.png";

  const OgTitle = "Build Your Legal Career in Tax & Commercial Law | CLC";
  const OgDesc = "Join Commercial Law Chamber for career opportunities in tax, commercial law, litigation, and dispute resolution. Work with leading legal professionals.";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="legal careers in tax and commercial law, tax lawyer jobs, commercial law jobs, legal job openings, law firm careers india, advocate jobs" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={OgTitle} />
        <meta property="og:description" content={OgDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={OgTitle} />
        <meta name="twitter:description" content={OgDesc} />
        <meta name="twitter:image" content={ogImage} />

        <link rel="canonical" href={canonicalUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Legal Career Opportunities",
              "description": metaDescription,
              "identifier": {
                "@type": "PropertyValue",
                "name": "Commercial Law Chamber",
                "value": "CLC-CAREER"
              },
              "datePosted": "2025-01-01",
              "validThrough": "2025-12-31",
              "employmentType": ["FULL_TIME", "PART_TIME", "INTERN"],
              "hiringOrganization": {
                "@type": "LegalService",
                "name": "Commercial Law Chamber",
                "sameAs": "https://www.clclaw.in",
                "logo": "https://www.clclaw.in/favicon.png"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "New Delhi",
                  "addressCountry": "IN"
                }
              },
              "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "INR",
                "value": {
                  "@type": "QuantitativeValue",
                  "value": "Competitive",
                  "unitText": "MONTH"
                }
              },
              "jobBenefits": [
                "Collaborative Environment",
                "Learning & Development",
                "Professional Growth",
                "Work-Life Balance",
                "Mentorship Opportunities",
                "Training Programs"
              ],
              "qualifications": "LLB degree or equivalent legal qualification. Passion for tax and commercial law. Strong research and analytical skills.",
              "skills": ["Tax Law", "Commercial Disputes", "Legal Research", "Litigation", "Regulatory Compliance"],
              "workHours": "Monday - Friday: 9:00 AM - 7:00 PM, Saturday: 10:00 AM - 4:00 PM"
            }),
          }}
        />
      </Head>
      <Layout>
        <Career />
      </Layout>
    </>
  );
}
