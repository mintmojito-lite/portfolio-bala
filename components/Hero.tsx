"use client";
import { motion } from "framer-motion";
import CanvasCursor from "./ui/canvas-cursor";

export default function Hero() {
  return (
    <section id="hero-cursor-area" className="relative flex w-full flex-col items-center overflow-hidden px-6 text-center bg-transparent pt-0 pb-12">
      {/* The Canvas Cursor */}
      <div className="absolute inset-0 z-[1]">
        <CanvasCursor />
      </div>

      {/* Content (Top Layer) */}
      <div className="relative z-10 max-w-5xl">
        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#333] transition-colors duration-500 hover:text-white">
          Hi, I'm{" "}
          <span className="text-cyan-900 transition-colors duration-500 hover:text-cyan-400">
            Bala Bhaskar
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-[#555] font-mono transition-colors duration-500 hover:text-gray-300"
        >
          "I believe making a systems is better than flexing the sugarcoated certificates."
        </motion.p>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-[#222]"
      >
        ↓
      </motion.div>
    </section>
  );
}
