"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cormorantGaramond } from "../app/fonts/fonts";

const ClientSpotlights = () => {
  const [band1State, setBand1State] = useState("running");
  const [band2State, setBand2State] = useState("running");

  const row1Clients = [
    { id: 1, src: "/band1.png", alt: "Sun Pharma", width: 250, height: 125 },
    {
      id: 2,
      src: "/band2.png",
      alt: "World Trade Center Mumbai",
      width: 250,
      height: 125,
    },
    { id: 3, src: "/band3.png", alt: "RNG Exports", width: 250, height: 125 },
  ];

  const row2Clients = [
    { id: 4, src: "/band4.png", alt: "Sudarshan", width: 250, height: 125 },
    { id: 5, src: "/band5.png", alt: "Evonik", width: 250, height: 125 },
    { id: 6, src: "/band6.png", alt: "Sudarshan", width: 250, height: 125 },
  ];

  return (
    <div
      className="relative w-full bg-white flex flex-col justify-center items-center"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h2
        className={`text-center text-xl font-semibold mb-6 ${cormorantGaramond.className}`}
      >
        Client Spotlights
      </h2>
      {/* Band 1 */}
      <div
        className="flex items-center overflow-hidden w-full"
        onMouseEnter={() => setBand1State("paused")}
        onMouseLeave={() => setBand1State("running")}
      >
        <div
          className="flex animate-scrollLeft whitespace-nowrap"
          style={{
            animationPlayState: band1State,
          }}
        >
          {[...row1Clients, ...row1Clients].map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
              className="mx-2 object-contain"
            />
          ))}
        </div>
      </div>
      {/* Band 2 */}
      <div
        className="flex items-center overflow-hidden w-full mt-4"
        onMouseEnter={() => setBand2State("paused")}
        onMouseLeave={() => setBand2State("running")}
      >
        <div
          className="flex animate-scrollRight whitespace-nowrap"
          style={{
            animationPlayState: band2State,
          }}
        >
          {[...row2Clients, ...row2Clients].map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
              className="mx-2 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSpotlights;
