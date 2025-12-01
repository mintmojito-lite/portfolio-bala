'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';

interface Project {
  id: string;
  name: string;
  short: string;
  detail: string;
  stack: string[];
  docLink: string;
}

export function ProjectStack({ projects }: { projects: Project[] }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className="mt-[10vh] mb-[20vh]" style={{ perspective: "1000px" }}>
      {projects.map((project, index) => {
        const targetScale = 1 - (projects.length - index) * 0.05;
        
        return (
          <Card
            key={index}
            i={index}
            project={project}
            progress={scrollYProgress}
            range={[index * 0.05, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

const Card = ({
  i,
  project,
  progress,
  range,
  targetScale,
}: {
  i: number;
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  
  const scale = useTransform(progress, range, [1, targetScale]);
  const rotate = useTransform(progress, range, [0, -15]);

  const topOffset = `calc(10vh + ${i * 2}px)`;

  const gradients = [
    "from-[#111] to-black",
    "from-[#0f172a] to-black", 
    "from-[#171717] to-black",
    "from-[#0c0a09] to-black",
    "from-[#1e1b4b] to-black", 
    "from-[#022c22] to-black",
  ];
  const bgGradient = gradients[i % gradients.length];

  return (
    <div
      className="h-screen flex items-start justify-center sticky top-0"
      style={{ top: topOffset }}
    >
      <motion.div
        style={{
          scale,
          rotateX: rotate,
        }}
        className="relative flex flex-col w-[90vw] md:w-[1000px] h-[60vh] rounded-3xl border border-[#222] bg-[#080808] p-8 origin-top shadow-2xl overflow-hidden group"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
            <h2 className="text-3xl font-bold text-[#ddd]">
                {project.name}
            </h2>
            <span className="font-mono text-xs text-cyan-500 border border-cyan-900/30 bg-cyan-950/20 px-2 py-1 rounded">
                {project.id}
            </span>
        </div>

        {/* Content Split */}
        <div className="flex flex-col md:flex-row h-full gap-8">
            
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <p className="text-lg font-medium text-white mb-4">{project.short}</p>
                    <p className="text-sm text-gray-400 leading-relaxed font-mono">
                        {project.detail}
                    </p>
                </div>

                <div className="mt-4">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech, idx) => (
                            <span key={idx} className="text-[10px] uppercase tracking-wider text-[#666] bg-[#111] px-2 py-1 rounded border border-[#222]">
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    <a 
                        href={project.docLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-lg hover:opacity-80 transition-opacity"
                    >
                        View System Details
                    </a>
                </div>
            </div>

            {/* Right: Abstract Visual */}
            <div className="flex-1 relative h-full rounded-2xl overflow-hidden bg-[#050505] border border-[#222] hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-full h-full bg-gradient-to-br ${bgGradient} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                        <span className="text-[10rem] font-bold text-white select-none">
                            {project.name.charAt(0)}
                        </span>
                    </div>
                    <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[#333] text-right leading-tight">
                        <p>EF {project.id}</p>
                        <p>STATUS DEPLOYED</p>
                    </div>
                </div>
            </div>

        </div>

      </motion.div>
    </div>
  );
};