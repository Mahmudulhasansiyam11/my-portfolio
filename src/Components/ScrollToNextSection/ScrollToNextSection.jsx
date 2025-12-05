import React, { useState, useEffect } from "react";

const ScrollToNextSection = ({ targetSection }) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById(targetSection);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
      <div
        onClick={scrollToNext}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          className="w-6 h-6 text-white"
        >
          <path d="M12 4v16m8-8H4" />
        </svg>
      </div>
    )
  );
};

export default ScrollToNextSection;
