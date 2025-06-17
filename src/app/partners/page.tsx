'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiHome, FiStar, FiTrendingUp, FiShield, FiTarget, FiCoffee, FiGift, FiCalendar } from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const PartnersPage = () => {
  const partnershipTypes = [
    {
      icon: <FiHome className="w-12 h-12" />,
      title: "Support Organizations",
      description: "Collaborating with local shelters and nonprofits that serve unhoused families",
      examples: ["Local shelters", "Family Promise", "Housing authorities", "Community support centers"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <FiCoffee className="w-12 h-12" />,
      title: "Local Businesses",
      description: "Partnering with businesses to provide venues, supplies, and experiences",
      examples: ["Restaurants for meals", "Entertainment venues", "Activity suppliers", "Transportation services"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <FiUsers className="w-12 h-12" />,
      title: "Community Volunteers",
      description: "Engaging passionate individuals who want to make a difference",
      examples: ["Event coordinators", "Activity leaders", "Care package preparers", "Transportation volunteers"],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <FiStar className="w-12 h-12" />,
      title: "Healthcare Partners",
      description: "Collaborating with mental health professionals for holistic support",
      examples: ["Counseling services", "Mental wellness workshops", "Stress management programs", "Family therapy resources"],
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const partnershipValues = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Compassion",
      description: "Understanding and responding to the needs of unhoused families with empathy and care"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Community",
      description: "Building a supportive network that includes volunteers, organizations, and families"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Inclusivity",
      description: "Ensuring every unhoused family has access to our experiences and resources"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Resilience",
      description: "Empowering families with moments of joy that reinforce their strength and hope"
    }
  ];

  const howWeWork = [
    {
      step: "01",
      title: "Identify Partners",
      description: "We connect with organizations already serving unhoused families to understand their needs and create collaborative opportunities.",
      icon: <FiTarget className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Plan Together",
      description: "Working closely with partners to design activities that complement existing services and maximize impact for families.",
      icon: <FiCalendar className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Execute Events",
      description: "Collaborative event execution ensuring all families feel welcomed, supported, and can participate worry-free.",
      icon: <FiGift className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Measure Impact",
      description: "Gathering feedback from families and partners to continuously improve our approach and expand our reach.",
      icon: <FiTrendingUp className="w-8 h-8" />
    }
  ];

  const customerSegments = [
    {
      title: "Unhoused Parents",
      persona: "Sarah & Mike",
      age: "28-40 years old",
      situation: "Parents of two young children, moving between temporary housing and shelters",
      needs: [
        "Providing normalcy and joy to their children",
        "Finding free family-friendly activities",
        "Connecting with others in similar situations",
        "Alleviating stress and taking breaks from struggles"
      ],
      pain: "Feeling overwhelmed, scarcity of resources, social isolation, worry about the future"
    },
    {
      title: "Support Organizations",
      persona: "James",
      age: "45-60 years old",
      situation: "Director at regional nonprofit focusing on essential services and collaboration",
      needs: [
        "Finding additional programs for comprehensive support",
        "Collaborating with other organizations",
        "Ensuring families have access to variety of resources",
        "Facilitating community building among beneficiaries"
      ],
      pain: "Limited resources, difficulty maintaining engagement, time constraints, pressure to demonstrate impact"
    },
    {
      title: "Community Volunteers",
      persona: "Emma",
      age: "18-30 years old",
      situation: "College student and activist passionate about social justice",
      needs: [
        "Finding meaningful volunteer experiences",
        "Building skills in nonprofit work",
        "Creating connections with like-minded individuals",
        "Understanding challenges faced by unhoused families"
      ],
      pain: "Feeling disconnected, lack of variety in volunteer opportunities, difficulty balancing commitments"
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
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                <span className="text-white">Building</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Community</span>{' '}
                <span className="text-white">Together</span>
              </h1>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-white/90 leading-relaxed">
                JoyHaven&rsquo;s strength lies in our collaborative network of organizations, businesses, 
                and volunteers united in bringing joy to unhoused families.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-slate-800">Our</span>{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Partners</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We collaborate with diverse organizations and individuals to create comprehensive support for families
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${type.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {type.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-500">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Segments */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-slate-800">Who We</span>{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Serve</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Understanding our community helps us create meaningful partnerships and impactful programs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {customerSegments.map((segment, index) => (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">
                      {segment.title}
                    </h3>
                    <div className="text-emerald-600 font-semibold text-lg">
                      {segment.persona}
                    </div>
                    <div className="text-slate-500 text-sm">
                      {segment.age}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-700 mb-2">Situation:</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {segment.situation}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-700 mb-2">Needs:</h4>
                    <ul className="space-y-1">
                      {segment.needs.map((need, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-rose-50 rounded-lg p-4">
                    <h4 className="font-semibold text-rose-700 mb-2">Challenges:</h4>
                    <p className="text-rose-600 text-sm leading-relaxed">
                      {segment.pain}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-slate-800">How We</span>{' '}
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Collaborate</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Our systematic approach ensures effective partnerships that maximize impact for families
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {howWeWork.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-white rounded-full p-2 shadow-lg">
                        <div className="text-purple-500">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Values */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-white">Our Shared</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Values</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                The values that guide our partnerships and unite us in our mission
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {partnershipValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-yellow-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {value.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              <FiUsers className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-slate-800">Partner</span>{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">With Us</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Join our network of compassionate organizations and individuals dedicated to bringing 
                joy and mental wellness support to unhoused families.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiUsers className="mr-2" />
                  Become a Partner
                </motion.a>
                <motion.a
                  href="/volunteer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiHeart className="mr-2" />
                  Volunteer Today
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default PartnersPage; 