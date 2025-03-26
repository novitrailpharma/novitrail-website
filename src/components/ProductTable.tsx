"use client";

import React, { useState, useEffect } from 'react';
import { categories, getProductData, type CategoryId } from '@/utils/productData';

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
        setCurrentData(Array.isArray(data) ? data : []);
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
    <div className="container mx-auto px-4 py-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-[#002B5B] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-[#002B5B] text-white px-6 py-3 text-left">Sr. No.</th>
              <th className="bg-[#002B5B] text-white px-6 py-3 text-left">Product</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={2} className="px-6 py-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : currentData.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-6 py-4 text-center">
                  No products found
                </td>
              </tr>
            ) : (
              currentData.map((product) => (
                <tr
                  key={`${activeCategory}-${product.sno}`}
                  className={parseInt(product.sno) % 2 === 0 ? 'bg-white' : 'bg-[#2196F3] bg-opacity-10'}
                >
                  <td className="px-6 py-4 border-b border-gray-200">{product.sno}</td>
                  <td className="px-6 py-4 border-b border-gray-200">{product.product}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;