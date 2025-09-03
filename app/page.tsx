import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Fingerprint,
  Tag,
  Search,
  Bold as Bottle,
  Package,
  Users,
  Target,
  Layers,
  Clock,
  MessageCircle,
  DollarSign,
  Heart,
  Printer,
  Play,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Brand */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-2 font-serif italic">kulki</h1>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-20 left-10 md:left-20">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">Logo</span>
            </div>
          </div>

          <div className="absolute top-32 right-10 md:right-20">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <Package className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-sm text-gray-600">Packaging</span>
            </div>
          </div>

          <div className="absolute top-48 left-16 md:left-32">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <Fingerprint className="w-6 h-6 text-black" />
              </div>
              <span className="text-sm text-gray-600">Branding</span>
            </div>
          </div>

          <div className="absolute top-56 right-16 md:right-32">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <Bottle className="w-6 h-6 text-black" />
              </div>
              <span className="text-sm text-gray-600">3D Mockups</span>
            </div>
          </div>

          <div className="absolute bottom-20 left-20 md:left-40">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <Tag className="w-6 h-6 text-orange-500" />
              </div>
              <span className="text-sm text-gray-600">Label</span>
            </div>
          </div>

          <div className="absolute bottom-20 right-20 md:right-40">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <Search className="w-6 h-6 text-black" />
              </div>
              <span className="text-sm text-gray-600">Research</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Your in-house designer
              <br />
              that never goes on leave
            </h2>
            <p className="text-lg text-gray-600 mb-8">Have a PRO designer on standby. Any day. Any hour</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
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

        {/* Image Grid */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl aspect-square overflow-hidden">
              <img
                src="/nooro-health-supplement-bottle-on-green-background.jpg"
                alt="Nooro project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl aspect-square overflow-hidden">
              <img
                src="/tea-packaging-design-on-orange-background.jpg"
                alt="Tea packaging"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl aspect-square overflow-hidden">
              <img
                src="/food-container-packaging-on-purple-background.jpg"
                alt="Food container"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-green-500 rounded-2xl aspect-square overflow-hidden">
              <img
                src="/mushroom-supplement-bottle-on-yellow-background.jpg"
                alt="Mushroom supplement"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl aspect-square overflow-hidden">
              <img
                src="/purple-supplement-bottle-on-purple-background.jpg"
                alt="Purple supplement"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-black mb-12">Top companies trust us with their design</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="/nooro-logo.jpg" alt="Nooro" className="h-8 opacity-60" />
            <img src="/earjar-logo-pink.jpg" alt="EarJar" className="h-8 opacity-60" />
            <img src="/bioverse-logo.jpg" alt="Bioverse" className="h-8 opacity-60" />
            <img src="/bipcards-logo-green.jpg" alt="Bipcards" className="h-8 opacity-60" />
            <img src="/mu-hies-logo.jpg" alt="mu-hies" className="h-8 opacity-60" />
            <img src="/nurecover-logo-blue.png" alt="Nurecover" className="h-8 opacity-60" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
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

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-600 mb-4">✱ Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">You request, we make it happen</h2>
            <p className="text-gray-600 text-lg">Our process is as simple as possible.</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-black text-white p-8 rounded-3xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Start</h3>
                  <p className="text-gray-300">
                    Book a free discovery call with us to discuss your project. We will talk and initiate the project.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black text-white p-8 rounded-3xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Progress</h3>
                  <p className="text-gray-300">
                    We will start working on your project and keep sharing the progress with you for feedback and
                    revisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black text-white p-8 rounded-3xl">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Deliver</h3>
                  <p className="text-gray-300">
                    When you are 100% satisfied and approve the final designs, we will deliver all files.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Connecting Arrows */}
            <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
              <svg width="60" height="40" viewBox="0 0 60 40" className="text-gray-400">
                <path
                  d="M10 20 Q30 10 50 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
            </div>

            <div className="hidden md:block absolute top-1/2 right-1/3 transform -translate-y-1/2 translate-x-1/2">
              <svg width="60" height="40" viewBox="0 0 60 40" className="text-gray-400">
                <path
                  d="M10 20 Q30 30 50 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead2)"
                />
                <defs>
                  <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-600 mb-4">✱ Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Here is why you'll
              <br />
              love working with us
            </h2>
            <p className="text-gray-600 text-lg">Our process is as simple as possible.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Unlimited Revisions</h3>
              <p className="text-gray-600">Unlimited design revisions, prioritized by your needs</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Fast Turnaround</h3>
              <p className="text-gray-600">First draft delivered in just 48 hours after order</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Easy Communication</h3>
              <p className="text-gray-600">Communicate via slack channel, trello or even Whatsapp.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Flexible Pricing</h3>
              <p className="text-gray-600">Transparent & flexible pricing according to your project</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Top-notch quality</h3>
              <p className="text-gray-600">Access incredible design quality whenever you need it.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <Printer className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Print Support</h3>
              <p className="text-gray-600">Standby support while you print your labels & packagings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
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

      {/* Pricing Section */}
      <section className="py-16">
        <div className="bg-black rounded-3xl mx-4 md:mx-8">
          <div className="max-w-4xl mx-auto px-8 py-16 text-center">
            <Badge className="bg-orange-100 text-orange-600 mb-4">✱ Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple transparent pricing</h2>
            <p className="text-gray-300 text-lg mb-12">Pick a package or contact us for custom pricing</p>

            <div className="bg-[#F5F3F0] rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-full p-1 flex">
                  <Button className="bg-orange-500 text-white px-6 py-2 rounded-full">Standard</Button>
                  <Button variant="ghost" className="text-black px-6 py-2 rounded-full">
                    ⚡ Combo
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">Get a label OR packaging designed for 1 SKU + Basic branding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about our services</p>
          </div>

          <div className="space-y-4">
            <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-black">How does Kulki determine its pricing?</h3>
                  <span className="text-2xl text-gray-400">+</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-black">What types of designs does Kulki specialize in?</h3>
                  <span className="text-2xl text-gray-400">+</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-black">
                    Can Kulki help with ongoing design needs for my business?
                  </h3>
                  <span className="text-2xl text-gray-400">+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-0 mb-24">
        <div className="bg-black rounded-3xl mx-4 md:mx-8 relative overflow-hidden">
          {/* Large kulki background text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-[20rem] md:text-[30rem] font-bold text-white font-serif italic leading-none">
              kulki
            </span>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Product packaging
                  <br />
                  designs that sell like krazy
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Book a free consultation call today
                  <br />
                  to discuss how we can make your
                  <br />
                  product packaging the best on shelves.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
                  Book a call
                </Button>
              </div>

              {/* Right Content - Link Columns */}
              <div className="grid grid-cols-3 gap-8 text-white">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Find</h3>
                  <div className="space-y-4">
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Services
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Features
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Reviews
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Pricing
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Connect</h3>
                  <div className="space-y-4">
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      YouTube
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Facebook
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Links</h3>
                  <div className="space-y-4">
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Home
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Privacy
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                      Terms
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black rounded-full px-6 py-3 flex items-center gap-6">
          <Button variant="ghost" className="text-orange-500 bg-orange-500/10 px-4 py-2 rounded-full text-sm">
            Services
          </Button>
          <Button variant="ghost" className="text-white hover:text-orange-500 px-4 py-2 rounded-full text-sm">
            Features
          </Button>
          <Button variant="ghost" className="text-white hover:text-orange-500 px-4 py-2 rounded-full text-sm">
            Projects
          </Button>
          <Button variant="ghost" className="text-white hover:text-orange-500 px-4 py-2 rounded-full text-sm">
            Pricing
          </Button>
          <Button variant="ghost" className="text-white hover:text-orange-500 px-4 py-2 rounded-full text-sm">
            Reviews
          </Button>
        </div>
      </div>
    </div>
  )
}
