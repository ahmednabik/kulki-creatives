import { Button } from "@/components/ui/button"

export default function CallToActionSection() {
  return (
    <section className="py-0 mb-24 w-4/6 mx-auto">
      <div className="bg-black rounded-[3rem] mx-4 md:mx-8 relative overflow-hidden min-h-[650px]">
        {/* Massive kulki background text */}
        <div className="absolute inset-0 flex items-center justify-center mt-[27rem] leading-loose">
          <span className="text-[15rem] md:text-[20rem] lg:text-[30rem] xl:text-[30rem] font-semibold text-white  leading-loose  ">
            kulki
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 py-5 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-6 leading-tight">
                Product packaging
                <br />
                designs that sell like krazy
              </h2>
              <p className="text-gray-300 text-base md:text-md mb-8 leading-relaxed">
                Book a free consultation call today
                <br />
                to discuss how we can make your
                <br />
                product packaging the best on shelves.
              </p>
              <Button className="bg-[#ff4f01] hover:bg-[#e04501] text-white px-8 py-4 md:py-6 rounded-full text-base md:text-lg font-semibold">
                Book a call
              </Button>
            </div>

            {/* Right Content - Link Columns */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 text-white">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">Find</h3>
                <div className="space-y-3 md:space-y-4">
                  <a href="#services" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    Services
                  </a>
                  <a href="#features" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    Features
                  </a>
                  <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    Reviews
                  </a>
                  <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    Pricing
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">Connect</h3>
                <div className="space-y-3 md:space-y-4">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    Twitter
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    Instagram
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    YouTube
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    Facebook
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">Links</h3>
                <div className="space-y-3 md:space-y-4">
                  <a href="#hero" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    Home
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                    Privacy
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">
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
