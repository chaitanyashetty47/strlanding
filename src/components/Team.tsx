"use client"

import { Card } from "@/components/ui/card"
import { Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image";


interface TeamMember {
  name: string
  role: string
  image: string 
  social: {
    twitter?: string
    facebook?: string
    linkedin?: string
  }
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "Aditya Mandan",
      role: "Fitness Coach",
      image:"/Me.png",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Anisha Jhunjhunwala",
      role: "Mind and Emotion Specialist",
      image:"/Anisha.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Ashmita Dani",
      role: "Manifestation Coach",
      image:"/Ashmita.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Arun Kunjunny",
      role: "Life Coach",
      image:"/Arun.jpeg",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    }
  ]

  return (
    <div className="relative w-full overflow-hidden py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-600">Meet Our Team</h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
          Our Expert Team is comprised of fitness specialist, psychological expert, life coach, and manifestation mentor. Together, they bring a holistic blend of knowledge and passion to empower your journey toward wellness and transformation.
          </p>
        </div>
        <div className="mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {team.map((member) => (
              <Card
                key={member.name}
                className="group relative overflow-hidden rounded-lg backdrop-blur-sm bg-white/10 border-white/20 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="aspect-square overflow-hidden relative">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={true}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{member.name}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{member.role}</p>
                  <div className="flex space-x-3 mt-4">
                    {member.social.twitter && (
                      <Link
                        href={member.social.twitter}
                        className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                    )}
                    {member.social.facebook && (
                      <Link
                        href={member.social.facebook}
                        className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      >
                        <Facebook className="h-4 w-4" />
                      </Link>
                    )}
                    {member.social.linkedin && (
                      <Link
                        href={member.social.linkedin}
                        className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};