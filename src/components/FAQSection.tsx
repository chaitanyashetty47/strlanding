"use client"
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Who is this program for?",
      answer: "This program is for anyone ready to experience a holistic transformation. Whether you're feeling stuck in life, want to align your goals with your true self, or simply wish to improve your mental, emotional, and physical well-being."
    },
    {
      question: "How long is the program?",
      answer: "The program offers flexibility based on your goals, but we recommend a minimum commitment of 3 months to see meaningful transformation."
    },
    {
      question: "How often will I interact with my fitness coach?",
      answer: "You can interact with your coach as often as needed through our platform. Regular check-ins are scheduled weekly, but you can message your coach anytime for advice, form checks, or motivation."
    },
    {
      question: "How is STRENTOR different from other wellness programs?",
      answer: "STRENTOR isn’t just a wellness program,it’s a holistic transformation journey. We don’t focus on just one area of your life."
    },
    {
      question: "What happens after I complete the program?",
      answer: "Upon completing the program, you’ll be equipped with all the tools and confidence you need to continue your personal growth."
    }
  ];

  return (
    <section className="container mx-auto px-4 text-center mt-20 mb-20">
      <h2 className="text-4xl font-thin bg-gradient-to-r from-purple-600 via-indigo-400 to-violet-700 inline-block text-transparent bg-clip-text mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-violet-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-left text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;