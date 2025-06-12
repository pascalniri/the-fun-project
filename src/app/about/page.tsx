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
      year: "Founder's Experience",
      title: "Personal Journey",
      description: "Our founder's lived experience with housing instability revealed the crucial need for mental wellness support during crisis moments."
    },
    {
      year: "2024",
      title: "Vision Development",
      description: "The Fun Project concept was developed, focusing on putting fun in moments of crisis through joyous experiences for those without stable housing."
    },
    {
      year: "Current",
      title: "Building Foundation",
      description: "Conducting customer discovery, building partnerships with organizations in Washtenaw County, and preparing for 501(c)(3) nonprofit status."
    },
    {
      year: "Near Future",
      title: "First Events",
      description: "Planning to host our first mental health-focused events once key partnerships and funding are secured."
    }
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-white">About</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">The Fun Project</span>
              </h1>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The Fun Project puts the fun in a moment of crisis by creating joyous experiences for
                  individuals and families without stable housing.
                </p>
              </motion.div>

              {/* Vision Statement */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The Fun Project is committed to partnering with organizations in Washtenaw County to provide
                  those without stable housing with meaningful events that focus on mental wellness through
                  enjoyable and uplifting experiences that families can relish in together.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder's Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Founder's Story
                </span>
              </h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-slate-700 leading-relaxed mb-6">
                  As the founder of The Fun Project, I have a clear understanding of the challenges faced by those
                  experiencing housing instability. My lived experience in similar circumstances has given me
                  direct insight into the mental, emotional, and practical needs of the individuals we aim to serve.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Through my journey, I've witnessed how having fun isn't a priority but it's core to one's
                  well-being and mental health. Due to my experiences being without a home, I've been able to
                  develop strong organizational and leadership skills, including the ability to coordinate
                  community activities on a tight budget, foster relationships, and build a sense of trust among
                  those I serve.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  With over 23 years of customer service experience, I bring a unique perspective to The Fun Project.
                  My approach to helping families is rooted in respect, support, and understanding - helping them
                  have fun while being able to take some time out of their challenging situation so that they can
                  move forward.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Current Status Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Where We Are Now
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The Fun Project is currently in the process of being formally established as a non-profit organization.
                While not yet fully operational, significant efforts are underway to launch its programs and services
                in the near future.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our initial focus includes building partnerships, securing necessary resources, and building the
                foundation to begin serving people facing housing instability in Washtenaw County through fun and
                exciting events focusing on mental health in the most amusing and entertaining capacity possible.
              </p>
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
                  href="/contact"
                  className="text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                  style={{ backgroundColor: '#1c1c1c' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="/programs"
                  className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                  style={{ color: '#1c1c1c' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Programs
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