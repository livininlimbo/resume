import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import ButtonWrapper from "./ButtonWrapper";
import {motion } from 'motion/react';

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2m47ytj', 'template_ouqafzh', form.current, {publicKey: 'pxSHHkU6c8TH1k073'})
            .then((result) => {
                alert('Message Sent Successfully');
                form.current.reset();
            }, (error) => {
                console.log('Message Send Failed...');
            });
        
    }

    return (
        <form ref={form} className="-mt-0 relative flex flex-col items-center w-full justify-center bg-white dark:bg-black" id="contact" onSubmit={sendEmail}>
            {/* <div className="p-5 m-5 border-t relative flex flex-col items-center w-full justify-center bg-white dark:bg-black"> */}
            <motion.h1 initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} className="relative flex text-4xl font-bold text-black dark:text-white mb-12 mt-6">Contact Me</motion.h1>
            {/* <p>remember to fix this to actually have the contact form send me a message</p> */}
            <motion.input initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} type="text" name="to_name" placeholder="Name" required className="md:w-1/2 lg:w-1/2 p-3 m-2 text-base font-thin text-stone-900 dark:text-white bg-white dark:bg-black border rounded-lg border-black dark:border-white  sm:w-2/3 xs:w-2/3  "/>
            <motion.input initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} type="email" name="email" placeholder="Email" required className="md:w-1/2 lg:w-1/2 p-3 m-2 text-base font-thin text-stone-900 dark:text-white bg-white dark:bg-black border rounded-lg border-black dark:border-white sm:w-2/3 xs:w-2/3"/>
            <motion.textarea initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}} placeholder="Message" name="message" required className="md:w-1/2 lg:w-1/2 p-3 m-2 text-base font-thin text-stone-900 dark:text-white bg-white dark:bg-black border rounded-lg border-black dark:border-white sm:w-2/3 xs:w-2/3"/>
            <motion.div initial={{ opacity: 0.4, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} viewport={{ once: true}}>
            <ButtonWrapper type="submit" value="Send" className="md:w-[12%] lg:w-[18%] p-3 m-2 mt-4 text-base font-bold bg-clip-border text-stone-900 dark:text-white bg-white dark:bg-black transition-all duration-200  border rounded-lg border-black dark:border-white mb-6 sm:w-1/5 xs:w-1/5">Send</ButtonWrapper>
            </motion.div>
            {/* </div> */}
        </form>   
    )

}
