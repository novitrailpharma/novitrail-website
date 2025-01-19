import PageHeading from '@/components/PageHeading';
import React from 'react';
import TableComponent from "@/components/Table/TableComponent";
import novitrailData from "@/assets/novitrail.json";


const NovitrailProducts = () => {
  return (
    <>
      <PageHeading
        title="Novitrail Products Portfolio"
        description="Discover our comprehensive range of pharmaceutical products, including specialty medicines, generic drugs, and surgical disposables."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Portfolio", link: "/portfolio" },
          { label: "Novitrail Products", link: "/novitrail-products" },
        ]}
        photo={"/novi_products/1.png"}
      />
      <TableComponent data={novitrailData} />
    </>
  );
};

export default NovitrailProducts;