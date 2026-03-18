"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Briefcase, GraduationCap, MapPin, User } from "lucide-react";

interface TeamMemberProps {
  member: {
    id: string;
    name: string;
    image: string;
    experience: string;
    shortDescription: string;
    fullDescription: string[];
    expertise: string[];
    location: string;
    education: string[];
    achievements?: string[];
    experienceHighlights?: string[];
    recognitions?: string[];
  };
  variant?: "card" | "detailed";
}

const teamMembers = {
  vivek: {
    id: "vivek",
    name: "Vivek Sarin - Founding Partner",

    image: "/vivek.webp",
    experience: "20+ Years",
    location: "New Delhi",
    shortDescription: "Founding Partner with over two decades of practice in tax, regulatory, and commercial disputes before the Supreme Court of India and key tribunals.",
    fullDescription: [
      "Vivek Sarin is the Founding Partner of Commercial Law Chamber, a New Delhi-based boutique taxation law firm, specialist and renowned for depth in Tax, Regulatory, and Commercial Disputes. Widely regarded as a best tax lawyer in India, he has over two decades of practice appearing in high-stakes matters before the Supreme Court of India and key tribunals.",
      "His work as a tax lawyer spans constitutional tax litigation, complex shareholder disputes, commercial disputes, CIRP proceedings, and sector-specific regulatory challenges involving authorities such as the NPPA, TRAI, AERA, and various Electricity Commissions.",
      "He counsels leading corporates on corporate tax and GST, direct and indirect tax, and broader compliance issues. Vivek Sarin is recognized among the top tax lawyers in India for navigating evolving legal frameworks."
    ],
    expertise: [
      "Constitutional Tax Challenges",
      "High Court & Supreme Court Litigation",
      "Regulatory & Compliance Strategy",
      "CIRP Matters",
      "Shareholder Disputes",
    ],
    education: [
      "Bachelor of Laws (LLB)",
      "Member, Bar Council of India"
    ]
  },
  amit: {
    id: "amit",
    name: "Amit Thukral - Partner and Chief Growth Officer",
    image: "/Amit.png",
    experience: "20+ Years",
    location: "New Delhi",
    shortDescription: "Partner and Chief Growth Officer with over 20 years of post-qualification experience in complex legal services practice, delivery, and management.",
    fullDescription: [
      "Amit Thukral is the Partner and Chief Growth Officer at Commercial Law Chamber (CLC). With over 20 years of post-qualification experience, he is a seasoned expert in complex legal services practice, delivery, and management.",
      "He brings a unique resolution mindset born from a rich mix of in-house and external counsel experience, specializing in creating strategies for unprecedented legal issues at the intersection of law and policy.",
      "Recognized as a Top 100 General Counsel, Amit specializes in regulatory and commercial dispute resolution, compliance, and institutional risk management. He has led complex strategic mandates across forums like the Supreme Court of India, various state High Courts, and sectoral regulators, particularly within the Technology, Media, and Life Sciences sectors."
    ],
    expertise: [
      "Regulatory & Commercial Dispute Resolution",
      "Cross-Border Disputes & International Economic Law",
      "Institutional Risk Management & Corporate Governance",
      "Life Sciences, Agri-Biotech & Pharmaceutical Law",
      "Technology, Media & Telecom (TMT) Regulation",
    ],
    education: [
      "Master's degree in International Economic Law, University of Warwick",
      "Solicitor, England & Wales",
      "Member, Bar Council of India"
    ],
    experienceHighlights: [
      "General Counsel Roles: Served in senior management for a top 5 Indian pharmaceutical major, a USD 70 billion global Agri-biotech firm, and a leading satellite pay TV provider.",
      "Complex Litigation: Led a USD 100 million+ multi-party biotech license fee dispute and successfully obtained Supreme Court injunctions against significant regulatory penalties.",
      "Strategic Transactions: Advised on high-value disinvestments and acquisitions, including a ~USD 650 million pharmaceutical deal.",
      "Public Policy: Advised multi-stakeholder efforts in high-stakes public policy litigation at the Indian Supreme Court regarding business continuity."
    ],
    recognitions: [
      "Top 100 General Counsel, Business World (2020)",
      "GC Powerlist: India Teams, The Legal 500 (2019)",
      "Top 40 under 40, Legal Era (2018)"
    ]
  },
  shreyas: {
    id: "shreyas",
    name: "Shreyas Srivastava - Partner",

    image: "/shreya.webp",
    experience: "13+ Years",
    location: "New Delhi",
    shortDescription: "Partner with over 13 years of dedicated experience across direct and indirect tax, leading high-stakes tax litigation and advisory mandates.",
    fullDescription: [
      "Shreyas is a seasoned tax advisory counsel with over 13 years of dedicated experience across direct and indirect tax. At Commercial Law Chamber, he leads complex litigation as a specialized GST lawyer and income tax expert.",
      "He handles high-stakes disputes for clients in FMCG, Aviation, and Banking, delivering outcomes aligned with commercial objectives.",
      "Recognised for his rigorous research, strategic clarity, and solution-led approach, Shreyas brings a blend of deep legal expertise and industry understanding. He regularly represents clients before tribunals, various High Courts, and the Supreme Court, delivering outcomes that are both pragmatic and aligned with commercial objectives."
    ],
    expertise: [
      "Income Tax & GST",
      "International Trade Remedies",
      "Cross-border Tax Advisory",
      "High-stakes Tax Disputes",
      "Regulatory Representation",
    ],
    education: [
      "Bachelor of Laws (LLB)",
      "Member, Bar Council of India"
    ]
  },
  divyanshi: {
    id: "divyanshi",
    name: "Divyanshi Singh - Associate Partner",

    image: "/images/divyanshi.jpeg",
    experience: "9+ Years",
    location: "New Delhi",
    shortDescription: "Associate Partner with over 9 years of experience in healthcare regulation, direct and indirect taxation, and GST-focused advisory and dispute resolution matters.",
    fullDescription: [
      "Divyanshi is an Associate Partner with over 9 years of experience in healthcare regulation, direct and indirect taxation, and GST-focused advisory and dispute resolution matters. Her practice involves handling complex litigation and advisory assignments, with a particular emphasis on GST, regulatory compliance, and sector-specific tax issues.",
      "She has advised and represented clients across a wide range of sectors, including Healthcare, Pharmaceuticals, Consumer Goods, Retail, and Technology-enabled services. Her work encompasses GST litigation, regulatory representations, and advisory on intricate tax and compliance frameworks, often involving multi-layered statutory interpretation and procedural strategy.",
      "Known for her structured legal analysis, strong research orientation, and meticulous preparation, Divyanshi regularly appears before Tribunals, High Courts, and the Supreme Court of India. She brings a disciplined, detail-driven approach to every matter, ensuring legal positions are both technically sound and practically effective."
    ],
    expertise: [
      "GST Litigation and Advisory",
      "Healthcare and Pharmaceutical Regulation",
      "Direct and Indirect Tax Advisory",
      "Regulatory Representation",
      "Complex Tax and Compliance Disputes",

    ],
    education: [
      "Bachelor of Laws (LLB)",
      "Member, Bar Council of India"
    ]
  }
};

