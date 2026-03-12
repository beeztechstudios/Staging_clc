export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export interface SanityBlock {
  _type: 'block'
  style?: 'normal' | 'h3' | 'h4'
  children: Array<{
    _type: 'span'
    text: string
    marks?: string[]
  }>
  markDefs?: Array<{
    _type: string
    _key: string
  }>
  listItem?: 'bullet' | 'number'
}

export interface SanityImageBlock {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

export type SanityContent = (SanityBlock | SanityImageBlock)[]

export interface Category {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: string
  color?: string
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: SanityContent
  publishedAt: string
  readTime: string
  isNew: boolean
  featuredImage?: SanityImage
  downloadUrl?: string
  category: Category
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface NewsUpdate {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: SanityContent
  type: 'case-update' | 'news' | 'publication' | 'deal-corner'
  publishedAt: string
  readTime: string
  isNew: boolean
  featuredImage?: SanityImage
  downloadUrl?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
  }
}

export interface BlogPostPreview {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  publishedAt: string
  readTime: string
  isNew: boolean
  featuredImage?: SanityImage
  downloadUrl?: string
  category: Category
}

export interface NewsUpdatePreview {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  type: 'case-update' | 'news' | 'publication' | 'deal-corner'
  publishedAt: string
  readTime: string
  isNew: boolean
  featuredImage?: SanityImage
  downloadUrl?: string
}

export interface SearchResult {
  _id: string
  _type: 'blogPost' | 'newsUpdate'
  title: string
  slug: {
    current: string
  }
  excerpt: string
  publishedAt: string
  readTime: string
  isNew: boolean
  type?: 'case-update' | 'news' | 'publication' | 'deal-corner'
  category?: Category
}

export interface CareerOpening {
  _id: string
  title: string
  location: string
  type: string
  experience: string
  requirements: string[]
  sortOrder?: number
  isActive?: boolean
}