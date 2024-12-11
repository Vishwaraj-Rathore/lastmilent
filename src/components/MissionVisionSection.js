"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
import { cormorantGaramond } from "../app/fonts/fonts";

const MissionVisionValues = () => {
  const [activeSection, setActiveSection] = useState("mission");

  const sectionContent = {
    mission: {
      image: "/Frame-1.png",
      text: '"Our mission is to invest in sustainable products and technologies that have a positive impact on the environment and society. We are committed to identifying and supporting companies that share our values and are committed to reducing their environmental impact. Through our investments, we aim to promote sustainable living and play a part in reducing our collective carbon footprint. We are committed to creating products that are made with responsibly sourced materials and are built to last. Through our efforts, we want to move towards a future that preserves our natural resources for generations to come."',
    },
    vision: {
      image: "/Frame-2.png",
      text: '"Our vision is to invest in businesses that allow individuals to enjoy modern conveniences without harming the planet. We envision a future where sustainable living is the norm, and people can live in harmony with the natural world. Through innovation, education, and collaboration, we strive to create a brighter, greener future for all."',
    },
    values: {
      image: "/Frame-3.png",
      text: "At our company, we are guided by a set of core values that drive our investment decisions and define who we are. We believe that these values are essential to achieving our mission and contributing to a sustainable future. Here are the key values that define us: <br /><br />1. Sustainability: We are committed to investing in companies that prioritize sustainability and are actively working to reduce their environmental impact. <br />2. Responsibility: We take responsibility for our investments and the impact they have on the environment and society. We strive to invest in companies that are committed to responsible practices and transparency. <br />3. Innovation: We embrace innovation and creativity, seeking out new and innovative sustainable products and technologies that have the potential to make a positive impact on the world. <br />4. Long-term thinking: We take a long-term view in our investment decisions, looking beyond short-term gains to identify companies that have a sustainable business model and are well-positioned for the future.",
    },
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="w-full h-[calc(100vh-80px)] flex flex-col lg:flex-row">
      {/* Buttons Container - Mobile: Top, Tablet/Desktop: Left */}
      <div className="w-full h-[20%] lg:h-[100%] lg:w-[30%] flex flex-row lg:flex-col justify-center items-end lg:items-center lg:pr-0 lg:pl-8 gap-4 xs:gap-4">
        {Object.keys(sectionContent).map((section) => (
          <button
            key={section}
            onClick={() => handleSectionChange(section)}
            className={`
              flex items-center gap-2 xs:gap-3
              px-2 xs:px-4 sm:px-6 py-1 xs:py-2 sm:py-3
              transition-all duration-300 
              text-xs xs:text-sm sm:text-base
              ${activeSection === section ? "text-navy" : "text-gray-500"}
            `}
          >
            <FaLeaf className="text-base xs:text-lg sm:text-2xl" />
            <span
              className={`${cormorantGaramond.className} capitalize text-base xs:text-lg sm:text-xl`}
            >
              {section}
            </span>
          </button>
        ))}
      </div>

      {/* Content Container - Mobile/Tablet: Bottom, Desktop: Right */}
      <div className="relative w-full lg:w-3/4 h-full flex-1">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-[90%] h-[90%]">
            <Image
              src={sectionContent[activeSection].image}
              alt={`${activeSection} background`}
              fill
              priority
              className="object-contain object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
              <p
                className={`
                  ${cormorantGaramond.className}
                  text-[6px] xs:text-[7px] sm:text-[10px] md:text-[13px] lg:text-[13px] xl:text-[15px]
                  text-left leading-tight
                  max-w-[85%] ${
                    activeSection === "values" ? "max-h-[60%]" : "max-h-[80%]"
                  } overflow-y-auto
                `}
                dangerouslySetInnerHTML={{
                  __html: sectionContent[activeSection].text,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
