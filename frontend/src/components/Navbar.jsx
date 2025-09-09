import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { CircleUser, Handbag, Menu, Search, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVissible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to={"/"}>
        <img src={assets.logo} alt="Logo" className="w-36 cursor-pointer" />
      </Link>
      {/* Navbar */}
      <ul className="hidden sm:flex gap-5 text-gray-700 uppercase text-lg">
        {/* Home */}
        <NavLink
          to={"/"}
          className="flex flex-col items-center gap-1 focus:text-black"
        >
          <p>Home</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        {/* Collection */}
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1 focus:text-black"
        >
          <p>Collection</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        {/* About */}
        <NavLink
          to={"/about"}
          className="flex flex-col items-center gap-1 focus:text-black"
        >
          <p>About</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        {/* Contact */}
        <NavLink
          to={"/contact"}
          className="flex flex-col items-center gap-1 focus:text-black"
        >
          <p>Contact</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <Search className="cursor-pointer w-8 h-8 text-gray-700" />
        {/* Cart */}
        <Link to="/cart" className="relative">
          <Handbag className="cursor-pointer w-8 h-8 text-gray-700" />
          <p className="absolute bottom-[-5px] right-[-5px] bg-gray-700 text-white w-5 h-5 flex items-center justify-center rounded-full">
            0
          </p>
        </Link>
        {/* User */}
        <div className="group relative">
          <CircleUser className="cursor-pointer w-8 h-8 text-gray-700 " />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-2 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded-md shadow-md">
              <p className="cursor-pointer hover:text-black">My Account</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        {/* Menu Mobile */}
        <Menu
          className="sm:hidden w-8 h-8 text-gray-700 cursor-pointer"
          onClick={() => setVissible(true)}
        />
      </div>

      {/* Sidebar Mobile */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-slate-100 transition-all duration-500 ease-in-out ${
          visible ? "w-[55%]" : "w-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-8 text-gray-700">
          {/* Close */}
          <div
            className="flex items-center justify-between"
            onClick={() => setVissible(false)}
          >
            <X className="w-8 h-8 cursor-pointer" />
          </div>
          {/* Navbar */}
          <ul className="flex flex-col gap-4 mt-3">
            {/* Home */}
            <NavLink
              to="/"
              className="uppercase border-b border-gray-700"
              onClick={() => setVissible(false)}
            >
              Home
            </NavLink>
            {/* Collection */}
            <NavLink
              to="/collection"
              className="uppercase border-b border-gray-700"
              onClick={() => setVissible(false)}
            >
              Collection
            </NavLink>
            {/* About */}
            <NavLink
              to="/about"
              className="uppercase border-b border-gray-700"
              onClick={() => setVissible(false)}
            >
              About
            </NavLink>
            {/* Contact */}
            <NavLink
              to="/contact"
              className="uppercase border-b border-gray-700"
              onClick={() => setVissible(false)}
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
