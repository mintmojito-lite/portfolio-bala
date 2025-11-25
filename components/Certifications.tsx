"use client";

const organizations = [
  { 
    id: "LF", 
    name: "Linux Foundation", 
    courses: [
      "Open Source RT-Thread RTOS on RISC-V (LFD123)",
      "GitHub for Open Standards Development (LFD140)",
      "Secure AI/ML-Driven Software Development (LFEL1012)",
      "Web Auth & API Security"
    ]
  },
  { 
    id: "DCSA", 
    name: "Defense Counterintelligence and Security Agency", 
    courses: [
      "Introduction to DOD Zero Trust",
      "Enterprise Mission Assurance Support Service (eMASS)",
      "ED508 Research Methods, Data Analysis & Reporting",
      "ED509 Assessment and Evaluation of DOD Security Programs",
      "ED511 Leadership in DOD Security",
      "ED512 Effective Communication in DOD Security",
      "ED514 Cybersecurity and Oversight of Info System Security"
    ]
  },
  { 
    id: "NVIDIA", 
    name: "NVIDIA Deep Learning Institute", 
    courses: [
      "Synthetic Data Generation in Isaac Sim",
      "Leveraging ROS 2 & HIL in Isaac Sim",
      "Accelerate Data Science Workflows (Zero Code)",
      "Getting Started with AI on Jetson Nano",
      "An Even Easier Introduction to CUDA",
      "Disaster Risk Monitoring Using Satellite Imagery",
      "Building RAG Agents with LLMs"
    ]
  },
  { 
    id: "BIG", 
    name: "Basel Institute on Governance", 
    courses: ["OSINT Certification"] 
  },
  { 
    id: "WHO", 
    name: "World Health Organization", 
    courses: ["HEARTS Technical Package"] 
  },
  { 
    id: "UNESCO", 
    name: "United Nations Educational, Scientific and Cultural Organization", 
    courses: ["OER Development"] 
  },
  { 
    id: "FEMA", 
    name: "Federal Emergency Management Agency", 
    courses: ["IPAWS & Hazardous Materials"] 
  },
];

export default function Certifications() {
  return (
    <section className="py-20 md:py-32 w-full overflow-hidden" id="learning">
      <div className="mx-auto max-w-7xl px-8 mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333] transition-colors duration-500 hover:text-white">
          My Learning <span className="text-cyan-900 transition-colors duration-500 hover:text-cyan-400">Ecosystem</span>
        </h1>
      </div>

      <div className="relative w-full flex overflow-hidden mask-gradient">
        <div className="flex animate-marquee items-start hover-pause">
          
          {/* We map twice to create the seamless loop effect */}
          {[...organizations, ...organizations].map((org, i) => (
            <div 
              key={i} 
              // ✅ FIX: w-[80vw] means "80% of screen width" on mobile.
              // ✅ FIX: md:w-[400px] means "400px" on Desktop (medium screens and up).
              className="group/card mx-4 md:mx-6 w-[80vw] md:w-[400px] flex-shrink-0 cursor-default rounded-xl border border-[#1a1a1a] bg-[#050505] p-6 transition-colors hover:border-cyan-500/30 hover:bg-[#080808]"
            >
              <div className="mb-4">
                {/* Full Name */}
                <h3 className="text-lg font-bold text-[#444] transition-colors group-hover/card:text-white leading-tight">
                  {org.name}
                </h3>
              </div>
              
              {/* Role Reveal - Now handles lists */}
              <div className="mt-2 h-0 overflow-hidden transition-all duration-500 group-hover/card:h-auto">
                <div className="pt-4 border-t border-[#1a1a1a]">
                  <p className="text-[10px] font-mono text-cyan-600 mb-2 uppercase tracking-wider">Trained Modules:</p>
                  <ul className="space-y-1">
                    {org.courses.map((course, j) => (
                      <li key={j} className="text-xs font-mono text-gray-400 leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-800 mt-0.5">›</span> {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mask-gradient {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}