// import HeroAnimations from "@/lib/heroAnimation";
// import HeroBackground from "@/components/HeroBackground";
// import { MapPin, Phone, Mail } from "lucide-react";

// const contactInfo = [
//   {
//     icon: MapPin,
//     title: "Delhi",
//     details: ["A1, Block A, Jangpura Extension,", "New Delhi - 110014, India"],
//   },
//   {
//     icon: MapPin,
//     title: "Mumbai",
//     details: ["76, 7th Floor, Bajaj Bhawan, Nariman Point,", "Mumbai – 400021, India"],
//   },
//   {
//     icon: MapPin,
//     title: "Bengaluru",
//     details: ["No. 6/A, 3A Main Road, Ramaiah Layout,", "Bengaluru – 560 084, India"],
//   },


// ];

// const whyChoose = [
//   "Boutique law practice — Client-focused strategic tax advisory.",
//   "Supreme Court Expertise — Proven experience in Tax and Commercial Disputes.",
//   "20+ Years of Experience — Leading among taxation law firms in India.",
//   "Pan-India Presence — Seamless representation across jurisdictions.",
//   "Research-Driven Approach — Strategy built on strong legal research, precedents, and practical solutions.",
// ];

// const Contact = () => {
//   return (
//     <div className="flex-1 bg-white xl:mx-10">
//       <HeroAnimations />

//       {/* Header */}
//       <section className="relative py-4 px-4 sm:px-8 md:px-12 lg:px-16 text-center overflow-hidden">
//         <HeroBackground />
//         <div className="mx-auto max-w-2xl px-2">
//           <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">
//             Contact Us
//           </p>
//           {/* <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-8">
//             Reach out to our experienced team for strategic legal counsel in tax and commercial disputes. We're here to protect your interests.
//           </p> */}
//         </div>
//       </section>

