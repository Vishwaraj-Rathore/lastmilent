import { cormorantGaramond } from "../app/fonts/fonts";

const ProductRange = () => {
  const products = [
    "Smart Watches",
    "Speakers",
    "Headphones & Earphones",
    "Mobile Accessories",
    "Smart Eyewear",
  ];

  return (
    <div
      className={`min-h-[calc(100vh-80px)] flex flex-col items-center justify-center ${cormorantGaramond.className}`}
    >
      <h1 className="text-4xl md:text-6xl mb-10">Product Range</h1>
      <div className="flex flex-col items-center gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black"></div>
            <span className="text-xl md:text-3xl">{product}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRange;
