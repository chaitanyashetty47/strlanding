"use client"

import Header from '@/components/landing/Header'
import Banner from '@/components/programs/psychological/Banner'
import Footer from "@/components/landing/Footer"
import FitnessHero from "@/components/programs/psychological/Hero"
import SuccessStories from "@/components/programs/psychological/SuccessStories"
import FitnessTestimonials from "@/components/programs/fitness/Testimonials"
import TrainerProfile from "@/components/programs/psychological/TrainerProfile"

export default function FitnessPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <FitnessHero />
      <TrainerProfile />
      <SuccessStories />
      <FitnessTestimonials />
      <Banner />
      <Footer />
    </div>
  )
}
