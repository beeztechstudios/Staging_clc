"use client";

import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";


const Expertise = () => {
  const [openPracticeTitle, setOpenPracticeTitle] = useState<string | null>(null);

  const practiceAreas = [
    {
      title: "Direct Tax Practice",
      href: "/practice-area/direct-tax-practice",
      subtitle:
        "End-to-end advisory, compliance, and dispute resolution across corporate, individual, and cross-border tax matters.",
    },
    {
      title: "Indirect Tax Practice (GST & Customs)",
      href: "/practice-area/indirect-tax-gst-customs",
      subtitle:
        "Comprehensive advisory, enforcement support, and litigation across GST, customs, and allied indirect taxes.",
    },
    {
      title: "Commercial & Regulatory Disputes Practice",
      href: "/practice-area/commercial-regulatory-disputes",
      subtitle:
        "Resolving complex commercial conflicts and regulatory challenges with precision and sector-driven strategy.",
    },
    {
      title: "Customs Law Practice",
      href: "/practice-area/customs-law-practice",
      subtitle:
        "Advisory, compliance, enforcement defence, and litigation across India's cross-border trade ecosystem.",
    }
  ];

  return (
    <div className="flex-1 bg-white xl:mx-10 overflow-x-hidden">
      <HeroAnimations />
      {/* Header */}
      <section className="relative isolate px-4 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12 md:px-12 md:pt-12 md:pb-12 lg:px-16 lg:pt-40 lg:pb-16 text-center space-y-10 sm:space-y-12 overflow-hidden overflow-x-clip flex items-center justify-center">
        <HeroBackground />
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-8 right-1/4 h-40 w-40 rounded-full bg-[#DCECCF] blur-3xl opacity-70" />
          <div className="absolute bottom-0 left-8 h-32 w-32 rounded-full bg-[#CFE2C8] blur-2xl opacity-60" />
        </div> */}
        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
          <h1 className="hero-text-title hero-title text-[#163C0F] mb-[6px] text-center">
            Comprehensive Tax Services
          </h1>
        </div>
      </section>

      {/* Practice Area Listing */}

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
                          onClick={() => setOpenPracticeTitle(isOpen ? null : title)}
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
                            <ul className="space-y-2 hero-text-practice-desc text-[#1F2937] list-disc pl-5">
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

      </section>
    </div>
  );
};

export default Expertise;
