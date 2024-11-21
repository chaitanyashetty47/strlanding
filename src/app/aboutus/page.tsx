import { HeroSection } from '@/components/aboutus/HeroSection';
import { BrandStory } from '@/components/aboutus/BrandStory';
import { Mission } from '@/components/aboutus/Mission';
import { FounderStory } from '@/components/aboutus/Founder';
import Header from '@/components/Header';
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header/>
      <HeroSection />
      <BrandStory />
      <Mission />
      
      <FounderStory />
      <Footer/>
    </main>
  );
}

// import Image from 'next/image';
// import Header from '@/components/Header';


// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       {/* Hero Section */}
//       <div className="relative h-[60vh] bg-black">
//         <Image
//           src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
//           alt="Gym equipment in modern setting"
//           fill
//           className="object-cover opacity-40"
//           priority
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
//             Empowering Your Journey
//           </h1>
//         </div>
//       </div>

//       {/* Brand Story Section */}
//       <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <span className="text-rose-500 text-xl font-semibold">Our Story</span>
//             <h2 className="text-4xl font-bold text-gray-900">
//               Where Strength Meets Purpose
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               STRENTOR was born from a simple yet powerful vision: to create a holistic approach to strength and wellness that empowers individuals to reach their full potential. We believe that true strength comes from the harmonious development of both body and mind.
//             </p>
//           </div>
//           <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
//             <Image
//               src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069"
//               alt="Training session"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
      // <section className="bg-gray-900 text-white py-16 md:py-24">
      //   <div className="max-w-7xl mx-auto px-4">
      //     <div className="text-center mb-16">
      //       <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
      //       <p className="text-gray-400 max-w-2xl mx-auto">
      //         These principles guide everything we do at STRENTOR, ensuring we deliver the highest quality experience for our community.
      //       </p>
      //     </div>
          
      //     <div className="grid md:grid-cols-3 gap-8">
      //       <div className="bg-gray-800 p-8 rounded-lg">
      //         <Dumbbell className="w-12 h-12 text-rose-500 mb-4" />
      //         <h3 className="text-xl font-bold mb-3">Physical Excellence</h3>
      //         <p className="text-gray-400">
      //           We promote sustainable strength development through proven methodologies and personalized approaches.
      //         </p>
      //       </div>
      //       <div className="bg-gray-800 p-8 rounded-lg">
      //         <Brain className="w-12 h-12 text-rose-500 mb-4" />
      //         <h3 className="text-xl font-bold mb-3">Mental Resilience</h3>
      //         <p className="text-gray-400">
      //           Building mental strength alongside physical capabilities for holistic personal growth.
      //         </p>
      //       </div>
      //       <div className="bg-gray-800 p-8 rounded-lg">
      //         <Target className="w-12 h-12 text-rose-500 mb-4" />
      //         <h3 className="text-xl font-bold mb-3">Continuous Growth</h3>
      //         <p className="text-gray-400">
      //           Committed to ongoing improvement and helping our community achieve their goals.
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </section>

//       {/* Mission Statement */}
//       <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             To create an inclusive environment where individuals can discover their strength, embrace personal growth, and build lasting habits for a healthier life. Through our holistic approach, we empower our community to achieve sustainable results while maintaining balance in their lives.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }


