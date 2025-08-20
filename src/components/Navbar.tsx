'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Plus, Minus, ChevronDown, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = {
  label: string;
  href: string;
  submenu?: Array<{
    label: string;
    href: string;
  }>;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-novitrail' },
  { 
    label: 'Products', 
    href: '/novitrail-products',
    submenu: [
      { label: 'Novitrail Products', href: '/novitrail-products' },
      { label: 'Pharmaceutical Portfolio', href: '/portfolio/pharmaceuticals' },
      { label: 'Surgical Portfolio', href: '/portfolio/surgicals' }
    ]
  }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };
    handleScroll();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Handle mouse movement for cool effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu((prev) => (prev === label ? null : label));
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setActiveSubmenu(label);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const submenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      rotateX: -15,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    normal: {
      scale: 1,
      filter: "drop-shadow(0 0 0px rgba(0,0,0,0))"
    },
    scrolled: {
      scale: 0.9,
      filter: "drop-shadow(0 2px 8px rgba(0,69,131,0.3))"
    },
    hover: {
      scale: 1.05,
      filter: "drop-shadow(0 8px 25px rgba(228,93,28,0.4))"
    }
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
        }}
      >
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500"
          style={{
            background: !isScrolled 
              ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(228,93,28,0.15) 0%, transparent 50%)`
              : 'none'
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo with visibility fix */}
            <motion.div 
              variants={logoVariants}
              animate={isScrolled ? "scrolled" : "normal"}
              whileHover="hover"
              className="flex items-center relative"
            >
              {/* Logo background for visibility on blue backgrounds */}
              {!isScrolled && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl -m-3 -z-10 border border-white/30"
                />
              )}

              <Link href="/" className="flex items-center gap-3 relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/logo.png"
                    alt="Novitrail Pharmaceuticals"
                    width={180}
                    height={60}
                    className="h-12 w-auto relative z-10"
                    priority
                  />
                </motion.div>
                {/* Enhanced sparkling effect */}
                {/* <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 -right-2 text-novitrail-orange"
                >
                  <Sparkles className="w-5 h-5 drop-shadow-lg" />
                </motion.div> */}
              </Link>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                  className="relative group"
                  onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                  onMouseLeave={() => item.submenu && handleMouseLeave()}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-500 relative overflow-hidden group ${
                        isScrolled
                          ? 'text-novitrail-blue hover:text-white'
                          : 'text-white hover:text-white'
                      }`}
                    >
                      {/* Enhanced animated background on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-novitrail-orange via-novitrail-blue to-novitrail-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                        whileHover={{ scale: 1.05 }}
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          backgroundSize: '200% 100%'
                        }}
                      />

                      {/* Enhanced glowing effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-novitrail-orange/30 to-novitrail-blue/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl"
                        whileHover={{ scale: 1.5 }}
                      />

                      <span className="relative z-10 font-bold">{item.label}</span>
                      {item.submenu && (
                        <motion.div
                          animate={{ 
                            rotate: activeSubmenu === item.label ? 180 : 0,
                            color: activeSubmenu === item.label ? '#E45D1C' : 'currentColor'
                          }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </Link>
                  </motion.div>

                  {/* Enhanced Desktop Submenu */}
                  <AnimatePresence>
                    {item.submenu && activeSubmenu === item.label && (
                      <motion.div
                        variants={submenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="absolute top-full left-0 mt-3 w-80 perspective-1000"
                      >
                        <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden">
                          {/* Enhanced submenu header */}
                          <div className="bg-gradient-to-r from-novitrail-blue to-novitrail-orange p-5">
                            <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              {item.label}
                            </h4>
                          </div>

                          {/* Enhanced submenu items */}
                          <div className="p-3">
                            {item.submenu.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: subIndex * 0.1 }}
                              >
                                <Link
                                  href={subItem.href}
                                  className="flex items-center px-4 py-4 text-gray-700 hover:text-novitrail-orange hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 rounded-xl group"
                                >
                                  <motion.div
                                    whileHover={{ x: 8 }}
                                    className="flex items-center gap-3 w-full"
                                  >
                                    <motion.div 
                                      className="w-2 h-2 bg-gradient-to-r from-novitrail-blue to-novitrail-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                      whileHover={{ scale: 1.5 }}
                                    />
                                    <span className="font-medium flex-1">{subItem.label}</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </motion.div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* SUPER Enhanced CTA Button - FIXED */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden lg:block relative"
            >
              <motion.div 
                whileHover={{ scale: 1.08, rotate: [0, 1, -1, 0] }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  href="/contact-us"
                  className="relative inline-block group"
                >
                  {/* Main button container with proper overflow handling */}
                  <div className="relative overflow-visible bg-gradient-to-r from-novitrail-orange to-novitrail-orange/90 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-700 shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-white/20">

                    {/* Animated gradient background layer 1 */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(45deg, #004583, #E45D1C, #004583, #E45D1C)',
                        backgroundSize: '400% 400%'
                      }}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Shimmer effect overlay */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30"
                      initial={{ x: '-100%' }}
                      whileHover={{
                        x: '100%',
                        transition: {
                          duration: 0.6,
                          ease: "easeInOut"
                        }
                      }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
                      }}
                    />

                    {/* Pulsing glow effect */}
                    <motion.div
                      className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-60 blur-lg"
                      animate={{
                        background: [
                          'linear-gradient(45deg, rgba(0,69,131,0.4), rgba(228,93,28,0.4))',
                          'linear-gradient(45deg, rgba(228,93,28,0.4), rgba(0,69,131,0.4))',
                          'linear-gradient(45deg, rgba(0,69,131,0.4), rgba(228,93,28,0.4))'
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Button content */}
                    <span className="relative z-10 flex items-center gap-3 font-bold">
                      Contact Us
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="relative"
                      >
                        <Zap className="w-5 h-5" />
                        {/* Lightning bolt glow */}
                        <motion.div
                          className="absolute inset-0 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Zap className="w-5 h-5" />
                        </motion.div>
                      </motion.div>
                    </span>
                  </div>

                  {/* Floating particles around button */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-novitrail-orange rounded-full opacity-0 group-hover:opacity-80"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${10 + i * 10}%`
                        }}
                        animate={{
                          y: [-5, -15, -5],
                          x: [-2, 2, -2],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={toggleMenu}
              className={`lg:hidden p-3 rounded-xl transition-all duration-500 relative overflow-hidden ${
                isScrolled 
                  ? 'text-novitrail-blue bg-gray-50 hover:bg-novitrail-blue hover:text-white' 
                  : 'text-white bg-white/20 backdrop-blur-sm hover:bg-white/30'
              }`}
              aria-label="Toggle navigation"
            >
              {/* Enhanced button background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-novitrail-orange to-novitrail-blue opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"
                whileHover={{ scale: 1.1 }}
              />

              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="relative z-10"
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, type: "spring" }}
                    className="relative z-10"
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden mt-4 relative"
              >
                <div className="bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
                  {/* Enhanced mobile menu header */}
                  <div className="bg-gradient-to-r from-novitrail-blue to-novitrail-orange p-6">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Navigation Menu
                    </h3>
                    <motion.div
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="h-0.5 bg-white/50 mt-2 rounded-full"
                    />
                  </div>

                  <div className="p-4">
                    {navItems.map((item, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-3"
                      >
                        <div className="flex items-center justify-between bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-2 shadow-sm">
                          <Link
                            href={item.href}
                            onClick={() => !item.submenu && setIsMenuOpen(false)}
                            className="flex-1 py-3 px-4 text-novitrail-blue hover:text-novitrail-orange font-bold transition-colors duration-200 rounded-xl"
                          >
                            {item.label}
                          </Link>
                          {item.submenu && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => toggleSubmenu(item.label)}
                              className="p-3 text-novitrail-blue hover:text-novitrail-orange transition-colors duration-200 rounded-xl"
                            >
                              <motion.div
                                animate={{ rotate: activeSubmenu === item.label ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {activeSubmenu === item.label ? (
                                  <Minus className="w-5 h-5" />
                                ) : (
                                  <Plus className="w-5 h-5" />
                                )}
                              </motion.div>
                            </motion.button>
                          )}
                        </div>

                        {/* Enhanced Mobile Submenu */}
                        <AnimatePresence>
                          {item.submenu && activeSubmenu === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="overflow-hidden mt-3"
                            >
                              <div className="pl-6 space-y-2">
                                {item.submenu.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: subIndex * 0.1 }}
                                  >
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="flex items-center py-3 px-4 text-gray-600 hover:text-novitrail-orange hover:bg-gradient-to-r hover:from-gray-50 hover:to-orange-50 transition-all duration-200 rounded-xl group"
                                    >
                                      <motion.div
                                        className="w-2 h-2 bg-gradient-to-r from-novitrail-blue to-novitrail-orange rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                        whileHover={{ scale: 1.5 }}
                                      />
                                      <span className="flex-1 font-medium">{subItem.label}</span>
                                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}

                    {/* Enhanced Mobile CTA */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="pt-6 border-t border-gray-200 mt-6"
                    >
                      <Link
                        href="/contact-us"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full relative overflow-hidden group"
                      >
                        <div className="bg-gradient-to-r from-novitrail-orange to-novitrail-blue text-white text-center px-8 py-4 rounded-2xl font-bold transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105">
                          {/* Mobile button animated background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-novitrail-blue to-novitrail-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                            animate={{
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            style={{
                              backgroundSize: '200% 100%'
                            }}
                          />
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            Contact Us
                            <motion.div
                              animate={{ 
                                rotate: [0, 360],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut" 
                              }}
                            >
                              <Sparkles className="w-5 h-5" />
                            </motion.div>
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced animated border bottom */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-novitrail-blue via-novitrail-orange to-novitrail-blue rounded-full"
          animate={{
            scaleX: isScrolled ? 1 : 0,
            opacity: isScrolled ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.nav>

      {/* Enhanced floating particles effect */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {typeof window !== 'undefined' && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-novitrail-orange' : 'bg-novitrail-blue'}`}
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`
            }}
            animate={{
              x: [0, (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
              ],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Navbar;