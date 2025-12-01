"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import EchoChat from "./EchoChat";

export default function EchoScreen() {
  const [start, setStart] = useState(false);

  return (
    <section className="py-32 border-t border-white/10">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white text-center mb-6"
      >
        Try <span className="text-cyan-400">Echo</span> Here
      </motion.h2>

      {!start ? (
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => setStart(true)}
            className="px-8 py-3 border border-white/20 rounded-xl text-white text-lg"
          >
            Get Started
          </motion.button>
        </div>
      ) : (
        <EchoChat />
      )}
    </section>
  );
}
