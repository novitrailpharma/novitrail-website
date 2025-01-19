import React from 'react';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
      <div className="space-y-6">
        {/* Head Office */}
        <div className="space-y-2">
          <div className="flex items-start space-x-3">
            <MapPin className="text-novitrail-orange mt-1 flex-shrink-0" size={20}/>
            <div>
              <h5 className="font-semibold">Head Office:</h5>
              <p className="text-gray-300">SN.123, Vardhman Crown Mall, Plot No.2, Sector-19, Dwarka, New Delhi
                -110075</p>
            </div>
          </div>
        </div>

        {/* Corporate Office */}
        <div className="space-y-2">
          <div className="flex items-start space-x-3">
            <MapPin className="text-novitrail-orange mt-1 flex-shrink-0" size={20}/>
            <div>
              <h5 className="font-semibold">Corporate Office:</h5>
              <p className="text-gray-300">Shop No.11, Radha Krishan Complex, Behind Ganga Plywood, Heera Ganj Katni
                483501</p>
            </div>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="space-y-2">
          <div className="flex items-start space-x-3">
            <Phone className="text-novitrail-orange mt-1 flex-shrink-0" size={20}/>
            <div>
              <p className="text-gray-300">Tel: +91-7622-490181, 494181</p>
              <p className="text-gray-300">Mobile: +91-9990115992</p>
            </div>
          </div>
        </div>

        {/* Email Addresses */}
        <div className="space-y-2">
          <div className="flex items-start space-x-3">
            <Mail className="text-novitrail-orange mt-1 flex-shrink-0" size={20}/>
            <div className="space-y-1">
              <p className="text-gray-300">
                <span className="font-semibold">General Enquiries:</span><br/>
                <a href="mailto:novitrailpharma1@gmail.com"
                   className="hover:text-novitrail-orange">novitrailpharma1@gmail.com</a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Sales Enquiries:</span><br/>
                <a href="mailto:novitrailpharma@gmail.com"
                   className="hover:text-novitrail-orange">novitrailpharma@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-center space-x-3">
          <Globe className="text-novitrail-orange flex-shrink-0" size={20}/>
          <a
            href="http://www.novitrailpharmaceuticals.com"
            className="text-gray-300 hover:text-novitrail-orange"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.novitrailpharmaceuticals.com
          </a>
        </div>

        <div className="flex items-start space-x-3">
          <Clock className="text-novitrail-orange mt-1" size={20}/>
          <p className="text-gray-300">
            Mon - Sat: 9:00 AM - 8:00 PM IST
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
