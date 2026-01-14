import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, ArrowUpRight, MapPin, 
  Code2, Terminal, Cpu, Globe, Copy, Check 
} from 'lucide-react';

// --- DATA PRIBADI (Bisa Diedit) ---
const PORTFOLIO_DATA = {
  name: "Galih Prayudo",
  role: "Full Stack Developer",
  location: "Jakarta, Indonesia",
  bio: "Saya menciptakan pengalaman digital yang estetik, fungsional, dan berpusat pada pengguna. Spesialis React & Modern UI.",
  stack: ["React", "Next.js", "Tailwind", "TypeScript", "Node.js", "PostgreSQL"],
  projects: [
    {
      id: 1,
      title: "Finance Dashboard",
      desc: "Platform manajemen keuangan real-time.",
      tech: "React • Recharts",
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "E-Commerce API",
      desc: "Sistem backend skala besar.",
      tech: "Node.js • Redis",
      color: "bg-emerald-600",
    }
  ]
};

// --- KOMPONEN KARTU (Bento Card) ---
const BentoCard = ({ children, className = "" }) => (
  <div className={`bg-neutral-900/50 border border-neutral-800 p-6 rounded-3xl hover:border-neutral-700 transition-colors duration-300 backdrop-blur-sm ${className}`}>
    {children}
  </div>
);

const SocialButton = ({ icon: Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="p-3 bg-neutral-800 rounded-full hover:bg-neutral-100 hover:text-black transition-all duration-300 border border-neutral-700 group"
  >
    <Icon size={20} className="group-hover:scale-110 transition-transform" />
  </a>
);

const TechBadge = ({ text }) => (
  <span className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-xs font-medium text-neutral-400 hover:text-white hover:border-neutral-500 transition-colors cursor-default">
    {text}
  </span>
);

// --- APP UTAMA ---
const App = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("email@anda.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-neutral-700 selection:text-white pb-20">
      
      {/* Background Effect (Noise & Gradient) */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
      </div>
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 pt-20 relative z-10">
        
        {/* HEADER / HERO SECTION */}
        <header className="mb-12 animate-fade-in-down">
          <div className="flex items-center gap-2 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-500 text-xs font-bold tracking-wider uppercase">Available for work</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Hi, I'm <span className="text-neutral-500">{PORTFOLIO_DATA.name.split(" ")[0]}.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-lg leading-relaxed">
            {PORTFOLIO_DATA.role} yang fokus membuat antarmuka web modern, cepat, dan interaktif.
          </p>
        </header>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* 1. LOCATION CARD (Small) */}
          <BentoCard className="md:col-span-1 flex flex-col justify-between h-48 group">
            <div className="bg-neutral-800/50 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-neutral-500 text-sm font-medium">Based in</p>
              <p className="text-white text-lg font-bold">{PORTFOLIO_DATA.location}</p>
            </div>
          </BentoCard>

          {/* 2. ABOUT / BIO CARD (Wide) */}
          <BentoCard className="md:col-span-2 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <Globe size={120} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">About Me</h3>
            <p className="text-neutral-400 leading-relaxed pr-10">
              {PORTFOLIO_DATA.bio} Saya menggabungkan desain teknis dengan kode bersih untuk membangun produk yang scalable.
            </p>
          </BentoCard>

          {/* 3. TECH STACK (Tall) */}
          <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col">
             <div className="mb-6">
                <div className="bg-neutral-800/50 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <Terminal size={20} />
                </div>
                <h3 className="text-white font-bold text-lg">Tech Stack</h3>
             </div>
             <div className="flex flex-wrap gap-2 mt-auto">
                {PORTFOLIO_DATA.stack.map((tech, idx) => (
                  <TechBadge key={idx} text={tech} />
                ))}
             </div>
          </BentoCard>

          {/* 4. PROJECTS (Dynamic Grid) */}
          {PORTFOLIO_DATA.projects.map((project) => (
             <BentoCard key={project.id} className="md:col-span-1 min-h-[200px] flex flex-col justify-between group cursor-pointer hover:bg-neutral-800/40">
                <div className="flex justify-between items-start">
                  <div className={`w-2 h-2 rounded-full ${project.color}`}></div>
                  <ArrowUpRight size={18} className="text-neutral-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                  <p className="text-neutral-500 text-sm mt-1 mb-3">{project.desc}</p>
                  <p className="text-xs font-mono text-neutral-400">{project.tech}</p>
                </div>
             </BentoCard>
          ))}

          {/* 5. CONTACT / SOCIALS CARD */}
          <BentoCard className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-1">Let's work together.</h3>
              <p className="text-neutral-400 text-sm">Tertarik berkolaborasi atau sekadar menyapa?</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-100 text-black rounded-full font-bold hover:bg-emerald-400 transition-all text-sm"
              >
                {copied ? <Check size={16}/> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
              <div className="h-6 w-px bg-neutral-800 mx-2"></div>
              <SocialButton icon={Github} href="https://github.com" />
              <SocialButton icon={Linkedin} href="https://linkedin.com" />
              <SocialButton icon={Mail} href="mailto:email@anda.com" />
            </div>
          </BentoCard>

        </div>

        <footer className="mt-20 text-center text-neutral-600 text-sm pb-10">
          <p>© 2026 {PORTFOLIO_DATA.name}. Built with React & Tailwind.</p>
        </footer>

      </div>
    </div>
  );
};

export default App;