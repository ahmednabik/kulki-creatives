"use client"
import { Badge } from "@/components/ui/badge"

export default function FeaturesSection() {
  const features = [
    {
      icon: "https://framerusercontent.com/images/TJoCHrVqB7u9XPvOUUJUmTLrwM.gif",
      title: "Unlimited Revisions",
      description: "Unlimited design revisions, prioritized by your needs",
      bgShape: "flower"
    },
    {
      icon: "https://framerusercontent.com/images/ifxivFZRVoOFwGuQyTcEdg8DSM.gif",
      title: "Fast Turnaround",
      description: "First draft delivered in just 48 hours after order",
      bgShape: "star"
    },
    {
      icon: "https://framerusercontent.com/images/ZvllXJhz66D3q9P1xAyX2gsLGa0.gif",
      title: "Easy Communication",
      description: "Communicate via slack channel, trello or even Whatsapp.",
      bgShape: "flower"
    },
    {
      icon: "https://framerusercontent.com/images/YmaY95AZdyvbtTDvXctfrlgeiDo.gif",
      title: "Flexible Pricing",
      description: "Transparent & flexible pricing according to your project",
      bgShape: "gear"
    },
    {
      icon: "https://framerusercontent.com/images/9oDhQgcEMcw1ssZO7aRZDkzeA.gif",
      title: "Top-notch quality",
      description: "Access incredible design quality whenever you need it.",
      bgShape: "blob"
    },
    {
      icon: "https://framerusercontent.com/images/eOYmDepwcVrlObPOfS5j9vCI.gif",
      title: "Print Support",
      description: "Standby support while you print your labels & packagings",
      bgShape: "gear"
    }
  ]

  const getShapeClasses = (shape: string) => {
    switch (shape) {
      case "flower":
        return "bg-black w-28 h-28 flex items-center justify-center smooth-flower"
      case "star":
        return "bg-black w-28 h-28 flex items-center justify-center smooth-star"
      case "gear":
        return "bg-black w-28 h-28 flex items-center justify-center smooth-gear"
      case "blob":
        return "bg-black w-28 h-28 flex items-center justify-center smooth-blob"
      default:
        return "bg-black w-28 h-28 rounded-full flex items-center justify-center"
    }
  }

  return (
    <section id="features" className="md:py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
     <Badge className="bg-orange-100 text-orange-600 mb-4">✱ Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Here is why you'll
            <br />
            love working with us
          </h2>
          <p className="text-gray-600 text-lg">Our process is as simple as possible.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <div className={getShapeClasses(feature.bgShape)}>
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-14 h-14 object-contain relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .smooth-flower {
          border-radius: 50% 40% 50% 40% / 60% 30% 70% 40%;
          transform: rotate(0deg);
        }
        
        .smooth-star {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          transform: rotate(45deg);
          position: relative;
        }
        
        .smooth-star::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 10%;
          right: 10%;
          bottom: 10%;
          background: transparent;
          border-radius: 50% 20% 50% 20% / 20% 50% 20% 50%;
        }
        
        .smooth-gear {
          border-radius: 25% 75% 25% 75% / 75% 25% 75% 25%;
          position: relative;
        }
        
        .smooth-gear::before {
          content: '';
          position: absolute;
          top: 15%;
          left: 15%;
          right: 15%;
          bottom: 15%;
          background: transparent;
          border-radius: 40% 60% 40% 60% / 60% 40% 60% 40%;
        }
        
        .smooth-blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
      `}</style>
    </section>
  )
}
