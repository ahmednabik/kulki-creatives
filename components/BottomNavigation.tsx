"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("services");

  const sections = useMemo(
    () => [
      { id: "services", label: "Services" },
      { id: "features", label: "Features" },
      { id: "projects", label: "Projects" },
      { id: "pricing", label: "Pricing" },
      { id: "testimonials", label: "Reviews" },
    ],
    []
  );

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-md rounded-full px-3 py-2 flex items-center gap-1 shadow-lg">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            onClick={() => scrollToSection(section.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              activeSection === section.id
                ? "text-[#ff4f01] bg-[#ff4f01]/15"
                : "text-white/70 hover:text-[#ff4f01] hover:bg-white/10"
            }`}
          >
            {section.label}
          </Button>
        ))}

        <div className="w-px h-4 bg-white/20 mx-1" />

        <Button
          variant="ghost"
          onClick={scrollToTop}
          className="text-white/70 hover:text-[#ff4f01] hover:bg-white/10 p-1.5 rounded-full transition-all duration-200"
        >
          <ArrowUp className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}
