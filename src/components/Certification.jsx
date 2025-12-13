import React from "react";
import { FaAsterisk } from "react-icons/fa";
import cert from "../images/gmc-result.PNG";

const Certification = () => {
  return (
    <section id="Certification" className="lg:mx-20 mt-10 mx-5 Merriweather justify-center flex flex-col items-start min-h-[70vh]">
      <div>
        <h1 className="text-3xl underline font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-blue-600 flex gap-3">
          {" "}
          <span>
            <FaAsterisk className="text-2xl mt-2 animate-spin text-gray-400 [animation-duration:4s]" />
          </span>
          Certification
        </h1>
      </div>
      <ul className="">
        <li>
          <div>
            <h3 className="text-[rgb(153,161,175)] font-medium text-xl mb-5">
              Got Certified from Coursera for completing the "HTML, CSS, and
              Javascript for Web Developers" course by GOMYCODE
            </h3>
            <div className="lg:w-[100%] object-contain sm:w-[80%] flex justify-center items-center">
              {" "}
              <img
                src={cert}
                alt=""
                className="lg:ml-20 ml-0"
              />
            </div>{" "}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Certification;
