'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Award, 
  Globe2, 
  Building2, 
  Users, 
  TrendingUp,
  Shield,
  Target,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const CompanyTimeline = () => {
  const timelineData = [
    {
      year: "2017",
      title: "Foundation & Vision",
      description: "Novitrail Pharmaceuticals was established with a vision to transform global pharmaceutical distribution.",
      icon: Rocket,
      color: "from-novitrail-blue to-novitrail-blue/80",
      achievements: ["Company incorporation", "Initial team formation", "Market research initiation"]
    },
    {
      year: "2018",
      title: "Market Entry & Partnerships",
      description: "Strategic partnerships established with key manufacturers and suppliers across multiple regions.",
      icon: Building2,
      color: "from-novitrail-orange to-novitrail-orange/80",
      achievements: ["First supplier partnerships", "Initial product portfolio", "Regional market analysis"]
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Extended operations to 10+ countries spanning Asian markets and European Union regions.",
      icon: Globe2,
      color: "from-novitrail-blue to-novitrail-blue/80",
      achievements: ["10+ countries operational", "EU market entry", "Cold chain infrastructure"]
    },
    {
      year: "2020",
      title: "Quality Certifications",
      description: "Achieved GDP compliance and FDA certifications, ensuring highest quality standards.",
      icon: Shield,
      color: "from-novitrail-orange to-novitrail-orange/80",
      achievements: ["GDP certification", "FDA compliance", "Quality systems implementation"]
    },
    {
      year: "2021",
      title: "Network Scaling",
      description: "Expanded supplier network to 3000+ partners and introduced oncology product lines.",
      icon: Users,
      color: "from-novitrail-blue to-novitrail-blue/80",
      achievements: ["3000+ suppliers", "Oncology portfolio launch", "Advanced warehousing"]
    },
    // {
    //   year: "2022",
    //   title: "Technology Innovation",
    //   description: "Implemented cutting-edge distribution technology and automated quality control systems.",
    //   icon: Target,
    //   color: "from-novitrail-orange to-novitrail-orange/80",
    //   achievements: ["Automation systems", "Digital infrastructure", "Process optimization"]
    // },
    {
      year: "2023",
      title: "Market Leadership",
      description: "Reached 20+ countries with 5000+ suppliers, becoming a trusted pharmaceutical distribution leader.",
      icon: Award,
      color: "from-novitrail-blue to-novitrail-blue/80",
      achievements: ["20+ countries served", "5000+ supplier network", "Industry recognition"]
    },
    {
      year: "2024+",
      title: "Future Vision",
      description: "Continuing to expand globally while maintaining excellence in pharmaceutical distribution and innovation.",
      icon: TrendingUp,
      color: "from-novitrail-orange to-novitrail-orange/80",
      achievements: ["Sustainable growth", "New market expansion", "Innovation leadership"]
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] bg-gradient-to-br from-novitrail-blue/10 to-novitrail-orange/10 rounded-full blur-3xl top-20 right-10"
        />
        <motion.div 
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-novitrail-orange/8 to-novitrail-blue/8 rounded-full blur-3xl bottom-20 left-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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
              Our Journey
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold font-tomorrow mb-8">
            <span className="text-novitrail-blue">Growing</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-novitrail-orange to-novitrail-blue">
              Together
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
            From a vision to a global pharmaceutical distribution leader - discover the milestones 
            that shaped our journey of excellence and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-novitrail-blue via-novitrail-orange to-novitrail-blue rounded-full opacity-30"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className={`bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-novitrail-blue font-tomorrow">
                          {item.year}
                        </div>
                        <div className="text-novitrail-orange font-semibold text-lg">
                          {item.title}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {item.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-novitrail-blue flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achievementIndex * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="flex-shrink-0 relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-4 border-white shadow-lg`}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full`}
                    />
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>

          {/* Timeline End Cap */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <div className="bg-gradient-to-r from-novitrail-blue to-novitrail-orange p-6 rounded-2xl shadow-2xl">
              <div className="text-center text-white">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-lg">Continuing Forward</div>
                <div className="text-sm opacity-90">Excellence in Every Step</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyTimeline;