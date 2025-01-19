import React from 'react';
import SocialLinks from './SocialLinks';

const CompanyInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Novitrail Pharmaceuticals</h3>
      <div className="space-y-4">
        <p className="text-gray-300">
          A global pharmaceutical marketer, manufacturer, wholesaler, and exporter with over 10 years of expertise in pharmaceutical trade. Established in 2017, we specialize in providing comprehensive sourcing solutions for specialty medicines, generic drugs, and surgical disposables.
        </p>
        <div className="border-l-2 border-novitrail-orange pl-4">
          <p className="text-gray-300 italic">
            &#34;Our mission is to become a holistic pharmaceutical marketing company worldwide and achieve sustained growth through consistent delivery of innovative, superior quality products to meet customer&#39;s expectations.&#34;
          </p>
        </div>
        <div className="pt-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;