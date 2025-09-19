import { assets } from "../assets/assets";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-5 sm:gap-15 my-10 mt-25">
        {/* Footer Left: Logo - Slogan - Contact Info */}
        <div>
          <img src={assets.logo} alt="logo" className="w-36" />
          <p className="w-full sm:w-3/4 text-gray-500 mb-2">
            Premium men’s fashion delivered with style and elegance.
          </p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li className="inline-flex gap-2">
              <MapPin className="w-5 h-5" />
              <span>Ho Chi Minh City, Vietnam</span>
            </li>
            <li className="inline-flex gap-2">
              <Mail className="w-5 h-5" /> <span>masyfashion@gmail.com</span>
            </li>
            <li className="inline-flex gap-2">
              <Phone className="w-5 h-5" /> <span>(+84) 123-456-789</span>
            </li>
          </ul>
        </div>

        {/* Footer Middle: Company  */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-700 uppercase sm:pt-9">
            Company
          </p>
          <ul className="flex flex-col gap-2 text-gray-500">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Footer Right: Follow Us - Social Media */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-700 uppercase sm:pt-9">
            Follow us
          </p>
          <ul className="inline-flex gap-4 text-gray-500">
            <li className="hover:text-gray-700">
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li className="hover:text-gray-700">
              <a href="#">
                <Instagram />
              </a>
            </li>
            <li className="hover:text-gray-700">
              <a href="#">
                <Linkedin />
              </a>
            </li>
            <li className="hover:text-gray-700">
              <a href="#">
                <Github />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom: Copyright */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center capitalize text-gray-500">
          Copyright 2025 @ MasyFashion - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
