"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- 🌌 DATA: The Chaos Archives ---
const skills = [
  {
    name: "Research & Systems",
    short: "Architectures so overengineered even God asks for documentation.",
    detail: "Bala builds systems that look like they came out of a research paper written at 3AM during an identity crisis. Distributed trust boundaries, lifecycle decay rules, cryptographic timestamping — all because Bala can't trust anyone, including his own code. SRAV, PQER, ZKUA — basically he creates architectures that could run a small nation or cause one to collapse.",
    orbit: 1, // Inner Ring
  },
  {
    name: "Zero-Knowledge Proofs",
    short: "Proof systems for people with trust issues (like Bala).",
    detail: "ZK systems but make them practical, cursed, and fueled by paranoia. Bala uses ZK logic to validate computations without revealing the data, which is ironic because he overshares everything else in life. His ZKUA model literally proves things happened without showing anything — just like how Bala explains why he's single.",
    orbit: 2, // Middle Ring
  },
  {
    name: "Threat Modeling",
    short: "Basically overthinking but with diagrams and vibes.",
    detail: "Bala models attackers like they're Pokemon evolutions. PQER uses predictive heuristics to shift attack surfaces before attackers even blink. It's like he took his 4AM intrusive thoughts and weaponized them into cybersecurity blueprints. If anxiety was a job, this would be it.",
    orbit: 3, // Outer Ring
  },
  {
    name: "OSINT",
    short: "Instagram OSINT? FBI-level. Without touching her DMs (respectfully).",
    detail: "Bala's OSINT skills are so strong he can find your crush's archived photos, previous usernames, and that cursed Facebook profile from 2015 where she had braces. Basel OSINT certified AND emotionally damaged — a lethal combination. He gathers data like cyber Sherlock Holmes but only uses it to cry.",
    orbit: 1, 
  },
  {
    name: "Crypto Systems",
    short: "Chains more secure than Bala’s attachment issues.",
    detail: "EviGuard, SRAV, all running on chains of hashed metadata stronger than Bala’s will to live during finals. Signed checkpoints, tamper-proof lineage, expiration-bound trust windows — basically Bala built a system that never lies, unlike half the people he’s met.",
    orbit: 2,
  },
  {
    name: "Vector Models & ML",
    short: "Transformers, embeddings, and models that roast him silently.",
    detail: "Project Echo is Bala’s child. A vector-based transformer model so moody it could replace Bala’s therapist. High-dimensional embeddings, similarity mapping, vector clustering — all optimized while Bala hasn't optimized his sleep schedule since 2021.",
    orbit: 3,
  },
  {
    name: "Math Algorithms",
    short: "Calculus, probability, and emotional damage functions.",
    detail: "Bala makes decay curves for SRAV, scoring functions for PQER, and probability models for ML — but still can’t calculate why his crush left him on seen. Math-based heuristics, survival curves, hybrid scoring — basically if math was trauma, this is the output.",
    orbit: 2,
  },
  {
    name: "Cooking (Lemon Maggi)",
    short: "Michelin-star energy until he adds lemon to Maggi 💀.",
    detail: "Bala’s cooking ranges from ‘chef kiss’ to ‘call ambulance’. Fusion continental + Indian dishes, chaotic experiments, and the legendary Lemon Maggi arc that nearly caused a dimensional collapse. His cooking philosophy: if it tastes good, pretend it was intentional.",
    orbit: 3,
  },
  {
    name: "Drawing & Art",
    short: "Sketches cleaner than Bala’s browser history.",
    detail: "Minimalist line art, biopolymer diagrams, conceptual sketches — all created while procrastinating assignments. Bala draws like a calm zen monk despite living like a goblin at 2AM. Art is therapy, but cheaper.",
    orbit: 1,
  },
  {
    name: "Poetry & Writing",
    short: "Lines deeper than Bala’s GPA fluctuations.",
    detail: "Bala writes poems powered by sleep deprivation and unprocessed emotions. Subtle rhymes, raw thoughts, romantic metaphors — and if you want the ACTUAL unfiltered poems, email: flyingduck347@gmail.com. But read at your own risk.",
    orbit: 2,
  },
];

