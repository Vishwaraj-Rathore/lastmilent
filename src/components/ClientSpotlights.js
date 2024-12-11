"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cormorantGaramond } from "../app/fonts/fonts";

const ClientSpotlights = () => {
  const [isPaused1, setIsPaused1] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);

  const row1Clients = [
    { id: 1, src: "/band1.png", alt: "Sun Pharma", width: 200, height: 50 },
    {
      id: 2,
      src: "/band2.png",
      alt: "World Trade Center Mumbai",
      width: 200,
      height: 50,
    },
    { id: 3, src: "/band3.png", alt: "RNG Exports", width: 200, height: 50 },
  ];

  const row2Clients = [
    { id: 4, src: "/band4.png", alt: "Sudarshan", width: 200, height: 50 },
    { id: 5, src: "/band5.png", alt: "Evonik", width: 200, height: 50 },
    { id: 6, src: "/band6.png", alt: "Sudarshan", width: 200, height: 50 },
  ];

  return (
    <div
      className="relative w-full bg-white flex flex-col justify-center items-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h2
        className={`text-center text-4xl font-semibold mb-10 ${cormorantGaramond.className}`}
      >
        Client Spotlights
      </h2>

      {/* First Row - Right to Left */}
      <div className="w-full overflow-hidden">
        <div
          className="flex items-center"
          onMouseEnter={() => setIsPaused1(true)}
          onMouseLeave={() => setIsPaused1(false)}
        >
          <div
            className={`flex gap-8 animate-scroll-left ${
              isPaused1 ? "pause-animation" : ""
            }`}
          >
            {[
              ...row1Clients,
              ...row1Clients,
              ...row1Clients,
              ...row1Clients,
            ].map((client, index) => (
              <div key={`${client.id}-${index}`} className="flex-shrink-0">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.height}
                  className="object-contain w-[150px] md:w-[200px]"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row - Left to Right */}
      <div className="w-full overflow-hidden mt-8">
        <div
          className="flex items-center"
          onMouseEnter={() => setIsPaused2(true)}
          onMouseLeave={() => setIsPaused2(false)}
        >
          <div
            className={`flex gap-8 animate-scroll-right ${
              isPaused2 ? "pause-animation" : ""
            }`}
          >
            {[
              ...row2Clients,
              ...row2Clients,
              ...row2Clients,
              ...row2Clients,
            ].map((client, index) => (
              <div key={`${client.id}-${index}`} className="flex-shrink-0">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.height}
                  className="object-contain w-[150px] md:w-[200px]"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSpotlights;
