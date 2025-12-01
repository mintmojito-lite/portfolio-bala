'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  id: string;
  name: string;
  short: string;
  detail: string;
  stack: string[];
  docLink: string;
}

export function ZoomParallax({ projects }: { projects: Project[] }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {projects.map((project, index) => {
          const scale = scales[index % scales.length];

          // CSS positioning classes from your reference
          const positions = [
            "", // Center (Index 0)
            "[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]",
            "[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]",
            "[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]",
            "[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]",
            "[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]",
            "[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]",
          ];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center ${positions[index]}`}
            >
              <a 
                href={project.docLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative flex flex-col justify-between h-[25vh] w-[25vw] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 transition-colors hover:border-cyan-500/50 hover:shadow-[0_0_50px_rgba(6,182,212,0.2)] group"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] text-cyan-500 border border-cyan-500/30 px-2 py-0.5 rounded">
                      {project.id}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-white leading-none tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h2>
                </div>

                <div className="relative z-10 border-t border-white/10 pt-4 mt-auto">
                  <p className="text-xs text-gray-400 font-mono line-clamp-2">
                    {project.short}
                  </p>
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}