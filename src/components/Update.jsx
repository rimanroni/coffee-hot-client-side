import React from 'react';
import Footer from './Footer';
import { NavLink, useLoaderData } from 'react-router-dom';
 import { FaArrowLeft } from 'react-icons/fa';
import Navbar from './Navbar';
import Swal from 'sweetalert2';

const Update = () => {
    const loadedData = useLoaderData()
    const {photo ,_id,  name, chef, supplier, taste, category, details } = loadedData; 
    
    const handleCoffee = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee = {name, chef, supplier, taste, category, details, photo};
       fetch(`http://localhost:5000/coffee/${_id}`, {
         method : "PUT", 
         headers : {
            'content-type' : 'application/json'
         },
         body : JSON.stringify(coffee)
       })
       .then(res=>res.json())
       .then(data=>{
        
         if(data.modifiedCount>0){
            Swal.fire({
                title: "Update Coffee SuccessFuly !",
                 icon: "success"
              });
          }
        })
        
    }
    return (
        <div>
               <div>
             <Navbar/>
            <div className='px-12'>
                <NavLink to={'/'}>
                    <h1 className='font-one my-4 text-2xl flex items-center'><FaArrowLeft className='mr-2' /> Back to home</h1>
                </NavLink>
                <div className='bg-[#F4F3F0] mt-3  py-12'>
                    <div className='px-8'>
                        <h1 className='text-center font-one text-4xl'>Update Existing Coffee Details</h1 >
                        <p className='text-center font-two'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                    </div>
                    <div className='   '>
                        <form onSubmit={handleCoffee} className='px-8 space-y-2 mt-5 '>
                            <div className='flex flex-col lg:flex-row gap-3'>
                                <div className='w-full'>
                                    <h1 className='font-two text-[16px] font-bold'>Name</h1>
                                    <input defaultValue={name}  name='name' type="text"  className='w-full py-2 px-1 outline-none ring-0 focus:outline-2 focus:ring-2 ' placeholder='Enter coffee name' />
                                </div>
                                <div className='w-full'>
                                    <h1 className='font-two text-[16px] font-bold'>Chef</h1>
                                    <input defaultValue={chef} name='chef' type="text" className='w-full py-2 px-1 outline-none ring-0 focus:outline-2 focus:ring-2 ' placeholder='Enter coffee chef' />
                                </div>
                            </div>
                            <div className='flex gap-3 flex-col lg:flex-row'>
                                <div className='w-full'>
                                    <h1 className='font-two text-[16px] font-bold'>Supplier</h1>
                                    <input  defaultValue={supplier} name='supplier' type="text" className='w-full py-2 px-1 outline-none ring-0 focus:outline-2 focus:ring-2 ' placeholder='Enter coffee supplier' />
                                </div>
                                <div className='w-full'>
                                    <h1 className='font-two text-[16px] font-bold'>Taste</h1>
                                    <input defaultValue={taste} name='taste' type="text" className='w-full py-2 px-1 outline-none ring-0 focus:outline-2 focus:ring-2 ' placeholder='Enter coffee taste' />
                                </div>
                            </div>
                            <div className='flex gap-3 flex-col lg:flex-row'>
                                <div className='w-full'>
                                    <h1 className='font-two text-[16px] font-bold'>Category</h1>
                                    <input defaultValue={category} name='category' type="text" className='w-full py-2 px-1 outline-none ring-0 focus:outline-2 focus:ring-2 ' placeholder='Enter coffee category' />
                                </div>
                                <div className='w-full'>
                                    <h1 className='font-two text-[16px] font-bold'>Details</h1>
                                    <input defaultValue={details} name='details' type="text" className='w-full py-2 px-1 outline-none ring-0 focus:outline-2 focus:ring-2 ' placeholder='Enter coffee details' />
                                </div>
                            </div>
                            <div className='w-full'>
                                <h1 className='font-two text-[16px] font-bold'>Photo</h1>
                                <input defaultValue={photo} name='photo' type="text" className='w-full py-2 px-1 outline-none ring-0 focus:outline-2 focus:ring-2 ' placeholder='Enter photo URL' />
                            </div>
                            <button className='w-full bg-[#D2B48C] py-2 border mt-2'>Update Coffee Details</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
         </div>
    );
};

export default Update;