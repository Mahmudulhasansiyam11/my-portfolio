import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const WelcomeMessage = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show welcome message on every page load/reload
    // Delay before showing welcome message (2 seconds)
    const showTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 2000);

    // Auto-hide after 7 seconds (2s delay + 5s display)
    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setShowWelcome(false);
  };

  return (
    <AnimatePresence>
      {showWelcome && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Welcome Card */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 
            w-[90%] max-w-lg p-8 md:p-10
            bg-gradient-to-br from-white/95 via-indigo-50/95 to-purple-50/95
            dark:from-gray-800/95 dark:via-gray-900/95 dark:to-indigo-900/95
            backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.3)]
            border border-white/40 dark:border-gray-700/40"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 
              dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close welcome message"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Animated Emoji */}
            <motion.div
              className="text-6xl text-center mb-4"
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
                scale: [1, 1.2, 1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              👋
            </motion.div>

            {/* Welcome Text */}
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-center 
              bg-gradient-to-r from-indigo-600 to-purple-600 
              dark:from-indigo-400 dark:to-purple-400
              bg-clip-text text-transparent mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Welcome!
            </motion.h2>

            <motion.p
              className="text-center text-gray-700 dark:text-gray-300 text-base md:text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Hi, I'm <span className="font-bold text-indigo-600 dark:text-indigo-400">Mahmudul Hasan Siyam</span>
              <br />
              A passionate Frontend Developer
            </motion.p>

            <motion.p
              className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Thanks for visiting my portfolio! Feel free to explore my projects and get in touch.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={handleClose}
              className="w-full py-3 px-6 
              bg-gradient-to-r from-indigo-600 to-purple-600 
              hover:from-indigo-700 hover:to-purple-700
              text-white font-semibold rounded-xl 
              shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Explore 🚀
            </motion.button>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-400/30 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomeMessage;
