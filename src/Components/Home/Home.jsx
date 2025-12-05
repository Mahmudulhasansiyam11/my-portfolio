import React from "react";

const Home = () => {
  return (
    <div
      id="home" // Add an id for the section
      className="min-h-screen w-full bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-display text-gray-800 dark:text-gray-200 px-6 sm:px-10 md:px-16 py-8 md:py-14"
    >
      {/* Section Content */}
      {/* --- NAV HEADER --- */}
      <header className="flex justify-between items-center mb-10 md:mb-16 w-full">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <svg
            className="h-10 w-10 text-gray-800 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 44 32"
          >
            <path
              d="M2 30L12 2H22L12 30H2zM22 30L32 2H42L32 30H22z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="text-xs font-semibold tracking-widest text-gray-700 dark:text-gray-300">
            SIYAM
          </span>
        </div>

        {/* Menu icon */}
        <button className="p-2 md:hidden">
          <span className="material-icons-outlined text-4xl text-gray-800 dark:text-gray-200">
            menu
          </span>
        </button>
      </header>

      {/* --- MAIN LAYOUT WRAPPER --- */}
      <main className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-20">
        {/* --- LEFT SIDE: IMAGE + BADGES --- */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[340px] md:h-[340px]">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 rounded-full shadow-2xl blur-[1px]"></div>

          <img
            alt="Image of Mahmudul Hasan Siyam"
            className="absolute inset-2 object-cover w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-full border-4 border-white dark:border-gray-900 shadow-xl"
            src="https://i.ibb.co.com/TBmJXqx4/siyam.png"
          />

          {/* Badge 1 */}
          <div
            className="absolute -top-2 right-0 transform translate-x-1/4 -translate-y-1/4 flex items-center gap-2 p-4 rounded-xl
          bg-gray-900/70 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            <div>
              <p className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_8px_cyan]">
                120
              </p>
              <p className="text-xs text-gray-300 tracking-wide">
                Problem <br /> Solving
              </p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 flex items-center gap-2 p-4 rounded-xl bg-gray-900/70 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
            <div>
              <p className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_8px_cyan]">
                1
              </p>
              <p className="text-xs text-gray-300 tracking-wide">
                {" "}
                Years <br /> Experience{" "}
              </p>{" "}
            </div>
          </div>

          {/* Badge 3 */}

          <div
            className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/3
  flex items-center gap-3 p-4 rounded-xl
  bg-gray-900/70 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            <div>
              <p className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_8px_cyan]">
                3
              </p>
              <p className="text-xs text-gray-300 tracking-wide">
                Finished <br /> Projects
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: TEXT CONTENT --- */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-lg text-gray-600 dark:text-gray-400">Hey, I'm</p>

          <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
              Mahmudul Hasan Siyam
            </h1>
            <span className="text-4xl animate-wave">👋</span>
          </div>

          <h2 className="text-2xl mt-3 text-gray-700 dark:text-gray-300 font-semibold">
            Junior Frontend Developer
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            🚀 Motivated Frontend Developer building responsive, user-friendly
            web applications
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            💼 Seeking impactful projects & collaboration opportunities to grow
            professionally
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:opacity-90 transition-all"
          >
            Say Hello
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-gray-500 dark:text-gray-400 justify-center md:justify-start">
            <a className="hover:text-indigo-600 dark:hover:text-white" href="#">
              <svg className="icon-social" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037..." />
              </svg>
            </a>

            <a className="hover:text-indigo-600 dark:hover:text-white" href="#">
              <svg className="icon-social" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0..." />
              </svg>
            </a>

            <a className="hover:text-indigo-600 dark:hover:text-white" href="#">
              <svg className="icon-social" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0..." />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
