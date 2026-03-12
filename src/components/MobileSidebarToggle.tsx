"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LeftSidebar from "@/components/LeftSidebar";
import { usePathname } from "next/navigation";

export default function MobileSidebarToggle({ activeSection }: { activeSection: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close sidebar when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Toggle Button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(!open)}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          {open ? <X className="h-4 w-4 mr-2" /> : <Menu className="h-4 w-4 mr-2" />}
          {open ? "Close Menu" : "Open Menu"}
        </Button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`lg:hidden z-50 relative transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <LeftSidebar activeSection={activeSection} setActiveSection={() => setOpen(false)} />
      </div>
    </>
  );
}
