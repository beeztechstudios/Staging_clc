import { Metadata } from "next";
import NewsUpdates from "@/components/NewsUpdates";
import Layout from "@/components/Layout";
import { client } from "@/lib/sanity";

// ----------------------
// Fetch Logic
// ----------------------
async function getNewsUpdates() {
  const query = `
    *[_type == "newsUpdate"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      type,
      publishedAt,
      featuredImage,
      readTime,
      downloadUrl,
      isNew
    }
  `;
  
  try {
    return await client.fetch(query, {}, { next: { revalidate: 60 } }); // Revalidate every 60s
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

// ----------------------
// Metadata
// ----------------------
export const metadata: Metadata = {
  title: "Latest Tax Law News & Legal Judgments | Commercial Law Chamber",
  description: "Stay updated with the latest tax law news, GST amendments, and landmark legal judgments from High Courts and the Supreme Court of India.",
  keywords: "tax law news india, latest gst updates, income tax judgments, supreme court tax rulings, legal news india, clclaw news, commercial law updates",
  openGraph: {
    title: "Legal Newsroom: Latest Tax & Corporate Law Updates",
    description: "Read the latest insights on GST, Income Tax, and Corporate Law judgments. Expert analysis of recent High Court and Supreme Court rulings.",
    type: "website",
    url: "https://www.clclaw.in/news",
    images: [{ url: "https://www.clclaw.in/favicon.png" }],
  },
};

// ----------------------
// Server Component
// ----------------------
export default async function NewsPage() {
  const newsData = await getNewsUpdates();

  return (
    <Layout>
      {/* We pass the fetched data down to the client component */}
      <NewsUpdates initialNews={newsData} />
    </Layout>
  );
}