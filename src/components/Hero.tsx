"use client"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"
import { ContactForm } from "@/components/forms/ContactForm"

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  const guarantees = [
    "90 day satisfaction guarantee",
    "Instant Access to Our Personalised Services",
    "Instant Access to Our Community"
  ]

  const handleJoinNowClick = () => {
    setShowForm(true)
  }

  const handleBookCall = () => {
    window.open("https://calendly.com/strentor/strentor-four-wishes-program", "_blank")
  }

  return (
    <>
      <div className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F31818]/5 via-[#00D115]/5 to-[#0D97FF]/5" />
        
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col md:grid md:grid-cols-2 gap-8 p-6 md:p-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl">
            {/* Headline Section */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                 Wellness Programs
                <br />
                Made For <span className="text-[#F31818]">YOU</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-700">
                Personalized pathways to your best self, crafted by experts who understand your unique journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleJoinNowClick}
                  className="h-14 px-8 text-lg rounded-full bg-[#F31818] hover:bg-[#F31818]/90 transition-all transform hover:scale-105"
                >
                  Start Your Journey
                </Button>
                <Button 
                  onClick={handleBookCall}
                  className="h-14 px-8 text-lg rounded-full bg-white border-2 border-[#0D97FF] text-[#0D97FF] hover:bg-[#0D97FF] hover:text-white transition-all transform hover:scale-105"
                >
                  Book a Call
                </Button>
              </div>
            </div>

            {/* Video Section */}
            <div className="flex justify-center items-center">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg transform hover:scale-105 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-[#00D115] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-bold text-gray-800">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactForm open={showForm} onOpenChange={setShowForm} />
    </>
  )
}