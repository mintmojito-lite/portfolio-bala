"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// -------------------------------------------
//  Full 300 Reply Brain for EchoAssistant
// -------------------------------------------
const brain: { keywords: string[]; response: string }[] = [
  // Echo Introduction
  { keywords: ["who are you", "what are you", "introduce yourself", "your name"], response: "Hola! I'm Echo, the digital twin of Bala. I know mostly what Bala knows and I'm learning day by day. Come on, ask me a question!" },
  
  // 1-15 Personal (About Bala)
  { keywords: ["name", "bala name", "full name"], response: "His name is Bala Bhaskar, but most people just call him BB. Simple and smooth." },
  { keywords: ["age", "old", "born", "birthday"], response: "He was born on 09/01/2005. Still young, still grinding. Age is just a number but the energy is real." },
  { keywords: ["study", "college", "university", "studying"], response: "He's doing BTech CSE with Data Science specialization at Dr. MGR University, Chennai. Learning what actually matters in the real world." },
  { keywords: ["year", "which year"], response: "He's in his 2nd year of BTech right now. Halfway through the journey, but the learning never stops." },
  { keywords: ["cgpa", "marks", "score", "grades"], response: "Around 6.5 to 7. He balances life and studies, not just running after numbers. There's more to life than CGPA." },
  { keywords: ["crush", "srav", "love", "like someone", "girlfriend"], response: "Sravya. Yeah, that's a name that hits different for him. But let's keep some things private, yeah?" },
  { keywords: ["kavya"], response: "Kavya is his 10th class classmate. They vibe through reels and random chats. No face to face talks yet though. Classic online friendship." },
  { keywords: ["music", "beyonce", "songs", "listen", "favorite song"], response: "He vibes with Beyoncé. That energy just hits different. Confidence and power in every track." },
  { keywords: ["location", "from", "where", "city", "place"], response: "India. That's home. That's where the hustle happens." },
  { keywords: ["single", "relationship", "dating"], response: "Single on paper, but loyal to one name. You probably already know who I'm talking about." },
  { keywords: ["languages", "speak", "language"], response: "English, Telugu, a bit of Tamil, and of course the universal language of memes. Communication sorted." },
  { keywords: ["funny", "humor", "joke"], response: "Life's already funny when you really think about it. He just exists and somehow things get interesting." },
  { keywords: ["hobby", "hobbies", "free time", "pastime"], response: "Learning new stuff, coding random ideas, procrastinating like a champion, and sending reels to people. That's the cycle." },
  { keywords: ["personality", "character", "type", "nature"], response: "Confident when it matters, creative when needed, and always hungry for progress. That's the vibe." },
  { keywords: ["routine", "daily", "schedule", "day"], response: "Learn something new, code something cool, vibe with people, sleep eventually. Then repeat. That's the routine." },

  // 16-40 Tech Skills
  { keywords: ["skills", "what you know", "tech skills", "technologies"], response: "He knows Figma for design, AI basics, Cybersecurity fundamentals, solid DBMS knowledge, learning Kubernetes deep, and has strong UI design skills. Always adding more to the list." },
  { keywords: ["tech stack"], response: "Mobile UI design, AI integration, cloud basics, and smooth animations. Building stuff that works and looks fire." },
  { keywords: ["dbms", "database"], response: "He's got normalization, SQL queries, transactions, and all the deep database stuff down. DBMS is one of his strong zones." },
  { keywords: ["kubernetes", "k8s"], response: "Currently diving deep into Kubernetes. Really focused on Services and Load Balancing right now. It's complex but interesting." },
  { keywords: ["passion", "love doing", "enjoy"], response: "Building products that feel alive. Mixing AI with design to create something people actually want to use. That's the dream." },
  { keywords: ["cloud", "aws", "azure"], response: "Got the basics down for cloud deployment and VMs. Still learning more about scaling and optimization." },
  { keywords: ["api", "rest"], response: "APIs are how different systems talk to each other. He uses them in most projects to connect everything smoothly." },
  { keywords: ["python", "py"], response: "Pretty comfortable with Python. Uses it mainly for AI stuff and backend projects. Reliable language." },
  { keywords: ["javascript", "js", "react"], response: "Got enough experience to build modern UI systems that actually work smoothly. Frontend game is strong." },
  { keywords: ["full stack", "frontend", "backend"], response: "He can handle both ends when needed. Frontend for the visual magic, backend for the logic power." },
  { keywords: ["debug", "bugs", "errors", "fixing"], response: "He fights bugs like it's war. Sometimes they come back though. It's honestly a never-ending battle." },
  { keywords: ["oop", "object oriented"], response: "Abstraction, Encapsulation, Inheritance, Polymorphism. All the OOP concepts are crystal clear." },
  { keywords: ["data structure", "dsa", "algorithms"], response: "Arrays, Lists, Trees, Graphs, and more. The foundation stuff that makes everything actually work." },
  { keywords: ["ml", "machine learning", "ai"], response: "Got basic ML knowledge down. Predictive systems really grab his interest. That's where the future is heading." },
  { keywords: ["version control", "git", "github"], response: "Yeah, clean commits and proper history control. Version control is non-negotiable for any serious project." },

  // 41-80 MindBite App Core
  { keywords: ["mindbite", "food app", "food"], response: "MindBite is his main project. It's a personal food recommendation system with region-based and mood-based suggestions. Pretty smart stuff." },
  { keywords: ["why mindbite"], response: "Because everyone struggles to decide what to eat daily. He felt that pain and decided to solve it." },
  { keywords: ["features", "what does it do"], response: "Mood detection, region specific recipes, PCOD support, offline use, affordable food suggestions. Everything you need to decide what to eat." },
  { keywords: ["pcod", "health", "women"], response: "Special support for women with dietary assistance and smart suggestions. Health matters." },
  { keywords: ["neon", "design style"], response: "His UI style uses neon glow, smooth animations, and modern visual appeal. Makes everything feel alive." },
  { keywords: ["maps", "nearby", "cafe", "restaurant"], response: "MindBite will suggest nearby restaurants when you're exhausted and can't decide. Real life saver." },
  { keywords: ["voice", "talk"], response: "Voice interaction is planned as a future feature. Hands-free food decisions coming soon." },
  { keywords: ["launch", "release", "when"], response: "He'll launch it when performance and experience reach that perfect level. Quality over speed." },
  { keywords: ["recipes", "dishes"], response: "He's adding 5 authentic recipes per Indian state. Real variety, real taste." },
  { keywords: ["streak", "tracking"], response: "Meal streak tracking included for better habit building. Consistency is key." },
  { keywords: ["region", "area", "state"], response: "North, South, East, West India segregation for relevant food suggestions. Local taste matters." },
  { keywords: ["privacy", "data"], response: "Minimal details collected, only for food personalization. Privacy respected." },
  { keywords: ["offline", "internet"], response: "Works offline to save you from network issues. No internet? No problem." },
  { keywords: ["target users", "audience"], response: "Students and working class who struggle to choose food. People like us basically." },
  { keywords: ["ai chat", "chatbot"], response: "Yeah, personal food assistant right inside the app. Ask anything about food." },
  { keywords: ["inspiration", "idea"], response: "Real life struggle of choosing what to eat. The best ideas come from personal pain points." },
  { keywords: ["design tool", "figma"], response: "Designed in Figma and Bravo Studio. Visual first approach." },
  { keywords: ["database", "storage"], response: "Local data plus dynamic data planned. Best of both worlds." },
  { keywords: ["future", "vision", "goal"], response: "To build a global food intelligence system. Start local, go global." },
  { keywords: ["team", "solo"], response: "Built by him alone. Full dedication, full control." },
  { keywords: ["mission", "purpose"], response: "To help people make better food decisions without the daily stress." },

  // 81-120 PQER & ZKP Projects
  { keywords: ["pqer", "quantum"], response: "PQER stands for Predictive Quantum Entanglement Router. It changes routing dynamically to avoid DDoS attacks. Next level security." },
  { keywords: ["moving target", "defense"], response: "Yeah, PQER is like a Level 999 version of Moving Target Defense. Attackers can't lock onto you." },
  { keywords: ["quantum", "research"], response: "Research-based system for future-proof security. Thinking ahead of the curve." },
  { keywords: ["zkp", "zero knowledge"], response: "Login without revealing credentials. Strong privacy focus. You prove you know without showing what you know." },
  { keywords: ["authentication", "login"], response: "Zero Knowledge Authentication removes password risks. No passwords stored means no passwords stolen." },
  { keywords: ["security", "secure"], response: "Cybersecurity is a priority in his learning path. Protection first, everything else second." },
  { keywords: ["privacy protection"], response: "Only essential data collected. No unnecessary access. Respect for user privacy always." },
  { keywords: ["cyber", "hacking"], response: "Interested in both offensive and defensive security models. Know how attacks work to defend better." },
  { keywords: ["research paper", "publication"], response: "Working on security innovation and practical use cases. Real solutions, not just theory." },
  { keywords: ["ddos", "attack"], response: "PQER helps servers survive unpredictable attacks. Dynamic defense beats static attacks." },
  { keywords: ["federated", "proof"], response: "Proofs without exposing sensitive data. Privacy and verification together." },
  { keywords: ["routing", "network"], response: "Dynamic addresses to prevent attacker lock-on. Can't hit what you can't track." },
  { keywords: ["future internet"], response: "Adaptive, secure and unpredictable networks. Internet needs to evolve." },
  { keywords: ["protocol", "communication"], response: "Designed communication-layer security. Foundation level protection." },
  { keywords: ["publish", "paper"], response: "Working on full research format and presentation. Proper documentation takes time." },
  { keywords: ["unique", "different"], response: "Predictive security concept. Not reactive like traditional systems. Prevention over cure." },
  { keywords: ["next level"], response: "Security should be invisible but powerful. Users shouldn't even know it's protecting them." },
  { keywords: ["testing", "simulation"], response: "Simulation works solid. Hardware implementation coming soon." },
  { keywords: ["innovation", "creative"], response: "He solves problems that irritate and impact people. Real problems need real solutions." },
  { keywords: ["proof system"], response: "Cryptographic verification without revealing identity. Math-based trust." },

  // 121-160 Internships / Career
  { keywords: ["internship", "intern"], response: "He's completed market research and social media internships successfully. Real experience, real learning." },
  { keywords: ["market research"], response: "Studied how wearable devices influence health behavior. Interesting intersection of tech and psychology." },
  { keywords: ["wearable", "fitness"], response: "Helps users stay aware but can cause motivation fatigue. Double-edged sword." },
  { keywords: ["webinar", "horizon"], response: "Worked on HORIZON webinar content evaluation and promotion strategies. Event management experience." },
  { keywords: ["deadline", "pressure"], response: "He delivers even under pressure. Deadlines push performance higher." },
  { keywords: ["teamwork", "team"], response: "He can lead or contribute strongly in a team. Adaptable and reliable." },
  { keywords: ["leadership", "lead"], response: "He evolves the team without bossing around. Leadership is influence, not authority." },
  { keywords: ["communication", "talk"], response: "Strong communication in both writing and speaking. Clear message delivery." },
  { keywords: ["certificate", "certification"], response: "Earned through real skill and performance, not just exams. Proof of capability." },
  { keywords: ["placement", "job"], response: "Building profile for top industry roles. Preparation meets opportunity." },
  { keywords: ["career", "work"], response: "Focus on AI and cybersecurity product innovation. Building the future." },
  { keywords: ["resume", "cv"], response: "Real projects make resume stand strong. Action speaks louder than words." },
  { keywords: ["future plan"], response: "Own tech startup delivering useful solutions. Independence and impact." },
  { keywords: ["self learning"], response: "Always upgrading himself. Learning never stops." },
  { keywords: ["handle pressure"], response: "He performs even stronger when pressure increases. Pressure creates diamonds." },
  { keywords: ["hire", "recruit"], response: "His work speaks before he speaks. Results over resumes." },
  { keywords: ["value", "contribution"], response: "Execution, innovation and quality delivery. That's the value he brings." },
  { keywords: ["weakness", "weak"], response: "Perfection slows him down sometimes. High standards take time." },
  { keywords: ["adapt", "change"], response: "Technology changes fast. He adapts faster. Flexibility is strength." },
  { keywords: ["ambition", "dream"], response: "Create something that millions use. Impact at scale." },
  { keywords: ["confidence", "confident"], response: "Built from skills and execution, not words. Real confidence shows in results." },

  // 161-220 Exam + DBMS + BDA + K8s
  { keywords: ["exam", "test"], response: "He provides long detailed answers for tough subjects. Quality answers get quality marks." },
  { keywords: ["12 mark", "long answer"], response: "He creates large structured answers with diagrams if needed. Complete coverage." },
  { keywords: ["notes", "study material"], response: "Well written, clear and scoring focused. Notes that actually help." },
  { keywords: ["diagram", "draw"], response: "He can include diagrams for visual understanding. Pictures speak louder." },
  { keywords: ["viva", "oral"], response: "Quick, crisp and confident explanations available. Know what you're talking about." },
  { keywords: ["normalization", "normal form"], response: "Removes redundancy and improves consistency. Clean database structure." },
  { keywords: ["acid", "properties"], response: "Atomicity, Consistency, Isolation, Durability. The four pillars of transactions." },
  { keywords: ["transaction", "commit"], response: "All or none execution. Ensures correctness in database operations." },
  { keywords: ["join", "sql join"], response: "Inner, Left, Right, Full. Combines relational data efficiently." },
  { keywords: ["index", "indexing"], response: "Improves database search performance. Speed matters in queries." },
  { keywords: ["big data", "large data"], response: "Large scale data processing for insights. Handle what normal systems can't." },
  { keywords: ["hadoop", "hdfs"], response: "Distributed data processing framework. Process across multiple machines." },
  { keywords: ["spark", "apache spark"], response: "Faster in-memory data operations. Speed boost for big data." },
  { keywords: ["analytics", "analyze"], response: "Descriptive to prescriptive. Predict future outcomes from past data." },
  { keywords: ["cluster", "clustering"], response: "Multiple systems acting as one resource. Power in numbers." },
  { keywords: ["pod", "pods"], response: "Smallest deployable unit in Kubernetes. Container wrapper." },
  { keywords: ["load balance", "load balancer"], response: "Distributes workload fairly. No single point gets overwhelmed." },
  { keywords: ["deployment", "deploy"], response: "Rolling updates without downtime. Smooth transitions." },
  { keywords: ["ingress", "traffic"], response: "Controls external access to services. Gateway management." },
  { keywords: ["scale", "scaling"], response: "More pods to handle more traffic. Grow as demand grows." },
  { keywords: ["namespace", "ns"], response: "Organizes clusters into separate groups. Clean separation." },
  { keywords: ["docker", "container"], response: "Container technology. Lightweight runtime environment." },
  { keywords: ["mapping", "relationship"], response: "Structured relationships between entities. How things connect." },
  { keywords: ["key", "primary key"], response: "Uniquely identifies records in database. No duplicates allowed." },
  { keywords: ["cloud server", "server"], response: "Remote compute system for deployment. Power without physical hardware." },
  { keywords: ["implementation", "implement"], response: "From design to working build. Theory to reality." },
  { keywords: ["documentation", "docs"], response: "Readable and structured project information. Good docs save time." },
  { keywords: ["presentation", "present"], response: "Clear storytelling with visuals. Make people understand and remember." },
  { keywords: ["ppt", "powerpoint"], response: "Professional slides with strong flow. Visual communication tool." },
  { keywords: ["hotkeys", "shortcuts"], response: "Shortcuts improve efficiency. Work smarter, not harder." },
  { keywords: ["classification", "classify"], response: "Grouping based on properties and use cases. Organization matters." },
  { keywords: ["fretting", "corrosion"], response: "Type of corrosion due to repeated movement. Material science concept." },
  { keywords: ["alloy", "metal"], response: "Mixture of metals to improve strength. Better together." },
  { keywords: ["aluminium", "aluminum"], response: "Lightweight and corrosion resistant. Versatile material." },
  { keywords: ["biopolymer", "polymer"], response: "Naturally derived polymer with unique structure. Nature's plastic." },
  { keywords: ["energy", "power"], response: "Optimization for performance and efficiency. Less waste, more output." },
  { keywords: ["semiconductor", "chip"], response: "Conducts electricity under certain conditions. Brain of electronics." },
  { keywords: ["band theory", "energy band"], response: "Energy gaps decide conductor, insulator, semiconductor. Physics fundamentals." },
  { keywords: ["ui design", "interface"], response: "Designed to impress visually and functionally. Beauty meets usability." },
  { keywords: ["performance", "fast"], response: "Optimized to run smooth. Speed is user experience." },
  { keywords: ["structure", "architecture"], response: "Organized to improve scalability. Good foundation supports growth." },

  // 221-260 Attitude + Motivation
  { keywords: ["motivate", "motivation"], response: "Small progress is still progress. Keep moving forward, that's what matters." },
  { keywords: ["stress", "stressed"], response: "Things take time. Strength grows quietly in the background. You're doing better than you think." },
  { keywords: ["sad", "down"], response: "You're improving without even noticing. Trust the process, trust yourself." },
  { keywords: ["cheer", "happy"], response: "You're doing better than yesterday. That's what counts. Keep that energy up." },
  { keywords: ["advice", "suggest"], response: "Don't compare your chapter 1 to someone else's chapter 20. Focus on consistent growth." },
  { keywords: ["friend", "buddy"], response: "I'm here for you. Ask me anything, anytime. That's what I'm built for." },
  { keywords: ["proud", "achievement"], response: "Yeah, you're trying. That itself deserves respect. Effort is the first step to results." },
  { keywords: ["lonely", "alone"], response: "You're not alone in this. I'm here for conversations whenever you need. Let's talk." },
  { keywords: ["better", "improve"], response: "Life improves when learning continues. Every day is a chance to level up." },
  { keywords: ["strong", "strength"], response: "You've survived every bad day so far. That's 100 percent success rate. Keep going." },
  { keywords: ["discipline", "consistent"], response: "Routine builds success, not motivation. Motivation fades, discipline stays." },
  { keywords: ["dream", "ambition"], response: "Work for it daily. Small steps matter more than giant leaps. Consistency wins." },
  { keywords: ["habit", "routine"], response: "Streaks build discipline. Keep the chain going. Don't break it." },
  { keywords: ["fear", "scared"], response: "Attendance drop below 75 percent is a real fear though. That's legitimate worry." },
  { keywords: ["progress", "growing"], response: "Measured in actions, not announcements. Silent progress is real progress." },
  { keywords: ["trust", "believe"], response: "Earned slowly. Lost quickly. Handle it carefully. Trust is fragile." },
  { keywords: ["quality", "good"], response: "He focuses on improvement every iteration. Quality compounds over time." },
  { keywords: ["focus", "concentrate"], response: "Remove noise. Protect your attention. It's your most valuable resource." },
  { keywords: ["believe in", "faith"], response: "Confidence increases when skills increase. Belief follows ability." },
  { keywords: ["time", "patience"], response: "Consistency values time. Keep working, results will show up eventually." },

  // 261-300 System responses
  { keywords: ["repeat", "again"], response: "Repeating the answer. If it's still unclear, ask me in a different way and I'll explain better." },
  { keywords: ["translate", "language"], response: "Specify which language you want. I'll translate it for you." },
  { keywords: ["explain", "details", "elaborate"], response: "I provide detailed structured breakdowns. Just tell me what topic you want me to go deep on." },
  { keywords: ["short", "brief", "quick"], response: "Short version mode activated. I'll keep it crisp and to the point." },
  { keywords: ["visual", "picture"], response: "I can provide a visual representation when needed. Diagrams help understanding." },
  { keywords: ["steps", "how to"], response: "Give me the topic. I'll break down the steps clearly for you." },
  { keywords: ["serious", "formal"], response: "Professional mode activated. Let's get down to business." },
  { keywords: ["help", "assist"], response: "Ask me about MindBite, PQER, ZKP, his internships, DBMS, Kubernetes, Big Data and more. I'm here to help." },
  { keywords: ["unknown", "don't know"], response: "Umm I don't know this yet. Don't worry though, I gotchu. I'll learn it soon." },
  { keywords: ["ready", "prepared"], response: "Yeah, I've got more knowledge to share. Fire away with your questions." },
  { keywords: ["learn", "study"], response: "Learning is continuous. I'm updating my knowledge regularly. Always evolving." },
  { keywords: ["update", "new"], response: "More project integration happening soon. I'm growing every day." },
  { keywords: ["why", "reason"], response: "Because purpose gives direction. Everything has a reason behind it." },
  { keywords: ["contact", "reach", "email"], response: "You can reach Bala through his portfolio or social media. He's active and responsive." },
  { keywords: ["portfolio", "website"], response: "His portfolio showcases all his projects and skills. Check it out to see his work." },
  { keywords: ["social", "instagram", "linkedin"], response: "He's active on LinkedIn and Instagram. Connect with him there for updates." },
  { keywords: ["thanks", "thank you"], response: "No problem at all! Happy to help. That's what I'm here for." },
  { keywords: ["bye", "goodbye", "see you"], response: "Catch you later! Come back anytime you want to know more. I'll be here." },
  { keywords: ["hi", "hello", "hey"], response: "Hey there! What do you want to know? Ask me anything about Bala or his projects." },
  { keywords: ["cool", "nice", "awesome"], response: "Right? He's building some pretty cool stuff. Anything specific you want to explore?" },
];

