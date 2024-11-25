"use client";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-black/5 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12 grid gap-8 sm:grid-cols-3 text-center sm:text-left">
        {/* Company Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-400">
            <li className="hover:text-[#F31818]">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="hover:text-[#F31818]">
              <Link href="/programs">Programs</Link>
            </li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="font-bold">Strentor © 2024</div>
        </div>

        {/* Stay Connected Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Stay Connected</h3>
          <div className="flex justify-center sm:justify-start gap-4 text-gray-500 dark:text-gray-400">
            <Link
              className="hover:text-[#F31818] dark:hover:text-gray-100"
              href="https://www.facebook.com/strentor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              className="hover:text-[#F31818] dark:hover:text-gray-100"
              href="https://in.linkedin.com/company/strentor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              className="hover:text-[#F31818] dark:hover:text-gray-100"
              href="https://www.instagram.com/strentor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              className="hover:text-[#F31818] dark:hover:text-gray-100"
              href="https://www.youtube.com/@STRENTOR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
