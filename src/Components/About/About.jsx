

import React from "react";
import { FaUserTie, FaCheckCircle, FaHeadset, FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      px-6 py-25 pb-20   // reduced padding
      flex flex-col items-center font-display text-gray-800 dark:text-gray-200"
    >

      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          About Me
        </h1>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          My Introduction
        </p>
      </header>

      {/* Content Wrapper */}
      <main className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-10">

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden p-2 bg-white/20 dark:bg-gray-800/20 
          backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.15)] border border-white/40 dark:border-gray-700/40">
            <img
              alt="Laptop coding illustration"
              className="w-full max-w-xs rounded-lg shadow-md"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZj3E6mT1UMq4iyh5SvlNbw6OCN9_Danllw64ImAa1PRkFMQTyAuidatQHBm2CvGhmx_E7Re84kdgwtzhEAwz93p32MUOKi_hKw9eZQw2_1lEOqmrftUdFsbdsrJdmBdwaA9o_PDwi-mZ5v_kMdUKldkEa3Fsf8XcAu7nO7iTUz7bZda_yUQE3alEYeLnWstH7SmAHfq3YvAQkbY1Y9xdJeVUBZgt5zZlb5WLEsgxNNAwUo--KpdMTkbu-QimhqtbE2wwr5MOdI7yy"
            />
          </div>
        </div>

        {/* Right: Text + Cards */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">

          {/* Cards */}
          <div
            className="
              grid 
              grid-cols-3 
              md:grid-cols-2 
              lg:grid-cols-3 
              gap-4 
              w-full 
              mb-8
            "
          >
            <div className="about-card scale-90">
              <FaUserTie className="text-3xl text-cyan-300 drop-shadow-[0_0_6px_cyan]" />
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mt-1">Experience</h2>
              <p className="text-[10px] text-gray-900 dark:text-gray-400">1 Year</p>
            </div>

            <div className="about-card scale-90">
              <FaCheckCircle className="text-3xl text-cyan-300 drop-shadow-[0_0_6px_cyan]" />
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mt-1">Completed</h2>
              <p className="text-[10px] text-gray-900 dark:text-gray-400">3 Projects</p>
            </div>

            <div className="about-card scale-90">
              <FaHeadset className="text-3xl text-cyan-300 drop-shadow-[0_0_6px_cyan]" />
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mt-1">Support</h2>
              <p className="text-[10px] text-gray-900 dark:text-gray-400">Available Online</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-center lg:text-left text-gray-700 dark:text-gray-300 mb-8">
            I’m a passionate and detail-oriented Frontend Developer skilled in building modern,
            responsive, and interactive web applications. I work with{" "}
            <span className="font-bold">
              HTML, CSS, JavaScript, ReactJS, Next.js, TailwindCSS, Firebase, NodeJS, ExpressJS, and MongoDB.
            </span>{" "}
            I enjoy solving real-world problems through clean UI/UX and efficient code.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download="Mahmudul-Hasan-Resume.pdf"
            className="w-full max-w-xs bg-gradient-to-r from-indigo-600 to-purple-600 
            dark:from-indigo-700 dark:to-purple-700 text-white py-3 px-5 
            rounded-xl shadow-lg font-semibold flex items-center
            justify-center gap-2 hover:scale-105 transition text-sm"
          >
            <FaDownload />
            <span>Download Resume</span>
          </a>

        </div>
      </main>
    </div>
  );
};

export default About;
