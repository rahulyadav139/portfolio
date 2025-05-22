import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectPageClient from "./ProjectPageClient"

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    }
  }

  return {
    title: `${project.title} | Creative Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Creative Portfolio`,
      description: project.description,
      type: "article",
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return <ProjectPageClient params={params} />
}
