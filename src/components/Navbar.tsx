"use client";

import React, {useState, useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu, X, Plus, Minus} from "lucide-react";

const navItems = [
  {label: "Home", href: "/"},
  {label: "About Us", href: "/about-novitrail"},
  {
    label: "Portfolio",
    href: "/portfolio",
    submenu: [
      {label: "Novitrail Products", href: "/portfolio/novitrail-products"},
      {label: "Pharmaceutical", href: "/portfolio/pharmaceuticals"},
      {label: "Surgical", href: "/portfolio/surgicals"},
    ],
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null); // Close any open submenus when toggling the menu
  };

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu((prev) => (prev === label ? null : label));
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    setActiveSubmenu(label);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // Adjust the delay as needed
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white/70 backdrop-blur-xl shadow-sm border border-gray-200">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={210} height={30}/>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`rounded-full p-2 hover:bg-neutral-700/20 text-novitrail-blue transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group text-xl"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href || "#"}>
                <span className="text-gray-700 hover:text-novitrail-orange">
                  {item.label}
                </span>
              </Link>
              {item.submenu && activeSubmenu === item.label && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 animate-fade">
                  {item.submenu.map((submenu) => (
                    <Link key={submenu.label} href={submenu.href}>
                      <span className="block px-4 py-2 text-gray-700 hover:bg-novitrail-orange hover:text-white">
                        {submenu.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact-us"
            className="transition ease-in-out delay-150 bg-novitrail-blue hover:-translate-y-1 hover:scale-110 hover:bg-novitrail-orange duration-300 px-4 py-2 rounded-lg text-white"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-24 min-h-240 left-0 w-full bg-white shadow-lg animate-slide-left pt-2 mt-1">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  {item.submenu ? (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="flex flex-row px-4 py-2 w-full text-xl text-left text-gray-700 hover:bg-novitrail-orange hover:text-white justify-between"
                    >
                      <span>{item.label}</span>
                      <span>
                {activeSubmenu === item.label ? <Minus size={18}/> : <Plus size={18}/>}
              </span>
                    </button>
                  ) : (
                    <Link href={item.href}>
              <span
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 w-full text-xl text-left text-gray-700 hover:bg-novitrail-orange hover:text-white"
              >
                {item.label}
              </span>
                    </Link>
                  )}
                  {item.submenu && activeSubmenu === item.label && (
                    <ul className="absolute flex flex-col bg-gray-100 right-0 left-0 animate-slide-left">
                      {item.submenu.map((submenu) => (
                        <li key={submenu.label}>
                          <Link href={submenu.href}>
                    <span
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-12 py-2 text-gray-700 hover:bg-novitrail-blue hover:text-white text-xl"
                    >
                      {submenu.label}
                    </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-60 mb-20 px-4 py-4 flex justify-center">
              <Link
                href="/contact-us"
                className="transition ease-in-out delay-150 bg-novitrail-blue hover:-translate-y-1 hover:scale-110 hover:bg-novitrail-orange duration-300 px-8 py-4 rounded-lg text-white text-2xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;