import React from "react";

export const Contact = () => {
    return (
        <div className="relative flex flex-col items-center w-full justify-center bg-white dark:bg-black" id="contact">
            {/* <div className="p-5 m-5 border-t relative flex flex-col items-center w-full justify-center bg-white dark:bg-black"> */}
            <h1 className="relative flex text-4xl font-bold text-black dark:text-white mb-12 mt-12">Contact Me</h1>
            <p>remember to fix this to actually have the contact form send me a message</p>
            <input type="text" placeholder="Name" className="md:w-1/2 lg:w-1/2 p-3 m-2 text-base font-thin text-stone-900 dark:text-white bg-white dark:bg-black border rounded-lg border-black dark:border-white  sm:w-2/3 xs:w-2/3  "/>
            <input type="text" placeholder="Email" className="md:w-1/2 lg:w-1/2 p-3 m-2 text-base font-thin text-stone-900 dark:text-white bg-white dark:bg-black border rounded-lg border-black dark:border-white sm:w-2/3 xs:w-2/3"/>
            <textarea placeholder="Message" className="md:w-1/2 lg:w-1/2 p-3 m-2 text-base font-thin text-stone-900 dark:text-white bg-white dark:bg-black border rounded-lg border-black dark:border-white sm:w-2/3 xs:w-2/3"/>
            <button className="md:w-[12%] lg:w-[18%] p-3 m-2 mt-8 text-base font-bold text-stone-900 dark:text-white bg-white dark:bg-black transition-all duration-200 hover:bg-gray-200 dark:hover:bg-stone-900 border rounded-lg border-black dark:border-white mb-12 sm:w-1/6 xs:w-1/6">Send</button>
            {/* </div> */}
        </div>   
    )

}
