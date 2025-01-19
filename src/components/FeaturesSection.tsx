"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Import Next.js Link component
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface SectionData {
  heading: string;
  subHeading: string;
  cards: {
    title: string;
    content?: string;
    href?: string;
    icon: React.ReactNode;
  }[];
}

interface FeaturesSectionProps {
  sectionData: SectionData;
  bush: boolean;
}

export default function FeaturesSection({ sectionData, bush }: FeaturesSectionProps) {
  const [openIndex, setOpenIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section className="relative bg-white text-gray-900 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {bush ? (
          <>
            <div className="absolute w-[500px] h-[500px] bg-novitrail-orange/20 rounded-full blur-3xl top-10 -left-20" />
            <div className="absolute w-[400px] h-[400px] bg-novitrail-blue/20 rounded-full blur-3xl bottom-10 -right-20" />
          </>
        ) : (
          <>
            <div className="absolute w-[400px] h-[400px] bg-novitrail-blue/20 rounded-full blur-3xl bottom-10 -right-20" />
            <div className="absolute w-[500px] h-[500px] bg-novitrail-orange/20 rounded-full blur-3xl top-10 -left-20" />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center group">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-novitrail-orange relative inline-block">
            {headingP1.join(" ").concat(" ")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-novitrail-orange to-novitrail-blue">
              {headingP2}
            </span>
            <span className="absolute left-1/2 bottom-[-8px] h-2 w-0 bg-gradient-to-r from-novitrail-orange to-novitrail-blue group-hover:w-[90%] transition-all duration-300 ease-out origin-center transform -translate-x-1/2 rounded-full" />
          </h2>
          <p className="mt-8 text-lg text-gray-600">{subHeading}</p>
        </div>

        {/* Features Grid */}
        <div className="mt-24 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((feature, index) => {
            const isLastCard = index === cards.length - 1;
            const borderColor = index % 2 === 0 ? "border-novitrail-orange" : "border-novitrail-blue";

            const cardContent = (
              <motion.div
                key={feature.title}
                layout
                className={`
                  relative group p-6 bg-white rounded-xl shadow-lg 
                  transition-all duration-300 border-t-4 ${borderColor}
                  ${isMobile ? "cursor-pointer pl-16" : "hover:shadow-2xl hover:-translate-y-3"}
                  ${isLastCard && !isMobile && cards.length !== 3 ? "lg:col-span-1 lg:col-start-2" : ""}
                `}
                onClick={() => handleCardClick(index)}
              >
                <motion.div
                  className={`
                    absolute bg-white p-3 rounded-full shadow-md z-10
                    ${!isMobile && "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"}
                  `}
                  initial={isMobile ? { scale: 0.8, x: 0, y: "-50%", left: "-12px", top: "50%" } : { scale: 1, x: "-50%", y: 0, left: "50%", top: "-30px" }}
                  animate={
                    isMobile
                      ? openIndex === index
                        ? { scale: 1, x: "-50%", y: 0, left: "50%", top: "-30px" }
                        : { scale: 0.8, x: 0, y: "-50%", left: "-12px", top: "50%" }
                      : { scale: 1, x: "-50%", y: 0, left: "50%", top: "-30px" }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                <div className={`${isMobile ? "" : "mt-8"}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    {isMobile && (
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    )}
                  </div>
                  <motion.div
                    className="overflow-hidden"
                    animate={{
                      height: isMobile ? (openIndex === index ? "auto" : 0) : "auto",
                      opacity: isMobile ? (openIndex === index ? 1 : 0) : 1,
                      marginTop: isMobile ? (openIndex === index ? 8 : 0) : 8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600">{feature.content}</p>
                  </motion.div>
                </div>
              </motion.div>
            );

            return feature.href ? (
              <Link href={feature.href} key={index} className="no-underline" passHref>
                {cardContent}
              </Link>
            ) : (
              cardContent
            );
          })}
        </div>
      </div>
    </section>
  );
}
