import Link from "next/link";

const Footer = () => {
  const links = [
    // { label: "DISCLAIMER", href: "/terms-and-conditions#disclaimer" },
    { label: "PRIVACY POLICY", href: "/privacy-policy" },
    { label: "TERMS & CONDITIONS", href: "/terms-and-conditions" },
    { label: "COOKIE POLICY", href: "/cookie-policy" },
  ];

  return (
    <footer>
      <div className="relative z-50 border-t border-gray-200 bg-white">
        <div className="flex flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-nowrap items-center justify-center md:justify-start gap-4 sm:gap-6 overflow-x-auto w-full md:w-auto">
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="cursor-pointer whitespace-nowrap transition-colors hover:text-[#163C0F]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "11px",
                  letterSpacing: "0.6px",
                  color: "#6B7280",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "11px",
              letterSpacing: "0.6px",
              color: "#6B7280",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
            className="text-center md:text-right"
          >
            CLC ©2026 All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
