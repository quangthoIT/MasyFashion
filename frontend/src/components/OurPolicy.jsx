import { HandCoins, Headset, RefreshCcw, Truck } from "lucide-react";
const OurPolicy = () => {
  return (
    <div className="grid grid-cols-2 gap-4 gap-y-8 sm:flex justify-around sm:gap-2 text-center py-10 text-sm sm:text-base text-gray-700">
      <div>
        <Truck className="w-12 h-12 mx-auto mb-5" />
        <p className="font-semibold">Free Shipping</p>
        <p className="text-gray-500">Free shipping on orders over $100.</p>
      </div>

      <div>
        <RefreshCcw className="w-12 h-12 mx-auto mb-5" />
        <p className="font-semibold">Easy Returns</p>
        <p className="text-gray-500">7-day easy returns, no hassle.</p>
      </div>

      <div>
        <HandCoins className="w-12 h-12 mx-auto mb-5" />
        <p className="font-semibold">Secure Payment</p>
        <p className="text-gray-500">100% safe and secure checkout.</p>
      </div>

      <div>
        <Headset className="w-12 h-12 mx-auto mb-5" />
        <p className="font-semibold">24/7 Support</p>
        <p className="text-gray-500">We’re here for you, anytime.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
