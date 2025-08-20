import React from 'react';
import PageHeading from '@/components/PageHeading';
import FounderProfile from '@/components/FounderProfile';
import ModernWhoWeAre from '@/components/About/ModernWhoWeAre';
import CompanyTimeline from '@/components/About/CompanyTimeline';
import CoreValues from '@/components/About/CoreValues';
import GlobalReach from '@/components/About/GlobalReach';
import AboutCTA from '@/components/About/AboutCTA';
import pageHeadingBackground from "@/assets/headingback.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Keep your existing PageHeading component */}
      <PageHeading
        title="About Us"
        description="Learn more about our work, mission, vision, values and the team that drives our success."
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "About Us", link: "/about-novitrail" },
        ]}
        photo={pageHeadingBackground.src}
      />

      {/* New redesigned sections with modern aesthetics */}
      <FounderProfile />
      <ModernWhoWeAre />
      <CompanyTimeline />
      <CoreValues />
      <GlobalReach />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;