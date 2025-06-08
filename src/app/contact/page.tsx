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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      content: "(555) 123-4567",
      description: "Available Monday-Friday, 9 AM - 5 PM"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Community Street",
      description: "Joyville, CA 90210"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Office Hours",
      content: "Mon-Fri: 9 AM - 5 PM",
      description: "Weekend events by appointment"
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80')`
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
              Get in Touch
            </h1>
            <p className="text-base opacity-90">
              We&apos;d love to hear from you! Whether you have questions, ideas, or want to get involved, 
              we&apos;re here to help and connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Ways to Reach Us</h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Choose the method that works best for you - we&apos;re always ready to connect
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="mb-4 flex justify-center" style={{ color: '#48b0ad' }}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1c1c1c' }}>{info.title}</h3>
                  <p className="font-semibold mb-2 text-base" style={{ color: '#cb338a' }}>{info.content}</p>
                  <p className="text-base text-gray-600">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{ color: '#1c1c1c' }}>Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold mb-2" style={{ color: '#1c1c1c' }}>
                        <FiUser className="inline w-4 h-4 mr-2" />
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-base font-semibold mb-2" style={{ color: '#1c1c1c' }}>
                        <FiMail className="inline w-4 h-4 mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{ color: '#1c1c1c' }}>
                      Inquiry Type
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
                    >
                      {contactTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{ color: '#1c1c1c' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
                      placeholder="Brief subject line"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-semibold mb-2" style={{ color: '#1c1c1c' }}>
                      <FiMessageSquare className="inline w-4 h-4 mr-2" />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-base resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 text-base"
                    style={{ backgroundColor: '#cb338a' }}
                  >
                    <FiSend size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </motion.div>

              {/* Additional Info */}
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
                          Have a great idea for a community event or program? We'd love to hear it!
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
                          Whether it&apos;s about our programs, events, or how to get involved - we&apos;re here to help.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Times */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold mb-4 text-center text-base" style={{ color: '#1c1c1c' }}>Response Times</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">General Inquiries:</span>
                      <span className="font-medium" style={{ color: '#48b0ad' }}>Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Volunteer Questions:</span>
                      <span className="font-medium" style={{ color: '#cb338a' }}>Within 12 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Event Information:</span>
                      <span className="font-medium" style={{ color: '#e3cf12' }}>Same day</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Find Us</h2>
              <p className="text-base text-gray-600">
                We&apos;re located in the heart of the community we serve
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 md:h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin className="w-12 h-12 mx-auto mb-4" style={{ color: '#48b0ad' }} />
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1c1c1c' }}>Interactive Map Coming Soon</h3>
                  <p className="text-base text-gray-600">
                    123 Community Street, Joyville, CA 90210
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 