"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Scaling
              <br />
              Start-ups
              <br />
              for Growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">/Quick links</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/bio" className="text-pink-300 hover:text-white transition-colors">
                  BIO
                </Link>
                <Link href="/work" className="text-pink-300 hover:text-white transition-colors">
                  WORK
                </Link>
                <Link href="/projects" className="text-pink-300 hover:text-white transition-colors">
                  PROJECTS
                </Link>
                <Link href="/services" className="text-pink-300 hover:text-white transition-colors">
                  SERVICES
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">/Contact</h3>
              <div className="space-y-2">
                <p>your.email@example.com</p>
                <p>+1 (234) 567-890</p>
                <p>
                  1901 Thornridge
                  <br />
                  Cir, London
                  <br />
                  81063
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-800">
          <div className="text-3xl font-bold mb-4 md:mb-0">©Creative is</div>

          <div className="flex space-x-8">
            <Link href="/terms" className="text-sm hover:underline">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
