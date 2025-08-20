'use client';

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp, ArrowUpDown, Pill, Filter } from "lucide-react";

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

type MedicationTableProps = {
  data: Medication[];
  itemsPerPage: number;
};

const MedicationTable: React.FC<MedicationTableProps> = ({ data, itemsPerPage }) => {
  const [sortConfig, setSortConfig] = useState<{ 
    key: keyof Medication | "", 
    direction: "asc" | "desc" | "" 
  }>({ key: "", direction: "" });
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredHeader, setHoveredHeader] = useState<string | null>(null);

  const handleSort = (column: keyof Medication) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === column && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: column, direction });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof Medication] || "";
      const bValue = b[sortConfig.key as keyof Medication] || "";

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const rowsToFill = itemsPerPage - data.length;

  const headers = [
    { key: "productName", label: "Product Name", width: "w-48" },
    { key: "brandEquivalent", label: "Brand Equivalent", width: "w-40" },
    { key: "therapeuticClass", label: "Therapeutic Class", width: "w-44" },
    { key: "ndc", label: "NDC", width: "w-32" },
    { key: "strength", label: "Strength", width: "w-28" },
    { key: "size", label: "Size", width: "w-24" },
    { key: "form", label: "Form", width: "w-28" },
    { key: "prescribingInfo", label: "Prescribing Info", width: "w-36" },
    { key: "medicationGuide", label: "Medication Guide", width: "w-36" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const getSortIcon = (columnKey: string) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowUpDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />;
    }

    return sortConfig.direction === "asc" ? (
      <motion.div
        initial={{ rotate: 180 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowUp className="w-4 h-4 text-novitrail-orange" />
      </motion.div>
    ) : (
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 180 }}
        transition={{ duration: 0.2 }}
      >
        <ArrowDown className="w-4 h-4 text-novitrail-orange" />
      </motion.div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Table Header with enhanced styling */}
      <div className="bg-gradient-to-r from-novitrail-blue via-novitrail-blue to-novitrail-blue/90 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Escaped quotes in data URI to prevent JSX parse issues */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2230%22 height=%2230%22 viewBox=%220 0 30 30%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%225%22 cy=%225%22 r=%222%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="flex items-center gap-3 px-6 py-4 relative z-10">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Pill className="w-6 h-6 text-novitrail-orange" />
          </motion.div>
          <h3 className="text-xl font-bold text-white font-tomorrow">Medication Database</h3>
          <div className="ml-auto flex items-center gap-2">
            <Filter className="w-5 h-5 text-white/70" />
            <span className="text-white/70 text-sm">{data.length} medications</span>
          </div>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto max-h-[600px] custom-scrollbar">
        <table className="min-w-full">
          <thead className="sticky top-0 z-20">
            <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
              {headers.map(({ key, label, width }) => (
                <th
                  key={key}
                  onClick={() => handleSort(key as keyof Medication)}
                  onMouseEnter={() => setHoveredHeader(key)}
                  onMouseLeave={() => setHoveredHeader(null)}
                  className={`${width} px-4 py-4 text-left text-sm font-bold uppercase tracking-wide cursor-pointer group relative transition-all duration-300 border-b-2 border-gray-200 ${
                    hoveredHeader === key 
                      ? 'bg-gradient-to-r from-novitrail-blue/10 to-novitrail-orange/10' 
                      : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <motion.span
                      animate={{
                        color: hoveredHeader === key ? "rgb(0 69 131)" : "rgb(71 85 105)"
                      }}
                      className="transition-colors duration-200"
                    >
                      {label}
                    </motion.span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="ml-2"
                    >
                      {getSortIcon(key)}
                    </motion.div>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-novitrail-blue to-novitrail-orange"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredHeader === key ? "100%" : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </th>
              ))}
            </tr>
          </thead>

          <motion.tbody 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="divide-y divide-gray-100"
          >
            <AnimatePresence>
              {sortedData.map((item, index) => (
                <motion.tr
                  key={`${item.productName}-${index}`}
                  variants={rowVariants}
                  layout
                  onHoverStart={() => setHoveredRow(index)}
                  onHoverEnd={() => setHoveredRow(null)}
                  whileHover={{ scale: 1.005, transition: { duration: 0.2 } }}
                  className={`relative transition-all duration-200 hover:bg-slate-50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                  }`}
                >
                  <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                    <motion.div
                      animate={{
                        color: hoveredRow === index ? "rgb(0 69 131)" : "rgb(17 24 39)"
                      }}
                    >
                      {item.productName}
                    </motion.div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{item.brandEquivalent}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {item.therapeuticClass}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 font-mono">{item.ndc}</td>
                  <td className="px-4 py-4 text-sm text-gray-700 font-semibold">{item.strength}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{item.size}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    <span className="bg-green-50 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {item.form}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">{item.prescribingInfo}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{item.medicationGuide}</td>

                  {/* Row hover indicator */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-novitrail-blue to-novitrail-orange"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{
                      opacity: hoveredRow === index ? 1 : 0,
                      scaleY: hoveredRow === index ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.tr>
              ))}

              {/* Fill empty rows to maintain consistent table height */}
              {rowsToFill > 0 && Array.from({ length: rowsToFill }).map((_, index) => (
                <motion.tr
                  key={`empty-${index}`}
                  variants={rowVariants}
                  className="h-16 bg-white border-b border-gray-100"
                >
                  {headers.map((header) => (
                    <td key={header.key} className="px-4 py-4 text-sm text-gray-300">
                      <div className="w-full h-4 bg-gray-100 rounded animate-pulse"></div>
                    </td>
                  ))}
                </motion.tr>
              ))}
            </AnimatePresence>
          </motion.tbody>
        </table>
      </div>

      {/* Table Footer with stats */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing <span className="font-semibold text-novitrail-blue">{data.length}</span> medications
            {sortConfig.key && (
              <span className="ml-2">
                (sorted by <span className="font-semibold text-novitrail-orange">{sortConfig.key}</span>)
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live data</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #004583, #E45D1C);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #E45D1C, #004583);
        }
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: #f1f5f9;
        }
      `}</style>
    </div>
  );
};

export default MedicationTable;