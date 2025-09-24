import { Badge } from "@/components/ui/badge";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="md:py-16 mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-orange-100 text-orange-600 mb-4">
            ✱ Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Don&apos;t just take our
            <br />
            word for it.
          </h2>
          <p className="text-gray-600 text-lg">See what our clients say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            "0q_tFsX6swY",
            "3MDEus55_0I",
            "VkXEO5tKkpw",
            "vcKS9mp9xKg",
            "5H6EV9SVGko",
          ].map((videoId, idx) => (
            <div
              key={videoId + idx}
              className="relative bg-black rounded-2xl aspect-[9/16] overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Testimonial video ${idx + 1}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
