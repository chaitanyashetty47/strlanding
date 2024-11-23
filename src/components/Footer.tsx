"use client"
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-black/5 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12 grid gap-8 sm:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-400 ">
            <li className="hover:text-[#F31818]">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="hover:text-[#F31818]">
              <Link href="/programs">Programs</Link>
            </li>
            {/* <li>
              <Link href="#">Blog</Link>
            </li> */}
          </ul>
        </div>
        <div className="flex items-center justify-center font-bold">
          Strentor © 2024
        </div>
        <div className="space-y-2 justify-self-end">
          <h3 className="text-lg font-semibold">Stay Connected</h3>
          <div className="space-y-2">
            {/* <div className="flex gap-2">
              <Button>Join Our Waitlist</Button>
            </div> */}
            <div className="flex gap-4 text-gray-500 dark:text-gray-400">
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
      </div>
    </footer>
  );
}