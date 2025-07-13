import React from 'react'
import recycle from "../assets/recycle.jpg"
import dust from "../assets/dustbin.jpg"

function Home_sec3() {
  return (
    <section className='sec-con'>         
      <div className='py-30 px-50  max-sm:py-10 max-sm:px-10 max-md:px-10 '>
        <div>
          <h6 className='text-green-600'>our work</h6>
          <br/>
          <h1 className='text-4xl font-bold text-[#064B1E] font-20'>Indus Environs provide <br/> Best Leading Services</h1>
        </div>
        <br/>
        <br/>
        <div className='grid grid-cols-3 gap-4 max-sm:grid-cols-1 place-items-center'>
           <div className='p-4 bg-[#F6F4EB] transform transition-transform duration-300 hover:scale-105 cursor-pointer  rounded'>
             <div>
                <div class=" bg-cover h-20 w-20  rounded-full"style={{ backgroundImage: `url(${recycle})` }}></div>

                <h1>Dirty Recycling</h1>
                <hr className='w-20 m-1'/>
                <br/>
                <p className='text-xs text-[#777771]'>The environment isn’t just a backdrop to our lives — it is life. Every tree we plant, every plastic we avoid, every drop of water we save... it all matters. Our planet doesn’t need saving </p>
                <br/>
                <div class=" bg-cover h-30 w-auto rounded " style={{ backgroundImage: `url(${dust})` }} ></div>
             </div>
            </div>
           <div className='p-4 bg-[#F6F4EB] transform transition-transform duration-300 hover:scale-105 cursor-pointer rounded'>
              <div>
                <div class=" bg-cover h-20 w-20 rounded-full" style={{ backgroundImage: `url(${recycle})` }}></div>
                <h1>Dirty Recycling</h1>
                <hr className='w-20 m-1'/>
                <br/>
                <p className='text-xs text-[#777771]'>The environment isn’t just a backdrop to our lives — it is life. Every tree we plant, every plastic we avoid, every drop of water we save... it all matters. Our planet doesn’t need saving </p>
                
                <br/>
                <div class=" bg-cover h-30 w-auto rounded " style={{ backgroundImage: `url(${dust})` }} ></div>
                
             </div>
           </div>
           <div className='p-4 bg-[#F6F4EB] transform transition-transform duration-300 hover:scale-105 cursor-pointer rounded'>
           <div>
                <div class=" bg-cover h-20 w-20 rounded-full" style={{ backgroundImage: `url(${recycle})` }}></div>
                <h1>Dirty Recycling</h1>
                <hr className='w-20 m-1'/>
                <br/>
                <p className='text-xs text-[#777771]'>The environment isn’t just a backdrop to our lives — it is life. Every tree we plant, every plastic we avoid, every drop of water we save... it all matters. Our planet doesn’t need saving </p>
                <br/>
                <div class=" bg-cover h-30 w-auto rounded" style={{ backgroundImage: `url(${dust})` }} ></div>
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Home_sec3