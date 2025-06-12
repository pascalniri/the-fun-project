'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiHeart, FiUsers, FiChevronLeft, FiChevronRight, FiStar, FiTrendingUp } from 'react-icons/fi';
import PublicLayout from '../components/PublicLayout';

const TypewriterText = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust speed here

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
};

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'The Fun Project brings families together through engaging activities and games, creating moments of joy and connection in challenging times.',
      title: 'Family Bonding'
    },
    {
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Our art therapy sessions provide a creative outlet for self-expression and emotional healing, helping individuals process their experiences through art.',
      title: 'Art Therapy'
    },
    {
      src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'The Fun Project provides essential care packages filled with hygiene items, clothing, and educational materials to support families in need.',
      title: 'Care Packages'
    },
    {
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Our community events create safe spaces for families to connect, share experiences, and build lasting relationships with others in similar situations.',
      title: 'Community Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      alt: 'Through guided relaxation and mindfulness activities, we help individuals and families find moments of peace and mental wellness.',
      title: 'Mental Wellness'
    },
    {
      src: 'https://images.unsplash.com/photo-1566296340363-7651e15e3a5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Our volunteer team works tirelessly to create meaningful experiences and provide support to families facing housing instability.',
      title: 'Volunteer Support'
    }
  ];

  const stats = [
    { number: "In Development", label: "Preparing to Launch", icon: FiHeart },
    { number: "First Event", label: "Coming Soon", icon: FiStar },
    { number: "Growing", label: "Volunteer Team", icon: FiUsers },
    { number: "Washtenaw County", label: "Service Area", icon: FiTrendingUp }
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          />
          {/* Solid Color Overlay */}
          <div className="absolute inset-0 bg-[#FF6B6B] mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Modern Card with Solid Background */}
            <div className="bg-white/95 rounded-3xl p-12 shadow-2xl">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-[#FF6B6B]">The Fun</span>{' '}
                <span className="text-[#4ECDC4]">Project</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <div className="h-16 md:h-20 flex items-center justify-center">
                  <TypewriterText
                    text="Putting the Fun in a Moment of Crisis"
                    className="text-2xl md:text-4xl font-light text-gray-800"
                  />
                </div>
                <div className="w-32 h-1 mx-auto rounded-full bg-[#FF6B6B]"></div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              >
                Creating joyous experiences for individuals and families without stable housing through meaningful events that focus on mental wellness and uplifting experiences families can relish in together.
              </motion.p>
            </div>
          </motion.div>

          {/* Action Buttons */}
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
                className="group relative overflow-hidden px-12 py-5 bg-[#4ECDC4] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <div className="absolute inset-0 bg-[#45B7AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FiHeart size={22} className="relative z-10" />
                <span className="relative z-10">Donate Now</span>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden px-12 py-5 bg-[#FF6B6B] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <div className="absolute inset-0 bg-[#FF5252] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FiUsers size={22} className="relative z-10" />
                <span className="relative z-10">Get in Touch</span>
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
                Every event we host creates moments of joy and connection for individuals and families facing housing instability, 
                providing mental wellness support when it&apos;s needed most.
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
                        <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                          {stat.number}
                        </h3>
                      </motion.div>
                      
                      <p className="text-base font-semibold text-slate-600 leading-tight">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Main Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${galleryImages[currentSlide].src}')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="backdrop-blur-xl bg-white/10 rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                    {galleryImages[currentSlide].title}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg">
                    {galleryImages[currentSlide].alt}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[600px]">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative rounded-xl overflow-hidden group ${
                    index === currentSlide ? 'ring-2 ring-yellow-400' : ''
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${image.src}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white text-sm md:text-base font-semibold truncate">
                      {image.title}
                    </h4>
                  </div>

                  {/* Active Indicator */}
                  {index === currentSlide && (
                    <div className="absolute top-2 right-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    </div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center mt-8 md:hidden">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={prevSlide}
                whileTap={{ scale: 0.9 }}
                className="backdrop-blur-xl bg-white/10 rounded-full p-3 border border-white/20"
              >
                <FiChevronLeft size={20} className="text-white" />
              </motion.button>

              <div className="text-white/80 text-sm font-medium">
                {currentSlide + 1} / {galleryImages.length}
              </div>

              <motion.button
                onClick={nextSlide}
                whileTap={{ scale: 0.9 }}
                className="backdrop-blur-xl bg-white/10 rounded-full p-3 border border-white/20"
              >
                <FiChevronRight size={20} className="text-white" />
              </motion.button>
            </div>
          </div>
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
                Help us create joyous experiences for individuals and families without stable housing. 
                Your support enables us to provide mental wellness events, essential resources, and moments of happiness during challenging times.
              </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                    className="group relative overflow-hidden px-12 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 text-lg"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <FiUsers size={22} className="relative z-10" />
                  <span className="relative z-10">Get in Touch</span>
                </Link>
              </motion.div>
                
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                    href="/about"
                    className="group relative overflow-hidden px-12 py-5 bg-white border-2 border-slate-300 text-slate-800 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 text-lg"
                >
                    <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <FiArrowRight size={22} className="relative z-10" />
                    <span className="relative z-10">Learn More</span>
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

