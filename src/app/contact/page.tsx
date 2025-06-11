'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiHeart
} from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@thefunproject.org",
      description: "We'll get back to you within 24 hours"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Service Area",
      content: "Washtenaw County, Michigan",
      description: "Serving individuals and families without stable housing"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Development Phase",
      content: "Currently Building Partnerships",
      description: "Preparing to launch our first events"
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Get Involved",
      content: "Share Ideas & Feedback",
      description: "Help us understand community needs"
    }
  ];

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
      <section className="relative text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-teal-700/85 to-emerald-800/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-teal-500/20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          <motion.div 
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white/10 blur-xl"
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
            className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-white/5 blur-2xl"
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
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
              <h1 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                We&apos;d love to hear from you! Whether you have questions, ideas, or want to get involved, 
                we&apos;re here to help and connect.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose the method that works best for you - we&apos;re always ready to connect
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg scale-105"></div>
                  
                  {/* Card */}
                  <div className="relative backdrop-blur-sm bg-white/90 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/50 group-hover:border-emerald-200/50 transform group-hover:-translate-y-2">
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <div className="text-white text-xl">
                          {info.icon}
                        </div>
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-800">{info.title}</h3>
                    <p className="font-bold mb-3 text-lg bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                      {info.content}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Our Service Area</h2>
              <p className="text-base text-gray-600">
                We serve individuals and families facing housing instability throughout Washtenaw County, Michigan
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 md:h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin className="w-12 h-12 mx-auto mb-4" style={{ color: '#48b0ad' }} />
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1c1c1c' }}>Washtenaw County, Michigan</h3>
                  <p className="text-base text-gray-600">
                    Currently building partnerships with local organizations to serve our community
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </PublicLayout>
  );
};

export default ContactPage; 