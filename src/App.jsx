import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, ArrowUpRight, MapPin, 
  Terminal, Copy, Check, Sparkles, Layers, Send
} from 'lucide-react';

// --- DATA PRIBADI (Ganti Email Disini) ---
const PORTFOLIO_DATA = {
  name: "Galih Prayudo",
  email: "galih@example.com", // Email Anda
  role: "Full Stack Developer",
  location: "Jakarta, Indonesia",
  bio: "Membangun pengalaman web yang estetik dan performa tinggi. Fokus pada React, modern UI, dan skalabilitas.",
  stack: ["React", "Next.js", "Tailwind", "TypeScript", "Node.js", "PostgreSQL"],
  projects: [
    {
      id: 1,
      title: "Finance Dashboard",
      desc: "Manajemen aset real-time dengan visualisasi data.",
      tech: "React • Recharts",
      tag: "Fintech",
    },
    {
      id: 2,
      title: "E-Commerce API",
      desc: "Backend high-traffic untuk toko online skala besar.",
      tech: "Node.js • Redis",
      tag: "Backend",
    }
  ]
};

// --- KOMPONEN KECIL ---

const BentoCard = ({ children, className = "", onClick }) => (
  <div onClick={onClick} className={`bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 relative overflow-hidden ${className}`}>
    {children}
  </div>
);

const SocialButton = ({ icon: Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="p-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 group"
  >
    <Icon size={20} className="group-hover:scale-110 transition-transform" />
  </a>
);

const TechBadge = ({ text }) => (
  <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-default">
    {text}
  </span>
);

// --- APP UTAMA ---
const App = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20 relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Navbar / Header Button */}
      <nav className="fixed top-6 right-6 z-50">
        <button 
          onClick={scrollToBottom}
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 hover:scale-105 transition-all"
        >
          <Mail size={16} />
          <span>Hire Me</span>
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-20 relative z-10">
        
        {/* HERO HEADER */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to Work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Hi, I'm {PORTFOLIO_DATA.name.split(" ")[0]}. <br />
            <span className="text-slate-400">Creative Developer.</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            {PORTFOLIO_DATA.bio}
          </p>
        </header>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          
          {/* 1. PHOTO & ROLE */}
          <BentoCard className="md:col-span-2 flex items-center justify-between bg-gradient-to-br from-white to-slate-50">
             <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Role</p>
                <h3 className="text-2xl font-bold text-slate-900">{PORTFOLIO_DATA.role}</h3>
             </div>
             <div className="h-16 w-16 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
               <Sparkles size={24} className="text-indigo-500" />
             </div>
          </BentoCard>

          {/* 2. LOCATION */}
          <BentoCard className="md:col-span-1 flex flex-col justify-center group">
            <div className="mb-3 p-3 bg-indigo-50 w-fit rounded-xl text-indigo-600 group-hover:scale-110 transition-transform">
              <MapPin size={24} />
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase">Based in</p>
            <p className="text-slate-900 font-bold">{PORTFOLIO_DATA.location}</p>
          </BentoCard>

          {/* 3. CONTACT CARD (YANG SEKARANG LEBIH MENONJOL) */}
          <a href={`mailto:${PORTFOLIO_DATA.email}`} className="md:col-span-1 block group">
            <BentoCard className="h-full flex flex-col justify-center items-center gap-3 bg-slate-900 !border-slate-900 text-white cursor-pointer group-hover:bg-slate-800 transition-colors">
               <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                  <Send size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
               </div>
               <p className="font-bold text-sm">Email Me</p>
            </BentoCard>
          </a>

          {/* 4. TECH STACK */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col">
             <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                  <Terminal size={20} />
                </div>
                <h3 className="text-slate-900 font-bold text-lg">Tech Stack</h3>
             </div>
             <div className="flex flex-wrap content-start gap-2 h-full">
                {PORTFOLIO_DATA.stack.map((tech, idx) => (
                  <TechBadge key={idx} text={tech} />
                ))}
             </div>
          </BentoCard>

          {/* 5. PROJECTS LIST */}
          <div className="md:col-span-2 md:row-span-2 flex flex-col gap-5">
            {PORTFOLIO_DATA.projects.map((project) => (
              <BentoCard key={project.id} className="flex-1 flex flex-col justify-center group cursor-pointer border-l-4 border-l-transparent hover:border-l-indigo-500">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold uppercase text-slate-500 tracking-wide">{project.tag}</span>
                    <ArrowUpRight className="text-slate-300 group-hover:text-indigo-600 transition-colors" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{project.title}</h4>
                  <p className="text-slate-500 text-sm mb-3">{project.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Layers size={12} />
                    {project.tech}
                  </div>
              </BentoCard>
            ))}
          </div>

          {/* 6. BIG CONTACT SECTION (FOOTER) */}
          <BentoCard className="md:col-span-4 flex flex-col md:flex-row items-center justify-between gap-6 bg-white border-dashed border-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Let's work together.</h3>
              <p className="text-slate-500 text-sm mt-1">
                Kirim email ke: <span className="font-bold text-slate-900">{PORTFOLIO_DATA.email}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95"
              >
                {copied ? <Check size={16}/> : <Copy size={16} />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
              <div className="h-8 w-px bg-slate-200 mx-2"></div>
              <SocialButton icon={Github} href="https://github.com" />
              <SocialButton icon={Linkedin} href="https://linkedin.com" />
            </div>
          </BentoCard>

        </div>

        <footer className="mt-20 border-t border-slate-200 pt-8 pb-10 flex justify-between items-center text-slate-400 text-sm">
          <p>© 2026 {PORTFOLIO_DATA.name}</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-slate-900 transition">Twitter</a>
             <a href="#" className="hover:text-slate-900 transition">Instagram</a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;