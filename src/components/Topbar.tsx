import { Phone, Mail, MapPin } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-novitrail-blue text-white py-2 backdrop-blur-lg">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="tel:+917622490181"
              className="flex items-center hover:text-novitrail-orange transition-colors"
            >
              <Phone size={16} className="mr-2 text-novitrail-orange"/>
              <span>+91-7622-490181</span>
            </a>
            <a
              href="tel:+917622494181"
              className="flex items-center hover:text-novitrail-orange transition-colors"
            >
              <Phone size={16} className="mr-2 text-novitrail-orange"/>
              <span>+91-7622-494181</span>
            </a>
            <a
              href="mailto:info@novitrail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-novitrail-orange transition-colors"
            >
              <Mail size={16} className="mr-2 text-novitrail-orange"/>
              <span>info@novitrail.com</span>
            </a>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-novitrail-orange"/>
              <span>SN. 123, Vardhman Crown Mall, Dwarka, New Delhi 110075</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;