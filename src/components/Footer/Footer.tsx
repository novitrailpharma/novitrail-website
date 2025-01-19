import React from 'react';
import CompanyInfo from './CompanyInfo';
import QuickLinks from './QuickLinks';
import ContactInfo from './ContactInfo';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-novitrail-blue text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CompanyInfo />
          <QuickLinks />
          <ContactInfo />
          <Newsletter />
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-300">
          <p>© {currentYear} Novitrail Pharmaceuticals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
