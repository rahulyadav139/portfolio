'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Frontend that Performs.
              <br />
              Products that Grow.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">/Quick links</h3>
              <div className="flex flex-col space-y-2">
                <Link
                  href="https://github.com/rahulyadav139"
                  target="_blank"
                  className="text-pink-300 hover:text-white transition-colors"
                >
                  Github
                </Link>
                <Link
                  href="https://www.linkedin.com/in/techrahul"
                  target="_blank"
                  className="text-pink-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://x.com/rahul_m_yadav"
                  target="_blank"
                  className="text-pink-300 hover:text-white transition-colors"
                >
                  Twitter
                </Link>
                {/* <Link
                  href="/services"
                  className="text-pink-300 hover:text-white transition-colors"
                >
                  SERVICES
                </Link> */}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">/Email</h3>
              <Link
                href="mailto:contact@rahulyadav.dev"
                className="text-pink-300 hover:text-white transition-colors"
              >
                contact@rahulyadav.dev
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-md font-bold mb-4 md:mb-0 text-center">
            {new Date().getFullYear()}©. All Rights Reserved.
          </p>

          {/* <div className="flex space-x-8">
            <Link href="/terms" className="text-sm hover:underline">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
          </div> */}
        </div>
      </div>
    </motion.footer>
  );
}
