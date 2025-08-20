'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Globe, 
  Linkedin, 
  Mail, 
  Building2,
  GraduationCap,
  Trophy,
  Target,
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const FounderProfile = () => {
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

  const achievements = [
    {
      icon: Building2,
      title: "Founded 2017",
      description: "Established Novitrail Pharmaceuticals",
      color: "from-novitrail-blue to-novitrail-blue/80"
    },
    {
      icon: Globe,
      title: "20+ Countries",
      description: "Global pharmaceutical distribution",
      color: "from-novitrail-orange to-novitrail-orange/80"
    },
    {
      icon: Users,
      title: "5000+ Suppliers",
      description: "Extensive partner network",
      color: "from-novitrail-blue to-novitrail-blue/80"
    },
    {
      icon: Trophy,
      title: "GDP Certified",
      description: "FDA-compliant operations",
      color: "from-novitrail-orange to-novitrail-orange/80"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div 
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-novitrail-blue/10 to-novitrail-orange/10 rounded-full blur-3xl -top-20 -right-20"
        />
        <motion.div 
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[300px] h-[300px] bg-gradient-to-br from-novitrail-orange/15 to-novitrail-blue/15 rounded-full blur-3xl -bottom-20 -left-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-novitrail-orange" />
            </motion.div>
            <span className="text-novitrail-orange font-bold text-lg tracking-wider uppercase">
              Leadership
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold font-tomorrow text-novitrail-blue mb-4">
            Meet Our Founder
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-novitrail-blue to-novitrail-orange mx-auto rounded-full"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-12 items-start"
        >
          {/* Left Column - Photo and Basic Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 text-center">
              {/* Professional Photo */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative inline-block mb-6"
              >
                {/* Photo container with proper sizing */}
                <div className="relative w-48 h-48 mx-auto">
                  {/* Decorative gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-novitrail-blue to-novitrail-orange rounded-full p-1">
                    <div className="w-full h-full bg-white rounded-full p-2">
                      <div className="relative w-full h-full overflow-hidden rounded-full">
                        <Image
                          src="/abhay.png"
                          alt="Abhay Kumar Sen - Founder & Director"
                          fill
                          className="object-cover object-center"
                          priority
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating award icon */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-novitrail-orange to-novitrail-blue rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Award className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Name and Title */}
              <motion.div 
                variants={itemVariants}
                className="mb-6"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-novitrail-blue mb-2 font-tomorrow">
                  Abhay Kumar Sen
                </h3>
                <div className="inline-block bg-gradient-to-r from-novitrail-orange to-novitrail-blue text-transparent bg-clip-text text-lg font-semibold mb-3">
                  Founder & Director
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Visionary leader transforming global pharmaceutical distribution
                </p>
              </motion.div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mb-6">
                <motion.a
                  href="https://www.linkedin.com/in/abhay-kumar-sen-44aa8714/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:contact@novitrail.com"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gradient-to-br from-novitrail-orange to-novitrail-orange/90 text-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-xl font-bold text-novitrail-blue font-tomorrow">8+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-novitrail-orange font-tomorrow">20+</div>
                  <div className="text-xs text-gray-600">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Professional Information */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            {/* Leadership Message */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-novitrail-orange" />
                <h3 className="text-2xl font-bold text-novitrail-blue font-tomorrow">
                  Leadership Vision
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  &quot;At Novitrail, we believe in making quality healthcare accessible globally. 
                  Our commitment to excellence drives us to bridge the gap between innovative 
                  pharmaceutical solutions and the communities that need them most.&quot;
                </p>

                <div className="bg-gradient-to-r from-novitrail-blue/10 to-novitrail-orange/10 rounded-2xl p-6 border-l-4 border-novitrail-orange">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-novitrail-blue/20 to-novitrail-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-novitrail-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-novitrail-blue mb-1">Mission Focus</h4>
                      <p className="text-gray-600 text-sm">Building sustainable healthcare partnerships worldwide through innovation and integrity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${achievement.color} shadow-lg`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-novitrail-blue mb-2 font-tomorrow">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Professional Background */}
            <div className="bg-gradient-to-br from-novitrail-blue to-novitrail-blue/90 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-novitrail-orange/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-novitrail-orange" />
                  <h3 className="text-xl font-bold font-tomorrow">Professional Excellence</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-novitrail-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-blue-100 mb-1">Industry Leadership</h4>
                        <p className="text-blue-200 text-sm">8+ years transforming pharmaceutical distribution across global markets</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-novitrail-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-blue-100 mb-1">Strategic Vision</h4>
                        <p className="text-blue-200 text-sm">Pioneered GDP-compliant operations serving 20+ countries worldwide</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-novitrail-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-blue-100 mb-1">Innovation Focus</h4>
                        <p className="text-blue-200 text-sm">Building sustainable partnerships with 5000+ suppliers and manufacturers</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-novitrail-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-blue-100 mb-1">Global Impact</h4>
                        <p className="text-blue-200 text-sm">Dedicated to making quality healthcare accessible across diverse markets</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-blue-400/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-blue-100 mb-1">Connect with Leadership</h4>
                      <p className="text-blue-200 text-sm">Ready to discuss partnership opportunities?</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-2 text-novitrail-orange cursor-pointer"
                    >
                      <span className="font-semibold text-sm">Get in Touch</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderProfile;