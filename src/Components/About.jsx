import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";
import { profile, TechHtml, TechCss, TechJavascript, TechReact, TechTailwind, TechTypescript, TechFigma, TechFramer, TechGit } from '../utils';
import gsap, { Elastic } from 'gsap'
import { useGSAP } from "@gsap/react";


// import git from "../assets/TechStack/github.svg";

const About = () => {

    const [isHovered, setIsHovered] = useState(false);

    useGSAP(() => {
        const profcont = document.querySelector('.profile-cont');
        const prof = document.querySelector('.profile');

        // Mouse move stuff //
        const activateMagneto = (event) => {
            let boundBox = profcont.getBoundingClientRect();
            const magnetoStrength = 40
            const magnetoTextStrength = 80

            const shiftX = ((event.clientX - (boundBox.left)) / profcont.offsetWidth) - 0.5
            const shiftY = ((event.clientY - (boundBox.top)) / profcont.offsetHeight) - 0.5

            //  Move the button to it's new position //
            gsap.to(profcont, {
                duration: 0.5,
                x: shiftX * magnetoStrength,
                y: shiftY * magnetoStrength,
                ease: 'power4.easeOut'
            })

            //  Move the text to it's new position //
            gsap.to(prof, {
                duration: 0.5,
                x: shiftX * magnetoTextStrength,
                y: shiftY * magnetoTextStrength,
                ease: 'power4.easeOut'
            })


        }

        // Mouse leave stuff //
        const resetMagneto = () => {
            gsap.to(profcont, {
                duration: 1.5,
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });

            gsap.to(prof, {
                duration: 1.5,
                x: 0,
                y: 0,
                ease: Elastic.easeOut
            });
        }

        // Add event listeners for mousemove and mouseleave
        profcont.addEventListener('mousemove', activateMagneto);
        profcont.addEventListener('mouseleave', resetMagneto);

    })
    

    // const techStack = [
    //     {
    //         path: "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20preserveAspectRatio%3D%22xMinYMin%20meet%22%20viewBox%3D%220%200%20256%20361%22%3E%3Cpath%20fill%3D%22%23E44D26%22%20d%3D%22M255.555%2070.766l-23.241%20260.36-104.47%2028.962-104.182-28.922L.445%2070.766h255.11z%22%2F%3E%3Cpath%20fill%3D%22%23F16529%22%20d%3D%22M128%20337.95l84.417-23.403%2019.86-222.49H128V337.95z%22%2F%3E%3Cpath%20fill%3D%22%23EBEBEB%22%20d%3D%22M82.82%20155.932H128v-31.937H47.917l.764%208.568%207.85%2088.01H128v-31.937H85.739l-2.919-32.704zM90.018%20236.542h-32.06l4.474%2050.146%2065.421%2018.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z%22%2F%3E%3Cpath%20d%3D%22M24.18%200h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83%2016.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47%200h16.923l10.41%2017.062L168.203%200h16.93v48.558h-16.164V24.49l-11.166%2017.265h-.28L146.35%2024.49v24.068h-15.88V0zM193.21%200h16.235v32.508h22.824v16.05h-39.06V0z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M127.89%20220.573h39.327l-3.708%2041.42-35.62%209.614v33.226l65.473-18.145.48-5.396%207.506-84.08.779-8.576H127.89v31.937zM127.89%20155.854v.078h77.143l.64-7.178%201.456-16.191.763-8.568H127.89v31.86z%22%2F%3E%3C%2Fsvg%3E"
    //     },
    //     {
    //         path: "../assets/TechStack/css.svg"
    //     },
    //     {
    //         path: "../assets/TechStack/javascript.svg"
    //     },
    //     {
    //         path: "../assets/TechStack/react.svg"
    //     },
    //     {
    //         path: "../assets/TechStack/tailwind-css.svg"
    //     },
    //     {
    //         path: "../assets/TechStack/typescript.svg"
    //     },
    //     {
    //         path: "../assets/TechStack/Figma.svg"
    //     },
    //     {
    //         path: "../assets/TechStack/framer.svg"
    //     },
    //     {
    //         path: "../assets/TechStack/github.svg"
    //     }
    // ];


    return (
        <div className="relative w-full text-center py-14 overflow-hidden" id="about">
            <div className="heading max-w-screen-xl mx-auto flex items-center justify-between pb-12 px-4">
                <h1 className='text-6xl uppercase font-semibold tracking-tight'>About me</h1>
                <div className="w-1/3 h-1 bg-white"></div>
            </div>
            <div className="inf-cont w-full h-[150vh] bg-white flex items-center justify-center ">
                <div className="heading w-full h-full mx-auto flex items-center flex-col gap-4  p-14 px-12 ">
                    <div className="grid grid-cols-5 gap-4 w-full h-[60vh]">
                        <div className="col-span-3 rounded-3xl p-10 pt-16 flex items-start flex-col gap-8 faq-bga img-cont bg-[#232323]">
                            <h1 className='text-xl'>I am Jainish Gamit.</h1>
                            <div className="paragraph">
                                <p className='text-start py-2 text-[1.5vw]'>A creative developer with a passion for design and development. From concept to launch, I am involved in every step of the process. </p>
                                <p className='text-start py-2 text-[1.5vw]'>User experience, visually striking design, engaging interactions and impeccable typography are my top priorities. </p>
                            </div>
                        </div>
                        <div className="col-span-2 bg-[#232323] rounded-3xl p-10 flex items-center justify-center faq-bga">
                            <div className="profile-cont size-44 rounded-full bg-zinc-700 overflow-hidden drop-shadow-2xl shadow-gray-50 flex items-center justify-center">
                                {/* <img className='profile w-3/4 h-3/4 bg-zinc-100 object-cover rounded-full' src={profile} alt="Profil-Image" /> */}
                                <img className='profile w-[80%] h-[80%] bg-zinc-200 object-cover rounded-full' src={profile} alt="Profil-Image" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full h-[45vh]">
                        <div className="bg-[#232323] rounded-3xl faq-bga">
                            <div className="project-container w-full h-full flex flex-col items-center justify-center">
                                <h1 className='text-[6vw]'>20+</h1>
                                <h2 className='text-[1.8vw] leading-none'>Compleat <br /> Project</h2>
                            </div>
                        </div>
                        <div className="bg-[#232323] rounded-3xl faq-bga">
                            <div className="project-container w-full h-full p-10 flex flex-col items-center justify-center">
                                <h1 className='text-[6vw]'>1.5Year</h1>
                                <h2 className='text-[1.8vw] leading-none'>Development <br /> & Designing</h2>
                            </div>
                        </div>
                        <div className="col-span-2 rounded-3xl bg-[#232323] faq-bga">
                            <div className="project-container w-full h-full p-10 flex flex-col items-center justify-center">
                                <span className="text-effect">
                                <p className='text-xl'>Helping startups, B2B Services, small businesses and Creatives with Customization design solutions that include landing pages & website Creations.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 w-full h-[35vh]">
                        <div className="col-span-2 rounded-3xl bg-[#232323] faq-bga">
                            <div className="project-container w-full h-full px-10 flex flex-col items-center gap-8 overflow-hidden">
                                <h1 className="py-2">My Tech Stack</h1>
                                <div className="relative w-full h-1/2 flex gap-20 flex-shrink-0 items-center px-4 py-7 overflow-hidden">
                                    <motion.div
                                        initial={{ x: "0" }}
                                        animate={{ x: "-100%" }}
                                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                                        className="techstack-container flex gap-16">
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full ml-2" src={TechHtml} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechCss} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full ml-[.5vw]" src={TechJavascript} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechReact} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechTailwind} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechTypescript} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechFigma} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechFramer} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechGit} />
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ x: "0" }}
                                        animate={{ x: "-100%" }}
                                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                                        className="techstack-container flex gap-16">
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full ml-2" src={TechHtml} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechCss} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full ml-[.5vw]" src={TechJavascript} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechReact} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechTailwind} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechTypescript} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechFigma} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechFramer} />
                                        </div>
                                        <div className="w-16 h-16 bg-white p-3 rounded-full">
                                            <img className="w-full h-full" src={TechGit} />
                                        </div>
                                    </motion.div>
                                    <div className='absolute top-1/2 -translate-y-1/2 left-0 h-full w-full bg-gradient-to-r from-[#232323] via-transparent to-[#232323]'></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 rounded-3xl bg-[#232323] flex faq-bga">
                            <div className="project-container w-full h-full p-10 flex flex-col items-center justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="primary-btn h-16 w-[18vw] px-5 py-6  bg-white hover:bg-gray-100 text-black flex flex-col items-center justify-center overflow-hidden rounded-full">
                                    <motion.div
                                        transition={{ ease: easeInOut }}
                                        className="flex w-full items-center justify-center gap-5 ">
                                        <span className="text-2xl uppercase font-semibold">Contact Us</span>
                                        <motion.div
                                            className="p-1"
                                            animate={isHovered ? { x: "50%", rotate: "-45deg" } : { x: "0" }}
                                        >
                                            <i className="ri-arrow-right-line text-xl font-semibold"></i>
                                        </motion.div>
                                    </motion.div>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About