"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const locations = ["NEW DELHI", "MUMBAI", "BENGALURU"];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT CLC", href: "/about" },
    { label: "PRACTICE AREAS", href: "/practice-area" },
    { label: "OUR TEAM", href: "/team" },
    { label: "INSIGHTS", href: "/insights" },
    { label: "NEWS AND UPDATES", href: "/news" },
    { label: "CONTACT", href: "/contact" },
    { label: "CAREER OPPORTUNITIES", href: "/career" },
  ];

  const isMenuItemActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full" style={{ position: "relative", zIndex: 40 }}>

      {/* Logo row */}
      <div className="bg-[#E5ECE3]/80">
        <div className="w-full h-[80px] sm:h-[107px] px-4 sm:px-6 md:px-6 py-2 sm:py-3 flex justify-between items-center gap-3">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/new/NavLogo.svg"
              width={280}
              height={60}
              alt="Commercial Law Chamber - Leading Tax & Commercial Disputes Law Firm"
              loading="eager"
              fetchPriority="high"
              // FIX 7: Slightly reduced max-w on mobile to give hamburger more room at 320px
              className="h-7 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[280px]"
            />
          </Link>

          <div className="flex items-center gap-3">
            {/* LinkedIn — forced hidden on mobile via scoped style tag */}
            <style>{`@media (max-width: 639px) { .linkedin-desktop { display: none !important; } }`}</style>
            <a
              href="https://www.linkedin.com/company/7953220/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="linkedin-desktop"
              style={{ width: "28px", height: "28px", display: "block" }}
            >
              <img src="/new/LinkedIn_icon.svg" style={{ width: "28px", height: "28px" }} alt="LinkedIn" />
            </a>

            {/* Hamburger — visible only on mobile/tab (below lg) */}
            <button
              className="lg:hidden p-1 text-[#163C0F]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Location tabs — desktop only */}
      <div className="bg-[#163C0F]/70 w-full h-[55px] hidden sm:flex justify-between items-center px-4 sm:px-6">
        <a
          href="mailto:legal@clclaw.in"
          className="flex items-center gap-[5px]"
          aria-label="Email Commercial Law Chamber"
        >
          <Image
            src="/new/mailIcon.svg"
            width={12}
            height={12}
            className="w-[9.5px] h-[9.5px]"
            alt=""
            aria-hidden="true"
          />
          <h3
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "10px",
              color: "white",
              lineHeight: "18px",
              letterSpacing: "0%",
              verticalAlign: "middle",
              textTransform: "uppercase",
            }}
          >
            legal@clclaw.in
          </h3>
        </a>

        <div className="flex justify-end gap-[25px]">
          {locations.map((location) => (
            <Link
              key={location}
              href="/contact"
              className="text-white py-3 px-4 sm:px-0"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "8.8px",
                lineHeight: "11px",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
              }}
            >
              {location}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        // FIX 4: Changed from relative → absolute so the dropdown overlays page content properly.
        // FIX 5: Removed max-h + overflow-y-auto to prevent scroll-trap conflict with page scroll.
        //         The menu has 8 items — no real need for inner scroll.
        <div
          className="lg:hidden"
          style={{
            backgroundColor: "#163C0F",
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            zIndex: 50,
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          }}
        >

          {/* Locations on mobile */}
          <div className="flex gap-4 px-4 py-3 border-b border-white/10">
            {locations.map((loc) => (
              <Link
                key={loc}
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "9px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                {loc}
              </Link>
            ))}
          </div>

          {/* Nav links */}
          <nav className="flex flex-col">
            {menuItems.map((item, i) => {
              const isActive = isMenuItemActive(item.href);
              return (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-3 border-b border-white/10 last:border-0"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: isActive ? "#163C0F" : "#FFFFFF",
                    backgroundColor: isActive ? "#A6C89A" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* FIX 6: Email + LinkedIn visible on mobile — placed at the bottom of the dropdown */}
          <div className="flex items-center justify-between px-5 py-4 border-t border-white/10">
            <a
              href="mailto:legal@clclaw.in"
              className="flex items-center gap-2"
              aria-label="Email Commercial Law Chamber"
              onClick={() => setMobileMenuOpen(false)}
            >
              <img
                src="/new/mailIcon.svg"
                className="w-[12px] h-[12px]"
                alt=""
                aria-hidden="true"
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.85)",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                }}
              >
                legal@clclaw.in
              </span>
            </a>

            <a
              href="https://www.linkedin.com/company/7953220/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-[24px] h-[24px]"
            >
              <img src="/new/LinkedIn_icon.svg" className="w-[24px] h-[24px]" alt="LinkedIn" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;