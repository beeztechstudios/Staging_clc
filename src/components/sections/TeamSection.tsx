"use client";

import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import TeamMember, { teamMembers } from "@/components/TeamMember";

export default function TeamSection() {
  return (
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
      <Link
        href="/team"
        className="inline-flex items-center mt-5 hero-text-meta text-[#163C0F] hover:underline mb-0"
      >
        Read More &rarr;
      </Link>
    </section>
  );
}
