"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#333] transition-colors duration-500 hover:text-white">
          Hi, I’m{" "}
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
          "I believe making a system is better than flexing the sugarcoated certificates."
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