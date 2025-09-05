'use client'
export default function TrustedBySection() {
  const logos = [
    "https://framerusercontent.com/images/ZlwrcTtEJpLtxA6VRVmnD3HlrYk.png",
    "https://framerusercontent.com/images/GgR7IIQlkWkgiFWBwOCkXa3Ls.png",
    "https://framerusercontent.com/images/bNuwyeFt71Xd3ep4Do6wMbchTU.png",
    "https://framerusercontent.com/images/xqI3cVga923vU1JSV9bz1XfYMAo.png",
    "https://framerusercontent.com/images/ohLVv9PIyeK1XmJ9VfWMzMqTs.png",
    "https://framerusercontent.com/images/1AS1wMfGbYC4M4NFya9zlUfOD9Q.png",
    "https://framerusercontent.com/images/1TI1aAEE2mClo1htvReTcI2PA.png"
  ]

  return (
    <section className="py-16 w-4/6 mx-auto overflow-hidden">
      <div className=" mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold text-black mb-12">Top companies trust us with their design</h3>
        
        {/* Scrolling Logos Container */}
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
                <img 
                  src={logo} 
                  alt={`Company logo ${index + 1}`} 
                  className="h-8 md:h-10  " 
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
                <img 
                  src={logo} 
                  alt={`Company logo ${index + 1}`} 
                  className="h-8 md:h-10 " 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