//       {/* Contact Info */}
//       <section className="hero-buttons py-4 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
//         <h2 className="hero-text-section-heading text-[#336429] mt-[24px] mb-[12px]">
//           OUR OFFICES
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {contactInfo.map((info, index) => (
//             <div
//               key={index}
//               className="flex items-start gap-4 p-[11px]  transition-all"
//             >
//               {/* <div className="bg-[#B3C7AB]/40 p-2 shrink-0">
//                 <info.icon className="h-5 w-5 text-[#163C0F]" />
//               </div> */}
//               <div className="min-w-0 flex-1">
//                 <h3 className="hero-text-practice-title mb-2">{info.title}</h3>
//                 <div className="space-y-1">
//                   {info.details.map((detail, i) => {
//                     const isPhone = /^\+?91[\s-]?\d{5}[\s-]?\d{5}$/.test(detail.replace(/\s/g, ""));
//                     const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(detail);

//                     if (isPhone) {
//                       return (
//                         <p key={i} className="hero-text-practice-desc">
//                           <a href={`tel:${detail.replace(/\s|-/g, "")}`}
//                             className="text-[#163C0F] font-semibold hover:underline"
//                           >
//                             {detail}
//                           </a>
//                         </p>
//                       );
//                     } else if (isEmail) {
//                       return (
//                         <p key={i} className="hero-text-practice-desc">
//                           <a href={`mailto:${detail}`}
//                             className="text-[#163C0F] font-semibold hover:underline"
//                           >
//                             {detail}
//                           </a>
//                         </p>
//                       );
//                     } else {
//                       return (
//                         <p key={i} className="hero-text-practice-desc text-[#374151]">{detail}</p>
//                       );
//                     }
//                   })}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Tagline */}
//         <div
//           className="mt-6 px-[8px] py-[17px] justify-content content-left rounded-[16px] hero-buttons"
//           style={{ background: "linear-gradient(to right, #CFE2C8, #FFFFFF)" }}
//         >
//           <p className="hero-text-practice-title  mb-[4px]">Contact</p>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

//             <p className=" text-[#5A6F55]">
//               <a href={`mailto:legal@clc.in`} className="text-[#163C0F] font-semibold hover:underline">
//                 legal@clclaw.in
//               </a>
//             </p>
//             <p>
//               <a href={`tel:+919999920118`} className="text-[#163C0F] font-semibold hover:underline">
//                 +91 99999 20118
//               </a>

//             </p>
//           </div>
//         </div>

//         <div className="w-full border border-dotted border-[#22461B]/50 mt-[24px]" />
//       </section>
//     </div>
//   );
// };

// export default Contact;




import HeroAnimations from "@/lib/heroAnimation";
import HeroBackground from "@/components/HeroBackground";
import { MapPin, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Delhi",
    details: ["A1, Block A, Jangpura Extension,", "New Delhi - 110014, India"],
  },
  {
    icon: MapPin,
    title: "Mumbai",
    details: ["76, 7th Floor, Bajaj Bhawan, Nariman Point,", "Mumbai – 400021, India"],
  },
  {
    icon: MapPin,
    title: "Bengaluru",
    details: ["No. 6/A, 3A Main Road, Ramaiah Layout,", "Bengaluru – 560 084, India"],
  },


];

const whyChoose = [
  "Boutique law practice — Client-focused strategic tax advisory.",
  "Supreme Court Expertise — Proven experience in Tax and Commercial Disputes.",
  "20+ Years of Experience — Leading among taxation law firms in India.",
  "Pan-India Presence — Seamless representation across jurisdictions.",
  "Research-Driven Approach — Strategy built on strong legal research, precedents, and practical solutions.",
];

const Contact = () => {
  return (
    <div className="flex-1 bg-white xl:mx-10">
      <HeroAnimations />

      {/* Header */}
      <section className="relative py-4 px-4 sm:px-8 md:px-12 lg:px-16 text-center overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-2xl px-2">
          <p className="hero-text-title hero-title md:mt-[104px] text-[#163C0F] mb-[6px]">
            Contact Us
          </p>
          {/* <p className="hero-text-subpara text-[#163C0F] hero-para max-w-lg mx-auto mb-8">
            Reach out to our experienced team for strategic legal counsel in tax and commercial disputes. We're here to protect your interests.
          </p> */}
        </div>
      </section>

      {/* Contact Info */}
      <section className="hero-buttons py-4 px-4 sm:px-8 md:px-12 lg:px-16 bg-white">
        <h2 className="hero-text-section-heading text-[#336429] mt-[24px] mb-[12px]">
          OUR OFFICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-5  transition-all"
            >
              <h3 className="hero-text-practice-title text-[#163C0F] mb-3">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, i) => {
                  const isPhone = /^\+?91[\s-]?\d{5}[\s-]?\d{5}$/.test(detail.replace(/\s/g, ""));
                  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(detail);

                  if (isPhone) {
                    return (
                      <p key={i} className="hero-text-practice-desc">
                        <a
                          href={`tel:${detail.replace(/\s|-/g, "")}`}
                          className="text-[#163C0F] font-semibold hover:underline"
                        >
                          {detail}
                        </a>
                      </p>
                    );
                  } else if (isEmail) {
                    return (
                      <p key={i} className="hero-text-practice-desc">
                        <a
                          href={`mailto:${detail}`}
                          className="text-[#163C0F] font-semibold hover:underline"
                        >
                          {detail}
                        </a>
                      </p>
                    );
                  } else {
                    return (
                      <p key={i} className="hero-text-practice-desc text-[#666666]">
                        {detail}
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="mt-8 px-6 py-5 rounded-[12px] bg-gradient-to-r from-[#E8F3E4] to-white "
        >
          <h3 className="hero-text-practice-title text-[#163C0F] mb-4">
            Contact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-[#163C0F] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-[#666666] mb-1"> <a
                  href="mailto:legal@clclaw.in"
                  className="text-[#163C0F] font-semibold hover:underline break-all"
                >
                  legal@clclaw.in
                </a></p>

              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-[#163C0F] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-[#666666] mb-1"><a
                  href="tel:+919999920118"
                  className="text-[#163C0F] font-semibold hover:underline"
                >
                  +91 99999 20118
                </a></p>

              </div>
            </div>
          </div>
        </div>

        <div className="w-full border border-dotted border-[#E8F3E4] mt-8 mb-4" />
      </section>
    </div>
  );
};

export default Contact;
