'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiHeart } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', type: 'link' },
    {
      label: 'About',
      type: 'dropdown',
      items: [
        { href: '/about', label: 'About Us' },
        { href: '/who-we-serve', label: 'Who We Serve' },
      ]
    },
    { href: '/programs', label: 'Our Programs', type: 'link' },
    { href: '/contact', label: 'Contact', type: 'link' },
  ];

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold">
              <span style={{ color: '#48b0ad' }}>The Fun</span>{' '}
              <span style={{ color: '#cb338a' }}>Project</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.type === 'link' ? (
                  <Link
                    href={item.href!}
                    className="transition-colors duration-300 font-medium text-sm py-2"
                    style={{ color: '#1c1c1c' }}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#48b0ad'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1c1c1c'}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className="flex items-center space-x-1 transition-colors duration-300 font-medium text-sm py-2"
                      style={{ color: '#1c1c1c' }}
                    >
                      <span>{item.label}</span>
                      <FiChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50"
                          style={{ borderColor: '#eeeeee' }}
                        >
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm transition-colors duration-200"
                              style={{ color: '#1c1c1c' }}
                              onMouseEnter={(e) => {
                                (e.target as HTMLElement).style.color = '#48b0ad';
                                (e.target as HTMLElement).style.backgroundColor = '#eeeeee';
                              }}
                              onMouseLeave={(e) => {
                                (e.target as HTMLElement).style.color = '#1c1c1c';
                                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Admin Signin Button */}
            {/* <Link
              href="/admin/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm border"
              style={{ 
                color: '#48b0ad', 
                borderColor: '#48b0ad' 
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#48b0ad';
                (e.target as HTMLElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'transparent';
                (e.target as HTMLElement).style.color = '#48b0ad';
              }}
            >
              <FiUser size={16} />
              <span>Admin Sign In</span>
            </Link> */}

            {/* Donate Button */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="group relative overflow-hidden px-8 py-3 bg-[#4ECDC4] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 text-sm"
              >
                <div className="absolute inset-0 bg-[#45B7AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FiHeart size={16} className="relative z-10" />
                <span className="relative z-10">Donate</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden transition-colors duration-200 p-2"
            style={{ color: '#1c1c1c' }}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#48b0ad'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1c1c1c'}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="py-4 space-y-2 border-t" style={{ borderColor: '#eeeeee' }}>
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.type === 'link' ? (
                      <Link
                        href={item.href!}
                        className="block transition-colors duration-300 font-medium py-2 text-sm"
                        style={{ color: '#1c1c1c' }}
                        onClick={() => setIsOpen(false)}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#48b0ad'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1c1c1c'}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div>
                        <div 
                          className="font-medium py-2 text-sm border-b mb-2"
                          style={{ color: '#1c1c1c', borderColor: '#eeeeee' }}
                        >
                          {item.label}
                        </div>
                        <div className="pl-4 space-y-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block transition-colors duration-300 py-1 text-sm"
                              style={{ color: '#1c1c1c' }}
                              onClick={() => setIsOpen(false)}
                              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#48b0ad'}
                              onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#1c1c1c'}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="pt-4 space-y-3">
                  {/* <Link
                    href="/admin/login"
                    className="flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm text-center text-sm border"
                    style={{ 
                      color: '#48b0ad', 
                      borderColor: '#48b0ad' 
                    }}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#48b0ad';
                      (e.target as HTMLElement).style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = 'transparent';
                      (e.target as HTMLElement).style.color = '#48b0ad';
                    }}
                  >
                    <FiUser size={16} />
                    <span>Admin Sign In</span>
                  </Link> */}
                  
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/donate"
                      className="group relative overflow-hidden px-8 py-3 bg-[#4ECDC4] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="absolute inset-0 bg-[#45B7AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <FiHeart size={16} className="relative z-10" />
                      <span className="relative z-10">Donate</span>
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header; 