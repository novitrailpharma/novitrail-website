"use client";

import React, { useState, useEffect } from 'react';
import { categories, getProductData, type CategoryId } from '@/utils/productData';
import { ChevronDown } from 'lucide-react';

type Product = {
  sno: string;
  product: string;
};

const ProductTable = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('injectable');
  const [currentData, setCurrentData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const data = await getProductData(activeCategory);
        // Ensure data is properly typed
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

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Mobile Dropdown */}
      <div className="md:hidden mb-6">
        <div className="relative">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value as CategoryId)}
            className="w-full appearance-none bg-[#002B5B] text-white px-6 py-4 rounded-lg text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:ring-opacity-50"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      {/* Desktop Tabs */}
      <div className="hidden md:flex justify-center mb-6">
        <div className="inline-flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap text-base font-medium ${
                activeCategory === category.id
                  ? 'bg-[#002B5B] text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Table Container with fixed height */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Table Header - Always visible */}
        <div className="sticky top-0 z-10">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-[#002B5B] text-white px-6 py-4 text-left w-24 md:w-32">
                  <span className="text-sm md:text-base">Sr. No.</span>
                </th>
                <th className="bg-[#002B5B] text-white px-6 py-4 text-left">
                  <span className="text-sm md:text-base">Product</span>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Table Body - Scrollable */}
        <div className="overflow-y-auto h-[calc(100vh-24rem)] min-h-[400px]">
          <table className="w-full">
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={2} className="px-6 py-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 bg-[#002B5B] rounded-full animate-bounce" />
                      <div className="w-4 h-4 bg-[#002B5B] rounded-full animate-bounce [animation-delay:-.3s]" />
                      <div className="w-4 h-4 bg-[#002B5B] rounded-full animate-bounce [animation-delay:-.5s]" />
                    </div>
                  </td>
                </tr>
              ) : currentData.length === 0 ? (
                <tr>
                  <td colSpan={2} className="px-6 py-8 text-center text-gray-500">
                    No products found in this category
                  </td>
                </tr>
              ) : (
                currentData.map((product) => (
                  <tr
                    key={`${activeCategory}-${product.sno}`}
                    className={`transition-colors duration-150 hover:bg-gray-50 ${
                      parseInt(product.sno) % 2 === 0 
                        ? 'bg-white' 
                        : 'bg-[#2196F3] bg-opacity-5'
                    }`}
                  >
                    <td className="px-6 py-4 border-b border-gray-100 w-24 md:w-32">
                      <span className="text-sm md:text-base text-gray-600">{product.sno}</span>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-100">
                      <span className="text-sm md:text-base text-gray-800">{product.product}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;