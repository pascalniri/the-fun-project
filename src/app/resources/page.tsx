'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGift, FiHeart, FiShield, FiBook, FiHome, FiPhone, FiMail, FiStar, FiCheck, FiExternalLink } from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('care-packages');

  const carePackageItems = [
    {
      category: "Hygiene Essentials",
      items: [
        "Toothbrushes and toothpaste",
        "Soap and shampoo",
        "Deodorant",
        "Hand sanitizer",
        "Feminine hygiene products",
        "Baby wipes and diapers (when needed)"
      ],
      icon: <FiShield className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500"
    },
    {
      category: "Comfort Items",
      items: [
        "Warm blankets",
        "Socks and underwear",
        "Seasonal clothing items",
        "Stuffed animals for children",
        "Journals and pens",
        "Comfort snacks"
      ],
      icon: <FiHeart className="w-6 h-6" />,
      color: "from-rose-400 to-pink-500"
    },
    {
      category: "Educational Materials",
      items: [
        "Children's books and coloring books",
        "Crayons and colored pencils",
        "Educational games and puzzles",
        "Homework supplies",
        "Learning activity sheets",
        "Story books for bedtime"
      ],
      icon: <FiBook className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "Practical Supplies",
      items: [
        "Reusable water bottles",
        "Healthy snacks",
        "First aid supplies",
        "Flashlights and batteries",
        "Phone chargers",
        "Grocery gift cards"
      ],
      icon: <FiGift className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const resourceCategories = [
    {
      title: "Housing Resources",
      description: "Information about temporary housing, shelters, and housing assistance programs",
      resources: [
        {
          name: "Local Emergency Shelters",
          description: "24/7 emergency housing assistance",
          contact: "Call 211 for immediate help",
          type: "Emergency"
        },
        {
          name: "Family Promise",
          description: "Temporary housing and case management for families",
          contact: "Visit familypromise.org",
          type: "Family-focused"
        },
        {
          name: "Housing Choice Voucher Program",
          description: "Rental assistance through Section 8",
          contact: "Contact local housing authority",
          type: "Long-term"
        }
      ],
      icon: <FiHome className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Mental Health Support",
      description: "Free and low-cost mental health services for individuals and families",
      resources: [
        {
          name: "Crisis Text Line",
          description: "24/7 crisis support via text",
          contact: "Text HOME to 741741",
          type: "Crisis Support"
        },
        {
          name: "Community Mental Health Centers",
          description: "Sliding scale counseling services",
          contact: "Call 211 for local centers",
          type: "Ongoing Care"
        },
        {
          name: "National Suicide Prevention Lifeline",
          description: "24/7 suicide prevention and crisis support",
          contact: "Call 988",
          type: "Crisis Support"
        }
      ],
      icon: <FiHeart className="w-8 h-8" />,
      color: "from-rose-500 to-pink-600"
    },
    {
      title: "Food Assistance",
      description: "Resources for free meals and food programs for families",
      resources: [
        {
          name: "Local Food Banks",
          description: "Free groceries and meals",
          contact: "Call 211 for locations",
          type: "Food Security"
        },
        {
          name: "SNAP Benefits",
          description: "Supplemental Nutrition Assistance Program",
          contact: "Apply at benefits.gov",
          type: "Government Aid"
        },
        {
          name: "WIC Program",
          description: "Women, Infants, and Children nutrition program",
          contact: "Visit fns.usda.gov/wic",
          type: "Family Support"
        }
      ],
      icon: <FiGift className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Educational Support",
      description: "Resources for children's education and adult learning opportunities",
      resources: [
        {
          name: "McKinney-Vento Act",
          description: "Educational rights for children experiencing homelessness",
          contact: "Contact school district",
          type: "Legal Rights"
        },
        {
          name: "Local Libraries",
          description: "Free internet, computers, and educational programs",
          contact: "Visit your local library",
          type: "Educational Access"
        },
        {
          name: "Adult Education Centers",
          description: "GED classes and job training programs",
          contact: "Call 211 for local programs",
          type: "Adult Learning"
        }
      ],
      icon: <FiBook className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600"
    }
  ];

  const emergencyContacts = [
    {
      name: "Emergency Services",
      number: "911",
      description: "Police, fire, medical emergencies",
      available: "24/7"
    },
    {
      name: "Crisis Support",
      number: "988",
      description: "Suicide & Crisis Lifeline",
      available: "24/7"
    },
    {
      name: "Information & Referral",
      number: "211",
      description: "Local resources and services",
      available: "24/7"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Crisis support via text",
      available: "24/7"
    }
  ];

  const tabs = [
    { id: 'care-packages', label: 'Care Packages', icon: <FiGift className="w-5 h-5" /> },
    { id: 'resources', label: 'Community Resources', icon: <FiBook className="w-5 h-5" /> },
    { id: 'emergency', label: 'Emergency Contacts', icon: <FiPhone className="w-5 h-5" /> }
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
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-white">Resources</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">& Support</span>
              </h1>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive support for unhoused families including care packages, community resources, 
                and essential contacts for immediate assistance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              {activeTab === 'care-packages' && (
                <motion.div
                  key="care-packages"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                      <span className="text-slate-800">Care</span>{' '}
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Packages</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Every family receives thoughtfully curated care packages at each event, 
                      filled with essential items and comfort supplies.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {carePackageItems.map((category, index) => (
                      <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white">
                            {category.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">
                          {category.category}
                        </h3>
                        <ul className="space-y-3">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-slate-600">
                              <FiCheck className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12 max-w-4xl mx-auto"
                  >
                    <FiStar className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">
                      Thoughtfully Curated with Love
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Each care package is prepared with compassion and understanding of the unique needs 
                      of unhoused families. We ensure every item serves a purpose and brings comfort during 
                      challenging times.
                    </p>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 'resources' && (
                <motion.div
                  key="resources"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                      <span className="text-slate-800">Community</span>{' '}
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Resources</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Comprehensive directory of local and national resources available to support 
                      unhoused families in their journey toward stability.
                    </p>
                  </div>

                  <div className="space-y-12 max-w-6xl mx-auto">
                    {resourceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                      >
                        <div className="flex items-center mb-6">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}>
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-800">
                              {category.title}
                            </h3>
                            <p className="text-slate-600">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {category.resources.map((resource, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-semibold text-slate-800">
                                  {resource.name}
                                </h4>
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                                  {resource.type}
                                </span>
                              </div>
                              <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                                {resource.description}
                              </p>
                              <div className="flex items-center text-sm text-emerald-600 font-medium">
                                <FiExternalLink className="w-4 h-4 mr-1" />
                                {resource.contact}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'emergency' && (
                <motion.div
                  key="emergency"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                      <span className="text-slate-800">Emergency</span>{' '}
                      <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">Contacts</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Important phone numbers and resources for immediate assistance and crisis support.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {emergencyContacts.map((contact, index) => (
                      <motion.div
                        key={contact.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
                      >
                        <div className="flex items-center mb-4">
                          <FiPhone className="w-8 h-8 text-red-500 mr-4" />
                          <div>
                            <h3 className="text-xl font-bold text-slate-800">
                              {contact.name}
                            </h3>
                            <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full">
                              {contact.available}
                            </span>
                          </div>
                        </div>
                        <div className="mb-4">
                          <a 
                            href={`tel:${contact.number.replace(/\D/g, '')}`}
                            className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                          >
                            {contact.number}
                          </a>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {contact.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 bg-gradient-to-r from-red-50 to-rose-50 rounded-3xl p-12 max-w-4xl mx-auto text-center"
                  >
                    <FiShield className="w-16 h-16 mx-auto mb-6 text-red-500" />
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">
                      You Are Not Alone
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      If you&rsquo;re experiencing a crisis or need immediate support, don&rsquo;t hesitate to reach out. 
                      These resources are available 24/7 and trained professionals are ready to help.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <FiHeart className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-slate-800">Need</span>{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Support?</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We&rsquo;re here to help connect you with the resources and support you need. 
                Reach out to us or use the emergency contacts above for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiMail className="mr-2" />
                  Contact Us
                </motion.a>
                <motion.a
                  href="tel:211"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiPhone className="mr-2" />
                  Call 211 for Help
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default ResourcesPage; 