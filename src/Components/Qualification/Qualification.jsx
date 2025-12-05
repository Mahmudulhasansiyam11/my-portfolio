import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdSchool, MdWork } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Qualification = () => {
  const lineRef = useRef(null);
  const itemsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    // Animate timeline line
    gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top" });
    gsap.to(lineRef.current, {
      scrollTrigger: {
        trigger: lineRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      scaleY: 1,
      duration: 1.5,
      ease: "power2.out",
    });

    // Animate timeline items
    itemsRef.current.forEach((item, index) => {
      if (item) {
        const isLeft = index % 2 === 0;
        gsap.set(item, { opacity: 0, x: isLeft ? 100 : -100 });
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }
    });

    // Animate icons
    iconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.set(icon, { scale: 0, rotation: -180 });
        gsap.to(icon, {
          scrollTrigger: {
            trigger: icon,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.2,
        });

        // Pulse animation
        gsap.to(icon, {
          scale: 1.1,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      }
    });
  }, []);

  const timeline = [
    {
      type: "education",
      title: "B.Sc in Computer Science and Engineering",
      institution: "Daffodil International University",
      duration: "08/2019 - 08/2023",
      cgpa: "3.81",
      icon: <MdSchool className="text-4xl text-cyan-400" />,
    },
    {
      type: "experience",
      title: "Teaching Assistant",
      institution: "Daffodil International University",
      duration: "08/2020 - 04/2021",
      details: "Software Project-I & II",
      icon: <MdWork className="text-4xl text-cyan-400" />,
    },
  ];

  return (
    <section
      id="qualification"
      className="w-full py-20 bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 flex flex-col items-center font-display text-gray-800 dark:text-gray-200"
    >
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Qualification
      </motion.h1>
      <motion.p
        className="text-sm text-gray-600 dark:text-gray-400 mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Education & Experience Timeline
      </motion.p>

      <div className="w-full max-w-4xl mt-14 relative">
        {/* Vertical timeline line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-400 dark:bg-cyan-500 h-full"
        ></div>

        {/* Timeline items */}
        <div className="flex flex-col gap-10">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center justify-between relative ${
                  isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <div
                  ref={(el) => (iconsRef.current[i] = el)}
                  className="z-10 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg border border-cyan-300 dark:border-cyan-500"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                      delay: i * 0.5,
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  ref={(el) => (itemsRef.current[i] = el)}
                  className={`bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] w-full md:w-1/2 ${
                    isLeft ? "md:mr-10 text-right" : "md:ml-10 text-left"
                  }`}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.duration}
                    {item.cgpa ? ` | CGPA: ${item.cgpa}` : ""}
                  </p>
                  {item.details && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.details}
                    </p>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
