"use client";

import Link from "next/link";
import { format } from "date-fns";
import SearchClient from "@/components/SearchClient";
import { useSidebarData } from "@/hooks/useSidebarData";
import { BlogPostPreview, NewsUpdatePreview } from "@/types/sanity";

export default function RightSidebar() {
  const { featuredBlogs, featuredNews, isLoading, error } = useSidebarData();

  if (isLoading) {
    return (
      <aside className="right-sidebar w-full lg:w-64 xl:w-72 bg-white min-h-full flex flex-col self-start p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-100 rounded"></div>
          <div className="h-32 bg-gray-100 rounded"></div>
          <div className="h-32 bg-gray-100 rounded"></div>
        </div>
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="right-sidebar w-full lg:w-64 xl:w-72 bg-white min-h-full flex flex-col self-start p-6">
        <p className="text-sm text-red-500">Failed to load sidebar data.</p>
      </aside>
    );
  }

  return (
    <aside className="right-sidebar max-w-[252px] w-full lg:w-64 xl:w-72 flex flex-col self-start">
      {/* ── SEARCH AREA ── */}
      <div className="p-3 mb-[2px] bg-[#E5ECE3]">
        <SearchClient />
      </div>

      {/* ── MISSION AND VISION ── */}
      {/* <div className="py-[16px] px-[11px] h-[78px] bg-[#a4be99] border-l-4 border-[#22461B]">
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "11.8px",
            color: "#163C0F",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
          className="mb-[11px]"
        >
          MISSION AND VISION
        </h3>
        <div className="w-full h-px bg-white opacity-40 mb-[5px]" />
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            lineHeight: "18px",
            fontSize: "11.9px",
            color: "#22461B",
            letterSpacing: "-0.25px",

          }}

        >
          Distinctly Different
        </p>
      </div> */}

      {/* ── WHAT'S NEW (BLOGS) ── */}
      <div className="py-[23.5px] px-[11px] mt-1 border-l-4 border-[#22461B]" style={{ background: "linear-gradient(to top, #e6e7e5, #f1f2f1)" }}>
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "11.8px",
            color: "#A30000",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
          className="mb-[11px]"
        >
          WHAT&apos;S NEW
        </h3>
        <div className="w-full h-[2px] bg-white opacity-40 mb-[5px]" />
        <div className="space-y-2">
          {featuredBlogs?.slice(0, 2).map((blog: BlogPostPreview) => (
            <div key={blog._id} className="group">
              <Link href={`/blog/${blog.slug.current}`}>
                <h4
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "11.6px",
                    lineHeight: "14px"
                  }}
                  className="text-black group-hover:text-[#a40502] transition-colors duration-200"
                >
                  {blog.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontStyle: "Regular",
                    fontSize: "9.4px",
                    color: "#808080",
                    lineHeight: "16px",
                    letterSpacing: "0%",
                    verticalAlign: "middle"

                  }}
                  className="mt-1"
                >
                  {blog.category?.name}: {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </p>
              </Link>
              <div className="w-full h-px bg-gray-100 mt-5 group-last:hidden" />
            </div>
          ))}
        </div>
      </div>

      {/* ── NEWSLETTER (NEWS) ── */}
      <div className="py-[23.5px] px-[11px] mt-1 " style={{ background: "linear-gradient(to top, #e6e7e5, #f1f2f1)" }}>
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "11.8px",
            color: "#A30000",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
          className="mb-[11px]"
        >
          NEWSLETTER
        </h3>
        <div className="w-full h-[2px] bg-white opacity-40 mb-[5px]" />
        <div className="space-y-2">
          {featuredNews?.slice(0, 3).map((news: NewsUpdatePreview) => (
            <div key={news._id} className="group cursor-pointer">
              <Link href={`/news/${news.slug.current}`}>
                <h4
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "11.6px",
                    lineHeight: "14px"
                  }}
                  className="text-black group-hover:text-[#a40502] transition-colors duration-200"
                >
                  {news.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontStyle: "Regular",
                    fontSize: "9.4px",
                    color: "#808080",
                    lineHeight: "16px",
                    letterSpacing: "0%",
                    verticalAlign: "middle"

                  }}
                  className="mt-1"
                >
                  {format(new Date(news.publishedAt), "MMMM dd, yyyy")}
                </p>
              </Link>
              <div className="w-full h-px bg-gray-100 mt-5 group-last:hidden" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
