import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 w-4/6 mx-auto">
      <div className="bg-black rounded-3xl mx-4 md:mx-8">
        <div className="max-w-4xl mx-auto px-8 py-16 text-center">
          <Badge className="bg-[#ff4f01] text-white mb-8 px-4 py-2">✱ Pricing</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple transparent pricing</h2>
          <p className="text-gray-300 text-lg mb-12">Pick a package or contact us for custom pricing</p>

          <div className="bg-[#F5F3F0] rounded-3xl p-8 max-w-lg mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-1 flex">
                <Button className="bg-[#ff4f01] hover:bg-[#e04501] text-white px-6 py-2 rounded-full text-sm font-medium">
                  Standard
                </Button>
                <Button variant="ghost" className="text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100">
                  ⚡ Combo
                </Button>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-4xl font-bold text-black mb-2">$395 / SKU</div>
              <p className="text-gray-600 text-sm mb-6">Get a label OR packaging designed for 1 SKU + Basic branding</p>
              
              <hr className="border-gray-300 mb-6" />
              
              <div className="grid grid-cols-2 gap-4 text-left text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Label or Packaging for 1 sku</span>
                </div>
                                  <Check className="w-4 h-4 text-[#ff4f01] mt-0.5 flex-shrink-0" />
                  <span>High quality designs</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#ff4f01] mt-0.5 flex-shrink-0" />
                  <span>Unlimited revision requests until satisfied</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#ff4f01] mt-0.5 flex-shrink-0" />
                  <span>Typical 2-3 day turnaround</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#ff4f01] mt-0.5 flex-shrink-0" />
                  <span>Pause or cancel anytime</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#ff4f01] mt-0.5 flex-shrink-0" />
                  <span>Dedicated project manager</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#ff4f01] mt-0.5 flex-shrink-0" />
                  <span>Personal slack channel</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#ff4f01] mt-0.5 flex-shrink-0" />
              </div>
            </div>

            <Button className="bg-[#ff4f01] hover:bg-[#e04501] text-white w-full py-3 rounded-full font-medium">
              Book a 15-min call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
