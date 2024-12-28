"use client";
import { cormorantGaramond } from "../app/fonts/fonts";

export default function WeGoBeyond() {
  const leftFeatures = [
    "Protection from water seepage and leakage",
    "Protects from salt water corrosion near coastal areas",
    "Keeps molds and fungi away",
  ];

  const rightFeatures = [
    "Thermos insulation effect, cool in summers but warm in winters",
    "Relief from wall and ceiling mold",
    "Promotes energy savings",
  ];

  return (
    <section
      className={`${cormorantGaramond.className} min-h-[calc(100vh-80px)] flex flex-col justify-center max-w-6xl mx-auto px-4 py-16`}
    >
      <h1 className="text-4xl md:text-5xl mb-4 text-center">We Go Beyond</h1>
      <p className="text-lg md:text-xl mb-12 text-center">
        {"Get your investment's worth, read on to know all that you can gain."}
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/3 space-y-6 order-1 md:order-none">
          {leftFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 text-left">
              <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <p className="text-base md:text-lg">{feature}</p>
            </div>
          ))}
        </div>

        <div className="md:w-1/3 order-2 md:order-none flex justify-center">
          <img
            src="/SunBless-Can-1.png"
            alt="SunBless All-Weather Protection Coating"
            className="w-48 sm:w-56 md:w-64 h-auto"
          />
        </div>

        <div className="md:w-1/3 space-y-6 order-3">
          {rightFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 text-left">
              <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <p className="text-base md:text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
