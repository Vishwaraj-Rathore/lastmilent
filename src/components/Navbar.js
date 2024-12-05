"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/logo.png";
import { cormorantGaramond } from "../app/fonts/fonts";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "SunBless", path: "/sunbless" },
    { name: "Fair Lane", path: "/fairlane" },
    { name: "Just Corseca", path: "/justcorseca" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <nav
      className={`bg-white ${cormorantGaramond.className} fixed top-0 w-full z-50`}
    >
      <div className="max-w-10xl mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center -ml-0 pl-7">
              <Image
                src={logoImg}
                alt="Company Logo"
                width={120}
                height={40}
                className="object-contain"
                priority={true}
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-end flex-1 mr-4 pr-7">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-5 py-2 rounded-md text-xl font-medium transition-colors last:pr-0
                 ${
                   pathname === item.path
                     ? "text-blue-600 font-bold"
                     : "text-black hover:text-gray-400"
                 }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-400  pr-7"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
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

      <div
        className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        aria-label="Mobile navigation menu"
      >
        <div className="pl-6 px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium
               ${
                 pathname === item.path
                   ? "text-blue-600 font-bold bg-gray-50"
                   : "text-black hover:text-gray-400"
               }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
