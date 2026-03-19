import { Briefcase, Users, GraduationCap, Clock, MapPin, Building2, CheckCircle } from "lucide-react";
import { useCareerOpenings } from "@/hooks/useSanityData";
import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";

const whyJoinUs = [
  {
    icon: Users,
    title: "Collaborative Environment & Inclusive Culture",
    description: "Work with experienced professionals in a supportive team setting.",
  },
  {
    icon: GraduationCap,
    title: "Accelerated Learning & Professional Development",
    description: "Regular training programs and mentorship opportunities.",
  },
  {
    icon: Building2,
    title: "Professional Growth",
    description: "Clear career progression path and leadership opportunities.",
  },
  {
    icon: Clock,
    title: "Sustainable Work-Life Balance",
    description: "Flexible working arrangements and supportive policies.",
  },
];

const applicationItems = [
  "Detailed CV",
  "Cover letter explaining your interest in CLC",
  "Academic transcripts",
  "Writing sample (for legal positions)",
];

const Career = () => {
  const { data: currentOpenings, isLoading, isError } = useCareerOpenings();

  return (
    <div className="flex-1 bg-white xl:mx-10 overflow-x-hidden">
      <HeroAnimations />

      {/* Header */}
      <section className="relative isolate px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 md:px-12 md:pt-4 lg:px-16 text-center space-y-10 sm:space-y-12 overflow-hidden overflow-x-clip">
        <HeroBackground />
        <div className="relative z-10 mx-auto max-w-2xl px-0 sm:px-4">
          <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">
            Legal Careers in Tax &amp; Commercial Law
          </p>
          <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-8">
            Join Our Team of Legal Excellence
          </p>
        </div>
      </section>

      {/* About the Opportunity */}
      <section className="hero-buttons py-4 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <h2 className="hero-text-section-heading text-[#336429] mt-[24px] mb-[12px]">
          ABOUT THE OPPORTUNITY
        </h2>
        <div className="hero-text-body text-gray-800 space-y-4">
          <p>
            At Commercial Law Chamber, we are always looking for talented professionals who share our
            commitment to excellence and client service. We offer a dynamic work environment where you
            can grow your career while working on challenging and meaningful cases.
          </p>
          <p>
            Our firm provides opportunities for both experienced lawyers and fresh graduates who demonstrate
            exceptional potential and a passion for tax and commercial law.
          </p>
          <div className="w-full border border-dotted mt-[24px] border-[#22461B]/50"></div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="hero-buttons py-4 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <h2 className="hero-text-section-heading text-[#336429] mb-[12px]">
          CURRENT JOB OPENINGS
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {isLoading && (
            <p className="hero-text-body text-[#4B5563]">Loading openings...</p>
          )}
          {!isLoading && (isError || !currentOpenings || currentOpenings.length === 0) && (
            <div
              className="px-[8px] py-[17px]"
              style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
            >
              <p className="hero-text-practice-desc">
                No current openings. Please check back later or send your CV to{" "}
                <span className="text-[#163C0F] font-semibold">careers@clc.in</span>
              </p>
            </div>
          )}
          {!isLoading && currentOpenings && currentOpenings.map((job, index) => (
            <div
              key={job._id ?? index}
              className="border border-[#22461B]/30 rounded-[16px] p-[11px] hover:border-[#163C0F] transition-all"
            >
              <div className="mb-4">
                <h3 className="hero-text-practice-title mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: MapPin, val: job.location },
                    { icon: Briefcase, val: job.type },
                    { icon: Clock, val: job.experience },
                  ].map(({ icon: Icon, val }) => val && (
                    <span key={val} className="hero-text-team-role flex items-center gap-1">
                      <Icon className="h-3 w-3" /> {val}
                    </span>
                  ))}
                </div>
              </div>

              {job.requirements && job.requirements.length > 0 && (
                <div>
                  <p className="hero-text-expertise-label mb-2">Requirements:</p>
                  <ul className="space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#336429] mt-0.5 shrink-0" />
                        <span className="hero-text-practice-desc text-[#374151]">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-full border border-dotted border-[#22461B]/50 mt-[24px]" />
      </section>

      {/* Why Join Us */}
      <section className="hero-buttons py-4 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <h2 className="hero-text-section-heading text-[#336429] mb-[12px]">
          WHY BUILD YOUR CAREER AT CLC
        </h2>

        <div className="space-y-0">
          {whyJoinUs.map(({ icon: Icon, title, description }, index) => (
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
                <div className="bg-[#B3C7AB]/40 p-2 shrink-0">
                  <Icon className="h-5 w-5 text-[#163C0F]/80" />
                </div>
                <span className="hero-text-practice-title">{title}</span>
              </div>
              <div className="flex items-center px-[8px] py-[17px]">
                <p className="hero-text-practice-desc">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full border border-dotted border-[#22461B]/50 mt-[24px]" />
      </section>

      {/* How to Apply */}
      <section className="hero-buttons py-4 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <h2 className="hero-text-section-heading text-[#336429] mb-[12px]">
          HOW TO APPLY
        </h2>

        <p className="hero-text-body text-gray-800 mb-4">
          To apply for any of the positions listed above, please send your:
        </p>

        <div className="space-y-0 mb-6">
          {applicationItems.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-3 px-[8px] py-[17px]"
              style={{ background: index % 2 === 0 ? "linear-gradient(to right, #CFE2C8, #FFFFFF)" : "linear-gradient(to left, #CFE2C8, #FFFFFF)" }}
            >
              <CheckCircle className="h-4 w-4 text-[#336429] shrink-0" />
              <span className="hero-text-practice-desc">{item}</span>
            </div>
          ))}
        </div>

        <p className="hero-text-body text-gray-800">
          Send your application to:{" "}
          <span className="text-[#163C0F] font-semibold">careers@clc.in</span>
        </p>

        <p className="hero-text-body text-gray-500 mt-3">
          * We review all applications carefully and will contact shortlisted candidates for interviews.
        </p>

        <div className="w-full border border-dotted border-[#22461B]/50 mt-[24px]" />
      </section>
    </div>
  );
};

export default Career;
