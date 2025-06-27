'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import profile from '@/assets/profile.json';

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
            <motion.div
              className="text-7xl md:text-9xl font-bold mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hey!
            </motion.div>
            <h1 className="text-3xl leading-10 font-bold mb-12">
              I&apos;m <i>Rahul Yadav</i>, a frontend developer crafting
              seamless web experiences at <i>©GrowthX</i>.
            </h1>

            <p className="text-lg leading-7 mb-6 whitespace-pre-line">
              {profile.about}
            </p>
          </div>

          <div className=" sticky top-32 w-full aspect-square rounded-md overflow-hidden">
            <Image
              src="/images/display-picture.webp"
              alt="profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
