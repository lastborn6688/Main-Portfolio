import React from "react";
import Hero from "./Hero";
import { Link } from "react-scroll";

const Footer = () => {
  const links = ["Home", "About", "Contact",

  ];
  return (
    <div className="bg-[rgb(7,14,38)] lg:mx-20 mx-5">
      <div>
        <ul className="hidden md:flex md:flex-col  space-x-8 text-white w-[200px] gap-6">
          {links.map((i) => (
            <li
              key={i}
              className="text-lg font-medium hover:underline Merriweather cursor-pointer"
            >
              <Link to={i} smooth={true} duration={800} offset={-80}>
                {i}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
