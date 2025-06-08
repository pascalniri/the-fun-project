'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiHeart, FiArrowRight, FiFilter } from 'react-icons/fi';

const EventsPage = () => {
  const [filter, setFilter] = useState('all');

  const eventCategories = [
    { id: 'all', name: 'All Events' },
    { id: 'community', name: 'Community' },
    { id: 'seniors', name: 'Seniors' },
    { id: 'families', name: 'Families' },
    { id: 'special', name: 'Special Events' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Game Night",
      date: "2024-12-15",
      time: "6:00 PM - 8:00 PM",
      location: "Community Center",
      address: "123 Main Street",
      category: "community",
      description: "Join us for an evening of board games, card games, and lots of laughs! All ages welcome.",
      capacity: "50 people",
      registered: 23,
      image: "🎲",
      featured: true
    },
    {
      id: 2,
      title: "Senior Social Hour",
      date: "2024-12-18",
      time: "2:00 PM - 4:00 PM", 
      location: "Senior Center",
      address: "456 Oak Avenue",
      category: "seniors",
      description: "Coffee, conversation, and connection for our wonderful senior community members.",
      capacity: "30 people",
      registered: 15,
      image: "☕",
      featured: false
    },
    {
      id: 3,
      title: "Family Fun Day",
      date: "2024-12-22",
      time: "10:00 AM - 2:00 PM",
      location: "Maple Park",
      address: "789 Park Drive",
      category: "families",
      description: "Outdoor games, picnic lunch, and activities for the whole family to enjoy together.",
      capacity: "100 people",
      registered: 67,
      image: "🎪",
      featured: true
    },
    {
      id: 4,
      title: "New Year Community Celebration",
      date: "2024-12-31",
      time: "6:00 PM - 10:00 PM",
      location: "Town Square",
      address: "Downtown Area",
      category: "special",
      description: "Ring in the new year with your neighbors! Food, music, and a countdown celebration.",
      capacity: "200 people",
      registered: 89,
      image: "🎊",
      featured: true
    }
  ];

  const pastEvents = [
    {
      title: "Halloween Community Party",
      date: "October 31, 2024",
      participants: 150,
      image: "🎃",
      description: "Costume contest, trick-or-treating, and spooky fun for all ages."
    },
    {
      title: "Summer Picnic Festival",
      date: "August 15, 2024", 
      participants: 200,
      image: "🌞",
      description: "Food trucks, live music, and outdoor games in the park."
    },
    {
      title: "Spring Community Garden",
      date: "May 20, 2024",
      participants: 75,
      image: "🌱",
      description: "Planting flowers and vegetables together to beautify our neighborhood."
    }
  ];

  const filteredEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === filter);

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
              backgroundImage: `url('https://images.unsplash.com/photo-1551818255-e6e10975cd73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`
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
              Community Events
            </h1>
            <p className="text-base opacity-90">
              Join us for fun, connection, and memorable experiences that bring our community together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Filter */}
      <section className="py-12" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <FiFilter className="mr-2" style={{ color: '#1c1c1c' }} />
              <span className="font-semibold text-base" style={{ color: '#1c1c1c' }}>Filter Events:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {eventCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base ${
                    filter === category.id
                      ? 'text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:shadow-md'
                  }`}
                  style={{
                    backgroundColor: filter === category.id ? '#cb338a' : 'white'
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>
                {filter === 'all' ? 'Upcoming Events' : `${eventCategories.find(c => c.id === filter)?.name} Events`}
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Mark your calendar and join us for these exciting community gatherings
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={fadeInUp}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    event.featured ? 'ring-2 ring-offset-2 ring-yellow-400' : ''
                  }`}
                >
                  {event.featured && (
                    <div className="px-4 py-2 text-center text-white text-sm font-semibold" style={{ backgroundColor: '#e3cf12', color: '#1c1c1c' }}>
                      ⭐ Featured Event
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{event.image}</div>
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: '#48b0ad', color: 'white' }}
                      >
                        {eventCategories.find(c => c.id === event.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#1c1c1c' }}>{event.title}</h3>
                    <p className="text-base text-gray-600 mb-4">{event.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <FiCalendar className="w-5 h-5 mr-3" style={{ color: '#48b0ad' }} />
                        <span className="text-base">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiClock className="w-5 h-5 mr-3" style={{ color: '#cb338a' }} />
                        <span className="text-base">{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiMapPin className="w-5 h-5 mr-3" style={{ color: '#e3cf12' }} />
                        <div>
                          <div className="text-base font-medium">{event.location}</div>
                          <div className="text-sm text-gray-500">{event.address}</div>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FiUsers className="w-5 h-5 mr-3" style={{ color: '#1c1c1c' }} />
                        <span className="text-base">{event.registered} / {event.capacity.split(' ')[0]} registered</span>
                      </div>
                    </div>

                    {/* Registration Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Registration</span>
                        <span className="font-medium" style={{ color: '#1c1c1c' }}>
                          {Math.round((event.registered / parseInt(event.capacity)) * 100)}% full
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="h-3 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(event.registered / parseInt(event.capacity)) * 100}%`,
                            backgroundColor: '#48b0ad'
                          }}
                        />
                      </div>
                    </div>
                    
                    <button className="w-full text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 text-base"
                      style={{ backgroundColor: '#cb338a' }}
                    >
                      <FiHeart size={18} />
                      <span>Register for Event</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <motion.div variants={fadeInUp} className="text-center py-16">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1c1c1c' }}>No events found</h3>
                <p className="text-base text-gray-600 mb-6">
                  No events in this category right now. Check back soon or explore other categories!
                </p>
                <button
                  onClick={() => setFilter('all')}
                  className="px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base text-white"
                  style={{ backgroundColor: '#48b0ad' }}
                >
                  View All Events
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-20" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Past Event Highlights</h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Look back at some of the amazing moments we've shared together as a community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{event.image}</div>
                    <div className="font-bold text-2xl" style={{ color: '#48b0ad' }}>
                      {event.participants}
                    </div>
                    <div className="text-sm text-gray-500">participants</div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-center" style={{ color: '#1c1c1c' }}>{event.title}</h3>
                  <p className="text-base text-gray-600 text-center mb-3">{event.description}</p>
                  <div className="text-center text-sm text-gray-500">{event.date}</div>
                </motion.div>
              ))}
            </div>
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
              Host Your Own Event
            </h2>
            <p className="text-base text-gray-700 mb-8">
              Have an idea for a community event? We'd love to help you bring it to life and connect with your neighbors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg text-base"
                style={{ backgroundColor: '#1c1c1c' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Propose an Event
              </motion.a>
              <motion.a
                href="/volunteer"
                className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg text-base"
                style={{ color: '#1c1c1c' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Volunteer at Events
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage; 