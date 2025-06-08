'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiHeart,
  FiArrowRight 
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/programs', label: 'Our Programs' },
    { href: '/events', label: 'Events' },
    { href: '/volunteer', label: 'Volunteer' },
  ];

  const supportLinks = [
    { href: '/donate', label: 'Donate' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/blog', label: 'Blog' },
  ];

  const socialLinks = [
    { href: '#', icon: FiFacebook, label: 'Facebook' },
    { href: '#', icon: FiInstagram, label: 'Instagram' },
    { href: '#', icon: FiTwitter, label: 'Twitter' },
  ];

  return (
    <footer style={{ backgroundColor: '#1c1c1c' }} className="text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="bg-white/5 rounded-xl p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  <span style={{ color: '#48b0ad' }}>The Fun</span>{' '}
                  <span style={{ color: '#cb338a' }}>Project</span>
                </h3>
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  Bringing Joy, Building Community through meaningful connections and transformative experiences that create lasting impact.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div 
                    className="p-2 rounded-full"
                    style={{ backgroundColor: '#48b0ad' }}
                  >
                    <FiMapPin className="text-white" size={16} />
                  </div>
                  <span className="text-base text-gray-300">
                    123 Community Street, Joyville, CA 90210
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div 
                    className="p-2 rounded-full"
                    style={{ backgroundColor: '#cb338a' }}
                  >
                    <FiPhone className="text-white" size={16} />
                  </div>
                  <span className="text-base text-gray-300">
                    (555) 123-4567
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div 
                    className="p-2 rounded-full"
                    style={{ backgroundColor: '#e3cf12' }}
                  >
                    <FiMail className="text-white" size={16} />
                  </div>
                  <span className="text-base text-gray-300">
                    hello@thefunproject.org
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 rounded-full text-white transition-all duration-300"
                    style={{ backgroundColor: '#48b0ad' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#cb338a';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#48b0ad';
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-6" style={{ color: '#e3cf12' }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-base text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <FiArrowRight 
                        size={14}
                        style={{ color: '#48b0ad' }}
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-6" style={{ color: '#e3cf12' }}>
                Support
              </h4>
              <ul className="space-y-3 mb-6">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-base text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <FiArrowRight 
                        size={14}
                        style={{ color: '#cb338a' }}
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-lg font-bold mb-3 text-white">Stay Updated</h5>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
                  />
                  <button 
                    className="w-full px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 text-base"
                    style={{ backgroundColor: '#48b0ad' }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#cb338a';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#48b0ad';
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-white/20"
        >
          <div className="bg-white/5 rounded-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-base text-gray-300 font-medium">
                  © {currentYear} The Fun Project. All rights reserved.
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  501(c)(3) Status Pending | Fiscal Sponsor: [Sponsor Name]
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-base text-gray-300">
                <span>Made with</span>
                <FiHeart style={{ color: '#cb338a' }} size={18} />
                <span>for our community</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 