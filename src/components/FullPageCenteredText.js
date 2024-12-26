"use client";
import { cormorantGaramond } from "../app/fonts/fonts";

export default function FullPageCenteredText({ title, content }) {
  return (
    <div
      className={`w-full h-[calc(100vh-80px)] flex items-center justify-center px-6 sm:px-8 md:px-12 py-4 md:py-8 ${cormorantGaramond.className}`}
    >
      <div className="text-center max-w-3xl">
        {title && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
        )}
        {content && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl line-clamp-none">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}
