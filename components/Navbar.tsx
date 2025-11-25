"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// 1. Reusable NavLink component for consistent smooth hover animations
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="relative group">
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      {/* Animated Underline */}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-out group-hover:w-full" />
      {/* Subtle Glow Effect behind text */}
      <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-white/5 transition-transform duration-300 group-hover:scale-150" />
    </Link>
  );
};

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Custom Bezier for "Apple-like" smoothness
      }}
      className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-white/5 bg-black/10 px-8 py-4 backdrop-blur-md"
    >
      {/* Logo with a slight bounce on hover */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer text-xl font-semibold tracking-tight text-white"
      >
        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          mint.mojito_
        </span>
      </motion.div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-sm font-medium text-gray-400">
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
      </div>
    </motion.nav>
  );
}