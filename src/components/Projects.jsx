import React from 'react';
import '../index.css'
import projectImage1 from '../assets/images/black.jpeg'

export const Projects = () => {
    return (
        <div className="bg-white dark:bg-black ">
            <div className="flex flex-col relative items-center justify-center border-t border-gray-200 dark:border-gray-700 pt-36 h-full ">
                <h1 className="flex text-5xl font-bold relative -pb-24 -mb-16 text-gray-800 dark:text-white">Projects</h1>

                <div className="w-full grid grid-cols relative m-5 items-center justify-center align-center translate-x-8">

                <div className="flex grid-cols relative items-center justify-center h-full p-5 m-5">
                    <h1 className="grid grid-flow-row text-2xl font-bold text-gray-800 dark:text-white justify-center text-center">Project 1
                        <img src={projectImage1} className="w-128 h-64" alt="" />
                            <p className=" grid grid-flow-row text-lg text-gray-800 dark:text-white h-full"> Text Here 
                            </p>
                    </h1>
                    
                <div className="flex grid-cols-2 relative items-center justify-center h-full p-5 m-5">
                    <h1 className="grid grid-flow-row text-2xl font-bold text-gray-800 dark:text-white grid-cols-subgrid justify-center text-center">Project 2
                        <img src={projectImage1} className="w-128 h-64 grid-cols-subgrid mix-blend-difference" alt=""/>
                            <p className="grid grid-flow-row text-lg text-gray-800 dark:text-white h-full grid-cols-subgrid"> Text Here
                            </p>
                    </h1>
                    
                <div className="flex grid-cols-2 relative items-center justify-center h-full p-5 m-5">
                    <h1 className="grid grid-flow-row text-2xl font-bold text-gray-800 dark:text-white grid-cols-subgrid justify-center text-center">Project 3
                        <img src={projectImage1} className="w-128 h-64 grid-cols-subgrid" alt=""/>
                            <p className="grid grid-flow-row text-lg text-gray-800 dark:text-white h-full grid-cols-subgrid"> Text Here
                                
                            </p>
                    
                    </h1>
                    
                
                </div>
                </div>
                </div>
            </div>
                
                
                
                
                

                
            </div>
        </div>
    )
}