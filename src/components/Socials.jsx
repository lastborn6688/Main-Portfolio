import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Socials = () => {
  return (
    <section className="fixed bottom-[20rem] right-0 origin-bottom-right text-2xl h-20 md:mr-5 mr-0 w-auto gap-6 flex flex-col">
      <a href="">
        <FaTiktok className="hover:scale-105 hover:text-black hover:bg-white text-white hover:transition-transform" />
      </a>
      <a
        href=""
        className="hover:scale-105 hover:text-white hover:bg-green-500 text-white hover:transition-transform"
      >
        <FaWhatsapp />
      </a>
      <a
        href=""
        className="hover:scale-105 hover:text-white hover:bg-pink-700 text-white hover:transition-transform"
      >
        <FaInstagram />
      </a>
      <a
        href=""
        className="hover:scale-105 hover:bg-white hover:text-blue-500 text-white hover:transition-transform"
      >
        <FaTwitter />
      </a>
      <a
        href=""
        className="hover:scale-105 hover:text-black hover:bg-white text-white hover:transition-transform"
      >
        <FaGithub />
      </a>
    </section>
  );
};

export default Socials;
