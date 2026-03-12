"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LeftSidebar from "@/components/LeftSidebar";

export default function ClientLayoutShell({
  children,
  activeSection,
  RightSidebarSection,
}: {
  children: ReactNode;
  activeSection: string;
  RightSidebarSection: ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          {isMobileSidebarOpen ? (
            <X className="h-4 w-4 mr-2" />
          ) : (
            <Menu className="h-4 w-4 mr-2" />
          )}
          {isMobileSidebarOpen ? "Close Menu" : "Open Menu"}
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* MOBILE BACKDROP */}
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* MOBILE SIDEBAR */}
        <div
          className={`lg:hidden transition-all duration-300 z-50 relative ${
            isMobileSidebarOpen ? "block" : "hidden"
          }`}
        >
          <LeftSidebar
            activeSection={activeSection}
            setActiveSection={() => setIsMobileSidebarOpen(false)}
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 min-w-0">{children}</div>

        {/* RIGHT SIDEBAR (CLIENT PLACEHOLDER RENDERING SERVER COMPONENT) */}
        <div className="hidden lg:block lg:w-60 xl:w-64">
          {RightSidebarSection}
        </div>
      </div>
    </>
  );
}
