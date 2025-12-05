
import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
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
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
        Projects
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        My Recent Work
      </p>

      <div className="w-full max-w-6xl flex flex-col gap-14 mt-14">
        {projectList.map((project, i) => (
          <div
            key={i}
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
              scroll-fade
            "
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full md:w-[45%] 
                rounded-2xl 
                shadow-lg 
                object-cover
              "
              loading="lazy"
            />

            {/* CONTENT */}
            <div className="md:w-[55%]">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>

              <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* TECHNOLOGY BADGES */}
              <div className="flex flex-wrap gap-3 mt-5">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="
                      bg-gray-900 text-white dark:bg-gray-700 
                      px-4 py-1.5 rounded-xl text-sm
                      shadow-[0_0_12px_rgba(0,0,0,0.1)]
                      select-none
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-6 flex-wrap">
                {/* GitHub */}
                <a
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
                >
                  <FaGithub className="text-lg" /> GitHub
                </a>

                {/* Live Demo */}
                <a
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
                >
                  <AiOutlineArrowRight className="text-lg" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Fade Animation */}
      <style>{`
        .scroll-fade {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeUp 1s ease forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
