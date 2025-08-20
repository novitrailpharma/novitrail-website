'use client';

import React from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image'; // (kept if used elsewhere later)
import ProductCarousel from '@/components/hero/ProductCarousel';
import Link from 'next/link';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-novitrail-blue via-novitrail-blue/95 to-novitrail-blue/90">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Escaped quotes in data URI to prevent JSX parse issues */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating shapes */}
      <motion.div 
        animate={floatingAnimation}
        className="absolute top-20 right-20 w-32 h-32 bg-novitrail-orange/20 rounded-full blur-xl"
      ></motion.div>
      <motion.div 
        animate={{
          y: [10, -10, 10],
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-32 left-16 w-24 h-24 bg-white/10 rounded-full blur-lg"
      ></motion.div>

      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-white"
        >
          <motion.div variants={fadeInUp} className="mb-6 mt-28">
            <span className="inline-block px-4 py-2 bg-novitrail-orange text-white rounded-full text-sm font-semibold mb-4">
              🌟 Global Pharmaceutical Leader
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-bold mb-6 font-tomorrow leading-tight"
          >
            <span className="block">NOVITRAIL</span>
            <span className="block text-novitrail-orange">Pharmaceuticals</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-2xl"
          >
            Empowering your journey with innovation, trust, and reliability across 20+ countries worldwide.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-novitrail-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-novitrail-orange font-tomorrow">20+</div>
              <div className="text-blue-200 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-novitrail-orange font-tomorrow">5K+</div>
              <div className="text-blue-200 text-sm">Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-novitrail-orange font-tomorrow">10K+</div>
              <div className="text-blue-200 text-sm">Products</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          <div className="relative">
            {/* Product Carousel container */}
            <motion.div
              animate={floatingAnimation}
              className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 w-full max-w-[520px]"
            >
              <div className="relative h-[400px] w-full">
                <ProductCarousel />
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-novitrail-orange/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: { duration: 2, repeat: Infinity }
          }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;