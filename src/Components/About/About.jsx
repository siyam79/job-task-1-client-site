

import { AiOutlinePoundCircle, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { SiSecurityscorecard } from 'react-icons/si';
import { FaBahai } from 'react-icons/fa';
import { motion } from "framer-motion"
import { useEffect } from 'react';
const About = () => {

    useEffect(() => {
        document.title = " Job-Task | About ";
    }, []);
    return (
        <div>
            <div className="px-4 lg:px-6 w-[90%] mx-auto my-8">
                <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 ">
                    <div>
                        <motion.h1
                        initial={{x:-100 }}
                        animate={{x:[0,900,0]}}
                        transition={{
                            duration:3,
                            delay:0.2
                        }}
                        whileHover={{scale:0.9 , opacity:0.2}}
                        >
                        <img className="w-[500px]" src="https://imgdownloader.com/static/assets/images/svg/download-image-instagram.svg" alt="" />
                        </motion.h1>
                    </div>
                    <div className="md:w-3/5 mx-auto px-2 ">
                        <h1 className=" font-bold ">WHY CHOOSE US</h1>

                        <h1 className="text-3xl text-gray-500 font-semibold mb-4 md:4/5 "> <span className="text-fuchsia-600 font-bold ">Job Task</span> Website Only For Your <span className="text-fuchsia-600 font-bold ">Job Task</span></h1>
                        <motion.h1
                            initial={{ x: -100 }}
                            animate={{ x: [0, 900, 0] }}
                            transition={{
                                duration: 3,
                                delay: 0.2
                            }}
                            whileHover={{ scale: 0.9, opacity: 0.2 }}
                        >
                            <p className="text-3xl text-gray-500 font-semibold mb-3 md:4/5" > Phosfluorescently develop empowered communit rather than front-end networks Competently formula revolut infrastructures with hi standards</p>
                        </motion.h1>


                        <ul>
                            <div className=' flex  items-center gap-2 mb-1  '>
                                <span className=' bg-green-500 px-1.5 py-1.5 rounded-full '>
                                    <AiOutlinePoundCircle className=' text-xl  text-gray-600 '></AiOutlinePoundCircle></span><li className='text-xl font-bold '>Payment Gateway Secure</li>
                            </div>
                            <div className=' flex  items-center gap-2 mb-1  '>
                                <span className=' bg-green-500 px-1.5 py-1.5  rounded-full '>
                                    <SiSecurityscorecard className=' text-xl  text-gray-600 '></SiSecurityscorecard></span><li className='text-xl font-bold '>Quick Delivery & Fast Load</li>
                            </div>
                            <div className=' flex  items-center gap-2 mb-1 '>
                                <span className=' bg-green-500 px-1.5 py-1.5  rounded-full '>
                                    <FaBahai className=' text-xl  text-gray-600 '></FaBahai></span><li className='text-xl font-bold '> Work Per Hour & Screenshots</li>
                            </div>

                        </ul>
                        <button className="bg-fuchsia-600 px-6 py-2 rounded-2xl font-bold text-white mt-2 hover:bg-fuchsia-800 "> Learn More </button>

                    </div>
                </div>

            </div>
            <div className='px-4 lg:px-6 w-full  mx-auto my-10 bg-base-200 py-10  rounded-lg '>
                <div className=' flex flex-col md:flex-row justify-between items-center gap-8 '>
                    <div className=' md:w-1/2 mx-auto px-4 '>
                        <motion.h1
                        initial={{x:-50 }}
                        animate={{x:[0,900,0]}}
                        transition={{
                            duration:3,
                            delay:0.2
                        }}
                        whileHover={{scale:0.9 , opacity:0.2}}
                        >
                       <h1 className=' text-lg  font-semibold '> <span className='text-3xl font-bold text-fuchsia-600 '>200k+</span> Customers Regular Visit Our Site.Try it now!</h1>
                        <p className=' text-xl  font-bold  py-2 '>Enthusiastically mesh user friendly content with long-term high-impact architectures. Proactively underwhelm .</p>
                        </motion.h1>

                    </div>

                    {/* start  */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-10 '>
                        <div className=' space-y-8 '>
                            <div className=' flex items-center gap-4  '>
                                <span className=' bg-green-500 px-1.5 py-1.5 rounded-full '>
                                    <AiOutlineUsergroupAdd className=' text-4xl  text-gray-600 '></AiOutlineUsergroupAdd></span>
                                <div>
                                    <h1 className=' text-xl text-fuchsia-600 font-semibold '> 29,945 <span className='text-3xl  font-bold text-cyan-600 '>+</span> </h1>
                                    <p>Job Boking</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-4  '>
                                <span className=' bg-green-500 px-1.5 py-1.5 rounded-full '>
                                    <AiOutlineUsergroupAdd className=' text-4xl  text-gray-600 '></AiOutlineUsergroupAdd></span>
                                <div>
                                    <h1 className=' text-xl text-fuchsia-600 font-semibold '> 2,99,467<span className='text-3xl  font-bold text-cyan-600 '>+</span> </h1>
                                    <p>Member</p>
                                </div>
                            </div>


                        </div>
                        <div className=' space-y-8 '>
                            <div className=' flex items-center gap-4  '>
                                <span className=' bg-green-500 px-1.5 py-1.5 rounded-full '>
                                    <AiOutlineUsergroupAdd className=' text-4xl  text-gray-600 '></AiOutlineUsergroupAdd></span>
                                <div>
                                    <h1 className=' text-xl text-fuchsia-600 font-semibold '>1K<span className='text-3xl  font-bold text-cyan-600 '>+</span>  </h1>
                                    <p>Club</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-4  '>
                                <span className=' bg-green-500 px-1.5 py-1.5 rounded-full '>
                                    <AiOutlineUsergroupAdd className=' text-4xl  text-gray-600 '></AiOutlineUsergroupAdd></span>
                                <div>
                                    <h1 className=' text-xl text-fuchsia-600 font-semibold '> 46,74,404<span className='text-3xl  font-bold text-cyan-600 '>+</span> </h1>
                                    <p>Payments</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;