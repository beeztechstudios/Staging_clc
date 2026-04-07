import type { Metadata } from "next";
import Script from "next/script";
import { Inter, League_Spartan } from "next/font/google"; // Import next/font
import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

/**
 * Global metadata (defaults). Per-page metadata will override these.
 */
export const metadata: Metadata = {
  title: "Tax & Commercial Disputes Law Firm | Commercial Law Chamber",
  description:
    "Specialized lawyers for GST, tax, and complex commercial disputes with 20+ years of experience and Supreme Court representation. Book a consultation.",
  keywords: [
    ' tax disputes', 'commercial disputes', 'gst disputes', 'commercial litigation', 'supreme court lawyer', ' indirect tax', 'business disputes'

  ],
  metadataBase: new URL("https://www.clclaw.in"),
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Leading Tax & Commercial Disputes Law Firm in India",
    description:
      "Commercial Law Chamber provides trusted tax and commercial dispute resolution, regulatory advocacy, and international tax expertise backed by legal excellence.",
    url: "https://www.clclaw.in",
    siteName: "Commercial Law Chamber",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.clclaw.in/clc-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leading Tax & Commercial Disputes Law Firm in India",
    description:
      "Commercial Law Chamber provides trusted tax and commercial dispute resolution, regulatory advocacy, and international tax expertise backed by legal excellence.",
    creator: "@CommercialLawChamber",
    images: ["https://www.clclaw.in/clc-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const GTM_ID = "GTM-NMFHWGHN";
const GA_ID = "G-QKQ1MWQ1RM";

/**
 * JSON-LD: combined LegalService + LocalBusiness schema from SEO team.
 * Keep this in sync with actual business data.
 */
const localBusinessLD = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  name: "Commercial Law Chamber",
  description:
    "Leading Tax & Commercial Disputes Law Firm in India",
  url: "https://www.clclaw.in",
  logo: "https://www.clclaw.in/clc-logo.png",
  foundingDate: "2008",
  priceRange: "Consultation required",
  telephone: "+91-99999-20118",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A, 1 A2, Jangpura Rd, Block A, Jangpura Extension",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110014",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Direct & Indirect Tax Advisory",
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
        itemOffered: { "@type": "Service", name: "Regulatory Disputes" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "International Tax" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${leagueSpartan.variable}`}>
      <body className="antialiased font-sans">

        {/* Google Tag Manager (script) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {/* Google Analytics (gtag) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a] = c[a] || function(){ (c[a].q = c[a].q || []).push(arguments) };
              t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/ub7g39owwk";
              y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ub7g39owwk");
          `}
        </Script>

        {/* JSON-LD Structured Data (LocalBusiness + LegalService) */}
        <Script id="local-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(localBusinessLD)}
        </Script>

        {/* Noscript fallbacks & GTM noscript iframe (placed at top of body) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* App root (children) */}
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
