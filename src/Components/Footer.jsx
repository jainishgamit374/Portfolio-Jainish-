import React, { useEffect } from 'react'

const Footer = () => {


    const navLinks = [
        { link: "About", id: "#about" },
        { link: "Project", id: "#project" },
        { link: "Services", id: "#services" },
        { link: "Testiomonials", id: "#testiomonials" },
    ];
    useEffect(() => {
        const smoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href");
            if (targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                    });
                }
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        };

        const links = document.querySelectorAll('.footer-links a');
        links.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', smoothScroll);
            });
        };
    }, []);

    return (
        <>
            <div className="relative w-full  py-10 pb-0 overflow-hidden bg-zinc-50">
                <div className="heading max-w-screen-xl h-[60vh] mx-auto flex items-center justify-between flex-col  px-4 text-black">
                    <div className="footer-links w-full flex items-center flex-row justify-center py-1">
                        {navLinks.map((item, i) => (
                            <div key={i} className="w-[14%] h-[10vh] flex items-center justify-center ">
                                <a className='cursor-pointer links' href={item.id}>{item.link}</a>
                            </div>
                        ))}
                    </div>

                    <div className="footer-logo py-5">
                        <h1 className='footertext text-5xl font-["Oxta]'>JG</h1>
                    </div>

                    <div className="w-full h-[8vh] flex items-center justify-center gap-20 ">
                        <i className='ri-instagram-line text-4xl'></i>
                        <i className='ri-linkedin-box-fill text-4xl'></i>
                        <i className='ri-github-fill text-4xl'></i>
                        <i className="ri-twitter-x-line text-4xl"></i>
                    </div>
                    <div className="w-full py-4 flex items-center justify-center">
                        <p>All Rights Reserved. @ copyright Jainish Gamit 2024</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer