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
            Comprehensive Tax Services
          </h1>

          <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-6 sm:mb-8 px-1 sm:px-0">
            We provide strategic counsel on complex matters at the intersection of tax and regulation.
          </p>
        </div>

        {/* Stats */}
        <div className="relative z-10 grid w-full max-w-[600px] grid-cols-3 gap-1 px-1 pb-1 min-[420px]:gap-3 min-[420px]:px-2 sm:flex sm:items-center sm:justify-center sm:gap-12 sm:px-0 sm:pb-0 mx-auto">
          {[
            { value: "3000", suffix: "+", label: "PETITIONS FILED" },
            { value: "800", suffix: "+", label: "CLIENTS SERVED" },
            { value: "85", suffix: "%+", label: "SUCCESS RATE" },
          ].map(({ value, suffix, label }) => (
            <div key={label} className="hero-stat min-w-0 w-full px-1">

              <div
                className="hero-text-counter counter text-[#336429] mb-1"
                data-value={value}
                data-suffix={suffix}
              >
                {value}{suffix}
              </div>

              <div className="hero-text-stat-label">
                {label}
              </div>

            </div>
          ))}
        </div>

        {/* <div className="relative z-10 mx-auto w-full max-w-2xl px-0 sm:px-4">
          <p className="hero-text-body text-[#374151]">
            Proven capability to represent clients across forums, from tribunals to the Supreme Court supported by a pan-India network.
          </p>
        </div> */}
      </section>

      {/* Practice Area Listing */}

      {/* Core Practice Areas */}
      <section className="py-8 sm:py-[24px] px-4 bg-white sm:px-8 md:px-12 lg:px-16 xl:mx-10">
        {(() => {
          const practiceAreas = [
            {
              title: "Direct Tax Practice",
              href: "/practice-area/direct-tax-practice",
              description: "Our Direct Tax practice delivers comprehensive, strategic, and forward-looking tax support to businesses, high-net-worth individuals, multinational groups, funds, and promoter families. CLC's team brings deep industry experience, technical expertise, and a solution-oriented approach to help clients navigate the evolving landscape of Indian taxation, global tax reforms, and multi-jurisdictional tax challenges.",
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
              description: "Our Indirect Tax practice is recognised for delivering practical, sector-focused, and legally robust advice that empowers businesses to manage GST and customs complexities with confidence. As businesses evolve, GST rules, investigation practices, and judicial trends continue to shift, making expert guidance indispensable.",
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
              description: "CLC's Commercial & Regulatory Disputes practice specialises in managing diverse, nuanced, and high-stakes conflicts that arise across industries and regulatory frameworks. Our strength lies in combining litigation excellence with a deep understanding of operational realities, governance structures, and sector-specific regulations.",
              points: [
                "Commercial Disputes",
                "Regulatory Disputes & Enforcement",
                "Sector-Focused Regulatory Support",
              ],
            },
            {
              title: "Customs Law Practice",
              href: "/practice-area/customs-law-practice",
              description: "CLC's Customs Law practice offers comprehensive legal support across the full spectrum of import-export regulations, global trade compliance, port procedures, investigations, and high-stakes customs litigation. With India's trade environment becoming increasingly enforcement-driven, led by DRI, SIIB, Customs Audit, and valuation/anti-smuggling wing, businesses require precise, strategic, and commercially aware guidance. Our team brings together deep legal expertise, sectoral knowledge, and an understanding of global supply chains to help clients manage risk, ensure smooth operations, and resolve disputes efficiently.",
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
                {practiceAreas.map(({ title, description, href }, index) => {
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
                      onMouseEnter={() => setOpenPracticeTitle(title)}
                      onMouseLeave={() => setOpenPracticeTitle(null)}
                    >
                      <div className="flex items-center px-[8px] py-[17px]">
                        <p className="hero-text-practice-title ">
                          {title}
                        </p>
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
                            <p className="hero-text-distinction text-[#1F2937] leading-relaxed mb-4">
                              {description}
                            </p>

                            <ul className="list-disc list-inside space-y-2 mb-4">
                              {practiceAreas.find(pa => pa.title === title)?.points?.map((point, i) => (
                                <li key={i} className="hero-text-distinction text-[#1F2937]">
                                  {point}
                                </li>
                              ))}
                            </ul>

                            <Link
                              href={href}
                              className="inline-flex items-center gap-2 hero-text-meta text-[#163C0F] hover:underline"
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
