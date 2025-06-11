'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock, 
  FiSend, 
  FiUser,
  FiMessageSquare,
  FiHeart
} from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';
import { API_ENDPOINTS } from '../../config/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch(API_ENDPOINTS.messages, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage({ 
          type: 'success', 
          text: result.message || 'Message sent successfully! We\'ll get back to you soon.' 
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          type: 'general'
        });
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: result.error || 'Failed to send message. Please try again.' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage({ 
        type: 'error', 
        text: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const contactTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'volunteer', label: 'Volunteer Interest' },
    { value: 'event', label: 'Event Question' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'media', label: 'Media Inquiry' }
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

      {/* Contact Form */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-all duration-500 blur-xl scale-105"></div>
                
                <div className="relative backdrop-blur-sm bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
                  <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Send us a Message</h2>
                
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-lg font-semibold mb-3 text-slate-700">
                          <FiUser className="inline w-5 h-5 mr-2 text-emerald-600" />
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                            className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg text-gray-800 transition-all duration-300 bg-gray-50/50 hover:bg-white placeholder-gray-500"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-lg font-semibold mb-3 text-slate-700">
                          <FiMail className="inline w-5 h-5 mr-2 text-emerald-600" />
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                            className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg text-gray-800 transition-all duration-300 bg-gray-50/50 hover:bg-white placeholder-gray-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                        <label className="block text-lg font-semibold mb-3 text-slate-700">
                          Inquiry Type
                        </label>
                        <select
                            name="type"
                            value={formData.type}
                          onChange={handleChange}
                              className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg text-gray-800 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                          >
                            {contactTypes.map((type) => (
                                <option key={type.value} value={type.value} className="text-gray-800">
                                {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                    <div>
                        <label className="block text-lg font-semibold mb-3 text-slate-700">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                            className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg text-gray-800 transition-all duration-300 bg-gray-50/50 hover:bg-white placeholder-gray-500"
                          placeholder="Brief subject line"
                        />
                      </div>
                      
                    <div>
                      <label className="block text-lg font-semibold mb-3 text-slate-700">
                        <FiMessageSquare className="inline w-5 h-5 mr-2 text-emerald-600" />
                        Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                          className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 text-lg text-gray-800 resize-none transition-all duration-300 bg-gray-50/50 hover:bg-white placeholder-gray-500"
                        placeholder="Tell us how we can help you..."
                    />
                  </div>

                      {submitMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-4 rounded-lg mb-6 ${
                            submitMessage.type === 'success' 
                              ? 'bg-green-50 text-green-800 border border-green-200' 
                              : 'bg-red-50 text-red-800 border border-red-200'
                          }`}
                        >
                          <p className="text-sm font-medium">{submitMessage.text}</p>
                        </motion.div>
                      )}

                    <motion.button
                    type="submit"
                        disabled={isSubmitting}
                        className={`group relative w-full overflow-hidden text-white py-5 px-8 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-lg shadow-lg hover:shadow-xl transform ${
                          isSubmitting 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 hover:-translate-y-1'
                        }`}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                          {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          )}
                          
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white relative z-10"></div>
                              <span className="relative z-10">Sending...</span>
                            </>
                          ) : (
                            <>
                        <FiSend size={22} className="relative z-10" />
                        <span className="relative z-10">Send Message</span>
                            </>
                          )}
                    </motion.button>
                  </form>
                  
                  <p className="text-gray-500 mt-6 text-center leading-relaxed">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#1c1c1c' }}>Why Contact Us?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#48b0ad' }}>
                        <FiHeart size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Get Involved</h4>
                        <p className="text-base text-gray-600">
                          Learn about volunteer opportunities and how you can make a difference in your community.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#cb338a' }}>
                        <FiUser size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Share Ideas</h4>
                        <p className="text-base text-gray-600">
                          Have a great idea for a community event or program? We&apos;d love to hear it!
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3cf12' }}>
                        <FiMessageSquare size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Ask Questions</h4>
                        <p className="text-base text-gray-600">
                          Questions about our programs, events, or how to participate? We&apos;re here to help.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Join Our Community</h3>
                  <p className="text-base opacity-90 mb-6 leading-relaxed">
                    Be the first to know about upcoming events, volunteer opportunities, and ways to make an impact in your community.
                  </p>
                  <div className="flex space-x-4">
                    <motion.button
                      className="flex-1 bg-white text-emerald-700 py-3 px-6 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Newsletter Signup
                    </motion.button>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#1c1c1c' }}>Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Response Time</span>
                      <span className="font-semibold" style={{ color: '#1c1c1c' }}>Within 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Office Hours</span>
                      <span className="font-semibold" style={{ color: '#1c1c1c' }}>Mon-Fri, 9 AM - 5 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Location</span>
                      <span className="font-semibold" style={{ color: '#1c1c1c' }}>Washtenaw County</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section> */}

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