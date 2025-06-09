'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiHeart, FiUsers, FiChevronLeft, FiChevronRight, FiPlay, FiStar, FiTrendingUp } from 'react-icons/fi';
import PublicLayout from '../components/PublicLayout';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Community gathering with families enjoying outdoor activities',
      title: 'Summer Community Festival'
    },
    {
      src: 'https://images.unsplash.com/photo-1566296340363-7651e15e3a5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Children playing games and laughing together',
      title: 'Youth Recreation Program'
    },
    {
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      alt: 'Diverse group of volunteers working together',
      title: 'Volunteer Team Building'
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Families participating in group activities',
      title: 'Family Fun Day'
    },
  ];

  const stats = [
    { number: "500+", label: "Lives Touched", icon: FiHeart },
    { number: "150+", label: "Events Hosted", icon: FiStar },
    { number: "50+", label: "Active Volunteers", icon: FiUsers },
    { number: "95%", label: "Satisfaction Rate", icon: FiTrendingUp }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <PublicLayout>
    <div className="min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1566296340363-7651e15e3a5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          />
          {/* Modern Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-purple-500/10"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 opacity-20 blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 opacity-15 blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-10 blur-2xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Modern Glass Card */}
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">The Fun</span>{' '}
                <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Project</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-2xl md:text-4xl font-light mb-6 text-white/90">
                  Bringing Joy, Building Community
                </p>
                <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
              >
                Creating transformative experiences that unite communities through the power of joy, connection, and shared purpose.
              </motion.p>
            </div>
          </motion.div>

          {/* Modern Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="group relative overflow-hidden px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FiHeart size={22} className="relative z-10" />
                <span className="relative z-10">Donate Now</span>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/volunteer"
                className="group relative overflow-hidden px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FiUsers size={22} className="relative z-10" />
                <span className="relative z-10">Join Our Mission</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Impact</span>{' '}
                <span className="text-slate-800">That Matters</span>
            </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Every initiative we launch creates ripples of positive change that transform lives and strengthen our community bonds.
            </p>
          </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                  key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative overflow-hidden backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg">
                        <stat.icon size={32} className="text-white" />
                      </div>
                      
                      <motion.div
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                          {stat.number}
                        </h3>
                      </motion.div>
                      
                      <p className="text-lg font-semibold text-slate-600 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Gallery Section */}
        <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-white">Moments of</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Joy</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Witness the magic that happens when communities come together to create unforgettable experiences.
              </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 1.1
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative w-full h-full">
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${image.src}')`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 z-10">
                      <div className="backdrop-blur-md bg-white/20 rounded-2xl p-6 border border-white/30">
                        <h3 className="text-white text-2xl font-bold mb-2">{image.title}</h3>
                        <p className="text-white/90 text-lg">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Modern Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <motion.button
              onClick={prevSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="backdrop-blur-xl bg-white/20 hover:bg-white/30 rounded-full p-4 border border-white/30 transition-all duration-300 pointer-events-auto shadow-xl"
                >
                  <FiChevronLeft size={24} className="text-white" />
            </motion.button>
                
            <motion.button
              onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="backdrop-blur-xl bg-white/20 hover:bg-white/30 rounded-full p-4 border border-white/30 transition-all duration-300 pointer-events-auto shadow-xl"
                >
                  <FiChevronRight size={24} className="text-white" />
            </motion.button>
              </div>

              {/* Modern Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
              {galleryImages.map((_, index) => (
                  <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                  }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

        {/* Modern CTA Section */}
        <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="text-slate-800">Ready to</span>{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Join Us?</span>
              </h2>
              
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>
              
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                Whether you want to volunteer your time, make a donation, or simply spread the word, 
                there are countless ways to be part of our mission to bring joy to every corner of our community.
              </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/volunteer"
                    className="group relative overflow-hidden px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 text-lg"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <FiUsers size={22} className="relative z-10" />
                  <span className="relative z-10">Become a Volunteer</span>
                </Link>
              </motion.div>
                
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                    href="/contact"
                    className="group relative overflow-hidden px-12 py-5 bg-white border-2 border-slate-300 text-slate-800 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 text-lg"
                >
                    <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <FiArrowRight size={22} className="relative z-10" />
                    <span className="relative z-10">Get in Touch</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </PublicLayout>
  );
};

export default HomePage;

