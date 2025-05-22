"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPageClient() {
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
          Contact
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">/Quick links</h2>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="px-6 py-2 bg-pink-100 rounded-full text-black hover:bg-pink-200 transition-colors">
                BIO
              </a>
              <a href="#" className="px-6 py-2 bg-pink-100 rounded-full text-black hover:bg-pink-200 transition-colors">
                WORK
              </a>
              <a href="#" className="px-6 py-2 bg-pink-100 rounded-full text-black hover:bg-pink-200 transition-colors">
                PROJECTS
              </a>
              <a href="#" className="px-6 py-2 bg-pink-100 rounded-full text-black hover:bg-pink-200 transition-colors">
                SERVICES
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">/Contact</h2>
            <ul className="space-y-4">
              <li>
                <a href="mailto:your.email@example.com" className="text-lg hover:underline">
                  your.email@example.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-lg hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-lg">1901 Thornridge Cir, London, 81063</li>
            </ul>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Social</h3>
              <div className="flex gap-4">
                <a href="#" className="text-lg hover:underline">
                  Twitter
                </a>
                <a href="#" className="text-lg hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="text-lg hover:underline">
                  Dribbble
                </a>
                <a href="#" className="text-lg hover:underline">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
