
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Animate project cards
    projectsRef.current.forEach((project, index) => {
      if (project) {
        const isEven = index % 2 === 0;
        gsap.set(project, { opacity: 0, x: isEven ? -100 : 100, y: 50 });
        gsap.to(project, {
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      }
    });

    // Animate images with parallax effect
    imagesRef.current.forEach((image, index) => {
      if (image) {
        gsap.to(image, {
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: -30,
          ease: "none",
        });
      }
    });
  }, []);

  const projectList = [
    {
      title: "PlateShare – Community Food Sharing Platform",
      description:
        "A full-stack MERN food-sharing platform where users can donate surplus food, request items, and help reduce community food waste. Includes secure auth, form validation, toast alerts, and full CRUD operations.",
      image: "https://i.ibb.co/qLDkbt4j/plateshare.png", 
      tech: [
        "ReactJS",
        "TailwindCSS",
        "Firebase",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
      github: "https://github.com/Mahmudulhasansiyam11/plate-share-client",
      live: "https://plate-share-9e57e.web.app/",
    },
    {
      title: "WorkoutPro – Fitness Planner (Next.js Full-Stack App)",
      description:
        "A fitness management platform that allows users to track workouts, browse trainers, view diet plans, and manage personalized fitness schedules. Includes secure API routes (Next.js App Router).",
      image: "https://i.ibb.co/Fkxtn2C2/workoutpro.png",
      tech: [
        "Next.js 14",
        "TailwindCSS",
        "ReactJS",
        "Firebase",
        "ExpressJS",
        "MongoDB",
      ],
      github: "https://github.com/Mahmudulhasansiyam11/workoutpro-app",
      live: "https://workout-pro-app.vercel.app/",
    },
    {
      title: "GameHub – Online Game Discovery Platform",
      description:
        "A React-based game discovery platform with filters, categories, Firebase authentication, and beautiful UI animations. Users can explore trending games and view detailed game info.",
      image: "https://i.ibb.co/6R6f28Rf/gamehub.png",
      tech: [
        "ReactJS",
        "TailwindCSS",
        "React Router",
        "Firebase Auth",
        "Firebase Hosting",
      ],
      github: "https://github.com/Mahmudulhasansiyam11/gamehub-a-game-library",
      live: "https://gamehub---a-game-library.web.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="
        w-full py-25 
        bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        px-6 flex flex-col items-center
        font-display text-gray-800 dark:text-gray-200
      "
    >
      <motion.h1
        className="text-4xl font-extrabold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>
      <motion.p
        className="text-sm text-gray-600 dark:text-gray-400 mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My Recent Work
      </motion.p>

      <div className="w-full max-w-6xl flex flex-col gap-14 mt-14">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            ref={(el) => (projectsRef.current[i] = el)}
            className="
              w-full 
              bg-white/40 dark:bg-gray-800/40 
              backdrop-blur-xl 
              rounded-3xl 
              border border-white/30 dark:border-gray-700/40
              shadow-[0_0_25px_rgba(0,0,0,0.15)]
              hover:shadow-[0_0_35px_rgba(0,255,255,0.3)]
              p-6 md:p-10 
              flex flex-col md:flex-row 
              gap-10 items-center
              transition-all duration-300
            "
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* IMAGE */}
            <motion.img
              ref={(el) => (imagesRef.current[i] = el)}
              src={project.image}
              alt={project.title}
              className="
                w-full md:w-[45%] 
                rounded-2xl 
                shadow-lg 
                object-cover
              "
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* CONTENT */}
            <div className="md:w-[55%]">
              <motion.h2
                className="text-2xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.title}
              </motion.h2>

              <motion.p
                className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {project.description}
              </motion.p>

              {/* TECHNOLOGY BADGES */}
              <motion.div
                className="flex flex-wrap gap-3 mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {project.tech.map((t, idx) => (
                  <motion.span
                    key={idx}
                    className="
                      bg-gray-900 text-white dark:bg-gray-700 
                      px-4 py-1.5 rounded-xl text-sm
                      shadow-[0_0_12px_rgba(0,0,0,0.1)]
                      select-none
                    "
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                className="flex gap-4 mt-6 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* GitHub */}
                <motion.a
                  href={project.github}
                  className="
                    flex items-center gap-2
                    px-5 py-2 
                    bg-black text-white 
                    rounded-xl text-sm 
                    hover:bg-gray-800 
                    transition-all
                    select-none
                  "
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-lg" /> GitHub
                </motion.a>

                {/* Live Demo */}
                <motion.a
                  href={project.live}
                  className="
                    flex items-center gap-2
                    px-5 py-2 
                    bg-cyan-600 text-white 
                    rounded-xl text-sm 
                    hover:bg-cyan-700 
                    transition-all
                    select-none
                  "
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AiOutlineArrowRight className="text-lg" /> Live Demo
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
