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

  return (
    <header className="w-full max-w-[834px] ">
      {/* Logo row */}
      <div className="bg-[#E5ECE3]/80">
        <div className="w-full h-[107px]  px-4 sm:px-6 md:px-6 py-3 flex  justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/new/NavLogo.svg"
              width={280}
              height={60}
              alt="Commercial Law Chamber - Leading Tax & Commercial Disputes Law Firm"
              loading="eager"
              fetchPriority="high"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>

          <div className="flex items-center gap-3">
            {/* LinkedIn — hidden on mobile */}
            <a
              href="https://www.linkedin.com/company/7953220/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden w-[28px] h-[28px] sm:block"
            >
              <img src="/new/LinkedIn_icon.svg" className="w-[28px] h-[28px] " alt="LinkedIn" />
            </a>

            {/* Hamburger — visible only on mobile/tab (below lg) */}
            <button
              className="lg:hidden p-1 text-[#163C0F]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Location tabs — desktop */}
      <div className="bg-[#163C0F]/70 w-full h-[55px]  hidden sm:flex justify-between items-center px-4 sm:px-6">

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
          <h3 style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontStyle: "Semi Bold",
            fontSize: "10px",
            color: "white",
            lineHeight: "18px",
            letterSpacing: "0%",
            verticalAlign: "middle",
            textTransform: "uppercase",

          }}>legal@clclaw.in</h3>
        </a>
        <div className="flex justify-end gap-[25px]">
          {locations.map((location) => (
            <Link
              key={location}
              href="/contact"
              className="text-white py-3 px-4 sm:px-0 "
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
        <div className="lg:hidden bg-[#163C0F] z-50 relative">
          {/* Locations on mobile */}
          <div className="flex gap-2 px-4 py-2 border-b border-white/10">
            {locations.map((loc) => (
              <span
                key={loc}
                className="text-white/80"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {loc}
              </span>
            ))}
          </div>

          {/* Nav links */}
          <nav className="flex flex-col">
            {menuItems.map((item, i) => {
              const isActive = pathname === item.href;
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
        </div>
      )}
    </header>
  );
};

export default Header;
