

import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Skills = () => {
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
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
        Skills
      </h1>
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
        My Technical Level
      </p>

      {/* Card Wrapper */}
      <div
        className="
          w-full max-w-6xl 
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-6 mt-10
        "
      >
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="
              p-6 rounded-2xl
              bg-white/40 dark:bg-gray-800/40 
              backdrop-blur-xl
              border border-white/30 dark:border-gray-700/40
              shadow-[0_0_18px_rgba(0,0,0,0.15)]
              hover:shadow-[0_0_22px_rgba(0,255,255,0.35)]
              transition-all duration-300
              scroll-fade
            "
          >
            <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">
              {group.title}
            </h2>

            <div className="flex flex-col gap-3">
              {group.skills.map((skill, i) => (
                <div key={i} className="flex items-start gap-2">
                  <AiOutlineCheckCircle className="text-lg text-cyan-400 drop-shadow-[0_0_6px_cyan]" />
                  <div>
                    <p className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                      {skill.name}
                    </p>
                    <p className="text-[10px] text-gray-600 dark:text-gray-400">
                      {skill.level}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Animation */}
      <style>{`
        .scroll-fade {
          opacity: 0;
          transform: translateY(12px);
          animation: fadeUp 0.9s ease forwards;
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

export default Skills;
