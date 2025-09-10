import { Button } from "@/components/ui/button";
import ImageGrid from "./ImageGrid";
import LogoIcon from "./icons/LogoIcon";
import BrandingIcon from "./icons/BrandingIcon";
import LabelIcon from "./icons/LabelIcon";
import PackagingIcon from "./icons/PackagingIcon";
import MockupsIcon from "./icons/MockupsIcon";
import ResearchIcon from "./icons/ResearchIcon";
import KulkiLogo from "./icons/KulkiLogo";
import TypewriterText from "./typewriter-text";

export default function HeroSection() {
  const services = [
    "Logo Design",
    "Packaging ",
    "Branding ",
    "3D Mockups ",
    "Label Designs",
  ];
  return (
    <section className="relative px-4 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Floating Service Icons */}
        {/* Logo Icon - Top Left */}
        <div className="absolute top-0 left-16 hidden lg:flex flex-col items-center hover:rotate-360 transition-all duration-600 hover:scale-80 cursor-pointer">
          <LogoIcon />
          <span className="text-sm text-gray-600">Logo</span>
        </div>

        {/* Packaging Icon - Top Right */}
        <div className="absolute top-0 right-16 hidden lg:flex flex-col items-center hover:rotate-360 transition-all duration-600 hover:scale-80 cursor-pointer">
          <PackagingIcon />
          <span className="text-sm text-gray-600">Packaging</span>
        </div>

        {/* Branding Icon - Middle Left */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 hidden lg:flex flex-col items-center hover:rotate-360 transition-all duration-600 hover:scale-80 cursor-pointer">
          <BrandingIcon />
          <span className="text-sm text-gray-600">Branding</span>
        </div>

        {/* 3D Mockups Icon - Middle Right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 hidden lg:flex flex-col items-center hover:rotate-360 transition-all duration-600 hover:scale-80 cursor-pointer">
          <MockupsIcon />
          <span className="text-sm text-gray-600">3D Mockups</span>
        </div>

        {/* Label Icon - Bottom Left */}
        <div className="absolute bottom-0 left-16 hidden lg:flex flex-col items-center hover:rotate-360 transition-all duration-600 hover:scale-80 cursor-pointer">
          <LabelIcon />
          <span className="text-sm text-gray-600">Label</span>
        </div>

        {/* Research Icon - Bottom Right */}
        <div className="absolute bottom-0 right-16 hidden lg:flex flex-col items-center hover:rotate-360 transition-all duration-600 hover:scale-80 cursor-pointer">
          <ResearchIcon />
          <span className="text-sm text-gray-600">Research</span>
        </div>

        {/* Brand */}
        <div className="mb-24 mx-auto flex justify-center">
          <KulkiLogo />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-48 ">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Stop Losing Sales to Forgettable{" "}
            <span className="text-orange-500">
              <TypewriterText
                words={services}
                className="text-orange-500 underline-offset-12 underline"
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let us design your product packaging to be irresistible on the
            shelf.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <a href="https://calendly.com/mykulki/15min">
              <Button className="bg-[#ff4f01] hover:bg-[#e04501] text-white px-8 py-6 rounded-full text-lg cursor-pointer hover:scale-105 transition-all duration-300">
                Book a call
              </Button>
            </a>
            <a href="#pricing">
              <Button
                variant="outline"
                className=" text-black border bg-transparent px-8 py-6 rounded-full text-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                See Pricing
              </Button>
            </a>
          </div>
        </div>
      </div>
      <ImageGrid />
    </section>
  );
}
