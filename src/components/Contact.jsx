import React from 'react';
import { RiGlobalLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className='flex bg-heroBg items-center justify-center py-28 px-8'>
   <div className=' container max-auto ' >
    <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
    {/* left side*/}
    <div className='space-y-8'>
      <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an Opointemnet</h2>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 text-white'>
  <div className='flex items-start gap-4'>
    <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
      <FaUserAlt className='text-primary' />
    </div>
    <div className='space-y-1'>
      <h3 className='text-lg font-medium text-white'>24 Hour Service</h3>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur</p>
    </div>
  </div>

  <div className='flex items-start gap-4'>
    <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
      <IoMdMail className='text-primary' />
    </div>
    <div className='space-y-1'>
      <h3 className='text-lg font-medium text-white'>Expert Therapy</h3>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur</p>
    </div>
  </div>

  <div className='flex items-start gap-4'>
    <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
      <FaPhoneAlt className='text-primary' />
    </div>
    <div className='space-y-1'>
      <h3 className='text-lg font-medium text-white'>High Quality Core</h3>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur</p>
    </div>
  </div>

  <div className='flex items-start gap-4'>
    <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
      <RiGlobalLine className='text-primary' />
    </div>
    <div className='space-y-1'>
      <h3 className='text-lg font-medium text-white'>Trusted Clinic</h3>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur</p>
    </div>
  </div>
</div>
    </div>
     {/* Right side */}
      <div className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
        <h3 className='text-3xl font-bold mb-4' >Book Appartement</h3>
        <form className='space-y-8'>
        <div className='flex sm:flex-row flex-col gap-4'>
          <input type="text" placeholder='Name' className='w-full p-4 rounded-md focuc:outline-none focus:ring-2 focus:ring-primary shadow' />
          <input type="email" placeholder='Email Address' className='w-full p-4 rounded-md focuc:outline-none focus:ring-2 focus:ring-primary shadow' />
        </div>
        <div className='flex sm:flex-row flex-col gap-4'>
          <input type="tel" placeholder='Contact Number' className='w-full p-4 rounded-md focuc:outline-none focus:ring-2 focus:ring-primary shadow' />
          <input type="text" placeholder='Country' className='w-full p-4 rounded-md focuc:outline-none focus:ring-2 focus:ring-primary shadow' />
        </div>
        <textarea
        rows="5"
         placeholder='Type your Message here...' className='w-full p-4 rounded-md focuc:outline-none focus:ring-2 focus:ring-primary shadow'></textarea>
         <button
         type='submit'
         className='bg-primary  p-3 w-full text-white rounded-md hover:bg-primary/80'
         >Send Message</button>
        </form>
      </div>
    </div>
    </div>        
    </div>
  );
} 

export default Contact;
