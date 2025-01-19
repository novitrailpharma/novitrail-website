import PageHeading from '@/components/PageHeading';
import React from 'react';
import TableComponent from "@/components/Table/TableComponent";
import novitrailData from "@/assets/novitrail.json";


const Page = () => {
  return (
    <>
      <PageHeading
        title="Pharmaceutical Product Portfolio"
        description="Explore our high-quality pharmaceutical products, including branded medicines, oncology drugs, and essential medical devices."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Portfolio", link: "/portfolio" },
          { label: "Pharmaceuticals Product Portfolio", link: "/pharmaceuticals" },
        ]}
        photo={"/headingback.jpg"}
      />
      <TableComponent data={novitrailData} />
    </>
  );
};

export default Page;