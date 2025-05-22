"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type Props = {
  params: { slug: string }
}

// This would typically come from a CMS or API
const projects = {
  talenthub: {
    title: "Talenthub",
    description:
      "TalentHub is a mobile-friendly platform designed to connect job seekers with the right opportunities effortlessly.",
    categories: ["UI / UX / Design System"],
    type: "Mobile app",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    details:
      "A comprehensive redesign of the TalentHub mobile application, focusing on improving user experience and streamlining the job search process. The project involved creating a cohesive design system, user research, and iterative testing to ensure the final product met both user needs and business goals.",
  },
}

export default function ProjectPageClient({ params }: Props) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return <div>Project Not Found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{project.title}</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-xl mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories[0].split(" / ").map((category, index) => (
                  <span key={index} className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {category}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">{project.details}</p>
            </div>
            <div>
              <div className="relative w-full aspect-video rounded-md overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="relative aspect-square rounded-md overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
