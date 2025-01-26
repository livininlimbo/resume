import React from 'react';
import { IoIosAdd, IoIosArrowForward } from 'react-icons/io';
import { BiPhone, BiEnvelope } from 'react-icons/bi';
import { Header } from './Header';

const HomeRight = () => {
    return (
        <div className='min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white'>
            {/* <Header /> */}
            <main className ="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
                <div className="space-y-5">
                    <h1 className="flex flex-col pt-4 items-start justify-start text-2xl font-bold md:text-3xl">Professional Summary 
                        {/* <span className="text-[#F76C6C]">John Doe</span> */}
                        <p className='mt-10 text-lg text-gray-600 dark:text-gray-400 md:text-base sm:text-sm font-extralight flex flex-col'>
                        Front-End Web Developer with experience creating user-friendly interfaces that boost engagement and satisfaction. 
                        Excels in team collaboration, utilizing responsive design and JavaScript frameworks to enhance performance and user experience. 
                        Adept at troubleshooting and resolving front-end issues, contributing to increased website traffic and user retention. 
                        Experienced in automating processes with Python as well as storing and manipulating data with SQL. 
                        Proficient with Docker and Azure; familiar with Kubernetes and AWS.
                        </p>
                    </h1>
                    <div className="space-y-10">
                        <h1 className="text-2xl font-bold md:text-3xl flex flex-col pt-8 items-start justify-start">Experience
                            <div className = 'flex flex-col pt-6 lg:flex-row lg:gap-20'>
                            <ul>
                                    <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                                        <span className='text-xl font-semibold'>
                                            Front-End Web Developer
                                        </span>
                                        <span className='flex flex-wrap text-lg font-light italic text-gray-700 dark:text-gray-300'>
                                            Complex Carbon Co.
                                        </span>
                                        <span className='flex flex-wrap text-sm italic font-light text-gray-400 dark:text-gray-600'>
                                            Remote
                                        </span>
                                        <span className='text-base font-light text-gray-400'>
                                            Aug 2023 - Present 
                                        </span>
                                        <div className='relative flex flex-col gap-1 border-dashed border-l p-6'>
                                            <li className='flex items-center text-sm font-light -pt-2 mt-0'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                    <span>Developed user-friendly interfaces enhancing user engagement and satisfaction.
                                                    </span>
                                            </li>
                                            <li className='flex items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>Collaborated with design teams to implement responsive and accessible web solutions.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>Utilized JavaScript frameworks to optimize page load times and performance.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>Experience with troubleshooting and resolving front-end issues to ensure a seamless user experience.
                                                </span>
                                            </li>
                                            <li className='flex items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>Produced measurable improvements in website traffic and user retention.</span>
                                            </li>

                                        </div>
                                    </li>
                                </ul> 
                                
                            </div>
                        </h1>

                        </div>
                        <div className="space-y-10">
                        <h1 className="text-2xl font-bold md:text-3xl flex flex-col pt-8 items-start justify-start">Relevant Courses
                            <div className = 'flex flex-col pt-6 lg:flex-row lg:gap-20'>
                            <ul>
                                    <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                                        <span className='text-xl font-semibold'>
                                            Bachelor of Science in Cybersecurity
                                        </span>
                                        <span className='flex flex-wrap text-lg font-light italic text-gray-700 dark:text-gray-300'>
                                            Purdue University Global
                                        </span>
                                        <span className='text-base font-light text-gray-400'>
                                            2023 - Present 
                                        </span>
                                        <span className='text-sm font-light italic text-gray-300 dark:text-gray-500 pt-.5 -translate-x-0'>
                                            Expected Graduation: Aug 2026
                                        </span>
                                        <div className='relative flex flex-wrap gap-16 border-l border-dashed border- p-6 pt-2'>
                                            <ul className='-mb-8'>
                                            <h1 className='-translate-x-2'>
                                            <span className='text-base bold -translate-x-4 -translate-y-2'>Completed Courses
                                            </span>
                                            </h1>
                                            <li className='flex items-center text-sm font-light pt-4 mt-0'> 
                                            </li>
                                            <li className='flex flex-row items-center text-sm font-light -pt-2 mt-0'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                    <span>IT104 Introduction to Cybersecurity
                                                    </span>
                                            </li>
                                            <li className='flex flex-row items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>IT273 Networking Concepts
                                                </span>
                                            </li>
                                            <li className='flex flex-row items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>IN203 Networking With Microsoft Technologies
                                                </span>
                                            </li>
                                            <li className='flex flex-row items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>IT286 Network Security Concepts</span>
                                            </li>
                                            <li className='flex flex-row items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>MM212 College Algebra
                                                </span>
                                            </li>
                                            <li className='flex flex-row items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>MM250 Discrete Mathematics
                                                </span>
                                            </li>
                                            <li className='flex flex-row items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>IT275 Linux System Administration
                                                </span>
                                            </li>
                                            <li className='flex flex-row items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>IT244 Python Programming
                                                </span>
                                            </li>
                                            </ul>
                                            
                                            <ul className='-mb-8'>
                                            <h1 className='-translate-x-2 '>
                                            <span className='text-base bold -translate-x-4 -translate-y-2 '>Courses In Progress
                                            </span>
                                            </h1>
                                            <li className='flex items-center text-sm font-light pt-4 mt-0'> 
                                            </li>
                                            <li className='flex items-center text-sm font-light -pt-2 mt-0'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                    <span>IN205 Routing and Switching I
                                                    </span>
                                            </li>
                                            <li className='flex items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>IN206 Routing and Switching II
                                                </span>
                                            </li>
                                            <li className='flex items-center text-sm font-light pt-2'>
                                                <IoIosArrowForward className='text-base -translate-x-2'/>
                                                <span>IT262 Certified Ethical Hacking I
                                                </span>
                                            </li>
                                            </ul>

                                        </div>
                                    </li>
                                </ul> 
                                
                            </div>
                        </h1>

                        </div>
                        
                        <div className="space-y-10">
                        <h1 className="text-2xl font-bold md:text-3xl flex flex-col pt-8 items-start justify-start">Certificates
                            <div className = 'flex flex-col pt-6 justify-start items-center lg:flex-row lg:gap-20 pb-20'>
                            <ul>
                                    <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                                        <span className='text-xl font-semibold'>
                                            Google Cybersecurity
                                        </span>
                                        <span className='flex flex-wrap text-lg font-light italic text-gray-700 dark:text-gray-400'>
                                            Coursera
                                        </span>
                                        <span className='text-base font-light text-gray-400'>
                                            Jun 2023 - Oct 2023 
                                        </span>
                                        
                                    </li>
                                </ul> 
                                
                            </div>
                        </h1>

                        </div>
                        <div className="space-y-10">
                        <h1 className="text-2xl font-bold md:text-3xl -mt-12" >References
                            <div className = 'flex flex-col justify-start items-start lg:flex-row lg:gap-20 '>
                                <ul >
                                    <li className='relative flex flex-col gap-1 p-6 pt-8 pb-2 '>

                                        <span className='text-xl'>
                                            Stephen Falsetti
                                        </span>
                                        <span className='flex flex-wrap text-base font-light foitalic text-gray-700 dark:text-gray-400'>
                                            Complex Carbon Co, Owner
                                        </span>

                                    </li>
                                    <li className="flex items-center gap-2 text-sm pl-6 pb-2 font-light">
                                        <BiEnvelope className="text-sm"/>
                                        <span>falsetti.stephen@gmail.com</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm pl-6 font-light">
                                        <BiPhone className="text-sm"/>
                                        <span>+1 650-862-8380</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li className='relative flex flex-col gap-1 p-6 pt-8 pb-2'>

                                        <span className='text-xl'>
                                            Mike Gardner
                                        </span>
                                        <span className='flex flex-wrap text-base font-light foitalic text-gray-700 dark:text-gray-400'>
                                            Rocky Mountain Home Preservation, Owner
                                        </span>

                                    </li>
                                    <li className="flex items-center gap-2 text-sm pl-6 pb-2 font-light">
                                        <BiEnvelope className="text-sm"/>
                                        <span>jmgardner@gmail.com</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm pl-6 font-light">
                                        <BiPhone className="text-sm"/>
                                        <span>+1 650-283-6392</span>
                                    </li>
                                </ul>
                                {/* <ul>
                                    <li className='relative flex flex-col gap-1 p-6 pt-8 pb-2'>

                                        <span className='text-xl'>
                                            Ted Wolcott
                                        </span>
                                        <span className='flex flex-wrap text-base font-light foitalic text-gray-700 dark:text-gray-400'>
                                            Quokka, Chief of Business Development & Partnerships
                                        </span>

                                    </li>
                                    <li className="flex items-center gap-2 text-sm pl-6 pb-2 font-light">
                                        <BiEnvelope className="text-sm"/>
                                        <span>tedsemail@gmail.com</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm pl-6 font-light">
                                        <BiPhone className="text-sm"/>
                                        <span>+1 888-888-8888</span>
                                    </li>
                                </ul> */}
                                
                            </div>
                        </h1>

                        </div>
                </div>

            </main>

            
        </div>
    )
}

export default HomeRight;