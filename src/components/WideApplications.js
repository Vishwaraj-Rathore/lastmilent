"use client";
import { cormorantGaramond } from "../app/fonts/fonts";

export default function WideApplications() {
  return (
    <section
      className={`${cormorantGaramond.className} min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-4 max-w-7xl mx-auto gap-6 md:gap-8 py-16`}
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center">
          The Wide Applications Of SunBless Paints
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl px-2 sm:px-4">
          The beauty of our product goes beyond what meets the eyes, take a look
          at the various applications of SunBless paints.
        </p>
      </div>
      <div className="w-full h-[40vh] sm:h-[45vh] md:h-[50vh] flex items-center justify-center px-2 sm:px-4 md:px-6">
        <img
          src="/sunblessimage.png"
          alt="SunBless Applications"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
