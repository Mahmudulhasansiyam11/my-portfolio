// import React from "react";
// import {
//   SiJavascript,
//   SiReact,
//   SiTailwindcss,
//   SiExpress,
//   SiMongodb,
//   SiFirebase,
// } from "react-icons/si";

// const Technologies = () => {
//   // Technology list for easy mapping
//   const techStack = [
//     { icon: <SiJavascript />, label: "JavaScript" },
//     { icon: <SiReact />, label: "React" },
//     { icon: <SiTailwindcss />, label: "TailwindCSS" },
//     { icon: <SiExpress />, label: "ExpressJS" },
//     { icon: <SiFirebase />, label: "Firebase" },      // ADDED
//     { icon: <SiMongodb />, label: "MongoDB" },
//   ];

//   return (
//     <section
//       id="technologies"
//       className="
//         w-full py-20 
//         bg-[#f8fafc] dark:bg-gray-900 
//         flex flex-col items-center
//         px-6
//       "
//     >
//       {/* Title */}
//       <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
//         Technologies
//       </h1>
//       <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
//         My Tech Stack
//       </p>

//       {/* Technology Icons */}
//       <div
//         className="
//           grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 
//           gap-6 mt-14
//         "
//       >
//         {techStack.map((tech, i) => (
//           <div
//             key={i}
//             className="
//               w-24 h-24 sm:w-28 sm:h-28 
//               bg-white dark:bg-gray-800 
//               shadow-[0_4px_12px_rgba(0,0,0,0.08)] 
//               rounded-2xl flex flex-col items-center justify-center 
//               text-gray-700 dark:text-gray-200
//               hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)] 
//               hover:scale-105 transition-all duration-300
//             "
//           >
//             <span className="text-4xl">{tech.icon}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Technologies;

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Set initial state for cards
    gsap.set(cardsRef.current, { scale: 0, opacity: 0 });

    // GSAP ScrollTrigger animation for tech cards
    gsap.to(cardsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      scale: 1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Floating animation for each card
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          y: -15,
          duration: 1 + index * 0.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.05 + 0.6, // Add delay after entrance animation
        });
      }
    });
  }, []);

  // Technology list for easy mapping
  const techStack = [
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiReact />, label: "React" },
    { icon: <SiTailwindcss />, label: "TailwindCSS" },
    { icon: <SiExpress />, label: "ExpressJS" },
    { icon: <SiFirebase />, label: "Firebase" },
    { icon: <SiMongodb />, label: "MongoDB" },
  ];

  return (
    <section
      id="technologies"
      className="
        w-full py-20 
        bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        flex flex-col items-center
        px-6 font-display text-gray-800 dark:text-gray-200
      "
    >
      {/* Title */}
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technologies
      </motion.h1>
      <motion.p
        className="text-sm text-gray-600 dark:text-gray-400 mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Tech Stack
      </motion.p>

      {/* Technology Icons */}
      <div
        className="
          grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 
          gap-8 mt-14
        "
      >
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="
              w-24 h-24 sm:w-28 sm:h-28 
              bg-gray-100/60 dark:bg-gray-800/40 
              backdrop-blur-xl
              border border-gray-300/50 dark:border-gray-700/40
              rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.15)]
              flex flex-col items-center justify-center 
              text-gray-700 dark:text-gray-200
              
              hover:shadow-[0_0_25px_rgba(0,255,255,0.45)]
              hover:border-cyan-400/60
              transition-all duration-300
            "
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-4xl drop-shadow-[0_0_6px_cyan]"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: i * 0.1,
              }}
            >
              {tech.icon}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
