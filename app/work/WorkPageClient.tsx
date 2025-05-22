"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const projects = [
  {
    id: "talenthub",
    title: "Talenthub",
    categories: ["UI / UX / Design System"],
    type: "Mobile app",
    image: "/placeholder.svg",
    slug: "talenthub",
  },
  {
    id: "nolito",
    title: "Nolito",
    categories: ["UI / UX / Design System / Development"],
    type: "Dashboard",
    image: "/placeholder.svg",
    slug: "nolito",
  },
  {
    id: "synapse",
    title: "Synapse",
    categories: ["UI / Design System / Motion Design / Development"],
    type: "Website",
    image: "/placeholder.svg",
    slug: "synapse",
  },
  {
    id: "synergies",
    title: "Synergies",
    categories: ["UI / Branding / Photography / Design System"],
    type: "Website",
    image: "/placeholder.svg",
    slug: "synergies",
  },
  {
    id: "voltrive",
    title: "Voltrive",
    categories: ["UI / Visual / Branding / Design System"],
    type: "Website",
    image: "/placeholder.svg",
    slug: "voltrive",
  },
]

export default function WorkPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="border-t border-gray-200 py-8"
            >
              <Link href={`/work/${project.slug}`} className="group">
                <div className="grid md:grid-cols-3 gap-4 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl text-gray-500 group-hover:text-black transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{project.categories.join(" / ")}</p>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-sm text-gray-600">{project.type}</span>
                    {project.type === "Dashboard" && (
                      <div className="ml-4 relative w-24 h-16 overflow-hidden rounded">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
