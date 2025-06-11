'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiCalendar, FiMapPin } from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const ProgramsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const programCategories = [
    { id: 'all', name: 'All Programs' },
    { id: 'families', name: 'Family Programs' },
    { id: 'community', name: 'Mental Health & Wellness' },
    { id: 'seasonal', name: 'Seasonal Events' }
  ];

  const programs = [
    {
      id: 1,
      title: "Mental Health & Wellness Events",
      category: "families",
      description: "Comprehensive events combining essential resource distribution with mental health-focused activities designed to reduce stress and encourage emotional well-being.",
      schedule: "Monthly events (frequency will increase as we grow)",
      location: "Various community locations in Washtenaw County",
      participants: "Individuals and families without stable housing",
      image: "🧠",
      benefits: [
        "Mental health break through structured activities",
        "Essential resource distribution (meals, care packages)",
        "Emotional relief and community connection",
        "Safe, welcoming space for relaxation and bonding"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Group Art Therapy Sessions",
      category: "community",
      description: "Creative expression sessions that provide therapeutic benefits while fostering community connection and stress relief.",
      schedule: "Integrated into monthly events",
      location: "Community centers and partner locations",
      participants: "All ages welcome",
      image: "🎨",
      benefits: [
        "Creative outlet for emotional expression",
        "Therapeutic stress relief",
        "Build confidence and self-esteem",
        "Create lasting memories and artwork"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Outdoor Activities & Nature Programs",
      category: "families",
      description: "Outdoor experiences including zoo visits, nature walks, and recreational activities that provide fresh air, exercise, and mental wellness benefits.",
      schedule: "Seasonal programming based on weather",
      location: "Local parks, zoo, and outdoor venues",
      participants: "Families and individuals of all ages",
      image: "🌳",
      benefits: [
        "Physical activity and fresh air",
        "Connection with nature for mental wellness",
        "Family bonding opportunities",
        "New experiences and learning"
      ],
      featured: true
    },
    {
      id: 4,
      title: "Care Package Distribution",
      category: "all",
      description: "Essential resource packages including hygiene kits, clothing, outerwear, and educational materials distributed at every event.",
      schedule: "Available at all events",
      location: "All event locations",
      participants: "Every attendee receives care packages",
      image: "📦",
      benefits: [
        "Hygiene kits and personal care items",
        "Clothing and weather-appropriate outerwear",
        "Educational materials and resources",
        "Practical support for daily needs"
      ],
      featured: false
    },
    {
      id: 5,
      title: "Guided Relaxation & Mindfulness",
      category: "community",
      description: "Structured relaxation exercises and mindfulness activities designed to help participants manage stress and focus on mental wellness.",
      schedule: "Integrated into all major events",
      location: "Quiet spaces at event venues",
      participants: "Adults and older children",
      image: "🧘",
      benefits: [
        "Stress reduction techniques",
        "Mindfulness and grounding exercises",
        "Coping strategies for difficult times",
        "Inner peace and emotional balance"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Interactive Play Sessions",
      category: "families",
      description: "Fun, engaging activities specifically designed for children and parents to play together, creating joy and strengthening family bonds.",
      schedule: "Part of every family-focused event",
      location: "Child-friendly spaces at venues",
      participants: "Children and their parents/caregivers",
      image: "🎪",
      benefits: [
        "Quality parent-child bonding time",
        "Age-appropriate fun and learning",
        "Social interaction with other families",
        "Temporary escape from stressful situations"
      ],
      featured: false
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab);

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
    <PublicLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative text-white py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
                Our Programs & Services
              </h1>
              <p className="text-base opacity-90">
                Mental health-focused events and activities designed for individuals and families 
                facing housing instability. Each event combines essential resources with opportunities 
                for stress relief through engaging, fun experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Program Categories */}
        <section className="py-16" style={{ backgroundColor: '#eeeeee' }}>
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Explore by Category</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {programCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base ${
                      activeTab === category.id
                        ? 'text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:shadow-md'
                    }`}
                    style={{
                      backgroundColor: activeTab === category.id ? '#cb338a' : 'white'
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>
                  {activeTab === 'all' ? 'All Our Programs' : `${programCategories.find(c => c.id === activeTab)?.name}`}
                </h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto">
                  Each program is designed to create meaningful connections and positive impact in our community
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map((program) => (
                  <motion.div
                    key={program.id}
                    variants={fadeInUp}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                      program.featured ? 'ring-2 ring-offset-2 ring-yellow-400' : ''
                    }`}
                  >
                    {program.featured && (
                      <div className="px-4 py-2 text-center text-white text-sm font-semibold" style={{ backgroundColor: '#e3cf12', color: '#1c1c1c' }}>
                        ⭐ Featured Program
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{program.image}</div>
                        <span 
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: '#48b0ad', color: 'white' }}
                        >
                          {programCategories.find(c => c.id === program.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#1c1c1c' }}>{program.title}</h3>
                      <p className="text-base text-gray-600 mb-4">{program.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <FiCalendar className="w-5 h-5 mr-3" style={{ color: '#48b0ad' }} />
                          <span className="text-base">{program.schedule}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FiMapPin className="w-5 h-5 mr-3" style={{ color: '#cb338a' }} />
                          <span className="text-base">{program.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FiUsers className="w-5 h-5 mr-3" style={{ color: '#e3cf12' }} />
                          <span className="text-base">{program.participants}</span>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-base" style={{ color: '#1c1c1c' }}>Program Benefits:</h4>
                        <ul className="space-y-2">
                          {program.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <FiHeart size={14} className="mt-1 flex-shrink-0" style={{ color: '#cb338a' }} />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="flex-1 text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-base"
                          style={{ backgroundColor: '#48b0ad' }}
                        >
                          Learn More
                        </button>
                        <button className="flex-1 bg-white border-2 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 text-base"
                          style={{ borderColor: '#cb338a', color: '#cb338a' }}
                        >
                          Join Program
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredPrograms.length === 0 && (
                <motion.div variants={fadeInUp} className="text-center py-16">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1c1c1c' }}>No programs in this category</h3>
                  <p className="text-base text-gray-600 mb-8">
                    We&apos;re always developing new programs. Check back soon or suggest an idea!
                  </p>
                  <button
                    onClick={() => setActiveTab('all')}
                    className="px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base text-white"
                    style={{ backgroundColor: '#48b0ad' }}
                  >
                    View All Programs
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20" style={{ backgroundColor: '#e3cf12' }}>
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1c1c1c' }}>
                Ready to Get Involved?
              </h2>
              <p className="text-base text-gray-700 mb-8">
                Join one of our programs today and become part of a community that values connection, joy, and mutual support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  className="text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg text-base"
                  style={{ backgroundColor: '#1c1c1c' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
                <motion.a
                  href="/about"
                  className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg text-base"
                  style={{ color: '#1c1c1c' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default ProgramsPage; 