'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Award, 
  Globe2, 
  TrendingUp, 
  Shield,
  Heart,
  Zap,
  Target,
  Sparkles
} from 'lucide-react';

const ModernWhoWeAre = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statsData = [
    { icon: Building2, number: "2017", label: "Founded", color: "from-novitrail-blue to-novitrail-blue/80" },
    { icon: Globe2, number: "20+", label: "Countries Served", color: "from-novitrail-orange to-novitrail-orange/80" },
    { icon: Users, number: "5000+", label: "Trusted Suppliers", color: "from-novitrail-blue to-novitrail-blue/80" },
    { icon: Award, number: "10000+", label: "Product Lines", color: "from-novitrail-orange to-novitrail-orange/80" }
  ];

  const featureCards = [
    {
      icon: Shield,
      title: "GDP Compliant Operations",
      description: "Maintaining highest standards of pharmaceutical distribution with full regulatory compliance across all markets.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Heart,
      title: "Healthcare Excellence",
      description: "Dedicated to improving lives through reliable access to quality pharmaceutical products worldwide.",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Innovation Driven",
      description: "Leveraging cutting-edge technology and processes to deliver exceptional pharmaceutical solutions.",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Strategic Partnerships",
      description: "Building lasting relationships with manufacturers, suppliers, and healthcare providers globally.",
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <motion.div 
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-novitrail-blue/5 to-novitrail-orange/5 rounded-full blur-3xl -top-40 -right-40"
        />
        <motion.div 
          animate={{
            y: [30, -30, 30],
            x: [15, -15, 15],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-novitrail-orange/8 to-novitrail-blue/8 rounded-full blur-3xl -bottom-40 -left-40"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-novitrail-orange" />
              </motion.div>
              <span className="text-novitrail-orange font-bold text-xl tracking-wider uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-extrabold font-tomorrow mb-8">
              <span className="text-novitrail-blue">Transforming</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-novitrail-orange to-novitrail-blue">
                Healthcare
              </span>
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-2 bg-gradient-to-r from-novitrail-blue to-novitrail-orange mx-auto rounded-full mb-8"
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-3xl font-bold text-novitrail-blue mb-6 font-tomorrow">
                  Our Story
                </h3>
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    <span className="font-semibold text-novitrail-orange">Novitrail Pharmaceuticals</span> stands 
                    at the forefront of global pharmaceutical distribution and manufacturing, serving healthcare 
                    needs across more than 20 countries. Since our establishment in 2017, we have rapidly grown 
                    into a dynamic force in the pharmaceutical industry.
                  </p>
                  <p>
                    As an independent, professionally managed company, we specialize in a comprehensive range 
                    of pharmaceutical products, from specialized medicines to surgical disposables. Our portfolio 
                    includes branded pharmaceuticals, oncology drugs, and essential medical devices.
                  </p>
                  <p>
                    What sets us apart is our unwavering commitment to excellence in every aspect of our operations. 
                    From state-of-the-art warehousing facilities to professional handling of temperature-sensitive 
                    medications, we maintain the highest standards of pharmaceutical distribution.
                  </p>
                </div>

                {/* Mission Statement */}
                <div className="mt-8 p-6 bg-gradient-to-r from-novitrail-blue/10 to-novitrail-orange/10 rounded-2xl border-l-4 border-novitrail-orange">
                  <h4 className="font-bold text-novitrail-blue mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Our Mission
                  </h4>
                  <p className="text-gray-700 italic">
                    &quot;To become a holistic pharmaceutical marketing company worldwide, providing innovative 
                    solutions that make quality healthcare accessible to all.&quot;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Statistics & Features */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-novitrail-blue mb-2 font-tomorrow">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Excellence Pillars */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-novitrail-blue mb-6 font-tomorrow flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-novitrail-orange" />
                  Excellence Pillars
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-novitrail-blue to-novitrail-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-novitrail-blue mb-1">Quality Assurance</h4>
                      <p className="text-gray-600 text-sm">Rigorous quality control with FDA-approved products from certified manufacturers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-novitrail-orange to-novitrail-blue rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-novitrail-blue mb-1">Global Network</h4>
                      <p className="text-gray-600 text-sm">Extensive distribution across EU, MENA, SAARC, LAC, African, and CIS regions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-novitrail-blue to-novitrail-orange rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-novitrail-blue mb-1">Innovation Focus</h4>
                      <p className="text-gray-600 text-sm">Continuous improvement in cold chain management and distribution technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Cards */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-novitrail-blue mb-12 font-tomorrow">
              What Drives Us Forward
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <card.icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-novitrail-blue mb-4 font-tomorrow group-hover:text-novitrail-orange transition-colors duration-300">
                    {card.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {card.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-novitrail-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">Learn More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <TrendingUp className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernWhoWeAre;