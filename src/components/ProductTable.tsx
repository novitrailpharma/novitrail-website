'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, getProductData, type CategoryId } from '@/utils/productData';
import { ChevronDown, Search, Package, Grid, Loader } from 'lucide-react';

type Product = {
  sno: string;
  product: string;
};

const ProductTable = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('injectable');
  const [currentData, setCurrentData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await getProductData(activeCategory);
        const typedData: Product[] = Array.isArray(data) 
          ? data.map(item => ({
              sno: String(item.sno),
              product: String(item.product || '')
            }))
          : [];
        setCurrentData(typedData);
      } catch (error) {
        console.error('Error loading product data:', error);
        setCurrentData([]);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [activeCategory]);

  // Filter data based on search term
  const filteredData = currentData.filter(product =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sno.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Removed unused tabVariants after simplifying tab animation

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-white min-h-screen">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Package className="w-8 h-8 text-novitrail-orange" />
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold text-novitrail-blue font-tomorrow">
            Product Portfolio
          </h1>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-novitrail-blue to-novitrail-orange mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Explore our comprehensive range of pharmaceutical products across multiple categories
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative max-w-md mx-auto mb-8"
      >
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-novitrail-blue/20 focus:border-novitrail-blue transition-all duration-300 text-gray-700"
        />
      </motion.div>

      {/* Mobile Dropdown */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="md:hidden mb-6"
      >
        <div className="relative">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value as CategoryId)}
            className="w-full appearance-none bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 text-white px-6 py-4 rounded-xl text-base font-medium focus:outline-none focus:ring-4 focus:ring-novitrail-blue/30 focus:ring-opacity-50 shadow-lg"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id} className="bg-white text-gray-900">
                {category.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white w-6 h-6 pointer-events-none" />
        </div>
      </motion.div>

      {/* Desktop Tabs */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hidden md:flex flex-wrap justify-center gap-2 mb-8"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg border border-transparent ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 text-white shadow-brand scale-[1.02]'
                : 'bg-slate-50 text-slate-700 hover:bg-white hover:text-novitrail-blue hover:border-novitrail-blue/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <Grid className="w-4 h-4" />
              {category.label}
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Results Counter */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-6"
      >
        <span className="text-gray-600">
          Showing <span className="font-semibold text-novitrail-blue">{filteredData.length}</span> products
          {searchTerm && (
            <span> matching &quot;<span className="font-semibold text-novitrail-orange">{searchTerm}</span>&quot;</span>
          )}
        </span>
      </motion.div>

      {/* Product Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
      >
        {/* Table Header */}
        <div className="bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 text-white">
          <div className="grid grid-cols-12 gap-4 p-6">
            <div className="col-span-2 font-bold text-lg">Sr. No.</div>
            <div className="col-span-10 font-bold text-lg">Product Name</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center py-20"
              >
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader className="w-8 h-8 text-novitrail-blue" />
                  </motion.div>
                  <p className="text-gray-600 font-medium">Loading products...</p>
                </div>
              </motion.div>
            ) : filteredData.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20"
              >
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-600 font-semibold">No products found</p>
                <p className="text-gray-500">Try adjusting your search or category selection</p>
              </motion.div>
            ) : (
              <motion.div
                key="data"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredData.map((product, index) => (
                  <motion.div
                    key={`${product.sno}-${index}`}
                    variants={itemVariants}
                    onHoverStart={() => setHoveredRow(index)}
                    onHoverEnd={() => setHoveredRow(null)}
                    className={`relative grid grid-cols-12 gap-4 p-6 border-b border-gray-50 last:border-b-0 transition-colors duration-200 ${
                      hoveredRow === index
                        ? 'bg-slate-50'
                        : index % 2 === 0
                          ? 'bg-gray-50/30'
                          : 'bg-white'
                    }`}
                  >
                    <div className="col-span-2">
                      <motion.div
                        animate={{
                          color: hoveredRow === index ? "rgb(0 69 131)" : "rgb(75 85 99)",
                          fontWeight: hoveredRow === index ? "600" : "500"
                        }}
                        className="text-gray-600 font-medium"
                      >
                        {product.sno}
                      </motion.div>
                    </div>
                    <div className="col-span-10">
                      <motion.div
                        animate={{
                          color: hoveredRow === index ? "rgb(0 69 131)" : "rgb(31 41 55)",
                          fontWeight: hoveredRow === index ? "600" : "400"
                        }}
                        className="text-gray-800 leading-relaxed"
                      >
                        {product.product}
                      </motion.div>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-novitrail-blue to-novitrail-orange opacity-0"
                      animate={{
                        opacity: hoveredRow === index ? 1 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Footer Statistics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="text-2xl font-bold text-novitrail-blue mb-2">{currentData.length}</div>
          <div className="text-gray-600">Total Products</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="text-2xl font-bold text-novitrail-orange mb-2">{categories.length}</div>
          <div className="text-gray-600">Categories</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="text-2xl font-bold text-novitrail-blue mb-2">FDA</div>
          <div className="text-gray-600">Approved</div>
        </div>
      </motion.div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #004583, #E45D1C);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #E45D1C, #004583);
        }
      `}</style>
    </div>
  );
};

export default ProductTable;