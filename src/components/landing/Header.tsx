"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);


  return (
    <>
      <header className="container mx-auto px-4 border-b shadow-sm">
        <div className="flex items-center justify-between py-3 md:py-3">
          
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/strentor.png"
                alt="Strentor Logo"
                width={120}
                height={240}
                className="w-48 h-24"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-5 items-center font-semibold">
          <a href="/" className="hover:text-red-500">Home</a>
            <a href="/aboutus" className="hover:text-red-500">About Us</a>
            <a href="/programs" className="hover:text-red-500">Programs</a>
            <a href="/community" className="block hover:text-red-500 py-2">Community</a>
            <Button 
              className="shadow-2xl h-10 rounded-full bg-gradient-to-b from-red-500 to-red-700"
              onClick={() => window.open("https://chat.whatsapp.com/BW8s55o0pLCHCimnM0za3x", "_blank")}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-bold leading-none tracking-tight text-white lg:text-lg">
               Book Your Free Discovery Call
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t flex flex-col items-center font-semibold ">
            <a href="/" className="block hover:text-red-500 py-2">Home</a>
            <a href="/aboutus" className="block hover:text-red-500 py-2">About Us</a>
            <a href="/programs" className="block hover:text-red-500 py-2">Programs</a>      
            <a href="/community" className="block hover:text-red-500 py-2">Community</a>      
            {/* <Button 
              className="w-full shadow-2xl h-10 rounded-full bg-gradient-to-b from-red-500 to-red-700"
              onClick={() => window.open("https://calendly.com/strentor/strentor-services", "_blank")}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-bold
               leading-none tracking-tight text-white lg:text-lg">
                Book A Discovery Call
              </span>
            </Button> */}
          </div>
        )}
      </header>

      {/* Contact Form Dialog */}
      <ContactForm open={showForm} onOpenChange={setShowForm} />
    </>
  );
}