"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LeftSidebarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

const LeftSidebar = ({ activeSection, setActiveSection }: LeftSidebarProps) => {
  const pathname = usePathname();

  const menuItems = [
    { label: "HOME", key: "home", href: "/", separator: true },
    { label: "ABOUT CLC", key: "about", href: "/about" },
    { label: "PRACTICE AREAS", key: "expertise", href: "/practice-area" },
    { label: "OUR TEAM", key: "team", href: "/team" },
    { label: "INSIGHTS & Blog", key: "insights", href: "/insights" },
    { label: "NEWS & UPDATES", key: "content", href: "/news", separator: true },
    // { label: "MATTER UPDATES", key: "content", href: "/matter-updates" },
    { label: "CONTACT", key: "contact", href: "/contact", separator: true },
    // { label: "CAREER OPPORTUNITIES", key: "career", href: "/career" },
  ];

  const sections = [
    { bold: "CLC", tag: "IN NEWS", subtitle: "How we perform", key: "content", href: "/news" },
    { bold: "CLC", tag: "MATTER UPDATES", subtitle: "See our recent matters", href: "/insights", key: "matter-updates" },
    { bold: "MATTER", tag: "Hotline", subtitle: "Latest discussions", key: "hotline", href: "https://youtube.com/@taxtalksbyclc?si=h-vS6V1ISGauJzXS" },
  ];

  const isMenuItemActive = (href: string, key: string) => {
    if (href === "/") {
      return pathname === "/" || activeSection === key;
    }

    return pathname === href || pathname.startsWith(`${href}/`) || activeSection === key;
  };

  return (
    <div
      className="left-sidebar cursor-pointer flex flex-col self-start"
      style={{ width: "188px", minWidth: "160px" }}
    >
      {/* Top dark green nav */}
      <div className="bg-[#163C0F]">
        <nav className="flex flex-col">
          {menuItems.map((item, index) => {
            const isActive = isMenuItemActive(item.href, item.key);
            return (
              <React.Fragment key={index}>
                <Link href={item.href}>
                  <button
                    onClick={() => setActiveSection?.(item.key)}
                    className={`w-full text-left transition-colors ${isActive ? 'bg-[#A6C89A]' : 'hover:bg-white/10'}`}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "10.5px",
                      lineHeight: "100%",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      padding: "8px 14px",
                    }}
                  >
                    <span style={{ color: isActive ? "#163C0F" : "#FFFFFF" }}>
                      {item.label}
                    </span>
                  </button>
                </Link>
                {item.separator && (
                  <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.25)", margin: "0" }} />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Bottom lighter green section */}
      <div
        className="flex-1"
        style={{ background: "linear-gradient(to top, #75966b, #b2c6aa)" }}
      >
        <div className="flex flex-col divide-y divide-white/20">
          {sections.map((s, i) => {
            const isActive = activeSection === s.key;
            const isExternal = s.href?.startsWith('http');
            const content = (
              <div className={`px-3 py-[5px] cursor-pointer transition-colors ${isActive ? 'bg-white/30' : 'hover:bg-white/10'}`}>
                <div className="flex items-center gap-[5px]">
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      fontSize: "17.4px",
                      fontStyle: "Bold",
                      color: "#163C0F",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.bold}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "10.7px",
                      color: "#163C0F",
                      fontStyle: "Regular",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "9.4px",
                    lineHeight: "15px",
                    color: "#163C0F",

                  }}
                >
                  {s.subtitle}
                </p>
              </div>
            );

            return (
              <div key={i}>
                {s.href ? (
                  isExternal ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <Link href={s.href}>{content}</Link>
                  )
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
