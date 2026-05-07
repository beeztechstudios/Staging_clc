"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";

// Lazy-loaded sections (defer hydration for TBT improvement)
const WelcomeSection = dynamic(() => import("@/components/sections/WelcomeSection"), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />, // Minimal placeholder
});

const DistinctionSection = dynamic(() => import("@/components/sections/DistinctionSection"), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />,
});

const PracticeAreasSection = dynamic(() => import("@/components/sections/PracticeAreasSection"), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />,
});

const TeamSection = dynamic(() => import("@/components/sections/TeamSection"), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />,
});

const Hero = () => {
  return (
    <div className="flex-1 overflow-x-hidden">
      <HeroAnimations />
      
      {/* Hero Section - SSR for LCP */}
      <section className="relative isolate px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 md:px-12 md:pt-4 lg:px-16 xl:mx-0 text-center justify-end space-y-10 sm:space-y-12 overflow-hidden overflow-x-clip">
        <HeroBackground />
        <div className="relative z-10 mx-auto w-full max-w-2xl px-0 sm:px-4">
          <h1
            className="hero-text-title hero-title mb-[6px] text-center text-[#163C0F] text-[34px] leading-[38px] tracking-[1px] sm:text-[40px] sm:leading-[44px] md:mt-[104px] lg:text-[46px] lg:leading-[50px] lg:tracking-[2px]"
            style={{
              fontFamily: "var(--font-league-spartan), sans-serif",
              fontWeight: 700,
            }}
          >
            Commitment to Legal Excellence.
          </h1>

          <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-6 sm:mb-8 px-1 sm:px-0">
            Trusted by corporations and individuals across India for strategic legal solutions.
          </p>

          <div className="flex w-full min-w-0 flex-col hero-buttons justify-center items-center gap-3 sm:flex-row sm:gap-[12px]">
            <Link
              href="/about#notable-achievements"
              className="hero-text-button bg-[#163C0F] sm:hover:scale-105 z-10 cursor-pointer text-white flex min-h-[44px] w-full max-w-[100%] sm:max-w-[280px] items-center justify-center gap-[10px] px-[14px] py-[8px] text-center sm:h-[40px] sm:w-[166px]"
            >
              Our Commitment
            </Link>

            <a
              href="/CLCFirmProfile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-text-button bg-white sm:hover:scale-105 text-gray-800 z-10 cursor-pointer border border-[#163C0F]/20 flex min-h-[44px] w-full max-w-[100%] sm:max-w-[280px] items-center justify-center gap-[10px] px-[14px] py-[8px] text-center hover:bg-gray-50 transition-all sm:h-[40px] sm:w-[166px]"
            >
              Review Firm Profile
            </a>
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
              <div className="hero-text-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lazy-loaded sections */}
      <WelcomeSection />
      <DistinctionSection />
      <PracticeAreasSection />
      <TeamSection />
    </div>
  );
};

export default Hero;
