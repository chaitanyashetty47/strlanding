"use client"
import React, { useState, useEffect } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
      <div className="text-5xl text-gray-300 mb-4">&ldquo;</div>
      <p className="text-gray-700 font-semibold text-lg italic mb-4">{quote}</p>
      <div className="h-1 w-16 bg-[#FFBD22] mb-2"></div>
      <p className="text-[#F31818] font-semibold">{author}</p>
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
      quote: "I felt motivated throughout the program, and each session with Aditya brought new learning.",
      author: "Priya Patel"
    },
    {
      quote: "I gained a lot of confidence and clarity in my fitness journey thanks to Aditya's personalized guidance.",
      author: "Rahul Sharma"
    },
    {
      quote: "If you have dreams but haven't started or feel stuck, Arun Kunjunny is the coach to approach. I am grateful for his help in overcoming personal & professional challenges and discovering my inner strengths, boosting my self-belief.",
      author: "Sirisha Kantety"
    },
    {
      quote: "Sessions with Ashmita are highly recommended for anyone seeking direction or inner peace. Her personal growth journey allows her to connect deeply, offering both desired and needed insights, rated 10/10, these sessions are a must try for all.",
      author: "Bhargav Shah"
    },{
      quote: "Anisha, my long-time psychologist, helps me manage the mental & emotional challenges of living with the physical challenge. She understands my struggles, offers empathetic support, and provides solutions that bring me peace and foster personal growth.",
      author: "Aditya Mandan"
    }

  ];

  const [position, setPosition] = useState(0);
  const cardWidth = 100 / 3; // Width of one card in percentage
  const totalWidth = testimonials.length * cardWidth;

  useEffect(() => {
    const animation = () => {
      setPosition((prevPosition) => {
        // Move position by small increment
        const newPosition = prevPosition - 0.5;
        
        // When we've scrolled past one card width, move to the relative position
        // This creates an infinite scroll effect
        if (Math.abs(newPosition) >= totalWidth) {
          return 0;
        }
        return newPosition;
      });
    };

    const animationFrame = setInterval(animation, 75);
    return () => clearInterval(animationFrame);
  }, [totalWidth]);

  return (
    <div className="py-10 ">
      <h2 className="font-bold text-5xl mb-6 text-center text-[#F31818]">
        What Our Customers Say
      </h2>
      <div className="relative w-full overflow-hidden">
        {/* Fade effect overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* First set of cards */}
        <div 
          className="flex gap-6 transition-transform duration-75 ease-linear"
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
          {/* Duplicate the first three cards at the end for smooth transition */}
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
  );
};

export default Testimonials;