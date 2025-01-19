"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface WhoWeAreProps {
  data: string[];
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ data }) => {
  const heading = "Who We Are?";
  const subHeading = "Your Trusted Partner in Global Healthcare";

  const headingParts = heading.split(" ");
  const lastWord = headingParts.pop() || "";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section className="relative bg-white text-gray-900 py-20 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-novitrail-orange/20 rounded-full blur-3xl top-10 -left-20"></div>
        <div className="absolute w-[400px] h-[400px] bg-novitrail-blue/20 rounded-full blur-3xl bottom-10 -right-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center group">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-novitrail-orange relative inline-block">
            {headingParts.join(" ").concat(" ")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-novitrail-orange to-novitrail-blue">
              {lastWord}
            </span>
            {/* Underline Effect */}
            <span
              className="absolute left-1/2 bottom-[-8px] h-2 w-0 bg-gradient-to-r from-novitrail-orange to-novitrail-blue group-hover:w-[90%] transition-all duration-300 ease-out origin-center transform -translate-x-1/2 rounded-full"
            ></span>
          </h2>
          <p className="mt-8 text-lg text-gray-600">{subHeading}</p>
        </div>

        {/* Cards */}
        <motion.div
          className="mt-24 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {data.map((paragraph, index) => (
            <ExpandableCard
              key={index}
              paragraph={paragraph}
              borderColor={index % 2 === 0 ? "border-novitrail-orange" : "border-novitrail-blue"}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ExpandableCardProps {
  paragraph: string;
  borderColor: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ paragraph, borderColor }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsExpanded(true); // Automatically show full text on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const maxPreviewLength = 120; // Truncate paragraph for smaller screens
  const isLongText = paragraph.length > maxPreviewLength;

  return (
    <motion.div
      className={`bg-white shadow-lg rounded-lg p-6 border-l-4 ${borderColor}`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <p className="text-lg text-gray-700 leading-relaxed">
        {isExpanded || !isLongText || !isSmallScreen
          ? paragraph
          : `${paragraph.substring(0, maxPreviewLength)}...`}
      </p>

      {isLongText && isSmallScreen && (
        <button
          onClick={toggleExpand}
          className="flex items-center mt-4 text-novitrail-blue font-medium hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
          <ChevronDown
            size={20}
            className={`ml-1 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </motion.div>
  );
};

export default WhoWeAre;
