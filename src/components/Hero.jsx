import React from 'react';
import heroImg from "../assets/hero.png";
import { IoArrowForwardCircle } from "react-icons/io5";
import {motion} from "framer-motion"


function Hero() {
  return (
    <section className='bg-heroBg text-white flex items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full'>
        {/* Left side */}
        <div className='md:w-1/2'>
          <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>
            Start Your Journey to Mental Wellness
          </h1>
          <p className='text-lg mb-12 md:pr-8'>
            A mental health website provides resources, support, and information on mental well-being. It typically includes articles, self-help tools, therapy options, and community forums to help users manage stress, anxiety, depression, and other mental health issues. The site often emphasizes accessibility and confidentiality.
          </p>
          <button className='bg-primary text-white py-3.5 px-8 rounded font-medium md:hover:bg-primary/90'>
            <a href="" className='flex gap-1 items-center' >  
                <span>Get Started</span>
                <IoArrowForwardCircle />
            </a>
          </button>
        </div>
        {/* Right side */}
        <div className='md:w-1/2 w-full lg:w-1/3 xl:w-1/4'>
          <img src={heroImg} alt="Hero" className='w-full object-contain' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
