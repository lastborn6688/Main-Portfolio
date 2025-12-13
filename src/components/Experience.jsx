import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // how much of the element should be visible before it triggers
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:mx-20 mt-10 mx-5 justify-center flex flex-col items-start min-h-[70vh]"
      id="Experience"
    >
      <h1 className="text-3xl underline font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-blue-600 Merriweather flex gap-3">
        <span>
          <FaAsterisk className="text-2xl mt-2 animate-spin text-gray-400 [animation-duration:4s]" />
        </span>
        Experience
      </h1>

      <div className="flex flex-col md:flex-row gap-5">
        <h3 className="text-5xl Merriweather font-semibold text-gray-300">
          Frontend Developer {"(Intern)"}
        </h3>
        <p className="text-gray-400 mb-2 Merriweather text-2xl mt-0 md:mt-5">
          July 2025 - December 2025
        </p>
      </div>
    </motion.section>
  );
};

export default Experience;
