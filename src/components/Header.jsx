import React from 'react';
import { useState, useEffect } from 'react';
import { BiCopyright, BiLogoReact } from 'react-icons/bi';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";
import { BiDownload, BiSolidContact } from 'react-icons/bi';
import CV from '../assets/CalebReganCV.pdf';
import { motion} from 'motion/react';

export const Header= () => {

        const [activeLink, setActiveLink] = useState('home');
        const [scrolled, setScrolled] = useState(false);

    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      
      }, []);
    
      const onUpdateActiveLink = (link) => {
        setActiveLink(link);
      }



      // function disableScroll() {
      //   window.addEventListener('DOMMouseScroll', preventDefault, false);
      //   window.addEventListener(wheelEvent, preventDefault, wheelOpt);
      //   window.addEventListener('touchmove', preventDefault, wheelOpt);
      //   window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
      // }

      // function enableScroll() {
      //   window.removeEventListener('DOMMouseScroll', preventDefault, false);
      //   window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      //   window.removeEventListener('touchmove', preventDefault, wheelOpt);
      //   window.removeEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
      // }

      const scrollToContact = () => {
        window.scrollTo({
            top: 8000,
            behavior: "smooth"
        }
      );
      
    };
    
    
    return (
        <div className="flex flex-col h-18 pb-2 rounded-full border-b border-gray-200 dark:border-gray-700 bg-white text-gray-700 dark:bg-black p-2 overflow-hidden ">
          <div className='flex flex-wrap items-start justify-start h-full gap-16'>
            
          </div>
          <div className="flex flex-wrap items-start justify-start h-full gap-16">
                
            <div className="w-full max-w-screen-xl mx-auto pr-4 mr-2 md:py-4 ">
            <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} className="flex flex-wrap md:items-end md:justify-end lg:items-end lg:justify-end 2xl:items-end 2xl:justify-end h-full gap-6 sm:items-center sm:justify-center">
                {/* <button className="text-2xl font-bold text-gray-800 dark:text-white ">Home</button> */}
                <button className="text-2xl font-bold text-gray-800 dark:text-white" alt="Contact Me" ></button>
                <BiSolidContact className='relative flex flex-wrap scale-200 text-2xl cursor-pointer text-gray-800 dark:text-white' onClick={scrollToContact}/>
                <button className="text-2xl font-bold text-gray-800 dark:text-white" >
                <a href={CV} download="Caleb_Regan_CV">
                  <BiDownload className='relative flex flex-wrap scale-200 text-2xl'/>
                  </a>
                </button>
                
            </motion.div>
        </div>
            </div>
        </div>
    )
}
