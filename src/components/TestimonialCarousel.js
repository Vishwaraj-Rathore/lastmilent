"use client";
import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { cormorantGaramond } from "../app/fonts/fonts";

const testimonials = [
  {
    name: "Dr. Ali Irani",
    organization: "Nanavati Super Speciality Hospital",
    text: "I heard about SunBless being a thermal barrier, keeping buildings cool and instantly decided to reap the benefits of the paint. Reduction in AC usage from 19-20 centigrade to 24-26 centigrade Our electricity bills reduced by 45-50% Increased comfort in our spaces.",
  },
  {
    name: "Dr. Sarah Chen",
    organization: "Pacific Medical Center",
    text: "The energy efficiency improvements have been remarkable. Our facility has seen a 40% reduction in cooling costs since implementation, while maintaining optimal temperatures for our patients and staff.",
  },
  {
    name: "James Wilson",
    organization: "Metro General Hospital",
    text: "The installation process was seamless and the results exceeded our expectations. We've noticed a significant improvement in temperature regulation across all hospital wings.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <div
      className={`min-h-[calc(100vh-80px)] flex flex-col justify-center ${cormorantGaramond.className}`}
    >
      <div className="max-w-4xl mx-auto p-8 w-full">
        <h1 className="text-3xl text-center mb-12">
          The Voices Of Our Clients
        </h1>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12"
          >
            <BsChevronLeft
              size={24}
              className="text-gray-400 hover:text-gray-600"
            />
          </button>

          <div className="bg-blue-50 rounded-lg p-12 min-h-[400px] transition-opacity duration-500 flex flex-col justify-center">
            <div className="text-center">
              <h2 className="text-lg font-medium mb-1">
                {testimonials[currentIndex].name}
              </h2>
              <p className="text-gray-600 text-sm mb-8">
                {testimonials[currentIndex].organization}
              </p>
              <p className="text-gray-800 leading-relaxed text-lg">
                {testimonials[currentIndex].text}
              </p>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12"
          >
            <BsChevronRight
              size={24}
              className="text-gray-400 hover:text-gray-600"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
