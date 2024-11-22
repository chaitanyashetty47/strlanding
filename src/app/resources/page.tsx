"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProductPage = () => {
  const handlePurchase = () => {
    window.location.href = "https://chaitanya424.gumroad.com/l/elbyov?wanted=true";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
          {/* Book Preview */}
          <div className="flex justify-center items-center">
            <div className="relative shadow-2xl rounded-lg overflow-hidden">
              <Image 
                src="/bookcover.jpg"
                alt="Ebook Cover"
                width={600}
                height={800}
                priority
                className="object-contain"
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '70vh',
                }}
              />
              {/* Floating Highlights */}
              <div className="absolute -right-1 top-2 bg-white p-3 rounded-lg shadow-lg">
                <p className="text-sm font-medium">✨ Instant Access</p>
              </div>
              <div className="absolute -left-1 bottom-2 bg-white p-3 rounded-lg shadow-lg">
                <p className="text-sm font-medium">📱 Multi-device</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-3">Ultimate Guide to Success</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Transform your life with proven strategies and actionable insights
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What&apos;s Inside:</h3>
              <ul className="space-y-2">
                {[
                  "200+ pages of practical wisdom",
                  "Step-by-step action plans",
                  "Real-world case studies",
                  "Exclusive bonus templates",
                  "Lifetime updates",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">$47</span>
                <span className="text-lg text-gray-500 line-through">$97</span>
                <span className="text-green-500 font-medium">52% OFF</span>
              </div>

              <Button 
                onClick={handlePurchase}
                className="w-full md:w-auto h-12 px-8 text-lg rounded-full bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
              >
                <span className="mr-2">Buy Now</span>
                <ArrowRight className="h-5 w-5" />
              </Button>

              <p className="text-sm text-gray-800">
                Secure payment via Gumroad • Instant delivery • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
