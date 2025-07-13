import React from 'react'
import vision from "../assets/vision1.png"

function Home_sec5() {
  return (
    <section className='vision '>
    <div className='flex mt-60 max-md:mt-90 gap-20 justify-center max-sm:flex-wrap max-sm:mt-20'> 
        <div className='h-100 w-110 p-3'>
           <h2 className='text-green-300'>vision Mission</h2>
           <h1 className='text-3xl font-bold text-[#064B1E] font-20 '>Our Green vision & Mission</h1>
           <br/>
           <h5>A statement about your core environment goals.</h5>
           <br/>
           <br/>
           <h1 className='text-xl font-bold text-[#064B1E] font-20'>Our Vision</h1><br/>
           <p className='text-xs'>We dream of a world where trees breathe freely and nature thrives alongside us. Every plant saved is a life preserved not just for the Earth, but for generations to come.</p><br/>
           <h1 className='text-xl font-bold text-[#064B1E] font-20 text-right'>Our Vision</h1><br/>
           <p className='text-xs'>We dream of a world where trees breathe freely and nature thrives alongside us. Every plant saved is a life preserved not just for the Earth, but for generations to come.</p><br/>
        </div>
        <div className='h-80 w-80'>
          <div class=" bg-cover h-80 w-80 rounded " style={{ backgroundImage: `url(${vision})` }}></div>
        </div>
    </div>
  </section>
  )
}

export default Home_sec5