import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="lg:mx-20 mx-5 py-6 ">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex justify-center items-center mb-4 mx-auto">
          <FaRegArrowAltCircleUp className="text-blue-300 animate-bounce cursor-pointer" size={35}/>
        </button>
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-400 text-center">
            © {year}. All rights reserved. Built with React.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
