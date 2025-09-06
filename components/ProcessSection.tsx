import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function ProcessSection() {
  return (
    <section className="md:py-24">
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
                <div className="w-24 h-24 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src="https://framerusercontent.com/images/TAEmGfQEJ5Suks1YjRW8RuIh54.gif" 
                    alt="Start Process"
                    className="w-30 h-30 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Start</h3>
                <p className="text-gray-300">
                  Book a free discovery call with us to discuss your project. We will talk and initiate the project.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black text-white p-8 rounded-3xl">
              <CardContent className="p-0">
                <div className="w-24 h-24 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src="https://framerusercontent.com/images/WlLwg2PWM3tgfPFKJaU8kI9HcQ.gif" 
                    alt="Progress Process"
                    className="w-24 h-24 object-contain"
                  />
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
                <div className="w-24 h-24 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src="https://framerusercontent.com/images/eOYmDepwcVrlObPOfS5j9vCI.gif" 
                    alt="Deliver Process"
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">Deliver</h3>
                <p className="text-gray-300">
                  When you are 100% satisfied and approve the final designs, we will deliver all files.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Connecting Arrows */}
         

        </div>
      </div>
    </section>
  )
}
