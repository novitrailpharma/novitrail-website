'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageSquare,
  Sparkles,
  Zap,
  Heart,
  Globe2,
  Users,
  Award
} from 'lucide-react';

const AboutCTA = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "tel:+919990115992",
      label: "+91 99901 15992",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed information",
      action: "mailto:info@novitrail.com",
      label: "info@novitrail.com",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Contact Form",
      description: "Send us your requirements",
      action: "/contact-us",
      label: "Fill Contact Form",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "8+ years in pharmaceutical distribution"
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Serving 20+ countries worldwide"
    },
    {
      icon: Users,
      title: "Trusted Partners",
      description: "5000+ suppliers in our network"
    },
    {
      icon: Heart,
      title: "Quality Commitment",
      description: "GDP-compliant operations"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-novitrail-blue/10 to-novitrail-orange/10 rounded-full blur-3xl top-0 right-0"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-novitrail-orange/12 to-novitrail-blue/12 rounded-full blur-3xl bottom-0 left-0"
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
                Ready to Partner?
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-extrabold font-tomorrow mb-8">
              <span className="text-novitrail-blue">Let&apos;s Transform</span>{" "}
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

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join hands with Novitrail Pharmaceuticals and become part of a global network 
              committed to excellence, innovation, and making quality healthcare accessible worldwide.
            </p>
          </motion.div>

          {/* Main CTA Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Column - Why Choose Us */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-3xl font-bold text-novitrail-blue mb-8 font-tomorrow flex items-center gap-3">
                  <Heart className="w-8 h-8 text-novitrail-orange" />
                  Why Partner With Us?
                </h3>

                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, transition: { duration: 0.3 } }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-novitrail-blue to-novitrail-blue/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-novitrail-blue mb-2 group-hover:text-novitrail-orange transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-novitrail-blue mb-2 font-tomorrow">
                        10,000+
                      </div>
                      <div className="text-gray-600 text-sm">Product Lines</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-novitrail-orange mb-2 font-tomorrow">
                        24/7
                      </div>
                      <div className="text-gray-600 text-sm">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-novitrail-orange/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 font-tomorrow flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-novitrail-orange" />
                    Get in Touch
                  </h3>

                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Ready to explore partnership opportunities? Our team is here to help 
                    you find the perfect pharmaceutical solutions for your market.
                  </p>

                  {/* Primary CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-8"
                  >
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-3 bg-novitrail-orange hover:bg-novitrail-orange/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                      Start Partnership Discussion
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </Link>
                  </motion.div>

                  {/* Secondary Info */}
                  <div className="text-blue-100 text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-novitrail-orange" />
                      <span>Quick response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-novitrail-orange" />
                      <span>Free consultation and market analysis</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 group"
                  >
                    <Link href={method.action} className="block">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-novitrail-blue mb-1 group-hover:text-novitrail-orange transition-colors duration-300">
                            {method.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-1">{method.description}</p>
                          <p className="text-novitrail-orange font-semibold text-sm">{method.label}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-novitrail-orange group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Trust Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 text-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-novitrail-blue to-novitrail-orange rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-novitrail-blue mb-4 font-tomorrow">
                Trusted by Healthcare Partners Worldwide
              </h3>

              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
                Join thousands of satisfied partners who trust Novitrail for their 
                pharmaceutical distribution needs. Experience the difference of working 
                with a truly global, quality-focused pharmaceutical company.
              </p>

              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-novitrail-blue mb-2 font-tomorrow">5000+</div>
                  <div className="text-gray-600 text-sm">Trusted Suppliers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-novitrail-orange mb-2 font-tomorrow">20+</div>
                  <div className="text-gray-600 text-sm">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-novitrail-blue mb-2 font-tomorrow">8+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-novitrail-orange mb-2 font-tomorrow">24/7</div>
                  <div className="text-gray-600 text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;