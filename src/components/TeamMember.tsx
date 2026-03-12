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
  };
  variant?: "card" | "detailed";
}

const teamMembers = {
  vivek: {
    id: "vivek",
    name: "Vivek Sarin: Founder & Leading Tax Litigation Expert",

    image: "/vivek.webp",
    experience: "20+ Years",
    location: "New Delhi",
    shortDescription: "Founding Partner with 20+ years of experience in tax litigation, regulatory compliance, and commercial disputes across Supreme Court and High Courts.",
    fullDescription: [
      "Vivek Sarin is the Founding Partner of Commercial Law Chambers, a New Delhi-based boutique firm specializing in Tax, Regulatory, and Commercial Disputes. With over 20 years of experience, he represents clients in high-stakes litigation before the Supreme Court, multiple High Courts, tribunals including ITAT, CESTAT, VAT Appellate Tribunals, and forums such as NCLT.",
      "His expertise spans constitutional tax challenges, shareholder disputes, and CIRP matters, as well as regulatory pricing issues involving NPPA, TRAI, AERA, and Electricity Commissions. He advises leading companies across sectors—FMCG, Healthcare, Technology, and more—on CGST, VAT, Customs, Income Tax, and compliance strategy.",
      "His blend of deep domestic insight and global perspective makes him a trusted advisor in complex legal landscapes."
    ],
    expertise: [
      "High Court & Supreme Court Litigation",
      "Constitutional Tax Challenges",
      "CIRP Matters",
      "Regulatory & Compliance Strategy",
      "Shareholder Disputes",
    ],
    education: [
      "Bachelor of Laws (LLB)",
      "Member, Bar Council of India"
    ]
  },
  shreyas: {
    id: "shreyas",
    name: "Shreyas Srivastava: Partner & Commercial Dispute Specialist",

    image: "/shreya.webp",
    experience: "12+ Years",
    location: "New Delhi",
    shortDescription: "Partner with 12+ years of experience in direct and indirect taxation, international trade remedies, and cross-border tax advisory matters.",
    fullDescription: [
      "Shreyas is a seasoned counsel with over 12 years of experience in direct and indirect taxation. At Commercial Law Chambers, he leads complex litigation and advisory mandates with a strategic focus on Income Tax, GST, and Customs matters, including international trade remedies such as anti-dumping and safeguard duties.",
      "Shreyas has represented clients across a wide range of industries including FMCG, Consumer Durables, Aviation, Real Estate, Banking & Finance, Insurance, and Food & Beverage. His practice spans high-stakes tax disputes, regulatory representation, and advisory on cross-border trade issues.",
      "Known for his research-driven and solution-oriented approach, Shreyas combines legal depth with industry insight to deliver pragmatic and effective outcomes for clients across forums including tribunals, High Courts, and the Supreme Court."
    ],
    expertise: [
      "International Trade Remedies",
      "Income Tax & GST",
      "High-stakes Tax Disputes",
      "Cross-border Tax Advisory",
      "Regulatory Representation",
    ],
    education: [
      "Bachelor of Laws (LLB)",
      "Member, Bar Council of India"
    ]
  },
  divyanshi: {
    id: "Divyanshi Singh ",
    name: "Divyanshi Singh : Associate Partner",

    image: "/shreya.webp",
    experience: "9+ Years",
    location: "New Delhi",
    shortDescription: "Partner with 12+ years of experience in direct and indirect taxation, international trade remedies, and cross-border tax advisory matters.",
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
              <h2 className="hero-text-team-name mb-1">
                {member.name}
              </h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 mb-4">
                <span className="hero-text-team-role flex items-center gap-1">
                  <Briefcase className="w-3 h-3" /> {member.experience}
                </span>
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
      <h2 className="hero-text-team-name mt-5 mb-1">
        {member.name}
      </h2>

      {/* Location */}
      <p className="hero-text-team-role mb-5 flex items-center justify-center gap-1">
        <MapPin className="w-3 h-3" /> {member.location}
      </p>

      {/* Short description */}
      <p className="hero-text-body text-[#374151] mb-5 text-left">
        {member.shortDescription}
      </p>

      {/* Expertise pills */}
      <div className="w-full text-left mb-5">
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
      </div>

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
            <DialogDescription>
              <TeamMember member={member} variant="detailed" />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamMember;
