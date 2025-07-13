import React from 'react'
import hero2 from './hero2.png';

function hero() {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${hero2})` }}>
      <div className='py-50 px-30  max-sm:py-30 max-sm:px-5 '>
        <h5 className='text-green-400 capitalize'>Join Us And Making a Green Tomorrow</h5>
        <h1 className='hero-font text-white text-5xl max-sm:text-4xl font-bold leading-tight mb-6 md:text-5xl capitalize' >protect Our planet,<br /> Secure Our Future</h1>
        <h5 className='text-gray-300 mb-8 max-w-lg capitalize'>Join us in protecting nature and building a sustainable future-becouse every action today shapes Tomorrow</h5>
        <div className='flex gap-8 max-sm:gap-2'>
          <button className='bg-[#27b0a7] text-white px-8 py-3 rounded-lg hover:bg-transparent hover:text-green-500 hover:border-green-500 
               transition duration-300 border max-sm:p-2 cursor-pointer'>Get Involved</button>
          <button className='bg-[#27b0a7] text-white px-8 py-3 rounded-lg hover:bg-transparent hover:text-green-500 hover:border-green-500 
               transition duration-300 border max-sm:p-2 cursor-pointer'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default hero