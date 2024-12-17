// components/FullPageCenteredText.js
"use client";
import { cormorantGaramond } from "../app/fonts/fonts";

export default function FullPageCenteredText({ title, content }) {
  return (
    <div
      className={`w-full h-[calc(100vh-80px)] flex items-center justify-center p-4 md:p-8 ${cormorantGaramond.className}`}
    >
      <div className="text-center max-w-3xl">
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
        )}
        {content && (
          <p className="text-base md:text-lg lg:text-xl">{content}</p>
        )}
      </div>
    </div>
  );
}
