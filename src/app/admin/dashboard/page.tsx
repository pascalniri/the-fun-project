'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUsers, FiCalendar, FiDollarSign, FiActivity, FiMapPin
} from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import AdminLayout from '../../../components/AdminLayout';

interface User {
  email: string;
  role: string;
}

const AdminDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // Verify token (optional)
    setUser({ email: 'admin@thefunproject.org', role: 'admin' });
  }, [router]);

  // Sample data
  const stats = [
    { title: 'Total Donations', value: '$45,230', change: '+12%', icon: FiDollarSign, color: 'emerald' },
    { title: 'Active Volunteers', value: '156', change: '+8%', icon: FiUsers, color: 'blue' },
    { title: 'Events This Month', value: '24', change: '+15%', icon: FiCalendar, color: 'purple' },
    { title: 'Community Reach', value: '2,840', change: '+23%', icon: FiActivity, color: 'orange' }
  ];

  const recentDonations = [
    { id: 1, name: 'John Smith', amount: '$250', date: '2024-01-15', email: 'john@email.com' },
    { id: 2, name: 'Sarah Johnson', amount: '$100', date: '2024-01-14', email: 'sarah@email.com' },
    { id: 3, name: 'Mike Davis', amount: '$500', date: '2024-01-13', email: 'mike@email.com' },
    { id: 4, name: 'Lisa Wilson', amount: '$75', date: '2024-01-12', email: 'lisa@email.com' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Community Garden Day', date: '2024-01-25', attendees: 45, location: 'Central Park' },
    { id: 2, title: 'Charity Run', date: '2024-02-01', attendees: 120, location: 'City Square' },
    { id: 3, title: 'Food Drive', date: '2024-02-08', attendees: 30, location: 'Community Center' }
  ];

  if (!user) return null;

  return (
    <AdminLayout title="Dashboard Overview">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${
                  stat.color === 'emerald' ? 'from-emerald-400 to-teal-500' :
                  stat.color === 'blue' ? 'from-blue-400 to-cyan-500' :
                  stat.color === 'purple' ? 'from-purple-400 to-pink-500' :
                  'from-orange-400 to-red-500'
                }`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-white/70 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts and Tables Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Recent Donations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Recent Donations</h3>
              <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentDonations.map((donation) => (
                <div key={donation.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <p className="text-white font-medium">{donation.name}</p>
                    <p className="text-white/60 text-sm">{donation.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold">{donation.amount}</p>
                    <p className="text-white/60 text-sm">{donation.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Upcoming Events</h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Add Event
              </button>
            </div>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-medium">{event.title}</h4>
                    <span className="text-blue-400 text-sm">{event.attendees} attending</span>
                  </div>
                  <div className="flex items-center text-white/60 text-sm space-x-4">
                    <span className="flex items-center"><FiCalendar size={14} className="mr-1" />{event.date}</span>
                    <span className="flex items-center"><FiMapPin size={14} className="mr-1" />{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard; 