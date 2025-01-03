"use client";

import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => (
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

const TestimonialCardMobile = ({ quote, author }: TestimonialCardProps) => (
  <div className="p-6 bg-white rounded-xl shadow-lg text-center flex flex-col items-center h-full">
    <Quote className="w-8 h-8 text-[#FFBD22] mb-4" />
    <p className="text-gray-900 font-semibold text-base leading-relaxed mb-4">{quote}</p>
    <div className="mt-auto flex flex-col items-center">
      <div className="h-1 w-12 bg-gradient-to-r from-[#F31818] via-[#00D115] to-[#0D97FF] mb-3"></div>
      <p className="font-semibold text-sm">
        <span className="text-[#F31818]">{author}</span>
      </p>
    </div>
  </div>
);

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Aditya is a brilliant trainer. He pushed me when it was needed and cherished every fitness milestone that I achieved.",
      author: "Tanushree Das",
    },
    {
      quote: "Sessions with Ashmita are highly recommended for anyone seeking direction or inner peace.",
      author: "Bhargav Shah",
    },
    {
      quote:
        "Anisha, my long-time psychologist, helps me manage the mental & emotional challenges of living with the physical challenge.",
      author: "Aditya Mandan",
    },
  ];

  const [position, setPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cardWidth = isMobile ? 100 : 100 / 3;
  const totalWidth = testimonials.length * cardWidth;

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint for mobile
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const animation = () => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 0.3; // Adjust the speed
        return Math.abs(newPosition) >= totalWidth ? 0 : newPosition;
      });
    };
    const animationFrame = setInterval(animation, 50);
    return () => clearInterval(animationFrame);
  }, [totalWidth]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Transforming Lives, <span className="text-[#F31818]">One Story</span> at a Time
        </h2>

        <div className="relative w-full overflow-hidden">
          {/* Fade effect overlays */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Testimonial cards */}
          <div
            className="flex gap-4 transition-transform duration-75 ease-linear"
            style={{
              transform: `translateX(${position}%)`,
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={`first-${idx}`} className={`${isMobile ? "w-full px-2" : "w-1/3 px-4"} flex-shrink-0`}>
                {isMobile ? (
                  <TestimonialCardMobile quote={testimonial.quote} author={testimonial.author} />
                ) : (
                  <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
                )}
              </div>
            ))}
            {/* Duplicate first three cards for smooth transition */}
            {testimonials.slice(0, 3).map((testimonial, idx) => (
              <div key={`duplicate-${idx}`} className={`${isMobile ? "w-full px-2" : "w-1/3 px-4"} flex-shrink-0`}>
                {isMobile ? (
                  <TestimonialCardMobile quote={testimonial.quote} author={testimonial.author} />
                ) : (
                  <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
