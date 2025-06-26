'use client';

import { motion } from 'framer-motion';
import { Footer } from './footer';
import { Navbar } from './navbar';
import Image from 'next/image';
import { Project } from '@/types/project';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-4"
          >
            ← Back
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            {project.title}
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              {/* project skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {/* project description */}
              <p className="text-md leading-7 text-gray-600 whitespace-pre-line mb-6">
                {project.description}
              </p>

              {/* live and github buttons */}
              <div className="flex gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 border border-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    Github
                  </Link>
                )}
                <Link
                  href={project?.url || ''}
                  className="flex items-center gap-2 bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Live
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            {/* project image */}
            <div>
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="relative aspect-square rounded-md overflow-hidden"
              >
                <Image
                  src={image || '/placeholder.svg'}
                  alt={`${project.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};
