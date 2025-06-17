'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTarget, FiHeart, FiUsers, FiTrendingUp, FiCheck, FiSearch, FiCompass, FiStar, FiBookOpen, FiZap, FiArrowRight } from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const OurApproachPage = () => {
  const [activeSection, setActiveSection] = useState('methodology');

  const validationHypotheses = [
    {
      priority: "High",
      type: "Viability",
      hypothesis: "The organization can secure sufficient funding and donations to regularly provide free activities and care packages for unhoused families.",
      testingMethod: "Financial projection analysis and partnership agreements",
      color: "from-emerald-500 to-teal-600"
    },
    {
      priority: "High",
      type: "Desirability",
      hypothesis: "Unhoused families are interested in participating in scheduled fun activities, such as trips and workshops, for stress relief.",
      testingMethod: "Validation survey and customer interviews",
      color: "from-blue-500 to-indigo-600"
    },
    {
      priority: "High",
      type: "Feasibility",
      hypothesis: "The organization can successfully coordinate with other support organizations to ensure consistent attendance and participation from unhoused families.",
      testingMethod: "Expert interviews and pilot event",
      color: "from-purple-500 to-violet-600"
    },
    {
      priority: "Medium",
      type: "Feasibility",
      hypothesis: "There is a sufficient volunteer and staff network to manage and conduct the activities efficiently.",
      testingMethod: "Volunteer engagement and hiring strategy analysis",
      color: "from-yellow-500 to-orange-600"
    },
    {
      priority: "Medium",
      type: "Desirability",
      hypothesis: "Monthly newsletters are an effective method to maintain engagement and communication with participants and supporters.",
      testingMethod: "Email engagement metrics analysis and feedback survey",
      color: "from-rose-500 to-pink-600"
    }
  ];

  const customerDiscoveryQuestions = [
    {
      category: "Understanding the Customer and Context",
      questions: [
        "Can you share your current living situation and some challenges you face on a daily basis?",
        "What kind of support do you currently receive or have access to?",
        "How do you and your family typically spend your free time or weekends?",
        "What is your current level of access to recreational or leisure activities?",
        "Have you participated in any community events or programs aimed at unhoused families? If so, what was your experience like?"
      ]
    },
    {
      category: "Customer Needs and Objectives",
      questions: [
        "What activities do you and your family enjoy participating in together?",
        "In your opinion, what factors contribute most to stress relief and joy for your family?",
        "If given the opportunity, what new activities or experiences would you like to introduce to your family?",
        "What would you hope to achieve by participating in worry-free, fun activities with your family?",
        "How do current programs or services meet, or fail to meet, the needs of unhoused families?"
      ]
    },
    {
      category: "Problem Discovery and Current Solutions",
      questions: [
        "What are the main barriers preventing your family from participating in leisure activities?",
        "How do you currently alleviate stress or find moments of joy with your family?",
        "What alternative solutions or opportunities are available to you for recreation and mental respite?",
        "Can you describe a recent situation where you felt the need for a break or escape but were unable to find a way?",
        "What impact do these unmet needs have on you and your family's well-being?"
      ]
    },
    {
      category: "Value of Potential Solutions",
      questions: [
        "What value do you think a program providing free, worry-free activities would bring to your family?",
        "How would regular access to fun, stress-relieving activities change your daily life?",
        "What types of activities do you believe would hold the greatest interest for your family?",
        "Can you envision any challenges or concerns you might have with participating in such programs?",
        "Would you be open to participating in a monthly newsletter to stay informed about upcoming events and opportunities?"
      ]
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Customer Discovery",
      description: "We conduct in-depth interviews with unhoused families, support organizations, and community volunteers to understand their needs, challenges, and desired solutions.",
      icon: <FiSearch className="w-8 h-8" />,
      details: "Using structured interviews and surveys, we gather insights about current living situations, stress factors, existing support systems, and recreational needs."
    },
    {
      step: "02",
      title: "Hypothesis Validation",
      description: "We test our core assumptions about viability, desirability, and feasibility through systematic validation processes.",
      icon: <FiTarget className="w-8 h-8" />,
      details: "Our validation process includes financial projections, partnership assessments, volunteer engagement analysis, and pilot event planning."
    },
    {
      step: "03",
      title: "Partnership Building",
      description: "We establish relationships with local organizations, businesses, and community groups to create a comprehensive support network.",
      icon: <FiUsers className="w-8 h-8" />,
      details: "Building partnerships with shelters, nonprofits, healthcare providers, and local businesses to ensure sustainable program delivery."
    },
    {
      step: "04",
      title: "Program Development",
      description: "Based on our research, we design activities and care packages that directly address the identified needs of unhoused families.",
      icon: <FiZap className="w-8 h-8" />,
      details: "Creating worry-free activities like zoo trips, sledding days, park workshops, and game nights, each including care packages with essential items."
    },
    {
      step: "05",
      title: "Impact Measurement",
      description: "We continuously measure our impact through participant feedback, volunteer engagement, and community partner assessments.",
      icon: <FiTrendingUp className="w-8 h-8" />,
      details: "Tracking key metrics including families served, participant satisfaction, volunteer engagement levels, and partnership effectiveness."
    }
  ];

  const coreValues = [
    {
      title: "Compassion",
      description: "Understanding and responding to the needs of unhoused families with empathy and care, ensuring they feel valued and respected.",
      icon: <FiHeart className="w-8 h-8" />,
      color: "from-rose-400 to-pink-500"
    },
    {
      title: "Joy",
      description: "Creating opportunities for happiness and fun, offering experiences that bring laughter and smiles to families navigating tough times.",
      icon: <FiStar className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Community",
      description: "Building a supportive network that includes volunteers, support organizations, and families, fostering a sense of belonging and mutual aid.",
      icon: <FiUsers className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Inclusivity",
      description: "Ensuring that every unhoused family, regardless of background, has access to our experiences, activities, and resources.",
      icon: <FiCheck className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Resilience",
      description: "Empowering families with moments of joy that reinforce their strength and hope, contributing to their emotional and mental well-being.",
      icon: <FiTrendingUp className="w-8 h-8" />,
      color: "from-purple-400 to-violet-500"
    }
  ];

  const sections = [
    { id: 'methodology', label: 'Our Methodology', icon: <FiCompass className="w-5 h-5" /> },
    { id: 'validation', label: 'Validation Process', icon: <FiTarget className="w-5 h-5" /> },
    { id: 'discovery', label: 'Customer Discovery', icon: <FiSearch className="w-5 h-5" /> },
    { id: 'values', label: 'Core Values', icon: <FiHeart className="w-5 h-5" /> }
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
                <span className="text-white">Our</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Approach</span>
              </h1>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-white/90 leading-relaxed">
                A research-driven, compassionate approach to bringing joy and mental wellness support 
                to unhoused families through carefully designed experiences and community partnerships.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {section.icon}
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              {activeSection === 'methodology' && (
                <motion.div
                  key="methodology"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                      <span className="text-slate-800">Our</span>{' '}
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Methodology</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      A systematic, research-based approach to understanding needs and delivering impactful solutions
                    </p>
                  </div>

                  <div className="max-w-6xl mx-auto">
                    {methodology.map((step, index) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center mb-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                      >
                        <div className="w-1/2 px-8">
                          <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="flex items-center mb-6">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                                {step.step}
                              </div>
                              <div className="text-emerald-500">
                                {step.icon}
                              </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">
                              {step.title}
                            </h3>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                              {step.description}
                            </p>
                            <p className="text-sm text-slate-500 leading-relaxed">
                              {step.details}
                            </p>
                          </div>
                        </div>
                        <div className="w-1/2 flex justify-center">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'validation' && (
                <motion.div
                  key="validation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                      <span className="text-slate-800">Validation</span>{' '}
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Process</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Critical hypotheses we test to ensure our approach is viable, desirable, and feasible
                    </p>
                  </div>

                  <div className="space-y-8 max-w-6xl mx-auto">
                    {validationHypotheses.map((hypothesis, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-6">
                            <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${hypothesis.color} text-white font-semibold text-sm mb-3`}>
                              {hypothesis.priority} Priority
                            </div>
                            <div className="text-slate-500 text-sm font-medium">
                              {hypothesis.type}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4 text-slate-800">
                              Hypothesis
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                              {hypothesis.hypothesis}
                            </p>
                            <div className="bg-slate-50 rounded-lg p-4">
                              <h4 className="font-semibold text-slate-700 mb-2">Testing Method:</h4>
                              <p className="text-slate-600 text-sm">
                                {hypothesis.testingMethod}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'discovery' && (
                <motion.div
                  key="discovery"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                      <span className="text-slate-800">Customer</span>{' '}
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">Discovery</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      Questions we ask to deeply understand the needs and experiences of unhoused families
                    </p>
                  </div>

                  <div className="space-y-12 max-w-6xl mx-auto">
                    {customerDiscoveryQuestions.map((category, index) => (
                      <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                      >
                        <div className="flex items-center mb-6">
                          <FiBookOpen className="w-8 h-8 text-blue-500 mr-4" />
                          <h3 className="text-2xl font-bold text-slate-800">
                            {category.category}
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.questions.map((question, qIndex) => (
                            <div key={qIndex} className="bg-blue-50 rounded-lg p-4">
                              <div className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-sm flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                  {qIndex + 1}
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                  {question}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeSection === 'values' && (
                <motion.div
                  key="values"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                      <span className="text-slate-800">Core</span>{' '}
                      <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">Values</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                      The fundamental principles that guide every aspect of our work with unhoused families
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {coreValues.map((value, index) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                      >
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="text-white">
                            {value.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">
                          {value.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {value.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
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
              <FiTarget className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-slate-800">Ready to</span>{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Join Our Mission?</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our research-driven approach ensures that every activity, partnership, and resource 
                is designed to create meaningful impact for unhoused families.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/partners"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiUsers className="mr-2" />
                  Partner With Us
                </motion.a>
                <motion.a
                  href="/impact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiArrowRight className="mr-2" />
                  See Our Impact
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default OurApproachPage; 