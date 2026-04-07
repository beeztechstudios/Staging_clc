"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";

// Dynamic imports for components not needed for initial paint (FCP/LCP)
const Carousel = dynamic(() => import("@/components/ui/carousel").then(m => m.Carousel), { ssr: false });
const CarouselContent = dynamic(() => import("@/components/ui/carousel").then(m => m.CarouselContent), { ssr: false });
const CarouselItem = dynamic(() => import("@/components/ui/carousel").then(m => m.CarouselItem), { ssr: false });
const CarouselNext = dynamic(() => import("@/components/ui/carousel").then(m => m.CarouselNext), { ssr: false });
const CarouselPrevious = dynamic(() => import("@/components/ui/carousel").then(m => m.CarouselPrevious), { ssr: false });
const TeamMember = dynamic(() => import("@/components/TeamMember"), { ssr: false });

import { teamMembers } from "@/components/TeamMember";

const distinctions = [
  {
    text: "Boutique law practice specializing in GST law services, Customs, and commercial dispute resolution",
  },
  {
    text: "Led by top tax lawyers in India with deep advisory and litigation expertise",
  },
  {
    text: "Business law chambers with a Pan-India legal network and seamless multi-jurisdictional coverage",
  },
  {
    text: "Research-intensive, precedent-driven legal strategy",
  },
  {
    text: "Regular representation before the Supreme Court of India",
  },
];

