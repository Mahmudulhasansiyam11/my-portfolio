import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        w-full py-20
        bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        px-6 sm:px-10 md:px-16
        flex flex-col items-center
        font-display text-gray-800 dark:text-gray-200
      "
    >
      <h2 className="text-4xl font-extrabold mb-3 text-gray-900 dark:text-white">
        Get In Touch
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-12 max-w-xl text-center">
        I’m always excited to connect! Whether you want to collaborate, hire me, or just say hello — feel free to reach out.
      </p>

      <div
        className="
          w-full max-w-3xl
          bg-white/40 dark:bg-gray-800/40
          backdrop-blur-xl
          rounded-3xl
          border border-white/30 dark:border-gray-700/40
          shadow-[0_0_25px_rgba(0,0,0,0.15)]
          flex flex-col md:flex-row items-center
          gap-8
          p-10
          transition-shadow duration-300
          hover:shadow-[0_0_40px_rgba(0,255,255,0.35)]
        "
      >
        {/* Icon */}
        <div
          className="
            bg-cyan-600 dark:bg-cyan-400
            p-6 rounded-full
            flex items-center justify-center
            shadow-lg
            text-white
            text-4xl
            flex-shrink-0
          "
          aria-hidden="true"
        >
          <AiOutlineMail />
        </div>

        {/* Email Info */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            Email Me At
          </p>
          <a
            href="mailto:mahmudul@gmail.com"
            className="
              text-cyan-700 dark:text-cyan-300
              font-medium text-xl
              underline underline-offset-4
              hover:text-cyan-500 dark:hover:text-cyan-400
              transition-colors duration-200
              break-all
            "
          >
            mahmudulsiyam766@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
