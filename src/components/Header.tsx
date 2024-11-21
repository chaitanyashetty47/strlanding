"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "@/components/forms/ContactForm";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleJoinNowClick = () => {
    setShowForm(true);
    setIsMenuOpen(false); // Close mobile menu when opening form
  };

  return (
    <>
      <header className="container mx-auto px-4 border-b shadow-xl">
        <div className="flex items-center justify-between py-3 md:py-5">
          
          <div>
            <Image
              src="/strentor.png"
              width={48}
              height={48}
              alt="Strentor Logo"
              className="object-fit"
            />
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
            <a href="/aboutus" className="hover:text-purple-500">About Us</a>
            <a href="/programs" className="hover:text-purple-500">Programs</a>
            <a href="/services" className="hover:text-purple-500">Resources</a>
            <Button 
              className="shadow-2xl h-10 rounded-full bg-gradient-to-b from-purple-500 to-purple-700"
              onClick={handleJoinNowClick}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                Book A Call
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <a href="#Team" className="block hover:text-purple-500 py-2">About Us</a>
            <a href="#Programs" className="block hover:text-purple-500 py-2">Programs</a>
            <a href="#Resources" className="block hover:text-purple-500 py-2">Resources</a>
            <Button 
              className="w-full shadow-2xl h-10 rounded-full bg-gradient-to-b from-purple-500 to-purple-700"
              onClick={handleJoinNowClick}
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                Book A Call
              </span>
            </Button>
          </div>
        )}
      </header>

      {/* Contact Form Dialog */}
      <ContactForm open={showForm} onOpenChange={setShowForm} />
    </>
  );
}