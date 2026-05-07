import Link from "next/link";

export default function WelcomeSection() {
  return (
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
  );
}
