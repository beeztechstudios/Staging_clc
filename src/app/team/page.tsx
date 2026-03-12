// ---------------------------------------------
// Team Page  (SERVER COMPONENT)
// ---------------------------------------------
import { Metadata } from "next";
import Layout from "@/components/Layout";
import Team from "@/components/Team";
import { teamMembers } from "@/components/TeamMember";
import Script from "next/script";

// ---------------------------------------------
// PAGE-SPECIFIC SEO  (Google LOVES THIS)
// ---------------------------------------------
export const metadata: Metadata = {
  title: "Vivek Sarin | Top Tax Lawyers in India | Best Tax Lawyer in India",
  description:
    "Meet Vivek Sarin, the best tax lawyer in India, and our team of experts. Leading taxation law firms in Delhi for high-stakes Tax and Commercial Disputes.",
  keywords:
    "best tax lawyers in india, top tax attorney, tax advisory, commercial disputes, best gst lawyer, supreme court lawyers, regulatory disputes",
  alternates: {
    canonical: "https://www.clclaw.in/team",
  },
  openGraph: {
    title: "Vivek Sarin | Top Tax Lawyers in India | Best Tax Lawyer in India",
    description:
      "Meet Vivek Sarin, the best tax lawyer in India, and our team of experts. Leading taxation law firms in Delhi for high-stakes Tax and Commercial Disputes.",
    url: "https://www.clclaw.in/team",
    images: ["https://www.clclaw.in/favicon.png"],
    locale: "en_IN",
    siteName: "Commercial Law Chamber",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek Sarin | Top Tax Lawyers in India | Best Tax Lawyer in India",
    description:
      "Meet Vivek Sarin, the best tax lawyer in India, and our team of experts. Leading taxation law firms in Delhi for high-stakes Tax and Commercial Disputes.",
    images: ["https://www.clclaw.in/clc-logo.png"],
  },
  robots: "index, follow",
};

// ---------------------------------------------
// JSON-LD (Team Specific Only)
// ---------------------------------------------
function generateTeamSchema() {
  const members = Object.values(teamMembers).map((m) => ({
    "@type": "Person",
    name: m.name,

  }));

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Commercial Law Chamber",
    url: "https://www.clclaw.in/team",
    description:
      "Meet the legal experts of Commercial Law Chamber specializing in tax and commercial disputes.",
    employee: members,
  };
}

// ---------------------------------------------
// PAGE COMPONENT (SERVER)
// ---------------------------------------------
export default function TeamPage() {
  return (
    <>
      {/* TEAM JSON-LD – Allowed because it's page-specific */}
      <Script
        id="team-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateTeamSchema()),
        }}
      />

      {/* Layout (Client Component) wraps the page content */}
      <Layout>
        <Team />
      </Layout>
    </>
  );
}
