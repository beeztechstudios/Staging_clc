"use client";

import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";
import TeamMember, { teamMembers } from "./TeamMember";

const Team = () => {
  return (
    <div className="flex-1 bg-white  xl:mx-10">
      <HeroAnimations />
      {/* Team Hero Section */}
      <section className="relative px-4 pt-4 pb-10 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        <HeroBackground />
        <div className=" max-w-6xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="px-4 pb-8 mt-8 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(teamMembers).map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
