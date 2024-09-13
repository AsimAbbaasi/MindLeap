import React from 'react';

const Working = () => {
  return (
    <div className='relative bg-cover bg-center py-12 bg-working-img'>
      <div className='absolute inset-0 bg-heroBg bg-opacity-85'></div>
      <div className='relative container mx-auto px-4 py-20'>
        <div className='text-white text-center mb-20'>
          <h2 className=' text-4xl font-bold font-secondary mb-4'> How It Works</h2>
          <p class="text-lg md:w-1/2 w-full mx-auto"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat dolores, soluta, consectetur commodi iure ex quae molestiae magnam distinctio doloribus !</p>



          <div className=' flex flex-col md:flex-row gap-8 md:w-4/5 mx-auto pt-10'>
            <div className=' relative flex-1 bg-white text-center rounded-lg p-6 '>
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 *:-translate-y-1/2 bg-primary text-black size-14 rounded-full flex items-center justify-center'>1</div>
                <div className='text-lg  text-black font-semibold mt-8'> Fill a Form</div>
                  <p className='my-2 text-black font-semibold text-lg'>  Description of the first step into the process</p>
            </div>
            <div className=' relative flex-1 bg-white text-center rounded-lg p-6'>
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 *:-translate-y-1/2 bg-primary text-black size-14 rounded-full flex items-center justify-center pt-2'>2</div>
                <div className='text-lg  text-black font-semibold mt-8'> Fill a Form</div>
                  <p className='my-2 text-black font-semibold text-lg'>  Description of the first step into the process</p>
            </div>
            <div className=' relative flex-1 bg-white text-center rounded-lg p-6'>
              <div className='absolute top-0 left-1/2 transform -translate-x-1/2 *:-translate-y-1/2 bg-primary text-black size-14 rounded-full flex items-center justify-center pt-2'>3</div>
                <div className='text-lg  text-black font-semibold mt-8'> Fill a Form</div>
                  <p className='my-2 text-black font-semibold text-lg'>  Description of the first step into the process</p>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default Working;
