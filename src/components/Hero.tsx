
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const distinctions = [
  {
    src: "/vivek.webp",
    alt: "Boutique Law Practice",
    text: "Boutique law practice specializing in GST law services, Customs, and commercial dispute resolution",
  },
  {
    src: "/shreya.webp",
    alt: "Supreme Court",
    text: "Led by top tax lawyers in India with deep advisory and litigation expertise",
  },
  {
    src: "/images/deepak.jpg",
    alt: "Business Law Chambers",
    text: "Business law chambers with a Pan-India legal network and seamless multi-jurisdictional coverage",
  },
  {
    src: "/images/vivek.jpg",
    alt: "Top Tax Lawyers",
    text: "Research-intensive, precedent-driven legal strategy",
  },
  {
    src: "/images/vivek.jpg",
    alt: "Top Tax Lawyers",
    text: "Regular representation before the Supreme Court of India",
  },
];

const Hero = () => {

  return (

    <div className="flex-1 ">
      <HeroAnimations />
      {/* Hero Section */}
      <section className="relative py-4 px-4 sm:px-8  md:px-12 lg:px-16 xl:mx-0 text-center justify-end  space-y-[48px] overflow-hidden">

        <HeroBackground />
        <div className="mx-auto w-full max-w-2xl px-2 sm:px-4">

          <h1
            className="hero-text-title hero-title mb-[6px] text-center text-[#163C0F] text-[34px] leading-[38px] tracking-[1px] sm:text-[40px] sm:leading-[44px] md:mt-[104px] md:mr-8 lg:text-[46px] lg:leading-[50px] lg:tracking-[2px]"
            style={{
              fontFamily: "League Spartan, sans-serif",
              fontWeight: 700,
            }}
          >
            Commitment to Legal Excellence.
          </h1>

          <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-8">
            Trusted by corporations and individuals across India for strategic legal solutions.

          </p>

          <div className="flex w-full flex-col hero-buttons justify-center items-center gap-3 sm:flex-row sm:gap-[12px]">
            <Link
              href="/contact"
              className="hero-text-button bg-[#163C0F] hover:scale-105 z-10 cursor-pointer text-white flex min-h-[40px] w-full max-w-[280px] items-center justify-center gap-[10px] px-[14px] py-[8px] text-center sm:h-[40px] sm:w-[166px]"
            >
              Partner With Us <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/about"
              className="hero-text-button bg-white hover:scale-105 text-gray-800 z-10 cursor-pointer border border-[#163C0F]/20 flex min-h-[40px] w-full max-w-[280px] items-center justify-center gap-[10px] px-[14px] py-[8px] text-center hover:bg-gray-50 transition-all sm:h-[40px] sm:w-[166px]">
              Review Firm Profile

            </Link>
          </div>
        </div>


        {/* Stats */}
        <div className="flex items-center justify-center  gap-16 sm:gap-12 max-w-[600px] mx-auto  ">
          {[
            { value: 500, suffix: "+", label: "CASES WON" },
            { value: 25, suffix: "+", label: "YEARS EXPERIENCE" },
            { value: 98, suffix: "%", label: "CLIENT SATISFACTION" },
          ].map(({ value, suffix, label }) => (
            <div key={label} className="hero-stat">

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
      <section className="py-4 px-4 sm:px-8 hero-buttons md:px-12  lg:px-16 xl:mx-10  ">

        <h2 className="hero-text-section-heading text-[#336429] mt-[24px] mb-[12px]">
          WELCOME TO COMMERCIAL LAW CHAMBER
        </h2>

        <div className="hero-text-body text-gray-800 space-y-4">
          <p>
            Established in 2008, the Commercial Law Chamber (CLC) is a boutique law firm widely recognized for its specialized tax advisory and high-stakes dispute resolution practice. As one of the top taxation law firms in India, we maintain a strong focus on the Goods and Services Tax Act and Customs laws. Led by the team of best GST lawyers in Delhi and supported by a team of 15 associates, CLC delivers strategic, research-driven, and commercially aligned legal solutions across complex Tax and Commercial Disputes.
          </p>
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
            // Checkerboard logic for 2-column grid
            const isGreen = (Math.floor(index / 2) + (index % 2)) % 2 === 0;
            return (
              <div
                key={text}
                className="p-[11px] flex items-center min-h-[110px]"
                style={{
                  background: isGreen ? "#EBF3E8" : "#FFFFFF",
                }}
              >
                <p className="hero-text-distinction">
                  {text}
                </p>
              </div>
            );
          })}
        </div>

      </section>

      {/* Core Practice Areas */}
      <section className="py-8 sm:py-[24px] px-4 bg-white sm:px-8 md:px-12 lg:px-16 xl:mx-10">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-[24px]"></div>
        <h2 className="hero-text-section-heading mb-[16px] text-[#336429]">
          CORE PRACTICE AREAS
        </h2>
        <p className="hero-text-body text-[#374151] mb-6">
          Comprehensive legal solutions across key practice domains
        </p>
        <div className="space-y-0">
          {[
            {
              title: "Direct Tax",
              href: "/practice-area/direct-tax-practice",
              desc: "End-To-End Advisory By Experienced Taxation Lawyers, Covering Compliance And Dispute Resolution Across Corporate And Individual Tax Matters, Including Complex Assessments And High-Value Tax Litigation.",
            },
            {
              title: "Indirect Tax",
              href: "/practice-area/indirect-tax-gst-customs",
              desc: "Comprehensive GST Lawyer Advisory, Compliance Management, And Representation In Complex Litigation, Including Classification Disputes, GST Input Tax Credit Rules, Investigation, And Enforcement Actions.",
            },
            {
              title: "Commercial & Regulatory Disputes",
              href: "/practice-area/commercial-regulatory-disputes",
              desc: "Strategic Resolution Of High-Stakes Disputes, Combining Legal Precision Sector-Specific Insight, And Outcome-Oriented Strategy.",
            },
            {
              title: "Customs Law",
              href: "/practice-area/customs-law-practice",
              desc: "Strategic Counsel In Cross-Border Trade, Customs Litigation, And Enforcement Actions.",
            },
          ].map(({ title, desc, href }, index) => (
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
                <Link href={href} className="hero-text-practice-title hover:underline">
                  {title}
                </Link>
              </div>

              <div className="flex items-center px-[8px] py-[17px]">
                <p className="hero-text-practice-desc">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-8 sm:py-[24px]  px-4 bg-white sm:px-8 md:px-12 lg:px-16 xl:mx-10">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-[24px]"></div>
        <h2 className="hero-text-section-heading mb-[16px] text-[#336429]">
          OUR TEAM
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full px-1 sm:px-10"
        >
          <CarouselContent className="-ml-4">
            {[
              {
                name: "Vivek Sarin",
                role: "Founding Partner",
                image: "/images/vivek.jpg",
                linkedin: "https://www.linkedin.com/in/viveksarinattorney/",
              },
              {
                name: "Amit Thukral",
                role: "Partner & Chief Growth Officer",
                image: "/Amit.png",
                linkedin: "https://www.linkedin.com/in/amitthukral/",
              },
              {
                name: "Shreyas Srivastava",
                role: "Partner",
                image: "/images/shreya.jpg",
                linkedin: "https://www.linkedin.com/in/shreyasshrivastava/",
              },
              {
                name: "Divyanshi Singh",
                role: "Associate Partner",
                image: "/images/divyanshi.jpeg",
                linkedin: "https://www.linkedin.com/in/divyanshi-singh-0a5882295/",
              },
            ].map(({ name, role, image, linkedin }) => (
              <CarouselItem
                key={name}
                className="pl-4 basis-full sm:basis-1/2"
              >
                <div className="group relative rounded-[16px] border border-[#22461B]/10 bg-white p-4 h-full flex flex-col items-center text-center transition-all duration-300 hover:border-[#22461B]/20 hover:shadow-md">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} LinkedIn profile`}
                    className="absolute right-3 top-3 inline-flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
                  >
                    <Image
                      src="/new/LinkedIn_icon.svg"
                      alt="LinkedIn"
                      width={44}
                      height={44}
                      className="w-5 h-5"
                    />
                  </a>

                  {/* Avatar */}
                  <div className="mb-3 mt-1">
                    <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-[#22461B]/15">
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-1">
                    {/* Name */}
                    <h3 className="hero-text-team-name mb-1 text-[#163C0F]">
                      {name}
                    </h3>

                    {/* Role */}
                    <p className="hero-text-team-role text-[#336429]">
                      {role}
                    </p>
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 top-[42%] hidden sm:flex border-[#163C0F]/30 text-[#163C0F]" />
          <CarouselNext className="right-0 top-[42%] hidden sm:flex border-[#163C0F]/30 text-[#163C0F]" />
        </Carousel>
      </section>
    </div>
  );
};

export default Hero;
