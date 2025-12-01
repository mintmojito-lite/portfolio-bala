"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative mx-auto max-w-2xl sm:max-w-3xl md:max-w-4xl px-8 py-12 md:py-16" id="about">
      
      <div className="space-y-16">
        
        <StealthParagraph>
           <span className="text-white font-bold">About Me</span>.
        </StealthParagraph>

        <StealthParagraph>
          I've engineered <GlowSpan>Twelve real systems</GlowSpan> not the typical snake game, to-do app, or "hello world" clones. 
          These span <GlowSpan>cybersecurity, AI pipelines, medical analytics, NLP</GlowSpan>, and trust-focused architectures. 
          Check them below. If you want to see what actual engineering looks like, so let's skip the formalities and get to the real part.
        </StealthParagraph>

        <StealthParagraph>
          I genuinely love <GlowSpan>cooking</GlowSpan> not just as a hobby, but as something that feels fun, calming, and creative. 
          When I'm not experimenting in the kitchen, you'll probably find me listening to <GlowSpan>The Creator</GlowSpan> or <GlowSpan>Chinmayi</GlowSpan>, 
          or sitting with a sketchbook.
        </StealthParagraph>

        <StealthParagraph>
          Yeah, I know how to <GlowSpan>draw</GlowSpan> and I enjoy it more than I admit 🤓☝️
        </StealthParagraph>

      </div>

      <div className="mt-20 flex justify-end pr-6 font-mono text-[10px] text-[#222]">
        
      </div>

    </section>
  );
}

function StealthParagraph({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl leading-relaxed text-[#444] transition-colors duration-500 hover:text-gray-200 cursor-default"
    >
      {children}
    </motion.p>
  );
}

function GlowSpan({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-cyan-900 transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] cursor-crosshair">
      {children}
    </span>
  );
}