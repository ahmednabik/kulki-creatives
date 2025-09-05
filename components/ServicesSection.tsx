import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-orange-100 text-orange-600 mb-4">✱ Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Branding, Labels & Packaging</h2>
          <p className="text-gray-600 text-lg">Get everything you need in one place</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-blue-100 p-8 rounded-3xl border-0">
            <CardContent className="p-0">
              <div className="mb-6">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Branding"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Branding</h3>
              <p className="text-gray-700">
                Logo design, color schemes, and fonts to create a cohesive and memorable identity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-purple-100 p-8 rounded-3xl border-0">
            <CardContent className="p-0">
              <div className="mb-6">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Labels"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Labels</h3>
              <p className="text-gray-700">
                Visually appealing product labels that capture your product's essence & meet industry standards.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-orange-100 p-8 rounded-3xl border-0">
            <CardContent className="p-0">
              <div className="mb-6">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Packaging"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Packaging</h3>
              <p className="text-gray-700">
                Innovative, functional, and eye-catching product packaging that enhances the brand's story & appeal.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
            Book a 15-min call
          </Button>
        </div>
      </div>
    </section>
  )
}
