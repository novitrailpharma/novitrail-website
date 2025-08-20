'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import MedicationTable from "@/components/Table/MedicationTable";
import Pagination from "@/components/Table/Pagination";
import { Search, Filter, Download, RefreshCw, Database } from "lucide-react";

type Medication = {
  productName: string;
  brandEquivalent: string;
  therapeuticClass: string;
  ndc: string;
  strength: string;
  size: string;
  form: string;
  prescribingInfo: string;
  medicationGuide: string;
};

type TableComponentProps = {
  data: Medication[];
};

const TableComponent = ({ data }: TableComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState<keyof Medication | "all">("all");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const itemsPerPage = 12;

  // Filter data based on search term and filter
  const filteredData = data.filter(item => {
    const searchMatch = searchTerm === "" || Object.values(item).some(value =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filterMatch = filterBy === "all" || item[filterBy as keyof Medication]?.toLowerCase().includes(searchTerm.toLowerCase());

    return searchMatch && filterMatch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setCurrentPage(1);
    }, 1000);
  };

  const handleExport = () => {
    const csvContent = [
      Object.keys(data[0]).join(','),
      ...filteredData.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'medications.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filterOptions = [
    { value: "all", label: "All Fields" },
    { value: "productName", label: "Product Name" },
    { value: "brandEquivalent", label: "Brand" },
    { value: "therapeuticClass", label: "Therapeutic Class" },
    { value: "form", label: "Form" }
  ];

  return (
    <div className="max-w-full mx-auto p-6 bg-gradient-to-br from-slate-50 to-white min-h-screen">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Database className="w-8 h-8 text-novitrail-orange" />
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold text-novitrail-blue font-tomorrow text-center">
            Medication Database
          </h1>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-novitrail-blue to-novitrail-orange mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto">
          Comprehensive pharmaceutical information system with advanced search and filtering capabilities
        </p>
      </motion.div>

      {/* Controls Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search Input */}
          <div className="relative lg:col-span-2">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search medications..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-novitrail-blue/20 focus:border-novitrail-blue focus:bg-white transition-all duration-300"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={filterBy}
              onChange={(e) => {
                setFilterBy(e.target.value as keyof Medication | "all");
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-novitrail-blue/20 focus:border-novitrail-blue appearance-none cursor-pointer"
            >
              {filterOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleRefresh}
              disabled={isRefreshing}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isRefreshing 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 text-white hover:from-novitrail-orange hover:to-novitrail-orange/90 shadow-md hover:shadow-lg'
              }`}
            >
              <motion.div
                animate={isRefreshing ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0, ease: "linear" }}
              >
                <RefreshCw className="w-4 h-4" />
              </motion.div>
              <span className="hidden sm:inline">Refresh</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleExport}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-novitrail-orange to-novitrail-orange/90 text-white rounded-xl font-semibold hover:from-novitrail-blue hover:to-novitrail-blue/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </motion.button>
          </div>
        </div>

        {/* Results Summary */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 pt-4 border-t border-gray-100"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
            <div>
              Showing <span className="font-semibold text-novitrail-blue">{currentData.length}</span> of{" "}
              <span className="font-semibold text-novitrail-blue">{filteredData.length}</span> medications
              {searchTerm && (
                <span className="ml-2">
                  matching &quot;<span className="font-semibold text-novitrail-orange">{searchTerm}</span>&quot;
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Real-time data</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Table Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <MedicationTable data={currentData} itemsPerPage={itemsPerPage} />
      </motion.div>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </motion.div>
      )}

      {/* Empty State */}
      {filteredData.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <Database className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-600 mb-2">No medications found</h3>
          <p className="text-gray-500 mb-6">
            {searchTerm 
              ? `No results matching "${searchTerm}". Try adjusting your search terms.`
              : "No medication data available."
            }
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSearchTerm("");
              setFilterBy("all");
              setCurrentPage(1);
            }}
            className="bg-gradient-to-r from-novitrail-blue to-novitrail-blue/90 text-white px-6 py-3 rounded-xl font-semibold hover:from-novitrail-orange hover:to-novitrail-orange/90 transition-all duration-300 shadow-lg"
          >
            Clear Filters
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default TableComponent;