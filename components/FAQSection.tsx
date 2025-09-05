'use client'
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "How quickly can Kulki deliver designs for our business?",
      answer: "We typically deliver designs within 7 days for standard packages. For urgent projects, we offer expedited delivery options that can be completed in 3-5 business days."
    },
    {
      question: "Can I request revisions to the designs provided?",
      answer: "Yes! We offer unlimited revisions on all our packages. We work closely with you until you're completely satisfied with the final design."
    },
    {
      question: "How does Kulki determine its pricing?",
      answer: "Our pricing is based on the complexity of the project, the number of SKUs, and the deliverables included. We offer transparent, package-based pricing starting at $395 per SKU."
    },
    {
      question: "What types of designs does Kulki specialize in?",
      answer: "We specialize in packaging design, label design, branding, 3D mockups, and complete brand identity systems. Our focus is on consumer product brands and e-commerce businesses."
    },
    {
      question: "Can Kulki help with ongoing design needs for my business?",
      answer: "Absolutely! We offer ongoing design partnerships and can work with you on multiple projects. Many of our clients work with us continuously for all their design needs."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="py-16 ">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
       <Badge className="bg-orange-100 text-orange-600 mb-4">✱ FAQ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked <span className="underline">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">What our customers say about our work.</p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className=" border-gray-800 rounded-2xl overflow-hidden hover:shadow-sm transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-700 pr-4">{faq.question}</h3>
                  <span className={`text-2xl text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </div>
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
