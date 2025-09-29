import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FeaturedProjectsSection() {
  const projects = [
    {
      image:
        "https://framerusercontent.com/images/x7sLZmhZWKK5K4klfRy8dkR5c8Y.jpg?scale-down-to=1024",
      title: "Klang Guard",
      description: "comfortable noise plugs",
    },
    {
      image:
        "https://framerusercontent.com/images/Id9OISF0DA4qbnOUFkXR2QmTOQ.png",
      title: "wellness brand based in Latvia",
      description: "wellness brand based in Latvia",
    },
    {
      image:
        "https://framerusercontent.com/images/dz5ZuCOcMpASJLWUVDvncZi6S7s.jpg?scale-down-to=1024",
      title: "Nooro",
      description: "a US-based health supplements and pain relief brand",
    },
    {
      image:
        "https://framerusercontent.com/images/kToXQPm3w3gYbzv37DkGQwWG4cE.jpg?scale-down-to=1024",
      title: "Body Armour",
      description: "sleep drink brand based in the US",
    },
    {
      image:
        "https://framerusercontent.com/images/1VW6qOoY4KloKVzVgxmJyz08c9Y.jpg?scale-down-to=1024",
      title: "Premium Tea",
      description: "organic tea packaging design",
    },
    {
      image:
        "https://framerusercontent.com/images/ghkcOV4uAtxCpVJoVqQuMUJa2Jk.jpg?scale-down-to=1024",
      title: "Health Supplements",
      description: "vitamin and wellness products",
    },
    {
      image:
        "https://framerusercontent.com/images/Vw1tOcf1SsNZRUYBjOhrfTDRGNA.jpg?scale-down-to=1024",
      title: "Food Packaging",
      description: "modern food container design",
    },
    {
      image:
        "https://framerusercontent.com/images/Ib50iPs5mUOLRTihommgV5rkRc.png",
      title: "Brand Identity",
      description: "complete branding solution",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-orange-100 text-orange-600 mb-4">
            ✱ Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg">Get a glimpse of our work</p>
        </div>

        {/* Featured Projects - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* LEFT COLUMN */}
          <div className="space-y-8 mt-12">
            {/* Project 1 - Klang Guard */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden">
                <a
                  href="https://www.figma.com/design/CGnNwhDahwJnxwdCXRIG6g/Kulki-Portfolio?node-id=20-16&t=lZfazpg6NudznxNO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                  />
                </a>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-black">
                  {projects[0].title}
                </h3>
                <p className="text-gray-600 text-sm italic font-light">
                  {projects[0].description}
                </p>
              </div>
            </div>

            {/* Project 3 - Nooro */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl overflow-hidden">
                <a
                  href="https://www.figma.com/design/CGnNwhDahwJnxwdCXRIG6g/Kulki-Portfolio?node-id=20-16&t=lZfazpg6NudznxNO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projects[2].image}
                    alt={projects[2].title}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                  />
                </a>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-black">
                  {projects[2].title}
                </h3>
                <p className="text-gray-600 text-sm italic font-light">
                  {projects[2].description}
                </p>
              </div>
            </div>

            {/* Project 4 - Brand Identity */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden">
                <a
                  href="https://www.figma.com/design/CGnNwhDahwJnxwdCXRIG6g/Kulki-Portfolio?node-id=20-16&t=lZfazpg6NudznxNO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projects[7].image}
                    alt={projects[7].title}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                  />
                </a>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-black">
                  {projects[7].title}
                </h3>
                <p className="text-gray-600 text-sm italic font-light">
                  {projects[7].description}
                </p>
              </div>
            </div>

            {/* Project 7 - Food Packaging */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden">
                <a
                  href="https://www.figma.com/design/CGnNwhDahwJnxwdCXRIG6g/Kulki-Portfolio?node-id=20-16&t=lZfazpg6NudznxNO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projects[6].image}
                    alt={projects[6].title}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                  />
                </a>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-black">
                  {projects[6].title}
                </h3>
                <p className="text-gray-600 text-sm italic font-light">
                  {projects[6].description}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8 ">
            {/* Project 2 - Wellness Brand */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden">
                <a
                  href="https://www.figma.com/design/CGnNwhDahwJnxwdCXRIG6g/Kulki-Portfolio?node-id=20-16&t=lZfazpg6NudznxNO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projects[1].image}
                    alt={projects[1].title}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                  />
                </a>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-black">
                  {projects[1].title}
                </h3>
                <p className="text-gray-600 text-sm italic font-light">
                  {projects[1].description}
                </p>
              </div>
            </div>

            {/* Project 4 - Body Armour */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden">
                <a
                  href="https://www.figma.com/design/CGnNwhDahwJnxwdCXRIG6g/Kulki-Portfolio?node-id=20-16&t=lZfazpg6NudznxNO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projects[3].image}
                    alt={projects[3].title}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                  />
                </a>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-black">
                  {projects[3].title}
                </h3>
                <p className="text-gray-600 text-sm italic font-light">
                  {projects[3].description}
                </p>
              </div>
            </div>

            {/* Project 6 - Health Supplements */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden">
                <a
                  href="https://www.figma.com/design/CGnNwhDahwJnxwdCXRIG6g/Kulki-Portfolio?node-id=20-16&t=lZfazpg6NudznxNO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projects[5].image}
                    alt={projects[5].title}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                  />
                </a>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-black">
                  {projects[5].title}
                </h3>
                <p className="text-gray-600 text-sm italic font-light">
                  {projects[5].description}
                </p>
              </div>
            </div>

            {/* Project 5 - Premium Tea */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl overflow-hidden">
                <a
                  href="https://www.figma.com/design/CGnNwhDahwJnxwdCXRIG6g/Kulki-Portfolio?node-id=20-16&t=lZfazpg6NudznxNO-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={projects[4].image}
                    alt={projects[4].title}
                    className="w-full h-full object-cover"
                    width={56}
                    height={56}
                  />
                </a>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold text-black">
                  {projects[4].title}
                </h3>
                <p className="text-gray-600 text-sm italic font-light">
                  {projects[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.figma.com/design/CGnNwhDahwJnxwdCXRIG6g/Kulki-Portfolio?node-id=20-16&t=lZfazpg6NudznxNO-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-black text-black px-8 py-3 rounded-full text-lg hover:bg-black hover:text-white bg-transparent cursor-pointer"
            >
              View all projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
