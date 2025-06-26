'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types/experience';
import Image from 'next/image';
import workExperiences from '@/assets/work-experience.json';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const API_KEY = process.env.NEXT_PUBLIC_LOGO_API_KEY;

export const Work = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-7xl md:text-8xl font-bold mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work
      </motion.h1>
      <motion.div
        className="flex flex-wrap gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {workExperiences.map(experience => (
          <WorkExperience key={experience.id} experience={experience} />
        ))}
      </motion.div>
    </section>
  );
};

interface WorkExperienceProps {
  experience: Experience;
}

const WorkExperience = ({ experience }: WorkExperienceProps) => {
  return (
    <motion.div
      className="grid grid-cols-[1fr_1fr_3fr] gap-8 border-t border-border py-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <div className="flex gap-4">
        <div className="bg-background/10 rounded-lg w-fit">
          <Image
            src={`https://img.logo.dev/${experience.website}?token=${API_KEY}&retina=true`}
            alt={experience.company}
            width={50}
            height={50}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">{experience.company}</h3>
          {experience.website && (
            <Link
              href={`https://${experience.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors w-fit"
            >
              {experience.website}
              <ExternalLink className="size-4" />
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-base font-medium">{experience.position}</p>
        <p className="text-sm text-muted-foreground">
          {experience.startDate} - {experience.endDate || 'Present'}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-base leading-relaxed">{experience.description}</p>
      </div>
    </motion.div>
  );
};
