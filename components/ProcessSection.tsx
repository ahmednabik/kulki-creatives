import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Layers } from "lucide-react"

export default function ProcessSection() {
  return (
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
  )
}
