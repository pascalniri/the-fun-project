'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiSearch, 
  FiFilter, 
  FiTrash2, 
  FiArchive, 
  FiRefreshCw,
  FiUser,
  FiCalendar,
  FiTag,
  FiEye,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import AdminLayout from '../../../components/AdminLayout';
import { API_ENDPOINTS } from '../../../config/api';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'general' | 'volunteer' | 'event' | 'partnership' | 'media';
  isRead: boolean;
  isArchived: boolean;
  createdAt: string;
  updatedAt?: string;
}

interface MessagesResponse {
  success: boolean;
  data: {
    messages: Message[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    stats: {
      total: number;
      unread: number;
      archived: number;
    };
  };
}

const AdminMessagesPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalMessages, setTotalMessages] = useState(0);
  const [stats, setStats] = useState({
    total: 0,
    unread: 0,
    archived: 0
  });

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'volunteer', label: 'Volunteer Interest' },
    { value: 'event', label: 'Event Question' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'media', label: 'Media Inquiry' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Messages' },
    { value: 'unread', label: 'Unread Only' },
    { value: 'read', label: 'Read Only' },
    { value: 'archived', label: 'Archived Only' }
  ];

  const messagesPerPage = 10;

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append('page', currentPage.toString());
      params.append('limit', messagesPerPage.toString());
      
      if (searchTerm) params.append('search', searchTerm);
      if (typeFilter !== 'all') params.append('type', typeFilter);
      if (statusFilter === 'unread') params.append('isRead', 'false');
      if (statusFilter === 'read') params.append('isRead', 'true');
      if (statusFilter === 'archived') params.append('isArchived', 'true');

      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_ENDPOINTS.adminMessages}?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const result: MessagesResponse = await response.json();
        setMessages(result.data.messages);
        setTotalMessages(result.data.total);
        setTotalPages(result.data.totalPages);
        setStats(result.data.stats);
      } else {
        console.error('Failed to fetch messages');
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId: string, isRead: boolean) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(API_ENDPOINTS.toggleRead(messageId), {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isRead })
      });

      if (response.ok) {
        fetchMessages(); // Refresh the list
        if (selectedMessage?.id === messageId) {
          setSelectedMessage(prev => prev ? { ...prev, isRead } : null);
        }
      }
    } catch (error) {
      console.error('Error updating message status:', error);
    }
  };

  const archiveMessage = async (messageId: string, isArchived: boolean) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(API_ENDPOINTS.toggleArchive(messageId), {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isArchived })
      });

      if (response.ok) {
        fetchMessages(); // Refresh the list
        if (selectedMessage?.id === messageId) {
          setSelectedMessage(null); // Close detail view if archived
        }
      }
    } catch (error) {
      console.error('Error archiving message:', error);
    }
  };

  const deleteMessage = async (messageId: string) => {
    if (!confirm('Are you sure you want to delete this message? This action cannot be undone.')) {
      return;
    }

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(API_ENDPOINTS.deleteMessage(messageId), {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        fetchMessages(); // Refresh the list
        if (selectedMessage?.id === messageId) {
          setSelectedMessage(null); // Close detail view if deleted
        }
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTypeColor = (type: string) => {
    const colors = {
      general: 'bg-blue-500/20 text-blue-300 border border-blue-400/30',
      volunteer: 'bg-green-500/20 text-green-300 border border-green-400/30',
      event: 'bg-purple-500/20 text-purple-300 border border-purple-400/30',
      partnership: 'bg-orange-500/20 text-orange-300 border border-orange-400/30',
      media: 'bg-pink-500/20 text-pink-300 border border-pink-400/30'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500/20 text-gray-300 border border-gray-400/30';
  };

  useEffect(() => {
    fetchMessages();
  }, [currentPage, typeFilter, statusFilter, searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchMessages();
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
                <FiMail className="w-6 h-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Total Messages</p>
                <p className="text-2xl font-bold text-white">{totalMessages}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-orange-500/20 rounded-lg border border-orange-400/30">
                <FiMail className="w-6 h-6 text-orange-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Unread</p>
                <p className="text-2xl font-bold text-white">{stats.unread}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                <FiArchive className="w-6 h-6 text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Archived</p>
                <p className="text-2xl font-bold text-white">{stats.archived}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-400/30">
                <FiFilter className="w-6 h-6 text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-white/70">Filtered</p>
                <p className="text-2xl font-bold text-white">{stats.total - stats.unread - stats.archived}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 text-white placeholder-white/60"
                />
              </div>
            </div>
            
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 text-white"
            >
              {typeOptions.map(option => (
                <option key={option.value} value={option.value} className="bg-slate-800 text-white">{option.label}</option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 text-white"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value} className="bg-slate-800 text-white">{option.label}</option>
              ))}
            </select>

            <button
              type="button"
              onClick={fetchMessages}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-colors flex items-center space-x-2"
            >
              <FiRefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20">
              <div className="p-6 border-b border-white/20">
                <h2 className="text-xl font-semibold text-white">Messages</h2>
              </div>

              {loading ? (
                <div className="p-6">
                  <div className="animate-pulse space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-20 bg-white/10 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              ) : messages.length === 0 ? (
                <div className="p-6 text-center">
                  <FiMail className="w-12 h-12 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60">No messages found</p>
                </div>
              ) : (
                <div className="divide-y divide-white/10">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`p-6 cursor-pointer hover:bg-white/5 transition-colors ${
                        selectedMessage?.id === message.id ? 'bg-emerald-500/10 border-r-4 border-emerald-400' : ''
                      } ${!message.isRead ? 'font-medium' : ''}`}
                      onClick={() => setSelectedMessage(message)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="flex items-center space-x-2">
                              {!message.isRead ? (
                                <FiMail className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <FiMail className="w-4 h-4 text-white/40" />
                              )}
                              <span className="text-sm font-medium text-white">{message.name}</span>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(message.type)}`}>
                              {typeOptions.find(t => t.value === message.type)?.label}
                            </span>
                          </div>
                          <h3 className="text-lg font-medium text-white truncate mb-1">
                            {message.subject}
                          </h3>
                          <p className="text-sm text-white/60 truncate mb-2">
                            {message.message}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-white/50">
                            <span className="flex items-center space-x-1">
                              <FiUser className="w-3 h-3" />
                              <span>{message.email}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <FiCalendar className="w-3 h-3" />
                              <span>{formatDate(message.createdAt)}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="p-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-white/60">
                      Showing {((currentPage - 1) * messagesPerPage) + 1} to{' '}
                      {Math.min(currentPage * messagesPerPage, totalMessages)} of{' '}
                      {totalMessages} results
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-white/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 text-white"
                      >
                        <FiChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 text-sm text-white">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-white/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 text-white"
                      >
                        <FiChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 sticky top-6">
              {selectedMessage ? (
                <div>
                  <div className="p-6 border-b border-white/20">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-white">Message Details</h2>
                      <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(selectedMessage.type)}`}>
                        {typeOptions.find(t => t.value === selectedMessage.type)?.label}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-white/70">From</label>
                        <p className="text-sm text-white">{selectedMessage.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-white/70">Email</label>
                        <p className="text-sm text-white">{selectedMessage.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-white/70">Subject</label>
                        <p className="text-sm text-white">{selectedMessage.subject}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-white/70">Received</label>
                        <p className="text-sm text-white">{formatDate(selectedMessage.createdAt)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <label className="text-sm font-medium text-white/70 block mb-2">Message</label>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <p className="text-sm text-white whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                  </div>

                  <div className="p-6 border-t border-white/20">
                    <div className="space-y-3">
                      <button
                        onClick={() => markAsRead(selectedMessage.id, !selectedMessage.isRead)}
                        className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                          selectedMessage.isRead
                            ? 'bg-white/10 text-white/70 hover:bg-white/20'
                            : 'bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-400/30'
                        }`}
                      >
                        <FiEye className="w-4 h-4" />
                        <span>{selectedMessage.isRead ? 'Mark as Unread' : 'Mark as Read'}</span>
                      </button>

                      <button
                        onClick={() => archiveMessage(selectedMessage.id, !selectedMessage.isArchived)}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors border border-blue-400/30"
                      >
                        <FiArchive className="w-4 h-4" />
                        <span>{selectedMessage.isArchived ? 'Unarchive' : 'Archive'}</span>
                      </button>

                      <button
                        onClick={() => deleteMessage(selectedMessage.id)}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors border border-red-400/30"
                      >
                        <FiTrash2 className="w-4 h-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <FiMail className="w-12 h-12 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60">Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminMessagesPage; 