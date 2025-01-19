import React from 'react';
import Link from 'next/link';

const QuickLinks: React.FC = () => {
  const links = [
    { text: 'About Us', href: '/about' },
    { text: 'Novitrail Products', href: '/products/novitrail' },
    { text: 'Other Products', href: '/products/others' },
    { text: 'Careers', href: '/careers' },
    { text: 'News & Updates', href: '/news' },
  ];

  return (
    <div>
      <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href} className="hover:text-novitrail-orange transition-colors">{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
