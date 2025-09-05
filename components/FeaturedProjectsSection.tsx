import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function FeaturedProjectsSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-orange-100 text-orange-600 mb-4">✱ Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg">Get a glimpse of our work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="bg-white rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Klang Guard"
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Klang Guard</h3>
              <p className="text-gray-600">- comfortable noise plugs</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-3xl overflow-hidden">
            <img src="/placeholder.svg?height=400&width=600" alt="CBD Project" className="w-full h-80 object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl overflow-hidden">
            <img src="/placeholder.svg?height=300&width=600" alt="Nooro" className="w-full h-60 object-cover" />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-black">Nooro</h3>
              <p className="text-gray-600">- a US-based health supplements and pain relief brand.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-black">Body Armour</h3>
              <p className="text-gray-600">- sleep drink brand based in the US.</p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-3xl overflow-hidden">
            <img src="/placeholder.svg?height=300&width=600" alt="Body Armour" className="w-full h-60 object-cover" />
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-black text-black px-8 py-3 rounded-full text-lg hover:bg-black hover:text-white bg-transparent"
          >
            View all projects
          </Button>
        </div>
      </div>
    </section>
  )
}
