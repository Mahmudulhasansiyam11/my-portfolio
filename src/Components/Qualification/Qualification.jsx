import React from "react";
import { MdSchool, MdWork } from "react-icons/md";

const Qualification = () => {
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
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
        Qualification
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        Education & Experience Timeline
      </p>

      <div className="w-full max-w-4xl mt-14 relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-400 dark:bg-cyan-500 h-full"></div>

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
                <div className="z-10 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg border border-cyan-300 dark:border-cyan-500">
                  {item.icon}
                </div>

                {/* Content */}
                <div
                  className={`bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)] w-full md:w-1/2 ${
                    isLeft ? "md:mr-10 text-right" : "md:ml-10 text-left"
                  }`}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
