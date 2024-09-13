import React from 'react';
import thumnailImg from "../assets/video-thumbnail.png";
import { useState } from 'react'; 
import { IoPlay } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
const About = () => {
    const[isVideoPlaying,setIsVideoPlaying]=useState(false);
    const handleVidePlay=()=>{
        setIsVideoPlaying(true)
    }
    const handleCloseVideo=()=>{
        setIsVideoPlaying(false)
    }

  return (
    <div className='bg-[#f7f8fc] pb-16 pt-20'>
        <div className='container mx-auto'>
         <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-10'>
               {/* left side */}
                 <div className='md:w-1/2 w-full mb-8 md:mb-0'>  
                 {
                    !isVideoPlaying ? ( 
                        <div className='relative'>
                          <img src={thumnailImg} alt="video thumbnail" className='w-full md:h-[446px] rounded object-cover' />
                          <button 
                          onClick={handleVidePlay}
                          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer'>
                            <IoPlay className='text-white' size={24} />
                          </button>
                        </div>
                        
                    ) : (null)
                 }
                </div> 
            {/* right side  */}
            <div className='md:w-1/2 w-full'> 
            <h2 className='text-3xl font-secondary  mb-4  leading-snug'>
            Indivisual Consult And Therapy  
          </h2>
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
        </div>
        {
            isVideoPlaying && (
               <div className='fixed inset-0 bg-black  bg-opacity-75  flex items-center justify-center '> 
                 <div className='relative w-full h-full items-center justify-center '>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/bjYjj0dzRfs?si=TJ8qkwDkjyNdxh28 " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <button onClick ={handleCloseVideo} className='absolute top-4 right-4  text-white text-2xl cursore-pointer'>
                    &times

                    </button>
                </div>
               </div>
            )
        }
        </div>
    </div>
  );
}

export default About;
