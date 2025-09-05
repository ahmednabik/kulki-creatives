import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function FeaturedProjectsSection() {
  const projects = [
    {
      image: "https://framerusercontent.com/images/x7sLZmhZWKK5K4klfRy8dkR5c8Y.jpg?scale-down-to=1024",
      title: "Klang Guard",
      description: "comfortable noise plugs"
    },
    {
      image: "https://framerusercontent.com/images/Id9OISF0DA4qbnOUFkXR2QmTOQ.png",
      title: "wellness brand based in Latvia",
      description: ""
    },
    {
      image: "https://framerusercontent.com/images/dz5ZuCOcMpASJLWUVDvncZi6S7s.jpg?scale-down-to=1024",
      title: "Nooro",
      description: "a US-based health supplements and pain relief brand"
    },
    {
      image: "https://framerusercontent.com/images/kToXQPm3w3gYbzv37DkGQwWG4cE.jpg?scale-down-to=1024",
      title: "Body Armour",
      description: "sleep drink brand based in the US"
    },
    {
      image: "https://framerusercontent.com/images/1VW6qOoY4KloKVzVgxmJyz08c9Y.jpg?scale-down-to=1024",
      title: "Premium Tea",
      description: "organic tea packaging design"
    },
    {
      image: "https://framerusercontent.com/images/ghkcOV4uAtxCpVJoVqQuMUJa2Jk.jpg?scale-down-to=1024",
      title: "Health Supplements",
      description: "vitamin and wellness products"
    },
    {
      image: "https://framerusercontent.com/images/Vw1tOcf1SsNZRUYBjOhrfTDRGNA.jpg?scale-down-to=1024",
      title: "Food Packaging",
      description: "modern food container design"
    },
    {
      image: "https://framerusercontent.com/images/Ib50iPs5mUOLRTihommgV5rkRc.png",
      title: "Brand Identity",
      description: "complete branding solution"
    }
  ]

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-orange-100 text-orange-600 mb-4">✱ Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg">Get a glimpse of our work</p>
        </div>

        {/* Main featured project */}
        <div className="mb-8">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">{projects[0].title}</h3>
              <p className="text-lg opacity-90">- {projects[0].description}</p>
            </div>
          </div>
        </div>

        {/* Secondary featured project */}
        <div className="mb-8">
          <div className="relative bg-gradient-to-br from-[#ff4f01] to-yellow-500 rounded-3xl overflow-hidden">
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-6 right-6 text-white text-right">
              <h3 className="text-xl font-bold">{projects[1].title}</h3>
            </div>
          </div>
        </div>

        {/* Grid of smaller projects */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {projects.slice(2).map((project, index) => (
            <div key={index} className="relative bg-white rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h4 className="font-bold text-sm text-black">{project.title}</h4>
                {project.description && (
                  <p className="text-xs text-gray-600">- {project.description}</p>
                )}
              </div>
            </div>
          ))}
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
