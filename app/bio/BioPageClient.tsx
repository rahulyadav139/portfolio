'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function BioPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hey!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-medium mb-6">
                Design by <span className="italic">Your Name</span>, a designer
                based in London, currently part of the design team at ©Studio.
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-md overflow-hidden">
              <Image
                src="https://fastly.picsum.photos/id/686/536/354.jpg?hmac=nQKjRmIoZtUkWvI-wNF8RFNW89VHuPIPT2muuPPL3QY"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg mb-6">
            I am a UI/UX designer with over 6 years of experience. I have won
            multiple international awards and had the privilege of collaborating
            with major companies like Studio, Brand, and Tech.
          </p>
          <p className="text-lg mb-6">
            My work focuses on combining creativity and functionality to deliver
            exceptional user experiences while enhancing business performance.
            With a rich portfolio and a passion for innovation, I continue to
            contribute to impactful digital design solutions.
          </p>
          <p className="text-lg">
            I specialize in creating intuitive interfaces that not only look
            beautiful but also solve real problems for users. My approach
            combines research, strategy, and creativity to build products that
            people love to use.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
