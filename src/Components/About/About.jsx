

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserTie, FaCheckCircle, FaHeadset, FaDownload } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    // Set initial state for image
    gsap.set(imageRef.current, { scale: 0.5, rotation: -15, opacity: 0 });

    // GSAP ScrollTrigger animation for image
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // Set initial state for cards
    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], {
      y: 50,
      opacity: 0,
    });

    // GSAP animation for cards with stagger
    gsap.to([card1Ref.current, card2Ref.current, card3Ref.current], {
      scrollTrigger: {
        trigger: card1Ref.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Hover effect for cards
    [card1Ref, card2Ref, card3Ref].forEach((ref) => {
      const card = ref.current;
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      }
    });
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen w-full bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      px-6 py-25 pb-20   // reduced padding
      flex flex-col items-center font-display text-gray-800 dark:text-gray-200"
    >

      {/* Header */}
      <motion.header
        className="text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          About Me
        </h1>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          My Introduction
        </p>
      </motion.header>

      {/* Content Wrapper */}
      <main className="w-full max-w-5xl flex flex-col lg:flex-row items-center gap-10">

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div
            ref={imageRef}
            className="rounded-xl overflow-hidden p-2 bg-white/20 dark:bg-gray-800/20 
          backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.15)] border border-white/40 dark:border-gray-700/40"
          >
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
            <div ref={card1Ref} className="about-card scale-90">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <FaUserTie className="text-3xl text-cyan-300 drop-shadow-[0_0_6px_cyan]" />
              </motion.div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mt-1">Experience</h2>
              <p className="text-[10px] text-gray-900 dark:text-gray-400">1 Year</p>
            </div>

            <div ref={card2Ref} className="about-card scale-90">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <FaCheckCircle className="text-3xl text-cyan-300 drop-shadow-[0_0_6px_cyan]" />
              </motion.div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mt-1">Completed</h2>
              <p className="text-[10px] text-gray-900 dark:text-gray-400">3 Projects</p>
            </div>

            <div ref={card3Ref} className="about-card scale-90">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <FaHeadset className="text-3xl text-cyan-300 drop-shadow-[0_0_6px_cyan]" />
              </motion.div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white mt-1">Support</h2>
              <p className="text-[10px] text-gray-900 dark:text-gray-400">Available Online</p>
            </div>
          </div>

          {/* Description */}
          <motion.p
            className="text-base leading-relaxed text-center lg:text-left text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I’m a passionate and detail-oriented Frontend Developer skilled in building modern,
            responsive, and interactive web applications. I work with{" "}
            <span className="font-bold">
              HTML, CSS, JavaScript, ReactJS, Next.js, TailwindCSS, Firebase, NodeJS, ExpressJS, and MongoDB.
            </span>{" "}
            I enjoy solving real-world problems through clean UI/UX and efficient code.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download="Mahmudul-Hasan-Resume.pdf"
            className="w-full max-w-xs bg-gradient-to-r from-indigo-600 to-purple-600 
            dark:from-indigo-700 dark:to-purple-700 text-white py-3 px-5 
            rounded-xl shadow-lg font-semibold flex items-center
            justify-center gap-2 hover:scale-105 transition text-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaDownload />
            </motion.div>
            <span>Download Resume</span>
          </motion.a>

        </div>
      </main>
    </div>
  );
};

export default About;
