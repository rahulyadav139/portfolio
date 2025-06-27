'use client';

import { motion } from 'framer-motion';
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
    <main className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          ← Back
        </Link>
        <h1 className="text-5xl md:text-7xl font-bold mb-8">{project.title}</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            {/* project skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-sm bg-muted px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* project description */}
            <p className="text-md leading-7 text-muted-foreground whitespace-pre-line mb-6">
              {project.description}
            </p>

            {/* live and github buttons */}
            <div className="flex gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  className="flex items-center gap-2 border border-border px-4 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                  Github
                </Link>
              )}
              <Link
                href={project?.url || ''}
                className="flex items-center gap-2 bg-foreground text-background px-8 py-2 rounded-md hover:bg-muted-foreground transition-colors"
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
      </motion.div>
    </main>
  );
};
