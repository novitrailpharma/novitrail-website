'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MotionStyle } from 'framer-motion';
import { 
  Globe2, 
  MapPin, 
  Users, 
  Package,
  Truck,
  Award,
  Sparkles,
  TrendingUp,
  Building2,
  Shield
} from 'lucide-react';

const GlobalReach = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regionsData = [
    {
      name: "European Union",
      code: "EU",
      countries: 8,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      description: "Comprehensive pharmaceutical distribution across major EU markets with full regulatory compliance.",
      highlights: ["GDP certified facilities", "Temperature-controlled logistics", "Regulatory expertise"],
      position: { top: "25%", left: "45%" }
    },
    {
      name: "MENA Region",
      code: "MENA",
      countries: 6,
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-100",
      description: "Strategic presence in Middle East and North Africa with specialized healthcare solutions.",
      highlights: ["Regional partnerships", "Cultural expertise", "Local compliance"],
      position: { top: "35%", left: "55%" }
    },
    {
      name: "Asian Markets",
      code: "ASIA",
      countries: 5,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-100",
      description: "Strong foothold in key Asian pharmaceutical markets with innovative distribution networks.",
      highlights: ["Market leadership", "Technology integration", "Quality assurance"],
      position: { top: "40%", left: "70%" }
    },
    {
      name: "SAARC Countries",
      code: "SAARC",
      countries: 3,
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-100",
      description: "Dedicated service to South Asian markets with deep regional understanding.",
      highlights: ["Regional expertise", "Cost-effective solutions", "Local partnerships"],
      position: { top: "45%", left: "65%" }
    },
    {
      name: "African Markets",
      code: "AFR",
      countries: 4,
      color: "from-rose-500 to-pink-600",
      bgColor: "from-rose-50 to-pink-100",
      description: "Expanding presence in African pharmaceutical markets with sustainable healthcare solutions.",
      highlights: ["Growth markets", "Healthcare access", "Sustainable practices"],
      position: { top: "55%", left: "50%" }
    },
    {
      name: "CIS Region",
      code: "CIS",
      countries: 3,
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-100",
      description: "Serving Commonwealth of Independent States with specialized pharmaceutical distribution.",
      highlights: ["Regional compliance", "Distribution networks", "Quality standards"],
      position: { top: "25%", left: "60%" }
    }
  ];

  const globalStats = [
    {
      icon: Globe2,
      number: "20+",
      label: "Countries Served",
      color: "from-novitrail-blue to-novitrail-blue/80"
    },
    {
      icon: Users,
      number: "5000+",
      label: "Trusted Suppliers",
      color: "from-novitrail-orange to-novitrail-orange/80"
    },
    {
      icon: Package,
      number: "10000+",
      label: "Product Lines",
      color: "from-novitrail-blue to-novitrail-blue/80"
    },
    {
      icon: Truck,
      number: "24/7",
      label: "Distribution Support",
      color: "from-novitrail-orange to-novitrail-orange/80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-novitrail-blue/10 to-novitrail-orange/10 rounded-full blur-3xl top-0 right-0"
        />
        <motion.div 
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-novitrail-orange/8 to-novitrail-blue/8 rounded-full blur-3xl bottom-0 left-0"
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
              Global Presence
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold font-tomorrow mb-8">
            <span className="text-novitrail-blue">Worldwide</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-novitrail-orange to-novitrail-blue">
              Network
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
            Spanning across continents, our global distribution network ensures reliable 
            access to quality pharmaceutical products wherever they&apos;re needed most.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Interactive World Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <h3 className="text-2xl font-bold text-novitrail-blue mb-6 font-tomorrow flex items-center gap-3">
                <Globe2 className="w-6 h-6 text-novitrail-orange" />
                Our Global Footprint
              </h3>

              {/* Simplified World Map Visual */}
              <div className="relative w-full h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
                {/* World map background pattern */}
                {/* NOTE: Quotes inside the data URI were percent-encoded to avoid JSX parse errors */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23004583%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0%2011.046-8.954%2020-20%2020v-40c11.046%200%2020%208.954%2020%2020z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>

                {/* Interactive Region Markers */}
                {regionsData.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute cursor-pointer"
                    style={{ top: region.position.top, left: region.position.left } as unknown as MotionStyle}
                    onClick={() => setSelectedRegion(selectedRegion === region.code ? null : region.code)}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className={`w-4 h-4 bg-gradient-to-br ${region.color} rounded-full shadow-lg ${
                      selectedRegion === region.code ? 'ring-4 ring-white ring-opacity-70' : ''
                    }`}>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                        className={`absolute inset-0 bg-gradient-to-br ${region.color} rounded-full`}
                      />
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {selectedRegion === region.code && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 min-w-48 z-20 border border-gray-100"
                        >
                          <div className="text-xs font-semibold text-novitrail-blue mb-1">
                            {region.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {region.countries} Countries
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Connecting Lines Animation */}
                <svg className="absolute inset-0 w-full h-full">
                  {regionsData.map((region, index) => (
                    <motion.line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={region.position.left}
                      y2={region.position.top}
                      stroke="url(#gradient)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                      viewport={{ once: true }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#004583" />
                      <stop offset="100%" stopColor="#E45D1C" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <p className="text-sm text-gray-600 mt-4 text-center">
                Click on regions to explore our global presence
              </p>
            </div>
          </motion.div>

          {/* Region Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              {selectedRegion ? (
                <motion.div
                  key={selectedRegion}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30"
                >
                  {(() => {
                    const region = regionsData.find(r => r.code === selectedRegion);
                    if (!region) return null;

                    return (
                      <>
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-br ${region.color} rounded-2xl flex items-center justify-center`}>
                            <MapPin className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-novitrail-blue font-tomorrow">
                              {region.name}
                            </h3>
                            <p className="text-novitrail-orange font-semibold">
                              {region.countries} Countries Served
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          {region.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-novitrail-blue flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Key Highlights
                          </h4>
                          {region.highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className={`w-2 h-2 bg-gradient-to-r ${region.color} rounded-full`}></div>
                              <span className="text-gray-600">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-novitrail-blue to-novitrail-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe2 className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-novitrail-blue mb-4 font-tomorrow">
                    Select a Region
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Click on any region marker on the map to learn more about our 
                    presence and services in that area.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {globalStats.slice(0, 4).map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/30 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-bold text-novitrail-blue mb-1 font-tomorrow">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Capabilities */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-novitrail-orange/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-novitrail-orange/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-white">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 font-tomorrow">
                Global Capabilities
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Our worldwide network enables us to deliver pharmaceutical excellence 
                across diverse markets with consistent quality and reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Regulatory Compliance",
                  description: "Full compliance with international regulations across all served markets"
                },
                {
                  icon: Building2,
                  title: "Infrastructure Excellence",
                  description: "State-of-the-art facilities with temperature-controlled storage"
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Growth",
                  description: "Expanding reach while maintaining highest quality standards"
                }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-novitrail-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 font-tomorrow">
                    {capability.title}
                  </h4>
                  <p className="text-blue-100 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReach;