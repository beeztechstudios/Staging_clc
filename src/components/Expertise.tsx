import HeroAnimations from "@/lib/heroAnimation";
import Link from "next/link";

const Expertise = () => {
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
    <div className="flex-1 bg-white xl:mx-10">
      <HeroAnimations />
      {/* Header */}
      <section className="relative py-4 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-8 right-1/4 h-40 w-40 rounded-full bg-[#DCECCF] blur-3xl opacity-70" />
          <div className="absolute bottom-0 left-8 h-32 w-32 rounded-full bg-[#CFE2C8] blur-2xl opacity-60" />
        </div> */}
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">
            Comprehensive Tax Services
          </h1>
        </div>
      </section>

      {/* Practice Area Listing */}
      <section className="px-4 pb-8 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-0">
          {practiceAreas.map((area, index) => (
            <article
              key={area.title}
              className="grid grid-cols-1 sm:grid-cols-[1fr_2fr_auto] transition-all duration-300 hover:brightness-[0.98]"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(to right, #CFE2C8, #FFFFFF)"
                    : "linear-gradient(to left, #CFE2C8, #FFFFFF)",
              }}
            >
              <div className="flex items-center px-[12px] py-[18px]">
                <h2 className="hero-text-practice-title text-[#163C0F]">{area.title}</h2>
              </div>

              <div className="flex items-center px-[12px] py-[18px]">
                <p className="hero-text-practice-desc text-[#374151]">{area.subtitle}</p>
              </div>

              <div className="flex items-center px-[12px] pb-[18px] sm:pb-0">
                <Link
                  href={area.href}
                  className="hero-text-button inline-flex items-center justify-center border border-[#163C0F]/30 text-[#163C0F] hover:bg-[#163C0F] hover:text-white transition-colors px-4 py-2 w-full sm:w-auto"
                >
                  Explore
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Expertise;
