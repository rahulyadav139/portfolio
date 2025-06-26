'use client';

import { motion } from 'framer-motion';
import skills from '@/assets/skills';
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { Tooltip } from '@radix-ui/react-tooltip';

export const Skills = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-7xl md:text-8xl font-bold mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>
      <motion.div
        className="flex flex-wrap gap-6 [&_svg]:w-10 [&_svg]:h-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <TooltipProvider>
          {skills.map(skill => (
            <Tooltip key={skill.id}>
              <TooltipTrigger>
                <skill.icon />
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                sideOffset={10}
                className="bg-foreground text-background p-2 rounded-md text-xs relative"
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-[5px] border-foreground rotate-45" />
                {skill.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </motion.div>
    </section>
  );
};
