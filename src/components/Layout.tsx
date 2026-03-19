"use client";
import gsap from "gsap";
import { ReactNode, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const DISCLAIMER_CONSENT_KEY = "clc-disclaimer-consent";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const leftSidebarRef = useRef<HTMLDivElement>(null);
  const rightSidebarRef = useRef<HTMLDivElement>(null);

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Pages that benefit from sidebars
  const sidebarPages = [
    "/",
    "/insights",
    "/practice-area",
    "/expertise",
    "/team",
    "/news",
    "/news-updates",
    "/matter-updates"
  ];

  const showSidebars = sidebarPages.some(path => pathname.startsWith(path));

  // Map path → section
  const routeToSection: Record<string, string> = {
    "": "home",
    "about": "about",
    "career": "career",
    "expertise": "expertise",
    "practice-area": "expertise",
    "team": "team",
    "insights": "insights",
    "contact": "contact",
    "news-updates": "content",
    "news": "content",
    "matter-updates": "matter-updates",
  };

  const firstSegment = pathname.split("/").filter(Boolean)[0] || "";
  const activeSection = routeToSection[firstSegment] || "home";

  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!showSidebars) return;

    const ctx = gsap.context(() => {
      if (leftSidebarRef.current) {
        gsap.fromTo(leftSidebarRef.current,
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out",
            overwrite: "auto"
          }
        );
      }

      if (rightSidebarRef.current) {
        gsap.fromTo(rightSidebarRef.current,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.6,
            ease: "power3.out",
            overwrite: "auto"
          }
        );
      }
    });

    return () => ctx.revert();
  }, [pathname, showSidebars]);

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem(DISCLAIMER_CONSENT_KEY);
      if (consent !== "accepted") {
        setShowDisclaimer(true);
      }
    } catch {
      setShowDisclaimer(true);
    }
  }, []);

  useEffect(() => {
    if (!showDisclaimer) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showDisclaimer]);

  const handleAgreeDisclaimer = () => {
    window.localStorage.setItem(DISCLAIMER_CONSENT_KEY, "accepted");
    setShowDisclaimer(false);
  };

  const handleDisagreeDisclaimer = () => {
    window.localStorage.setItem(DISCLAIMER_CONSENT_KEY, "rejected");
    window.location.href = "https://www.google.com";
  };

  return (

    <div className="min-h-screen pt-0 sm:pt-[20px] flex flex-col items-center overflow-x-hidden">
      {showDisclaimer && (
        <div className="fixed inset-0 z-[100] bg-black/70 px-4 py-6 sm:px-6 flex items-center justify-center">
          <div className="w-full max-w-2xl rounded-2xl border border-[#22461B]/30 bg-white shadow-2xl">
            <div className="border-b border-[#22461B]/20 px-5 py-4 sm:px-6 sm:py-5">
              <h2 className="hero-text-section-heading text-[#163C0F]">Disclaimer</h2>
              <p className="hero-text-team-role text-[#374151] mt-1">Please review before continuing.</p>
            </div>

            <div className="max-h-[50vh] overflow-y-auto px-5 py-4 sm:px-6 text-left space-y-4">
              <p className="hero-text-body text-[#374151]">
                The Bar Council of India does not permit advertisement or solicitation by professionals in the field of law and taxation. By accessing this website, you acknowledge that you are seeking information about CLC, voluntarily and that there has been no form of solicitation, advertisement, or inducement by the firm or its members. The content available on this website is intended solely for informational purposes and should not be construed as legal, tax, or professional advice, nor as a substitute for formal consultation. Accessing or using this website does not create any client-professional relationship. While reasonable care has been taken to ensure the accuracy of the information, CLC makes no representations or warranties regarding its completeness or reliability and shall not be liable for any actions taken based on the website content. For specific advice, users are encouraged to seek formal professional engagement.
              </p>
              <p className="hero-text-body text-[#374151]">
                By clicking Agree, you confirm that you have read and accepted the disclaimer and related policies.
              </p>
              <p className="hero-text-team-role text-[#163C0F]">
                Read full details: {" "}
                <Link href="/terms-and-conditions" className="underline hover:text-[#336429]">Terms &amp; Conditions</Link>
                {" "}|{" "}
                <Link href="/privacy-policy" className="underline hover:text-[#336429]">Privacy Policy</Link>
              </p>
            </div>

            <div className="border-t border-[#22461B]/20 px-5 py-4 sm:px-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
              {/* <button
                type="button"
                onClick={handleDisagreeDisclaimer}
                className="hero-text-button border border-[#163C0F]/30 text-[#163C0F] bg-white px-4 py-2 rounded-md hover:bg-[#F3F7F1] transition-colors"
              >
                Disagree
              </button> */}
              <button
                type="button"
                onClick={handleAgreeDisclaimer}
                className="hero-text-button bg-[#163C0F] text-white px-4 py-2 rounded-md hover:bg-[#1E4E15] transition-colors"
              >
                Agree
              </button>
            </div>
          </div>
        </div>
      )}

      {/* problem div */}
      <div className="flex flex-row items-start lg:justify-center w-full max-w-[1600px] px-0 sm:px-2 md:px-4 overflow-x-hidden">
        {/* LEFT SIDEBAR - Pinned to the left of the main block */}
        {showSidebars && (
          <div ref={leftSidebarRef} className="hidden  lg:block w-48 xl:w-52 shrink-0 sticky top-[0px] mt-[180px] -mr-25 z-20">
            <LeftSidebar
              activeSection={activeSection}
              setActiveSection={() => setIsMobileSidebarOpen(false)}
            />
          </div>
        )}

        {/* MAIN PAGE BLOCK (Center) */}
        <div className="w-full max-w-[834px] min-w-0">
          <Header />
          <div className="w-full  shadow-2xl relative border bg-white border-gray-200">



            {/* MOBILE SIDEBAR OVERLAY */}
            {isMobileSidebarOpen && showSidebars && (
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMobileSidebarOpen(false)}
              />
            )}

            {/* MOBILE SIDEBAR SLIDE-IN */}
            {showSidebars && (
              <div
                className={`lg:hidden transition-all duration-300 z-50 fixed left-0 top-0 h-full w-64 bg-white shadow-xl ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
              >
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-[#163C0F] text-white">
                  <span className="font-bold">MENU</span>
                  <X className="h-5 w-5 cursor-pointer" onClick={() => setIsMobileSidebarOpen(false)} />
                </div>
                <LeftSidebar
                  activeSection={activeSection}
                  setActiveSection={() => setIsMobileSidebarOpen(false)}
                />
              </div>
            )}

            {/* MAIN CONTENT AREA - UNDER SIDEBARS */}
            <div className="min-w-0 relative z-0">
              {children}
            </div>


          </div>

          <div className="relative z-0">
            <Footer />
          </div>
        </div>

        {/* RIGHT SIDEBAR - Pinned to the right of the main block */}
        {showSidebars && (
          <div ref={rightSidebarRef} className="hidden  lg:block w-64 xl:w-72 shrink-0 sticky top-[0px] mt-[180px] -ml-20 z-20">
            <RightSidebar />
          </div>
        )}
      </div>

    </div>
  );
}
