import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="lg:h-[90vh] h-fit  flex flex-col justify-start items-start text-white text-start lg:mx-20 mx-5 px-4 mt-20"
    ><div className="w-full flex flex-col items-start">
      <h1 className="text-[15px]">This is me</h1>
      <hr className="border-0  from-white via-blue-400 to-purple-600 bg-gradient-to-r rounded-full h-[1px] my-0 lg:mt-4 w-full opacity-60" />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row lg:gap-8 gap-0 justify-start items-start  w-full h-full mt-10">
      <div className="md:w-[40%] w-full">
        <h1 className="text-5xl lg:text-[50px] cormorant-font">I'm Matthew <br className="block md:hidden"/>(Lb Logics)</h1>
        <p className="text-[2rem] source-serif-4 mt-5 text-blue-200 md:text-3xl mb-6">A passionate web developer driven by the vision to make a lasting impact in the tech world through innovative, real-life problem-solving web applications.</p>
      </div>
      <div className="w-full lg:w-[40%] font-medium">
        <p className="text-lg md:xl">I’m a 22-year-old Nigerian web developer based in Lagos, deeply passionate about technology and its power to transform ideas into real-world solutions. My journey in tech is driven by curiosity and a commitment to growth — I constantly challenge myself to learn, improve, and build projects that not only work but also make a difference.</p>
        <p className="text-lg md:xl mt-5">I create digital experiences that connect people and solve real problems while continuously refining my craft in the evolving tech world.</p>
      </div>
    </div>
    </section>
  );
};

export default About;
