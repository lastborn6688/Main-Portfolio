import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Experience",
    "Contact",
  ];
  return (
    <nav className="lg:h-20 h-15 sticky  flex items-center justify-between rounded-full top-5 lg:ml-[115px] ml-5 backdrop-blur-md bg-blue-600/10  lg:w-[85%] w-[90%] text-white px-6 md:px-12 lg:px-20 z-20">
      <div className="text-lg font-bold ">Logo</div>

      <div>
        <ul className="hidden md:flex space-x-8">
          {links.map((i) => (
            <li
              key={i}
              className="text-lg font-medium hover:underline cursor-pointer"
            >
              <Link to={i} smooth={true} duration={800} offset={-80}>
                {i}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="text-lg text-blue-100 border-blue-300  border-2 hover:border-gray-200 cursor-pointer px-5 py-2 font-medium rounded-full">
        Hire Me
      </button>
    </nav>
  );
};

export default Navbar;
