import React from "react";
import { cormorantGaramond } from "../app/fonts/fonts";

const AboutSection = () => {
  return (
    <div
      className={`w-full min-h-[calc(100vh-80px)] bg-white flex flex-col items-center justify-center px-4 ${cormorantGaramond.className}`}
    >
      <div className="text-center max-w-3xl mb-20">
        <h1 className="text-3xl md:text-4xl text-[#1a2844]">
          "Every journey begins with a single step. Let's take that step towards
          sustainability together."
        </h1>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#1a2844] p-8 text-white">
          <h2 className="text-2xl mb-6">About us</h2>
          <p className="text-lg">
            Last Mile Enterprises Limited breathed its first almost 3 decades
            ago. The guiding force for us has been to operate with the word
            legacy, leaving a trail of legacy and fostering a future where clean
            & green is a way of life. LMEL was a result of a belief that
            sustainability and profitability can go hand-in-hand and with this
            in mind we are able to create long-term value for everyone
            associated with us.
          </p>
        </div>

        <div className="bg-[#1a2844] p-8 text-white">
          <p className="text-sm mb-4">ADDRESS</p>
          <p className="text-xl mb-6">
            4th Floor, Vaghela Avenue,
            <br />
            Navrangpura, Ahmedabad - 380009
          </p>

          <p className="text-sm mb-2">CONTACT NUMBER</p>
          <p className="text-xl mb-6">079- 26402089</p>

          <p className="text-sm mb-2">E-MAIL</p>
          <p className="text-xl">info@lastmilent.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
