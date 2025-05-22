import type { Metadata } from "next"
import BioPageClient from "./BioPageClient"

export const metadata: Metadata = {
  title: "Bio | Creative Portfolio",
  description: "Learn more about my background, experience, and design philosophy",
}

export default function BioPage() {
  return <BioPageClient />
}
