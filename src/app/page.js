import HeroSection from "../components/HeroSection";
import mainPageBg from "../../public/mainpagebg.jpg";
import ProductCarousel from "../components/ProductCarousel";

export default function Home() {
  return (
    <>
      <HeroSection
        backgroundImage={mainPageBg}
        title="Last Mile Enterprises Ltd."
        lineOne="Ingenious intent,"
        lineTwo="impactful results."
      />
      <ProductCarousel />
    </>
  );
}
