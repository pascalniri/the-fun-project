'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiHeart, 
  FiUsers, 
  FiHome, 
  FiStar,
  FiCalendar,
  FiArrowRight,
  FiMapPin
} from 'react-icons/fi';

const WhoWeServePage = () => {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  const communityGroups = [
    {
      id: 1,
      title: "Senior Community Members",
      description: "Providing social connection and support for our older adults through weekly gatherings and activities.",
      programs: ["Senior Social Hours", "Health & Wellness Checks", "Transportation Assistance", "Intergenerational Programs"],
      impact: "Fighting isolation and promoting healthy aging",
      image: "👵",
      participants: "25+ active seniors",
      featured: true
    },
    {
      id: 2,
      title: "Families with Children",
      description: "Creating opportunities for families to connect, play, and build lasting relationships with their neighbors.",
      programs: ["Family Game Nights", "Outdoor Activities", "Educational Workshops", "Holiday Celebrations"],
      impact: "Strengthening family bonds and community connections",
      image: "👨‍👩‍👧‍👦",
      participants: "30+ families",
      featured: true
    },
    {
      id: 3,
      title: "Young Adults & Professionals",
      description: "Helping young adults build community connections and develop leadership skills through meaningful volunteer opportunities.",
      programs: ["Community Service Projects", "Networking Events", "Skill-Building Workshops", "Mentorship Programs"],
      impact: "Developing future community leaders",
      image: "👩‍💼",
      participants: "15+ young adults",
      featured: false
    },
    {
      id: 4,
      title: "Isolated Community Members",
      description: "Reaching out to those who may feel disconnected and providing pathways to community involvement.",
      programs: ["Outreach Visits", "Welcome Programs", "Buddy System", "Inclusive Activities"],
      impact: "Ensuring no one feels left behind",
      image: "🤝",
      participants: "Ongoing outreach",
      featured: true
    }
  ];

  const successStories = [
    {
      id: 1,
      title: "Margaret's New Beginning",
      summary: "A senior who found friendship and purpose after joining our social hours.",
      story: "Margaret moved to our community after her husband passed away, feeling lonely and disconnected. Through our senior social hours, she not only found new friends but also became a volunteer coordinator, helping other seniors feel welcome.",
      outcome: "Now leads a weekly storytelling circle",
      timeframe: "6 months"
    },
    {
      id: 2,
      title: "The Johnson Family Connection",
      summary: "A busy family discovered their community through our family game nights.",
      story: "The Johnsons were new to the area and struggling to meet other families. Their first family game night led to lasting friendships and now they help organize events for other newcomer families.",
      outcome: "Organized 3 neighborhood meetups",
      timeframe: "1 year"
    },
    {
      id: 3,
      title: "Alex's Leadership Journey",
      summary: "A young professional who grew from volunteer to community leader.",
      story: "Alex started as a quiet volunteer helping with setup. Through our mentorship program, they developed confidence and leadership skills, eventually becoming our youth program coordinator.",
      outcome: "Launched our mentorship program",
      timeframe: "18 months"
    }
  ];

  const impactStats = [
    { number: "200+", label: "Community Members Served" },
    { number: "85%", label: "Report Feeling More Connected" },
    { number: "15", label: "Ongoing Programs" },
    { number: "95%", label: "Would Recommend to Others" }
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
              backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
              Who We Serve
            </h1>
            <p className="text-base opacity-90">
              Our programs are designed to serve every member of our community, 
              from children to seniors, ensuring everyone has access to joy, connection, and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Groups */}
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>
                Our Community Groups
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                We proudly serve diverse groups within our community, each with unique needs and contributions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {communityGroups.map((group) => (
                <motion.div
                  key={group.id}
                  variants={fadeInUp}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    group.featured ? 'ring-2 ring-offset-2 ring-yellow-400' : ''
                  }`}
                >
                  {group.featured && (
                    <div className="px-4 py-2 text-center text-white text-sm font-semibold" style={{ backgroundColor: '#e3cf12', color: '#1c1c1c' }}>
                      ⭐ Priority Group
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{group.image}</div>
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: '#48b0ad', color: 'white' }}
                      >
                        {group.participants}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#1c1c1c' }}>{group.title}</h3>
                    <p className="text-base text-gray-600 mb-4">{group.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Programs & Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.programs.map((program, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: '#eeeeee', color: '#1c1c1c' }}
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: '#e3cf12' }}>
                      <h4 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Our Impact:</h4>
                      <p className="text-base" style={{ color: '#1c1c1c' }}>{group.impact}</p>
                    </div>
                    
                    <button className="w-full text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-base"
                      style={{ backgroundColor: '#cb338a' }}
                    >
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>
                Our Community Impact
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Numbers that reflect the positive change we're creating together
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl font-bold mb-2" style={{ color: '#48b0ad' }}>
                    {stat.number}
                  </div>
                  <div className="text-base text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
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
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1c1c1c' }}>
                Success Stories
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Real stories from real people whose lives have been touched by our community programs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <motion.div
                  key={story.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveStory(activeStory === story.id ? null : story.id)}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1c1c1c' }}>{story.title}</h3>
                    <p className="text-base text-gray-600 mb-4">{story.summary}</p>
                    
                    {activeStory === story.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t pt-4 mt-4"
                      >
                        <p className="text-base text-gray-600 mb-4">{story.story}</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold text-base" style={{ color: '#48b0ad' }}>
                              Outcome: {story.outcome}
                            </div>
                            <div className="text-sm text-gray-500">
                              Timeline: {story.timeframe}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-medium" style={{ color: '#cb338a' }}>
                        {story.timeframe}
                      </span>
                      <FiArrowRight size={16} style={{ color: '#48b0ad' }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Identify Needs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6" style={{ color: '#1c1c1c' }}>
                  How We Identify Community Needs
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  We take a thoughtful, community-driven approach to understanding and addressing 
                  the unique needs of our neighborhood residents.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#48b0ad' }}>
                      <FiUsers size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Community Surveys</h3>
                      <p className="text-base text-gray-600">
                        Regular surveys help us understand what programs and services are most needed.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#cb338a' }}>
                      <FiHeart size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Direct Outreach</h3>
                      <p className="text-base text-gray-600">
                        Our volunteers actively reach out to community members to understand their needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3cf12' }}>
                      <FiMapPin size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-base" style={{ color: '#1c1c1c' }}>Local Partnerships</h3>
                      <p className="text-base text-gray-600">
                        We work with schools, healthcare providers, and other organizations to identify gaps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1c1c1c' }}>
                  Community Feedback
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#eeeeee' }}>
                    <p className="text-base italic" style={{ color: '#1c1c1c' }}>
                      "The Fun Project listens to what we actually need, not what they think we need."
                    </p>
                    <div className="text-sm mt-2" style={{ color: '#48b0ad' }}>- Community Member</div>
                  </div>
                  
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#eeeeee' }}>
                    <p className="text-base italic" style={{ color: '#1c1c1c' }}>
                      "They made sure to include everyone, especially those who usually get overlooked."
                    </p>
                    <div className="text-sm mt-2" style={{ color: '#cb338a' }}>- Local Resident</div>
                  </div>
                </div>
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
              Join Our Community
            </h2>
            <p className="text-base text-gray-700 mb-8">
              Whether you're looking for connection, want to give back, or simply want to have fun with your neighbors, 
              there's a place for you in The Fun Project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/programs"
                className="text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg text-base"
                style={{ backgroundColor: '#1c1c1c' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Programs
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg text-base"
                style={{ color: '#1c1c1c' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeServePage; 