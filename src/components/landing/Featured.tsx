"use client"
import React from 'react';
import Image from 'next/image';

interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href: string;
}

export const Logo = ({ src, alt, width = 48, height = 48, href }: LogoProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity"
  >
    <Image src={src} alt={alt} width={width} height={height} className="h-24 w-auto" />
  </a>
);

export default function Featured() {
  return (
    <div className="container mx-auto px-4 mt-12  items-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6 text-center text-[#F31818]">
        Also Featured In
      </h2>
      <div className="flex flex-row space-x-9 justify-center">
        {/* <Logo 
          src="/indiaflux.jpg" 
          alt="India Flux Logo" 
          width={400} 
          height={15} 
          href="https://indianflux.com/aditya-mandan-the-para-powerlifter-and-founder-of-stentor/" 
        /> */}
        {/* <Logo 
          src="/indiascoop.png" 
          alt="India Scoop Logo" 
          width={500} 
          height={48} 
          href="https://medium.com/@digitalscoopindia/aditya-mandan-the-para-powerlifter-and-founder-of-stentor-778f2bd995e1"
        /> */}
        {/* <Logo 
          src="/bestofhindustan.jpg" 
          alt="Best of Hindustan Logo" 
          width={600} 
          height={100} 
          href="https://bestofhindustan.com/aditya-mandan-the-para-powerlifter-and-founder-of-stentor/"
        /> */}
         {/* <Logo 
          src="/entbytes.jpg" 
          alt="Entrepreneur Bytes" 
          width={600} 
          height={100} 
          href="https://theentrepreneurbytes.com/aditya-mandan-the-para-powerlifter-and-founder-of-stentor/"
        /> */}
        <Logo 
          src="/zeebiz.jpg" 
          alt="Zee Business" 
          width={300} 
          height={300} 
          href="https://youtu.be/yNR2nag2bxY?si=nKXvHjeBSn7vK1Ve"
        />
        <Logo 
          src="/gameroom.jpg" 
          alt="Game Room" 
          width={600} 
          height={600} 
          href="https://youtu.be/jIjfj5b9kLU?si=IHWL4so_xWoH1z7l"
        />
        <Logo 
          src="/udaan.jpg" 
          alt="Radio Udaan" 
          width={600} 
          height={600} 
          href="https://youtu.be/O0rwgzslQy0?si=WAvS4lkze0-KanjW"
        />
        <Logo 
          src="/joshtalks.png" 
          alt="Josh Talks" 
          width={600} 
          height={600} 
          href="https://youtu.be/29PHD0uHhDY?si=AOEL30jDkwWrjnZe"
        />
      </div>
    </div>
  );
}