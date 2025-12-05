

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineCheckCircle } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Set initial state for cards
    gsap.set(cardsRef.current, { scale: 0.8, opacity: 0, y: 50 });

    // GSAP ScrollTrigger animation for skill cards
    gsap.to(cardsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.7)",
    });

    // Floating animation for cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          y: -8,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      }
    });
  }, []);

  const skillGroups = [
    {
      title: "Frontend Developer",
      skills: [
        { name: "HTML", level: "Expert" },
        { name: "CSS", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "TailwindCSS", level: "Expert" },
        { name: "ReactJS", level: "Expert" },
        { name: "React Router", level: "Expert" },
      ],
    },
    {
      title: "Backend Developer",
      skills: [
        { name: "NodeJS", level: "Intermediate" },
        { name: "ExpressJS", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Firebase (Auth, Hosting)", level: "Expert" },
      ],
    },
    {
      title: "Deployment & Tools",
      skills: [
        { name: "Git", level: "Expert" },
        { name: "GitHub", level: "Expert" },
        { name: "Vercel", level: "Intermediate" },
        { name: "Netlify", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        w-full py-25 
        bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        font-display text-gray-800 dark:text-gray-200
        px-6 flex flex-col items-center
      "
    >
      {/* Title */}
      <motion.h1
        className="text-3xl font-extrabold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>
      <motion.p
        className="text-xs text-gray-600 dark:text-gray-400 mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Technical Level
      </motion.p>

      {/* Card Wrapper */}
      <div
        className="
          w-full max-w-6xl 
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-6 mt-10
        "
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
              p-6 rounded-2xl
              bg-white/40 dark:bg-gray-800/40 
              backdrop-blur-xl
              border border-white/30 dark:border-gray-700/40
              shadow-[0_0_18px_rgba(0,0,0,0.15)]
              hover:shadow-[0_0_22px_rgba(0,255,255,0.35)]
              transition-all duration-300
            "
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h2
              className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100 text-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              {group.title}
            </motion.h2>

            <div className="flex flex-col gap-3">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 + 0.4 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.2,
                    }}
                  >
                    <AiOutlineCheckCircle className="text-lg text-cyan-400 drop-shadow-[0_0_6px_cyan]" />
                  </motion.div>
                  <div>
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                      {skill.name}
                    </p>
                    <p className="text-[10px] text-gray-600 dark:text-gray-400">
                      {skill.level}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
