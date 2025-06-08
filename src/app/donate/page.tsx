'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiDollarSign, FiCreditCard, FiShield, FiCheck, FiStar } from 'react-icons/fi';

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const presetAmounts = [25, 50, 100, 250];

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

  const impactData = [
    {
      amount: 25,
      impact: "Provides supplies for one community game night"
    },
    {
      amount: 50,
      impact: "Sponsors refreshments for a small community gathering"
    },
    {
      amount: 100,
      impact: "Helps organize a neighborhood fun day for families"
    },
    {
      amount: 250,
      impact: "Supports a month of senior social hours"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      quote: "The Fun Project brought my family closer to our neighbors. It&apos;s amazing how much joy these events bring!",
      location: "Local Resident"
    },
    {
      name: "David L.",
      quote: "As a volunteer, I&apos;ve seen firsthand how donations make these incredible community connections possible.",
      location: "Volunteer"
    },
    {
      name: "Maria R.",
      quote: "The senior social hours give me something to look forward to every week. Thank you for creating this space!",
      location: "Program Participant"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(203, 51, 138, 0.8)' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Support Our Mission
            </h1>
            <p className="text-base opacity-90 mb-8">
              Your donation helps us bring more joy, connection, and community support to neighborhoods that need it most.
            </p>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <FiShield size={20} />
              <span className="text-base">Secure • Tax-Deductible • 100% Goes to Programs</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Donation Form */}
              <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8" style={{ color: '#1c1c1c' }}>Make a Donation</h2>
                
                {/* Donation Type */}
                <div className="mb-8">
                  <label className="block text-base font-semibold mb-4" style={{ color: '#1c1c1c' }}>Donation Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 text-base ${
                        donationType === 'one-time'
                          ? 'border-teal-500 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                      style={{
                        backgroundColor: donationType === 'one-time' ? '#48b0ad' : 'white'
                      }}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 text-base ${
                        donationType === 'monthly'
                          ? 'border-teal-500 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                      style={{
                        backgroundColor: donationType === 'monthly' ? '#48b0ad' : 'white'
                      }}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-8">
                  <label className="block text-base font-semibold mb-4" style={{ color: '#1c1c1c' }}>Select Amount</label>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 text-base ${
                          selectedAmount === amount && !customAmount
                            ? 'border-teal-500 text-white'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                        style={{
                          backgroundColor: selectedAmount === amount && !customAmount ? '#48b0ad' : 'white'
                        }}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      className="w-full p-4 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
                    />
                    <FiDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>

                {/* Impact Display */}
                <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: '#e3cf12' }}>
                  <h3 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Your Impact:</h3>
                  <p className="text-base" style={{ color: '#1c1c1c' }}>
                    {customAmount 
                      ? `$${customAmount} helps us continue bringing joy to our community!`
                      : impactData.find(item => item.amount === selectedAmount)?.impact || "Every dollar makes a difference!"
                    }
                  </p>
                </div>

                {/* Payment Button */}
                <button className="w-full text-white py-4 px-6 rounded-lg font-semibold text-base hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#cb338a' }}
                >
                  <FiCreditCard size={20} />
                  <span>
                    Donate ${customAmount || selectedAmount} {donationType === 'monthly' ? '/month' : ''}
                  </span>
                </button>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Donations are processed securely. You&apos;ll receive a tax-deductible receipt via email.
                </p>
              </motion.div>

              {/* Why Donate */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#1c1c1c' }}>Why Your Support Matters</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#48b0ad' }}>
                        <FiHeart size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Building Community</h4>
                        <p className="text-base text-gray-600">
                          Your donations fund events that bring neighbors together and create lasting friendships.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#cb338a' }}>
                        <FiStar size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Supporting Seniors</h4>
                        <p className="text-base text-gray-600">
                          Our senior social hours provide vital connection and support for older community members.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3cf12' }}>
                        <FiCheck size={16} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Direct Impact</h4>
                        <p className="text-base text-gray-600">
                          100% of donations go directly to programs. No administrative overhead.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold mb-4 text-center text-base" style={{ color: '#1c1c1c' }}>Trusted by Our Community</h4>
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                    <div className="text-center">
                      <div className="font-bold text-2xl" style={{ color: '#48b0ad' }}>150+</div>
                      <div>Events Hosted</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-2xl" style={{ color: '#cb338a' }}>500+</div>
                      <div>Lives Touched</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-2xl" style={{ color: '#e3cf12' }}>50+</div>
                      <div>Volunteers</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>What Our Community Says</h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Hear from the people whose lives have been touched by The Fun Project
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="inline w-5 h-5 fill-current" style={{ color: '#e3cf12' }} />
                    ))}
                  </div>
                  <p className="text-base text-gray-600 mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <div className="font-semibold text-base" style={{ color: '#1c1c1c' }}>{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#48b0ad' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Every Donation Creates <span style={{ color: '#e3cf12' }}>Joy</span>
            </h2>
            <p className="text-base text-white/90 mb-8">
              Join hundreds of supporters who are making our community stronger, one smile at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg text-base"
                style={{ color: '#1c1c1c' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Make a Donation
              </motion.button>
              <motion.a
                href="/volunteer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg text-base"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'white',
                  color: '#1c1c1c'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Volunteer Instead
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage; 