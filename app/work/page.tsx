import type { Metadata } from "next"
import WorkPageClient from "./WorkPageClient"

export const metadata: Metadata = {
  title: "Work | Creative Portfolio",
  description: "Explore my portfolio of design projects and case studies",
}

export default function WorkPage() {
  return <WorkPageClient />
}
