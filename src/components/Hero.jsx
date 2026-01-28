import Snowfall from "react-snowfall";
import heroImage from "../images/heroImage.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className="h-[80vh] mt-20 flex flex-col relative sm:flex sm:flex-col  md:flex md:flex-row lg-flex lg:flex-row justify-center items-center text-white text-center px-4"
      id="Home"
    >
      <div className="w-[50%] flex flex-col justify-center items-start  mb-10 sm:mb-10 md:mb-0 lg:mb-0">
        <h1 className="text-4xl items-start inter  sm:text-5xl bg-gradient-to-r bg-clip-text text-transparent  from-blue-400  via-purple-500 to-pink-600 gradient-animate md:text-6xl lg:text-6xl font-semibold mb-4">
          Hello, <br className="block lg:hidden items-start " />
          I am Osi Matthew
        </h1>
        <div className="w-[500px] text-[17px] text-left karla hidden md:block">
          <Typewriter
            options={{
              strings: [
                "I design and develop responsive web solutions that bridge creativity and functionality. Every project I work on is crafted to deliver smooth performance, user satisfaction, and lasting impact.",
              ],
              loop: true,
              autoStart: true,
              delay: 40,
              deleteSpeed: 100000,
              cursor: " ",
            }}
          />
        </div>
        <p className="cormorant-font text-lg sm:text-xl source-serif-4 mt-5 lg:ml-15 ml-0 text-blue-200 md:text-2xl lg:text-3xl mb-6">
          welcome to my portfolio
        </p>
      </div>
      <div className="bg-gradient-to-b from-[rgb(7,14,38)] lg:h-[580px] sm:h-[380px] sm:w-[380px] shadow-gray-500 shadow-lg lg:w-[580px] relative rounded-full  overflow-hidden via-[rgb(4,10,24)] to-[rgb(21,42,114)]">
        <img
          src={heroImage}
          alt="Hero Image"
          className="object-cover h-full w-full object-top"
        />
      </div>
      <style>{`
      .gradient-animate{
      background-size: 200% 200%;
      animation: gradient 3s ease infinite;
      }
      `}</style>
    </section>
  );
};

export default Hero;
