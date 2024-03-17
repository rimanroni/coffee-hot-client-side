import React from 'react';
import { BiSolidShow } from "react-icons/bi";
import { MdDelete, MdEdit } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee ,coffeesData, setCoffeesData}) => {
    const {  _id,  photo, name, chef, taste } = coffee;
    const handleDelet = (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Your Coffee Product Delete",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
              });
              fetch(`http://localhost:5000/coffee/${id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                 const newUpdateData = coffeesData.filter(coffee=>coffee._id !==id)
                 setCoffeesData(newUpdateData)
            })

            }
          });



        
    }
    return (
        <div className='flex justify-around  items-center py-4 lg:px-8 px-4 bg-[#F5F4F1]'>
            <div>
                <img src={photo} className='w-[150px]'   alt="" />
            </div>
            <div className='font-two'>
                <h1 className='font-bold'>Name : <span className='font-normal'>{name}</span></h1>
                <h1 className='font-bold' > Chef :  <span className='font-normal'>{chef}</span></h1>
                <h1 className='font-bold'>Taste :  <span className='font-normal capitalize'>{taste}</span></h1>
            </div>
        
            <div className='space-y-2'>
                <NavLink to={`/detils/${_id}`}>
                <button
                className='bg-[#D2B48C] mb-2 text-white text-2xl px-2 py-2 rounded-md'
                ><BiSolidShow /></button>
                </NavLink>
                <br />
                
                <NavLink to={`/update/${_id}`}>
                <button
                className='bg-[#3C393B] text-white text-2xl px-2 py-2 rounded-md'
                ><MdEdit /> </button><br />
                </NavLink>
                <button onClick={()=>handleDelet(_id )}
                className='bg-[#EA4744]  text-white text-2xl px-2 py-1 rounded-md'
                > <MdDelete /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;