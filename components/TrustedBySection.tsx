"use client";
export default function TrustedBySection() {
  const logos = [
    "logos/1.png",
    "logos/2.png",
    "logos/3.png",
    "logos/4.png",
    "logos/5.png",
    "logos/6.png",
    "logos/7.png",
    "logos/8.png",
    "logos/9.png",
    "logos/10.png",
  ];

  return (
    <section className="pt-16 w-4/6 mx-auto overflow-hidden">
      <div className=" mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold text-black mb-12">
          Top brands trust us with their designs
        </h3>

        {/* Scrolling Logos Container */}
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
                <img
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  className="h-8 md:h-10  "
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12"
              >
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
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
