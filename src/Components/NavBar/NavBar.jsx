import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-[#0A0F1F] shadow-lg z-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4F9CF9] to-[#38E7FF] text-transparent bg-clip-text tracking-wide">
          Mahmudul.dev
        </h1>

        {/* Menu */}
        <ul className="flex space-x-12 text-lg font-medium text-gray-300">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="transition-all group-hover:text-white">
                  {item}
                </span>

                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2.5px] bg-gradient-to-r from-[#4F9CF9] to-[#38E7FF] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#4F9CF9] to-[#38E7FF] text-black font-semibold shadow-md hover:shadow-xl hover:scale-105 transition">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
