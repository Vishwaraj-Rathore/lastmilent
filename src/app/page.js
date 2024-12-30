import Image from "next/image";
import { cormorantGaramond } from "../app/fonts/fonts";
import mainPageBg from "../../public/mainpagebg.jpg";
import aboutImage from "../../public/legacy.png";
import HeroSection from "../components/HeroSection";
import MissionVisionSection from "../components/MissionVisionSection";
import ProductCarousel from "../components/ProductCarousel";
import ClientSpotlights from "../components/ClientSpotlights";

export default function Home() {
  return (
    <>
      <HeroSection
        backgroundImage={mainPageBg}
        title="Last Mile Enterprises Ltd."
        lineOne="Ingenious intent,"
        lineTwo="impactful results."
      />

      <section className="w-full h-[calc(100vh-80px)] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center items-center p-8 lg:p-16 bg-white order-1 lg:order-2">
          <div className="max-w-xl text-center lg:text-left">
            <h2
              className={`
              ${cormorantGaramond.className} 
              text-xl lg:text-4xl 
              font-bold 
              m-6 
              lg:mb-6
              text-gray-800
            `}
            >
              About Last Mile Enterprises
            </h2>

            <p
              className={`
              ${cormorantGaramond.className}
              text-lg text-gray-600 mb-4
            `}
            >
              Last Mile Enterprises is a dynamic company committed to delivering
              innovative solutions that bridge gaps and create meaningful
              impact. We specialize in transformative strategies that turn
              challenges into opportunities.
            </p>

            <p
              className={`
              ${cormorantGaramond.className}
              text-lg text-gray-600
            `}
            >
              Our team combines expertise, creativity, and passion to drive
              sustainable growth and provide cutting-edge solutions across
              various industries.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative flex items-center justify-center order-2 lg:order-1">
          <div className="w-11/12 lg:w-1/2 h-3/4 relative">
            <Image
              src={aboutImage}
              alt="Last Mile Enterprises Team"
              fill
              priority
              placeholder="blur"
              className="object-cover object-center rounded-lg"
              quality={90}
            />
          </div>
        </div>
      </section>

      <MissionVisionSection />

      <ProductCarousel />
    </>
  );
}
