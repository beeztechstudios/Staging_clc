import HeroAnimations from "@/lib/heroAnimation";
import { Building2, Users, BookOpen, Scale, Globe, Handshake, Shield, Eye, Lightbulb } from "lucide-react";

const stats = [
  { label: "Founded", value: "2008", numericValue: 2008, suffix: "" },
  { label: "Partners", value: "3", numericValue: 2, suffix: "" },
  { label: "Associates", value: "15+", numericValue: 15, suffix: "+" },
];

const approaches = [
  {
    icon: BookOpen,
    title: "Research-Driven Analysis",
    description: "Rigorous legal research for strategic advantage.",
  },
  {
    icon: Scale,
    title: "Strategic Litigation",
    description: "Outcome-oriented approach in high-stakes disputes.",
  },
  {
    icon: Users,
    title: "Client-Centric Solutions",
    description: "Bespoke legal solutions aligned with commercial imperatives.",
  },
  {
    icon: Globe,
    title: "Pan India Network",
    description: "Coordinated representation across all Indian state capitals.",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    description: "Unwavering commitment to ethical standards and professional conduct",
  },
  {
    icon: Shield,
    title: "Excellence",
    description: "Pursuit of the highest standards in legal representation and advisory",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest counsel in all client interactions",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creative legal strategies and modern approaches to complex problems",
  },
];

const About = () => {
  return (
    <div className="flex-1 bg-white xl:mx-10">
      <HeroAnimations />

      {/* Header */}
      <section className="relative py-4 px-4 sm:px-8 md:px-12 lg:px-16 text-center space-y-[48px] overflow-hidden">
        <div className="mx-auto max-w-2xl px-2">
          <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">
            Premier Tax and Commercial Law Firm
          </p>
          <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-8">
            Strategic Legal Excellence in Tax and Commercial Disputes
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-4 sm:gap-[24px] max-w-[600px] mx-auto">
            {stats.map(({ label, value, numericValue, suffix }) => (
              <div key={label} className="hero-stat">
                <div
                  className="counter hero-text-counter text-[#336429] mb-1"
                  data-value={numericValue}
                  data-suffix={suffix}
                >
                  {value}
                </div>
                <div className="hero-text-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 hero-buttons">
        <h2 className="hero-text-section-heading text-[#336429] mt-[24px] mb-[12px]">
          Our Story
        </h2>
        <div className="hero-text-body text-gray-800 space-y-4">
          <p>
            Founded in 2008, Commercial Law Chamber is a boutique law practice established with a focused vision of delivering excellence in tax advisory. As a leading tax law firm, we are led by two experienced Partners, including top GST lawyers in India, and supported by a team of 15 associates. The firm operates through a strong Pan-India network, ensuring seamless representation across jurisdiction.
          </p>
          <p>
            Our practice is distinguished by strategic insight, rigorous legal research, and a client-centric approach. Recognized as a premier GST law firm, we regularly represent clients before the Supreme Court of India, various High Courts, and specialized tribunals including ITAT, CESTAT, and VAT authorities.
          </p>
          <p>
            As a specialized tax law firm, we provide comprehensive services covering indirect tax litigation, departmental proceedings, GST input tax credit rules analysis, and trade remedy matters. From strategic advisory to adjudication, CLC offers end-to-end tax and regulatory counsel.
          </p>
          <div className="w-full border border-dotted mt-[24px] border-[#22461B]/50"></div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 hero-buttons">
        <h2 className="hero-text-section-heading text-[#336429] mb-[16px]">
          Our Approach
        </h2>
        <p className="hero-text-subpara text-[#163C0F] mb-[16px]" style={{ textAlign: "left" }}>
          Methodology in handling complex legal matters
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 border border-gray-100">
          {approaches.map(({ icon: Icon, title, description }, index) => {
            const isGreen = (Math.floor(index / 2) + (index % 2)) % 2 === 0;
            return (
              <div
                key={title}
                className="p-[11px] flex items-start gap-3 min-h-[110px]"
                style={{ background: isGreen ? "#EBF3E8" : "#FFFFFF" }}
              >
                <div className="bg-[#B3C7AB]/40 p-2 flex-shrink-0">
                  <Icon className="h-6 w-6 text-[#163C0F]/80" />
                </div>
                <div>
                  <p className="hero-text-practice-title mb-[4px]">{title}</p>
                  <p className="hero-text-practice-desc">{description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full border border-dotted mt-[24px] border-[#22461B]/50"></div>
      </section>

      {/* Values & Vision */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 hero-buttons">
        <h2 className="hero-text-section-heading text-[#336429] mb-[16px]">
          Values &amp; Vision
        </h2>

        {/* Our Vision */}
        <div className="border border-[#22461B]/30 rounded-[16px] p-[11px] mb-[24px]">
          <h3 className="hero-text-practice-title mb-[6px]">Our Vision</h3>
          <p className="hero-text-practice-desc">
            To be a leading tax litigation and advisory boutique law firm, recognised for shaping tax jurisprudence, delivering strategic and high-stakes advocacy, and safeguarding our clients' commercial interests in the most complex and impactful matters.
          </p>
        </div>

        {/* Values — alternating gradient rows like Core Practice Areas */}
        <div className="space-y-0">
          {values.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] overflow-hidden"
              style={
                index % 2 === 0
                  ? { background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }
                  : { background: "linear-gradient(to left, #CFE2C8, #FFFFFF)" }
              }
            >
              <div className="flex items-center gap-3 px-[8px] py-[17px]">
                <div className="bg-[#B3C7AB]/40 p-2 flex-shrink-0">
                  <Icon className="h-6 w-6 text-[#163C0F]/80" />
                </div>
                <span className="hero-text-practice-title">{title}</span>
              </div>
              <div className="flex items-center px-[8px] py-[17px]">
                <p className="hero-text-practice-desc">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
