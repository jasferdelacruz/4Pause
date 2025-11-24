
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { PARTNER_METRICS } from '../constants';
import { getBookings } from '../services/bookingService';
import { Booking } from '../types';
import { Users, TrendingUp, Calendar, DollarSign, RefreshCw } from 'lucide-react';

const Partners: React.FC = () => {
  const [recentBookings, setRecentBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBookings = async () => {
    setIsLoading(true);
    const data = await getBookings();
    setRecentBookings(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="font-serif text-3xl font-bold text-primary">Partner Portal</h1>
            <p className="text-stone-500">Welcome back, Santa Fe Eco-Guides Association</p>
          </div>
          <div className="text-xs text-stone-400">
             Last updated: {new Date().toLocaleTimeString()}
          </div>
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
            <div className="text-2xl font-bold text-stone-800">
              {recentBookings.filter(b => b.status === 'Pending').length}
            </div>
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

        {/* Recent Bookings Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
           <div className="p-6 border-b border-stone-100 flex justify-between items-center">
            <h3 className="font-bold text-stone-800">Recent Bookings</h3>
            <button 
              onClick={fetchBookings} 
              className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
            >
              <RefreshCw size={14} className={isLoading ? "animate-spin" : ""} /> Refresh
            </button>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left text-sm text-stone-600">
               <thead className="bg-stone-50 text-stone-500 uppercase font-medium">
                 <tr>
                   <th className="px-6 py-4">Booking ID</th>
                   <th className="px-6 py-4">Customer</th>
                   <th className="px-6 py-4">Package</th>
                   <th className="px-6 py-4">Date</th>
                   <th className="px-6 py-4">Guests</th>
                   <th className="px-6 py-4">Total</th>
                   <th className="px-6 py-4">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-stone-100">
                 {isLoading && recentBookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-stone-400">Loading bookings...</td>
                    </tr>
                 ) : (
                   recentBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs font-bold text-stone-500">{booking.id}</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-stone-900">{booking.name}</div>
                        <div className="text-xs text-stone-400">{booking.email}</div>
                      </td>
                      <td className="px-6 py-4">{booking.packageName}</td>
                      <td className="px-6 py-4">{new Date(booking.date).toLocaleDateString()}</td>
                      <td className="px-6 py-4">{booking.guests}</td>
                      <td className="px-6 py-4 font-medium text-stone-800">₱{booking.totalPrice.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                          booking.status === 'Confirmed' 
                            ? 'bg-green-50 text-green-700 border-green-100' 
                            : booking.status === 'Pending'
                            ? 'bg-amber-50 text-amber-700 border-amber-100'
                            : 'bg-red-50 text-red-700 border-red-100'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                   ))
                 )}
               </tbody>
             </table>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
