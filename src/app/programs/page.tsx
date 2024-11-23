"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star, Check } from 'lucide-react'
import Header from '@/components/Header';
import Footer from "@/components/Footer"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Anisha Jhunjhunwala",
      role: "Emotional Wellness and Therapy",
      image: "/Anisha.jpeg",
      qualifications: [
        "Master's in Psychology and specialized training from NIMHANS, Bangalore",
        "Over 2,000 hours of therapy with 450 individuals",
        "Skilled in CBT, REBT, SFBT, and Person-Centered Therapy",
      ],
      offerings: [
        "Personalized Therapy: Tailored sessions for depression, anxiety, self-esteem, and relationship challenges",
        "Safe and Confidential Space: Non-judgmental environment for client support",
        "Empowerment and Growth: Focus on self-discovery and resilience building",
      ],
    },
    {
      name: "Arun Kunjunny",
      role: "NLP and Communication Coaching",
      image: "/Arun.jpg",
      qualifications: [
        "Expertise in Corporate Communication, PR, Photography, Poetry, and Filmmaking",
        "Certified NLP Practitioner and Life Coach",
        "Skilled soft skills trainer",
      ],
      offerings: [
        "Personalized Coaching: Address emotional challenges and enhance mindset",
        "Comprehensive Transformation: Improve communication and body language",
        "Safe Space: Encouraging open dialogue for lasting personal growth",
      ],
    },
    {
      name: "Ashmita Dani",
      role: "Manifestation and Energy Coaching",
      image: "/Ashmita.jpg",
      qualifications: [
        "In-depth research into energy science and quantum physics",
        "Expertise in merging spirituality with scientific methods",
      ],
      offerings: [
        "Manifesting Mojo Sessions: 1:1 coaching to shift energy and align with goals",
        "Mindset and Energy Work: Address blockages to unlock transformation",
        "Practical and Personalized: Data-backed strategies with spiritual insights",
      ],
    },
    {
      name: "Aditya Mandan",
      role: "Fitness and Nutrition Coaching",
      image: "/Aditya.jpg",
      qualifications: [
        "National-level Para Powerlifter",
        "Certified Fitness Trainer (Level 2, PEPT) and Nutrition Consultant",
      ],
      offerings: [
        "Tailored Fitness Programs: From fat loss to powerlifting",
        "Holistic Transformation: Integrating physical, mental, and emotional well-being",
        "Inclusive Approach: Accessible and empowering fitness for everyone",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header/>
      <div className="relative h-[40vh] bg-black mb-16">
        <Image
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070"
          alt="Team collaboration"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="text-[#F31818]">Programs</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Experts dedicated to your holistic transformation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 space-y-6 order-2 md:order-none">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">{member.name}</h2>
                      <Badge className="bg-[#FFBD22] text-black text-md font-semibold">
                        {member.role}
                      </Badge>
                      <div className="mt-8 space-y-8">
                        <div>
                          <h3 className="text-lg font-semibold text-[#0D97FF] mb-4">Qualifications</h3>
                          <ul className="space-y-3 text-gray-700 font-bold">
                            {member.qualifications.map((qual, idx) => (
                              <li key={idx} className="flex items-start">
                                <Star className="h-5 w-5 text-[#FFBD22] mt-1 mr-3 flex-shrink-0" />
                                <span>{qual}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#00D115] mb-4">What We Offer</h3>
                          <ul className="space-y-3 text-gray-700 font-bold">
                            {member.offerings.map((offer, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="h-5 w-5 text-[#00D115] mt-1 mr-3 flex-shrink-0" />
                                <span>{offer}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-8">
                        <Button
                          className="bg-[#F31818] hover:bg-[#F31818]/90 text-lg font-bold text-white rounded-full px-8 py-6"
                          onClick={() => window.open("https://calendly.com/strentor/strentor-four-wishes-program", "_blank")}
                        >
                          Schedule a Session
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[600px] bg-gray-100 order-1 md:order-none">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 mb-16 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose <span className="text-[#F31818]">STRENTOR</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Approach",
                description: "Tailored programs designed for your unique journey",
                icon: <Check className="text-[#00D115] w-8 h-8" />,
              },
              {
                title: "Expert Guidance",
                description: "Learn from certified professionals with proven track records",
                icon: <Star className="text-[#FFBD22] w-8 h-8" />,
              },
              {
                title: "Holistic Growth",
                description: "Comprehensive development of mind, body, and spirit",
                icon: <Star className="text-[#0D97FF] w-8 h-8" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mb-16 py-20 bg-gradient-to-br from-blue-600/20 via-purple-500/20 to-pink-500/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 ">
            Ready to Begin Your <span className="text-[#F31818]">Journey</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-bold">
            Take the first step towards transformation with our expert team of coaches and mentors.
          </p>
          <Button 
            className="bg-[#F31818] hover:bg-[#F31818]/90 text-white font-bold rounded-full px-8 py-6 text-lg"
            onClick={() => window.open("https://calendly.com/strentor/strentor-four-wishes-program", "_blank")}
          >
            Start Your Transformation
          </Button>
        </div>
      <Footer/>
    </div>
  )
}