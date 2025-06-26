'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <Link href="/">
            <Image
              src="/images/sign-initial.png"
              alt="logo"
              width={32}
              height={32}
            />
          </Link>

          <Link
            href="/contact"
            className={`font-medium border-b-2 ${
              pathname === '/contact' ? 'border-black' : 'border-transparent'
            } hover:border-b-2 hover:border-black transition-all uppercase`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
