"use client";

import useSWR from "swr";
import { client } from "@/lib/sanity";
import { queries } from "@/lib/sanity";

const fetcher = (query: string) => client.fetch(query);

export function useSidebarData() {
  const { data: featuredBlogs, error: blogsError } = useSWR(
    "featuredBlogs",
    () => fetcher(queries.getFeaturedBlogPosts),
    {
      revalidateOnFocus: false,
      dedupingInterval: 1000 * 60 * 10, // 10 min cache
    }
  );

  const { data: featuredNews, error: newsError } = useSWR(
    "featuredNews",
    () => fetcher(queries.getFeaturedNewsUpdates),
    {
      revalidateOnFocus: false,
      dedupingInterval: 1000 * 60 * 10,
    }
  );

  return {
    featuredBlogs,
    featuredNews,
    isLoading: !featuredBlogs || !featuredNews,
    error: blogsError || newsError,
  };
}
