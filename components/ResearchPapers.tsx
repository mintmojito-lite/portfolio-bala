"use client";
import { motion } from "framer-motion";

const papers = [
  { title: "SRAV", desc: "Decaying Data Lifecycle System (Submitted)" },
  { title: "PQER", desc: "Moving Target Defense for Networks" },
  { title: "ZKUA", desc: "ZK-Inspired Federated Verification" },
  { title: "EviGuard", desc: "Digital Chain of Custody" },
  { title: "Project Echo", desc: "Vector Transformer " },
];

export default function ResearchPapers() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20" id="research">
      <div className="mb-12 flex items-center gap-4">
        <h1 className="text-3xl font-bold text-[#333] transition-colors duration-500 hover:text-white">
          Research <span className="text-cyan-900 transition-colors duration-500 hover:text-cyan-400">Archive</span>
        </h1>
        <span className="h-px flex-1 bg-[#1a1a1a]" />
      </div>

      <div className="space-y-2">
        {papers.map((paper, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex cursor-default items-center justify-between border-b border-[#111] py-4 transition-colors hover:border-cyan-900/30"
          >
            <div>
              <span className="font-mono text-xs text-[#333] transition-colors group-hover:text-cyan-500">
                PAPER_ID_{i + 1}0{i}
              </span>
              <h3 className="text-lg font-bold text-[#444] transition-colors group-hover:text-white">
                {paper.title}
              </h3>
            </div>
            <span className="text-right text-sm text-[#333] transition-colors group-hover:text-gray-400">
              {paper.desc}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}