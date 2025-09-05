import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-16 mt-24">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video Testimonials */}
          <div className="relative bg-black rounded-2xl aspect-[4/5] overflow-hidden group cursor-pointer">
            <img
              src="/professional-man-with-glasses-testimonial-video.jpg"
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>

          <div className="relative bg-black rounded-2xl aspect-[4/5] overflow-hidden group cursor-pointer">
            <img
              src="/professional-man-with-glasses-testimonial-video-du.jpg"
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>

          <div className="relative bg-black rounded-2xl aspect-[4/5] overflow-hidden group cursor-pointer">
            <img
              src="/man-with-cap-and-headphones-testimonial-video.jpg"
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>

          <div className="relative bg-gray-200 rounded-2xl aspect-[4/5] overflow-hidden group cursor-pointer">
            <img
              src="/man-with-glasses-testimonial-video-light-backgroun.jpg"
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>

          <div className="relative bg-gray-300 rounded-2xl aspect-[4/5] overflow-hidden group cursor-pointer">
            <img
              src="/testimonial-video-placeholder-gray.jpg"
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>

          <div className="relative bg-black rounded-2xl aspect-[4/5] overflow-hidden group cursor-pointer">
            <img
              src="/placeholder.svg?height=400&width=300"
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
