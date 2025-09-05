import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      title: "Branding",
      description: "Logo design, color schemes, and fonts to create a cohesive and memorable identity.",
      image: "https://framerusercontent.com/images/W8leNG1ES23NMXQy1Ur1MAwhwo.png?scale-down-to=512",
      bgColor: "bg-blue-50"
    },
    {
      title: "Labels",
      description: "Visually appealing product labels that capture your product's essence & meet industry standards.",
      image: "https://framerusercontent.com/images/xCP9g69JkBzblynEWvhsUXw9HVU.png?scale-down-to=512",
      bgColor: "bg-purple-50"
    },
    {
      title: "Packaging",
      description: "Innovative, functional, and eye-catching product packaging that enhances the brand's story & appeal.",
      image: "https://framerusercontent.com/images/mqeIukL7mTLJpQJhvVKBmPNs95M.png?scale-down-to=512",
      bgColor: "bg-yellow-50"
    }
  ]

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-600 mb-4">✱ Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Branding, Labels & Packaging
          </h2>
          <p className="text-gray-600 text-lg">Get everything you need in one place</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            let rotationClass = "";
            if (index === 0) rotationClass = "md:-rotate-3"; // Left card tilted left
            if (index === 2) rotationClass = "md:rotate-3";  // Right card tilted right
            
            return (
              <div key={index} className={`${service.bgColor} p-8 rounded-3xl transition-transform hover:rotate-0 ${rotationClass}`}>
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button className="bg-[#ff4f01] hover:bg-[#e04501] text-white px-8 py-6 rounded-full text-lg font-medium">
            Book a 15-min call
          </Button>
        </div>
      </div>
    </section>
  )
}
