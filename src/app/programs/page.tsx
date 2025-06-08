'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiCalendar, FiClock, FiMapPin, FiArrowRight } from 'react-icons/fi';

const ProgramsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const programCategories = [
    { id: 'all', name: 'All Programs' },
    { id: 'seniors', name: 'Senior Programs' },
    { id: 'families', name: 'Family Programs' },
    { id: 'community', name: 'Community Building' },
    { id: 'seasonal', name: 'Seasonal Events' }
  ];

  const programs = [
    {
      id: 1,
      title: "Senior Social Hours",
      category: "seniors",
      description: "Weekly gatherings for our senior community members featuring coffee, conversation, games, and friendship.",
      schedule: "Every Wednesday, 2:00 PM - 4:00 PM",
      location: "Senior Community Center",
      participants: "15-25 seniors",
      image: "☕",
      benefits: [
        "Combat social isolation",
        "Build lasting friendships", 
        "Mental stimulation through activities",
        "Health and wellness check-ins"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Family Game Nights",
      category: "families",
      description: "Monthly board game and card game evenings bringing families together for fun and connection.",
      schedule: "First Friday of each month, 6:00 PM - 8:00 PM",
      location: "Community Recreation Center",
      participants: "20-30 families",
      image: "🎲",
      benefits: [
        "Screen-free family time",
        "Meet other families in the area",
        "Learn new games",
        "Build problem-solving skills"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Community Clean-Up Days",
      category: "community",
      description: "Monthly volunteer events to beautify our neighborhood parks, streets, and public spaces.",
      schedule: "Third Saturday of each month, 9:00 AM - 12:00 PM",
      location: "Various neighborhood locations",
      participants: "30-50 volunteers",
      image: "🌱",
      benefits: [
        "Improve community appearance",
        "Environmental stewardship",
        "Meet engaged neighbors",
        "Sense of civic pride"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Holiday Celebrations",
      category: "seasonal",
      description: "Special events throughout the year celebrating holidays and bringing the community together.",
      schedule: "Various times throughout the year",
      location: "Community Center or Parks",
      participants: "50-200 attendees",
      image: "🎉",
      benefits: [
        "Celebrate together as a community",
        "Cultural exchange and learning",
        "Create lasting memories",
        "Include all community members"
      ],
      featured: true
    },
    {
      id: 5,
      title: "Youth Mentorship Program",
      category: "community",
      description: "Connecting experienced community members with young people for guidance and support.",
      schedule: "Ongoing, flexible scheduling",
      location: "Various locations",
      participants: "10-15 mentor-mentee pairs",
      image: "🤝",
      benefits: [
        "Positive role models for youth",
        "Intergenerational connections",
        "Personal development",
        "Community investment"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Neighborhood Potluck Dinners",
      category: "families",
      description: "Casual monthly dinners where neighbors bring dishes to share and get to know each other.",
      schedule: "Second Sunday of each month, 5:00 PM - 7:00 PM",
      location: "Rotating neighborhood locations",
      participants: "25-40 neighbors",
      image: "🍽️",
      benefits: [
        "Share diverse foods and cultures",
        "Build neighborhood connections",
        "Low-cost social activity",
        "Strengthen community bonds"
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
              Our Programs
            </h1>
            <p className="text-base opacity-90">
              Discover the variety of programs and activities we offer to bring joy, 
              connection, and support to every member of our community.
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
                  We're always developing new programs. Check back soon or suggest an idea!
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
                href="/volunteer"
                className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg text-base"
                style={{ color: '#1c1c1c' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Volunteer with Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage; 