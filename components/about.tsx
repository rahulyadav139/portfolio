'use client';

import { motion } from 'framer-motion';
// import Link from 'next/link';
import Image from 'next/image';

export const About = () => {
  return (
    <section className="container mx-auto px-4 py-16 pt-24 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="grid md:grid-cols-[8fr_4fr] gap-56 mt-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div>
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hey!
            </motion.h1>
            <h2 className="text-3xl font-bold mb-12">
              I&apos;m <span className="italic">Rahul Yadav</span>, a frontend
              developer crafting seamless web experiences at ©GrowthX.
              {/* Crafted by <span className="italic">Rahul Yadav</span>, a frontend
              developer shaping interfaces at ©GrowthX. */}
            </h2>

            {/* <p className="text-md leading-7 mb-6">
              I am a UI/UX designer with over 6 years of experience. I have won
              multiple international awards and had the privilege of
              collaborating with major companies like Studio, Brand, and Tech.
              I&apos;m driven by the belief that great technology should not
              only work—it should feel great to use. I care deeply about
              creating products with exceptional UX, especially in the
              community-driven space. My dream is to build platforms that are
              highly productive, incredibly intuitive, and so fun to use that
              people naturally want to share them.
            </p> */}
            <p className="text-md leading-7 mb-6">
              {/* My work focuses on combining creativity and functionality to
              deliver exceptional user experiences while enhancing business
              performance. With a rich portfolio and a passion for innovation, I
              continue to contribute to impactful digital design solutions. */}
              {/* I build user interfaces that blend creativity with performance —
              delivering seamless experiences that not only engage users but
              also drive business results. With a passion for modern web
              technologies, I&apos;m committed to building impactful, scalable
              frontends. */}
              I build user interfaces that marry creativity with performance,
              creating seamless experiences that captivate users and drive
              business growth. Fueled by a passion for modern web technologies,
              I build frontend architectures that are both scalable and
              maintainable.
            </p>
            <p className="text-md leading-7 mb-6">
              I specialize in building intuitive, user-focused interfaces that
              solve real-world problems and scale with business needs. My
              approach blends thoughtful UX, performance-driven development, and
              a deep understanding of product goals.
              {/* I specialize in creating intuitive interfaces that not only look
              beautiful but also solve real problems for users. My approach
              combines research, strategy, and creativity to build products that
              people love to use. */}
            </p>
            {/* <p className="text-md leading-7">
              At GrowthX, I&apos;ve led the frontend development of key
              platforms — from user onboarding flows and referral systems to
              admin dashboards and career roadmaps — all designed to enhance
              user engagement, simplify complex workflows, and drive measurable
              outcomes.
            </p> */}
            {/* <div className="mt-8">
              <Link
                href="/work"
                className="text-lg font-medium border-b-2 border-foreground pb-1 hover:border-primary transition-colors"
              >
                View my work →
              </Link>
            </div> */}
          </div>

          <div className="sticky top-32 w-full aspect-square rounded-md overflow-hidden">
            <Image
              src="/images/display-picture.webp"
              alt="profile"
              fill
              className="object-cover"
              priority
            />
            {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background"></div>
              </div> */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
