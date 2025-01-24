import React from 'react';
import { BiDownload, BiLogoReact, BiHome } from 'react-icons/bi';
import CV from '../assets/CalebReganCV.pdf';

const Footer = () => {
    return (
        <footer className="flex flex-col h-30 pt-2 rounded-full border-t border-gray-200 dark:border-gray-700 bg-white text-gray-700 dark:bg-black p-2 overflow-hidden justify-end items-end mx-0">
            <div className="flex flex-col w-full max-w-screen-xl mt-2 mx-10 p-4  md:py-4 overflow-hidden lg:mx-10 md:mx-10 sm:mx-0 xs:m-1 xs:mr-4"> 
                <div className='flex items-center justify-end gap-2 text-2xl text-gray-700 dark:text-gray-300 lg:justify-end md:justify-end sm:justify-center xs:justify-center'>
                <a href={CV} download="Caleb_Regan_CV" className=''>
                <BiDownload className='flex text-2xl translate-x-1'/>
                </a>
                <a href={CV} download="Caleb_Regan_CV" className=''>
                <span className='flex text-base pr-4'>Download My CV</span>
                </a>
                    <BiLogoReact className='text-2xl translate-x-1'/>
                    <span className='text-base'>Made With React</span>
                    
                    </div>


            </div>
        </footer>
    )
}

export default Footer;  