"use client";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import { cormorantGaramond } from "../app/fonts/fonts";

export default function ProductCarousel() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const images = [
    { src: "/color 1.png", alt: "Image 1" },
    { src: "/color 2.png", alt: "Image 2" },
    { src: "/color 3.png", alt: "Image 3" },
    { src: "/color 4.png", alt: "Image 4" },
  ];

  const handleDesktopClick = (index) => {
    setExpandedIndex(index);
  };

  const handleNext = () => {
    setCurrentMobileIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentMobileIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <section className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2
          className={`text-center text-2xl lg:text-4xl font-bold mb-4 ${cormorantGaramond.className}`}
        >
          Products That Make A Difference
        </h2>
        <p
          className={`text-center text-base lg:text-2xl max-w-2xl mx-auto mb-6 ${cormorantGaramond.className}`}
        >
          LMEL is engaged in promoting affordable, sturdy, and environmentally
          friendly products, seeing the impact of our investments fills us with
          zest and even more conviction to continue on the same path.
        </p>

        {/* Desktop Carousel */}
        <div className="hidden lg:flex justify-center gap-4 lg:mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 ${
                expandedIndex === index ? "w-96" : "w-24"
              } h-60 cursor-pointer overflow-hidden rounded-lg`}
              onClick={() => handleDesktopClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative w-full flex flex-col justify-center items-center">
          <div
            {...handlers}
            className="relative w-3/4 h-96 flex justify-center items-center"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={images[currentMobileIndex].src}
                alt={images[currentMobileIndex].alt}
                fill
                style={{ objectFit: "contain" }}
                className="w-full h-full"
              />
            </div>
            {/* Arrow Buttons */}
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white z-10"
              onClick={handlePrev}
            >
              <BsChevronLeft size={24} className="text-gray-600" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white z-10"
              onClick={handleNext}
            >
              <BsChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
