import React from 'react';

const Navbar = () => {
    return (
        <div className='text-center py-2 flex justify-center items-center' id='navbar'>
            <img src="logo1.png" alt="" className='mr-2 w-[40px]' />
             <h1 className='font-one text-white text-2xl  font-bold'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;