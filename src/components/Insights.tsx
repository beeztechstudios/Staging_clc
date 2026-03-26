"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Download, Eye } from "lucide-react";
import Link from "next/link";
import { useBlogPosts, useCategories } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { useState, useMemo, useEffect } from "react";
import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";

const Insights = () => {
  const { data: blogs = [], isLoading: blogsLoading } = useBlogPosts();
  const { data: categories = [] } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categoryList = useMemo(
    () => ["All", ...categories.map((cat) => cat.name)],
    [categories]
  );

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") return blogs;
    return blogs.filter((blog) => blog.category?.name === selectedCategory);
  }, [blogs, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / itemsPerPage));

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBlogs.slice(start, start + itemsPerPage);
  }, [filteredBlogs, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="flex-1 bg-white xl:mx-10 overflow-x-hidden">
      <HeroAnimations />

      {/* Header */}
      <section className="relative isolate px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 md:px-12 md:pt-4 lg:px-16 text-center space-y-10 sm:space-y-12 overflow-hidden overflow-x-clip">
        <HeroBackground />
        <div className="relative z-10 mx-auto max-w-2xl px-0 sm:px-4">
          <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">
            Insights & Blog
          </p>
          <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-8">
            Insights on GST law, input tax credit rules, and recent tax and  and commercial dispute rulings.
          </p>
        </div>

        {/* Category Filter */}
      </section>

      {/* Blog Grid */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 hero-buttons ">
        <div className="flex flex-wrap hero-buttons justify-center gap-2 pb-4">
          {categoryList.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 transition-all hero-text-meta ${category === selectedCategory
                ? "bg-[#163C0F] !text-white"
                : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#163C0F] hover:text-[#163C0F]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading skeleton */}
        {blogsLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border border-[#22461B]/30 rounded-[16px] p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog cards */}
        {!blogsLoading && filteredBlogs.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedBlogs.map((blog) => {
                const date = blog.publishedAt
                  ? format(new Date(blog.publishedAt), "MMMM d, yyyy")
                  : "Unknown";
                return (
                  <article
                    key={blog._id}
                    className="bg-white border border-[#22461B]/30 rounded-[16px] p-6 hover:border-[#163C0F] transition-all flex flex-col h-full"
                  >
                    {/* Category tag + New label */}
                    <div className="flex justify-between mb-4">
                      <span className="bg-[#B3C7AB]/40 text-[#163C0F] hero-text-meta font-bold px-3 py-1 rounded-full border border-[#5A6F554D]/90">
                        {blog.category?.name || "Uncategorized"}
                      </span>
                      {blog.isNew && (
                        <span className="bg-[#163C0F] !text-white hero-text-meta font-bold px-3 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>

                    {/* Title */}


                    {/* Featured image */}
                    {blog.featuredImage && (
                      <Link href={`/blog/${blog.slug.current}`} className="mb-4 block">
                        <img
                          src={urlFor(blog.featuredImage).width(600).height(300).fit("crop").url()}
                          alt={blog.title}
                          className="w-full h-auto object-cover border border-[#22461B]/20 hover:border-[#163C0F] transition-all"
                        />
                      </Link>
                    )}

                    {/* Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="hero-text-meta flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> {date}
                      </span>
                      <span className="hero-text-meta flex items-center gap-2">
                        <Eye className="h-4 w-4" /> {blog.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${blog.slug.current}`} className="group mb-4 block">
                      <h3 className="hero-text-card-title group-hover:text-[#1a4a1a] transition-colors">
                        {blog.title}
                      </h3>
                    </Link>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      <Link href={`/blog/${blog.slug.current}`} className="flex-1">
                        <Button size="sm" className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
                          <Eye className="mr-2 h-4 w-4" /> Read Article
                        </Button>
                      </Link>
                      {blog.downloadUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#163C0F] text-[#163C0F] hover:bg-[#163C0F] hover:text-white"
                          asChild
                        >
                          <a href={blog.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="border-[#163C0F] text-[#163C0F] hover:bg-[#163C0F] hover:text-white disabled:opacity-50"
              >
                Previous
              </Button>

              <span className="hero-text-meta text-[#163C0F]">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="bg-[#163C0F] hover:bg-[#1a4a1a] text-white disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          </>
        )}

        {/* Empty state */}
        {!blogsLoading && filteredBlogs.length === 0 && (
          <div
            className="px-[8px] py-[17px]"
            style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
          >
            <p className="hero-text-practice-desc">No articles found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Insights;
