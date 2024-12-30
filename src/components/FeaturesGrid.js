"use client";
import { cormorantGaramond } from "../app/fonts/fonts";
import Image from "next/image";

export default function FeaturesGrid({ title, subtitle, features = [] }) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section
      className={`${cormorantGaramond.className} min-h-[calc(100vh-80px)] flex flex-col justify-center items-center px-4 py-8`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg max-w-3xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative w-full aspect-square max-h-[300px]"
          >
            <Image
              src={feature}
              alt={`Feature ${index + 1}`}
              fill
              priority={index < 3}
              quality={100}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
