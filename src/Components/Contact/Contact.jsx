import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineMail } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Animate card
    gsap.set(cardRef.current, { scale: 0.8, opacity: 0, y: 50 });
    gsap.to(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // Floating animation for icon
    gsap.to(iconRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Pulse animation for icon
    gsap.to(iconRef.current, {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="contact"
      className="
        w-full py-25
        bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#e0f2fe]
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        px-6 sm:px-10 md:px-16
        flex flex-col items-center
        font-display text-gray-800 dark:text-gray-200
      "
    >
      <motion.h2
        className="text-4xl font-extrabold mb-3 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      <motion.p
        className="text-sm text-gray-600 dark:text-gray-400 mb-12 max-w-xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I’m always excited to connect! Whether you want to collaborate, hire me, or just say hello — feel free to reach out.
      </motion.p>

      <motion.div
        ref={cardRef}
        className="
          w-full max-w-3xl
          bg-white/40 dark:bg-gray-800/40
          backdrop-blur-xl
          rounded-3xl
          border border-white/30 dark:border-gray-700/40
          shadow-[0_0_25px_rgba(0,0,0,0.15)]
          flex flex-col md:flex-row items-center
          gap-8
          p-10
          transition-shadow duration-300
          hover:shadow-[0_0_40px_rgba(0,255,255,0.35)]
        "
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon */}
        <div
          ref={iconRef}
          className="
            bg-cyan-600 dark:bg-cyan-400
            p-6 rounded-full
            flex items-center justify-center
            shadow-lg
            text-white
            text-4xl
            flex-shrink-0
          "
          aria-hidden="true"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <AiOutlineMail />
          </motion.div>
        </div>

        {/* Email Info */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            Email Me At
          </p>
          <motion.a
            href="mailto:mahmudul@gmail.com"
            className="
              text-cyan-700 dark:text-cyan-300
              font-medium text-xl
              underline underline-offset-4
              hover:text-cyan-500 dark:hover:text-cyan-400
              transition-colors duration-200
              break-all
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            mahmudulsiyam766@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
