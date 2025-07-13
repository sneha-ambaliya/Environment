import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-black/40 backdrop-blur-md text-white py-5 px-6 sm:px-10 mx-4 sm:mx-[40px] rounded-xl fixed top-7 left-0 w-[calc(100%-32px)] sm:w-[calc(100%-80px)] z-50">

      <input id="menu-toggle" type="checkbox" className="hidden peer" />

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">INDUS ENVIRONS</h1>


        <label htmlFor="menu-toggle" className="flex flex-col justify-between w-6 h-5 cursor-pointer md:hidden">
          <span className="block h-[3px] bg-white rounded-sm"></span>
          <span className="block h-[3px] bg-white rounded-sm"></span>
          <span className="block h-[3px] bg-white rounded-sm"></span>
        </label>


        <ul className="hidden md:flex gap-6 font-medium text-sm sm:text-base">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/AboutUS">About Us</Link></li>
          <li><Link to="/Support">Our Support</Link></li>
          <li><Link to="/Gallery">Customer Gallery</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>


      <ul className="peer-checked:flex hidden flex-col mt-4 gap-4 text-sm font-medium md:hidden">
        <li><Link to="/Home" className='inline-block pb-1 border-b-2 border-transparent hover:border-green-500'>Home</Link></li>
        <li><Link to="/AboutUS">About Us</Link></li>
        <li><Link to="/Support">Our Support</Link></li>
        <li><Link to="/Gallery">Customer Gallery</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
      </ul>
    </div>
  )
}
export default Navbar