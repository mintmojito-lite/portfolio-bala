"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectViewer({ url = "https://example.com" }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-6 flex h-[85vh] w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-md"
    >
      {/* 1. Mock Browser Header */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        {/* URL Bar Visual */}
        <div className="mx-auto flex w-1/2 items-center justify-center rounded-full bg-black/20 py-1 text-xs text-gray-500">
          <span className="truncate px-2">{url}</span>
        </div>
      </div>

      {/* 2. Content Area with Loading State */}
      <div className="relative flex-1 w-full h-full bg-black">
        
        {/* Loading Spinner (Only shows while iframe is loading) */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-900"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
                <p className="text-xs text-gray-400 animate-pulse">Loading Preview...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <iframe
          src={url}
          title="Project Preview"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          className="h-full w-full border-none bg-white" // bg-white ensures no transparency glitches
        />
        
        {/* Overlay to prevent iframe capturing mouse events while scrolling page */}
        {/* (Optional: Remove 'pointer-events-none' if you want users to interact with the site) */}
        <div className="absolute inset-0 pointer-events-none hover:pointer-events-auto" />
      </div>
    </motion.div>
  );
}