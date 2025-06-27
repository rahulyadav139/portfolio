'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from './theme-switcher';
import { ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-sm shadow-sm`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/images/sign-initial.png"
                alt="logo"
                width={32}
                height={32}
                className="dark:invert"
              />
            </Link>
            <p className="text-lg font-medium">Rahul Yadav</p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`text-md font-medium border-b-2 ${
                pathname === '/contact'
                  ? 'border-foreground'
                  : 'border-transparent'
              } hover:border-b-2 hover:border-foreground transition-all`}
            >
              Contact
            </Link>
            <Link
              href="/resume.pdf"
              className="text-md font-medium border-b-2 border-transparent hover:border-foreground transition-all inline-flex justify-center items-center"
              download
            >
              Resume
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
