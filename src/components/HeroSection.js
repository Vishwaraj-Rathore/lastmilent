"use client";
import Image from "next/image";
import { cormorantGaramond } from "../app/fonts/fonts";
import { useState, useEffect } from "react";

export default function HeroSection(props) {
  const {
    backgroundImage,
    title,
    lineOne,
    lineTwo,
    altText = "Hero Background Image",
  } = props;

  const [showLineOne, setShowLineOne] = useState(false);
  const [showLineTwo, setShowLineTwo] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLineOne(true), 300);
    const timer2 = setTimeout(() => setShowLineTwo(true), 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-80px)]">
      <Image
        src={backgroundImage}
        alt={altText}
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
        <h1
          className={`${cormorantGaramond.className} text-1xl md:text-2xl font-bold mb-2 opacity-100`}
        >
          {title}
        </h1>
        <p
          className={`${
            cormorantGaramond.className
          } text-4xl md:text-8xl mb-1 transition-opacity duration-1000 
            ${showLineOne ? "opacity-100" : "opacity-0"}`}
        >
          {lineOne}
        </p>
        <p
          className={`${
            cormorantGaramond.className
          } text-4xl md:text-8xl transition-opacity duration-1000
            ${showLineTwo ? "opacity-100" : "opacity-0"}`}
        >
          {lineTwo}
        </p>
      </div>
    </div>
  );
}
