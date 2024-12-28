"use client";
import Image from "next/image";
import { cormorantGaramond } from "../app/fonts/fonts";

export default function FullPageImageWithText({
  backgroundImage,
  altText = "Background Image",
  title,
  subtitle,
}) {
  return (
    <section className="relative min-h-[calc(100vh-80px)]">
      <Image
        src={backgroundImage}
        alt={altText}
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 py-8 ${cormorantGaramond.className}`}
      >
        {title && (
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        )}
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
