import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { motion } from "framer-motion";
import greenEstate from "../images/greenEstate.PNG";
import secure from "../images/secureAnd-j.PNG";
import skylore from "../images/skylore.PNG";
import movieNest from "../images/movieNest.PNG";

const Project = () => {
  const works = [
    {
      title: "Green Estate",
      description:
        "A simple web dashboard that helps manage estate users, collections, and access control in one place.",
      image: greenEstate,
      link: "https://green-estate.vercel.app/",
    },
    {
      title: "Green Estate",
      description:
        "An online shop that displays products with prices and descriptions, featuring an admin panel for managing listings and pricing.",
      image: secure,
      link: "https://www.secureandj.com/",
    },
    {
      title: "Green Estate",
      description: "A location-based weather app that provides hourly forecasts with date and time details.",
      image: skylore,
      link: "https://skylore.vercel.app/",
    },
    {
      title: "Green Estate",
      description:
        "A lightweight web app that lets users search for movies, view release dates, and save favorites for quick access.",
      image: movieNest,
      link: "https://movie-nest-six.vercel.app/",
    },
  ];

  return (
    <section className="lg:mx-20 mx-5 flex flex-col items-start" id="Projects">
      <div className="text-start mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r underline from-gray-200 to-blue-600 Merriweather flex gap-3"
        >
          <FaAsterisk className="text-2xl mt-2 animate-spin text-gray-400 [animation-duration:4s]" />
          Selected Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg max-w-2xl mx-auto Merriweather"
        >
          Crafting digital experiences with cutting-edge tools and frameworks
        </motion.p>

        <div className="flex flex-col lg:mt-10 mt-4 gap-10">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-10 justify-center items-center"
            >
              <motion.img
                src={work.image}
                alt={work.title}
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:w-[50%] w-[100%] rounded-xl"
              />

              <div className="flex flex-col max-w-md">
                <motion.a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-white mb-4 hover:underline"
                >
                  {work.description}
                </motion.a>

                <motion.a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="self-start px-5 py-2 mt-2 bg-transparent border-2 border-[rgb(75,83,110)] text-white rounded-lg hover:bg-[rgb(75,83,110)] transition"
                >
                  Visit Site
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
