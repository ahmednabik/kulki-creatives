import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-orange-100 text-orange-600 mb-4">✱ Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Don't just take our
            <br />
            word for it. Take theirs.
          </h2>
          <p className="text-gray-600 text-lg">What our customers say about our work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Real Video Testimonials */}
            {[
              "WhatsApp Video 2025-09-05 at 1.19.30 AM (1).mp4",
              "WhatsApp Video 2025-09-05 at 1.19.30 AM.mp4",
              "WhatsApp Video 2025-09-05 at 1.19.31 AM.mp4",
              "WhatsApp Video 2025-09-05 at 1.19.33 AM.mp4"
            ].map((video, idx) => (
              <div key={video} className="relative bg-black rounded-2xl aspect-[9/16] overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                <video
                  src={`/${video}`}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
