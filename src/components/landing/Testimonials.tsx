"use client"
import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg text-center flex flex-col items-center h-full">
      <Quote className="w-10 h-10 text-[#FFBD22] mb-6" />
      <p className="text-gray-900 font-semibold text-lg leading-relaxed mb-6">{quote}</p>
      <div className="mt-auto flex flex-col items-center">
        <div className="h-1 w-16 bg-gradient-to-r from-[#F31818] via-[#00D115] to-[#0D97FF] mb-4"></div>
        <p className="font-semibold">
          <span className="text-[#F31818] text-lg">{author}</span>
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Aditya has been helping me with my diet and exercise routine for past 8 months and I couldn't be happier. With his guidance, not only have I been able to exercise regularly with my erratic work schedule, I look forward to my workout time.",
      author: "Kunjan Chabra"
    },
    {
      quote: "Aditya is a brilliant trainer. He pushed me when it was needed and cherished every fitness milestone that I achieved. Aditya was also available for addressing any query or concern that I had, making sure to give rationale behind it.",
      author: "Tanushree Das"
    },
    {
      quote: "If you have dreams but haven't started or feel stuck, Arun Kunjunny is the coach to approach. I am grateful for his help in overcoming personal & professional challenges and discovering my inner strengths, boosting my self-belief.",
      author: "Sirisha Kantety"
    },
    {
      quote: "Sessions with Ashmita are highly recommended for anyone seeking direction or inner peace. Her personal growth journey allows her to connect deeply, offering both desired and needed insights, rated 10/10, these sessions are a must try for all.",
      author: "Bhargav Shah"
    },
    {
      quote: "Anisha, my long-time psychologist, helps me manage the mental & emotional challenges of living with the physical challenge. She understands my struggles, offers empathetic support, and provides solutions that bring me peace and foster personal growth.",
      author: "Aditya Mandan"
    }
  ];

  const [position, setPosition] = useState(0);
  const cardWidth = 100 / 3;
  const totalWidth = testimonials.length * cardWidth;

  useEffect(() => {
    const animation = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.3; // Slowed down the animation
        return Math.abs(newPosition) >= totalWidth ? 0 : newPosition;
      });
    };

    const animationFrame = setInterval(animation, 50);
    return () => clearInterval(animationFrame);
  }, [totalWidth]);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Transforming Lives, <span className="text-[#F31818]">One Story</span> at a Time
        </h2>
        
        <div className="relative w-full overflow-hidden">
          {/* Fade effect overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Testimonial cards */}
          <div 
            className="flex gap-8 transition-transform duration-75 ease-linear"
            style={{
              transform: `translateX(${position}%)`,
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div 
                key={`first-${idx}`} 
                className="w-1/3 px-4 flex-shrink-0"
              >
                <TestimonialCard 
                  quote={testimonial.quote} 
                  author={testimonial.author}
                />
              </div>
            ))}
            {/* Duplicate first three cards for smooth transition */}
            {testimonials.slice(0, 3).map((testimonial, idx) => (
              <div 
                key={`duplicate-${idx}`} 
                className="w-1/3 px-4 flex-shrink-0"
              >
                <TestimonialCard 
                  quote={testimonial.quote} 
                  author={testimonial.author}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;