"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Download, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { useState, useMemo, useEffect } from "react";
import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";

interface NewsItem {
  _id: string;
  title: string;
  slug: { current: string };
  type: string;
  publishedAt: string;
  featuredImage?: any;
  readTime?: string;
  downloadUrl?: string;
  isNew?: boolean;
}

interface NewsUpdatesProps {
  initialNews: NewsItem[];
}

const NewsUpdates = ({ initialNews }: NewsUpdatesProps) => {
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredNews = useMemo(() => {
    if (selectedType === "All") return initialNews;
    return initialNews.filter((news) => news.type === selectedType);
  }, [initialNews, selectedType]);

  const totalPages = Math.max(1, Math.ceil(filteredNews.length / itemsPerPage));

  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(start, start + itemsPerPage);
  }, [filteredNews, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const typeList = ["All", "case-update", "news", "publication", "deal-corner"];

  const getTypeDisplayName = (type: string) => {
    switch (type) {
      case "case-update": return "Case Update";
      case "news": return "News";
      case "publication": return "Publication";
      case "deal-corner": return "Deal Corner";
      default: return type;
    }
  };

  return (
    <div className="flex-1 bg-white xl:mx-10 overflow-x-hidden">
      <HeroAnimations />

      {/* Header */}
      <section className="relative isolate px-4 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-12 md:px-12 md:pt-12 md:pb-12 lg:px-16 lg:pt-40 lg:pb-16 text-center space-y-1 sm:space-y-1 overflow-hidden overflow-x-clip flex items-center justify-center">
        <HeroBackground />
        <div className="relative z-10 mx-auto max-w-2xl px-0 sm:px-4 flex flex-col items-center">
          <h1 className="hero-text-title hero-title text-[#163C0F] mb-[6px] text-center">
            News & Updates
          </h1>
          <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-6 sm:mb-8">
            Stay updated with our latest cases, insights, and firm news.
          </p>
        </div>

        {/* Filter Buttons */}
      </section>

      {/* News Cards */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 hero-para">
        <div className="flex flex-wrap hero-buttons justify-center gap-2 pb-4">
          {typeList.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 transition-all hero-text-meta ${type === selectedType
                ? "bg-[#163C0F] !text-white"
                : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#163C0F] hover:text-[#163C0F]"
                }`}
            >
              {getTypeDisplayName(type)}
            </button>
          ))}
        </div>
        {filteredNews.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedNews.map((news) => (
                <article
                  key={news._id}
                  className="bg-white border border-[#22461B]/30 rounded-[16px] p-6 hover:border-[#163C0F] transition-all flex flex-col h-full"
                >
                  <div className="flex justify-between mb-4">
                    <span className="bg-[#B3C7AB]/40 text-[#163C0F] hero-text-meta font-bold px-3 py-1 rounded-full border border-[#5A6F554D]/90">
                      {getTypeDisplayName(news.type)}
                    </span>
                    {news.isNew && (
                      <span className="bg-[#163C0F] !text-white hero-text-meta font-bold px-3 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>

                  {/* Image */}
                  {news.featuredImage && (
                    <Link href={`/news/${news.slug.current}`} className="mb-4 block">
                      <img
                        src={urlFor(news.featuredImage).width(600).height(300).fit("crop").url()}
                        alt={news.title}
                        className="w-full h-auto object-cover border border-[#22461B]/20 hover:border-[#163C0F] transition-all"
                      />
                    </Link>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="hero-text-meta flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> {format(new Date(news.publishedAt), "MMMM d, yyyy")}
                    </span>
                    {news.readTime && (
                      <span className="hero-text-meta flex items-center gap-2">
                        <Eye className="h-4 w-4" /> {news.readTime}
                      </span>
                    )}
                  </div>

                  <Link href={`/news/${news.slug.current}`} className="group mb-4 block">
                    <h3 className="hero-text-card-title group-hover:text-[#1a4a1a] transition-colors">
                      {news.title}
                    </h3>
                  </Link>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <Link href={`/news/${news.slug.current}`} className="flex-1">
                      <Button size="sm" className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
                        <Eye className="mr-2 h-4 w-4" /> Read More
                      </Button>
                    </Link>
                    {news.downloadUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#163C0F] text-[#163C0F] hover:bg-[#163C0F] hover:text-white"
                        asChild
                      >
                        <a href={news.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setCurrentPage((prev) => Math.max(1, prev - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
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
                onClick={() => {
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                disabled={currentPage === totalPages}
                className="bg-[#163C0F] hover:bg-[#1a4a1a] text-white disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          </>
        ) : (
          <div
            className="px-[8px] py-[17px]"
            style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
          >
            <p className="hero-text-practice-desc">No news updates found in this category.</p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-[24px]" />
        <div className="border border-[#22461B]/30 rounded-[16px] p-6 sm:p-8 text-center">
          <h3 className="hero-text-section-heading text-[#336429] mb-[12px]">
            Stay Updated with Legal Developments
          </h3>
          <p className="hero-text-body text-gray-800 max-w-md mx-auto mb-6">
            Subscribe to our newsletter to receive the latest case updates, news, and regulatory changes directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-[#22461B]/30 focus:ring-2 focus:ring-[#163C0F] hero-text-body"
            />
            <Button className="bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="w-full border border-dotted border-[#22461B]/50 mt-[24px]" />
      </section>
    </div>
  );
};

export default NewsUpdates;
