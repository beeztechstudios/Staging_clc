import { createClient } from '@sanity/client';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Sanity client configuration
const client = createClient({
  projectId: 'k9qzu7ux',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Fetch all blog posts
async function fetchBlogPosts() {
  try {
    const query = `*[_type == "blogPost"] | order(publishedAt desc) {
      slug
    }`;
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Generate sitemap XML
function generateSitemap(blogPosts) {
  const baseUrl = 'https://www.clclaw.in';
  
  // Static pages
  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.9' },
    { url: '/practice-area', changefreq: 'monthly', priority: '0.9' },
    { url: '/team', changefreq: 'monthly', priority: '0.8' },
    { url: '/insights', changefreq: 'weekly', priority: '0.9' },
    { url: '/news', changefreq: 'weekly', priority: '0.9' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
    { url: '/career', changefreq: 'monthly', priority: '0.7' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    xml += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add blog posts
  blogPosts.forEach(post => {
    if (post.slug?.current) {
      xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug.current}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }
  });

  xml += `
</urlset>`;

  return xml;
}

// Main function
async function main() {
  console.log('Generating sitemap...');
  
  const blogPosts = await fetchBlogPosts();
  console.log(`Found ${blogPosts.length} blog posts`);
  
  const sitemap = generateSitemap(blogPosts);
  
  const outputPath = join(__dirname, '..', 'public', 'sitemap.xml');
  writeFileSync(outputPath, sitemap, 'utf-8');
  
  console.log(`Sitemap generated successfully at ${outputPath}`);
  console.log(`Total URLs: ${8 + blogPosts.length} (8 static + ${blogPosts.length} blog posts)`);
}

main().catch(console.error);

