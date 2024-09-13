import React from 'react';
import { BsChatQuoteFill } from "react-icons/bs";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
const  testimonials =[
    {
      name: 'Jane Doe',
      location: 'New York, NY',
      review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
      image: review1,
    },
    {
      name: 'John Smith',
      location: 'Los Angeles, CA',
      review: 'I’ve tried many wellness programs, but this one stands out. The expert webinars and one-on-one coaching have been incredibly valuable. I feel more balanced and focused than ever before.',
      image: review2,
    },
  ]

const Testimonials = () => {
  return (
    <div className='bg-[#f7f8fc] py-12 '>
        <div className='mx-auto container pb-20'>
        <div className=' text-center  mb-12'>
        
            <h2 className='text-4xl font-bold font-secondary mb-3'>What our Client Say</h2>
            <p className='text-lg -scroll-mb-12 mb:w-1/2 mx-auto font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iure aspernatur voluptatum laudantium odit, itasandae ullam minus, didi tempore, repellat nulla?</p>
        </div>
        <div className='flex flex-col md:w-4/5  mx-auto md:flex-row md:gap-12 gap-8'>
            {
                testimonials.map((testimonials,index)=>(
                       <div key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                        <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2'>
                        <BsChatQuoteFill className='size-12 text-primary' />
                        </div>
                        <div className='flex flex-col space-y-3 mb-4'>
                            <p className='text-lg mb-2   '>{testimonials.review}</p>
                            <div flex gap-1> 
                                <img src={testimonials.image} alt="" className='size-16 rounded-full object-cover mr-4' />
                                <div>
                                    <p className='font-semibold'>{testimonials.name}</p>
                                    <p className=' '>{testimonials.location}</p>
                     </div>
                   </div>
                </div>
          </div>
        ))
      }
        </div>
        </div>
    </div>
  );
}

export default Testimonials;
