import React from 'react';
import image from '../assets/images/cvphoto.png';
import { BiCurrentLocation, BiEnvelope, BiPhone, BiMoon, BiSun, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { motion } from 'motion/react';

const HomeLeft = ({darkMode, toggleDarkMode}) => {
    return (
        <div className='min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700'>
                
            <div className="flex flex-col gap-5"></div>

                <div className="flex flex-col items-center justify-center gap-5 ">

                    <img src={image} alt="" className='w-32 rounded-full'/>


                    <motion.div className="text-center space-y-1" initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}}>
                        <h1 className="text-4xl font-light">Caleb <span className='font-semibold'>Regan</span>
                        </h1>
                        <h3 className ='text-xl font-light'>Front-End Developer</h3>
                        <h3 className ='text-base font-thin pb-10 text-gray-800 dark:text-gray-200'>DevOps Engineer</h3>
                        <h3 className ='text-base font-thin pb-10 text-gray-1000 dark:text-gray-100'>Cloud Security Consultant</h3>

                    </motion.div>

                    <button className='absolute md:left-10 md:top-8 md:-translate-y-20 lg:left-10 lg:top-8 lg:-translate-y-20 sm:right-10 sm:top-10 sm:translate-y-0 xs:right-10 xs:top-0 xs:-translate-y-8' onClick={toggleDarkMode}> 
                        <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} >
                        {
                            darkMode ? (
                                <BiSun className ='text-2xl'/>
                            ) : (
                                <BiMoon className ='text-2xl'/>
                            )
                            }

                        </motion.div>
                        </button>
                    </div>
                    <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                        <ul className="space-y-3"> 
                            <li className="flex items-center gap-2">
                                <BiCurrentLocation className="text-xl"/>
                                <span>3340 Nancy Drive, Auburn, California</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <BiEnvelope className="text-xl"/>
                                <span>calebregann@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <BiPhone className="text-xl"/>
                                <span>+1 818-519-7378</span>
                            </li>


                        </ul>
                    </motion.div>


                    {/* <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                        <h1 className='text-base font-semibold md:text-2xl'>
                            SOCIAL
                        </h1>
                        <ul className="space-y-3"> 
                            <li className="flex items-center gap-2">
                                <BiLogoGithub className="text-xl"/>
                                <span>github@username</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <BiLogoInstagram className="text-xl"/>
                                <span>instagram@username</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <BiLogoLinkedin className="text-xl"/>
                                <span>linkedin@username</span>
                            </li>


                        </ul>
                    </div> */}
                        <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                            <motion.h1 initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} className='text-base font-semibold md:text-2xl'>EDUCATION</motion.h1>
                                <motion.ul initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}}>
                                    <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                                        <span className = 'font-semibold'>
                                            Bachelor of Science in Cybersecurity
                                        </span>
                                        <span className = 'font-light italic'>
                                            Purdue University Global
                                        </span>
                                        <span className='text-small text-gray-400'>
                                            2023 - Present
                                        </span> 
                                    </li>
                                </motion.ul>
                                <motion.ul initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}}>
                                    <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                                        <span className = 'font-semibold'>
                                            Undergraduate Coursework in Neuroscience
                                        </span>
                                        <span className = 'font-light italic'>
                                            University of Colorado Boulder
                                        </span>
                                        <span className='text-small text-gray-400'>
                                            2020 - 2022
                                        </span> 
                                    </li>
                                </motion.ul>
                        </motion.div>
                    <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}}className="flex flex-col items-start justify-start border-b p-5 dark:border-gray-700">
                        <h1 className='text-base font-semibold md:text-2xl'>SKILLS</h1>
                        <p className='flex flex-col items-start justify-start text-sm gap-y-10 font-lighter italic'>Skills & Experience</p>

                        <div className="flex flex-wrap gap-3 pt-5">
                            <div className="flex flex-wrap gap-3 justify-center">
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Front-End Development</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Information Security</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Data Analysis</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Responsive Design</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Code Review</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">API Integration</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Collaboration</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Problem Solving</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Cloud Services</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Automation Scripting</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Network Security</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">DevOps Practices</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Database Management</span>


                           
                            </div>
                        </div>
                    </motion.div>
                        <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} className="flex flex-col items-start justify-start border-b p-5 dark:border-gray-700">
                        <motion.h1 initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} className='text-base font-semibold md:text-2xl'>TECHNOLOGIES</motion.h1>
                        <p className='flex flex-col items-start justify-start text-sm gap-y-10 font-lighter italic'>Known Coding Languages & Softwares</p>
                        <div className="flex flex-wrap gap-3 pt-5"></div>
                            <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}}className="flex flex-wrap gap-3 justify-center">
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Python</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">SQL</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Azure</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">JavaScript</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">React</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Docker</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Linux Systems</span>

                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">HTML</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">CSS</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Node.js</span>
                                <span className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs">Git</span>                            </motion.div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                            <motion.h1 initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}}className='text-base font-semibold md:text-2xl'>HOBBIES</motion.h1>

                            <div className="flex flex-wrap gap-16 p-3">
                                <ul className = 'flex list-disc flex-col gap-3'>
                                    <li>Music</li>
                                    <li>Programming</li>
                                    <li>Video Games</li>
                                    <li>Fitness</li>
                                </ul>
                                
                            </div>
                        </motion.div>
                            <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
                            <h1 className='text-base font-semibold md:text-2xl'>LANGUAGES</h1>


                                <ul className = 'flex list-disc flex-col gap-12 md:text-lg'>
                                    <li>English</li>
                                </ul>
                                

                        </motion.div>
                    </div>    
    )
}

export default HomeLeft;
