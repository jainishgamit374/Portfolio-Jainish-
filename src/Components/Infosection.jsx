import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Infosection = () => {

  useGSAP(() => {
    const reveals = gsap.utils.toArray('.revel');
    const icon = document.querySelector('.icone');

    gsap.set(reveals, { y: 100, opacity: 0 });
    gsap.set(icon, { rotate: -190 });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".triggerTextFill",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    })

    t1.to(reveals, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

  });

  return (
    <>
      <div className="triggerTextFill w-full h-screen mx-auto text-center py-14 overflow-hidden">
        <div className="inf-cont  relative w-full h-full flex items-center flex-col justify-center">

          <h1 className="text-[10vw] h-[5vh] lg:h-[20vh] leading-none font-semibold uppercase overflow-hidden">
            <span className="block revel">Elevate you</span>
          </h1>
          <h1 className="text-[10vw] h-[5vh] lg:h-[20vh] leading-none font-semibold uppercase overflow-hidden">
            <span className="block revel">
              <span>Brand</span>
              <span className="p-4">
                <i className=" ri-arrow-right-up-line text-[8vw] border-2 rounded-full text-[#D6CC53]"></i>
              </span>
              <span>with my</span>
            </span>
          </h1>
          <h1 className="text-[10vw] h-[5vh] lg:h-[20vh] leading-none font-semibold uppercase overflow-hidden">
            <span className="block revel">creative magic</span>
          </h1>

          {/* 
          <h1
            ref={textRef}
            className="text-[10vw] leading-none font-semibold uppercase">
            Elevate your <br />
            Brand
            <span className="p-4">
              <i className="ri-arrow-right-up-line text-[8vw] border-2 rounded-full text-[#D6CC53] "></i>
            </span>
            with my
             <br /> creative magic
          </h1> */}


        </div>
      </div>
    </>
  );
};

export default Infosection;
