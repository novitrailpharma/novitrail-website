import React from 'react';
import WhoWeAre from "@/components/WhoWeAre";
import {missionData, valuesData, whoWeAreData} from "@/assets/constants/cardsData";
import PageHeading from "@/components/PageHeading";
import pageHeadingBackground from "@/assets/headingback.jpg"
import FeaturesSection from "@/components/FeaturesSection";

const Page = () => {
  return (
    <>
      <PageHeading
        title="About Us"
        description="Learn more about our work, mission, vision, values and the team that drives our success."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "About Us", link: "/about-novitrail" },
        ]}
        photo={pageHeadingBackground.src}
      />
      <WhoWeAre data={whoWeAreData} />
      <FeaturesSection sectionData={missionData} bush={true}/>
      <FeaturesSection sectionData={valuesData} bush={false}/>
    </>
  );
};

export default Page;