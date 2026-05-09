import Link from "next/link";

const distinctions = [
  {
    src: "/vivek.png",
    alt: "Boutique Law Practice",
    text: "Boutique law practice specializing in GST law services, Customs, and commercial dispute resolution",
  },
  {
    src: "/shreyash.png",
    alt: "Supreme Court",
    text: "Led by top tax lawyers in India with deep advisory and litigation expertise",
  },
  {
    src: "/images/deepak.jpg",
    alt: "Business Law Chambers",
    text: "Business law chambers with a Pan-India legal network and seamless multi-jurisdictional coverage",
  },
  {
    src: "/images/vivek.png",
    alt: "Top Tax Lawyers",
    text: "Research-intensive, precedent-driven legal strategy",
  },
  {
    src: "/images/vivek.png",
    alt: "Top Tax Lawyers",
    text: "Regular representation before the Supreme Court of India",
  },
];

export default function DistinctionSection() {
  return (
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
  );
}