const Hero = () => {
  const [openPracticeTitle, setOpenPracticeTitle] = useState<string | null>(null);

  return (

    <div className="flex-1 overflow-x-hidden">
      <HeroAnimations />
      {/* Hero Section */}
      <section className="relative isolate px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 md:px-12 md:pt-4 lg:px-16 xl:mx-0 text-center justify-end space-y-10 sm:space-y-12 overflow-hidden overflow-x-clip">

        <HeroBackground />
        <div className="relative z-10 mx-auto w-full max-w-2xl px-0 sm:px-4">

          <h1
            className="hero-text-title hero-title mb-[6px] text-center text-[#163C0F] text-[34px] leading-[38px] tracking-[1px] sm:text-[40px] sm:leading-[44px] md:mt-[104px] lg:text-[46px] lg:leading-[50px] lg:tracking-[2px]"
            style={{
              fontFamily: "League Spartan, sans-serif",
              fontWeight: 700,
            }}
          >
            Commitment to Legal Excellence.
          </h1>

          <p className="hero-text-subpara  text-[#163C0F] hero-para max-w-lg mx-auto mb-6 sm:mb-8 px-1 sm:px-0">
            Trusted by corporations and individuals across India for strategic legal solutions.

          </p>

          <div className="flex w-full min-w-0 flex-col hero-buttons justify-center items-center gap-3 sm:flex-row sm:gap-[12px]">
            <Link
              href="/about#notable-achievements"
              className="hero-text-button bg-[#163C0F] sm:hover:scale-105 z-10 cursor-pointer text-white flex min-h-[44px] w-full max-w-[100%] sm:max-w-[280px] items-center justify-center gap-[10px] px-[14px] py-[8px] text-center sm:h-[40px] sm:w-[166px]"
            >
              Our Commitment
            </Link>

            <Link
              href="/about"
              className="hero-text-button bg-white sm:hover:scale-105 text-gray-800 z-10 cursor-pointer border border-[#163C0F]/20 flex min-h-[44px] w-full max-w-[100%] sm:max-w-[280px] items-center justify-center gap-[10px] px-[14px] py-[8px] text-center hover:bg-gray-50 transition-all sm:h-[40px] sm:w-[166px]">
              Review Firm Profile

            </Link>
          </div>
        </div>


        {/* Stats */}
        <div className="relative z-10 grid w-full max-w-[600px] grid-cols-3 gap-1 px-1 pb-1 min-[420px]:gap-3 min-[420px]:px-2 sm:flex sm:items-center sm:justify-center sm:gap-12 sm:px-0 sm:pb-0 mx-auto">
          {[
            { value: 500, suffix: "+", label: "CASES WON" },
            { value: 25, suffix: "+", label: "YEARS EXPERIENCE" },
            { value: 98, suffix: "%", label: "CLIENT SATISFACTION" },
          ].map(({ value, suffix, label }) => (
            <div key={label} className="hero-stat min-w-0 w-full px-1">

              <div
                className="hero-text-counter counter text-[#336429] mb-1"
                data-value={value}
                data-suffix={suffix}
              >
                0{suffix}
              </div>

              <div className="hero-text-stat-label">
                {label}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-4 px-4 sm:px-8 hero-buttons md:px-12 lg:px-16 xl:mx-10">

        <h2 className="hero-text-section-heading text-[#336429] mt-[24px] mb-[12px]">
          WELCOME TO COMMERCIAL LAW CHAMBER
        </h2>

        <div className="hero-text-body text-gray-800 space-y-4">
          <p>
            Established in 2008, the Commercial Law Chamber (CLC) is a boutique law firm widely recognized for its specialized tax advisory and high-stakes dispute resolution practice. As one of the top taxation law firms in India, we maintain a strong focus on the Goods and Services Tax Act and Customs laws. Led by the team of best GST lawyers in Delhi and supported by a team of 15 associates, CLC delivers strategic, research-driven, and commercially aligned legal solutions across complex Tax and Commercial Disputes.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center hero-text-meta text-[#163C0F] hover:underline mb-0"
          >
            Read More &rarr;
          </Link>
          <div className="w-full border border-dotted mt-[24px] border-[#22461B]/50"></div>
        </div>

      </section>

      {/* Our Distinction */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:mx-10">
        <h2 className="hero-text-section-heading text-[#336429] mt-[14px] mb-[16px]">
          OUR DISTINCTION
        </h2>

        {/* Checkerboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-none">
          {distinctions.map(({ text }, index) => {
            const isMobileGreen = index % 2 === 0;
            const isDesktopGreen = (Math.floor(index / 2) + (index % 2)) % 2 === 0;
            return (
              <div
                key={text}
                className={`p-[11px] flex items-center min-h-[110px] ${isMobileGreen ? "bg-[#EBF3E8]" : "bg-white"
                  } ${isDesktopGreen ? "sm:bg-[#EBF3E8]" : "sm:bg-white"}`}
              >
                <p className="hero-text-distinction">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
        <Link
          href="/about"
          className="inline-flex items-center hero-text-meta text-[#163C0F] mt-5 hover:underline mb-0"
        >
          Read More &rarr;
        </Link>

      </section>

      {/* Core Practice Areas */}
      <section className="py-8 sm:py-[24px] px-4 bg-white sm:px-8 md:px-12 lg:px-16 xl:mx-10">
        {(() => {
          const practiceAreas = [
            {
              title: "Direct Tax",
              href: "/practice-area/direct-tax-practice",
              points: [
                "Corporate & Individual Tax Advisory",
                "Cross-Border Tax Structuring & International Tax",
                "Transfer Pricing",
                "Transaction Structuring & Reorganisations",
                "Tax Disputes & Litigation",
              ],
            },
            {
              title: "Indirect Tax Practice (GST & Customs)",
              href: "/practice-area/indirect-tax-gst-customs",
              points: [
                "GST Advisory, Compliance & Audit Management",
                "Supply Chain Planning & Optimisation",
                "Classification, Valuation & ITC Matters",
                "Customs Advisory",
                "Investigations & Enforcement",
                "Litigation & Appellate Representation",
              ],
            },
            {
              title: "Commercial & Regulatory Disputes Practice",
              href: "/practice-area/commercial-regulatory-disputes",
              points: [
                "Commercial Disputes",
                "Regulatory Disputes & Enforcement",
                "Sector-Focused Regulatory Support",
              ],
            },
            {
              title: "Customs Law Practice",
              href: "/practice-area/customs-law-practice",
              points: [
                "Customs Classification, Valuation & Duty Assessment",
                "FTA/Origin Benefits & Cross-Border Structuring",
                "Port Clearance, Warehousing & Bonded Operations",
                "DGFT, FTP Schemes & Incentive Advisory",
                "Investigations, Enforcement & Anti-Smuggling Proceedings",
                "Customs Litigation & Appellate Representation",
              ],
            },
          ];

          return (
            <>
              <div className="w-full border border-dotted border-[#22461B]/50 mb-[20px]"></div>
              <h2 className="hero-text-section-heading mb-[16px] text-[#336429]">
                CORE PRACTICE AREAS
              </h2>
              <p className="hero-text-body text-[#374151] mb-6">
                Comprehensive legal solutions across key practice domains
              </p>
              <div className="space-y-0">
                {practiceAreas.map(({ title, points, href }, index) => {
                  const isOpen = openPracticeTitle === title;

                  return (
                    <div
                      key={title}
                      className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] overflow-hidden"
                      onMouseEnter={() => setOpenPracticeTitle(title)}
                      onMouseLeave={() => setOpenPracticeTitle(null)}
                      style={
                        index % 2 === 0
                          ? {
                            background: "linear-gradient(to right, #CFE2C8, #FFFFFF)",
                          }
                          : { background: "linear-gradient(to left, #CFE2C8, #FFFFFF)" }
                      }
                    >
                      <div className="flex items-center px-[8px] py-[17px]">
                        <Link href={href} className="hero-text-practice-title hover:underline break-words">
                          {title}
                        </Link>
                      </div>

                      <div className="px-[8px] py-[17px] flex items-center sm:justify-end">
                        <button
                          type="button"
                          className="hero-text-practice-desc inline-flex items-center gap-1 text-[#163C0F] hover:underline"
                        >
                          View practice scope
                          <span
                            aria-hidden="true"
                            className={`inline-block transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          >
                            &#9662;
                          </span>
                        </button>
                      </div>

                      {isOpen && (
                        <div className="sm:col-span-2 px-[8px] pb-[17px]">
                          <div className="bg-white/85 p-4 sm:p-5">
                            <ul className="space-y-2 hero-text-distinction text-[#1F2937] list-disc pl-5">
                              {points.map((point) => (
                                <li key={point} className="break-words">
                                  {point}
                                </li>
                              ))}
                            </ul>

                            <Link
                              href={href}
                              className="inline-flex items-center gap-2 hero-text-meta text-[#163C0F] hover:underline mt-4"
                            >
                              View More
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </>
          );
        })()}


        <Link
          href="/practice-area"
          className="inline-flex items-center hero-text-meta mt-5 text-[#163C0F] hover:underline mb-0"
        >
          Read More &rarr;
        </Link>

      </section>

      {/* Our Team */}
      <section className="py-8 sm:py-[24px] px-4 bg-white sm:px-8 md:px-12 lg:px-16 xl:mx-10">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-[24px]"></div>
        <h2 className="hero-text-section-heading mb-[16px] text-[#336429]">
          OUR TEAM
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
          {Object.values(teamMembers).map((member) => {
            return (
              <div key={member.id} className="h-full">
                <TeamMember member={member} />
              </div>
            );
          })}
        </div>

        {Carousel && (
          <Carousel
            opts={{ align: "start", loop: true }}
            className="hidden w-full px-10 lg:block"
          >
            <CarouselContent className="-ml-4">
              {Object.values(teamMembers).map((member) => {
                return (
                  <CarouselItem
                    key={member.id}
                    className="pl-4 basis-1/2"
                  >
                    <TeamMember member={member} />

                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-0 top-[42%] border-[#163C0F]/30 text-[#163C0F]" />
            <CarouselNext className="right-0 top-[42%] border-[#163C0F]/30 text-[#163C0F]" />
          </Carousel>
        )}
        <Link
          href="/team"
          className="inline-flex items-center mt-5 hero-text-meta text-[#163C0F] hover:underline mb-0"
        >
          Read More &rarr;
        </Link>
      </section>

    </div>
  );
};

export default Hero;
