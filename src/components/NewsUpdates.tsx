"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Download, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { useState } from "react";
import HeroAnimations from "@/lib/heroAnimation";

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

  const filteredNews =
    selectedType === "All"
      ? initialNews
      : initialNews.filter((news) => news.type === selectedType);

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
    <div className="flex-1 bg-white xl:mx-10">
      <HeroAnimations />

      {/* Header */}
      <section className="relative py-4 px-4 sm:px-8 md:px-12 lg:px-16 text-center overflow-hidden">
        <div className="mx-auto max-w-2xl px-2">
          <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">
            Latest Tax Law News &amp; Legal Judgments
          </p>
          <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-8">
            Stay informed with our latest case updates, news, and publications from Commercial Law Chambers.
          </p>
        </div>

        {/* Filter Buttons */}
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
      </section>

      {/* News Cards */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 hero-para border-t border-dotted border-[#22461B]/50">
        {filteredNews.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredNews.map((news) => (
              <div
                key={news._id}
                className="bg-white border border-[#22461B]/30 rounded-[16px] p-6 hover:border-[#163C0F] transition-all flex flex-col h-full"
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-[#B3C7AB]/40 text-[#163C0F] hero-text-meta font-bold px-3 py-1 rounded-full border border-[#5A6F554D]/90">
                      {getTypeDisplayName(news.type)}
                    </span>
                    {news.isNew && (
                      <span className="bg-[#163C0F] !text-white hero-text-meta font-bold px-3 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>


                </div>

                <div className="flex flex-col flex-grow">
                  {/* Image */}
                  {news.featuredImage?.asset?._ref && (
                    <Link href={`/news/${news.slug.current}`} className="mb-4 block">
                      <Image
                        src={urlFor(news.featuredImage).width(600).height(300).fit("crop").url()}
                        alt={news.featuredImage.alt || news.title}
                        width={600}
                        height={300}
                        className="w-full h-auto object-cover border border-[#22461B]/20 hover:border-[#163C0F] transition-all"
                      />
                    </Link>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="hero-text-meta flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(news.publishedAt), "MMMM d, yyyy")}</span>
                    </div>
                    {news.readTime && (
                      <div className="hero-text-meta flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>{news.readTime}</span>
                      </div>
                    )}
                  </div>

                  <Link href={`/news/${news.slug.current}`} className="group">
                    <h3 className="hero-text-card-title mb-3 group-hover:text-[#1a4a1a] transition-colors">
                      {news.title}
                    </h3>
                  </Link>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Link href={`/news/${news.slug.current}`} className="flex-1">
                      <Button className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] text-white">
                        <Eye className="mr-2 h-4 w-4" /> Read More
                      </Button>
                    </Link>
                    {news.downloadUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#163C0F] text-[#163C0F] hover:bg-[#163C0F] hover:text-white"
                      >
                        <a href={news.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
