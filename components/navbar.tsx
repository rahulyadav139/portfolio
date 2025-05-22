"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-20">
          <div className="flex space-x-8">
            <Link
              href="/bio"
              className={`font-medium ${
                pathname === "/bio" ? "border-b-2 border-black" : ""
              } hover:border-b-2 hover:border-black transition-all`}
            >
              BIO
            </Link>
            <Link
              href="/work"
              className={`font-medium ${
                pathname === "/work" || pathname.startsWith("/work/") ? "border-b-2 border-black" : ""
              } hover:border-b-2 hover:border-black transition-all`}
            >
              WORK
            </Link>
          </div>

          <Link
            href="/contact"
            className={`font-medium ${
              pathname === "/contact" ? "border-b-2 border-black" : ""
            } hover:border-b-2 hover:border-black transition-all`}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}
