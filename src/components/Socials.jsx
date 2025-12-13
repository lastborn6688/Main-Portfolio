import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <section className="fixed bottom-[20rem] right-0 origin-bottom-right text-2xl h-20 md:mr-5 mr-0 w-auto gap-6 flex flex-col">
      <a href="https://www.tiktok.com/@ogalastborn09?_r=1&_t=ZS-92CRPeRh1Wi">
        <FaTiktok className="hover:scale-105 animate-bounce hover:text-black hover:bg-white text-white hover:transition-transform" />
      </a>
      <a
        href="https://wa.me/message/5F3KSS5A7BIBJ1"
        className="hover:scale-105 animate-bounce hover:text-white hover:bg-green-500 text-white hover:transition-transform"
      >
        <FaWhatsapp />
      </a>
      <a
        href="https://x.com/lastborn1869998?s=11"
        className="hover:scale-105 animate-bounce hover:bg-white hover:text-black text-white hover:transition-transform"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://github.com/lastborn6688"
        className="hover:scale-105 animate-bounce hover:text-black hover:bg-white text-white hover:transition-transform"
      >
        <FaGithub />
      </a>
    </section>
  );
};

export default Socials;
