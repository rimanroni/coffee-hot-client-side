import React from 'react';
import SocalLink from './SocalLink';

const Banner = () => {
    return (
       <div className='mb-20'>
         <div className='   h-[800px] flex justify-start items-center align-middle ' id='bannerPart'>
             <div   className='text-white space-y-5  px-12 '>
                   <h1 className='font-one text-5xl '>Would you like a Cup of Delicious Coffee?</h1>
                   <p className='font-two text-[16px]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                   <button className='font-one text-black px-4 py-2 text-2xl  bg-[#E3B577]'>Learn More</button>
              </div>
        </div>
        <SocalLink/>
       </div>
    );
};

export default Banner;