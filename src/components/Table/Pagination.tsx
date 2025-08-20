'use client';

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MoreHorizontal, ChevronsLeft, ChevronsRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirst = () => {
    onPageChange(1);
  };

  const handleLast = () => {
    onPageChange(totalPages);
  };

  // Generate page numbers to display
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const pageVariants = {
    inactive: {
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(75, 85, 99)",
      borderColor: "rgb(229, 231, 235)"
    },
    active: {
      backgroundColor: "rgb(0, 69, 131)",
      color: "rgb(255, 255, 255)",
      borderColor: "rgb(0, 69, 131)"
    },
    hover: {
      backgroundColor: "rgb(228, 93, 28)",
      color: "rgb(255, 255, 255)",
      borderColor: "rgb(228, 93, 28)",
      scale: 1.05
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      {/* Page Info */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-sm text-gray-600 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
      >
        Page <span className="font-semibold text-novitrail-blue">{currentPage}</span> of{" "}
        <span className="font-semibold text-novitrail-blue">{totalPages}</span>
      </motion.div>

      {/* Pagination Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-lg border border-gray-100"
      >
        {/* First Page Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleFirst}
          disabled={currentPage === 1}
          className={`p-2 rounded-lg border transition-all duration-200 ${
            currentPage === 1
              ? 'text-gray-400 border-gray-200 cursor-not-allowed'
              : 'text-gray-600 border-gray-300 hover:text-white hover:bg-novitrail-blue hover:border-novitrail-blue'
          }`}
          title="First page"
        >
          <ChevronsLeft className="w-4 h-4" />
        </motion.button>

        {/* Previous Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border font-medium transition-all duration-200 ${
            currentPage === 1
              ? 'text-gray-400 border-gray-200 cursor-not-allowed'
              : 'text-gray-600 border-gray-300 hover:text-white hover:bg-novitrail-blue hover:border-novitrail-blue'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </motion.button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {visiblePages.map((page, index) => (
            <React.Fragment key={index}>
              {page === 'ellipsis' ? (
                <div className="px-3 py-2 text-gray-400">
                  <MoreHorizontal className="w-4 h-4" />
                </div>
              ) : (
                <motion.button
                  variants={pageVariants}
                  initial="inactive"
                  animate={currentPage === page ? "active" : "inactive"}
                  whileHover={currentPage !== page ? "hover" : {}}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onPageChange(page as number)}
                  className={`min-w-[40px] h-10 px-3 py-2 rounded-lg border font-semibold transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 text-white border-novitrail-blue shadow-md'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gradient-to-r hover:from-novitrail-orange hover:to-novitrail-orange/90 hover:text-white hover:border-novitrail-orange'
                  }`}
                >
                  {page}
                </motion.button>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border font-medium transition-all duration-200 ${
            currentPage === totalPages
              ? 'text-gray-400 border-gray-200 cursor-not-allowed'
              : 'text-gray-600 border-gray-300 hover:text-white hover:bg-novitrail-blue hover:border-novitrail-blue'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>

        {/* Last Page Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleLast}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-lg border transition-all duration-200 ${
            currentPage === totalPages
              ? 'text-gray-400 border-gray-200 cursor-not-allowed'
              : 'text-gray-600 border-gray-300 hover:text-white hover:bg-novitrail-blue hover:border-novitrail-blue'
          }`}
          title="Last page"
        >
          <ChevronsRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Quick Jump (for larger datasets) */}
      {totalPages > 10 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex items-center gap-3 text-sm"
        >
          <span className="text-gray-600">Jump to:</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            placeholder="Page"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const page = parseInt((e.target as HTMLInputElement).value);
                if (page >= 1 && page <= totalPages) {
                  onPageChange(page);
                  (e.target as HTMLInputElement).value = '';
                }
              }
            }}
            className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-novitrail-blue/30 focus:border-novitrail-blue text-center"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const input = document.querySelector('input[type="number"]') as HTMLInputElement;
              const page = parseInt(input.value);
              if (page >= 1 && page <= totalPages) {
                onPageChange(page);
                input.value = '';
              }
            }}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-novitrail-blue hover:text-white transition-colors duration-200"
          >
            Go
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default Pagination;