// --- 🪐 ORBIT CONFIGURATION ---
const ORBITS = [
  { radius: 170, duration: 40, reverse: false }, // Inner
  { radius: 280, duration: 60, reverse: true },  // Middle
  { radius: 390, duration: 80, reverse: false }, // Outer
];

export default function GalaxySkills() {
  const [selected, setSelected] = useState<typeof skills[number] | null>(null);

  return (
    <div className="relative flex h-[900px] w-full items-center justify-center overflow-hidden bg-[#0e0e0f]">
      
      {/* 1. BACKGROUND STARS (Static parallax feel) */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            initial={{ opacity: 0.1, scale: 0.5, x: Math.random() * 1000, y: Math.random() * 800 }}
            animate={{ opacity: [0.1, 0.8, 0.1], scale: [0.5, 1.2, 0.5] }}
            transition={{ duration: 3 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>

      {/* 2. THE CENTER STAR (Bala) */}
      <div className="relative z-20">
        {/* Glow Effects */}
        <div className="absolute -inset-20 rounded-full bg-purple-600/20 blur-[60px] animate-pulse" />
        <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-[40px]" />
        
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative z-20 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/20 bg-black/50 text-center backdrop-blur-xl"
        >
          <h1 className="text-xl font-bold tracking-widest text-white">BALA</h1>
          <p className="text-[10px] text-purple-300">CHAOS CORE</p>
        </motion.div>
      </div>

      {/* 3. ORBITAL RINGS */}
      {ORBITS.map((orbit, orbitIndex) => {
        // Filter skills for this specific orbit ring
        const orbitSkills = skills.filter((s) => s.orbit === orbitIndex + 1);
        
        return (
          <motion.div
            key={orbitIndex}
            className="absolute flex items-center justify-center rounded-full border border-white/5"
            style={{ 
              width: orbit.radius * 2, 
              height: orbit.radius * 2 
            }}
            animate={{ rotate: orbit.reverse ? -360 : 360 }}
            transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
          >
            {orbitSkills.map((skill, index) => {
              // Calculate angle to space them evenly on this ring
              const angle = (index / orbitSkills.length) * 360;
              
              return (
                <div
                  key={skill.name}
                  className="absolute"
                  style={{
                    transform: `rotate(${angle}deg) translate(${orbit.radius}px)`,
                  }}
                >
                  {/* COUNTER-ROTATION: Keeps text upright as the ring spins */}
                  <motion.div
                    animate={{ rotate: orbit.reverse ? 360 : -360 }}
                    transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(168, 85, 247, 0.4)" }}
                      onClick={() => setSelected(skill)}
                      className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    >
                      {/* Little dot indicator */}
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                      {skill.name}
                    </motion.button>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        );
      })}

      {/* 4. DETAILS MODAL (Smooth AnimatePresence) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)} // Click outside to close
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
              className="relative max-w-lg overflow-hidden rounded-2xl border border-white/20 bg-[#1a1a1c] p-8 shadow-2xl"
            >
              {/* Modal Background Gradient */}
              <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]" />
              
              <div className="relative z-10">
                <h2 className="mb-2 text-3xl font-bold text-white">{selected.name}</h2>
                <p className="mb-6 font-mono text-sm text-purple-300 italic">
                  "{selected.short}"
                </p>
                <div className="h-px w-full bg-white/10 mb-6" />
                <p className="text-gray-300 leading-relaxed text-sm">
                  {selected.detail}
                </p>
                
                <button
                  onClick={() => setSelected(null)}
                  className="mt-8 w-full rounded-lg bg-white/10 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 hover:text-cyan-400"
                >
                  Dismiss Chaos
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}