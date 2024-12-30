import React from "react";
import { cormorantGaramond } from "../app/fonts/fonts";

const ConsumerElectronicsSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-white px-4 md:px-8 lg:px-16">
      <div className={`max-w-4xl mx-auto ${cormorantGaramond.className}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-800">
          Consumer Electronics
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-gray-700">
          <p>
            Consumer electronics serve as the technologically woven threads that
            bind our interconnected world. They not only facilitate
            communication and productivity but also provide avenues for
            immersive entertainment and holistic well-being.
          </p>

          <p>
            Through their inclusive design and commitment to safety, we ensure
            that no one is left behind in the journey towards progress.
          </p>

          <p>
            In every sleek device and ingenious feature lies the promise of a
            brighter tomorrow—a tomorrow where the fusion of technology and
            human values propels us towards boundless possibilities and
            collective advancement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsumerElectronicsSection;
