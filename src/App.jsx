import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, ArrowUpRight, MapPin, 
  Terminal, Copy, Check, Sparkles, Layers, FileText, Download, Briefcase
} from 'lucide-react';

// --- DATA PRIBADI ---
const PORTFOLIO_DATA = {
  name: "Galih Prayudo",
  email: "galih@example.com",
  role: "Full Stack Developer",
  location: "Jakarta, Indonesia",
  bio: "Membangun pengalaman web yang estetik dan performa tinggi. Fokus pada React, modern UI, dan skalabilitas.",
  stack: ["React", "Next.js", "Tailwind", "TypeScript", "Node.js", "PostgreSQL", "Figma", "Docker"],
  // CONTOH JIKA PROJECT ADA BANYAK (LEBIH DARI 5)
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
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      desc: "Integrasi OpenAI API dengan interface chat modern.",
      tech: "Next.js • Tailwind",
      tag: "AI",
    },
    {
      id: 4,
      title: "School Management",
      desc: "Sistem absensi dan penilaian siswa digital.",
      tech: "Laravel • Vue",
      tag: "SaaS",
    },
    {
      id: 5,
      title: "Company Profile",
      desc: "Web profil korporat dengan animasi GSAP.",
      tech: "React • GSAP",
      tag: "Frontend",
    },
    {
      id: 6,
      title: "Point of Sales (POS)",
      desc: "Aplikasi kasir berbasis cloud.",
      tech: "MERN Stack",
      tag: "Fullstack",
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
  <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-default whitespace-nowrap">
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

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20 relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-5xl mx-auto px-6 pt-20 relative z-10">
        
        {/* HERO SECTION */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Hi, I'm {PORTFOLIO_DATA.name.split(" ")[0]}. <br />
            <span className="text-slate-400">Creative Developer.</span>
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            {PORTFOLIO_DATA.bio}
          </p>
        </header>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          
          {/* 1. ROLE CARD */}
          <BentoCard className="md:col-span-2 flex items-center justify-between bg-gradient-to-br from-white to-slate-50">
             <div>
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-1">Role</p>
                <h3 className="text-2xl font-bold text-slate-900">{PORTFOLIO_DATA.role}</h3>
             </div>
             <div className="h-14 w-14 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
               <Sparkles size={22} className="text-indigo-500" />
             </div>
          </BentoCard>

          {/* 2. LOCATION CARD (FIXED: LEBIH RAPI & CENTERED) */}
          <BentoCard className="md:col-span-1 flex flex-col items-center justify-center text-center gap-2 group">
            <div className="p-3 bg-indigo-50 w-fit rounded-xl text-indigo-600 group-hover:scale-110 transition-transform mb-1">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Based in</p>
              <p className="text-slate-900 font-bold text-sm">{PORTFOLIO_DATA.location}</p>
            </div>
          </BentoCard>

          {/* 3. RESUME/CV CARD (MENGISI KOTAK KOSONG) */}
          <BentoCard className="md:col-span-1 flex flex-col items-center justify-center text-center gap-3 bg-slate-900 !border-slate-900 text-white cursor-pointer group hover:bg-slate-800 transition-colors">
            <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
              <Download size={24} />
            </div>
            <div>
              <p className="font-bold text-sm">Download CV</p>
              <p className="text-slate-400 text-xs">PDF Format</p>
            </div>
          </BentoCard>

          {/* 4. TECH STACK (Lebih Fleksibel) */}
          <BentoCard className="md:col-span-2 md:row-span-1 flex flex-col justify-center">
             <div className="flex items-center gap-2 mb-4">
                <Terminal size={18} className="text-orange-500" />
                <h3 className="text-slate-900 font-bold text-lg">Tech Stack</h3>
             </div>
             <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.stack.map((tech, idx) => (
                  <TechBadge key={idx} text={tech} />
                ))}
             </div>
          </BentoCard>

          {/* 5. PROJECTS LIST (SOLUSI UNTUK BANYAK PROJECT) */}
          {/* Menggunakan Scrollable Area (overflow-y-auto) agar bisa muat banyak */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col p-0 overflow-hidden">
            <div className="p-6 pb-2 bg-white border-b border-slate-100 z-10">
               <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-indigo-500" />
                  <h3 className="text-slate-900 font-bold text-lg">Selected Projects ({PORTFOLIO_DATA.projects.length})</h3>
               </div>
            </div>
            
            {/* Area Scroll */}
            <div className="overflow-y-auto p-6 pt-2 space-y-4 h-[320px] custom-scrollbar">
              {PORTFOLIO_DATA.projects.map((project) => (
                <div key={project.id} className="group cursor-pointer border border-slate-100 p-4 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50/30 transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-bold uppercase text-slate-500 tracking-wide">{project.tag}</span>
                    <ArrowUpRight className="text-slate-300 w-4 h-4 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <h4 className="font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{project.title}</h4>
                  <p className="text-slate-500 text-sm mt-1">{project.desc}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 6. CONTACT SECTION */}
          <BentoCard className="md:col-span-2 flex flex-col justify-center gap-4 bg-white border-dashed border-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Let's Connect.</h3>
              <p className="text-slate-500 text-sm">Open for freelance or full-time opportunities.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg active:scale-95"
              >
                {copied ? <Check size={14}/> : <Mail size={14} />}
                {copied ? "Copied!" : "Email Me"}
              </button>
              <div className="h-6 w-px bg-slate-200 mx-1"></div>
              <SocialButton icon={Github} href="https://github.com" />
              <SocialButton icon={Linkedin} href="https://linkedin.com" />
            </div>
          </BentoCard>

        </div>

        <footer className="mt-20 border-t border-slate-200 pt-8 pb-10 flex justify-between items-center text-slate-400 text-sm">
          <p>© 2026 {PORTFOLIO_DATA.name}</p>
        </footer>

      </div>
      
      {/* Style Tambahan untuk Scrollbar yang Cantik */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
};

export default App;