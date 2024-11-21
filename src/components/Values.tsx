
import { Dumbbell, Brain, Target } from 'lucide-react';

export default function Values(){
  return (

    <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do at STRENTOR, ensuring we deliver the highest quality experience for our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <Dumbbell className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Physical Excellence</h3>
              <p className="text-gray-400">
                We promote sustainable strength development through proven methodologies and personalized approaches.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <Brain className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Mental Resilience</h3>
              <p className="text-gray-400">
                Building mental strength alongside physical capabilities for holistic personal growth.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <Target className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Continuous Growth</h3>
              <p className="text-gray-400">
                Committed to ongoing improvement and helping our community achieve their goals.
              </p>
            </div>
          </div>
        </div>
    </section>

  )
}

