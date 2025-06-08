'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCalendar, FiUser, FiArrowRight, FiSearch } from 'react-icons/fi';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'community', name: 'Community' },
    { id: 'events', name: 'Events' },
    { id: 'stories', name: 'Stories' },
    { id: 'tips', name: 'Tips' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building Stronger Communities Through Fun",
      excerpt: "Discover how shared joy and community activities can transform neighborhoods and bring people together in meaningful ways.",
      author: "The Fun Project Team",
      date: "March 15, 2024",
      category: "community",
      image: "/images/blog/community-building.jpg",
      tags: ["community", "joy", "connection"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Our First Community Festival Success",
      excerpt: "Reflecting on the incredible success of our inaugural community festival and the amazing connections made.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "events",
      image: "/images/blog/festival-success.jpg",
      tags: ["events", "festival", "success"],
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Science Behind Community Joy",
      excerpt: "Exploring the psychological and social benefits of community engagement and shared positive experiences.",
      author: "Dr. Michael Chen",
      date: "March 5, 2024",
      category: "tips",
      image: "/images/blog/science-joy.jpg",
      tags: ["science", "psychology", "wellbeing"],
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Volunteer Spotlight: Maria's Story",
      excerpt: "Meet Maria, one of our amazing volunteers who has been making a difference in our community since day one.",
      author: "The Fun Project Team",
      date: "February 28, 2024",
      category: "stories",
      image: "/images/blog/volunteer-spotlight.jpg",
      tags: ["volunteer", "spotlight", "inspiration"],
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Planning Your Own Community Event",
      excerpt: "A comprehensive guide to organizing successful community events that bring joy and foster connections.",
      author: "Amanda Rodriguez",
      date: "February 22, 2024",
      category: "tips",
      image: "/images/blog/event-planning.jpg",
      tags: ["planning", "events", "guide"],
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "The Ripple Effect of Kindness",
      excerpt: "How small acts of kindness in our community events create lasting positive impacts that extend far beyond the moment.",
      author: "The Fun Project Team",
      date: "February 15, 2024",
      category: "stories",
      image: "/images/blog/kindness-ripple.jpg",
      tags: ["kindness", "impact", "community"],
      readTime: "4 min read"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
            }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(72, 176, 173, 0.8)' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-base opacity-90">
              Stories, insights, and inspiration from The Fun Project community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                style={{ backgroundColor: 'white' }}
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base ${
                    selectedCategory === category.id
                      ? 'text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:shadow-md'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.id ? '#cb338a' : 'white'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium" style={{ color: '#1c1c1c' }}>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span 
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: '#e3cf12', color: '#1c1c1c' }}
                        >
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FiCalendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 transition-colors duration-300" style={{ color: '#1c1c1c' }}>
                        {post.title}
                      </h3>
                      
                      <p className="text-base text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <FiUser size={14} className="mr-1" />
                          {post.author}
                        </div>
                        
                        <Link
                          href={`/blog/${post.id}`}
                          className="flex items-center space-x-1 font-semibold transition-colors duration-300 hover:underline text-base"
                          style={{ color: '#48b0ad' }}
                        >
                          <span>Read More</span>
                          <FiArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                variants={fadeInUp}
                className="text-center py-16"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1c1c1c' }}>No posts found</h3>
                <p className="text-base text-gray-600 mb-8">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base text-white"
                  style={{ backgroundColor: '#48b0ad' }}
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscribe */}
      <section className="py-20" style={{ backgroundColor: '#cb338a' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-base text-white/90 mb-8">
              Subscribe to our newsletter and never miss a story from The Fun Project community.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-base border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ backgroundColor: 'white', color: '#1c1c1c' }}
                />
                <button 
                  className="px-8 py-4 rounded-full font-semibold transition-all duration-300 text-base text-white hover:opacity-90"
                  style={{ backgroundColor: '#e3cf12', color: '#1c1c1c' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 