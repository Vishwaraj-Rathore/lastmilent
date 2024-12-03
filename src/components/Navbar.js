"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/logo.png";

export default function Navbar() {
  // We use this state to control the visibility of our mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // We store navigation items in an array to make the code more maintainable
  // You can easily add or modify navigation items by updating this array
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "SunBless", path: "/sunbless" },
    { name: "Fair Lane", path: "/fairlane" },
    { name: "Just Corseca", path: "/justcorseca" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    // Main navigation container - removed shadow-lg class for a flat design
    <nav className="bg-white">
      {/* This wrapper helps center the content and set a max-width */}
      <div className="max-w-10xl mx-auto">
        {/* This flex container organizes the logo and navigation items */}
        <div className="flex justify-between items-center h-20">
          {/* Logo container - positioned at the far left with no extra padding */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center -ml-0 pl-7">
              <Image
                src={logoImg}
                alt="Company Logo"
                width={120}
                height={40}
                className="object-contain"
                priority={true} // This prevents the logo from blinking on page load
              />
            </Link>
          </div>

          {/* Desktop navigation menu - hidden on mobile screens */}
          <div className="hidden md:flex items-center justify-end flex-1 mr-4 pr-7">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-black hover:text-gray-400 px-5 py-2 rounded-md text-lg font-medium transition-colors last:pr-0"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button - only appears on mobile screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-400  pr-7"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {/* Animated hamburger menu icon */}
              <div className="w-6 h-6 flex flex-col justify-between">
                <span
                  className={`block w-full h-0.5 bg-current transform transition-transform ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-current transition-opacity ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-current transform transition-transform ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu - slides in when hamburger is clicked */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        aria-label="Mobile navigation menu"
      >
        <div className="pl-6 px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="block text-black hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)} // Closes the mobile menu when a link is clicked
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
