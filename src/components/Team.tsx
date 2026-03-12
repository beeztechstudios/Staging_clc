"use client";

import HeroAnimations from "@/lib/heroAnimation";
import TeamMember, { teamMembers } from "./TeamMember";
import Link from "next/link"

const achievements = [
  <>Successfully secured stay and protection orders for <strong className="text-[#163C0F]">over 75 clients</strong> for FY 2017-18 and 2018-19 before the High Courts of Orissa, Punjab &amp; Haryana, Bihar, Delhi and Andhra Pradesh in complex GST disputes involving ITC mismatch, limitation expiry, and jurisdictional irregularities.</>,
  <>Obtained a landmark order from the Delhi High Court directing refund of tax deposited during a coercive DGGI raid, in a challenge to search proceedings by a garment trader. <strong className="text-[#163C0F]">Judgment reported.</strong></>,
  <>Secured immediate restoration of banking operations for an agro-chemical manufacturer by quashing bank account attachment orders before the Delhi High Court. <strong className="text-[#163C0F]">Judgment reported.</strong></>,
  <>Successfully secured stay of adjudication proceedings in a <strong className="text-[#163C0F]">Customs–DRI matter</strong> involving expiry of the statutory adjudication period, and leading final arguments before the adjudicating authority.</>,
  <>Presently leading arguments before the <strong className="text-[#163C0F]">Bombay High Court</strong> on the constitutional validity of taxation of Government services under the Finance Act, 1994 — a matter with <strong className="text-[#163C0F]">pan-India implications.</strong></>,
  <>Represented a telecom-media conglomerate in TDS disputes concerning the interplay of <strong className="text-[#163C0F]">Section 194C and Section 194J</strong>, including issues of technical vs non-technical services and industry-wide interpretational challenges.</>,
  <>Represented a global technology major before the <strong className="text-[#163C0F]">Supreme Court</strong> in a significant transfer pricing dispute concerning comparability analysis and appropriateness of TP methods (TNMM, CUP, Cost-Plus).</>,
  <>Represented the assessee before the <strong className="text-[#163C0F]">Allahabad High Court</strong> in a landmark dispute involving apportionment of service and sale components in composite transactions, contributing to clarity in dual-tax scenarios.</>,
  <>Represented a leading media house before the <strong className="text-[#163C0F]">Karnataka High Court</strong> on abatement of local taxes while computing service tax liability, with favourable recognition of cascading-avoidance principles.</>,
  <>Secured full relief for an assessee before the <strong className="text-[#163C0F]">Madras High Court</strong> challenging discriminatory local tax levies imposed by the State of Tamil Nadu.</>,
  <>Advised and represented <strong className="text-[#163C0F]">over 120 corporates, MSMEs, and startups</strong> in GST audit objections, special audit proceedings, departmental investigations, and appellate disputes across India, including issues of classification, valuation, and ITC restrictions.</>,
  <>Handled <strong className="text-[#163C0F]">more than 50 writ petitions</strong> before various High Courts challenging system-generated GST notices, procedural violations, retrospective cancellation of GST registrations, and erroneous suspension orders, securing consistent interim and final relief.</>,
  <>Represented <strong className="text-[#163C0F]">multiple multinational manufacturers and technology companies</strong> in anti-profiteering investigations and DGAP proceedings, achieving closure without adverse orders.</>,
  <>Led complex customs valuation and exemption matters for <strong className="text-[#163C0F]">over 30 importers</strong>, including disputes on SVB orders, related-party pricing, exemption notifications, and project import regulations.</>,
  <>Advised and represented leading <strong className="text-[#163C0F]">e-commerce and logistics companies</strong> in nationwide investigations involving place-of-supply, intermediary classification, and cross-border service taxation issues.</>,
  <>Represented <strong className="text-[#163C0F]">several Fortune 500 companies</strong> in service tax/GST transitional credit (TRAN-1/TRAN-2) litigation, securing restoration or re-credit based on judicial precedents.</>,
  <>Assisted <strong className="text-[#163C0F]">more than 40 clients</strong> in securing the release of seized goods and vehicles under GST, including cases involving e-way bill mismatches, valuation discrepancies, and classification-based detentions.</>,
  <>Obtained quashing and remand orders for <strong className="text-[#163C0F]">over 60 assessees</strong> in complex income-tax matters involving reassessment under Sections 147/148, faceless assessment errors, and digital-hearing violations.</>,
  <>Advised large conglomerates and family-owned businesses on GST implications of <strong className="text-[#163C0F]">corporate restructuring</strong>, slump sales, cross-border EPC contracts, captive service arrangements, and inter-unit transfer pricing.</>,
  <>Handled <strong className="text-[#163C0F]">multi-state indirect tax due-diligence</strong> and pre-litigation reviews for M&amp;A transactions.</>,
];

const Team = () => {
  return (
    <div className="flex-1 bg-white  xl:mx-10">
      <HeroAnimations />
      {/* Team Header Section */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">Our Team - Leading Tax Experts</p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(teamMembers).map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Notable Achievements */}
      <section className="py-4 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full border border-dotted border-[#22461B]/50 mb-6" />
        <h2 className="hero-text-section-heading text-[#336429] mb-1">
          Notable Representation &amp; Achievements
        </h2>
        <p className="hero-text-team-role mb-6">
          Representative Litigation &amp; Advisory Experience across Courts, Tribunals and Regulatory Forums
        </p>
        <ul className="space-y-3">
          {achievements.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#163C0F] shrink-0" />
              <p className="hero-text-practice-desc text-[#374151]">{item}</p>
            </li>
          ))}
        </ul>
        <div className="w-full border border-dotted border-[#22461B]/50 mt-6" />
      </section>

      {/* Additional Info Section */}
      <section className="py-4 px-4 sm:px-8  md:px-12  lg:px-16  border-b border-dotted border-[#22461B]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="hero-text-section-heading text-[#336429] mb-4">Careers: Join Our Expert Tax & Commercial Dispute Team</h3>
          <p className="hero-text-body mb-4">
            We're always looking for talented professionals to join our team. If you're passionate about
            tax law and commercial litigation, we'd love to hear from you.
          </p>
          <Link
             href="/career"
             className="text-[#163C0F]  hover:text-[#1a4a1a] hover:scale-110 font-semibold transition-colors"
           >
             View Career Opportunities →
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
