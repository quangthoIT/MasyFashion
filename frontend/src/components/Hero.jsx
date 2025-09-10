import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-gray-700">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-12 h-[2px] bg-gray-700"></p>
            <p className="font-medium text-base md:text-xl uppercase">
              Our BestSellers
            </p>
          </div>

          <h1 className="text-4xl sm:py-3 lg:text-6xl leading-relaxed prata-regular">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-2 text-gray-700">
            <p className="font-medium text-base md:text-xl uppercase">
              Shop Now
            </p>
            <p className="w-8 md:w-12 h-[2px] bg-gray-700"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img src={assets.hero} alt="" className="w-full  sm:w-1/2" />
    </div>
  );
};

export default Hero;
