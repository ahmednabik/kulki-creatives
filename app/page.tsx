import HeroSection from "@/components/HeroSection"
import TrustedBySection from "@/components/TrustedBySection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ProcessSection from "@/components/ProcessSection"
import ServicesSection from "@/components/ServicesSection"
import FeaturesSection from "@/components/FeaturesSection"
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection"
import PricingSection from "@/components/PricingSection"
import FAQSection from "@/components/FAQSection"
import CallToActionSection from "@/components/CallToActionSection"
import BottomNavigation from "@/components/BottomNavigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-rgb(255, 250, 245);">
      <HeroSection />
      <TrustedBySection />
      <TestimonialsSection />
      <ProcessSection />
      <ServicesSection />
      <FeaturesSection />
      <FeaturedProjectsSection />
      <PricingSection />
      <FAQSection />
      <CallToActionSection />
      <BottomNavigation />
    </div>
  )
}