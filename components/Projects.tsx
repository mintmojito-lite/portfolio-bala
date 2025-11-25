"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// UPDATED DATA: Includes 'id' and 'stack' to match the Profile Card look
const projects = [
  { 
    id: "SYS_309",
    name: "Semantic Code Gen Engine", 
    short: "AI Architecture Validation", 
    detail: "AI-powered semantic code generation engine using LLM + Knowledge Graph for architecture validation.",
    stack: ["LLM", "Python", "Neo4j"],
    docLink: "https://github.com/mintmojito-lite/Semantic-Code-Gen-Engine-309" 
  },
  { 
    id: "AUTH_SSL",
    name: "SSL Based Login Flow", 
    short: "Passwordless Auth System", 
    detail: "A complete ZKP & SSL-based login flow ensuring high-security passwordless authentication.",
    stack: ["OpenSSL", "Node.js", "Crypto"],
    docLink: "https://docs.google.com/document/d/189XKS1GaqURzpD9JDJt-Mg-TGNGAXFrZ7wYWs55kY2k/edit?usp=sharing" 
  },
  { 
    id: "SRAV_V1",
    name: "SRAV", 
    short: "Autonomous Verification", 
    detail: "Data decay framework ensuring sensitive information self-destructs after trust windows expire.",
    stack: ["Rust", "Blockchain", "Security"],
    docLink: "https://docs.google.com/document/d/1jfSLypcuEUSOwvUq9hzlO1eB850P8re3eybX5_tkt1M/edit?usp=sharing" 
  },
  { 
    id: "PQER_NET",
    name: "PQER", 
    short: "Quantum Entanglement Router", 
    detail: "Moving Target Defense (MTD) strategy that predicts DDoS vectors and re-routes traffic dynamically.",
    stack: ["Networking", "AI", "Routing"],
    docLink: "https://docs.google.com/document/d/1Md5gwXgCEeXdMFcTIsnzbOHFDZXe6fYEAOzNdWoA-yA/edit?usp=sharing" 
  },
  { 
    id: "ZKUA_PROTO",
    name: "ZKUA", 
    short: "Zero-Knowledge Aggregator", 
    detail: "Federated learning protocol verifying model updates without exposing raw training data.",
    stack: ["ZK-Proofs", "PyTorch", "Federated"],
    docLink: "https://github.com/mintmojito-lite/zkua-federated-healthcare-verification" 
  },
  
  { 
    id: "ECHO_VEC",
    name: "Project Echo", 
    short: "Vector AI Transformer", 
    detail: "Internal AI tool utilizing vector embeddings to map complex queries to documentation.",
    stack: ["Vector DB", "Transformers", "NLP"],
    docLink: "https://docs.google.com/document/d/1TfKpQ8JtbNeurVRgMpKxhEKknwW5wLJrKsg_BaT5SII/edit?usp=sharing" 
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20 md:py-32" id="projects">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333] transition-colors duration-500 hover:text-white">
          Systems I <span className="text-cyan-900 transition-colors duration-500 hover:text-cyan-400">Designed</span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <TiltCard key={i} index={i} project={p} />
        ))}
      </div>
    </section>
  );
}

function TiltCard({ project, index }: { project: any, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  
  // Reduced tilt angle slightly for a more stable "Card" feel
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPct = (e.clientX - rect.left) / width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      style={{ perspective: 1000 }} 
      className="group relative h-full w-full cursor-pointer"
    >
      {/* CARD CONTAINER - Mimics the 'Wall of Portfolios' Profile Card aesthetics */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#050505] p-6 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-900/10"
      >
        {/* --- 3D GLOW EFFECT LAYER --- */}
        {/* This layer floats above the content (translateZ 50px) to create a 'glass sheen' effect */}
        <div 
            style={{ transform: "translateZ(50px)" }} 
            className="pointer-events-none absolute -inset-[100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
        </div>

        {/* 1. IDENTITY HEADER (Name + Handle) - Logos Removed */}
        <div style={{ transform: "translateZ(20px)" }} className="flex items-start gap-4 mb-6">
            <div>
                <h2 className="text-xl font-bold text-[#ddd] leading-tight group-hover:text-white transition-colors">
                    {project.name}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-medium text-[#444] uppercase tracking-wider">{project.short}</span>
                </div>
            </div>
        </div>

        {/* 2. ABOUT SECTION (Description) */}
        <div style={{ transform: "translateZ(10px)" }} className="mb-8 flex-grow">
            <p className="text-sm leading-relaxed text-[#666] group-hover:text-gray-300 transition-colors">
                {project.detail}
            </p>
        </div>

        {/* 3. FOOTER (Action Button Only) */}
        <div style={{ transform: "translateZ(15px)" }} className="mt-auto border-t border-[#1a1a1a] pt-4">
            <div className="flex flex-col gap-4">
                
                {/* Action Button - Animates on Scroll */}
                <motion.a 
                    href={project.docLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                    className="w-full block rounded-lg border border-[#222] bg-[#0a0a0a] py-3 text-center text-xs font-bold uppercase tracking-widest text-[#555] transition-all hover:bg-cyan-950/30 hover:text-cyan-400 hover:border-cyan-500/50"
                >
                    View System Details
                </motion.a>
            </div>
        </div>

      </motion.div>
    </motion.div>
  );
}