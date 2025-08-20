'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Award, 
  Users, 
  Shield, 
  Lightbulb, 
  Target,
  Sparkles,
  ArrowRight,
  Globe2,
  Zap
} from 'lucide-react';

const CoreValues = () => {
  const valuesData = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Upholding the highest standards of ethics and transparency in all our business operations and partnerships.",
      color: "from-rose-500 to-pink-600",
      bgColor: "from-rose-50 to-pink-50",
      details: [
        "Transparent business practices",
        "Ethical supplier relationships",
        "Honest communication with all stakeholders"
      ]
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for exceptional quality in our products, services, and customer relationships across all touchpoints.",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      details: [
        "Premium quality pharmaceuticals",
        "Superior customer service",
        "Continuous improvement mindset"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously improving and adapting to meet evolving healthcare needs and market demands with cutting-edge solutions.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      details: [
        "Advanced distribution technology",
        "Modern cold chain solutions",
        "Digital transformation initiatives"
      ]
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with manufacturers, suppliers, and healthcare providers to create mutual value.",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      details: [
        "Strategic global partnerships",
        "Collaborative supplier networks",
        "Healthcare community engagement"
      ]
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Ensuring consistent, dependable service delivery with robust quality control and regulatory compliance.",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      details: [
        "GDP-compliant operations",
        "Consistent supply chain management",
        "Reliable delivery networks"
      ]
    },
    {
      icon: Globe2,
      title: "Global Impact",
      description: "Making quality healthcare accessible worldwide through our extensive international distribution network.",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      details: [
        "20+ countries served",
        "Cross-cultural healthcare solutions",
        "Global regulatory compliance"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            rotate: [0, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-novitrail-blue/8 to-novitrail-orange/8 rounded-full blur-3xl top-10 right-10"
        />
        <motion.div 
          animate={{
            y: [30, -30, 30],
            x: [20, -20, 20],
            rotate: [360, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-novitrail-orange/10 to-novitrail-blue/10 rounded-full blur-3xl bottom-10 left-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-8 h-8 text-novitrail-orange" />
            </motion.div>
            <span className="text-novitrail-orange font-bold text-xl tracking-wider uppercase">
              Core Values
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold font-tomorrow mb-8">
            <span className="text-novitrail-blue">Principles That</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-novitrail-orange to-novitrail-blue">
              Guide Us
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-2 bg-gradient-to-r from-novitrail-blue to-novitrail-orange mx-auto rounded-full mb-8"
          />

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our values are the foundation of everything we do, shaping our culture and driving 
            our commitment to excellence in pharmaceutical distribution.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {valuesData.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                    className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-novitrail-blue mb-4 font-tomorrow group-hover:text-novitrail-orange transition-colors duration-300">
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6 text-center">
                  {value.description}
                </p>

                {/* Details List */}
                <div className="space-y-3 mb-6">
                  {value.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: detailIndex * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${value.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Action */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-2 text-novitrail-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-semibold text-sm">Learn More</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${value.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-novitrail-orange/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-novitrail-orange/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-white">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <Target className="w-12 h-12 text-novitrail-orange" />
              </motion.div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-tomorrow">
                Values in Action
              </h3>

              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                Every day, we live these values through our commitment to excellence, 
                innovation, and making quality healthcare accessible worldwide.
              </p>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(228, 93, 28, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-novitrail-orange hover:bg-novitrail-orange/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  Join Our Mission
                  <Zap className="w-5 h-5" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;