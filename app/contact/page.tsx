import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact | Creative Portfolio",
  description: "Get in touch with me for collaborations, inquiries, or just to say hello",
}

export default function ContactPage() {
  return <ContactPageClient />
}
