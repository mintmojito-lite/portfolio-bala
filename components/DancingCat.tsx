"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function DancingCat() {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleInteractionStart = () => {
    setIsActive(true);
    // Attempt to play audio
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Keep it subtle
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented by browser (user interaction required first).");
        });
      }
    }
  };

  const handleInteractionEnd = () => {
    setIsActive(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <>
      {/* 🎵 THE MUSIC SOURCE */}
      {/* Ensure you have a file named 'cat-groove.mp3' in your public folder */}
      <audio ref={audioRef} src="/cat-groove.mp3" loop />

      <motion.div
        className="fixed bottom-6 left-6 z-[100] cursor-pointer origin-bottom-left"
        // Mouse Interactions (Desktop)
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        // Touch Interactions (Mobile)
        onClick={() => isActive ? handleInteractionEnd() : handleInteractionStart()}
        // The "Pop Up" Animation
        animate={{
          scale: isActive ? 2.5 : 1,   // Grows 2.5x larger
          opacity: isActive ? 1 : 0.5, // Becomes fully visible
          y: isActive ? -10 : 0        // Lifts up slightly
        }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        
        {/* Speech Bubble */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-8 left-10 w-max rounded-lg border border-cyan-500/30 bg-black/80 px-2 py-1 text-[8px] font-bold text-cyan-400 backdrop-blur-md"
            >
              Hola! 
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Cat GIF */}
        <div className="relative h-12 w-12">
          <Image 
            src="/cat.gif" 
            alt="System Guardian" 
            fill
            className="object-contain rendering-pixelated"
            unoptimized 
          />
        </div>
      </motion.div>
    </>
  );
}