export { teamMembers };

const TeamMember = ({ member, variant = "card" }: TeamMemberProps) => {
  const [memberName, ...designationParts] = member.name.split(" - ");
  const memberDesignation = designationParts.join(" - ");

  if (variant === "detailed") {
    return (
      <div className=" p-2 sm:p-6">
        <div className="max-w-4xl">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-100">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`${member.name} at Commercial Law Chamber`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
              <span
                className="hero-text-experience-badge absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-white"
                style={{ background: "#2A5A21" }}
              >
                {member.experience}
              </span>
            </div>

            {/* Name + meta */}
            <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
              <h2
                className="hero-text-team-name font-bolder mt-2 mb-1 text-[#163C0F]"
                style={{ fontSize: "clamp(34px, 4vw, 42px)", lineHeight: "1.1" }}
              >
                {memberName}
              </h2>
              {memberDesignation && (
                <p className="hero-text-team-role mb-2">{memberDesignation}</p>
              )}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 mb-4">
                {/* <span className="hero-text-team-role flex items-center gap-1">
                  <Briefcase className="w-3 h-3" /> {member.experience}
                </span> */}
                <span className="hero-text-team-role flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {member.location}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">

            {/* About */}
            <section>
              <h3 className="hero-text-section-heading text-[#336429] mb-3">
                About
              </h3>
              <div className="space-y-3">
                {member.fullDescription.map((paragraph, index) => (
                  <p
                    key={index}
                    className="hero-text-body text-[#374151]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Expertise */}
            <section>
              <h3 className="hero-text-section-heading text-[#336429] mb-3">
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="hero-text-expertise-tag px-3 py-1 rounded-full border border-[#5A6F554D]/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {member.experienceHighlights && member.experienceHighlights.length > 0 && (
              <section>
                <h3 className="hero-text-section-heading text-[#336429] mb-3">
                  Experience Highlights
                </h3>
                <ul className="space-y-2">
                  {member.experienceHighlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-[#163C0F] shrink-0" />
                      <p className="hero-text-practice-desc text-[#374151]">{item}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {member.recognitions && member.recognitions.length > 0 && (
              <section>
                <h3 className="hero-text-section-heading text-[#336429] mb-3">
                  Recognitions
                </h3>
                <ul className="space-y-2">
                  {member.recognitions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-[#163C0F] shrink-0" />
                      <p className="hero-text-practice-desc text-[#374151]">{item}</p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Education */}
            <section>
              <h3 className="hero-text-section-heading text-[#336429] mb-3">
                Education &amp; Qualifications
              </h3>
              <div className="flex flex-col gap-2">
                {member.education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3"
                    style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
                  >
                    <GraduationCap className="w-4 h-4 text-[#163C0F] shrink-0" />
                    <span className="hero-text-practice-desc">{edu}</span>
                  </div>
                ))}
              </div>
            </section>


          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#22461B]/30 rounded-[16px] p-4 flex flex-col items-center text-center h-full">

      {/* Avatar + experience badge */}
      <div className="relative mb-4">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-100">
          {member.image ? (
            <img
              src={member.image}
              alt={`${member.name} at Commercial Law Chamber`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>
        <span
          className="hero-text-experience-badge absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-white"
          style={{ background: "#2A5A21" }}
        >
          {member.experience}
        </span>
      </div>

      {/* Name */}
      <h2 className="hero-text-team-name mt-5  mb-1">
        {memberName}
      </h2>

      {memberDesignation && (
        <p className="hero-text-team-role mb-2">{memberDesignation}</p>
      )}

      {/* Location */}
      <p className="hero-text-team-role mb-5 flex items-center justify-center gap-1">
        <MapPin className="w-3 h-3" /> {member.location}
      </p>

      {/* Short description */}
      <p className="hero-text-body text-[#374151] mb-5 text-left">
        {member.shortDescription}
      </p>

      {/* Expertise pills */}
      {/* <div className="w-full text-left mb-5">
        <p className="hero-text-expertise-label mb-3">
          Expertise :
        </p>
        <div className="flex flex-wrap gap-2">
          {member.expertise.map((skill, index) => (
            <span
              key={index}
              className="hero-text-expertise-tag px-[4px] py-[2px] rounded-full border border-[#5A6F554D]/90"
            >
              {skill}
            </span>
          ))}
        </div>
      </div> */}

      {/* View Profile button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-[#163C0F] hover:bg-[#1a4a1a] cursor-pointer text-white mt-auto"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "14px" }}
          >
            View Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-white overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold poppins text-[#163C0F]">Team Member Profile</DialogTitle>
            {/* <DialogDescription className="sr-only">
              Detailed profile information.
            </DialogDescription> */}
          </DialogHeader>
          <TeamMember member={member} variant="detailed" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamMember;
