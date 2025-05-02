"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Award, Target, TrendingUp } from "lucide-react"

const features = [
  {
    text: "Expert Para-Athlete Coach",
    icon: Award,
    color: "#F31818"
  },
  {
    text: "Customized Programs",
    icon: Target,
    color: "#00D115"
  },
  {
    text: "Proven Results",
    icon: TrendingUp,
    color: "#0D97FF"
  }
]

export default function FitnessHero() {
  return (
    <div className="relative">
      {/* Main Hero Container */}
      <div className="relative h-[90vh] bg-black">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
          alt="Man working out in gym showing dedication and strength"
          fill
          className="object-cover opacity-40"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="max-w-[800px] text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your Limits Into 
              <span className="text-[#F31818]"> Strength</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-[600px] mx-auto">
              Personalized fitness programs crafted for individuals with chronic conditions and physical challenges.
            </p>
            
            {/* Feature Points as Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 w-full max-w-[900px] mx-auto px-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg transform hover:scale-105 transition-all w-full"
                >
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-base font-bold text-gray-800 flex-1 text-left">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button 
              className="bg-[#F31818] hover:bg-[#F31818]/90 text-white font-bold rounded-full px-8 py-6 text-lg"
              onClick={() => window.open("https://calendly.com/strentor/strentor-services", "_blank")}
            >
              Start Your Fitness Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 