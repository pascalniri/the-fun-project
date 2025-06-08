'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPlus, 
  FiMinus, 
  FiHelpCircle, 
  FiUsers, 
  FiHeart, 
  FiCalendar, 
  FiDollarSign,
  FiMail,
  FiPhone
} from 'react-icons/fi';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const categories = [
    { id: 'general', name: 'General', icon: <FiHelpCircle size={20} /> },
    { id: 'programs', name: 'Programs', icon: <FiCalendar size={20} /> },
    { id: 'volunteer', name: 'Volunteering', icon: <FiUsers size={20} /> },
    { id: 'donations', name: 'Donations', icon: <FiDollarSign size={20} /> },
    { id: 'events', name: 'Events', icon: <FiHeart size={20} /> }
  ];

  const faqs = {
    general: [
      {
        id: 'what-is-fun-project',
        question: 'What is The Fun Project?',
        answer: 'The Fun Project is a 501(c)(3) pending nonprofit organization dedicated to bringing joy, connection, and community support to neighborhoods. We organize events, programs, and activities that bring people together and create lasting positive impact.'
      },
      {
        id: 'who-can-participate',
        question: 'Who can participate in your programs?',
        answer: 'Everyone is welcome! Our programs are designed to be inclusive and serve all members of our community regardless of age, background, or circumstances. We have specific programs for seniors, families, young adults, and general community activities.'
      },
      {
        id: 'how-started',
        question: 'How did The Fun Project get started?',
        answer: 'The Fun Project began from a simple observation that our communities needed more joy and connection. What started as informal gatherings among friends has grown into a mission to create lasting positive impact through fun, engaging activities.'
      },
      {
        id: 'nonprofit-status',
        question: 'Are you a registered nonprofit?',
        answer: 'We have filed our 501(c)(3) application and are currently pending approval. We operate with full transparency and commitment to our nonprofit mission while awaiting official designation.'
      },
      {
        id: 'areas-served',
        question: 'What areas do you serve?',
        answer: 'We currently focus on our local community area, but we\'re always looking to expand our reach. Contact us if you\'re interested in bringing The Fun Project programs to your neighborhood.'
      }
    ],
    programs: [
      {
        id: 'available-programs',
        question: 'What programs do you currently offer?',
        answer: 'We offer Senior Social Hours, Family Game Nights, Community Clean-Up Days, Holiday Celebrations, Youth Mentorship, and Neighborhood Potluck Dinners. Each program is designed to meet specific community needs while fostering connection and joy.'
      },
      {
        id: 'program-cost',
        question: 'Do your programs cost money to participate?',
        answer: 'Most of our programs are completely free to participants. Occasionally, we may ask for small contributions for materials or refreshments, but we never want cost to be a barrier to participation.'
      },
      {
        id: 'program-registration',
        question: 'How do I register for programs?',
        answer: 'You can register for programs by visiting our Events page on the website, calling us directly, or stopping by one of our community events. We make registration as simple as possible.'
      },
      {
        id: 'new-programs',
        question: 'Can I suggest new programs or activities?',
        answer: 'Absolutely! We love hearing ideas from community members. Contact us through our website, phone, or email with your suggestions. Many of our best programs have come from community input.'
      },
      {
        id: 'program-schedule',
        question: 'How often do programs run?',
        answer: 'Program frequency varies: Senior Social Hours are weekly, Family Game Nights are monthly, and special events happen seasonally. Check our Events page for the most current schedule.'
      }
    ],
    volunteer: [
      {
        id: 'volunteer-opportunities',
        question: 'What volunteer opportunities are available?',
        answer: 'We have opportunities for event setup, program facilitation, outreach, administrative support, and specialized roles like photography or social media. There\'s something for every skill level and interest.'
      },
      {
        id: 'volunteer-requirements',
        question: 'Are there requirements to volunteer?',
        answer: 'Our main requirements are enthusiasm and reliability. Some roles may require background checks (especially those working with seniors or children). We provide all necessary training and support.'
      },
      {
        id: 'volunteer-time-commitment',
        question: 'How much time do I need to commit as a volunteer?',
        answer: 'We welcome any amount of time you can give! Some volunteers help for a few hours at events, others commit to regular weekly programs. We work with your schedule and availability.'
      },
      {
        id: 'volunteer-training',
        question: 'Do you provide volunteer training?',
        answer: 'Yes! We provide orientation for all new volunteers and specific training for program roles. We also offer ongoing support and development opportunities for volunteers who want to grow their skills.'
      },
      {
        id: 'volunteer-age-requirements',
        question: 'Do you accept young volunteers?',
        answer: 'We welcome volunteers of all ages! Young volunteers (under 18) may need parental consent and are paired with adult mentors. We have special youth leadership opportunities available.'
      }
    ],
    donations: [
      {
        id: 'donation-use',
        question: 'How are donations used?',
        answer: '100% of donations go directly to programs and community activities. We don\'t take administrative overhead from donations. Funds support event supplies, venue costs, refreshments, and program materials.'
      },
      {
        id: 'tax-deductible',
        question: 'Are donations tax-deductible?',
        answer: 'Yes! As a 501(c)(3) pending organization, donations are tax-deductible. You\'ll receive a receipt for your records, and we\'ll provide tax documentation as needed.'
      },
      {
        id: 'donation-methods',
        question: 'What ways can I donate?',
        answer: 'You can donate online through our website, mail a check, or give cash at events. We also accept in-kind donations like supplies, food for events, or services that support our programs.'
      },
      {
        id: 'monthly-giving',
        question: 'Can I set up recurring donations?',
        answer: 'Yes! Monthly giving helps us plan programs and ensures consistent support for our community activities. You can set up recurring donations through our online donation form.'
      },
      {
        id: 'donation-recognition',
        question: 'Will my donation be recognized publicly?',
        answer: 'We respect your privacy preferences. You can choose to remain anonymous or be recognized in our communications. We never share personal information without permission.'
      }
    ],
    events: [
      {
        id: 'upcoming-events',
        question: 'How can I find out about upcoming events?',
        answer: 'Check our Events page on the website, follow us on social media, join our email newsletter, or call us directly. We update our calendar regularly with new activities and programs.'
      },
      {
        id: 'event-registration',
        question: 'Do I need to register for events in advance?',
        answer: 'Registration requirements vary by event. Some require advance registration due to space or supply limitations, while others welcome walk-ins. Event details always specify registration requirements.'
      },
      {
        id: 'bring-to-events',
        question: 'What should I bring to events?',
        answer: 'Most events provide everything you need. Specific requirements (like dishes for potlucks) are communicated in advance. Generally, just bring yourself, a positive attitude, and openness to meet new people!'
      },
      {
        id: 'weather-cancellations',
        question: 'What happens if weather cancels an outdoor event?',
        answer: 'We monitor weather closely and will notify participants via email, phone, and website updates if events need to be cancelled or moved indoors. Safety is always our top priority.'
      },
      {
        id: 'accessibility',
        question: 'Are your events accessible to people with disabilities?',
        answer: 'We strive to make all events accessible and inclusive. Our venues are chosen with accessibility in mind, and we work to accommodate specific needs. Contact us in advance to discuss any accommodations.'
      }
    ]
  };

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

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
              backgroundImage: `url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
              Frequently Asked Questions
            </h1>
            <p className="text-base opacity-90">
              Find answers to common questions about The Fun Project, our programs, and how you can get involved in building a stronger community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1c1c1c' }}>Browse by Category</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base ${
                    activeCategory === category.id
                      ? 'text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:shadow-md'
                  }`}
                  style={{
                    backgroundColor: activeCategory === category.id ? '#cb338a' : 'white'
                  }}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>
                {categories.find(c => c.id === activeCategory)?.name} Questions
              </h2>
              <p className="text-base text-gray-600">
                Click on any question to see the answer
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs[activeCategory as keyof typeof faqs].map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold pr-4" style={{ color: '#1c1c1c' }}>
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === faq.id ? (
                        <FiMinus size={20} style={{ color: '#cb338a' }} />
                      ) : (
                        <FiPlus size={20} style={{ color: '#48b0ad' }} />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <div className="pt-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20" style={{ backgroundColor: '#eeeeee' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>
                Still Have Questions?
              </h2>
              <p className="text-base text-gray-600 mb-8">
                We&apos;re here to help! Reach out to us and we&apos;ll get back to you quickly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="mb-4 flex justify-center" style={{ color: '#48b0ad' }}>
                  <FiMail size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1c1c1c' }}>Email Us</h3>
                <p className="text-base text-gray-600 mb-4">
                  Get detailed answers to your questions
                </p>
                <a 
                  href="mailto:hello@thefunproject.org"
                  className="inline-block px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base text-white"
                  style={{ backgroundColor: '#48b0ad' }}
                >
                  hello@thefunproject.org
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="mb-4 flex justify-center" style={{ color: '#cb338a' }}>
                  <FiPhone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1c1c1c' }}>Call Us</h3>
                <p className="text-base text-gray-600 mb-4">
                  Speak directly with our team
                </p>
                <a 
                  href="tel:+15551234567"
                  className="inline-block px-6 py-3 rounded-full font-semibold transition-all duration-300 text-base text-white"
                  style={{ backgroundColor: '#cb338a' }}
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#e3cf12' }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1c1c1c' }}>
              Ready to Get Involved?
            </h2>
            <p className="text-base text-gray-700 mb-8">
              Now that you know more about us, join our community and start making a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/events"
                className="text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg text-base"
                style={{ backgroundColor: '#1c1c1c' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join an Event
              </motion.a>
              <motion.a
                href="/volunteer"
                className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg text-base"
                style={{ color: '#1c1c1c' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Volunteering
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage; 