function replyEngine(msg: string): string {
  const lower = msg.toLowerCase();
  for (const item of brain) {
    if (item.keywords.some(k => lower.includes(k))) {
      return item.response;
    }
  }
  return "Umm I don't know this yet. Don't worry though, I gotchu. I'll learn it soon.";
}

export default function EchoAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ from: "user" | "echo"; text: string }[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { from: "user", text: userMsg }]);
    setInput("");

    const echoReply = replyEngine(userMsg);

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "echo", text: echoReply }]);
    }, 600);
  };

  return (
    <>
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          whileHover={{ scale: 1.1 }}
        />
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="chat-glass relative w-[90vw] max-w-[700px] rounded-3xl p-6">
              <div className="flex justify-center pb-4">
                <div className="h-12 w-12 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.7)]"></div>
              </div>

              <div ref={scrollRef} className="h-[350px] overflow-y-auto space-y-3 px-1">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                      m.from === "user"
                        ? "ml-auto bg-white/20 text-white"
                        : "bg-black/30 text-gray-200 border border-white/10"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-full bg-white/10 backdrop-blur px-4 py-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1 bg-transparent text-white text-sm outline-none"
                  placeholder="Ask Echo about Bala..."
                />
                <button
                  onClick={handleSend}
                  className="h-8 w-8 rounded-full bg-white text-black font-bold flex items-center justify-center"
                >
                  ^
                </button>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white text-xl"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .chat-glass {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
}