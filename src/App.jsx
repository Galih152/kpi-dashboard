import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { 
  TrendingUp, Users, DollarSign, ShoppingCart, 
  Bell, Search, Download, Filter, MoreHorizontal, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

// --- DATA DUMMY ---

// Data Bulanan (Monthly)
const monthlyData = [
  { name: 'Jan', value: 4000 }, { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 }, { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 }, { name: 'Jun', value: 7500 },
];

// Data Mingguan (Weekly) - untuk simulasi filter
const weeklyData = [
  { name: 'Mon', value: 1200 }, { name: 'Tue', value: 1400 },
  { name: 'Wed', value: 1100 }, { name: 'Thu', value: 1800 },
  { name: 'Fri', value: 2000 }, { name: 'Sat', value: 2400 },
  { name: 'Sun', value: 2100 },
];

const categoryData = [
  { name: 'SaaS', value: 400 }, { name: 'Services', value: 300 },
  { name: 'License', value: 300 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899'];

// --- KOMPONEN KECIL ---

const StatCard = ({ title, value, change, icon: Icon, trend }) => (
  <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
    <div className="flex justify-between items-start">
      <div className={`p-3 rounded-xl ${trend === 'up' ? 'bg-blue-50' : 'bg-rose-50'}`}>
        <Icon className={`w-6 h-6 ${trend === 'up' ? 'text-blue-600' : 'text-rose-600'}`} />
      </div>
      <button className="text-slate-400 hover:text-slate-600">
        <MoreHorizontal size={20}/>
      </button>
    </div>
    <div className="mt-4">
      <p className="text-slate-500 text-sm font-medium">{title}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{value}</h3>
        <span className={`flex items-center text-xs font-bold px-2 py-0.5 rounded-full ${
          trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
        }`}>
          {trend === 'up' ? <ArrowUpRight size={12} className="mr-1"/> : <ArrowDownRight size={12} className="mr-1"/>}
          {change}
        </span>
      </div>
    </div>
  </div>
);

// --- KOMPONEN UTAMA ---

const KPIDashboard = () => {
  // State untuk Interaksi
  const [timeRange, setTimeRange] = useState('Monthly'); // Monthly atau Weekly
  const [chartData, setChartData] = useState(monthlyData);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(3);
  
  // Efek ganti data saat tombol filter diklik
  useEffect(() => {
    if (timeRange === 'Weekly') {
      setChartData(weeklyData);
    } else {
      setChartData(monthlyData);
    }
  }, [timeRange]);

  // Fungsi: Handle Search (Simulasi filter visual)
  const stats = [
    { id: 1, title: "Total Revenue", value: "$128,430", change: "12.5%", icon: DollarSign, trend: "up" },
    { id: 2, title: "Active Users", value: "42,105", change: "18.2%", icon: Users, trend: "up" },
    { id: 3, title: "Conversion", value: "3.24%", change: "2.1%", icon: TrendingUp, trend: "down" },
    { id: 4, title: "Sales Count", value: "1,240", change: "4.3%", icon: ShoppingCart, trend: "up" },
  ];

  // Filter kartu berdasarkan pencarian
  const filteredStats = stats.filter(stat => 
    stat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fungsi: Handle Download
  const handleDownload = () => {
    alert("Memproses laporan PDF... (Simulasi)");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">
      
      <main className="p-6 lg:p-10 max-w-7xl mx-auto">
        
        {/* Header Navigation */}
        <nav className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dashboard Overview</h1>
            <p className="text-slate-500 mt-1">Pantau performa bisnis dengan tampilan bersih.</p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Search Bar Berfungsi */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari metric..." 
                className="bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-64 shadow-sm transition-all"
              />
            </div>

            {/* Tombol Notifikasi Berfungsi */}
            <button 
              onClick={() => setNotifications(0)}
              className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition relative shadow-sm"
            >
              <Bell size={20} className="text-slate-600" />
              {notifications > 0 && (
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white animate-pulse"></span>
              )}
            </button>

             {/* Tombol Download Berfungsi */}
            <button 
              onClick={handleDownload}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition shadow-lg shadow-slate-900/20"
            >
              <Download size={16} />
              <span>Export</span>
            </button>
          </div>
        </nav>

        {/* KPI Cards Grid (Dinamis berdasarkan Search) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredStats.length > 0 ? (
            filteredStats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))
          ) : (
            <div className="col-span-4 text-center py-10 bg-white rounded-2xl border border-slate-200 border-dashed">
              <p className="text-slate-500">Data "{searchQuery}" tidak ditemukan.</p>
            </div>
          )}
        </div>

        {/* Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Area Chart */}
          <div className="lg:col-span-2 bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900">Revenue Trends</h4>
                <p className="text-sm text-slate-500">Perbandingan performa periode ini.</p>
              </div>
              
              {/* Tombol Filter Chart Berfungsi */}
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button 
                  onClick={() => setTimeRange('Weekly')}
                  className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    timeRange === 'Weekly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Weekly
                </button>
                <button 
                  onClick={() => setTimeRange('Monthly')}
                  className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    timeRange === 'Monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dx={-10} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#1e293b', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Sources</h4>
              <p className="text-sm text-slate-500 mb-6">Distribusi pendapatan per kategori.</p>
              
              <div className="h-60 relative">
                 {/* Center Text Trick */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-slate-900 block">85%</span>
                      <span className="text-xs text-slate-500">Growth</span>
                    </div>
                 </div>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={65}
                      outerRadius={85}
                      paddingAngle={5}
                      dataKey="value"
                      cornerRadius={6}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              {categoryData.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-sm p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                    <span className="font-medium text-slate-700">{item.name}</span>
                  </div>
                  <span className="font-bold text-slate-900">{item.value} deals</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default KPIDashboard;