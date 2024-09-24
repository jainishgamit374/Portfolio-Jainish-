import React, { useEffect } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import styles from "./Hero.module.css"
import Navbar from "./Navbar";


const COLORS_TOP = ["#F3F4F6", "#fef08a"];

const Hero = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
     <Navbar/>
      <motion.section className="relative grid h-[150vh] place-content-center overflow-hidden  px-4 py-24 text-white">
        <div className="w-full h-full flex items-center justify-center">
          <div className="hero-text absolute w-full  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[7]  text-center">

            <h1 className="text-[15vw] hr-text uppercase tracking-tight leading-[12vw] font-thin text-white">
              {"Front-End".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h1>
            <h1 className="text-[15vw] hr-text uppercase tracking-tight leading-[12vw] font-thin text-white">
              {"Developer".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h1>

          </div>
          <div className="hero-img-cont absolute z-[1]  flex items-center justify-center w-1/2 h-[60%] mt-20 bg-yellow-200 rounded-full">
            <div className="hero-img  w-[100%] h-[110%] mb-9 -rotate-[2deg] rounded-full "></div>
          </div>
        </div>
        <div className="hero-btn-cont absolute top-[92%] left-1/2 -translate-x-1/2 z-[7]">
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-2 rounded-full bg-gray-950/10 px-5 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            <h1 className="uppercase">Explore More !</h1>

            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>

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
