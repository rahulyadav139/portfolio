'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import projects from '@/assets/projects.json';

export const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-7xl md:text-8xl font-bold mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="border-t border-border py-8"
          >
            <Link href={`/projects/${project.slug}`} className="group">
              <div className="grid md:grid-cols-3 gap-4 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl text-muted-foreground group-hover:text-foreground transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {project.categories.join(' / ')}
                  </p>
                </div>
                <div className="flex justify-end">
                  <span className="text-sm text-muted-foreground">
                    {project.type}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
