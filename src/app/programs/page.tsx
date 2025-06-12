'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiStar, FiTrendingUp } from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const ProgramsPage = () => {
  const programs = [
    {
      icon: FiHeart,
      title: 'Art Therapy Sessions',
      description: 'Creative outlets for self-expression and emotional healing, helping individuals process their experiences through art.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: FiUsers,
      title: 'Family Activities',
      description: 'Interactive play sessions and outdoor activities designed for children and their parents to bond and create lasting memories.',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      icon: FiStar,
      title: 'Guided Relaxation',
      description: 'Mindfulness exercises and relaxation techniques to help reduce stress and promote emotional well-being.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Community Events',
      description: 'Regular gatherings that combine essential resources with fun activities, creating a supportive environment for families.',
      color: 'from-purple-400 to-indigo-500'
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
                <span className="text-white">Our</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Programs</span>
              </h1>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Combining essential resources with mental health-focused activities to create meaningful experiences for families.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-xl"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${program.color} shadow-lg`}>
                    <program.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {program.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Care Packages Section */}
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
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Essential Care Packages
                </span>
              </h2>
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-8 shadow-xl">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  At each event, we distribute carefully curated care packages that include:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center space-x-3 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Hygiene Kits</span>
                  </li>
                  <li className="flex items-center space-x-3 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Clothing</span>
                  </li>
                  <li className="flex items-center space-x-3 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Outerwear</span>
                  </li>
                  <li className="flex items-center space-x-3 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span>Educational Materials</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Plans Section */}
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
                Looking Ahead
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our goal is to expand our services by hosting events more frequently and reaching additional communities
                across Michigan. In the future, we plan to offer:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                  <span className="text-slate-700">Weekly events with expanded activities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                  <span className="text-slate-700">Age-specific day camps during summer months</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                  <span className="text-slate-700">Transportation services for participants</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                  <span className="text-slate-700">Grander experiences for participating families</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default ProgramsPage; 