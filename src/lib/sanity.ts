import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

// Create client with fallback for custom domain CORS issues
export const client = createClient({
  projectId: 'k9qzu7ux',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  perspective: 'published',
  stega: { enabled: false },
  timeout: 30000,
  withCredentials: false
})

// Fallback client without CDN
export const clientNoCdn = createClient({
  projectId: 'k9qzu7ux',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  perspective: 'published',
  timeout: 30000
})

// FIXED URL builder
const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Fetch with fallback
export async function fetchWithFallback<T>(
  query: string,
  params: Record<string, any> = {}
): Promise<T> {
  try {
    return await client.fetch<T>(query, params)
  } catch (error: any) {
    if (
      error?.message?.includes('CORS') ||
      error?.message?.includes('Network') ||
      error?.statusCode === 0
    ) {
      return await clientNoCdn.fetch<T>(query, params)
    }
    throw error
  }
}

export const queries = {
  getAllBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id, title, slug, excerpt, publishedAt, readTime, isNew,
    featuredImage, downloadUrl,
    category->{ name, slug, color }
  }`,

  getBlogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id, title, slug, excerpt, content, publishedAt, readTime, isNew,
    featuredImage, downloadUrl,
    category->{ name, slug, color },
    seo
  }`,

  getAllNewsUpdates: `*[_type == "newsUpdate"] | order(publishedAt desc) {
    _id, title, slug, excerpt, type, publishedAt, readTime, isNew,
    featuredImage, downloadUrl
  }`,

  getNewsUpdateBySlug: `*[_type == "newsUpdate" && slug.current == $slug][0] {
    _id, title, slug, excerpt, content, type, publishedAt, readTime, isNew,
    featuredImage, downloadUrl, seo
  }`,

  getAllCategories: `*[_type == "category"] | order(name asc) {
    _id, name, slug, description, color
  }`,

  getFeaturedBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc)[0...4] {
    _id, title, slug, excerpt, publishedAt,
    featuredImage,
    category->{ name, slug, color }
  }`,

  getFeaturedNewsUpdates: `*[_type == "newsUpdate"] | order(publishedAt desc)[0...3] {
    _id, title, slug, type, publishedAt
  }`,

  searchArticles: `*[_type in ["blogPost", "newsUpdate"] && (title match $query || excerpt match $query)]
    | order(publishedAt desc)[0...10] {
    _id, _type, title, slug, excerpt, publishedAt, type,
    category->{ name }
  }`,

  getCareerOpenings: `*[_type == "careerOpening" && isActive == true]
    | order(sortOrder asc, _createdAt desc) {
    _id, title, location, type, experience, requirements,
    sortOrder, isActive
  }`
}
