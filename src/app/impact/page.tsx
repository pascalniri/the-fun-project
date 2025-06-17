'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiStar, FiGift, FiCalendar, FiSmile, FiSun, FiCoffee } from 'react-icons/fi';
import PublicLayout from '../../components/PublicLayout';

const ImpactPage = () => {
  const impactStats = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Families Served",
      stat: "Launch Ready",
      description: "Preparing to serve unhoused families in our community with regular opportunities for joy"
    },
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: "Monthly Events",
      stat: "Planned",
      description: "Day trips, workshops, game nights, and seasonal activities designed for worry-free fun"
    },
    {
      icon: <FiGift className="w-8 h-8" />,
      title: "Care Packages",
      stat: "Each Event",
      description: "Every family receives care packages filled with essentials and thoughtful items"
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Stress Relief",
      stat: "Our Mission",
      description: "Creating moments of mental respite away from daily challenges and worry"
    }
  ];

  const plannedActivities = [
    {
      icon: <FiSun className="w-12 h-12" />,
      title: "Zoo Day Trips",
      description: "Family adventures to the zoo with packed lunches provided, creating memories and moments of wonder for children and parents alike.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <FiCoffee className="w-12 h-12" />,
      title: "Winter Sledding & Hot Chocolate",
      description: "Winter days filled with sledding fun ending with a warm hot chocolate bar, bringing warmth and joy during cold months.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <FiUsers className="w-12 h-12" />,
      title: "Family Workshops at Parks",
      description: "Engaging workshops in beautiful park settings followed by afternoon picnics, fostering family bonding and learning.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <FiStar className="w-12 h-12" />,
      title: "Game & Movie Nights",
      description: "Evening entertainment with buffet-style dinners, creating a fun, relaxed atmosphere for families to enjoy together.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const testimonials = [
    {
      quote: "These activities provide something we rarely get - worry-free time together as a family.",
      author: "Sarah M.",
      role: "Parent",
      description: "Mother of two who participated in our pilot planning sessions"
    },
    {
      quote: "The care packages show that someone cares about our whole family, not just our housing situation.",
      author: "Mike T.",
      role: "Father",
      description: "Father experiencing housing instability with his children"
    },
    {
      quote: "Finally, services that focus on joy and mental wellness - this is what families need.",
      author: "James L.",
      role: "Social Worker",
      description: "Director at regional nonprofit supporting homeless families"
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
                <span className="text-white">Bringing</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Joy</span>{' '}
                <span className="text-white">to</span>{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Families</span>
              </h1>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-white/90 leading-relaxed">
                JoyHaven creates delightful experiences of joy and connection for unhoused families, 
                offering moments of relief and play amidst daily challenges without any cost.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-xl"
            >
              <FiHeart className="w-16 h-16 mx-auto mb-6 text-rose-500" />
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Understanding the Need
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Unhoused families deal with high amounts of stress without many signs of relief. 
                We provide them with regular opportunities for fun-inspired mental respite through 
                worry-free activities that create moments of normalcy and joy.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6">
                <p className="text-base text-slate-600 italic">
                  &ldquo;All activities are provided without any charge to participating families, 
                  ensuring that financial barriers never prevent access to joy and community connection.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Statistics */}
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
                <span className="text-slate-800">Our</span>{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Impact</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mb-8"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Preparing to make a meaningful difference in the lives of unhoused families through joyous experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-emerald-500 mb-6">
                    {stat.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">
                    {stat.title}
                  </h3>
                  <div className="text-2xl font-black mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    {stat.stat}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Planned Activities */}
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
                <span className="text-slate-800">Worry-Free</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Activities</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Every activity is designed to provide stress-free enjoyment and quality family time
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {plannedActivities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${activity.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {activity.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">
                    {activity.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
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
                <span className="text-white">Voices from</span>{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Our Community</span>
              </h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-400 to-rose-500 mb-8"></div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Feedback from our customer discovery process with families and support organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                >
                  <div className="text-yellow-400 mb-4">
                    <FiStar className="w-6 h-6" />
                  </div>
                  <blockquote className="text-white/90 italic mb-6 text-lg leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-white/70 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-white/60 text-xs mt-1">
                      {testimonial.description}
                    </div>
                  </div>
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
              <FiSmile className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-slate-800">Join Our</span>{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Help us create a society where unhoused families are embraced and supported, 
                ensuring they always have opportunities to experience happiness and togetherness.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiUsers className="mr-2" />
                  Get Involved
                </motion.a>
                <motion.a
                  href="/donate"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FiHeart className="mr-2" />
                  Support Families
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
};

export default ImpactPage; 