import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { TiCoffee } from "react-icons/ti";
import Instragram from './Instragram';
import CoffeeCard from './CoffeeCard';
 
const Category = () => {
    const loadedData = useLoaderData();
    const [coffeesData, setCoffeesData] = useState(loadedData)
    
    
  
    return (
        <div id='catergory' className='px-12 py-8'>
         <div className='text-center space-y-4 '>
         <p className='font-two'>--- Sip & Savor ---</p>
            <h1 className='font-one text-3xl'>Our Popular Products</h1> 
            <NavLink to={'/addCoffee'}>
                <button className='bg-[#E3B577] border border-black px-4 py-1 text-white mt-4'>Add Coffee <TiCoffee className='inline text-xl' /></button>
            </NavLink>
         </div>
           <div className='grid lg:grid-cols-2 py-8 grid-cols-1 justify-center gap-5'>
            {coffeesData.map(coffee=><CoffeeCard 
            coffeesData={coffeesData}
           setCoffeesData={setCoffeesData}
            
            key={coffee._id} coffee={coffee}/>)}
           </div>
            

         <Instragram/>
         </div>
    );
};

export default Category;