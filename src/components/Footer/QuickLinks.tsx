import React from 'react';
import Link from 'next/link';

const QuickLinks: React.FC = () => {
  const links = [
    {text: "Home", href: "/"},
    {text: "About Us", href: "/about-novitrail"},
    {text: "Portfolio", href: "/portfolio"},
    {text: "Novitrail Products", href: "/novitrail-products"},
    {text: "Pharmaceutical Products Portfolio", href: "/portfolio/pharmaceuticals"},
    {text: "Surgical Products Portfolio", href: "/portfolio/surgicals"},
    {text: "Contact Us Form", href: "/contact-us"},
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
