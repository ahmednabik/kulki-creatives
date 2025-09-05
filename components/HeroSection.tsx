import { Button } from "@/components/ui/button"
import ImageGrid from "./ImageGrid"

export default function HeroSection() {
  return (
    <section className="relative px-4 py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Floating Service Icons */}
        {/* Logo Icon - Top Left */}
        <div className="absolute top-0 left-8 hidden lg:flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#ff4f01" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" fill="#ff4f01"/>
            </svg>
          </div>
          <span className="text-sm text-gray-600">Logo</span>
        </div>

        {/* Packaging Icon - Top Right */}
        <div className="absolute top-0 right-8 hidden lg:flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" stroke="#ff4f01" strokeWidth="2"/>
              <path d="m3.3 7 8.7 5 8.7-5" stroke="#ff4f01" strokeWidth="2"/>
              <path d="M12 22V12" stroke="#ff4f01" strokeWidth="2"/>
            </svg>
          </div>
          <span className="text-sm text-gray-600">Packaging</span>
        </div>

        {/* Branding Icon - Middle Left */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 hidden lg:flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12l2 2 4-4" stroke="#ff4f01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="#ff4f01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="#ff4f01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 21c0-1-1-3-3-3s-3 2-3 3 1 3 3 3 3-2 3-3" stroke="#ff4f01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" stroke="#ff4f01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm text-gray-600">Branding</span>
        </div>

        {/* 3D Mockups Icon - Middle Right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 hidden lg:flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#ff4f01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm text-gray-600">3D Mockups</span>
        </div>

        {/* Label Icon - Bottom Left */}
        <div className="absolute bottom-0 left-8 hidden lg:flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke="#ff4f01" strokeWidth="2"/>
              <line x1="7" y1="7" x2="7.01" y2="7" stroke="#ff4f01" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-sm text-gray-600">Label</span>
        </div>

        {/* Research Icon - Bottom Right */}
        <div className="absolute bottom-0 right-8 hidden lg:flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="#ff4f01" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="#ff4f01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-sm text-gray-600">Research</span>
        </div>

        {/* Brand */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 font-serif italic cursor-pointer transition-all duration-300 hover:animate-spin-tilt-shake inline-block">
            kulki
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-48 ">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Your in-house designer
            <br />
            that never goes on leave
          </h2>
          <p className="text-lg text-gray-600 mb-8">Have a PRO designer on standby. Any day. Any hour</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ff4f01] hover:bg-[#e04501] text-white px-8 py-6 rounded-full text-lg">
              Book a call
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-black px-8 py-6 rounded-full text-lg bg-transparent"
            >
              See Pricing
            </Button>
          </div>
        </div>
      </div>
      <ImageGrid />
    </section>
  )
}
