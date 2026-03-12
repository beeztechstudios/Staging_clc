import { useQuery } from '@tanstack/react-query'
import { fetchWithFallback, queries } from '@/lib/sanity'
import type { BlogPost, BlogPostPreview, NewsUpdate, NewsUpdatePreview, Category, SearchResult, CareerOpening } from '@/types/sanity'

// Blog post hooks
export function useBlogPosts() {
  return useQuery<BlogPostPreview[]>({
    queryKey: ['blogPosts'],
    queryFn: () => fetchWithFallback<BlogPostPreview[]>(queries.getAllBlogPosts),
  })
}

export function useBlogPost(slug: string) {
  return useQuery<BlogPost>({
    queryKey: ['blogPost', slug],
    queryFn: () => fetchWithFallback<BlogPost>(queries.getBlogPostBySlug, { slug }),
    enabled: !!slug,
  })
}

export function useFeaturedBlogPosts() {
  return useQuery<BlogPostPreview[]>({
    queryKey: ['featuredBlogPosts'],
    queryFn: () => fetchWithFallback<BlogPostPreview[]>(queries.getFeaturedBlogPosts),
  })
}

// News update hooks
export function useNewsUpdates() {
  return useQuery<NewsUpdatePreview[]>({
    queryKey: ['newsUpdates'],
    queryFn: () => fetchWithFallback<NewsUpdatePreview[]>(queries.getAllNewsUpdates),
  })
}

export function useNewsUpdate(slug: string) {
  return useQuery<NewsUpdate>({
    queryKey: ['newsUpdate', slug],
    queryFn: () => fetchWithFallback<NewsUpdate>(queries.getNewsUpdateBySlug, { slug }),
    enabled: !!slug,
  })
}

export function useFeaturedNewsUpdates() {
  return useQuery<NewsUpdatePreview[]>({
    queryKey: ['featuredNewsUpdates'],
    queryFn: () => fetchWithFallback<NewsUpdatePreview[]>(queries.getFeaturedNewsUpdates),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    refetchOnWindowFocus: false,
  })
}

// Category hooks
export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => fetchWithFallback<Category[]>(queries.getAllCategories),
  })
}

// Search hooks
export function useSearchArticles(query: string) {
  return useQuery<SearchResult[]>({
    queryKey: ['searchArticles', query],
    queryFn: () => fetchWithFallback<SearchResult[]>(queries.searchArticles, { query: `*${query}*` }),
    enabled: !!query && query.length > 2,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Career openings hooks
export function useCareerOpenings() {
  return useQuery<CareerOpening[]>({
    queryKey: ['careerOpenings'],
    queryFn: () => fetchWithFallback<CareerOpening[]>(queries.getCareerOpenings),
  })
}