"use client";
import { cormorantGaramond } from "../app/fonts/fonts";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      icon: FaFacebookSquare,
      href: "https://www.facebook.com/people/Last-Mile-Enterprises/61556357176346/",
      color: "hover:text-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/lastmilent/",
      color: "hover:text-pink-600",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/lastmilent",
      color: "hover:text-blue-400",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@lastmilent",
      color: "hover:text-red-600",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/lastmilent/about/",
      color: "hover:text-blue-800",
    },
  ];

  return (
    <footer className={`bg-black ${cormorantGaramond.className} mt-auto`}>
      <div className="max-w-10xl mx-auto py-8 px-7">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left order-1 md:order-none">
            <p className="text-white text-xl font-bold flex items-center justify-center md:justify-start">
              Last Mile Enterprises Limited
              <FaRegCopyright size={16} className="mx-2" />
              {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex space-x-6 order-2 md:order-none">
            {socialLinks.map(({ icon: Icon, href, color }) => (
              <a
                key={Icon.name}
                href={href}
                className={`text-gray-500 ${color} transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} />
                <span className="sr-only">{Icon.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
