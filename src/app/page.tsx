'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FiHeart, 
  FiUsers, 
  FiCalendar, 
  FiGift,
  FiArrowRight,
  FiPlay,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (hasStarted) {
        let startTime: number;
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, [hasStarted, end, duration]);

    return { count, startCounter: () => setHasStarted(true) };
  };

  const stats = [
    { icon: FiUsers, label: 'People Served', value: 2500, suffix: '+' },
    { icon: FiCalendar, label: 'Events Hosted', value: 150, suffix: '+' },
    { icon: FiHeart, label: 'Volunteer Hours', value: 5000, suffix: '+' },
    { icon: FiGift, label: 'Lives Impacted', value: 10000, suffix: '+' },
  ];

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1566296340363-7651e15e3a5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          />
          {/* Simple Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Simple Background Elements */}
        <div className="absolute inset-0 z-10">
          <div 
            className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-20" 
            style={{ backgroundColor: '#48b0ad' }}
          />
          <div 
            className="absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-15" 
            style={{ backgroundColor: '#cb338a' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-10" 
            style={{ backgroundColor: '#e3cf12' }}
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span style={{ color: '#48b0ad' }}>The Fun</span>{' '}
                <span style={{ color: '#cb338a' }}>Project</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <p className="text-2xl md:text-4xl font-light mb-6 text-white">
                  Bringing Joy, Building Community
                </p>
                <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#e3cf12' }}></div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base text-gray-200 max-w-3xl mx-auto leading-relaxed"
              >
                Creating transformative experiences that unite communities through the power of joy, connection, and shared purpose.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="px-10 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 text-base"
                style={{ backgroundColor: '#e3cf12' }}
              >
                <FiHeart size={20} />
                <span>Donate Now</span>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/volunteer"
                className="px-10 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 text-base"
                style={{ backgroundColor: '#48b0ad' }}
              >
                <FiUsers size={20} />
                <span>Join Our Mission</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Simple Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="text-white/80 text-sm">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
              </div>
            </motion.div>
          </motion.div> */}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="bg-gray-50 rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1c1c1c' }}>
                See the <span style={{ color: '#48b0ad' }}>Joy</span> in Action
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Discover the impact we're making in our community through fun, engaging activities 
                that bring people together and create lasting memories.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative w-full h-full">
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('${image.src}')`
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-6 left-6 z-10 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-gray-900 text-xl font-bold mb-1">{image.title}</h3>
                      <p className="text-gray-700 text-base">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              style={{ color: '#1c1c1c' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              style={{ color: '#1c1c1c' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronRight size={24} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300`}
                  style={{ 
                    backgroundColor: index === currentSlide ? '#48b0ad' : '#eeeeee'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1c1c1c' }}>
                Who We <span style={{ color: '#48b0ad' }}>Are</span>
              </h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                The Fun Project is more than just an organization – we're a movement dedicated to 
                bringing joy and building stronger communities through the power of fun and connection.
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Founded with the belief that joy is a fundamental human right, we create meaningful 
                experiences that bring people together, regardless of background, age, or circumstances.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 font-semibold transition-colors duration-300 hover:underline text-base"
                style={{ color: '#48b0ad' }}
              >
                <span>Learn More About Us</span>
                <FiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl p-8 h-80 shadow-md">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ backgroundColor: '#e3cf12' }}
                    >
                      <FiPlay style={{ color: '#1c1c1c' }} size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#1c1c1c' }}>
                      Watch Our Story
                    </h3>
                    <p className="text-gray-600 text-base">
                      See how we're transforming communities through joy and connection
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20" style={{ backgroundColor: '#48b0ad' }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Spread Some <span style={{ color: '#e3cf12' }}>Joy</span>?
            </h2>
            <p className="text-base text-white/90 mb-12 max-w-3xl mx-auto">
              Join our mission to build stronger, happier communities. Whether through volunteering, 
              donating, or simply spreading the word – every action creates ripples of joy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/volunteer"
                className="text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg text-base"
                style={{ backgroundColor: '#e3cf12', color: '#1c1c1c' }}
              >
                Become a Volunteer
              </Link>
              <Link
                href="/donate"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg text-base"
                style={{ '--hover-color': '#1c1c1c' } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#1c1c1c';
                  (e.target as HTMLElement).style.backgroundColor = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = 'white';
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                Make a Donation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

