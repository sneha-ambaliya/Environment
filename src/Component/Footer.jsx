import React from 'react'
import "../App.css"
import '../index.css';
import insta from "../assets/insta.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter1.png"

function Footer() {
  return (
    <>
      <div className='m-20 h-auto w-auto bg-[#4E9E8C] mx-30 rounded-xl p-20 max-sm:m-5 max-sm:p-10 max-md:m-10'>
        <div className='flex gap-15 flex-wrap justify-center'>
          <div>
            <h1 className='font-bold text-white text-2xl'>INDUS ENVIRONS</h1>
          </div>
          <div>
            <h1 className='text-green-900 font-bold text-xl'>Quick Links</h1>
            <ul className='text-white mt-4'>
              <li className='p-1'><span class="text-green-950 mr-2">◆</span>About us</li>
              <li className='p-1'><span class="text-green-950 mr-2">◆</span>Service</li>
              <li className='p-1'><span class="text-green-950 mr-2">◆</span>Custom Gallery</li>
              <li className='p-1'><span class="text-green-950 mr-2">◆</span>Contact us</li>
            </ul>
          </div>
          <div>
            <h1 className='text-green-900 font-bold text-xl'>Services</h1>
            <ul className='text-white mt-4'>
              <li className='p-1'><span class="text-green-950 mr-2">◆</span>Services 1</li>
              <li className='p-1'><span class="text-green-950 mr-2">◆</span>Services 2</li>
              <li className='p-1'><span class="text-green-950 mr-2">◆</span>Services 3</li>
              <li className='p-1'><span class="text-green-950 mr-2">◆</span>Services 4</li>
            </ul>
          </div>
          <div>
            <h1 className='text-green-900 font-bold text-xl'>Get In Touch</h1>
            <ul className='text-white mt-4'>
              <div className='flex gap-2 mt-2'>
                <div className="bg-[#05352a] text-white rounded-full h-10 w-10 p-2 ">
                  <span class="material-symbols-outlined">
                    call
                  </span>
                </div>
                <li className='p-1'> +91 7878788989</li>
              </div>
              <div className='flex  gap-2 mt-2'>
                <div className="bg-[#05352a] text-white  rounded-full  h-10 w-10 p-2 ">
                  <span class="material-symbols-outlined">
                    mail
                  </span>
                </div>
                <li className='p-1'> contact@gmail.com</li>
              </div>
              <div className='flex  gap-2 mt-2'>
                <div className="bg-[#05352a] text-white rounded-full  h-10 w-10  p-2 ">
                  <span class="material-symbols-outlined">
                    location_on
                  </span>
                </div>
                <li className='p-1'> 56, Flamingo Square,<br />kingali,Hyderabad</li>
              </div>



            </ul>
          </div>

        </div>
        <hr className='text-white m-6' />
        <div className='flex gap-5'>
          <div className=" bg-cover h-10 w-10 rounded-full   " style={{ backgroundImage: `url(${insta})` }} ></div>
          <div className=" bg-cover h-10 w-10 rounded-full   " style={{ backgroundImage: `url(${facebook})` }} ></div>
          <div className=" bg-cover h-10 w-10 rounded-full   " style={{ backgroundImage: `url(${twitter})` }}></div>

        </div>

      </div>
    </>
  )
}

export default Footer