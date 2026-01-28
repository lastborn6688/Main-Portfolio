import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="lg:h-[90vh] h-fit  flex flex-col justify-center items-center text-white text-start lg:mx-20 mx-5 px-4 mt-20 md:mt24"
    >
      <div className="w-full flex flex-col items-start">
        <h1 className="text-[18px] Merriweather">{"<This is me />"}</h1>
        <hr className="border-0 animation from-white via-blue-400 to-pink-600 bg-gradient-to-r rounded-full h-[2px] my-0 lg:mt-4 w-full opacity-60" />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row lg:gap-8 gap-0 justify-center items-start  w-full h-full mt-10">
        <div className="md:w-[40%] w-full">
          <h1 className="text-5xl lg:text-[50px] cormorant-font">
            I'm Matthew <br className="block md:hidden" />
            (Lb Logics)
          </h1>
          <p className="text-[2rem] source-serif-4 mt-5 text-blue-200 md:text-3xl mb-6 Merriweather">
            A passionate web developer driven by the vision to make a lasting
            impact in the tech world through innovative, real-life
            problem-solving web applications.
          </p>
        </div>
        <div className="w-full lg:w-[40%] karla font-medium bg-clip-text bg-gradient-to-bl from-white via-gray-700 to-white text-transparent animate-gradient">
          <p className="text-lg md:xl">
            I’m a 22-year-old Nigerian web developer based in Lagos, deeply
            passionate about technology and its power to transform ideas into
            real-world solutions. My journey in tech is driven by curiosity and
            a commitment to growth — I constantly challenge myself to learn,
            improve, and build projects that not only work but also make a
            difference.
          </p>
          <p className="text-lg md:xl mt-5">
            Recently, I’ve been expanding my skills into backend development,
            exploring technologies like{" "}
            <b className="text-blue-200 cormorant-font">Node.js</b>,{" "}
            <b className="text-blue-200 cormorant-font">Express</b>, and{" "}
            <b className="text-blue-200 cormorant-font">MongoDB</b> to better
            understand how data flows behind the scenes. This journey helps me
            build more complete, scalable, and efficient web applications that
            deliver both great design and powerful functionality.
          </p>
        </div>
      </div>
      <style>
        {`
      .animation{
      background-size: 300% 200%;
      animation:gradient 2s ease infinite;`}
      </style>
    </section>
  );
};

export default About;
