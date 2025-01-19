import PageHeading from '@/components/PageHeading';
import React from 'react';
import TableComponent from "@/components/Table/TableComponent";
import novitrailData from "@/assets/novitrail.json";


const Page = () => {
  return (
    <>
      <PageHeading
        title="Surgical Products Portfolio"
        description="Browse our range of surgical disposables, medical devices, and healthcare supplies for hospitals and clinics."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Portfolio", link: "/portfolio" },
          { label: "Surgicals Product Portfolio", link: "/surgicals" },
        ]}
        photo={"/headingback.jpg"}
      />
      <TableComponent data={novitrailData} />
    </>
  );
};

export default Page;