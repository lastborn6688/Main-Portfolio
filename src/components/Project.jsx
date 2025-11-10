import React from "react";

const Project = () => {
  return (
    <section
      className="lg:mx-20 mx-5 justify-center= flex flex-col items-start"
      id="Projects"
    >
      <div className="text-start mb-12">
        <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r underline from-gray-200 to-blue-600  Merriweather flex gap-3">
          <span>
            <FaAsterisk className="text-2xl mt-2 animate-spin text-gray-400 [animation-duration:4s]" />
          </span>
          Selected Projects
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto Merriweather">
          Crafting digital experiences with cutting-edge tools and frameworks
        </p>
      </div>
    </section>
  );
};

export default Project;
