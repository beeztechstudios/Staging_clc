import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";
import { Building2, Users, BookOpen, Scale, Globe, Handshake, Shield, Eye, Lightbulb } from "lucide-react";

const stats = [
  { label: "Founded", value: "2008", numericValue: 2008, suffix: "" },
  { label: "Partners", value: "3", numericValue: 4, suffix: "" },
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

const notableRepresentation = [
  "Successfully secured stay and protection orders on issues relating to ITC mismatch, limitation expiry, non-consideration of replies, incorrect place of supply determination, and jurisdictional irregularities for over 75 clients for FY 2017-18 and 2018-19 before the High Courts of Orissa, Punjab & Haryana, Bihar, Delhi and Andhra Pradesh in complex GST disputes.",
  "Successfully represented a garment trader in a challenge to coercive DGGI search proceedings, obtaining a landmark order from the Delhi High Court directing refund of tax deposited during the raid. Judgment reported.",
  "Successfully represented an agro-chemical manufacturer before the Delhi High Court in quashing of bank account attachment orders, securing immediate restoration of banking operations. Judgment reported.",
  "Successfully secured stay of adjudication proceedings in a Customs-DRI matter involving expiry of the statutory period for adjudication, and presently leading final arguments before the adjudicating authority.",
  "Presently leading arguments before the Bombay High Court on the constitutional validity of taxation of Government services under the Finance Act, 1994 and multiple pre-GST and post-GST notifications, a matter with pan-India implications.",
  "Successfully represented a telecom-media conglomerate in TDS disputes concerning the interplay of Section 194C and Section 194J, including issues of technical vs non-technical services, verification requirements, and industry-wide interpretational challenges.",
  "Successfully represented a global technology major before the Supreme Court in a significant transfer pricing dispute concerning comparability analysis and appropriateness of TP methods (TNMM, CUP, Cost-Plus), setting persuasive value for similar matters.",
  "Successfully represented the assessee before the Allahabad High Court in a landmark dispute involving apportionment of service and sale components in composite transactions, contributing to clarity in dual-tax scenarios.",
  "Successfully represented a leading media house before the Karnataka High Court on the issue of abatement of local taxes while computing service tax liability, with favourable recognition of cascading-avoidance principles.",
  "Successfully represented an assessee before the Madras High Court in challenging discriminatory local tax levies imposed by the State of Tamil Nadu, securing full relief.",
  "Advised and represented over 120 corporates, MSMEs, and startups in GST audit objections, special audit proceedings, departmental investigations, and appellate disputes across India, including issues of classification, valuation, export-refund mismatches, and input tax credit restrictions.",
  "Handled more than 50 writ petitions before various High Courts challenging system-generated GST notices, procedural violations, retrospective cancellation of GST registrations, denial of revocation applications, and erroneous suspension orders, securing consistent interim and final relief.",
  "Successfully represented multiple multinational manufacturers and technology companies in anti-profiteering investigations and DGAP proceedings, achieving closure without adverse orders.",
  "Successfully led complex customs valuation and exemption matters for over 30 importers, including disputes on special valuation branch (SVB) orders, related-party pricing, exemption notifications, and project import regulations.",
  "Advised and represented leading e-commerce and logistics companies in nationwide investigations involving place-of-supply, intermediary classification, and cross-border service taxation issues.",
  "Represented several Fortune 500 companies in litigation involving service tax/GST transitional credit (TRAN-1/TRAN-2), securing restoration or re-credit based on judicial precedents and equitable grounds.",
  "Successfully assisted more than 40 clients in securing the release of seized goods and vehicles under GST, including cases involving alleged e-way bill mismatches, valuation discrepancies, and classification-based detentions.",
  "Represented clients in complex income-tax matters involving reassessment under Sections 147/148, faceless assessment errors, and digital-hearing violations, obtaining quashing and remand orders for over 60 assesses across jurisdictions.",
  "Advised large conglomerates and family-owned businesses on GST implications of corporate restructuring, slump sales, cross-border EPC contracts, captive service arrangements, and inter-unit transfer pricing.",
  "Handled multi-state indirect tax due-diligence and pre-litigation reviews for M&A transactions.",
];

const About = () => {
  return (
    <div className="flex-1 bg-white xl:mx-10 overflow-x-hidden">
      <HeroAnimations />

      {/* Header */}
      <section className="relative isolate px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 md:px-12 md:pt-4 lg:px-16 text-center space-y-10 sm:space-y-12 overflow-hidden overflow-x-clip">
        <HeroBackground />
        <div className="relative z-10 mx-auto max-w-2xl px-0 sm:px-4">
          <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">
            Premier Tax and Commercial Law Firm
          </p>
          <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-6 sm:mb-8 px-1 sm:px-0">
            Strategic Legal Excellence in Tax and Commercial Disputes
          </p>

          {/* Stats */}
          <div className="relative z-10 grid w-full max-w-[600px] grid-cols-3 gap-1 px-1 pb-1 min-[420px]:gap-3 min-[420px]:px-2 sm:flex sm:items-center sm:justify-center sm:gap-12 sm:px-0 sm:pb-0 mx-auto">
            {stats.map(({ label, value, numericValue, suffix }) => (
              <div key={label} className="hero-stat min-w-0 w-full px-1">
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

      {/* Our Approach */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 hero-buttons">
        <h2 className="hero-text-section-heading text-[#336429] mb-[16px]">
          Our Approach
        </h2>
        {/* <p className="hero-text-subpara text-[#163C0F] mb-[16px]" style={{ textAlign: "left" }}>
          Methodology in handling complex legal matters
          </p> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 border border-gray-100">
          {approaches.map(({ icon: Icon, title, description }, index) => {
            const cardBgClass =
              index === 0
                ? "bg-[#EBF3E8]"
                : index === 1
                  ? "bg-white"
                  : index === 2
                    ? "bg-[#EBF3E8] sm:bg-white"
                    : "bg-white sm:bg-[#EBF3E8]";
            return (
              <div
                key={title}
                className={`p-[11px] sm:p-[14px] flex items-start gap-3 min-h-[96px] sm:min-h-[110px] ${cardBgClass}`}
              >
                {/* <div className="bg-[#B3C7AB]/40 p-2 flex-shrink-0">
                  <Icon className="h-6 w-6 text-[#163C0F]/80" />
                  </div> */}
                <div>
                  <p className="hero-text-practice-title mb-[4px]">{title}</p>
                  <p className="hero-text-distinction">{description}</p>
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
          Our Values
        </h2>



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
              <div className="flex items-start sm:items-center gap-3 px-[8px] py-[14px] sm:py-[17px]">
                {/* <div className="bg-[#B3C7AB]/40 p-2 flex-shrink-0">
                  <Icon className="h-6 w-6 text-[#163C0F]/80" />
                  </div> */}
                <span className="hero-text-practice-title">{title}</span>
              </div>
              <div className="flex items-start sm:items-center px-[8px] py-[14px] sm:py-[17px]">
                <p className="hero-text-distinction">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full border border-dotted mt-[24px] border-[#22461B]/50"></div>
      </section>

      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 hero-buttons  " >

        <h2 className="hero-text-section-heading text-[#336429] mb-[16px]">
          Our Vision
        </h2>
        <div className="hero-text-body text-gray-800 space-y-4">
          <p>
            To be a leading tax litigation and advisory boutique law firm, recognised for shaping tax jurisprudence, delivering strategic and high-stakes advocacy, and safeguarding our clients' commercial interests in the most complex and impactful matters.
          </p>
          <div className="w-full border border-dotted mt-[24px] border-[#22461B]/50"></div>
        </div>

      </section>

      <section id="notable-achievements" className="py-4 px-4 sm:px-8 md:px-12 lg:px-16 hero-buttons">
        <h2 className="hero-text-section-heading text-[#336429] mb-[8px]">
          Our Commitment to Success
        </h2>
        <p className="hero-text-practice-title text-[#C52828] mb-[14px]">
          Representative Litigation &amp; Advisory Experience
        </p>

        <ul className="list-disc pl-5 sm:pl-6 hero-text-body text-gray-800 space-y-4">
          {notableRepresentation.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        <div className="w-full border border-dotted mt-[24px] border-[#22461B]/50"></div>
      </section>

    </div>
  );
};

export default About;
