'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiHeart, FiUsers, FiCalendar, FiStar, FiCheck, FiGift, FiSend, FiSmile } from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const NewsletterPage = () => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [role, setRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    { id: 'events', label: 'Upcoming Events & Activities', icon: <FiCalendar className="w-5 h-5" /> },
    { id: 'volunteer', label: 'Volunteer Opportunities', icon: <FiUsers className="w-5 h-5" /> },
    { id: 'resources', label: 'Community Resources', icon: <FiGift className="w-5 h-5" /> },
    { id: 'impact', label: 'Impact Stories & Updates', icon: <FiHeart className="w-5 h-5" /> },
    { id: 'partnerships', label: 'Partnership Opportunities', icon: <FiStar className="w-5 h-5" /> }
  ];

  const roleOptions = [
    'Unhoused Family Member',
    'Support Organization Staff',
    'Community Volunteer',
    'Local Business Owner',
    'Healthcare Professional',
    'General Community Supporter'
  ];

  const newsletterBenefits = [
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: "Event Announcements",
      description: "Be the first to know about upcoming zoo trips, sledding days, game nights, and family workshops.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <FiGift className="w-8 h-8" />,
      title: "Care Package Updates",
      description: "Learn about new items being added to care packages and special seasonal offerings.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Impact Stories",
      description: "Read heartwarming stories from families and see the real difference JoyHaven makes.",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Community Spotlights",
      description: "Meet our volunteers, partners, and families who make our mission possible.",
      color: "from-purple-400 to-violet-500"
    }
  ];

  const handleInterestToggle = (interestId: string) => {
    setInterests(prev =>
      prev.includes(interestId)
        ? prev.filter(i => i !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your newsletter service
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <PublicLayout>
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto px-4"
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center"
              >
                <FiCheck className="w-12 h-12 text-white" />
              </motion.div>
              <h1 className="text-4xl font-black mb-6">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Welcome to Our Community!
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Thank you for joining the JoyHaven newsletter family. You&rsquo;ll receive your first newsletter soon 
                with updates on our mission to bring joy and mental wellness support to unhoused families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Return Home
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-emerald-500 text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Learn More About Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </PublicLayout>
    );
  }

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
                <span className="text-white">Stay</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Connected</span>
              </h1>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-white/90 leading-relaxed">
                Join our monthly newsletter to stay updated on JoyHaven&rsquo;s mission to bring joy and 
                mental wellness support to unhoused families in our community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Benefits */}
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
                <span className="text-slate-800">What You&rsquo;ll</span>{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Receive</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Our monthly newsletter keeps you informed and engaged with our community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {newsletterBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Form */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl p-12 shadow-2xl">
                <div className="text-center mb-12">
                  <FiMail className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
                  <h2 className="text-3xl md:text-4xl font-black mb-4">
                    <span className="text-slate-800">Join Our</span>{' '}
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Newsletter</span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Be part of our community working to bring joy and support to unhoused families
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-slate-800"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Role Selection */}
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-2">
                      How would you describe yourself?
                    </label>
                    <select
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors text-slate-800"
                    >
                      <option value="">Select your role...</option>
                      {roleOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-4">
                      What are you most interested in hearing about? (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {interestOptions.map((option) => (
                        <motion.label
                          key={option.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            interests.includes(option.id)
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={interests.includes(option.id)}
                            onChange={() => handleInterestToggle(option.id)}
                            className="sr-only"
                          />
                          <div className={`mr-3 ${interests.includes(option.id) ? 'text-emerald-500' : 'text-gray-400'}`}>
                            {option.icon}
                          </div>
                          <span className={`font-medium ${interests.includes(option.id) ? 'text-emerald-700' : 'text-slate-700'}`}>
                            {option.label}
                          </span>
                          {interests.includes(option.id) && (
                            <FiCheck className="w-5 h-5 text-emerald-500 ml-auto" />
                          )}
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Privacy Note */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <div className="flex items-start">
                      <FiSmile className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Your Privacy Matters</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          We respect your privacy and will never share your information with third parties. 
                          You can unsubscribe at any time by clicking the link in any newsletter. 
                          We typically send one newsletter per month with updates on our mission and activities.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <FiSend className="mr-2" />
                    Join Our Community
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                <span className="text-slate-800">Questions About Our</span>{' '}
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">Newsletter?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We&rsquo;re building a community of supporters, volunteers, families, and organizations 
                all working together to bring joy and mental wellness support to unhoused families. 
                Our newsletter helps keep everyone connected and informed about our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiMail className="mr-2" />
                  Contact Us
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiHeart className="mr-2" />
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default NewsletterPage; 