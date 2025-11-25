"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillModal({ skill, onClose }: { skill: any; onClose: () => void }) {
  return (
    <AnimatePresence>
      {skill && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1d] p-8 shadow-2xl"
          >
            {/* Top Gradient Line */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500" />

            <h2 className="mb-4 text-2xl font-bold text-white">{skill.name}</h2>
            
            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <p className="whitespace-pre-line text-lg leading-relaxed text-gray-300">
                {skill.detail}
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onClose}
                className="rounded-lg bg-white/5 px-6 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-cyan-400 transition-colors border border-white/5"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}