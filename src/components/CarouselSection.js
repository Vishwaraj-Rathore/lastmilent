"use client";

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cormorantGaramond } from "../app/fonts/fonts";

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/corsec1.jpeg",
    "/corsec2.jpeg",
    "/corsec3.jpeg",
    "/corsec4.jpeg",
    "/corsec5.jpeg",
    "/corsec6.jpeg",
    "/corsec7.jpeg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const lastVisibleIndex = images.length - 3;
      return prevIndex >= lastVisibleIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-[calc(100vh-80px)]">
      <h1
        className={`${cormorantGaramond.className} text-5xl text-center mb-6`}
      >
        We Go Beyond
      </h1>

      <div
        className={`${cormorantGaramond.className} text-center mb-12 max-w-3xl mx-auto text-gray-600 space-y-6`}
      >
        <p className="text-xl">
          Each product is crafted to elevate your everyday interactions while
          ensuring your digital companion remains stylish and functional.
        </p>
        <p className="text-xl">
          With lightning-speed delivery, top-notch support, and secure encrypted
          payment options, Corseca strives to ensure that your journey with the
          brand is nothing short of exceptional.
        </p>
        <p className="text-xl">
          {
            "Join us on this exhilarating journey through the realms of technology and innovation. Whether you're a seasoned tech enthusiast or a curious newcomer, there's a place for you in the vibrant world of Corseca."
          }
        </p>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10"
        >
          <IoIosArrowBack size={24} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-[33.333%] px-2">
                <img src={image} className="w-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10"
        >
          <IoIosArrowForward size={24} />
        </button>

        <div className="flex justify-center gap-2 mt-4">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
