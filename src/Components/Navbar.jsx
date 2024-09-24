import React from "react";
import Button from "./Button";
import { Resume } from "../utils"; // This should be the path to your resume PDF

const Navbar = () => {
  const navLinks = [
    { link: "Home", id: "#" },
    { link: "About", id: "#about" },
    { link: "Project", id: "#project" },
    { link: "Contact", id: "#contact" },
  ];

  const smoothScroll = (e, id) => {
    e.preventDefault();
    if (id !== "#") {
      const targetElement = document.querySelector(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="nav fixed top-0 left-0 z-40 w-full bg-transparent backdrop-blur-lg">
      <div className="max-w-screen-xl mx-auto py-6 border-b border-zinc-700 flex items-center justify-between">
        <div className="nav-logo w-[10vw]">
          <div className="nav-cont flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
            <h1>JG</h1>
          </div>
        </div>
        <div className="nav-links flex gap-16">
          {navLinks.map((item, i) => (
            <div key={i} className="flex items-center gap-1">
              <a
                className="link text-[1.2vw]"
                href={item.id}
                onClick={(e) => smoothScroll(e, item.id)}
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
        <div className="w-[10vw]">
          <a
            className="Resume btn"
            href={Resume}
            download="JainishGamit_Resume.pdf" 
          >
            <Button text="Resume" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
