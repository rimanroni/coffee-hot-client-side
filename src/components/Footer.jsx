import React from 'react';
import {  FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";
import Swal from 'sweetalert2'
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";

const handleForm = (e) =>{
    e.preventDefault()
    Swal.fire({
        title: "",
        text: "successfuly sms send ",
        icon: "success"
      });
      const form = e.target;
      form.reset()
}
const Footer = () => {
    return (
        <div className='px-12 py-20   ' id='footer'>
            <div className='flex flex-col  lg:flex-row items-center gap-x-4'>
                <div className='px-4 space-y-3'>
                    <img src="logo1.png" className='w-[80px]' alt="" />
                    <h1 className='font-one text-4xl'>Espresso Emporium</h1>
                    <p className='font-two'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                     <div className='flex space-x-3 text-2xl '>
                     <FaFacebook />
                     <FaTwitter/>
                     <FaInstagram/>
                     <FaLinkedin/>
                     </div>
                     <h1 className='font-one text-2xl'>Get in Touch</h1>
                     <p className='flex items-center'><FaPhone className='inline mr-2'/> +88 01533 333 333</p>
                     <p className='flex items-center'><SiGmail className='inline mr-2'/> info@gmail.com</p>
                     <p className='flex items-center'><FaLocationArrow className='inline mr-2'/> 72, Wall street, King Road, Dhaka</p>
                </div>
                <div className='px-8 w-full mt-6'>
                  <h1 className='font-one text-3xl mb-2'>Connect with Us</h1>
                  <form onSubmit={handleForm} >
                  <div className='w-full space-y-4'>
                    <input required type="text" className='w-full py-2 px-1 outline-none ring-0 focus:outline-2 focus:ring-2 ' name="name" placeholder='Name'  id="" /><br />
                    <input required className='w-full py-2 px-1 outline-none ring-0 focus:outline-2 focus:ring-2 ' type="email" name="email" placeholder='Email' id="" /><br />
                    <textarea required className='w-full py-2 px-1   outline-none ring-0 focus:outline-2 focus:ring-2 ' name="textarea" placeholder='Message'  ></textarea><br />
                    <button className='font-one border rounded-full px-4 py-2 border-black'>Send Message</button>
                  </div>
                  </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;