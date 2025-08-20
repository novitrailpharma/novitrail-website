'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SectionData {
  heading: string;
  subHeading: string;
  cards: {
    title: string;
    content?: string;
    href?: string;
  icon: React.ReactElement<{ className?: string }>;
  }[];
}

interface FeaturesSectionProps {
  sectionData: SectionData;
  bush: boolean;
}

export default function FeaturesSection({ sectionData, bush }: FeaturesSectionProps) {
  const [openIndex, setOpenIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const { heading, subHeading, cards } = sectionData;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) {
        setOpenIndex(-1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (index: number) => {
    if (!isMobile) return;
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const headingP1 = heading.split(" ");
  const headingP2 = headingP1.pop();

  // Animation variants
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
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
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
    <section className={`relative py-24 overflow-hidden ${bush ? 'bg-white' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'}`}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-40">
        {bush ? (
          <>
            <motion.div 
              animate={floatingAnimation}
              className="absolute w-[500px] h-[500px] bg-gradient-to-br from-novitrail-orange/20 to-novitrail-orange/10 rounded-full blur-3xl top-10 -left-20"
            />
            <motion.div 
              animate={{
                y: [10, -10, 10],
                transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-[400px] h-[400px] bg-gradient-to-br from-novitrail-blue/20 to-novitrail-blue/10 rounded-full blur-3xl bottom-10 -right-20"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-novitrail-orange rounded-full animate-ping"></div>
          </>
        ) : (
          <>
            <motion.div 
              animate={{
                y: [15, -15, 15],
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute w-[400px] h-[400px] bg-gradient-to-br from-novitrail-blue/15 to-novitrail-blue/5 rounded-full blur-3xl bottom-10 -right-20"
            />
            <motion.div 
              animate={floatingAnimation}
              className="absolute w-[500px] h-[500px] bg-gradient-to-br from-novitrail-orange/15 to-novitrail-orange/5 rounded-full blur-3xl top-10 -left-20"
            />
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-novitrail-blue rounded-full animate-bounce"></div>
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Enhanced Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center group mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-novitrail-orange" />
            </motion.div>
            <span className="text-novitrail-orange font-semibold text-lg">
              {bush ? "Our Expertise" : "Why Choose Us"}
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-tomorrow relative inline-block">
            <span className="text-novitrail-blue">
              {headingP1.join(" ").concat(" ")}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-novitrail-orange to-novitrail-blue">
              {headingP2}
            </span>
            <motion.span 
              className="absolute left-1/2 bottom-[-8px] h-2 bg-gradient-to-r from-novitrail-orange to-novitrail-blue transition-all duration-500 ease-out origin-center transform -translate-x-1/2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            {subHeading}
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid - MINIMAL FIX: Just add top padding to prevent cropping */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8"
        >
          {cards.map((feature, index) => {
            const isLastCard = index === cards.length - 1;

            // PERFECT CONTRAST SYSTEM
            const isEven = index % 2 === 0;

            const borderColor = isEven ? "border-novitrail-orange" : "border-novitrail-blue";
            const iconBgColor = isEven ? "from-novitrail-orange to-novitrail-orange/90" : "from-novitrail-blue to-novitrail-blue/90";
            const iconTextColor = isEven ? "text-novitrail-blue" : "text-novitrail-orange";

            // Hover states: swap colors for visual interest
            const hoverIconBgColor = isEven ? "group-hover:from-novitrail-blue group-hover:to-novitrail-blue/90" : "group-hover:from-novitrail-orange group-hover:to-novitrail-orange/90";
            const hoverIconTextColor = isEven ? "group-hover:text-novitrail-orange" : "group-hover:text-novitrail-blue";

            const cardContent = (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                layout
                whileHover={!isMobile ? { 
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.4, ease: "easeOut" }
                } : {}}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`
                  relative group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl
                  transition-all duration-500 border-t-4 ${borderColor}
                  ${isMobile ? "cursor-pointer pl-16" : ""}
                  ${isLastCard && !isMobile && cards.length !== 3 ? "lg:col-span-1 lg:col-start-2" : ""}
                `}
                onClick={() => handleCardClick(index)}
              >
                {/* MINIMAL FIX: Remove overflow-hidden, keep background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-novitrail-blue/5 to-novitrail-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* ICON CONTAINER: Keep original positioning, just increase z-index */}
                <motion.div
                  className={`
                    absolute bg-gradient-to-br ${iconBgColor} ${hoverIconBgColor} p-4 rounded-2xl shadow-xl z-50 transition-all duration-500 border-2 border-white/20
                    ${!isMobile && "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"}
                    ${isMobile && 'top-1/2 left-4 -translate-y-1/2'}
                  `}
                  initial={{ scale: isMobile ? 0.85 : 1 }}
                  animate={{ scale: isMobile && openIndex !== index ? 0.85 : 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={!isMobile ? iconVariants.hover : {}}
                >
                  {/* PERFECTED: Icon with Maximum Contrast Colors */}
                  <div className={`w-8 h-8 flex items-center justify-center ${iconTextColor} ${hoverIconTextColor} transition-colors duration-500`}>
                    {React.isValidElement(feature.icon)
                      ? React.cloneElement(feature.icon, {
                          className: `w-8 h-8 ${iconTextColor} ${hoverIconTextColor} transition-colors duration-500`
                        })
                      : feature.icon}
                  </div>

                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 rounded-2xl shadow-inner opacity-20"></div>
                </motion.div>

                {/* Content */}
                <div className={`relative z-10 ${isMobile ? "" : "mt-8"}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl lg:text-2xl font-bold font-tomorrow transition-colors duration-300 ${
                      isEven 
                        ? "text-novitrail-blue group-hover:text-novitrail-orange" 
                        : "text-novitrail-orange group-hover:text-novitrail-blue"
                    }`}>
                      {feature.title}
                    </h3>
                    {isMobile && (
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-novitrail-blue"
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    )}
                  </div>

                  <motion.div
                    className="overflow-hidden"
                    animate={{
                      height: isMobile ? (openIndex === index ? 'auto' : 0) : 'auto',
                      opacity: isMobile ? (openIndex === index ? 1 : 0) : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      {feature.content}
                    </p>

                    {/* Learn More Button for href cards */}
                    {feature.href && !isMobile && (
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-novitrail-blue group-hover:text-novitrail-orange font-semibold transition-colors duration-300 mt-4"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Enhanced decorative corner accent */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl ${
                  isEven ? "from-novitrail-orange/15" : "from-novitrail-blue/15"
                } to-transparent rounded-full group-hover:scale-110 transition-all duration-500`}></div>

                {/* Enhanced floating particles effect on hover */}
                <AnimatePresence>
                  {hoveredCard === index && !isMobile && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      <div className={`absolute top-8 right-8 w-2 h-2 ${isEven ? 'bg-novitrail-blue' : 'bg-novitrail-orange'} rounded-full animate-ping`}></div>
                      <div className={`absolute bottom-12 left-8 w-1 h-1 ${isEven ? 'bg-novitrail-orange' : 'bg-novitrail-blue'} rounded-full animate-pulse`}></div>
                      <div className={`absolute top-16 left-16 w-1.5 h-1.5 ${isEven ? 'bg-novitrail-blue/60' : 'bg-novitrail-orange/60'} rounded-full animate-bounce`}></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );

            return feature.href ? (
              <Link href={feature.href} key={index} className="no-underline group" passHref>
                {cardContent}
              </Link>
            ) : (
              cardContent
            );
          })}
        </motion.div>

        {/* Enhanced Call to Action */}
        {bush && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 hover:from-novitrail-orange hover:to-novitrail-orange/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 shadow-lg font-tomorrow"
            >
              Explore All Services
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}