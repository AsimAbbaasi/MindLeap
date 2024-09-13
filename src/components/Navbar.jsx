import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <ul className={`flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 p-4 md:p-0 ${isOpen ? 'block' : 'hidden'} md:flex`}>
      <li>
        <a href="#home"
          className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}
          onClick={() => setActiveSection('home')}
        >Home</a>
      </li>
      <li>
        <a href="#services"
          className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}
          onClick={() => setActiveSection('services')}
        >Services</a>
      </li>
      <li>
        <a href="#about"
          className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}
          onClick={() => setActiveSection('about')}
        >About us</a>
      </li>
      <li>
        <a href="#pricing"
          className={`text-white ${activeSection === 'pricing' ? 'isActive' : ''}`}
          onClick={() => setActiveSection('pricing')}
        >Price</a>
      </li>
      <li>
        <a href="#testimonial"
          className={`text-white ${activeSection === 'testimonial' ? 'isActive' : ''}`}
          onClick={() => setActiveSection('testimonial')}
        >Testimonial</a>
      </li>
    </ul>
  );

  return (
    <header className='bg-heroBg text-slate-100 py-6 px-4 fixed top-0 left-0 right-0 z-10'>
      <div className='container mx-auto flex justify-between items-center h-full'>
        {/* Logo */}
        <div>
          <a href="/">
            <img src="/logo.svg" alt="Logo" />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className='hidden md:flex flex-grow justify-center'>
          <nav>
            {navLinks}
          </nav>
        </div>
        
        {/* Contact Button (only shown on md and above) */}
        <div className='hidden md:block'>
          <a href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>
            Contact us
          </a>
        </div>
        
        {/* Mobile Menu Button (only shown on mobile) */}
        <div className='block md:hidden'>
          <button
            onClick={handleToggle}
            className='text-white focus:outline-none'
          >
            <HiOutlineMenuAlt3 className='text-2xl' />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <nav>
          {navLinks}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
