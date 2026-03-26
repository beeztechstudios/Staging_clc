"use client";

import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";
import TeamMember, { teamMembers } from "./TeamMember";

const Team = () => {
  return (
    <div className="flex-1 bg-white xl:mx-10 overflow-x-hidden">
      <HeroAnimations />
      {/* Team Hero Section */}
      <section className="relative isolate px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 md:px-12 md:pt-4 lg:px-16 text-center space-y-10 sm:space-y-12 overflow-hidden overflow-x-clip">
        <HeroBackground />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center">
            <h1
              className="hero-text-title hero-title mb-[6px] text-center text-[#163C0F] text-[34px] leading-[38px] tracking-[1px] sm:text-[40px] sm:leading-[44px] md:mt-[104px] lg:text-[46px] lg:leading-[50px] lg:tracking-[2px]"
              style={{
                fontFamily: "League Spartan, sans-serif",
                fontWeight: 700,
              }}
            >
              Leading Tax Experts
            </h1>
            <p className="hero-text-subpara  text-[#163C0F] hero-para max-w-lg mx-auto mb-6 sm:mb-8 px-1 sm:px-0">
              Trusted experts bringing clarity and strategy to complex tax matters.
            </p>
          </div>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="px-4 pb-8 mt-8 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.values(teamMembers).map((member) => (
              <div key={member.id} className="h-full">
                <TeamMember member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
