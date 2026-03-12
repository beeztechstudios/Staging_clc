"use client";
import gsap from "gsap";
import { ReactNode, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const leftSidebarRef = useRef<HTMLDivElement>(null);
  const rightSidebarRef = useRef<HTMLDivElement>(null);

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Pages that benefit from sidebars
  const sidebarPages = [
    "/",
    "/insights",
    "/practice-area",
    "/expertise",
    "/team",
    "/news",
    "/news-updates"
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
  };

  const cleanPath = pathname.replace("/", "").trim();
  const activeSection = routeToSection[cleanPath] || "home";

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

  return (

    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* problem div */}
      <div className="flex flex-row items-start lg:justify-center  w-full max-w-[1600px]  px-0 sm:px-2 md:px-4">
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
        <div className="max-w-[834px]">
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
