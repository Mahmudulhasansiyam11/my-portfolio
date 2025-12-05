import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Home = () => {
  const imageRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const badge3Ref = useRef(null);

  useEffect(() => {
    // GSAP animations for image and badges
    const tl = gsap.timeline();

    // Set initial state for image
    gsap.set(imageRef.current, { scale: 0, rotation: -180 });

    // Animate image with scale and rotation
    tl.to(imageRef.current, {
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    });

    // Set initial state for badges
    gsap.set([badge1Ref.current, badge2Ref.current, badge3Ref.current], {
      scale: 0,
      opacity: 0,
    });

    // Animate badges with stagger
    tl.to(
      [badge1Ref.current, badge2Ref.current, badge3Ref.current],
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Floating animation for badges
    gsap.to(badge1Ref.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(badge2Ref.current, {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    });

    gsap.to(badge3Ref.current, {
      y: -12,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });
  }, []);
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
            ref={imageRef}
            alt="Image of Mahmudul Hasan Siyam"
            className="absolute inset-2 object-cover w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-full border-4 border-white dark:border-gray-900 shadow-xl"
            src="https://i.ibb.co.com/TBmJXqx4/siyam.png"
          />

          {/* Badge 1 */}
          <div
            ref={badge1Ref}
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
          <div
            ref={badge2Ref}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 flex items-center gap-2 p-4 rounded-xl bg-gray-900/70 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
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
            ref={badge3Ref}
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
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hey, I'm
          </motion.p>

          <motion.div
            className="flex items-center justify-center md:justify-start gap-2 mt-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
              Mahmudul Hasan Siyam
            </h1>
            <motion.span
              className="text-4xl"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              👋
            </motion.span>
          </motion.div>

          <motion.h2
            className="text-2xl mt-3 text-gray-700 dark:text-gray-300 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Junior Frontend Developer
          </motion.h2>

          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            🚀 Motivated Frontend Developer building responsive, user-friendly
            web applications
          </motion.p>

          <motion.p
            className="text-sm text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            💼 Seeking impactful projects & collaboration opportunities to grow
            professionally
          </motion.p>

          <motion.a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:opacity-90 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
            <motion.svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </motion.svg>
          </motion.a>

          {/* Social Icons */}
          <motion.div
            className="flex gap-6 mt-10 text-gray-500 dark:text-gray-400 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.a
              className="hover:text-indigo-600 dark:hover:text-white"
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="icon-social" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037..." />
              </svg>
            </motion.a>

            <motion.a
              className="hover:text-indigo-600 dark:hover:text-white"
              href="#"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="icon-social" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0..." />
              </svg>
            </motion.a>

            <motion.a
              className="hover:text-indigo-600 dark:hover:text-white"
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="icon-social" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0..." />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
