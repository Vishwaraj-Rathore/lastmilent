"use client";
import { useState } from "react";
import { cormorantGaramond } from "../app/fonts/fonts";

export default function ChallengesSection({ title, subtitle, challenges }) {
  const [selectedChallenge, setSelectedChallenge] = useState(0);

  return (
    <section
      className={`${cormorantGaramond.className} h-[calc(100vh-80px)] flex flex-col justify-center px-4 md:px-6 max-w-6xl mx-auto text-center`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">{title}</h2>
      <p className="text-base md:text-lg mb-8 md:mb-10">{subtitle}</p>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-10">
        {challenges &&
          challenges.map((challenge, index) => (
            <button
              key={challenge.title}
              onClick={() => setSelectedChallenge(index)}
              className={`text-base md:text-lg transition-all px-2 py-1 ${
                selectedChallenge === index
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {challenge.title}
            </button>
          ))}
      </div>

      {challenges && challenges[selectedChallenge] && (
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-2">
          {challenges[selectedChallenge].description}
        </p>
      )}
    </section>
  );
}
