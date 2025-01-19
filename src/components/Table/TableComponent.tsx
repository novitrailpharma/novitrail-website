"use client";

import React, { useState } from "react";
import MedicationTable from "@/components/Table/MedicationTable";
import Pagination from "@/components/Table/Pagination";

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

const TableComponent = ({ data } : TableComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-t from-novitrail-blue/10 to-white p-8 mt-4">
      <div className="max-w-10xl mx-auto">
        <MedicationTable data={currentData} itemsPerPage={itemsPerPage}/>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};


export default TableComponent;