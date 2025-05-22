'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="container mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center">
              <motion.h1
                className="text-7xl md:text-9xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hey!
              </motion.h1>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-orange-300 ml-4 relative">
                  <div className="absolute inset-2 rounded-full border-4 border-orange-300"></div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-orange-300"></div>
                  <div className="absolute top-1 left-1 w-6 h-6 rounded-full bg-orange-300"></div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="grid md:grid-cols-2 gap-12 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Design by <span className="italic">Your Name</span>, a
                  designer based in London, currently part of the design team at
                  ©Studio.
                </h2>
                <div className="mt-8">
                  <Link
                    href="/work"
                    className="text-lg font-medium border-b-2 border-black pb-1 hover:border-pink-500 transition-colors"
                  >
                    View my work →
                  </Link>
                </div>
              </div>
              <div>
                <div className="relative w-full aspect-square rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          className="bg-black text-white py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-12">
              Creative is <span className="text-pink-500">joy</span>
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl">
              I am a UI/UX designer with over 6 years of experience. I have won
              multiple international awards and had the privilege of
              collaborating with major companies.
            </p>
            <div className="mt-12">
              <p className="text-lg">/CREATING SINCE 2018</p>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
