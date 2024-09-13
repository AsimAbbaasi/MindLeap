import React from 'react';
const packeges=[
    {
        name:'Bronze Packege',
        price:'$99',
        description:'Ideal for indivisuals or small bussniess looking ot get started with mental willness.',
        features:[
            'Access to basic willnes resources',
            'Weekly bmental willness tips',
            'Community support group access',
        ],
    },

    {
        name:'Silver Packege',
        price:'$199',
        description:'A greate choice for growing bussniess with addditional features amd support for mental willness.',
        features:[
            'All Bronze Packeges',
            'Access to basic willnes resources',
            'Weekly bmental willness tips',
            'Community support group access',
],
},
{
    name:'Golden Packege',
    price:'$299',
    description:'Perfect for larger businesses needing advanced mental wellness features and premium support.',
    features:[
        'All Silver Package feature',
        'Weekly one-on-one coaching sessions',
        'Advanced mental wellness tracking tools',
        '24/7 access to mental wellness experts',
],
},
  
]
const Pricing = () => {
  return (
    <div className='bg-[#f7f8fc]  pt-32'>
       <div className='container mx-auto px-8'>
        <div className=' text-center  mb-12'>
            <h2 className='text-4xl font-bold font-secondary mb-3'>Perfect for Small & Large Devices</h2>
            <p className='text-lg -scroll-mb-12 mb:w-2/3 mx-auto font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam iure aspernatur voluptatum <br />laudantium odit, itasandae ullam minus, didi tempore, repellat nulla?</p>
        </div>
                    {/* packeges*/}

        <div className='flex flex-col md:w-5/6 mx-auto md:flex-row gap-8'>
        {
            packeges.map((pkg,index)=>(
                <div key={index} className='bg-white rounded-lg p-6 flex-1 drop-shadow-lg'>
                    <h3 className='text-2xl font-semibold mb-4' >
                    {pkg.name}
                    </h3>
                    <hr  className='w-24 border text-primary border-primary'/>
                    <p className='text-3xl font-bold mb-4'> {pkg.price} <span className='text-lg font-normal'>/mo </span></p>
                    <p className='text-lg mb-4 '>{pkg.description}</p>
                    <ul className='list-disc list-inside space-y-2 mb-6'>
                        {
                            pkg.features.map((features,idx)=>(
                        <li key={idx} >{features}</li>
                            ))
                        }
                    </ul>
                    <button className='bg-primary text-white px-4 py-2 rounded'>Get Started</button>
                </div>
            ))
        }
        </div>

       </div>
    </div>
  );
}

export default Pricing;
