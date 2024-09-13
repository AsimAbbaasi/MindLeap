import React from 'react';
import footerImg from "../assets/footer-logo.svg";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[#f7f8fc] py-12 px-8'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6 mr-14'>
          <div className='flex items-center space-x-2'>
            <img src={footerImg} alt="footer img" className='w-32 h-auto'/>
          </div>
          <p className='text-para font-primary pt-3 text-bold'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Sit <br /> 
            ullam quidem nesciunt repellendus repudiandae, minus modi dignissimos accusamus! Nobis, <br />
            odit cumque nihil laudantium ipsam sint esse deleniti consequuntur maiores dolorem?
          </p>
          <div className='flex gap-3 pt-3'>
            <a href="#" className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary/85 hover:text-white'>
              <FaFacebook className='text-xl'/>
            </a>
            <a href="#" className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary/85 hover:text-white'>
              <FaLinkedin className='text-xl'/>
            </a>
            <a href="#" className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary/85 hover:text-white'>
              <FaInstagram className='text-xl'/>
            </a>
            <a href="#" className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary/85 hover:text-white'>
              <FaTwitter className='text-xl'/>
            </a>
            <a href="#" className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary/85 hover:text-white'>
              <FaGithub className='text-xl'/>
            </a>
          </div>
        </div>

        {/* Quick Links, Support, Contact Info */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
          {/* Quick Links */}
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='font-primary'>
              <li><a href="#" className='hover:underline text-gray-700'>Home</a></li>
              <li><a href="#" className='hover:underline text-gray-700'>Contact</a></li>
              <li><a href="#" className='hover:underline text-gray-700'>Services</a></li>
              <li><a href="#" className='hover:underline text-gray-700'>About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'>Support</h3>
            <ul className='font-primary'>
              <li><a href="#" className='hover:underline text-gray-700'>FAQs</a></li>
              <li><a href="#" className='hover:underline text-gray-700'>Terms of Service</a></li>
              <li><a href="#" className='hover:underline text-gray-700'>Privacy Policy</a></li>
              <li><a href="#" className='hover:underline text-gray-700'>Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
            <ul className='font-primary'>
              <li><a href="#" className='hover:underline text-gray-700'>+123-456-7890</a></li>
              <li><a href="#" className='hover:underline text-gray-700'>123 Main St, City, Country</a></li>
              <li><a href="#" className='hover:underline text-gray-700'>example@email.com</a></li>
            </ul>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Footer;
