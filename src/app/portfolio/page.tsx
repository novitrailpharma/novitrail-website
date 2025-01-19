import React from 'react';
import PageHeading from "@/components/PageHeading";
import pageHeadingBackground from "@/assets/headingback.jpg"
import FeaturesSection from "@/components/FeaturesSection";
import {navCardsData} from "@/assets/constants/cardsData";

const Page = () => {
  return (
    <>
      <PageHeading
        title={"All Products Portfolio"}
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Portfolio", link: "/portfolio" },
        ]}
        photo={pageHeadingBackground.src}
      />
      <FeaturesSection sectionData={navCardsData} bush={true} />
    </>
  );
};

export default Page;