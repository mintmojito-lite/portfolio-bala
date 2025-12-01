"use client";
import { motion } from "framer-motion";

export default function EchoCircle({ isThinking }: { isThinking: boolean }) {
  return (
    <motion.div
      animate={{
        scale: isThinking
          ? [1, 1.15, 1] // faster pulse
          : [1, 1.08, 1] // normal breathing
      }}
      transition={{
        duration: isThinking ? 0.9 : 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="mx-auto h-40 w-40 rounded-full border-2 border-white/80 flex items-center justify-center relative"
    >
      {isThinking && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex gap-2">
            <motion.span
              className="h-2 w-2 bg-white rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            />
            <motion.span
              className="h-2 w-2 bg-white rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: 0.15 }}
            />
            <motion.span
              className="h-2 w-2 bg-white rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 0.5, delay: 0.3 }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
