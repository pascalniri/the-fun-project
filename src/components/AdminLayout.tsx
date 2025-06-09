'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUsers, FiHome, FiBarChart, FiMessageSquare, FiCalendar, FiDollarSign,
  FiSettings, FiLogOut, FiMenu, FiX
} from 'react-icons/fi';
import { useRouter, usePathname } from 'next/navigation';

interface User {
  email: string;
  role: string;
}

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { id: 'overview', label: 'Overview', icon: FiHome, path: '/admin/dashboard' },
    { id: 'donations', label: 'Donations', icon: FiDollarSign, path: '/admin/donations' },
    { id: 'volunteers', label: 'Volunteers', icon: FiUsers, path: '/admin/volunteers' },
    { id: 'events', label: 'Events', icon: FiCalendar, path: '/admin/events' },
    { id: 'analytics', label: 'Analytics', icon: FiBarChart, path: '/admin/analytics' },
    { id: 'messages', label: 'Messages', icon: FiMessageSquare, path: '/admin/messages' },
  ];

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // Verify token (optional)
    setUser({ email: 'admin@thefunproject.org', role: 'admin' });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const getActiveTab = () => {
    const currentNav = navigation.find(nav => nav.path === pathname);
    return currentNav?.id || 'overview';
  };

  const getPageTitle = () => {
    if (title) return title;
    const currentNav = navigation.find(nav => nav.path === pathname);
    return currentNav?.label || 'Admin Dashboard';
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 opacity-10 blur-xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 opacity-10 blur-xl"
          animate={{ y: [0, 20, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="h-full backdrop-blur-xl bg-white/10 border-r border-white/20">
          {/* Logo */}
          <div className="p-6 border-b border-white/20">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              The Fun Project
            </h1>
            <p className="text-white/60 text-sm mt-1">Admin Dashboard</p>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  getActiveTab() === item.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
                <FiUsers size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Admin User</p>
                <p className="text-white/60 text-xs">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-2 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors"
            >
              <FiLogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/10 border-b border-white/20">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              >
                {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
              <h1 className="text-2xl font-bold text-white">
                {getPageTitle()}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg">
                <FiSettings size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 