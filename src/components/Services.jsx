import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServiceImg1 from "../assets/service1.png";
import ServiceImg2 from "../assets/service2.png";
import ServiceImg3 from "../assets/service3.png";
import ServiceImg4 from "../assets/service4.png";
const Services = () => {
  return (
    <div className='bg-[#f7f8fc]'> 
    <div className='pt-28 px-4 conatainer mx-auto'>
        <div className='text-center space-y-5'>
      <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together</h2>
        <p className=' '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat illum dicta animi! In, accusantium rerum ullam consequuntur labore animi? Fugiat!</p>

        <div className=' py-12 md:w-4/5 mx-auto'>
        <Tabs>
    <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
      <Tab>Couple Counseling</Tab>
      <Tab>Parenting Skills</Tab>
      <Tab>Feeling Stucks</Tab>
      <Tab>Self-Confidence</Tab>
    </TabList>

    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
  <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
     <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counseling</h3>
    <p className='mb-8'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facilis aliquam est tempora assumenda nemo nesciunt?.</p>
    <h4 className=' text-xl  font-medium text-black mb-4'>Benifits</h4>
    <ul className='list-disc list-inside space-y-3'>
        <li>Understanding of Relationship Dynamics</li>
        <li>Understanding of Relationship Dynamics</li>
        <li>Understanding of Relationship Dynamics</li>
    </ul>
        </div>
        <div className='md:w-1/2'>
            <img src={ServiceImg1} alt="" className='w-full h-auto rounded-2xl md:h-[446px] object-cover' />
        </div>
    </TabPanel>
    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
  <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
     <h3 className='text-3xl font-semibold text-primary mb-4'>Prenting Skills</h3>
    <p className='mb-8'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facilis aliquam est tempora assumenda nemo nesciunt?.</p>
    <h4 className=' text-xl  font-medium text-black mb-4 
    '>Benifits</h4>
    <ul className='list-disc list-inside space-y-3'>
        <li>Understanding of Relationship Dynamics</li>
        <li>Understanding of Relationship Dynamics</li>
        <li>Understanding of Relationship Dynamics</li>
    </ul>
        </div>
        <div className='md:w-1/2'>
            <img src={ServiceImg2} alt="" className='w-full h-auto rounded-2xl md:h-[446px] object-cover' />
        </div>
    </TabPanel>
    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
  <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
     <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stucks</h3>
    <p className='mb-8'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facilis aliquam est tempora assumenda nemo nesciunt?.</p>
    <h4 className=' text-xl  font-medium text-black mb-4 
    '>Benifits</h4>
    <ul className='list-disc list-inside space-y-3'>
        <li>Understanding of Relationship Dynamics</li>
        <li>Understanding of Relationship Dynamics</li>
        <li>Understanding of Relationship Dynamics</li>
    </ul>
        </div>
        <div className='md:w-1/2'>
            <img src={ServiceImg3} alt="" className='w-full h-auto rounded-2xl md:h-[446px] object-cover' />
        </div>
    </TabPanel>
    <TabPanel className="flex flex-col md:flex-row gap-8 mt-8">
  <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
     <h3 className='text-3xl font-semibold text-primary mb-4'>Self Confidence</h3>
    <p className='mb-8'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facilis aliquam est tempora assumenda nemo nesciunt?.</p>
    <h4 className=' text-xl  font-medium text-black mb-4 
    '>Benifits</h4>
    <ul className='list-disc list-inside space-y-3'>
        <li>Understanding of Relationship Dynamics</li>
        <li>Understanding of Relationship Dynamics</li>
        <li>Understanding of Relationship Dynamics</li>
    </ul>
        </div>
        <div className='md:w-1/2'>
            <img src={ServiceImg4} alt="" className='w-full h-auto rounded-2xl md:h-[446px] object-cover' />
        </div>
    </TabPanel>
  </Tabs>
        </div>
    </div>
    </div>
    </div> 
  );
}

export default Services;