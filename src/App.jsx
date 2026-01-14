import React, { useState } from 'react';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { 
  TrendingUp, Users, DollarSign, ShoppingCart, 
  Bell, Search, Calendar, ChevronDown, MoreHorizontal 
} from 'lucide-react';

// Mock Data untuk Chart
const salesData = [
  { name: 'Jan', value: 4000 }, { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 }, { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 }, { name: 'Jun', value: 5500 },
];

const categoryData = [
  { name: 'SaaS', value: 400 }, { name: 'Services', value: 300 },
  { name: 'License', value: 300 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899'];

// Sub-komponen: Stat Card
const StatCard = ({ title, value, change, icon: Icon, trend }) => (
  <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-3xl hover:border-blue-500/50 transition-all duration-300">
    <div className="flex justify-between items-start">
      <div className="p-3 bg-blue-500/10 rounded-2xl">
        <Icon className="text-blue-400 w-6 h-6" />
      </div>
      <button className="text-slate-500 hover:text-white"><MoreHorizontal size={20}/></button>
    </div>
    <div className="mt-4">
      <p className="text-slate-400 text-sm font-medium">{title}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
        <span className={`text-xs font-semibold ${trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
          {change}
        </span>
      </div>
    </div>
  </div>
);

const KPIDashboard = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* Sidebar (Optional/Visual) */}
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
          
          {/* Top Navigation */}
          <nav className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">Analytics Overview</h1>
              <p className="text-slate-500 mt-1">Pantau performa bisnis Anda secara real-time.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Cari data..." 
                  className="bg-slate-900/50 border border-slate-800 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64"
                />
              </div>
              <button className="p-2 bg-slate-900 border border-slate-800 rounded-xl relative">
                <Bell size={20} className="text-slate-400" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900"></span>
              </button>
            </div>
          </nav>

          {/* KPI Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Revenue" value="$128,430" change="+12.5%" icon={DollarSign} trend="up" />
            <StatCard title="Active Users" value="42,105" change="+18.2%" icon={Users} trend="up" />
            <StatCard title="Conversion" value="3.24%" change="-2.1%" icon={TrendingUp} trend="down" />
            <StatCard title="Sales Count" value="1,240" change="+4.3%" icon={ShoppingCart} trend="up" />
          </div>

          {/* Main Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Revenue Area Chart */}
            <div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-3xl">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-semibold text-white">Revenue Growth</h4>
                <div className="flex gap-2">
                  <button className="bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-lg text-xs transition">Weekly</button>
                  <button className="bg-blue-600 px-3 py-1 rounded-lg text-xs transition">Monthly</button>
                </div>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salesData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Distribution Pie Chart */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-3xl">
              <h4 className="text-lg font-semibold text-white mb-6">Market Share</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {categoryData.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                      <span className="text-slate-400">{item.name}</span>
                    </div>
                    <span className="font-semibold text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default KPIDashboard;