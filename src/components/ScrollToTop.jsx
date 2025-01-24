import React, {useState, useEffect} from 'react';
import { BiChevronUpCircle, BiSolidHome } from 'react-icons/bi';

function ScrollToTop(darkMode, toggleDarkMode) {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500) {
            setVisible(true);
        } else if (scrolled <= 500) {
            setVisible(false);
        } 

        document.documentElement.classList.toggle('scroll', !visible)
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    

    window.addEventListener("scroll", toggleVisible);


    return (
        <>
        <button className={` scroll block fixed bottom-4 right-5 cursor-pointer text-align text-black dark:text-white text-center transition-all duration-500`} style={{opacity: visible ? '100' : '0' }}
        onClick={scrollToTop} >
            <BiChevronUpCircle className={`size-8 animate-bounce`} />


        </button>
        <button className={`scroll absolute left-8 cursor-pointer  text-gray-700 dark:text-gray-300 text-center transition-all duration-500 xs:hidden`} 
        onClick={scrollToTop} >
            <BiSolidHome className={`size-8 translate-y-7`} />


        </button>
        
        {/* <button className={`scroll absolute cursor-pointer top-5 left-6 text-black dark:text-white text-center transition-all duration-500`} 
        onClick={scrollToTop} >
            <BiSolidHome className={`size-7 `} />


        </button> */}
        </>
    );
}

export default ScrollToTop;