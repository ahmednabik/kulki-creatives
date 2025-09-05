import { Button } from "@/components/ui/button"

export default function CallToActionSection() {
  return (
    <section className="py-0 mb-24 w-4/6 mx-auto ">
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
              <Button className="bg-[#ff4f01] hover:bg-[#e04501] text-white px-8 py-3 rounded-full text-lg">
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
  )
}
