import React, { useState } from "react";
import Button from "./Button";
import { Resume } from "../utils"; // Import the resume PDF file from utils
import { motion, MotionConfig } from "framer-motion"; // Import motion for animation

const Navbar = () => {
  // State for managing button click
  const [btnClick, setBtnClick] = useState(false);

  // Toggle button click state
  const btnClicked = () => {
    setBtnClick(!btnClick);
  };

  // Variants for framer-motion animation of links
  const linkVariants1 = {
    open: (i) => ({
      y: -30,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    closed: (i) => ({
      y: 0,
      opacity: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  // Navigation links data
  const navLinks = [
    { link: "Home", id: "#" },
    { link: "About", id: "#about" },
    { link: "Project", id: "#project" },
    { link: "Contact", id: "#contact" },
  ];

  // Smooth scroll to sections of the page
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
      <div className="max-w-screen-xl mx-auto py-6 border-b border-zinc-700 flex items-center justify-between px-4 md:px-14 lg:px-0">

        {/* Logo Section */}
        <div className="nav-logo">
          <div className="nav-cont flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
            <h1>JG</h1>
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="nav-link hidden md:block">
          <div className="nav-links flex gap-16">
            {navLinks.map((item, i) => (
              <div key={i} className="flex items-center gap-1">
                <a
                  className="link text-[1.3vw]"
                  href={item.id}
                  onClick={(e) => smoothScroll(e, item.id)}
                >
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Button for Desktop */}
        <div className="w-[10vw] hidden md:block">
          <a
            className="Resume btn"
            href={Resume}
            download="JainishGamit_Resume.pdf"
          >
            <Button text="Resume" />
          </a>
        </div>

        {/* Toggle Menu for Mobile */}
        <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <motion.div
            animate={btnClick ? "open" : "closed"}
            variants={{
              open: {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                opacity: 1,
                transition: {
                  clipPath: { duration: 0.5 },
                  opacity: { duration: 0.3, delay: 0.2 }
                }
              },
              closed: {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                opacity: 0,
                transition: {
                  clipPath: { duration: 0.5 },
                  opacity: { duration: 0.3 }
                }
              },
            }}
            initial="closed"
            className="toggle-menu fixed z-20 top-0 left-[50%] -translate-x-[50%] w-full h-screen bg-[#2c2c2c] p-10"
          >
            <div className="toggle-cont flex w-full h-full">
              <div className="nav-left flex flex-col items-center justify-start w-full h-[80vh]">

                {/* Mobile Navigation Links */}
                <div className="nav-links w-[100vw] flex flex-col items-center justify-center gap-8 h-full relative">
                  <div className="nav-cont absolute top-0 left-[4%] -translate-x-[1%] -translate-y-[35%] flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
                    <h1>JG</h1>
                  </div>
                  {navLinks.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={linkVariants1}
                      custom={i}
                      initial="closed"
                      animate={btnClick ? "open" : "closed"}
                      className="flex flex-col w-[40vw] items-center gap-2 py-2 px-4"
                    >
                      <a
                        className="link text-[8vw] uppercase font-semibold"
                        href={item.id}
                        onClick={(e) => {
                          smoothScroll(e, item.id);
                          btnClicked();
                        }}
                      >
                        {item.link}
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Resume Button for Mobile */}
                <div className="flex items-center justify-center w-[40vw] -mt-20">
                  <a
                    className="Resume btn"
                    href={Resume}
                    download="JainishGamit_Resume.pdf"
                  >
                    <Button text="Resume" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </MotionConfig>

        {/* Hamburger Menu Button */}
        <div className="menu w-[10vw] h-[10vw] flex items-center justify-evenly rounded-full md:hidden">
          <motion.div
            onClick={btnClicked}
            animate={btnClick ? "open" : "closed"}
            className="hamburger cursor-pointer togggle-btn w-[10vw] h-[10vw] relative z-30 rounded-full"
          >
            {/* Top Line */}
            <motion.span
              style={{ bottom: "60%", right: "0%", x: "0%", y: "-10%" }}
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  width: ["3vw", "3vw", "5vw"],
                  right: ["0%", "50%", "50%"],
                  x: ["0%", "50%", "50%"],
                  y: ["-50%", "-50%", "-50%"],
                  top: ["38%", "50%", "50%"],
                  transition: {
                    top: { delay: 0.2 },
                    rotate: { delay: 0.2 },
                    ease: [0.6, 0.01, -0.05, 0.95]
                  }
                },
                closed: {
                  rotate: ["45deg", "0deg", "0deg"],
                  width: ["5vw", "3vw", "3vw"],
                  right: ["50%", "50%", "0%"],
                  x: ["50%", "50%", "0%"],
                  top: ["50%", "50%", "38%"],
                  y: ["-50%", "-50%", "-50%"],
                  transition: {
                    top: { delay: 0.2 },
                    rotate: { delay: 0.2 },
                    ease: [0.6, 0.01, -0.05, 0.95]
                  }
                }
              }}
              className='absolute h-[2px] bg-zinc-100 toped'
            />

            {/* Middle Line */}
            <motion.span
              style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
              variants={{
                open: {
                  width: ["10vw", "10vw", "0vw"],
                },
                closed: {
                  width: ["0vw", "10vw", "10vw"],
                }
              }}
              className='absolute h-[2px] bg-zinc-100 centered'
            />

            {/* Bottom Line */}
            <motion.span
              style={{ bottom: "30%", left: "0%", x: "0%", y: "-40%" }}
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                  top: ["60%", "50%", "50%"],
                  width: ["3vw", "3vw", "5vw"],
                  left: ["0%", "0%", "50%"],
                  x: ["0%", "-50%", "-50%"],
                  y: ["-20%", "-50%", "-50%"],
                  transition: {
                    top: { delay: 0.2 },
                    rotate: { delay: 0.2 }
                  }
                },
                closed: {
                  rotate: ["-45deg", "0deg", "0deg"],
                  top: ["50%", "50%", "60%"],
                  width: ["5vw", "5vw", "3vw"],
                  left: ["50%", "50%", "0%"],
                  x: ["-50%", "-50%", "0%"],
                  y: ["-50%", "-50%", "-20%"],
                  transition: {
                    top: { delay: 0.2 },
                    rotate: { delay: 0.2 }
                  }
                }
              }}
              className='absolute h-[2px] bg-zinc-100 bottomed'
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
