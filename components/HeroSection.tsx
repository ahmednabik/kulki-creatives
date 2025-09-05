import { Button } from "@/components/ui/button"
import ImageGrid from "./ImageGrid"
import {
  Fingerprint,
  Tag,
  Search,
  Bold as Bottle,
  Package,
} from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Brand */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 font-serif italic">kulki</h1>
        </div>

   


    

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-48">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Your in-house designer
            <br />
            that never goes on leave
          </h2>
          <p className="text-lg text-gray-600 mb-8">Have a PRO designer on standby. Any day. Any hour</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ff4f01] hover:bg-[#e04501] text-white px-8 py-3 rounded-full text-lg">
              Book a call
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-black px-8 py-3 rounded-full text-lg bg-transparent"
            >
              See Pricing
            </Button>
          </div>
        </div>
      </div>
<ImageGrid  />
      
    </section>
  )
}
