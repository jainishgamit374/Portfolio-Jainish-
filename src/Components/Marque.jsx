import { motion } from 'framer-motion'
import React from 'react'


const Marque = () => {

    return (
        <>
            <div className="w-full">
                <div className="relative w-full  mx-auto text-center py-14 overflow-hidden">
                    <div className="marque-container w-full h-[24vh] bg-[#D6CC53] -rotate-2">
                        <div className="marque w-full h-[22vh] flex items-center gap-14 text-black bg-white px-4 overflow-x-hidden">
                            {/* {["Development", "Designing", "Seo", "Ui/Ux", "Branding"].map((item, i) => ( */}
                            <div className="flex items-center justify-center  gap-20 ">
                                <div className="marque-items-cont marque-items flex items-center gap-20">
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Development
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Designing
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Seo
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Ui/Ux
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Branding
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                </div>
                                <div className="marque-items-cont marque-items flex items-center gap-20">
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Development
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Designing
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Seo
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Ui/Ux
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                    <h1 className="text-5xl font-semibold uppercase">
                                        Branding
                                    </h1>
                                    <div className="circle size-8 bg-black rounded-full"></div>
                                </div>
                            </div>
                             {/* ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marque