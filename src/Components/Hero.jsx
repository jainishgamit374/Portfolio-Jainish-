import React, { useEffect } from "react";
import { Stars } from "@react-three/drei"; // 3D Stars component from Drei
import { Canvas } from "@react-three/fiber"; // Canvas for rendering 3D content
import { FiArrowRight } from "react-icons/fi"; // Icon for the button
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion"; // Animation libraries from Framer Motion

import styles from "./Hero.module.css"; // Importing CSS module for hover effects
import Navbar from "./Navbar"; // Importing Navbar component

// Array of colors for the top section's animation
const COLORS_TOP = ["#F3F4F6", "#fef08a"];

const Hero = () => {
  // Using motion value for color animation
  const color = useMotionValue(COLORS_TOP[0]);

  // Animate the color using useEffect for continuous transition
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Define border and box-shadow using motion values
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Hero section */}
      <motion.section className="relative grid h-[100vh] md:h-[100vh] lg:h-[150vh] place-content-center overflow-hidden px-4 py-24 text-white">
        
        {/* Text and image container */}
        <div className="w-full h-full flex items-center justify-center">
          
          {/* Hero text animation */}
          <div className="hero-text absolute w-full top-1/3 left-1/2 md:top-1/4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-[7] text-center">
            <h1 className="text-[18vw] md:text-[14vw] lg:text-[15vw] hr-text uppercase tracking-tight leading-none md:leading-[12vw] lg:leading-[12vw] font-thin text-white">
              {"Front-End".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h1>
            <h1 className="text-[18vw] md:text-[14vw] lg:text-[15vw] hr-text uppercase tracking-tight leading-[12vw] md:leading-[12vw] lg:leading-[12vw] font-thin text-white">
              {"Developer".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h1>
          </div>

          {/* Placeholder for hero image */}
          <div className="hero-img-cont absolute z-[1] flex items-center justify-center w-[85vw] sm:w-3/4 md:w-[70vw] lg:w-[45vw] h-[85vw] sm:h-[50%] md:h-[70vw] lg:h-[45vw] mt-10 sm:mt-16 md:mt-20 lg:mt-24 bg-yellow-200 rounded-full ">
            <div className="hero-img w-[100%] sm:w-[95%] md:w-[100%] lg:w-[95%] h-[100%] sm:h-[100%] md:h-[110%] lg:h-[100%] -mb-1 sm:mb-6 md:mb-9 lg:mt-11 -rotate-[2deg] rounded-full"></div>
          </div>
        </div>

        {/* Button container */}
        <div className="hero-btn-cont absolute top-[85%] md:top-[88%] lg:top-[92%] left-1/2 -translate-x-1/2 z-[7]">
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex w-fit items-center gap-2 rounded-full bg-gray-950/10 px-5 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            <h1 className="uppercase">Explore More !</h1>
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>

        {/* 3D stars background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </Canvas>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
