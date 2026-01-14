import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell 
} from 'recharts';
import { 
  LayoutDashboard, PieChart as IconPie, Users, Settings, Bell, Search, 
  ChevronDown, Plus, ArrowUpRight, Wallet, Activity, MoreHorizontal
} from 'lucide-react';

// --- DATA MOCKUP ---
const salesData = [
  { name: 'Mon', revenue: 4000, profit: 2400 },
  { name: 'Tue', revenue: 3000, profit: 1398 },
  { name: 'Wed', revenue: 2000, profit: 9800 },
  { name: 'Thu', revenue: 2780, profit: 3908 },
  { name: 'Fri', revenue: 1890, profit: 4800 },
  { name: 'Sat', revenue: 2390, profit: 3800 },
  { name: 'Sun', revenue: 3490, profit: 4300 },
];

const activityData = [
  { id: 1, name: "Spotify Sub", date: "Today, 10:20 AM", amount: "-$15.00", status: "Success", img: "S" },
  { id: 2, name: "Upwork Client", date: "Yesterday, 4:30 PM", amount: "+$850.00", status: "Income", img: "U" },
  { id: 3, name: "Server Cost", date: "Jan 12, 2024", amount: "-$120.50", status: "Pending", img: "A" },
];

// --- KOMPONEN KUSTOM ---

const SidebarItem = ({ icon: Icon, text, active }) => (
  <button className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all duration-300 ${
    active 
      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
  }`}>
    <Icon size={20} />
    <span className="font-medium text-sm">{text}</span>
  </button>
);

const StatCard = ({ title, value, change, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={22} className="text-slate-800" />
      </div>
      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
        +{change}% <ArrowUpRight size={12} />
      </span>
    </div>
    <h3 className="text-3xl font-bold text-slate-800 tracking-tight">{value}</h3>
    <p className="text-slate-500 text-sm mt-1">{title}</p>
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 text-white p-3 rounded-xl shadow-xl text-xs">
        <p className="font-bold mb-1">{label}</p>
        <p className="text-indigo-300">Rev: ${payload[0].value}</p>
        <p className="text-emerald-300">Prof: ${payload[1].value}</p>
      </div>
    );
  }
  return null;
};

// --- LAYOUT UTAMA ---

const App = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden">
      
      {/* 1. SIDEBAR (Modern Clean) */}
      <aside className="w-64 bg-white border-r border-slate-100 flex-col justify-between hidden md:flex p-6">
        <div>
          <div className="flex items-center gap-2 mb-10 px-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">K</div>
            <span className="text-xl font-bold tracking-tight">KpiDash.</span>
          </div>

          <nav className="space-y-2">
            <SidebarItem icon={LayoutDashboard} text="Overview" active={true} />
            <SidebarItem icon={IconPie} text="Analytics" />
            <SidebarItem icon={Wallet} text="Finance" />
            <SidebarItem icon={Users} text="Customers" />
          </nav>
        </div>

        <div className="mt-auto">
          <div className="bg-indigo-50 p-4 rounded-2xl mb-4">
            <p className="text-xs font-semibold text-indigo-900 mb-2">Pro Plan</p>
            <p className="text-xs text-indigo-700 mb-3">Akses semua fitur premium dashboard.</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-lg text-xs font-semibold hover:bg-indigo-700 transition">Upgrade</button>
          </div>
          <SidebarItem icon={Settings} text="Settings" />
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          
          {/* Top Bar */}
          <header className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Selamat Pagi, Galih! 👋</h1>
              <p className="text-slate-500 text-sm">Berikut update performa bisnis hari ini.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-64 transition shadow-sm" />
              </div>
              <button className="p-2 bg-white rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
          </header>

          {/* Stats Grid (Bento Style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard title="Total Balance" value="$54,230" change="12" icon={Wallet} color="bg-indigo-100" />
            <StatCard title="Active Users" value="8,540" change="8.2" icon={Users} color="bg-orange-100" />
            <StatCard title="Conversion Rate" value="4.35%" change="2.1" icon={Activity} color="bg-emerald-100" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* BIG CHART */}
            <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-slate-800">Revenue Analytics</h3>
                <div className="flex gap-2 bg-slate-50 p-1 rounded-lg">
                  <button className="px-3 py-1 bg-white shadow-sm rounded-md text-xs font-semibold text-slate-800">Weekly</button>
                  <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 transition">Monthly</button>
                </div>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer>
                  <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorProf" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                    <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorProf)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* RIGHT COLUMN (Activity & Card) */}
            <div className="space-y-6">
              
              {/* Virtual Card Widget */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-3xl text-white shadow-xl shadow-slate-200">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-medium text-slate-300">Business Corp.</span>
                  <Wallet size={20} className="text-slate-300" />
                </div>
                <div className="mb-4">
                  <p className="text-sm text-slate-400">Total Balance</p>
                  <h3 className="text-3xl font-bold">$24,500.00</h3>
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-white text-slate-900 py-2 rounded-xl text-sm font-bold hover:bg-slate-100 transition">Withdraw</button>
                  <button className="p-2 bg-slate-700 rounded-xl hover:bg-slate-600 transition"><Plus size={20}/></button>
                </div>
              </div>

              {/* Recent Activity List */}
              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-slate-800">Recent Activity</h4>
                  <button className="text-indigo-600 text-xs font-semibold hover:underline">See All</button>
                </div>
                <div className="space-y-4">
                  {activityData.map((item) => (
                    <div key={item.id} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-sm font-bold text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition">
                          {item.img}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">{item.name}</p>
                          <p className="text-xs text-slate-400">{item.date}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-bold ${item.status === 'Income' ? 'text-emerald-600' : 'text-slate-800'}`}>
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;