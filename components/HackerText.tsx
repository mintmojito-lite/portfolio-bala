"use client";
import { useState, useEffect } from "react";

const CHARS = "!@#$%^&*():{};|,.<>/?";

export default function HackerText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text);
  
  useEffect(() => {
    let iteration = 0;
    
    // Scramble Logic
    const interval = setInterval(() => {
      setDisplay((prev) => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            // Return random char
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3; // Speed
    }, 30);

    // Cleanup function to kill the loop if component unmounts
    return () => clearInterval(interval);
    
  }, [text]); // dependency array depends on 'text' to support changing titles

  return (
    <h1 className={`font-mono cursor-default ${className}`}>
      {display}
    </h1>
  );
}