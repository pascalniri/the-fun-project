'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiTarget, FiStar, FiCalendar } from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const AboutPage = () => {
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

  const values = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Joy & Positivity",
      description: "We believe in the power of joy to transform communities and bring people together."
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Inclusive Community",
      description: "Everyone is welcome in our community, regardless of background, age, or circumstances."
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Purposeful Impact",
      description: "Every activity and event we organize has a meaningful purpose behind it."
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from planning to execution."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Idea",
      description: "The Fun Project was conceived as a way to bring more joy and connection to our community."
    },
    {
      year: "2024",
      title: "501(c)(3) Application",
      description: "We filed our application for nonprofit status to formalize our mission and expand our impact."
    },
    {
      year: "2024",
      title: "First Events",
      description: "Launched our first community events and volunteer programs with overwhelming positive response."
    },
    {
      year: "Future",
      title: "Growing Impact",
      description: "Expanding our programs and reaching more communities in need of joy and connection."
    }
  ];

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
                backgroundImage: `url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80')`
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
                About The Fun Project
              </h1>
              <p className="text-base opacity-90">
                Bringing joy, building community, and making a difference one smile at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20" style={{ backgroundColor: '#eeeeee' }}>
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                  <div className="bg-white rounded-2xl p-8 text-center shadow-md">
                    <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')`
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#1c1c1c' }}>Meet Our Founder</h3>
                    <p className="text-base text-gray-600">Passionate about community building</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <h2 className="text-4xl font-bold mb-6" style={{ color: '#1c1c1c' }}>Our Story</h2>
                  <div className="space-y-4">
                    <p className="text-base text-gray-600">
                      The Fun Project was born from a simple observation: our communities needed more joy, 
                      connection, and opportunities to come together in meaningful ways.
                    </p>
                    <p className="text-base text-gray-600">
                      What started as informal gatherings among friends has grown into a mission to create 
                      lasting positive impact through fun, engaging activities that bring people together 
                      and support those in need.
                    </p>
                    <p className="text-base text-gray-600">
                      As a 501(c)(3) pending nonprofit organization, we&apos;re committed to transparency, 
                      community involvement, and making every dollar count toward our mission of 
                      spreading joy and building stronger communities.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
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
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Mission & Vision</h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto">
                  Our guiding principles that drive everything we do
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  variants={fadeInUp}
                  className="text-white p-8 rounded-2xl"
                  style={{ backgroundColor: '#48b0ad' }}
                >
                  <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                  <p className="text-base opacity-90">
                    To bring joy and build community through fun, inclusive activities and events 
                    that connect people, support those in need, and create lasting positive impact 
                    in our neighborhoods and beyond.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="text-white p-8 rounded-2xl"
                  style={{ backgroundColor: '#cb338a' }}
                >
                  <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                  <p className="text-base opacity-90">
                    A world where every community has access to joy, connection, and support - 
                    where neighbors know each other, where fun brings people together, and where 
                    everyone feels valued and included.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
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
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Our Core Values</h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto">
                  The principles that guide our work and shape our community
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="mb-4" style={{ color: '#48b0ad' }}>{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1c1c1c' }}>{value.title}</h3>
                    <p className="text-base text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Our Journey</h2>
                <p className="text-base text-gray-600">
                  From idea to impact - the story of The Fun Project
                </p>
              </motion.div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start space-x-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#48b0ad' }}>
                        <FiCalendar className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl font-bold mr-4" style={{ color: '#48b0ad' }}>{item.year}</span>
                          <h3 className="text-xl font-bold" style={{ color: '#1c1c1c' }}>{item.title}</h3>
                        </div>
                        <p className="text-base text-gray-600">{item.description}</p>
                      </div>
                    </div>
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
                Join Our Mission
              </h2>
              <p className="text-base text-gray-700 mb-8">
                Be part of something bigger. Help us bring more joy and connection to communities everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/volunteer"
                  className="text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                  style={{ backgroundColor: '#1c1c1c' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Volunteer With Us
                </motion.a>
                <motion.a
                  href="/donate"
                  className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                  style={{ color: '#1c1c1c' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Support Our Work
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default AboutPage; 