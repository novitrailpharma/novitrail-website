import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Facebook"
        className="hover:text-novitrail-orange transition-colors"
      >
        <Facebook size={20} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Twitter"
        className="hover:text-novitrail-orange transition-colors"
      >
        <Twitter size={20} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on LinkedIn"
        className="hover:text-novitrail-orange transition-colors"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
