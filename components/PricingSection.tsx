"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

type Plan = {
  features: string[];
  price: string;
  description: string;
};

type Plans = {
  [key: string]: Plan;
};

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState("standard");

  const plans: Plans = {
    standard: {
      features: [
        "Label or Packaging for 1 SKU",
        "3 initial concepts",
        "Unlimited revisions",
        "48 hours turnaround",
        "Front & back design",
        "Realistic 3D Mockups",
        "Print & source files",
        "Dedicated project manager",
      ],
      price: "$295 / SKU",
      description: "Label OR packaging designed for 1 SKU",
    },
    combo: {
      features: [
        "Label and packaging combo for 1 SKU",
        "5 initial concepts",
        "Unlimited revisions",
        "48 hours turnaround",
        "Front & back design",
        "Realistic 3D Mockups",
        "Print & source files",
        "Dedicated project manager",
      ],
      price: "$495 / SKU",
      description: "Label AND Packaging designed for 1 SKU",
    },
  };

  return (
    <section id="pricing" className="py-8 md:py-16 px-4 md:px-0">
      <div className="bg-black rounded-2xl md:rounded-3xl max-w-6xl mx-auto">
        <div className="px-6 md:px-8 py-8 md:py-16 text-center">
          <Badge className="bg-[#ff4f01] text-white mb-6 md:mb-8 px-3 md:px-4 py-1.5 md:py-2 text-sm">
            ✱ Pricing
          </Badge>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Simple transparent pricing
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 md:mb-12">
            Pick a package or contact us for custom pricing
          </p>

          <div className="bg-[#F5F3F0] rounded-2xl md:rounded-3xl p-4 md:p-8 max-w-xl mx-auto">
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="bg-white rounded-full p-1 flex w-full md:w-auto">
                {Object.keys(plans).map((planKey) => (
                  <Button
                    key={planKey}
                    onClick={() => setSelectedPlan(planKey)}
                    className={`${
                      selectedPlan === planKey
                        ? "bg-[#ff4f01] hover:bg-[#e04501] text-white"
                        : "bg-transparent text-black hover:bg-gray-100"
                    } px-4 md:px-6 py-2 rounded-full text-sm font-medium flex-1 md:flex-none transition-all`}
                  >
                    {planKey.charAt(0).toUpperCase() + planKey.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-center mb-6 md:mb-8">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                {plans[selectedPlan].price}
              </div>
              <p className="text-gray-600 text-sm mb-4 md:mb-6 px-2">
                {plans[selectedPlan].description}
              </p>

              <hr className="border-gray-300 mb-4 md:mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left text-sm">
                {plans[selectedPlan].features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#ff4f01] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="bg-[#ff4f01] hover:bg-[#e04501] text-white w-full py-3 rounded-full font-medium">
              Book a 15 min call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
