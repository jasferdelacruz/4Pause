import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { PARTNER_METRICS } from '../constants';
import { Users, TrendingUp, Calendar, DollarSign } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-serif text-3xl font-bold text-primary">Partner Portal</h1>
          <p className="text-stone-500">Welcome back, Santa Fe Eco-Guides Association</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-stone-500">Total Visitors</h3>
              <Users className="h-5 w-5 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-stone-800">1,245</div>
            <div className="text-xs text-green-600 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +12% from last month
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-stone-500">Revenue</h3>
              <div className="font-serif font-bold text-emerald-600">₱</div>
            </div>
            <div className="text-2xl font-bold text-stone-800">₱1.5M</div>
            <div className="text-xs text-green-600 mt-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" /> +8% from last month
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-stone-500">Active Packages</h3>
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-stone-800">4</div>
            <div className="text-xs text-stone-400 mt-1">
              Currently listed
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-stone-500">Pending Requests</h3>
              <Calendar className="h-5 w-5 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-stone-800">12</div>
            <div className="text-xs text-orange-600 mt-1 font-medium">
              Requires attention
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="font-bold text-stone-800 mb-6">Monthly Revenue Trend (PHP)</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PARTNER_METRICS}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#059669" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} tickFormatter={(value) => `₱${(value/1000).toFixed(0)}k`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`₱${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="font-bold text-stone-800 mb-6">Visitor Traffic</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PARTNER_METRICS}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f5f5f4'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="visitors" fill="#d97706" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Bookings Table (Mock) */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
           <div className="p-6 border-b border-stone-100 flex justify-between items-center">
            <h3 className="font-bold text-stone-800">Recent Bookings</h3>
            <button className="text-primary text-sm font-medium hover:underline">View All</button>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left text-sm text-stone-600">
               <thead className="bg-stone-50 text-stone-500 uppercase font-medium">
                 <tr>
                   <th className="px-6 py-4">Booking ID</th>
                   <th className="px-6 py-4">Customer</th>
                   <th className="px-6 py-4">Package</th>
                   <th className="px-6 py-4">Date</th>
                   <th className="px-6 py-4">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-stone-100">
                 <tr>
                   <td className="px-6 py-4 font-mono">#BK-8832</td>
                   <td className="px-6 py-4 font-medium text-stone-900">Elena Fisher</td>
                   <td className="px-6 py-4">Forest & Breath Retreat</td>
                   <td className="px-6 py-4">Oct 24, 2023</td>
                   <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Confirmed</span></td>
                 </tr>
                 <tr>
                   <td className="px-6 py-4 font-mono">#BK-8833</td>
                   <td className="px-6 py-4 font-medium text-stone-900">Nathan Drake</td>
                   <td className="px-6 py-4">Capisaan Caves Exploration</td>
                   <td className="px-6 py-4">Oct 26, 2023</td>
                   <td className="px-6 py-4"><span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-bold">Pending</span></td>
                 </tr>
                 <tr>
                   <td className="px-6 py-4 font-mono">#BK-8834</td>
                   <td className="px-6 py-4 font-medium text-stone-900">Lara Croft</td>
                   <td className="px-6 py-4">Rice Terraces Wellness</td>
                   <td className="px-6 py-4">Nov 02, 2023</td>
                   <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Confirmed</span></td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;