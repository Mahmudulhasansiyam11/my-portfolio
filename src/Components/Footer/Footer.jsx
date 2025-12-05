import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="
        w-full py-8
        bg-[#0A0F1F] 
        flex flex-col items-center justify-center
        font-display text-gray-200
        border-t border-gray-700
        gap-4
      "
    >
      {/* Icons */}
      <div className="flex gap-8 text-gray-200">
        <a
          href="https://github.com/Mahmudulhasansiyam11"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
           px-5 py-2 rounded-xl bg-gradient-to-r from-[#4F9CF9] to-[#38E7FF] text-black font-semibold shadow-md hover:shadow-xl hover:scale-105 transition
          "
        >
          <FaGithub />
        </a>

        <a
          href="mailto:mahmudul@gmail.com"
          aria-label="Send Email"
          className="
           px-5 py-2 rounded-xl bg-gradient-to-r from-[#4F9CF9] to-[#38E7FF] text-black font-semibold shadow-md hover:shadow-xl hover:scale-105 transition
          "
        >
          <AiOutlineMail />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400 select-none mt-2">
        © 2025 Copyright: Mahmudul Hasan Siyam
      </p>
    </footer>
  );
};

export default Footer;
