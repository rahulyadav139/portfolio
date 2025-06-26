'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import profile from '@/assets/profile.json';

export function Footer() {
  return (
    <motion.footer
      className="bg-foreground text-background py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              {profile.tagline.line1}
              <br />
              {profile.tagline.line2}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">/Quick links</h3>
              <div className="flex flex-col space-y-2">
                {Object.entries(profile.socialLinks).map(([name, link]) => (
                  <Link
                    key={name}
                    href={link}
                    target="_blank"
                    className="text-secondary hover:text-background transition-colors"
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">/Email</h3>
              <Link
                href={`mailto:${profile.email}`}
                className="text-secondary hover:text-background transition-colors"
              >
                {profile.email}
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-md font-bold mb-4 md:mb-0 text-center">
            {new Date().getFullYear()}©. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
