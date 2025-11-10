import React, { useState, useEffect } from "react";
import tailwind from "../images/tailwindcss.png";
import mongodb from "../images/mongodb.png";
import postman from "../images/postman.png";
import nodejs from "../images/nodejs.png";
import nextjs from "../images/nextjs.png";
import vercel from "../images/vercel.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAsterisk } from "react-icons/fa";

const Skills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // how much of the section must be visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const techCategories = {
    frontend: [
      {
        id: 1,
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        proficiency: 90,
        color: "from-cyan-400 to-blue-500",
      },
      {
        id: 2,
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        proficiency: 80,
        color: "from-yellow-400 to-yellow-600",
      },
      {
        id: 3,
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        proficiency: 90,
        color: "from-orange-500 to-red-500",
      },
      {
        id: 4,
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        proficiency: 80,
        color: "from-blue-400 to-blue-600",
      },
      {
        id: 5,
        name: "Tailwind",
        image: tailwind,
        proficiency: 86,
        color: "from-teal-400 to-cyan-500",
      },
      {
        id: 14,
        name: "Next.js",
        image: nextjs,
        proficiency: 78,
        color: "from-gray-400 to-black",
      },
    ],
    tools: [
      {
        id: 6,
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        proficiency: 82,
        color: "from-orange-500 to-red-600",
      },
      {
        id: 7,
        name: "GitHub",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        proficiency: 85,
        color: "from-gray-200 to-gray-400",
      },
      {
        id: 8,
        name: "NPM",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        proficiency: 80,
        color: "from-red-500 to-red-700",
      },
      {
        id: 15,
        name: "Vercel",
        image: vercel,
        proficiency: 80,
        color: "from-black to-gray-600",
      },
    ],
    design: [
      {
        id: 9,
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        proficiency: 75,
        color: "from-purple-400 to-pink-500",
      },
    ],
    learning: [
      {
        id: 10,
        name: "Framer Motion",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
        proficiency: 70,
        color: "from-gray-100 to-black",
      },
      {
        id: 11,
        name: "MongoDB",
        image: mongodb,
        proficiency: 60,
        color: "from-green-400 to-green-600",
      },
      {
        id: 12,
        name: "Postman",
        image: postman,
        proficiency: 55,
        color: "from-orange-400 to-red-500",
      },
      {
        id: 13,
        name: "Node.js",
        image: nodejs,
        proficiency: 50,
        color: "from-green-400 to-green-600",
      },
    ],
  };

  const categories = [
    { id: "all", name: "All", icon: "🎯" },
    { id: "frontend", name: "Frontend", icon: "💻" },
    { id: "tools", name: "Tools", icon: "🔧" },
    { id: "design", name: "Design", icon: "🎨" },
    { id: "learning", name: "Learning", icon: "📚" },
  ];

  const getFilteredTech = () => {
    if (activeCategory === "all") {
      return [
        ...techCategories.frontend,
        ...techCategories.tools,
        ...techCategories.design,
        ...techCategories.learning,
      ];
    }
    return techCategories[activeCategory] || [];
  };

  const filteredTech = getFilteredTech();

  return (
    <motion.section
      id="Skills"
      className="lg:mx-20 mx-5 mt-10 flex flex-col items-start"
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="text-start mb-12">
        <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r underline from-gray-200 to-blue-600 Merriweather flex gap-3">
          <FaAsterisk className="text-2xl mt-2 animate-spin text-gray-400 [animation-duration:4s]" />
          My Stack
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto Merriweather">
          Crafting digital experiences with cutting-edge tools and frameworks
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-blue-800 to-purple-600 text-white shadow-lg shadow-blue-500/50 scale-105"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:scale-105"
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full">
        {filteredTech.map((tech) => (
          <div
            key={tech.id}
            onMouseEnter={() => setHoveredSkill(tech.id)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="relative group"
          >
            <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10 cursor-pointer">
              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r ${tech.color} blur-lg -z-10`}
              ></div>

              {/* Icon */}
              <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <p className="text-sm font-bold tracking-wide text-white mb-3 text-center">
                {tech.name}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                  style={{
                    width:
                      hoveredSkill === tech.id ? `${tech.proficiency}%` : "0%",
                  }}
                ></div>
              </div>

              {/* Tooltip */}
              {hoveredSkill === tech.id && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-lg animate-fade-in">
                  {tech.proficiency}% Proficient
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </motion.section>
  );
};

export default Skills;
