import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Detils = () => {
    const loadedData = useLoaderData()
    const {photo , name, chef, supplier, taste, category, details } = loadedData;
    return (
        <div>
             <Navbar/>  
            <div className='px-12'>
             <NavLink to={'/'}>
                    <h1 className='font-one my-4 text-2xl flex items-center'><FaArrowLeft className='mr-2' /> Back to home</h1>
                </NavLink>
                 <div className='grid py-4 grid-cols-3    bg-[#F4F3F0] mt-8'>
                  <div className='px-10'>
                    <img src={photo} alt="" />
                  </div>
                  <div className='col-span-2 space-y-2  pl-20'>
                    <h1 className='font-one font-bold text-4xl'>Niceties</h1>
                    <h1 className='text-xl font-bold'>Name : <span className='font-normal'>{name}</span></h1>
                    <h1 className='text-xl font-bold'>Chef : <span className='font-normal'>{chef}</span></h1>
                    <h1 className='text-xl font-bold'> Supplier : <span className='font-normal'>{supplier}</span></h1>
                    <h1 className='text-xl font-bold'>Taste : <span className='font-normal'>{taste}</span></h1>
                    <h1 className='text-xl font-bold'> Category : <span className='font-normal'> {category}</span></h1>
                    <h1 className='text-xl font-bold'>Details : <span className='font-normal'> {details}</span> </h1>
                  </div>
                </div>
             </div>
              <Footer/>
        </div>
    );
};

export default Detils; 