"use client";
import { motion } from "framer-motion";

export default function Playlist() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center" id="playlist">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-[#1a1a1a] bg-[#050505] p-10"
      >
        <h1 className="mb-6 text-2xl font-bold text-[#333] transition-colors duration-500 hover:text-white">
          Wanna listen to my <span className="text-cyan-900 transition-colors duration-500 hover:text-cyan-400">Playlist??</span>
        </h1>
        
        {/* Visualizer Animation */}
        <div className="flex justify-center gap-1 mb-8 h-12 items-end">
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-2 bg-cyan-900"
                    animate={{ height: ["20%", "80%", "40%"] }}
                    transition={{
                        duration: 0.5 + Math.random(),
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>

        <a 
            href="https://open.spotify.com/playlist/4xEfvljRrZv6312h6JSEPd?si=5bdabc67e20f4bc7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-[#333] px-8 py-3 text-sm font-medium text-white transition-all hover:bg-cyan-500 hover:border-cyan-500 hover:text-black hover:scale-105"
        >
            OPEN SPOTIFY
        </a>
      </motion.div>
    </section>
  );
}